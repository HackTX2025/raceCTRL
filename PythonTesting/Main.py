# simple_road_view.py
# Minimalistic black-and-white forward-road renderer.
# Requires: pygame
# Controls: Up/Down move, Left/Right rotate, +/- speed

import pygame
import math
import sys

# ---------- Parameters ----------
SCREEN_W, SCREEN_H = 800, 600
FPS = 60

SAMPLE_STEP = 0.5         # meters between dense samples
ROAD_WIDTH = 6.0          # meters
FORWARD_DISTANCE = 150.0  # max distance used elsewhere (meters)
LOOKAHEAD_METERS = 30.0   # <-- show the road until this fixed distance ahead (meters)

TURN_ANGLE_DEG = 10.0     # angle change threshold (still available, not used for lookahead)

CAMERA_HEIGHT = 0.8       # meters (eye height)
MIN_Z = 0.1               # avoid division by zero

# --- Field of view (horizontal) in degrees.
FOV_DEG = 60.0

# FOCAL will be computed (pixels) from FOV_DEG and SCREEN_W when the window is created.
FOCAL = None

# Where the horizon sits vertically (pixels). Will be set in main().
VIEWPORT_HORIZON = int(SCREEN_H * 0.5)

# ---------- Utility functions ----------
def dist(a, b):
    return math.hypot(a[0]-b[0], a[1]-b[1])

def lerp(a, b, t):
    return (a[0] + (b[0]-a[0])*t, a[1] + (b[1]-a[1])*t)

# Sample a polyline (list of points) into evenly spaced points
def sample_polyline(points, step=SAMPLE_STEP, closed=False):
    if len(points) < 2:
        return points[:]
    samples = []
    segs = []
    total = 0.0
    for i in range(len(points)-1 + (1 if closed else 0)):
        a = points[i]
        b = points[(i+1) % len(points)]
        l = dist(a,b)
        segs.append((a,b,l))
        total += l
    # iterate along segments and emit samples
    samples.append(points[0])
    s = step
    while s <= total + 1e-6:
        d = s
        acc = 0.0
        for (a,b,l) in segs:
            if acc + l >= d - 1e-9:
                t = (d - acc) / l
                samples.append(lerp(a,b,t))
                break
            acc += l
        s += step
    samples.append(points[-1])
    out = []
    prev = None
    for p in samples:
        if prev is None or dist(prev,p) > 1e-6:
            out.append(p)
            prev = p
    print(out)
    return out

# find closest index in dense samples to driver pos
def find_closest_index(samples, pos):
    best_i = 0
    best_d = float('inf')
    for i,p in enumerate(samples):
        d = dist(p,pos)
        if d < best_d:
            best_d = d
            best_i = i
    return best_i, best_d

# compute normalized tangent at a sample index using neighbors
def tangent_at(samples, idx):
    n = len(samples)
    if idx == 0:
        a = samples[0]
        b = samples[1]
    elif idx == n-1:
        a = samples[n-2]
        b = samples[n-1]
    else:
        a = samples[idx-1]
        b = samples[idx+1]
    vx = b[0] - a[0]
    vy = b[1] - a[1]
    L = math.hypot(vx,vy)
    if L == 0: return (1.0, 0.0)
    return (vx / L, vy / L)

# angle in degrees between two vectors
def angle_between_deg(u, v):
    ux,uy = u; vx,vy = v
    dot = ux*vx + uy*vy
    cross = ux*vy - uy*vx
    ang = math.degrees(math.atan2(cross, dot))
    return ang

# Walk forward from start_idx along samples until reaching next "turn" or distance limit
# (kept for compatibility; not used for fixed lookahead)
def forward_until_turn(samples, start_idx, max_distance=FORWARD_DISTANCE, turn_angle=TURN_ANGLE_DEG):
    n = len(samples)
    res_indices = []
    cum = 0.0
    prev = samples[start_idx]
    prev_tan = tangent_at(samples, start_idx)
    for i in range(start_idx, n):
        p = samples[i]
        segd = dist(prev, p)
        cum += segd
        res_indices.append(i)
        if cum >= max_distance:
            break
        # compute local tangent and angle to previous tangent
        cur_tan = tangent_at(samples, i)
        ang = abs(angle_between_deg(prev_tan, cur_tan))
        if ang >= turn_angle and i > start_idx + 2:
            # we've hit a turn
            break
        prev = p
        prev_tan = cur_tan
    return res_indices

# NEW: Walk forward from start_idx along samples until total forward distance >= lookahead_m
def forward_fixed_distance(samples, start_idx, lookahead_m=LOOKAHEAD_METERS):
    n = len(samples)
    res_indices = []
    cum = 0.0
    prev = samples[start_idx]
    for i in range(start_idx, n):
        p = samples[i]
        segd = dist(prev, p)
        cum += segd
        res_indices.append(i)
        if cum >= lookahead_m:
            break
        prev = p
    return res_indices

# Transform world point into camera frame where:
# - driver at origin
# - forward axis = +x in camera frame
# - lateral axis = +y (right)
def to_camera_frame(pt, driver_pos, driver_heading_rad):
    dx = pt[0] - driver_pos[0]
    dy = pt[1] - driver_pos[1]
    cos_t = math.cos(driver_heading_rad)
    sin_t = math.sin(driver_heading_rad)
    x_cam = cos_t * dx + sin_t * dy   # forward
    y_cam = -sin_t * dx + cos_t * dy  # right
    return x_cam, y_cam

# Project a 3D point (X=lateral, Z=forward) to screen pixels (centered)
def project_point(lateral, forward, screen_w, screen_h):
    # use the computed global FOCAL
    focal = FOCAL
    Z = max(forward, MIN_Z)
    sx = (focal * lateral / Z) + screen_w/2
    # closer points map LOWER than the horizon (so road is below horizon)
    sy = VIEWPORT_HORIZON + (focal * CAMERA_HEIGHT / Z)
    return int(sx), int(sy)

# Build left/right edge projection lists for drawing polygon
def build_road_polygon(samples, indices, driver_pos, heading, road_width, screen_w, screen_h):
    left_pts = []
    right_pts = []
    for i in indices:
        c = samples[i]
        tan = tangent_at(samples, i)
        # normal pointing to the right (perp to tangent)
        nx, ny = tan[1], -tan[0]  # rotate tangent 90deg cw
        half = road_width / 2.0
        left = (c[0] - nx*half, c[1] - ny*half)
        right = (c[0] + nx*half, c[1] + ny*half)
        # camera frame -> forward and lateral
        lf = to_camera_frame(left, driver_pos, heading)
        rf = to_camera_frame(right, driver_pos, heading)
        # forward is x_cam, lateral is y_cam
        if lf[0] <= 0 and rf[0] <= 0:
            # both behind camera: skip
            continue
        # project to screen
        px_left = project_point(lf[1], lf[0], screen_w, screen_h)
        px_right = project_point(rf[1], rf[0], screen_w, screen_h)
        left_pts.append(px_left)
        right_pts.append(px_right)

    # need valid edges
    if not left_pts or not right_pts:
        return []

    # nearest points are the first entries (we iterate indices from near->far).
    # pick nearest left/right X to drop down to the bottom of the screen
    nearest_left_x, _ = left_pts[0]
    nearest_right_x, _ = right_pts[0]
    bottom_left = (nearest_left_x, screen_h)
    bottom_right = (nearest_right_x, screen_h)

    # Build polygon so it goes: far-left -> ... -> near-left -> bottom-left -> bottom-right -> near-right -> ... -> far-right
    poly = left_pts[::-1] + [bottom_left, bottom_right] + right_pts

    return poly, left_pts, right_pts


# ---------- Example track (you can replace this with loaded JSON/SVG-exported polyline) ----------
def make_example_track():
    # simple loop: a rectangle with a semicircular end on each side
    pts = []
    # straight rightwards
    for x in range(0, 80, 4):
        pts.append((x, 0.0))
    # semicircle up
    cx, cy, r = 80, 20, 20
    for t in range(0, 181, 10):
        a = math.radians(t)
        pts.append((cx + r * math.cos(a), cy + r * math.sin(a)))
    # straight leftwards
    for x in range(80, -1, -4):
        pts.append((x, 40.0))
    # semicircle down
    cx, cy, r = 0, 20, 20
    for t in range(180, 361, 10):
        a = math.radians(t)
        pts.append((cx + r * math.cos(a), cy + r * math.sin(a)))
    return pts

# ---------- Main program ----------
def main():
    global VIEWPORT_HORIZON, FOCAL
    pygame.init()
    screen = pygame.display.set_mode((SCREEN_W, SCREEN_H))
    clock = pygame.time.Clock()
    pygame.display.set_caption("Simplified Road Ahead View (B/W)")

    # compute horizon and focal from FOV
    VIEWPORT_HORIZON = int(SCREEN_H * 0.75)
    # compute focal length in pixels from horizontal FOV:
    # focal = (screen_width / 2) / tan(fov/2)
    FOCAL = (SCREEN_W / 2.0) / math.tan(math.radians(FOV_DEG / 2.0))

    # build track
    raw_track = make_example_track()
    samples = sample_polyline(raw_track, step=SAMPLE_STEP, closed=True)

    # initial driver position (on track)
    driver_pos = [10.0, -2.0]   # x,y meters
    driver_heading = math.radians(0)  # facing along +x
    speed = 0.0

    running = True
    while running:
        dt = clock.tick(FPS) / 1000.0
        for ev in pygame.event.get():
            if ev.type == pygame.QUIT:
                running = False
            elif ev.type == pygame.KEYDOWN:
                if ev.key == pygame.K_ESCAPE:
                    running = False
                elif ev.key == pygame.K_PLUS or ev.key == pygame.K_KP_PLUS:
                    speed += 1.0
                elif ev.key == pygame.K_MINUS or ev.key == pygame.K_KP_MINUS:
                    speed = max(0.0, speed - 1.0)

        # keyboard-based movement
        keys = pygame.key.get_pressed()
        if keys[pygame.K_UP]:
            speed += 5.0 * dt
        if keys[pygame.K_DOWN]:
            speed -= 5.0 * dt
        if keys[pygame.K_LEFT]:
            driver_heading -= 1.4 * dt * 3 # radians per second
        if keys[pygame.K_RIGHT]:
            driver_heading += 1.4 * dt * 3

        # clamp speed
        speed = max(-10.0, min(20.0, speed))

        # update position (forward axis based on heading)
        driver_pos[0] += math.cos(driver_heading) * speed * dt
        driver_pos[1] += math.sin(driver_heading) * speed * dt

        # find closest sample and forward indices until fixed lookahead distance
        idx, d0 = find_closest_index(samples, tuple(driver_pos))
        indices = forward_fixed_distance(samples, idx, lookahead_m=LOOKAHEAD_METERS)

        # draw
        screen.fill((0,0,0))  # black background

        # road polygon
        poly_info = build_road_polygon(samples, indices, tuple(driver_pos), driver_heading, ROAD_WIDTH, SCREEN_W, SCREEN_H)
        if poly_info:
            poly, left_pts, right_pts = poly_info
            # clip points that are off-screen (pygame will skip)
            if len(poly) >= 3:
                pygame.draw.polygon(screen, (255,255,255), poly)  # white road fill
                # centerline (thin black dashed-ish)
                center_pts = []
                for i in indices:
                    c = samples[i]
                    cf = to_camera_frame(c, tuple(driver_pos), driver_heading)
                    if cf[0] <= 0:
                        continue
                    center_pts.append(project_point(cf[1], cf[0], SCREEN_W, SCREEN_H))
                if len(center_pts) >= 2:
                    pygame.draw.lines(screen, (0,0,0), False, center_pts, 2)

        # HUD: show driver coords and lookahead
        font = pygame.font.SysFont(None, 18)
        txt = font.render(f"pos=({driver_pos[0]:.1f},{driver_pos[1]:.1f}) heading={math.degrees(driver_heading)%360:.1f}° speed={speed:.1f} m/s idx={idx} LOOKAHEAD={LOOKAHEAD_METERS}m FOV={FOV_DEG}°", True, (255,255,255))
        screen.blit(txt, (8,8))

        pygame.display.flip()

    pygame.quit()
    sys.exit()

if __name__ == "__main__":
    main()

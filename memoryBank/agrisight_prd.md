# AgriSight Product Requirements Document (PRD)
## HackTX 2025 Hackathon Submission

---

## Executive Summary

**Product Name:** AgriSight  
**Tagline:** Empowering Farmers with Financial Foresight  
**Duration:** 7 hours  
**Team Size:** 4 members  
**Target Prizes:** Best Capital One Hack ($250/member), Best Overall ($4,000), Best Design ($1,000)

**Core Value Proposition:** AgriSight translates satellite-based crop health data into actionable financial guidance, helping farmers make smarter decisions about savings, loans, and resource allocation.

---

## Team Structure & Responsibilities

### Frontend Team (Jeslyn & Jace)
- **Primary Tech:** React, Leaflet/Mapbox GL JS, TailwindCSS
- **Deliverables:** Interactive map UI, financial dashboard, recommendation cards
- **Time Allocation:** 6 hours dev + 1 hour integration/polish

### Backend Team (Fellipe & Atharv)
- **Primary Tech:** Node.js/Express (or Python Flask), REST APIs
- **Deliverables:** NDVI processing, API integrations (OpenWeather, Nessie), recommendation engine
- **Time Allocation:** 6 hours dev + 1 hour integration/testing

---

## Technical Architecture

### System Overview
```
User Interface (React)
    ↓
Backend API (Node/Flask)
    ↓
┌─────────────┬──────────────┬─────────────┐
│   NDVI      │   Weather    │  Financial  │
│ Processing  │     API      │     API     │
│  (Sentinel) │(OpenWeather) │   (Nessie)  │
└─────────────┴──────────────┴─────────────┘
    ↓
Recommendation Engine
```

### Tech Stack Details

| Component | Technology | Justification |
|-----------|-----------|---------------|
| **Frontend Framework** | React 18 with Vite | Fast setup, component reusability |
| **Styling** | TailwindCSS | Rapid UI development |
| **Mapping** | Leaflet.js | Lightweight, free, NDVI overlay support |
| **Backend** | Node.js + Express | Team familiarity, fast prototyping |
| **NDVI Data** | Pre-processed Sentinel-2 GeoTIFF | Avoid processing delays |
| **Weather API** | OpenWeatherMap (free tier) | 1000 calls/day, simple JSON |
| **Hosting** | Localhost demo | No deployment overhead |

---

## Hour-by-Hour Timeline

### Hour 0-1: Setup & Architecture
**All Team Members**
- [ ] Initialize Git repository
- [ ] Set up project structure
- [ ] Create API keys (OpenWeather, Nessie)
- [ ] Download sample Sentinel-2 NDVI tile
- [ ] Kickoff meeting: confirm roles and endpoints

**Frontend Team**
- [ ] Initialize React app with Vite
- [ ] Install dependencies (leaflet, axios, tailwindcss, lucide-react)
- [ ] Create basic layout structure

**Backend Team**
- [ ] Initialize Express server
- [ ] Set up CORS and middleware
- [ ] Create endpoint scaffolding (`/api/ndvi`, `/api/weather`, `/api/financial`, `/api/recommendation`)

---

### Hour 1-3: Core Feature Development

#### Frontend (Jeslyn & Jace)

**Hour 1-2: Map Component**
- [ ] Implement Leaflet map with base layer (OpenStreetMap)
- [ ] Create NDVI overlay layer (accepts GeoJSON polygon + color gradient)
- [ ] Add farm boundary selection (hardcoded demo coordinates)
- [ ] Color scheme: Red (#FF4444) → Yellow (#FFD700) → Green (#44FF44)
- [ ] Add zoom controls and center on farm location

**Hour 2-3: Dashboard Panels**
- [ ] **Health Panel:** Display NDVI score, status badge, timestamp
- [ ] **Weather Panel:** 7-day forecast cards (temp, rainfall icons)
- [ ] **Financial Panel:** Mock account balance, last 3 transactions
- [ ] Responsive grid layout (map 60%, panels 40%)
- [ ] Add loading states for each panel

#### Backend (Fellipe & Atharv)

**Hour 1-2: NDVI Processing (Fellipe)**
- [ ] Load pre-processed Sentinel-2 tile (static GeoJSON or TIFF sample)
- [ ] Extract sample farm polygon (hardcoded Texas coordinates: ~30.2°N, -97.7°W)
- [ ] Calculate mean NDVI: `(NIR - Red) / (NIR + Red)` OR use pre-calculated value
- [ ] Categorize health: Green (>0.6), Yellow (0.3-0.6), Red (<0.3)
- [ ] Return JSON: `{ ndvi: 0.52, health: "moderate", coordinates: [...] }`
- [ ] Endpoint: `GET /api/ndvi?farmId=demo1`

**Hour 1-2: API Integrations (Atharv)**
- [ ] **OpenWeatherMap:** Fetch 7-day forecast for Austin, TX
  - Parse: `daily[].temp.day`, `daily[].rain`
  - Calculate rainfall deficit vs. 30mm weekly average
  - Endpoint: `GET /api/weather?lat=30.2&lon=-97.7`
  
- [ ] **Nessie API:** Fetch mock customer data
  - Get account balance: `GET /accounts/{accountId}`
  - Get last 5 transactions: `GET /accounts/{accountId}/purchases`
  - Endpoint: `GET /api/financial?customerId=demo`

**Hour 2-3: Recommendation Engine (Both)**
- [ ] Implement decision tree logic:
```javascript
function getRecommendation(ndvi, rainfallDeficit, balance) {
  if (ndvi < 0.3 && rainfallDeficit < -10) {
    return {
      severity: "high",
      action: "Apply for $500 emergency microloan",
      reasoning: "Severe crop stress + drought conditions",
      confidence: 0.85
    };
  } else if (ndvi < 0.5) {
    return {
      severity: "medium",
      action: "Save additional $50 this week",
      reasoning: "Moderate stress detected",
      confidence: 0.72
    };
  } else {
    return {
      severity: "low",
      action: "Maintain current savings plan",
      reasoning: "Crops healthy, weather stable",
      confidence: 0.90
    };
  }
}
```
- [ ] Endpoint: `POST /api/recommendation` (accepts NDVI + weather + balance)
- [ ] Add mock data fallbacks for all APIs

---

### Hour 3-5: Integration & Polish

#### Frontend (Jeslyn & Jace)

**Hour 3-4: Recommendation Card**
- [ ] Display recommendation text with severity color-coding
  - High (red border), Medium (yellow border), Low (green border)
- [ ] Show confidence score as percentage
- [ ] Add reasoning text in smaller font
- [ ] Implement loading states and error handling
- [ ] Add "Refresh Insight" button to re-fetch recommendation

**Hour 4-5: UI Polish & Responsive Design**
- [ ] Add smooth transitions between data updates (CSS transitions)
- [ ] Ensure mobile responsiveness (test at 375px, 768px, 1024px)
- [ ] Add icons from Lucide React (cloud for weather, dollar for finance, leaf for health)
- [ ] Implement skeleton loaders for async data
- [ ] Polish typography, spacing, shadows
- [ ] Add Capital One blue (#2563EB) as accent color

#### Backend (Fellipe & Atharv)

**Hour 3-4: Testing & Error Handling (Both)**
- [ ] Add try-catch blocks for all API calls
- [ ] Implement request caching (store weather/NDVI for 1 hour)
- [ ] Create comprehensive mock data fallbacks
- [ ] Test all endpoints with Postman/Thunder Client
- [ ] Verify CORS settings for frontend connection

**Hour 4-5: Data Integration & Optimization (Atharv)**
- [ ] Ensure all endpoints return consistent JSON structure
- [ ] Add timestamp to all responses
- [ ] Optimize NDVI calculation (if using real processing)
- [ ] Create health status endpoint: `GET /api/status` (returns system health)
- [ ] Add request logging for debugging

---

### Hour 5-6: End-to-End Testing & Demo Prep

**All Team Members**
- [ ] Integration testing: full user flow
- [ ] Performance check: ensure <2s load time for all data
- [ ] Create demo script with 3 scenarios (healthy, moderate, critical)
- [ ] Prepare backup mock data for offline demo
- [ ] Screenshot key screens for pitch deck

**Frontend Team**
- [ ] Add About/Credits page (1 paragraph mission + tech logos)
- [ ] Final UI polish: alignment, spacing, color consistency
- [ ] Test on different browsers (Chrome, Firefox, Safari)
- [ ] Verify map interactions work smoothly
- [ ] Test with mock backend data (in case APIs fail)

**Backend Team**
- [ ] Write brief API documentation (endpoint list with params)
- [ ] Ensure server runs on stable port (localhost:3001)
- [ ] Create `.env.example` file with required API keys
- [ ] Test server restart (ensure no crashes)
- [ ] Verify all mock responses are realistic

---

### Hour 6-7: Pitch Preparation & Buffer

**Pitch Deck (All)**
- [ ] **Slide 1:** Problem statement (farmers lack financial tools)
- [ ] **Slide 2:** Solution overview (AgriSight screenshot)
- [ ] **Slide 3:** Live demo walkthrough
- [ ] **Slide 4:** Tech stack + Capital One integration
- [ ] **Slide 5:** Impact potential (scalability, real-world use)

**Rehearsal**
- [ ] Practice 2-minute pitch (time it!)
- [ ] Assign speaker roles (intro, demo, tech, impact)
- [ ] Prepare answers for common questions:
  - "How accurate is NDVI?" → "We use NASA Sentinel-2 data, industry standard"
  - "Can this scale?" → "Yes, satellite data is free and global"
  - "Why Capital One?" → "Financial inclusion is core to our mission"

**Buffer Time**
- [ ] Fix critical bugs
- [ ] Polish most visible features (map, recommendation card)
- [ ] Record backup demo video (if live demo fails)
- [ ] Charge all laptops, test HDMI connection

---

## Core Features Specification

### 1. Interactive NDVI Map

**Requirements:**
- Display single farm boundary (polygon)
- Color gradient overlay based on NDVI value:
  - `NDVI > 0.6`: Green (#44FF44) - Healthy
  - `0.3 ≤ NDVI ≤ 0.6`: Yellow (#FFD700) - Moderate
  - `NDVI < 0.3`: Red (#FF4444) - Stressed
- Show NDVI numeric value in health card
- Zoom controls and pan functionality
- Tooltip on hover showing coordinates

**Data Format:**
```json
{
  "type": "FeatureCollection",
  "features": [{
    "type": "Feature",
    "geometry": {
      "type": "Polygon",
      "coordinates": [[
        [-97.75, 30.25],
        [-97.74, 30.25],
        [-97.74, 30.24],
        [-97.75, 30.24],
        [-97.75, 30.25]
      ]]
    },
    "properties": {
      "ndvi": 0.52,
      "health": "moderate",
      "area_hectares": 12.5
    }
  }]
}
```

**Leaflet Implementation Notes:**
```javascript
// Add colored polygon based on NDVI
const getColor = (ndvi) => {
  if (ndvi > 0.6) return '#44FF44';
  if (ndvi > 0.3) return '#FFD700';
  return '#FF4444';
};

L.geoJSON(farmData, {
  style: (feature) => ({
    fillColor: getColor(feature.properties.ndvi),
    weight: 2,
    opacity: 1,
    color: 'white',
    fillOpacity: 0.7
  })
}).addTo(map);
```

### 2. Weather Dashboard

**Requirements:**
- Show 7-day forecast in card format
- Display: Date, Temperature (°F), Rainfall (mm), Weather icon
- Highlight days with rainfall < 5mm (drought risk indicator)
- Calculate and display rainfall deficit: `forecasted_total - 30mm weekly average`
- Show alert badge if deficit > 10mm

**API Response Format:**
```json
{
  "location": "Austin, TX",
  "forecast": [
    {
      "date": "2025-10-19",
      "temp": 78,
      "weather": { "main": "Rain", "icon": "10d" },
      "rain": 2.5
    },
    {
      "date": "2025-10-20",
      "temp": 82,
      "weather": { "main": "Clear", "icon": "01d" },
      "rain": 0
    }
  ],
  "rainfall_total": 17.5,
  "rainfall_deficit": -12.5,
  "alert": "Low rainfall expected next 7 days"
}
```

**OpenWeatherMap Integration:**
```javascript
// GET https://api.openweathermap.org/data/2.5/onecall
// ?lat=30.2&lon=-97.7&exclude=hourly,minutely&units=imperial&appid={API_KEY}

const processWeather = (data) => {
  const forecast = data.daily.slice(0, 7).map(day => ({
    date: new Date(day.dt * 1000).toLocaleDateString(),
    temp: Math.round(day.temp.day),
    weather: day.weather[0],
    rain: day.rain || 0
  }));
  
  const totalRain = forecast.reduce((sum, day) => sum + day.rain, 0);
  const deficit = totalRain - 30; // 30mm weekly average
  
  return { forecast, rainfall_total: totalRain, rainfall_deficit: deficit };
};
```

### 3. Financial Summary Panel

**Requirements:**
- Display account balance (large, prominent typography)
- Show last 3 transactions (date, description, amount)
- Color-code transactions (green for deposits, red for withdrawals)
- Display "Mock Account" disclaimer badge
- Show account nickname

**Nessie API Integration:**
```javascript
// GET http://api.nessieisreal.com/accounts/{accountId}?key={apiKey}
// Response:
{
  "_id": "67890",
  "type": "Savings",
  "nickname": "Farm Savings Account",
  "balance": 1250.50,
  "customer_id": "demo123"
}

// GET http://api.nessieisreal.com/accounts/{accountId}/purchases?key={apiKey}
// Response:
[
  {
    "_id": "abc123",
    "description": "Fertilizer Supply Co",
    "amount": 45.00,
    "transaction_date": "2025-10-15"
  },
  {
    "_id": "abc124",
    "description": "Equipment Rental",
    "amount": 120.00,
    "transaction_date": "2025-10-14"
  }
]
```

**Display Format:**
```
FINANCIAL SUMMARY
━━━━━━━━━━━━━━━━━━━━━
Current Balance
$1,250.50

Recent Transactions
• Oct 15 | Fertilizer Supply Co | -$45.00
• Oct 14 | Equipment Rental    | -$120.00
• Oct 13 | Seed Purchase       | -$230.00

ℹ Mock Account - Demo Data
```

### 4. Recommendation Engine

**Input Variables:**
- `ndvi` (float 0-1)
- `rainfall_deficit` (mm)
- `account_balance` (USD)

**Decision Matrix:**

| NDVI Range | Rainfall Deficit | Balance | Recommendation | Severity |
|------------|------------------|---------|----------------|----------|
| < 0.3 | < -10mm | Any | Apply for $500 emergency microloan | High |
| < 0.3 | ≥ -10mm | < $500 | Save extra $50, prepare for yield loss | High |
| 0.3-0.5 | < -10mm | Any | Reduce spending, save $30/week | Medium |
| 0.3-0.5 | ≥ -10mm | Any | Monitor conditions, maintain savings | Medium |
| > 0.5 | Any | > $1000 | Healthy — consider investing in equipment | Low |
| > 0.5 | Any | < $1000 | Healthy — build emergency fund to $1500 | Low |

**Output Format:**
```json
{
  "severity": "medium",
  "action": "Save additional $50 this week",
  "reasoning": "Crop health shows moderate stress (NDVI: 0.42). Rainfall 12mm below normal. Building reserves recommended.",
  "confidence": 0.78,
  "timestamp": "2025-10-18T14:30:00Z"
}
```

**Implementation:**
```javascript
function getRecommendation(ndvi, rainfallDeficit, balance) {
  let severity, action, reasoning, confidence;
  
  // Critical condition
  if (ndvi < 0.3 && rainfallDeficit < -10) {
    severity = "high";
    action = "Apply for $500 emergency microloan";
    reasoning = `Severe crop stress (NDVI: ${ndvi.toFixed(2)}) combined with drought conditions (${Math.abs(rainfallDeficit)}mm deficit). Immediate financial preparation needed.`;
    confidence = 0.85;
  }
  // Moderate stress + drought
  else if (ndvi < 0.5 && rainfallDeficit < -10) {
    severity = "medium";
    action = "Reduce spending and save $30/week";
    reasoning = `Moderate crop stress (NDVI: ${ndvi.toFixed(2)}) and low rainfall. Build financial buffer for potential yield reduction.`;
    confidence = 0.72;
  }
  // Moderate stress only
  else if (ndvi < 0.5) {
    severity = "medium";
    action = "Monitor conditions and maintain current savings plan";
    reasoning = `Crop health shows moderate stress (NDVI: ${ndvi.toFixed(2)}). Weather conditions stable. Continue monitoring.`;
    confidence = 0.68;
  }
  // Healthy with good savings
  else if (balance > 1000) {
    severity = "low";
    action = "Crops healthy — consider investing in farm equipment or inputs";
    reasoning = `Excellent crop health (NDVI: ${ndvi.toFixed(2)}) and strong financial position. Opportunity for strategic investment.`;
    confidence = 0.90;
  }
  // Healthy but building reserves
  else {
    severity = "low";
    action = "Maintain current plan and build emergency fund to $1,500";
    reasoning = `Good crop health (NDVI: ${ndvi.toFixed(2)}). Focus on building financial resilience.`;
    confidence = 0.82;
  }
  
  return {
    severity,
    action,
    reasoning,
    confidence,
    timestamp: new Date().toISOString()
  };
}
```

---

## API Endpoints Specification

### Backend Routes

#### `GET /api/ndvi`
**Query Params:** `farmId` (default: "demo1")  
**Response:**
```json
{
  "farmId": "demo1",
  "ndvi": 0.52,
  "health": "moderate",
  "timestamp": "2025-10-18T14:30:00Z",
  "geometry": {
    "type": "Polygon",
    "coordinates": [[
      [-97.75, 30.25],
      [-97.74, 30.25],
      [-97.74, 30.24],
      [-97.75, 30.24],
      [-97.75, 30.25]
    ]]
  },
  "area_hectares": 12.5
}
```

#### `GET /api/weather`
**Query Params:** `lat=30.2&lon=-97.7`  
**Response:**
```json
{
  "location": "Austin, TX",
  "forecast": [
    {
      "date": "2025-10-19",
      "temp": 78,
      "weather": { "main": "Rain", "icon": "10d" },
      "rain": 2.5
    }
  ],
  "rainfall_total": 17.5,
  "rainfall_deficit": -12.5,
  "alert": "Low rainfall expected next 7 days",
  "timestamp": "2025-10-18T14:30:00Z"
}
```

#### `GET /api/financial`
**Query Params:** `customerId=demo`  
**Response:**
```json
{
  "customerId": "demo123",
  "accountId": "67890",
  "nickname": "Farm Savings Account",
  "balance": 1250.50,
  "transactions": [
    {
      "date": "2025-10-15",
      "description": "Fertilizer Supply Co",
      "amount": -45.00
    },
    {
      "date": "2025-10-14",
      "description": "Equipment Rental",
      "amount": -120.00
    },
    {
      "date": "2025-10-13",
      "description": "Seed Purchase",
      "amount": -230.00
    }
  ],
  "timestamp": "2025-10-18T14:30:00Z"
}
```

#### `POST /api/recommendation`
**Request Body:**
```json
{
  "ndvi": 0.52,
  "rainfallDeficit": -12.5,
  "balance": 1250.50
}
```
**Response:**
```json
{
  "severity": "medium",
  "action": "Save additional $50 this week",
  "reasoning": "Moderate crop stress (NDVI: 0.52). Rainfall 12mm below normal. Building reserves recommended.",
  "confidence": 0.78,
  "timestamp": "2025-10-18T14:30:00Z"
}
```

---

## UI/UX Design Specifications

### Color Palette
- **Primary:** #2563EB (Capital One Blue)
- **Success:** #10B981 (Healthy crops)
- **Warning:** #F59E0B (Moderate stress)
- **Danger:** #EF4444 (Critical stress)
- **Background:** #F9FAFB
- **Card Background:** #FFFFFF
- **Text Primary:** #111827
- **Text Secondary:** #6B7280

### Typography
- **Headings:** Inter, sans-serif (font-weight: 600-700)
- **Body:** Inter, sans-serif (font-weight: 400)
- **Monospace (NDVI values):** JetBrains Mono or system monospace

### Layout Structure

```
┌─────────────────────────────────────────────────────────┐
│  🌾 AgriSight          [Dashboard] [About]              │
├───────────────────────┬─────────────────────────────────┤
│                       │  CROP HEALTH                    │
│                       │  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│   Interactive         │  🌿 NDVI: 0.52                  │
│   NDVI Map            │  🟡 Status: Moderate            │
│   (Leaflet)           │  🕐 Updated: 2h ago             │
│                       │                                 │
│   [Farm Polygon       ├─────────────────────────────────┤
│    with color         │  WEATHER FORECAST               │
│    overlay showing    │  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│    health gradient]   │  [7-day forecast cards]         │
│                       │  Oct 19 | 78°F | 🌧 2.5mm      │
│   Zoom: [+] [-]       │  Oct 20 | 82°F | ☀️ 0mm        │
│   Legend:             │  ...                            │
│   🟢 Healthy          │  ⚠️ Rainfall 12mm below normal  │
│   🟡 Moderate         │                                 │
│   🔴 Stressed         ├─────────────────────────────────┤
│                       │  FINANCIAL SUMMARY              │
│                       │  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                       │  Current Balance                │
│                       │  $1,250.50                      │
│                       │                                 │
│                       │  Recent Transactions            │
│                       │  • Oct 15 | Fertilizer | -$45   │
│                       │  • Oct 14 | Equipment  | -$120  │
│                       │  • Oct 13 | Seeds      | -$230  │
│                       │  ℹ️ Mock Account                 │
├───────────────────────┴─────────────────────────────────┤
│  RECOMMENDATION                                         │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│  🟡 Save additional $50 this week                       │
│  Moderate crop stress (NDVI: 0.52). Rainfall 12mm       │
│  below normal. Building reserves recommended.           │
│  Confidence: 78%                                        │
│  [🔄 Refresh Insight]                                   │
└─────────────────────────────────────────────────────────┘
```

### Component Hierarchy (React)
```jsx
<App>
  <Header>
    <Logo />
    <Navigation />
  </Header>
  
  <Dashboard>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {/* Map takes 2 columns on large screens */}
      <div className="lg:col-span-2">
        <MapView farmId="demo1" />
      </div>
      
      {/* Right panel takes 1 column */}
      <div className="space-y-4">
        <CropHealthCard ndvi={0.52} health="moderate" />
        <WeatherCard forecast={weatherData} />
        <FinancialCard balance={1250.50} transactions={txns} />
      </div>
    </div>
    
    <RecommendationBanner 
      severity="medium"
      action="Save additional $50 this week"
      reasoning="..."
      confidence={0.78}
    />
  </Dashboard>
  
  <Footer />
</App>
```

### Card Component Template
```jsx
const Card = ({ title, children, icon }) => (
  <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
    <div className="flex items-center gap-2 mb-4 pb-3 border-b">
      {icon}
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    </div>
    {children}
  </div>
);
```

---

## Risk Mitigation & Contingencies

### Critical Risks

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|------------|
| API rate limits hit | Medium | High | Cache responses for 1 hour, prepare mock fallbacks |
| NDVI processing too slow | Low | Medium | Use pre-processed static GeoJSON file |
| Frontend-backend integration issues | High | High | Define API contract in first 30 min, use mock data initially |
| Nessie API downtime | Low | Medium | Store 3 sample responses locally as fallback |
| Time runs short | Medium | High | Prioritize map + recommendation, cut extras |

### Backup Plans
1. **If APIs fail during demo:** Switch to hardcoded mock data (prepare 3 scenarios)
2. **If map rendering breaks:** Show static image with NDVI overlay
3. **If time runs short at Hour 5:** Cut About page, focus on core dashboard
4. **If Nessie API unavailable:** Use local JSON file with mock transactions

### Mock Data Preparation (Do in Hour 0)
```javascript
// mockData.js
export const mockNDVI = {
  farmId: "demo1",
  ndvi: 0.52,
  health: "moderate",
  geometry: { /* ... */ }
};

export const mockWeather = {
  forecast: [/* 7 days */],
  rainfall_deficit: -12.5
};

export const mockFinancial = {
  balance: 1250.50,
  transactions: [/* 3 txns */]
};
```

---

## Testing Strategy

### Integration Tests (Required)
- [ ] **Happy Path:** Load page → See map with overlay → All 3 cards populate → Recommendation appears
- [ ] **API Failure:** Disconnect internet → Verify fallback mock data loads
- [ ] **Different NDVI Scenarios:**
  - Healthy (0.7) → Green overlay, "maintain plan" recommendation
  - Moderate (0.45) → Yellow overlay, "save $50" recommendation
  - Stressed (0.25) → Red overlay, "apply for loan" recommendation
- [ ] **Cross-browser:** Test on Chrome, Firefox (minimum)
- [ ] **Responsive:** Test at 375px (mobile), 768px (tablet), 1440px (desktop)

### Demo Scenarios (Prepare 3)

**Scenario 1: Healthy Farm**
- NDVI: 0.68
- Rainfall: Normal (deficit: -2mm)
- Balance: $1,800
- Expected: Green overlay, "Consider investing in equipment"

**Scenario 2: Moderate Stress**
- NDVI: 0.45
- Rainfall: Low (deficit: -15mm)
- Balance: $950
- Expected: Yellow overlay, "Save $30/week"

**Scenario 3: Critical Condition**
- NDVI: 0.28
- Rainfall: Severe drought (deficit: -22mm)
- Balance: $400
- Expected: Red overlay, "Apply for emergency microloan"

### Pre-Demo Checklist (Hour 6:30)
- [ ] All APIs responding (or mocks working)
- [ ] Map loads in <2 seconds
- [ ] All 3 cards display data
- [ ] Recommendation updates when data changes
- [ ] No console errors
- [ ] Laptop charged, backup charger available
- [ ] Demo runs smoothly 3 times in a row

---

## Judging Criteria Alignment

### Best Capital One Hack (Primary Target)
**Why AgriSight Wins:**
- ✅ **Innovative fintech solution:** Connects agriculture to financial planning (novel application domain)
- ✅ **Uses Nessie API:** Mock banking data directly drives recommendations
- ✅ **Accessibility:** Visual interface makes financial advice understandable
- ✅ **Financial literacy:** Educates farmers on proactive savings and risk management
- ✅ **Real-world impact:** Addresses financial inclusion for 500M+ farmers globally

**Talking Points:**
- "We're not just showing farmers their balance — we're translating crop health into financial actions"
- "Nessie API
'use client'

import React, { useState, useEffect } from 'react';

interface Farm {
  id: string;
  name: string;
  ndvi: number;
  health: 'healthy' | 'moderate' | 'stressed';
  area: number;
  coords: { x: number; y: number };
}

const farms: Farm[] = [
  { id: '1', name: 'ABY-01', ndvi: 0.52, health: 'moderate', area: 45, coords: { x: 25, y: 30 } },
  { id: '2', name: 'BAY-02', ndvi: 0.72, health: 'healthy', area: 62, coords: { x: 55, y: 45 } },
  { id: '3', name: 'CED-03', ndvi: 0.38, health: 'stressed', area: 38, coords: { x: 35, y: 60 } },
  { id: '4', name: 'DEL-04', ndvi: 0.68, health: 'healthy', area: 51, coords: { x: 65, y: 25 } },
  { id: '5', name: 'ECH-05', ndvi: 0.45, health: 'moderate', area: 43, coords: { x: 45, y: 50 } },
];

const healthStatus = {
  healthy: { color: '#00FF41', label: 'OPTIMAL' },
  moderate: { color: '#FFB800', label: 'MODERATE' },
  stressed: { color: '#FF3864', label: 'CRITICAL' },
};

export const FarmMap: React.FC = () => {
  const [selectedFarm, setSelectedFarm] = useState<Farm | null>(null);
  const [pulseNodes, setPulseNodes] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseNodes([Math.floor(Math.random() * farms.length)]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="border h-full relative overflow-hidden"
      style={{
        backgroundColor: 'var(--bg-card)',
        borderColor: 'var(--border-primary)'
      }}
    >
      {/* Scanline effect */}
      <div className="absolute inset-0 scanline opacity-50" />

      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Globe-like visualization */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Central sphere effect */}
        <div
          className="absolute rounded-full border-2"
          style={{
            width: '500px',
            height: '500px',
            borderColor: 'rgba(0, 255, 65, 0.4)',
            boxShadow: '0 0 80px rgba(0, 255, 65, 0.2), inset 0 0 80px rgba(0, 255, 65, 0.1)',
          }}
        >
          {/* Latitude lines */}
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={`lat-${i}`}
              className="absolute left-0 right-0 border-t"
              style={{ top: `${20 + i * 15}%`, borderColor: 'rgba(0, 255, 65, 0.25)' }}
            />
          ))}

          {/* Longitude lines */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={`long-${i}`}
              className="absolute top-0 bottom-0 border-l"
              style={{ left: `${10 + i * 15}%`, borderColor: 'rgba(0, 255, 65, 0.25)' }}
            />
          ))}

          {/* Farm nodes */}
          {farms.map((farm, index) => {
            const isPulsing = pulseNodes.includes(index);
            return (
              <div
                key={farm.id}
                className="absolute cursor-pointer group transition-all"
                style={{
                  left: `${farm.coords.x}%`,
                  top: `${farm.coords.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                onClick={() => setSelectedFarm(selectedFarm?.id === farm.id ? null : farm)}
              >
                {/* Node pulse */}
                {isPulsing && (
                  <div
                    className="absolute inset-0 rounded-full animate-ping"
                    style={{
                      width: '20px',
                      height: '20px',
                      backgroundColor: healthStatus[farm.health].color,
                      opacity: 0.5,
                      transform: 'translate(-50%, -50%)',
                      left: '50%',
                      top: '50%',
                    }}
                  />
                )}

                {/* Node */}
                <div
                  className="w-4 h-4 rounded-full border-2 transition-all group-hover:scale-150"
                  style={{
                    backgroundColor: healthStatus[farm.health].color,
                    borderColor: healthStatus[farm.health].color,
                    boxShadow: `0 0 20px ${healthStatus[farm.health].color}, 0 0 40px ${healthStatus[farm.health].color}60`,
                  }}
                />

                {/* Connection lines to center */}
                <svg
                  className="absolute pointer-events-none"
                  style={{
                    left: '50%',
                    top: '50%',
                    width: '100px',
                    height: '100px',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <line
                    x1="50"
                    y1="50"
                    x2={`${50 - farm.coords.x / 2}`}
                    y2={`${50 - farm.coords.y / 2}`}
                    stroke={healthStatus[farm.health].color}
                    strokeWidth="1.5"
                    opacity="0.4"
                    className="group-hover:opacity-80 transition-opacity"
                  />
                </svg>

                {/* Label */}
                <div
                  className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    fontSize: '0.688rem',
                    color: healthStatus[farm.health].color,
                  }}
                >
                  <div className="mono">{farm.name}</div>
                </div>
              </div>
            );
          })}

          {/* Center indicator */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div
              className="w-5 h-5 rounded-full border-2 animate-pulse"
              style={{
                borderColor: 'var(--accent-green)',
                boxShadow: '0 0 30px #00FF41, 0 0 60px #00FF4180'
              }}
            />
          </div>
        </div>

        {/* Corner coordinates */}
        <div className="absolute top-4 left-4 text-text-secondary mono" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
          <div className="glow-green">LAT: 30.2672° N</div>
          <div className="glow-green">LONG: 97.7431° W</div>
        </div>

        <div className="absolute top-4 right-4 text-text-secondary mono" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
          <div className="text-right glow-green">SCALE: 1:50000</div>
          <div className="text-right glow-green">NODES: {farms.length}</div>
        </div>
      </div>

      {/* Legend */}
      <div
        className="absolute bottom-4 left-4 border p-4"
        style={{
          backgroundColor: 'rgba(10, 10, 10, 0.95)',
          borderColor: 'rgba(0, 255, 65, 0.4)',
          boxShadow: '0 0 20px rgba(0, 255, 65, 0.15)'
        }}
      >
        <div className="text-text-primary mono mb-3 glow-green" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--text-primary)' }}>
          STATUS LEGEND
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#00FF41', boxShadow: '0 0 10px #00FF41, 0 0 20px #00FF4160' }} />
            <span className="text-text-primary mono" style={{ fontSize: '0.75rem', color: 'var(--text-primary)' }}>OPTIMAL</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FFB800', boxShadow: '0 0 10px #FFB800, 0 0 20px #FFB80060' }} />
            <span className="text-text-primary mono" style={{ fontSize: '0.75rem', color: 'var(--text-primary)' }}>MODERATE</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FF3864', boxShadow: '0 0 10px #FF3864, 0 0 20px #FF386460' }} />
            <span className="text-text-primary mono" style={{ fontSize: '0.75rem', color: 'var(--text-primary)' }}>CRITICAL</span>
          </div>
        </div>
      </div>

      {/* Selected Farm Details */}
      {selectedFarm && (
        <div
          className="absolute top-1/2 right-8 transform -translate-y-1/2 border p-4 min-w-[220px]"
          style={{
            backgroundColor: 'rgba(10, 10, 10, 0.95)',
            borderColor: 'rgba(0, 255, 65, 0.5)',
            boxShadow: '0 0 20px rgba(0, 255, 65, 0.2)'
          }}
        >
          <button
            onClick={() => setSelectedFarm(null)}
            className="absolute top-2 right-2 mono transition-colors"
            style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-green)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            [X]
          </button>

          <div className="mono mb-3" style={{ fontSize: '0.875rem', letterSpacing: '0.1em', color: 'var(--accent-green)' }}>
            {selectedFarm.name}
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center border-b pb-1" style={{ borderColor: 'var(--border-dim)' }}>
              <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>NDVI:</span>
              <span className="mono glow-green" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                {selectedFarm.ndvi.toFixed(3)}
              </span>
            </div>
            <div className="flex justify-between items-center border-b pb-1" style={{ borderColor: 'var(--border-dim)' }}>
              <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>STATUS:</span>
              <span
                className="mono uppercase"
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: healthStatus[selectedFarm.health].color,
                  textShadow: `0 0 10px ${healthStatus[selectedFarm.health].color}`
                }}
              >
                {healthStatus[selectedFarm.health].label}
              </span>
            </div>
            <div className="flex justify-between items-center border-b pb-1" style={{ borderColor: 'var(--border-dim)' }}>
              <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>AREA:</span>
              <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-primary)' }}>
                {selectedFarm.area} ha
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

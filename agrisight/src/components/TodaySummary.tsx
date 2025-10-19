'use client'

import React from 'react';

export const TodaySummary: React.FC = () => {
  return (
    <div
      className="border p-3"
      style={{
        backgroundColor: 'var(--bg-card)',
        borderColor: 'var(--border-primary)'
      }}
    >
      <div className="flex items-center gap-2 mb-3 pb-2 border-b" style={{ borderColor: 'var(--border-dim)' }}>
        <div
          className="w-1 h-1"
          style={{
            backgroundColor: 'var(--status-active)',
            boxShadow: '0 0 6px #00FF41'
          }}
        />
        <h3
          className="text-text-primary mono"
          style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--text-primary)' }}
        >
          MISSION STATUS
        </h3>
        <div
          className="ml-auto px-1.5 py-0.5 border"
          style={{
            backgroundColor: 'rgba(0, 255, 65, 0.1)',
            borderColor: 'rgba(0, 255, 65, 0.3)'
          }}
        >
          <span className="mono" style={{ fontSize: '0.563rem', letterSpacing: '0.1em', color: 'var(--status-active)' }}>
            ACTIVE
          </span>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center py-1 border-b" style={{ borderColor: 'var(--border-dim)' }}>
          <span className="mono" style={{ fontSize: '0.688rem', color: 'var(--text-secondary)' }}>AVG NDVI:</span>
          <span className="mono glow-green" style={{ fontSize: '0.813rem', fontWeight: 600, color: 'var(--status-active)' }}>
            0.580
          </span>
        </div>
        <div className="flex justify-between items-center py-1 border-b" style={{ borderColor: 'var(--border-dim)' }}>
          <span className="mono" style={{ fontSize: '0.688rem', color: 'var(--text-secondary)' }}>STATUS:</span>
          <span className="mono" style={{ fontSize: '0.688rem', fontWeight: 600, letterSpacing: '0.1em', color: 'var(--status-warning)' }}>
            MODERATE
          </span>
        </div>
        <div className="flex justify-between items-center py-1 border-b" style={{ borderColor: 'var(--border-dim)' }}>
          <span className="mono" style={{ fontSize: '0.688rem', color: 'var(--text-secondary)' }}>RAINFALL:</span>
          <span className="mono" style={{ fontSize: '0.688rem', fontWeight: 600, color: 'var(--status-critical)' }}>CRITICAL</span>
        </div>
        <div className="flex justify-between items-center py-1">
          <span className="mono" style={{ fontSize: '0.688rem', color: 'var(--text-secondary)' }}>TEMP:</span>
          <span className="mono" style={{ fontSize: '0.813rem', fontWeight: 600, color: 'var(--text-primary)' }}>72°F</span>
        </div>
      </div>

      {/* Impact Score */}
      <div className="mt-3 pt-2 border-t" style={{ borderColor: 'var(--border-dim)' }}>
        <div className="mono mb-1.5" style={{ fontSize: '0.688rem', letterSpacing: '0.1em', color: 'var(--text-secondary)' }}>
          IMPACT SCORE
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-1.5 border" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-dim)' }}>
            <div className="h-full" style={{ width: '65%', background: 'linear-gradient(to right, var(--status-active), var(--status-warning))' }} />
          </div>
          <span className="mono" style={{ fontSize: '0.688rem', color: 'var(--text-primary)' }}>65%</span>
        </div>
      </div>
    </div>
  );
};

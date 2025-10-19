'use client'

import React from 'react';
import { Activity } from 'lucide-react';

interface RecommendationBannerProps {
  severity?: 'success' | 'warning' | 'danger';
  action?: string;
  reasoning?: string;
  confidence?: number;
}

export const RecommendationBanner: React.FC<RecommendationBannerProps> = ({
  severity = 'warning',
  action = 'OPTIMIZE WATER USAGE',
  reasoning = 'Crop stress patterns indicate moderate risk. Rainfall forecast shows 30% probability next 72h.',
  confidence = 85,
}) => {
  const colors: Record<string, { border: string; text: string; icon: string }> = {
    success: { border: '#00FF41', text: '#00FF41', icon: '#00FF41' },
    warning: { border: '#FFB800', text: '#FFB800', icon: '#FFB800' },
    danger: { border: '#FF3864', text: '#FF3864', icon: '#FF3864' },
  };

  const style = colors[severity];

  return (
    <div
      className="border p-3 relative overflow-hidden"
      style={{
        backgroundColor: 'var(--bg-card)',
        borderLeft: `3px solid ${style.border}`,
        borderTop: `1px solid ${style.border}30`,
        borderRight: `1px solid ${style.border}30`,
        borderBottom: `1px solid ${style.border}30`,
        boxShadow: `0 0 15px ${style.border}20`,
      }}
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="relative">
        <div className="flex items-start gap-3 mb-2">
          <Activity className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: style.icon }} />
          <div className="flex-1">
            <div className="mono mb-1.5" style={{ fontSize: '0.75rem', fontWeight: 600, color: style.text, letterSpacing: '0.05em' }}>
              {action}
            </div>
            <div className="mono" style={{ fontSize: '0.688rem', lineHeight: '1.4', color: 'var(--text-secondary)' }}>
              {reasoning}
            </div>
          </div>
        </div>

        {/* Progress bar with confidence */}
        <div className="flex items-center gap-2">
          <div className="flex-1 h-1 border relative overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-dim)' }}>
            <div
              className="h-full absolute top-0 left-0"
              style={{
                width: `${confidence}%`,
                backgroundColor: style.border,
                boxShadow: `0 0 8px ${style.border}`
              }}
            />
          </div>
          <div className="mono" style={{ fontSize: '0.688rem', fontWeight: 600, color: style.text }}>
            {confidence}%
          </div>
        </div>
      </div>
    </div>
  );
};

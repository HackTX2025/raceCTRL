'use client'

import React from 'react';
import { LucideIcon } from 'lucide-react';

interface QuickStatsCardProps {
  icon: LucideIcon;
  value: string | number;
  label: string;
  status?: 'active' | 'warning' | 'critical' | 'info';
}

export const QuickStatsCard: React.FC<QuickStatsCardProps> = ({
  icon: Icon,
  value,
  label,
  status = 'active'
}) => {
  const statusGlow: Record<string, string> = {
    active: 'glow-green',
    warning: '',
    critical: '',
    info: 'glow-blue'
  };

  const glowColor =
    status === 'active'
      ? '#00FF41'
      : status === 'warning'
        ? '#FFB800'
        : status === 'critical'
          ? '#FF3864'
          : '#00D9FF';

  return (
    <div
      className="border p-3 hover:border-opacity-30 transition-all relative overflow-hidden"
      style={{
        backgroundColor: 'var(--bg-card)',
        borderColor: 'var(--border-primary)'
      }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative">
        <div className="flex items-start justify-between mb-2">
          <Icon className="w-4 h-4" style={{ color: glowColor }} />
          <div
            className="w-1.5 h-1.5"
            style={{
              backgroundColor: glowColor,
              boxShadow: `0 0 8px ${glowColor}`
            }}
          />
        </div>
        <div
          className={`mono ${statusGlow[status]} mb-1`}
          style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            lineHeight: 1,
            color: glowColor
          }}
        >
          {value}
        </div>
        <div
          className="text-text-secondary mono uppercase"
          style={{
            fontSize: '0.625rem',
            letterSpacing: '0.1em',
            color: 'var(--text-secondary)'
          }}
        >
          {label}
        </div>
      </div>
    </div>
  );
};

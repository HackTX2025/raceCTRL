'use client'

import React from 'react';
import { TrendingDown, TrendingUp } from 'lucide-react';

export const FinancialSummary: React.FC = () => {
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
            backgroundColor: 'var(--accent-orange)',
            boxShadow: '0 0 6px #FF6B35'
          }}
        />
        <h3 className="text-text-primary mono" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--text-primary)' }}>
          FINANCIAL STATUS
        </h3>
      </div>
      <div className="space-y-3">
        <div>
          <div className="text-text-secondary mono mb-1.5" style={{ fontSize: '0.688rem', letterSpacing: '0.1em', color: 'var(--text-secondary)' }}>
            ACCOUNT BALANCE
          </div>
          <div className="mono glow-green" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-green)' }}>
            $1,250.50
          </div>
        </div>
        <div className="pt-2 border-t" style={{ borderColor: 'var(--border-dim)' }}>
          <div className="text-text-secondary mono mb-2" style={{ fontSize: '0.688rem', letterSpacing: '0.1em', color: 'var(--text-secondary)' }}>
            RECENT ACTIVITY
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between py-1 border-b" style={{ borderColor: 'rgba(160, 160, 160, 0.3)' }}>
              <div className="flex items-center gap-1.5">
                <TrendingDown className="w-2.5 h-2.5" style={{ color: 'var(--status-critical)' }} />
                <span className="text-text-secondary mono" style={{ fontSize: '0.688rem', color: 'var(--text-secondary)' }}>
                  FERTILIZER
                </span>
              </div>
              <span className="mono" style={{ fontSize: '0.688rem', fontWeight: 600, color: 'var(--status-critical)' }}>
                -125.00
              </span>
            </div>
            <div className="flex items-center justify-between py-1 border-b" style={{ borderColor: 'rgba(160, 160, 160, 0.3)' }}>
              <div className="flex items-center gap-1.5">
                <TrendingDown className="w-2.5 h-2.5" style={{ color: 'var(--status-critical)' }} />
                <span className="text-text-secondary mono" style={{ fontSize: '0.688rem', color: 'var(--text-secondary)' }}>
                  EQUIPMENT
                </span>
              </div>
              <span className="mono" style={{ fontSize: '0.688rem', fontWeight: 600, color: 'var(--status-critical)' }}>
                -200.00
              </span>
            </div>
            <div className="flex items-center justify-between py-1">
              <div className="flex items-center gap-1.5">
                <TrendingUp className="w-2.5 h-2.5" style={{ color: 'var(--status-active)' }} />
                <span className="text-text-secondary mono" style={{ fontSize: '0.688rem', color: 'var(--text-secondary)' }}>
                  HARVEST SALE
                </span>
              </div>
              <span className="mono glow-green" style={{ fontSize: '0.688rem', fontWeight: 600, color: 'var(--status-active)' }}>
                +850.00
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

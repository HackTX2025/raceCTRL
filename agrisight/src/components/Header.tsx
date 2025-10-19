'use client'

import React from 'react';
import { Activity, Share2 } from 'lucide-react';

interface HeaderProps {
  currentPage?: string;
  onPageChange?: (page: string) => void;
  onNavigate?: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage = 'dashboard',
  onPageChange = () => {},
  onNavigate = () => {}
}) => {
  const handleNavigate = (page: string) => {
    onPageChange(page);
    onNavigate(page);
  };

  return (
    <header
      className="sticky top-0 z-50 h-14 border-b"
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderColor: 'var(--border-primary)'
      }}
    >
      <div className="max-w-[1600px] mx-auto px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="w-6 h-6 border flex items-center justify-center"
            style={{
              backgroundColor: 'rgba(0, 255, 65, 0.1)',
              borderColor: 'rgba(0, 255, 65, 0.5)'
            }}
          >
            <Activity className="w-4 h-4" style={{ color: 'var(--accent-green)' }} />
          </div>
          <span
            className="mono glow-green"
            style={{
              fontSize: '1.125rem',
              fontWeight: 600,
              letterSpacing: '0.05em',
              color: 'var(--text-primary)'
            }}
          >
            AgriSight
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-1">
          <button
            onClick={() => handleNavigate('dashboard')}
            className="mono px-4 py-2 transition-all"
            style={{
              fontSize: '0.813rem',
              letterSpacing: '0.05em',
              color: currentPage === 'dashboard' ? 'var(--accent-green)' : 'var(--text-secondary)',
              borderBottom: currentPage === 'dashboard' ? '2px solid var(--accent-green)' : '2px solid transparent'
            }}
          >
            DASHBOARD
          </button>
          <button
            onClick={() => handleNavigate('insights')}
            className="mono px-4 py-2 transition-all"
            style={{
              fontSize: '0.813rem',
              letterSpacing: '0.05em',
              color: currentPage === 'insights' ? 'var(--accent-green)' : 'var(--text-secondary)',
              borderBottom: currentPage === 'insights' ? '2px solid var(--accent-green)' : '2px solid transparent'
            }}
          >
            ANALYSIS
          </button>
          <button
            onClick={() => handleNavigate('about')}
            className="mono px-4 py-2 transition-all"
            style={{
              fontSize: '0.813rem',
              letterSpacing: '0.05em',
              color: currentPage === 'about' ? 'var(--accent-green)' : 'var(--text-secondary)',
              borderBottom: currentPage === 'about' ? '2px solid var(--accent-green)' : '2px solid transparent'
            }}
          >
            SYSTEM
          </button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            className="flex items-center gap-2 transition-colors"
            style={{
              color: 'var(--text-secondary)',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-green)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            <Share2 className="w-4 h-4" />
            <span className="mono" style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}>SHARE</span>
          </button>
        </div>
      </div>
    </header>
  );
};

'use client'

import React from 'react';
import { Leaf, Github, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer 
      className="border-t"
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderColor: 'var(--border-primary)'
      }}
    >
      {/* Main Footer Content */}
      <div className="max-w-[1600px] mx-auto px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo and Description */}
          <div className="flex items-center gap-3">
            <Leaf className="h-6 w-6" style={{ color: 'var(--accent-green)' }} />
            <div>
              <span 
                className="font-bold"
                style={{ 
                  fontSize: '1.125rem',
                  color: 'var(--text-primary)'
                }}
              >
                AgriSight
              </span>
              <p 
                className="text-sm"
                style={{ color: 'var(--text-secondary)' }}
              >
                Empowering Farmers with Financial Foresight
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="text-center md:text-right">
            <p 
              className="text-sm mb-2"
              style={{ color: 'var(--text-secondary)' }}
            >
              Built with
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-2">
              <span 
                className="px-2 py-1 rounded text-xs"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'var(--text-secondary)'
                }}
              >
                Next.js
              </span>
              <span 
                className="px-2 py-1 rounded text-xs"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'var(--text-secondary)'
                }}
              >
                TailwindCSS
              </span>
              <span 
                className="px-2 py-1 rounded text-xs"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'var(--text-secondary)'
                }}
              >
                Leaflet
              </span>
              <span 
                className="px-2 py-1 rounded text-xs"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'var(--text-secondary)'
                }}
              >
                Supabase
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div 
        className="border-t"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          borderColor: 'var(--border-primary)'
        }}
      >
        <div className="max-w-[1600px] mx-auto px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div 
                className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'var(--text-secondary)' }}
              >
                <span 
                  className="text-xs font-bold"
                  style={{ color: 'var(--bg-primary)' }}
                >
                  N
                </span>
              </div>
              <p 
                className="text-sm"
                style={{ color: 'var(--text-secondary)' }}
              >
                © 2025 AgriSight. HackTX 2025 Hackathon Project.
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="transition-colors"
                style={{ color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-green)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="transition-colors"
                style={{ color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-green)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

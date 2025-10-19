'use client'

import React from 'react';
import { Activity, TrendingUp, Cloud, DollarSign, Satellite, Brain, Database, Map } from 'lucide-react';

export const System: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        
        {/* System Architecture Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <span className="mono text-lg font-bold" style={{ color: 'var(--accent-green)' }}>&gt;</span>
            <h1 className="mono text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
              SYSTEM ARCHITECTURE
            </h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* ANALYZE Card */}
            <div 
              className="border p-6"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-primary)'
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-8 h-8 flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(0, 255, 65, 0.1)' }}
                >
                  <Activity className="w-5 h-5" style={{ color: 'var(--accent-green)' }} />
                </div>
                <h2 className="mono font-bold text-lg" style={{ color: 'var(--accent-green)' }}>
                  ANALYZE
                </h2>
              </div>
              <h3 className="mono text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
                CROP HEALTH MONITORING
              </h3>
              <p className="mono text-sm" style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                Sentinel-2 multispectral imaging for real-time NDVI calculation and vegetation health assessment across all field nodes.
              </p>
            </div>

            {/* PREDICT Card */}
            <div 
              className="border p-6"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-primary)'
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-8 h-8 flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(0, 217, 255, 0.1)' }}
                >
                  <Cloud className="w-5 h-5" style={{ color: '#00D9FF' }} />
                </div>
                <h2 className="mono font-bold text-lg" style={{ color: '#00D9FF' }}>
                  PREDICT
                </h2>
              </div>
              <h3 className="mono text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
                WEATHER IMPACT ANALYSIS
              </h3>
              <p className="mono text-sm" style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                OpenWeather API integration for forecast modeling and environmental correlation with crop stress indicators.
              </p>
            </div>

            {/* OPTIMIZE Card */}
            <div 
              className="border p-6"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-primary)'
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-8 h-8 flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(255, 184, 0, 0.1)' }}
                >
                  <DollarSign className="w-5 h-5" style={{ color: '#FFB800' }} />
                </div>
                <h2 className="mono font-bold text-lg" style={{ color: '#FFB800' }}>
                  OPTIMIZE
                </h2>
              </div>
              <h3 className="mono text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
                FINANCIAL RECOMMENDATIONS
              </h3>
              <p className="mono text-sm" style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                AI-driven decision engine for resource allocation, cost optimization, and ROI maximization across operations.
              </p>
            </div>
          </div>
        </div>

        {/* Technology Stack Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div 
              className="w-6 h-6 flex items-center justify-center"
              style={{ backgroundColor: 'rgba(0, 255, 65, 0.1)' }}
            >
              <Database className="w-4 h-4" style={{ color: 'var(--accent-green)' }} />
            </div>
            <h1 className="mono text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
              TECHNOLOGY STACK
            </h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Satellite Imagery */}
              <div className="flex items-start gap-4">
                <div 
                  className="w-3 h-3 mt-2"
                  style={{ backgroundColor: 'var(--accent-green)' }}
                />
                <div>
                  <h3 className="mono font-bold text-lg mb-1" style={{ color: 'var(--text-primary)' }}>
                    SATELLITE IMAGERY
                  </h3>
                  <p className="mono text-sm" style={{ color: 'var(--text-secondary)' }}>
                    Sentinel-2 | Multispectral Data | 10m Resolution
                  </p>
                </div>
              </div>

              {/* Weather Data */}
              <div className="flex items-start gap-4">
                <div 
                  className="w-3 h-3 mt-2"
                  style={{ backgroundColor: '#00D9FF' }}
                />
                <div>
                  <h3 className="mono font-bold text-lg mb-1" style={{ color: 'var(--text-primary)' }}>
                    WEATHER DATA
                  </h3>
                  <p className="mono text-sm" style={{ color: 'var(--text-secondary)' }}>
                    OpenWeather API | Real-time Forecasts | Historical Data
                  </p>
                </div>
              </div>

              {/* Financial APIs */}
              <div className="flex items-start gap-4">
                <div 
                  className="w-3 h-3 mt-2"
                  style={{ backgroundColor: '#FFB800' }}
                />
                <div>
                  <h3 className="mono font-bold text-lg mb-1" style={{ color: 'var(--text-primary)' }}>
                    FINANCIAL APIS
                  </h3>
                  <p className="mono text-sm" style={{ color: 'var(--text-secondary)' }}>
                    Capital One Nessie | Banking Integration | Transactions
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* AI Engine */}
              <div className="flex items-start gap-4">
                <div 
                  className="w-3 h-3 mt-2"
                  style={{ backgroundColor: 'var(--accent-green)' }}
                />
                <div>
                  <h3 className="mono font-bold text-lg mb-1" style={{ color: 'var(--text-primary)' }}>
                    AI ENGINE
                  </h3>
                  <p className="mono text-sm" style={{ color: 'var(--text-secondary)' }}>
                    Rule-based ML | Pattern Recognition | Predictive Analytics
                  </p>
                </div>
              </div>

              {/* Data Processing */}
              <div className="flex items-start gap-4">
                <div 
                  className="w-3 h-3 mt-2"
                  style={{ backgroundColor: '#00D9FF' }}
                />
                <div>
                  <h3 className="mono font-bold text-lg mb-1" style={{ color: 'var(--text-primary)' }}>
                    DATA PROCESSING
                  </h3>
                  <p className="mono text-sm" style={{ color: 'var(--text-secondary)' }}>
                    React + TypeScript | Real-time Visualization | WebGL
                  </p>
                </div>
              </div>

              {/* Field Management */}
              <div className="flex items-start gap-4">
                <div 
                  className="w-3 h-3 mt-2"
                  style={{ backgroundColor: '#FFB800' }}
                />
                <div>
                  <h3 className="mono font-bold text-lg mb-1" style={{ color: 'var(--text-primary)' }}>
                    FIELD MANAGEMENT
                  </h3>
                  <p className="mono text-sm" style={{ color: 'var(--text-secondary)' }}>
                    Interactive Maps | Multi-node Monitoring | Live Updates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Mission Section */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div 
              className="flex-1 h-px"
              style={{ backgroundColor: 'var(--accent-green)' }}
            />
            <div 
              className="w-4 h-4"
              style={{ backgroundColor: 'var(--accent-green)' }}
            />
            <div 
              className="flex-1 h-px"
              style={{ backgroundColor: 'var(--accent-green)' }}
            />
          </div>
          
          <h1 className="mono text-2xl font-bold mb-6" style={{ color: 'var(--accent-green)' }}>
            PROJECT MISSION
          </h1>
          
          <p className="mono text-lg" style={{ color: 'var(--text-primary)', lineHeight: '1.6' }}>
            Developed to address critical challenges in agricultural resource optimization. AgriSight leverages satellite technology and data analytics to make precision farming accessible and financially viable for operations of all scales.
          </p>
        </div>
      </div>
    </div>
  );
};

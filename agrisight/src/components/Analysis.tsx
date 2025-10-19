'use client'

import React, { useState } from 'react';
import { TrendingUp, BarChart3, Droplets, Thermometer } from 'lucide-react';

export const Analysis: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for NDVI temporal analysis
  const ndviData = [
    { month: 'JAN', value: 0.65 },
    { month: 'FEB', value: 0.68 },
    { month: 'MAR', value: 0.72 },
    { month: 'APR', value: 0.73 },
    { month: 'MAY', value: 0.70 },
    { month: 'JUN', value: 0.68 },
    { month: 'JUL', value: 0.62 },
    { month: 'AUG', value: 0.55 }
  ];

  // Mock data for status distribution
  const statusData = [
    { label: 'OPTIMAL', value: 35, color: '#00FF41' },
    { label: 'MODERATE', value: 45, color: '#FFB800' },
    { label: 'CRITICAL', value: 20, color: '#FF3864' }
  ];

  // Mock data for historical analysis
  const historicalData = [
    { year: '2022', avgNdvi: 0.68, yield: 'High', rainfall: 'Normal' },
    { year: '2023', avgNdvi: 0.72, yield: 'Excellent', rainfall: 'Above Average' },
    { year: '2024', avgNdvi: 0.65, yield: 'Moderate', rainfall: 'Below Average' }
  ];

  // Mock data for recommendations
  const recommendations = [
    {
      id: 1,
      type: 'IMMEDIATE',
      priority: 'HIGH',
      title: 'Irrigation Schedule Adjustment',
      description: 'Increase irrigation frequency by 20% for next 2 weeks due to low rainfall forecast.',
      impact: 'Prevent 15% yield loss',
      confidence: 0.87
    },
    {
      id: 2,
      type: 'STRATEGIC',
      priority: 'MEDIUM',
      title: 'Fertilizer Application',
      description: 'Apply nitrogen-rich fertilizer in sections showing NDVI < 0.6.',
      impact: 'Improve crop health by 12%',
      confidence: 0.74
    },
    {
      id: 3,
      type: 'FINANCIAL',
      priority: 'LOW',
      title: 'Cost Optimization',
      description: 'Consider bulk purchasing of seeds for next season to reduce costs by 8%.',
      impact: 'Save $2,400 annually',
      confidence: 0.92
    }
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <nav className="mono text-sm" style={{ color: 'var(--text-secondary)' }}>
            <span className="hover:text-green-400 cursor-pointer">_</span>
            <span className="mx-2">&gt;</span>
            <span className="hover:text-green-400 cursor-pointer">DASHBOARD</span>
            <span className="mx-2">&gt;</span>
            <span style={{ color: 'var(--accent-green)' }}>ANALYSIS</span>
          </nav>
        </div>

        {/* Field Identifier and Status */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <h1 
              className="text-4xl font-bold mono glow-green"
              style={{ 
                color: 'var(--accent-green)',
                letterSpacing: '0.1em'
              }}
            >
              ABY-01
            </h1>
            <div 
              className="px-4 py-2 border mono text-sm font-bold"
              style={{
                backgroundColor: 'rgba(255, 184, 0, 0.1)',
                borderColor: 'rgba(255, 184, 0, 0.5)',
                color: '#FFB800'
              }}
            >
              MODERATE
            </div>
          </div>
        </div>

        {/* Sub-Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex gap-8">
            {[
              { id: 'overview', label: 'OVERVIEW' },
              { id: 'history', label: 'HISTORY' },
              { id: 'recommendations', label: 'RECOMMENDATIONS' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="mono text-sm font-bold transition-all"
                style={{
                  color: activeTab === tab.id ? 'var(--accent-green)' : 'var(--text-primary)',
                  borderBottom: activeTab === tab.id ? '2px solid var(--accent-green)' : '2px solid transparent',
                  paddingBottom: '8px'
                }}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <>
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* NDVI Temporal Analysis */}
              <div 
                className="border p-6"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-primary)'
                }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <div 
                    className="w-3 h-3"
                    style={{ backgroundColor: 'var(--accent-green)' }}
                  />
                  <h2 className="mono font-bold text-lg" style={{ color: 'var(--text-primary)' }}>
                    NDVI TEMPORAL ANALYSIS
                  </h2>
                </div>
                
                {/* Chart Container */}
                <div className="relative h-64">
                  {/* Y-axis labels */}
                  <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs mono" style={{ color: 'var(--text-secondary)' }}>
                    <span>1.0</span>
                    <span>0.75</span>
                    <span>0.5</span>
                    <span>0.25</span>
                    <span>0</span>
                  </div>
                  
                  {/* Chart Area */}
                  <div className="ml-8 h-full relative">
                    {/* Grid lines */}
                    <div className="absolute inset-0">
                      {[0, 0.25, 0.5, 0.75, 1].map((value, idx) => (
                        <div
                          key={idx}
                          className="absolute w-full border-b border-dashed opacity-20"
                          style={{
                            borderColor: 'var(--text-secondary)',
                            bottom: `${value * 100}%`
                          }}
                        />
                      ))}
                    </div>
                    
                    {/* Area Chart */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      {/* Area fill */}
                      <defs>
                        <linearGradient id="ndviGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="var(--accent-green)" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="var(--accent-green)" stopOpacity="0.05" />
                        </linearGradient>
                      </defs>
                      
                      {/* Area path */}
                      <path
                        d={`M 0,${100 - (ndviData[0].value * 100)} ${ndviData.map((point, idx) => 
                          `L ${(idx / (ndviData.length - 1)) * 100},${100 - (point.value * 100)}`
                        ).join(' ')} L 100,100 L 0,100 Z`}
                        fill="url(#ndviGradient)"
                      />
                      
                      {/* Line */}
                      <path
                        d={`M 0,${100 - (ndviData[0].value * 100)} ${ndviData.map((point, idx) => 
                          `L ${(idx / (ndviData.length - 1)) * 100},${100 - (point.value * 100)}`
                        ).join(' ')}`}
                        fill="none"
                        stroke="var(--accent-green)"
                        strokeWidth="2"
                      />
                    </svg>
                    
                    {/* X-axis labels */}
                    <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs mono" style={{ color: 'var(--text-secondary)' }}>
                      {ndviData.map((point, idx) => (
                        <span key={idx}>{point.month}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Distribution */}
              <div 
                className="border p-6"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-primary)'
                }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <div 
                    className="w-3 h-3"
                    style={{ backgroundColor: '#00D9FF' }}
                  />
                  <h2 className="mono font-bold text-lg" style={{ color: 'var(--text-primary)' }}>
                    STATUS DISTRIBUTION
                  </h2>
                </div>
                
                <div className="space-y-4">
                  {statusData.map((status, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div 
                        className="w-20 mono text-sm font-bold"
                        style={{ color: status.color }}
                      >
                        {status.label}
                      </div>
                      <div className="flex-1 relative">
                        <div 
                          className="h-6 rounded"
                          style={{ 
                            backgroundColor: status.color,
                            width: `${status.value}%`
                          }}
                        />
                      </div>
                      <div 
                        className="w-12 mono text-sm font-bold text-right"
                        style={{ color: status.color }}
                      >
                        {status.value}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Environmental Impact Analysis */}
            <div 
              className="border p-6"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-primary)'
              }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div 
                  className="w-3 h-3"
                  style={{ backgroundColor: '#FFB800' }}
                />
                <h2 className="mono font-bold text-lg" style={{ color: '#FFB800' }}>
                  ENVIRONMENTAL IMPACT ANALYSIS
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Rainfall Correlation */}
                <div className="flex gap-4">
                  <div 
                    className="w-1 h-16 mt-1"
                    style={{ backgroundColor: '#00D9FF' }}
                  />
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div 
                        className="w-3 h-3"
                        style={{ backgroundColor: '#00D9FF' }}
                      />
                      <h3 className="mono font-bold" style={{ color: '#00D9FF' }}>
                        RAINFALL CORRELATION
                      </h3>
                    </div>
                    <p className="mono text-sm" style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                      Strong negative correlation. 3 weeks low rainfall → 15% NDVI decline detected.
                    </p>
                  </div>
                </div>
                
                {/* Temperature Stress */}
                <div className="flex gap-4">
                  <div 
                    className="w-1 h-16 mt-1"
                    style={{ backgroundColor: '#FFB800' }}
                  />
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div 
                        className="w-3 h-3"
                        style={{ backgroundColor: '#FFB800' }}
                      />
                      <h3 className="mono font-bold" style={{ color: '#FFB800' }}>
                        TEMPERATURE STRESS
                      </h3>
                    </div>
                    <p className="mono text-sm" style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                      Peak temperatures &gt;85°F in July contributed to moderate stress conditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* History Tab Content */}
        {activeTab === 'history' && (
          <div className="space-y-8">
            {/* Historical Performance */}
            <div 
              className="border p-6"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-primary)'
              }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div 
                  className="w-3 h-3"
                  style={{ backgroundColor: 'var(--accent-green)' }}
                />
                <h2 className="mono font-bold text-lg" style={{ color: 'var(--text-primary)' }}>
                  HISTORICAL PERFORMANCE
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {historicalData.map((year, idx) => (
                  <div key={idx} className="text-center">
                    <h3 className="mono text-2xl font-bold mb-2" style={{ color: 'var(--accent-green)' }}>
                      {year.year}
                    </h3>
                    <div className="space-y-2">
                      <div>
                        <span className="mono text-sm" style={{ color: 'var(--text-secondary)' }}>Avg NDVI: </span>
                        <span className="mono font-bold" style={{ color: 'var(--text-primary)' }}>{year.avgNdvi}</span>
                      </div>
                      <div>
                        <span className="mono text-sm" style={{ color: 'var(--text-secondary)' }}>Yield: </span>
                        <span className="mono font-bold" style={{ color: 'var(--accent-green)' }}>{year.yield}</span>
                      </div>
                      <div>
                        <span className="mono text-sm" style={{ color: 'var(--text-secondary)' }}>Rainfall: </span>
                        <span className="mono font-bold" style={{ color: '#00D9FF' }}>{year.rainfall}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trend Analysis */}
            <div 
              className="border p-6"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-primary)'
              }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div 
                  className="w-3 h-3"
                  style={{ backgroundColor: '#00D9FF' }}
                />
                <h2 className="mono font-bold text-lg" style={{ color: 'var(--text-primary)' }}>
                  TREND ANALYSIS
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="mono font-bold mb-3" style={{ color: 'var(--accent-green)' }}>
                    NDVI TREND
                  </h3>
                  <p className="mono text-sm" style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                    Overall NDVI has decreased by 4.2% over the past 3 years. Peak performance was achieved in 2023 with optimal weather conditions.
                  </p>
                </div>
                <div>
                  <h3 className="mono font-bold mb-3" style={{ color: '#FFB800' }}>
                    YIELD CORRELATION
                  </h3>
                  <p className="mono text-sm" style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                    Strong positive correlation (r=0.89) between NDVI and final yield. Rainfall patterns significantly impact crop health.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Recommendations Tab Content */}
        {activeTab === 'recommendations' && (
          <div className="space-y-6">
            {recommendations.map((rec, idx) => (
              <div 
                key={rec.id}
                className="border p-6"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-primary)'
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-3 h-3 mt-1"
                      style={{ 
                        backgroundColor: rec.priority === 'HIGH' ? '#FF3864' : 
                                        rec.priority === 'MEDIUM' ? '#FFB800' : '#00FF41'
                      }}
                    />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span 
                          className="mono text-xs px-2 py-1 border"
                          style={{
                            backgroundColor: rec.priority === 'HIGH' ? 'rgba(255, 56, 100, 0.1)' : 
                                            rec.priority === 'MEDIUM' ? 'rgba(255, 184, 0, 0.1)' : 'rgba(0, 255, 65, 0.1)',
                            borderColor: rec.priority === 'HIGH' ? 'rgba(255, 56, 100, 0.3)' : 
                                        rec.priority === 'MEDIUM' ? 'rgba(255, 184, 0, 0.3)' : 'rgba(0, 255, 65, 0.3)',
                            color: rec.priority === 'HIGH' ? '#FF3864' : 
                                   rec.priority === 'MEDIUM' ? '#FFB800' : '#00FF41'
                          }}
                        >
                          {rec.type}
                        </span>
                        <span 
                          className="mono text-xs px-2 py-1 border"
                          style={{
                            backgroundColor: rec.priority === 'HIGH' ? 'rgba(255, 56, 100, 0.1)' : 
                                            rec.priority === 'MEDIUM' ? 'rgba(255, 184, 0, 0.1)' : 'rgba(0, 255, 65, 0.1)',
                            borderColor: rec.priority === 'HIGH' ? 'rgba(255, 56, 100, 0.3)' : 
                                        rec.priority === 'MEDIUM' ? 'rgba(255, 184, 0, 0.3)' : 'rgba(0, 255, 65, 0.3)',
                            color: rec.priority === 'HIGH' ? '#FF3864' : 
                                   rec.priority === 'MEDIUM' ? '#FFB800' : '#00FF41'
                          }}
                        >
                          {rec.priority}
                        </span>
                      </div>
                      <h3 className="mono font-bold text-lg" style={{ color: 'var(--text-primary)' }}>
                        {rec.title}
                      </h3>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="mono text-sm" style={{ color: 'var(--text-secondary)' }}>
                      Confidence
                    </div>
                    <div className="mono font-bold" style={{ color: 'var(--accent-green)' }}>
                      {Math.round(rec.confidence * 100)}%
                    </div>
                  </div>
                </div>
                
                <p className="mono text-sm mb-4" style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                  {rec.description}
                </p>
                
                <div className="flex items-center gap-2">
                  <span className="mono text-sm" style={{ color: 'var(--text-secondary)' }}>Impact:</span>
                  <span className="mono font-bold" style={{ color: 'var(--accent-green)' }}>{rec.impact}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

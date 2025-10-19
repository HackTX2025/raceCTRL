'use client'

import React, { useState, useEffect } from 'react';
import { Database, Activity, Thermometer, Target } from 'lucide-react';
import { QuickStatsCard } from './QuickStatsCard';
import { FarmMap } from './FarmMap';
import { TodaySummary } from './TodaySummary';
import { WeatherCard } from './WeatherCard';
import { FinancialSummary } from './FinancialSummary';
import { RecommendationBanner } from './RecommendationBanner';

interface DashboardProps {
  farmId?: string;
}

export const Dashboard: React.FC<DashboardProps> = ({ farmId: _farmId = 'demo1' }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4" style={{ borderColor: 'var(--accent-green)' }}></div>
          <p className="mono" style={{ color: 'var(--text-secondary)' }}>Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Top Header Bar */}
      <div
        className="border-b px-6 py-3 flex items-center justify-between"
        style={{ borderColor: 'var(--border-primary)' }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-2 h-2 bg-status-active animate-pulse"
            style={{ boxShadow: '0 0 10px #00FF41', backgroundColor: 'var(--status-active)' }}
          />
          <span className="text-text-primary mono" style={{ fontSize: '0.813rem', letterSpacing: '0.1em', color: 'var(--text-primary)' }}>
            FIELD OPERATIONS DASHBOARD
          </span>
        </div>
        <div className="text-text-secondary mono" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
          Last updated: {new Date().toLocaleTimeString()} UTC
        </div>
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Side - Map */}
        <div className="flex-1 p-6 flex items-center justify-center">
          <div className="w-full h-full max-w-[800px]">
            <FarmMap />
          </div>
        </div>

        {/* Right Sidebar - Info Panels */}
        <div className="w-[380px] border-l border-border-primary overflow-y-auto custom-scrollbar" style={{ borderColor: 'var(--border-primary)' }}>
          <div className="p-4 space-y-4">
            {/* Mission Status */}
            <TodaySummary />

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              <QuickStatsCard
                icon={Database}
                value="5"
                label="NODES"
                status="active"
              />
              <QuickStatsCard
                icon={Activity}
                value="0.58"
                label="AVG NDVI"
                status="warning"
              />
              <QuickStatsCard
                icon={Thermometer}
                value="72°F"
                label="TEMP"
                status="info"
              />
              <QuickStatsCard
                icon={Target}
                value="3"
                label="TASKS"
                status="warning"
              />
            </div>

            {/* Weather */}
            <WeatherCard />

            {/* Financial Summary */}
            <FinancialSummary />

            {/* AI Recommendation */}
            <div>
              <div className="flex items-center gap-2 mb-3" style={{ color: 'var(--status-warning)' }}>
                <div
                  className="w-1 h-1"
                  style={{
                    backgroundColor: 'var(--status-warning)',
                    boxShadow: '0 0 6px #FFB800'
                  }}
                />
                <span className="text-text-primary mono" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--text-primary)' }}>
                  AI RECOMMENDATIONS
                </span>
              </div>
              <RecommendationBanner
                severity="warning"
                action="OPTIMIZE WATER USAGE"
                reasoning="Crop stress patterns indicate moderate risk. Rainfall forecast shows 30% probability next 72h."
                confidence={85}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

'use client'

import React from 'react';
import { Cloud, CloudRain, Sun, CloudDrizzle } from 'lucide-react';

interface WeatherDay {
  day: string;
  temp: number;
  condition: 'sunny' | 'cloudy' | 'rainy' | 'drizzle';
  precipitation: number;
}

const weatherData: WeatherDay[] = [
  { day: 'MON', temp: 72, condition: 'sunny', precipitation: 0 },
  { day: 'TUE', temp: 68, condition: 'cloudy', precipitation: 10 },
  { day: 'WED', temp: 65, condition: 'rainy', precipitation: 65 },
  { day: 'THU', temp: 70, condition: 'drizzle', precipitation: 30 },
  { day: 'FRI', temp: 74, condition: 'sunny', precipitation: 0 },
  { day: 'SAT', temp: 76, condition: 'sunny', precipitation: 0 },
  { day: 'SUN', temp: 73, condition: 'cloudy', precipitation: 15 },
];

const weatherIcons = {
  sunny: Sun,
  cloudy: Cloud,
  rainy: CloudRain,
  drizzle: CloudDrizzle,
};

export const WeatherCard: React.FC = () => {
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
            backgroundColor: 'var(--accent-blue)',
            boxShadow: '0 0 6px #00D9FF'
          }}
        />
        <h3 className="text-text-primary mono" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--text-primary)' }}>
          WEATHER FORECAST
        </h3>
      </div>
      <div className="space-y-1">
        {weatherData.slice(0, 5).map((day) => {
          const Icon = weatherIcons[day.condition];
          return (
            <div
              key={day.day}
              className="flex items-center justify-between py-1.5 border-b transition-colors"
              style={{ borderColor: 'rgba(160, 160, 160, 0.3)' }}
            >
              <span className="text-text-secondary mono" style={{ fontSize: '0.625rem', width: '30px', color: 'var(--text-secondary)' }}>
                {day.day}
              </span>
              <Icon className="w-3.5 h-3.5" style={{ color: 'rgba(0, 217, 255, 0.7)' }} />
              <span className="text-text-primary mono" style={{ fontSize: '0.813rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                {day.temp}°
              </span>
              {day.precipitation > 0 ? (
                <div className="flex items-center gap-1" style={{ fontSize: '0.625rem', width: '45px', color: 'var(--accent-blue)' }}>
                  <CloudRain className="w-2.5 h-2.5" />
                  <span className="mono">{day.precipitation}%</span>
                </div>
              ) : (
                <div style={{ width: '45px' }} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

'use client'

import React, { useState, useEffect } from 'react';
import { Server, Database, Radio, AlertCircle, CheckCircle, Clock } from 'lucide-react';

interface ServiceStatus {
  name: string;
  status: 'online' | 'offline' | 'warning';
  latency: number;
}

export const System: React.FC = () => {
  const [services, setServices] = useState<ServiceStatus[]>([
    { name: 'API Server', status: 'online', latency: 45 },
    { name: 'Database', status: 'online', latency: 23 },
    { name: 'Satellite Service', status: 'online', latency: 156 },
    { name: 'Weather Service', status: 'online', latency: 89 },
    { name: 'Financial API', status: 'online', latency: 134 }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return '#00FF41';
      case 'warning':
        return '#FFB800';
      case 'offline':
        return '#FF3864';
      default:
        return '#A0A0A0';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'online':
        return <CheckCircle className="w-5 h-5" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5" />;
      case 'offline':
        return <AlertCircle className="w-5 h-5" />;
      default:
        return <Radio className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mono glow-green mb-2" style={{ color: 'var(--text-primary)', letterSpacing: '0.05em' }}>
            SYSTEM STATUS
          </h1>
          <p className="mono" style={{ color: 'var(--text-secondary)', letterSpacing: '0.05em' }}>
            Real-time monitoring of AgriSight infrastructure and services
          </p>
        </div>

        {/* Overall Status */}
        <div
          className="border p-6 mb-8"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-primary)'
          }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-4 h-4 rounded-full animate-pulse"
              style={{
                backgroundColor: '#00FF41',
                boxShadow: '0 0 20px #00FF41'
              }}
            />
            <h2 className="mono font-bold" style={{ fontSize: '0.813rem', letterSpacing: '0.1em', color: 'var(--text-primary)' }}>
              ALL SYSTEMS OPERATIONAL
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <div className="mono text-xs" style={{ color: 'var(--text-secondary)', letterSpacing: '0.1em' }}>
                UPTIME
              </div>
              <div className="mono text-2xl font-bold mt-1 glow-green" style={{ color: 'var(--accent-green)' }}>
                99.98%
              </div>
            </div>
            <div>
              <div className="mono text-xs" style={{ color: 'var(--text-secondary)', letterSpacing: '0.1em' }}>
                AVG LATENCY
              </div>
              <div className="mono text-2xl font-bold mt-1" style={{ color: 'var(--text-primary)' }}>
                89ms
              </div>
            </div>
            <div>
              <div className="mono text-xs" style={{ color: 'var(--text-secondary)', letterSpacing: '0.1em' }}>
                LAST INCIDENT
              </div>
              <div className="mono text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
                7 days ago
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-8">
          <h2 className="mono font-bold mb-4 glow-green" style={{ fontSize: '0.813rem', letterSpacing: '0.1em', color: 'var(--text-primary)' }}>
            SERVICE STATUS
          </h2>
          <div className="space-y-3">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="border p-4 flex items-center justify-between"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-primary)'
                }}
              >
                <div className="flex items-center gap-3">
                  <div style={{ color: getStatusColor(service.status) }}>
                    {getStatusIcon(service.status)}
                  </div>
                  <div>
                    <div className="mono font-bold text-sm" style={{ color: 'var(--text-primary)' }}>
                      {service.name}
                    </div>
                    <div className="mono text-xs" style={{ color: 'var(--text-secondary)' }}>
                      Latency: {service.latency}ms
                    </div>
                  </div>
                </div>
                <div
                  className="mono text-xs px-2 py-1 border"
                  style={{
                    backgroundColor: `${getStatusColor(service.status)}15`,
                    borderColor: `${getStatusColor(service.status)}40`,
                    color: getStatusColor(service.status),
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  {service.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* API Endpoints */}
        <div className="mb-8">
          <h2 className="mono font-bold mb-4 glow-green" style={{ fontSize: '0.813rem', letterSpacing: '0.1em', color: 'var(--text-primary)' }}>
            API ENDPOINTS
          </h2>
          <div className="space-y-2">
            {[
              { endpoint: '/api/ndvi', method: 'GET', status: 'online' },
              { endpoint: '/api/weather', method: 'GET', status: 'online' },
              { endpoint: '/api/financial', method: 'GET', status: 'online' },
              { endpoint: '/api/recommendation', method: 'POST', status: 'online' },
              { endpoint: '/api/status', method: 'GET', status: 'online' }
            ].map((api, idx) => (
              <div
                key={idx}
                className="border p-3 flex items-center justify-between mono text-sm"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-primary)',
                  color: 'var(--text-secondary)'
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="px-2 py-0.5 border text-xs"
                    style={{
                      backgroundColor: 'rgba(0, 217, 255, 0.1)',
                      borderColor: 'rgba(0, 217, 255, 0.3)',
                      color: 'var(--accent-blue)'
                    }}
                  >
                    {api.method}
                  </div>
                  <span style={{ color: 'var(--text-primary)' }}>{api.endpoint}</span>
                </div>
                <div
                  style={{
                    color: getStatusColor(api.status),
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontSize: '0.75rem'
                  }}
                >
                  ●{api.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Info */}
        <div
          className="border p-6"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-primary)'
          }}
        >
          <h2 className="mono font-bold mb-4 glow-green" style={{ fontSize: '0.813rem', letterSpacing: '0.1em', color: 'var(--text-primary)' }}>
            SYSTEM INFORMATION
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="space-y-3">
                {[
                  { label: 'Platform', value: 'Next.js 15.5.6' },
                  { label: 'Runtime', value: 'Node.js 18+' },
                  { label: 'Database', value: 'Supabase PostgreSQL' }
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="mono text-xs" style={{ color: 'var(--text-secondary)', letterSpacing: '0.1em' }}>
                      {item.label}
                    </div>
                    <div className="mono text-sm mt-1" style={{ color: 'var(--text-primary)' }}>
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="space-y-3">
                {[
                  { label: 'Version', value: 'v1.0.0' },
                  { label: 'Region', value: 'US-EAST-1' },
                  { label: 'Last Deploy', value: '2025-10-18 14:32 UTC' }
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="mono text-xs" style={{ color: 'var(--text-secondary)', letterSpacing: '0.1em' }}>
                      {item.label}
                    </div>
                    <div className="mono text-sm mt-1" style={{ color: 'var(--text-primary)' }}>
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="border-t px-4 sm:px-6 lg:px-8 py-6 mt-8"
        style={{
          backgroundColor: 'var(--bg-card)',
          borderColor: 'var(--border-primary)'
        }}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="mono text-sm" style={{ color: 'var(--text-secondary)', letterSpacing: '0.05em' }}>
            <Clock className="w-4 h-4 inline mr-2" />
            Last updated: {new Date().toLocaleTimeString()} UTC
          </div>
          <div className="mono text-sm" style={{ color: 'var(--text-secondary)' }}>
            © 2025 AgriSight
          </div>
        </div>
      </footer>
    </div>
  );
};

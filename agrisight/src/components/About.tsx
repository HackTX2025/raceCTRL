'use client'

import React from 'react';
import { Activity, Satellite, Cloud, DollarSign, Zap, Github, Globe } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div
              className="w-12 h-12 border flex items-center justify-center"
              style={{
                backgroundColor: 'rgba(0, 255, 65, 0.1)',
                borderColor: 'rgba(0, 255, 65, 0.5)'
              }}
            >
              <Activity className="w-6 h-6" style={{ color: 'var(--accent-green)' }} />
            </div>
            <h1 className="text-4xl font-bold mono glow-green" style={{ color: 'var(--text-primary)' }}>
              AgriSight
            </h1>
          </div>
          <p className="text-xl mono" style={{ color: 'var(--text-secondary)', letterSpacing: '0.05em' }}>
            Empowering Farmers with Financial Foresight
          </p>
        </div>

        {/* Mission Statement */}
        <div
          className="border p-6 mb-8"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-primary)'
          }}
        >
          <h2 className="text-2xl font-bold mono mb-4 glow-green" style={{ color: 'var(--text-primary)', letterSpacing: '0.05em' }}>
            OUR MISSION
          </h2>
          <p className="mono mb-4" style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>
            AgriSight bridges the gap between agricultural data and financial planning, helping farmers make informed decisions
            about their crops and finances. By combining satellite imagery, weather data, and financial insights, we provide
            actionable recommendations that help farmers optimize their operations and secure their financial future.
          </p>
          <p className="mono" style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>
            Our platform translates complex agricultural data into simple, actionable financial guidance, making advanced farming
            technology accessible to farmers of all sizes.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[
            {
              icon: Satellite,
              title: 'SATELLITE MONITORING',
              description: 'Real-time NDVI analysis using NASA Sentinel-2 satellite data to monitor crop health and vegetation density across your fields.'
            },
            {
              icon: Cloud,
              title: 'WEATHER INTELLIGENCE',
              description: '7-day weather forecasts with rainfall analysis and drought risk assessment to help you plan irrigation and crop management.'
            },
            {
              icon: DollarSign,
              title: 'FINANCIAL INTEGRATION',
              description: 'Seamless integration with banking APIs to provide personalized financial recommendations based on your crop health and market conditions.'
            },
            {
              icon: Zap,
              title: 'AI RECOMMENDATIONS',
              description: 'Smart algorithms analyze your farm data to provide actionable insights on savings, loans, and resource allocation with confidence scores.'
            }
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="border p-4"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-primary)'
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="w-5 h-5" style={{ color: 'var(--accent-green)' }} />
                  <h3 className="mono font-bold" style={{ fontSize: '0.813rem', letterSpacing: '0.1em', color: 'var(--text-primary)' }}>
                    {feature.title}
                  </h3>
                </div>
                <p className="mono" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: '1.5' }}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Technology Stack */}
        <div
          className="border p-6 mb-8"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-primary)'
          }}
        >
          <h2 className="text-2xl font-bold mono mb-6 glow-green" style={{ color: 'var(--text-primary)', letterSpacing: '0.05em' }}>
            TECHNOLOGY STACK
          </h2>
          <div className="space-y-4">
            {[
              { label: 'FRONTEND', items: ['React 18', 'TypeScript', 'TailwindCSS', 'Leaflet.js'] },
              { label: 'BACKEND', items: ['Node.js', 'Express', 'REST APIs', 'Next.js'] },
              { label: 'DATA SOURCES', items: ['Sentinel-2 Satellite', 'OpenWeatherMap', 'Nessie API', 'Supabase'] }
            ].map((section, idx) => (
              <div key={idx}>
                <h3 className="mono font-bold mb-2" style={{ fontSize: '0.813rem', letterSpacing: '0.1em', color: 'var(--accent-green)' }}>
                  {section.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {section.items.map((item, i) => (
                    <div
                      key={i}
                      className="px-3 py-1 border mono text-xs"
                      style={{
                        backgroundColor: 'rgba(0, 255, 65, 0.05)',
                        borderColor: 'rgba(0, 255, 65, 0.3)',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div
          className="border p-6 mb-8"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-primary)'
          }}
        >
          <h2 className="text-2xl font-bold mono mb-6 glow-green" style={{ color: 'var(--text-primary)', letterSpacing: '0.05em' }}>
            OUR TEAM
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'FRONTEND TEAM', members: ['Jeslyn - UI/UX Development', 'Jace - React Components'] },
              { title: 'BACKEND TEAM', members: ['Fellipe - NDVI Processing', 'Atharv - API Integration'] }
            ].map((team, idx) => (
              <div key={idx} className="text-center">
                <h3 className="mono font-bold mb-3" style={{ fontSize: '0.813rem', letterSpacing: '0.1em', color: 'var(--accent-green)' }}>
                  {team.title}
                </h3>
                <div className="space-y-2">
                  {team.members.map((member, i) => (
                    <p key={i} className="mono text-sm" style={{ color: 'var(--text-secondary)' }}>
                      {member}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hackathon Info */}
        <div
          className="border p-6"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-primary)'
          }}
        >
          <h2 className="text-2xl font-bold mono mb-4 glow-green" style={{ color: 'var(--text-primary)', letterSpacing: '0.05em' }}>
            HACKTX 2025
          </h2>
          <p className="mono mb-4" style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>
            AgriSight was developed during HackTX 2025, a 7-hour hackathon focused on creating innovative solutions for real-world
            problems. Our team of 4 developers built this platform to address the critical need for financial planning tools in
            agriculture.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              { label: 'Best Capital One Hack', color: '#00D9FF' },
              { label: 'Best Overall', color: '#00FF41' },
              { label: 'Best Design', color: '#FF6B35' }
            ].map((badge, idx) => (
              <div
                key={idx}
                className="px-3 py-1 border mono text-xs"
                style={{
                  backgroundColor: `${badge.color}10`,
                  borderColor: `${badge.color}40`,
                  color: badge.color
                }}
              >
                {badge.label}
              </div>
            ))}
          </div>
          <p className="mono text-sm" style={{ color: 'var(--text-secondary)' }}>
            Built with ❤️ for farmers and the agricultural community
          </p>
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
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="mono text-sm" style={{ color: 'var(--text-secondary)', letterSpacing: '0.05em' }}>
            © 2025 AgriSight. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="transition-colors" style={{ color: 'var(--text-secondary)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-green)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
              <Github className="w-4 h-4" />
            </a>
            <a href="#" className="transition-colors" style={{ color: 'var(--text-secondary)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-green)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
              <Globe className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

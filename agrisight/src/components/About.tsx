import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Badge } from './ui/badge';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-2xl">🌾</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900">AgriSight</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering Farmers with Financial Foresight
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4">
              AgriSight bridges the gap between agricultural data and financial planning, 
              helping farmers make informed decisions about their crops and finances. By 
              combining satellite imagery, weather data, and financial insights, we provide 
              actionable recommendations that help farmers optimize their operations and 
              secure their financial future.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our platform translates complex agricultural data into simple, actionable 
              financial guidance, making advanced farming technology accessible to farmers 
              of all sizes.
            </p>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span className="text-2xl">🛰️</span>
                <span>Satellite Monitoring</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Real-time NDVI analysis using NASA Sentinel-2 satellite data to monitor 
                crop health and vegetation density across your fields.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span className="text-2xl">🌤️</span>
                <span>Weather Intelligence</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                7-day weather forecasts with rainfall analysis and drought risk assessment 
                to help you plan irrigation and crop management.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span className="text-2xl">💰</span>
                <span>Financial Integration</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Seamless integration with banking APIs to provide personalized financial 
                recommendations based on your crop health and market conditions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span className="text-2xl">🤖</span>
                <span>AI Recommendations</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Smart algorithms analyze your farm data to provide actionable insights 
                on savings, loans, and resource allocation with confidence scores.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Technology Stack */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Technology Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">React 18</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">TailwindCSS</Badge>
                  <Badge variant="outline">Leaflet.js</Badge>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">Express</Badge>
                  <Badge variant="outline">REST APIs</Badge>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Sources</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Sentinel-2 Satellite</Badge>
                  <Badge variant="outline">OpenWeatherMap</Badge>
                  <Badge variant="outline">Nessie API</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Our Team</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Frontend Team</h3>
                <div className="space-y-1">
                  <p className="text-gray-700">Jeslyn - UI/UX Development</p>
                  <p className="text-gray-700">Jace - React Components</p>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Backend Team</h3>
                <div className="space-y-1">
                  <p className="text-gray-700">Fellipe - NDVI Processing</p>
                  <p className="text-gray-700">Atharv - API Integration</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Hackathon Info */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">HackTX 2025</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-700">
                AgriSight was developed during HackTX 2025, a 7-hour hackathon focused on 
                creating innovative solutions for real-world problems. Our team of 4 developers 
                built this platform to address the critical need for financial planning tools 
                in agriculture.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-blue-100 text-blue-800">Best Capital One Hack</Badge>
                <Badge className="bg-green-100 text-green-800">Best Overall</Badge>
                <Badge className="bg-purple-100 text-purple-800">Best Design</Badge>
              </div>
              <p className="text-sm text-gray-600">
                Built with ❤️ for farmers and the agricultural community
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';

interface FarmInsightsProps {
  ndvi?: number;
  health?: 'healthy' | 'moderate' | 'critical';
  area?: number;
  lastHarvest?: string;
  expectedYield?: number;
  soilMoisture?: number;
  pestRisk?: 'low' | 'medium' | 'high';
}

export const FarmInsights: React.FC<FarmInsightsProps> = ({
  ndvi = 0.52,
  // health = 'moderate',
  area = 12.5,
  lastHarvest = '2024-09-15',
  expectedYield = 85,
  soilMoisture = 65,
  pestRisk = 'low'
}) => {
  // const getHealthColor = (health: string) => {
  //   switch (health) {
  //     case 'healthy':
  //       return 'text-green-600';
  //     case 'moderate':
  //       return 'text-yellow-600';
  //     case 'critical':
  //       return 'text-red-600';
  //     default:
  //       return 'text-gray-600';
  //   }
  // };

  const getPestRiskColor = (risk: string) => {
    switch (risk) {
      case 'low':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric',
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getNDVIStatus = (ndvi: number) => {
    if (ndvi > 0.6) return { status: 'Excellent', color: 'text-green-600' };
    if (ndvi > 0.4) return { status: 'Good', color: 'text-yellow-600' };
    if (ndvi > 0.2) return { status: 'Fair', color: 'text-orange-600' };
    return { status: 'Poor', color: 'text-red-600' };
  };

  const ndviStatus = getNDVIStatus(ndvi);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Farm Insights</CardTitle>
        <p className="text-sm text-gray-500">Detailed analysis of your farm&apos;s current status</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* NDVI Analysis */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-900">Vegetation Health (NDVI)</h3>
            <Badge className={getPestRiskColor(ndviStatus.status.toLowerCase())}>
              {ndviStatus.status}
            </Badge>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Current NDVI</span>
              <span className={`font-semibold ${ndviStatus.color}`}>
                {ndvi.toFixed(3)}
              </span>
            </div>
            <Progress value={ndvi * 100} className="h-2" />
            <div className="text-xs text-gray-500">
              NDVI range: 0.0 (no vegetation) to 1.0 (dense vegetation)
            </div>
          </div>
        </div>

        {/* Farm Details */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-900">Farm Area</h3>
            <div className="text-2xl font-bold text-gray-900">{area}</div>
            <div className="text-xs text-gray-500">hectares</div>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-900">Expected Yield</h3>
            <div className="text-2xl font-bold text-gray-900">{expectedYield}%</div>
            <div className="text-xs text-gray-500">of optimal</div>
          </div>
        </div>

        {/* Soil Moisture */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-900">Soil Moisture</h3>
            <span className="text-sm text-gray-600">{soilMoisture}%</span>
          </div>
          <Progress value={soilMoisture} className="h-2" />
          <div className="text-xs text-gray-500">
            {soilMoisture > 70 ? 'Optimal moisture levels' : 
             soilMoisture > 40 ? 'Adequate moisture' : 
             'Low moisture - consider irrigation'}
          </div>
        </div>

        {/* Risk Assessment */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-900">Risk Assessment</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Pest Risk</span>
              <Badge className={getPestRiskColor(pestRisk)}>
                {pestRisk.charAt(0).toUpperCase() + pestRisk.slice(1)}
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Disease Risk</span>
              <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                Low
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Weather Risk</span>
              <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                Moderate
              </Badge>
            </div>
          </div>
        </div>

        {/* Last Harvest */}
        <div className="pt-4 border-t border-gray-200">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-900">Last Harvest</h3>
            <div className="text-sm text-gray-600">
              {formatDate(lastHarvest)}
            </div>
            <div className="text-xs text-gray-500">
              Next harvest expected in 2-3 weeks
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="pt-4 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Quick Recommendations</h3>
          <div className="space-y-2">
            {ndvi < 0.4 && (
              <div className="flex items-start space-x-2 text-sm">
                <span className="text-yellow-600 mt-0.5">⚠️</span>
                <span className="text-gray-700">Consider soil testing and nutrient application</span>
              </div>
            )}
            {soilMoisture < 50 && (
              <div className="flex items-start space-x-2 text-sm">
                <span className="text-blue-600 mt-0.5">💧</span>
                <span className="text-gray-700">Monitor soil moisture, irrigation may be needed</span>
              </div>
            )}
            {pestRisk === 'high' && (
              <div className="flex items-start space-x-2 text-sm">
                <span className="text-red-600 mt-0.5">🐛</span>
                <span className="text-gray-700">High pest risk detected - consider pest management</span>
              </div>
            )}
            {ndvi > 0.6 && soilMoisture > 60 && (
              <div className="flex items-start space-x-2 text-sm">
                <span className="text-green-600 mt-0.5">✅</span>
                <span className="text-gray-700">Excellent conditions - maintain current practices</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

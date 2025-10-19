'use client'

import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card'
import { Cloud, Droplets, AlertTriangle } from 'lucide-react'
import { WeatherData } from '@/types'
import { formatDate } from '@/lib/utils'

interface WeatherCardProps {
  data: WeatherData
  loading?: boolean
}

function getWeatherIcon(icon: string) {
  // Map OpenWeatherMap icons to emojis for simplicity
  const iconMap: { [key: string]: string } = {
    '01d': '☀️', '01n': '🌙',
    '02d': '⛅', '02n': '☁️',
    '03d': '☁️', '03n': '☁️',
    '04d': '☁️', '04n': '☁️',
    '09d': '🌧️', '09n': '🌧️',
    '10d': '🌦️', '10n': '🌧️',
    '11d': '⛈️', '11n': '⛈️',
    '13d': '❄️', '13n': '❄️',
    '50d': '🌫️', '50n': '🌫️'
  }
  return iconMap[icon] || '🌤️'
}

export function WeatherCard({ data, loading }: WeatherCardProps) {
  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cloud className="h-5 w-5 text-blue-600" />
            Weather Forecast
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  const hasRainfallAlert = data.rainfall_deficit < -10

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Cloud className="h-5 w-5 text-blue-600" />
          Weather Forecast
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Location */}
          <div className="text-sm text-gray-600">
            📍 {data.location}
          </div>

          {/* Rainfall Alert */}
          {hasRainfallAlert && (
            <div className="flex items-center gap-2 p-2 bg-yellow-50 border border-yellow-200 rounded-lg">
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
              <span className="text-sm text-yellow-800">
                {data.alert}
              </span>
            </div>
          )}

          {/* 7-Day Forecast */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-gray-900">7-Day Forecast</h4>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {data.forecast.map((day, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{getWeatherIcon(day.weather.icon)}</span>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {formatDate(day.date)}
                      </div>
                      <div className="text-xs text-gray-500">
                        {day.weather.main}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-gray-900">
                      {day.temp}°F
                    </div>
                    {day.rain > 0 && (
                      <div className="flex items-center gap-1 text-xs text-blue-600">
                        <Droplets className="h-3 w-3" />
                        {day.rain}mm
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rainfall Summary */}
          <div className="pt-3 border-t border-gray-100">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Weekly Rainfall</span>
              <span className="font-semibold text-gray-900">
                {data.rainfall_total}mm
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">vs. Average</span>
              <span className={`font-semibold ${data.rainfall_deficit < 0 ? 'text-red-600' : 'text-green-600'}`}>
                {data.rainfall_deficit > 0 ? '+' : ''}{data.rainfall_deficit}mm
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

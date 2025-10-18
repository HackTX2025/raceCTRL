'use client'

import { useState, useEffect } from 'react'
import { MapView } from '@/components/map/MapView'
import { CropHealthCard } from '@/components/panels/CropHealthCard'
import { WeatherCard } from '@/components/panels/WeatherCard'
import { FinancialCard } from '@/components/panels/FinancialCard'
import { RecommendationBanner } from '@/components/panels/RecommendationBanner'
import { NDVIData, WeatherData, FinancialData, Recommendation } from '@/types'
import { mockNDVI, mockWeather, mockFinancial } from '@/lib/mockData'
import { getRecommendation } from '@/lib/recommendationEngine'

export default function Dashboard() {
  const [ndviData, setNdviData] = useState<NDVIData | null>(null)
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [financialData, setFinancialData] = useState<FinancialData | null>(null)
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null)
  const [loading, setLoading] = useState(true)

  // Simulate data loading
  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      
      // Simulate API calls with delays
      await new Promise(resolve => setTimeout(resolve, 1000))
      setNdviData(mockNDVI)
      
      await new Promise(resolve => setTimeout(resolve, 500))
      setWeatherData(mockWeather)
      
      await new Promise(resolve => setTimeout(resolve, 500))
      setFinancialData(mockFinancial)
      
      setLoading(false)
    }

    loadData()
  }, [])

  // Generate recommendation when all data is loaded
  useEffect(() => {
    if (ndviData && weatherData && financialData) {
      const rec = getRecommendation(
        ndviData.ndvi,
        weatherData.rainfall_deficit,
        financialData.balance
      )
      setRecommendation(rec)
    }
  }, [ndviData, weatherData, financialData])

  const handleRefreshRecommendation = () => {
    if (ndviData && weatherData && financialData) {
      const rec = getRecommendation(
        ndviData.ndvi,
        weatherData.rainfall_deficit,
        financialData.balance
      )
      setRecommendation(rec)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Farm Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Monitor your crop health and get personalized financial recommendations
          </p>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Map - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Farm Overview</h2>
              <MapView farmId="demo1" />
            </div>
          </div>

          {/* Right Panel - Takes 1 column */}
          <div className="space-y-6">
            {/* Crop Health Card */}
            <CropHealthCard 
              data={ndviData!} 
              loading={loading || !ndviData} 
            />

            {/* Weather Card */}
            <WeatherCard 
              data={weatherData!} 
              loading={loading || !weatherData} 
            />

            {/* Financial Card */}
            <FinancialCard 
              data={financialData!} 
              loading={loading || !financialData} 
            />
          </div>
        </div>

        {/* Recommendation Banner */}
        <div className="mb-8">
          <RecommendationBanner
            recommendation={recommendation!}
            loading={loading || !recommendation}
            onRefresh={handleRefreshRecommendation}
          />
        </div>

        {/* Demo Scenarios */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Demo Scenarios</h2>
          <p className="text-gray-600 mb-4">
            Try different scenarios to see how AgriSight adapts its recommendations:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button 
              className="p-4 border border-green-200 rounded-lg hover:bg-green-50 transition-colors text-left"
              onClick={() => {
                // This would trigger different mock data in a real implementation
                console.log('Healthy farm scenario')
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-semibold text-green-700">Healthy Farm</span>
              </div>
              <p className="text-sm text-gray-600">NDVI: 0.68, Good weather, Strong finances</p>
            </button>
            
            <button 
              className="p-4 border border-yellow-200 rounded-lg hover:bg-yellow-50 transition-colors text-left"
              onClick={() => {
                console.log('Moderate stress scenario')
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="font-semibold text-yellow-700">Moderate Stress</span>
              </div>
              <p className="text-sm text-gray-600">NDVI: 0.45, Low rainfall, Moderate finances</p>
            </button>
            
            <button 
              className="p-4 border border-red-200 rounded-lg hover:bg-red-50 transition-colors text-left"
              onClick={() => {
                console.log('Critical condition scenario')
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="font-semibold text-red-700">Critical Condition</span>
              </div>
              <p className="text-sm text-gray-600">NDVI: 0.28, Drought, Low finances</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
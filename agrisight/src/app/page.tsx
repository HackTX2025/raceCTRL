'use client'

import { useState, useEffect } from 'react'
import { MapView } from '@/components/map/MapView'
import { CropHealthCard } from '@/components/panels/CropHealthCard'
import { WeatherCard } from '@/components/panels/WeatherCard'
import { FinancialCard } from '@/components/panels/FinancialCard'
import { RecommendationBanner } from '@/components/panels/RecommendationBanner'
import { ScenarioSwitcher } from '@/components/ScenarioSwitcher'
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

  const handleScenarioChange = (data: {
    ndvi: NDVIData
    weather: WeatherData
    financial: FinancialData
  }) => {
    setNdviData(data.ndvi)
    setWeatherData(data.weather)
    setFinancialData(data.financial)
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
              <MapView farmId="demo1" ndviData={ndviData} />
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
        <ScenarioSwitcher onScenarioChange={handleScenarioChange} />
      </div>
    </div>
  )
}
'use client'

import { demoScenarios } from '@/lib/mockData'
import { NDVIData, WeatherData, FinancialData } from '@/types'

interface ScenarioSwitcherProps {
  onScenarioChange: (scenario: {
    ndvi: NDVIData
    weather: WeatherData
    financial: FinancialData
  }) => void
}

export function ScenarioSwitcher({ onScenarioChange }: ScenarioSwitcherProps) {
  const handleScenarioChange = (scenarioKey: keyof typeof demoScenarios) => {
    const scenario = demoScenarios[scenarioKey]

    // Create mock data based on scenario
    const ndviData: NDVIData = {
      farmId: "demo1",
      ndvi: scenario.ndvi,
      health: scenario.health,
      timestamp: new Date().toISOString(),
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-97.75, 30.25],
          [-97.74, 30.25],
          [-97.74, 30.24],
          [-97.75, 30.24],
          [-97.75, 30.25]
        ]]
      },
      area_hectares: 12.5
    }

    // Calculate rainfall data based on deficit
    const rainfallTotal = Math.max(0, 30 + scenario.rainfall_deficit)

    const weatherData: WeatherData = {
      location: "Austin, TX",
      forecast: [
        { date: "2025-10-19", temp: 78, weather: { main: "Rain", icon: "10d" }, rain: scenario.rainfall_deficit < -15 ? 0.5 : 2.5 },
        { date: "2025-10-20", temp: 82, weather: { main: scenario.rainfall_deficit < -10 ? "Clear" : "Clouds", icon: scenario.rainfall_deficit < -10 ? "01d" : "02d" }, rain: scenario.rainfall_deficit < -10 ? 0 : 1.2 },
        { date: "2025-10-21", temp: 85, weather: { main: "Clear", icon: "01d" }, rain: 0 },
        { date: "2025-10-22", temp: 79, weather: { main: scenario.rainfall_deficit < -15 ? "Clear" : "Clouds", icon: scenario.rainfall_deficit < -15 ? "01d" : "02d" }, rain: scenario.rainfall_deficit < -15 ? 0 : 0.5 },
        { date: "2025-10-23", temp: 77, weather: { main: "Rain", icon: "10d" }, rain: scenario.rainfall_deficit < -10 ? 1.0 : 3.2 },
        { date: "2025-10-24", temp: 80, weather: { main: "Clear", icon: "01d" }, rain: 0 },
        { date: "2025-10-25", temp: 83, weather: { main: "Clear", icon: "01d" }, rain: 0 }
      ],
      rainfall_total: rainfallTotal,
      rainfall_deficit: scenario.rainfall_deficit,
      alert: scenario.rainfall_deficit < -10 ? "Low rainfall expected next 7 days" : "Normal rainfall expected",
      timestamp: new Date().toISOString()
    }

    const financialData: FinancialData = {
      customerId: "demo123",
      accountId: "67890",
      nickname: "Farm Savings Account",
      balance: scenario.balance,
      transactions: [
        {
          date: "2025-10-15",
          description: "Fertilizer Supply Co",
          amount: -45.00
        },
        {
          date: "2025-10-14",
          description: "Equipment Rental",
          amount: -120.00
        },
        {
          date: "2025-10-13",
          description: "Seed Purchase",
          amount: -230.00
        }
      ],
      timestamp: new Date().toISOString()
    }

    onScenarioChange({ ndvi: ndviData, weather: weatherData, financial: financialData })
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Demo Scenarios</h2>
      <p className="text-gray-600 mb-4">
        Try different scenarios to see how AgriSight adapts its recommendations:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button
          className="p-4 border border-green-200 rounded-lg hover:bg-green-50 transition-colors text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          onClick={() => handleScenarioChange('healthy')}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="font-semibold text-green-700">Healthy Farm</span>
          </div>
          <p className="text-sm text-gray-600">NDVI: 0.68, Good weather, Strong finances</p>
        </button>

        <button
          className="p-4 border border-yellow-200 rounded-lg hover:bg-yellow-50 transition-colors text-left focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
          onClick={() => handleScenarioChange('moderate')}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span className="font-semibold text-yellow-700">Moderate Stress</span>
          </div>
          <p className="text-sm text-gray-600">NDVI: 0.45, Low rainfall, Moderate finances</p>
        </button>

        <button
          className="p-4 border border-red-200 rounded-lg hover:bg-red-50 transition-colors text-left focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          onClick={() => handleScenarioChange('critical')}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="font-semibold text-red-700">Critical Condition</span>
          </div>
          <p className="text-sm text-gray-600">NDVI: 0.28, Drought, Low finances</p>
        </button>
      </div>
    </div>
  )
}

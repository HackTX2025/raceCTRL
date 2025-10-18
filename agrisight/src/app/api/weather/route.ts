import { NextRequest, NextResponse } from 'next/server'
import { mockWeather } from '@/lib/mockData'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const lat = searchParams.get('lat') || '30.2'
    const lon = searchParams.get('lon') || '-97.7'

    // In a real implementation, this would:
    // 1. Call OpenWeatherMap API
    // 2. Process weather data
    // 3. Calculate rainfall deficit
    // 4. Store/retrieve from Supabase database

    const openWeatherApiKey = process.env.OPENWEATHER_API_KEY
    
    if (openWeatherApiKey) {
      try {
        // Real API call to OpenWeatherMap
        const response = await fetch(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=imperial&appid=${openWeatherApiKey}`
        )
        
        if (response.ok) {
          const data = await response.json()
          
          // Process the weather data
          const forecast = data.daily.slice(0, 7).map((day: any) => ({
            date: new Date(day.dt * 1000).toISOString().split('T')[0],
            temp: Math.round(day.temp.day),
            weather: day.weather[0],
            rain: day.rain ? day.rain : 0
          }))
          
          const totalRain = forecast.reduce((sum: number, day: any) => sum + day.rain, 0)
          const deficit = totalRain - 30 // 30mm weekly average
          
          const weatherData = {
            location: "Austin, TX", // You could geocode the lat/lon
            forecast,
            rainfall_total: totalRain,
            rainfall_deficit: deficit,
            alert: deficit < -10 ? "Low rainfall expected next 7 days" : "Normal rainfall expected",
            timestamp: new Date().toISOString()
          }

          return NextResponse.json({
            success: true,
            data: weatherData,
            timestamp: new Date().toISOString()
          })
        }
      } catch (apiError) {
        console.warn('OpenWeatherMap API failed, using mock data:', apiError)
      }
    }

    // Fallback to mock data
    const response = {
      ...mockWeather,
      timestamp: new Date().toISOString()
    }

    return NextResponse.json({
      success: true,
      data: response,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Weather API Error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch weather data',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}

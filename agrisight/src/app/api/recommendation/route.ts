import { NextRequest, NextResponse } from 'next/server'
import { getRecommendation } from '@/lib/recommendationEngine'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { ndvi, rainfallDeficit, balance } = body

    // Validate input parameters
    if (typeof ndvi !== 'number' || typeof rainfallDeficit !== 'number' || typeof balance !== 'number') {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid input parameters. Expected: ndvi (number), rainfallDeficit (number), balance (number)',
          timestamp: new Date().toISOString()
        },
        { status: 400 }
      )
    }

    // Generate recommendation using the recommendation engine
    const recommendation = getRecommendation(ndvi, rainfallDeficit, balance)

    // In a real implementation, this would:
    // 1. Store the recommendation in Supabase database
    // 2. Log the recommendation for analytics
    // 3. Potentially trigger notifications or alerts

    return NextResponse.json({
      success: true,
      data: recommendation,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Recommendation API Error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to generate recommendation',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}

// Also support GET for demo purposes
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const ndvi = parseFloat(searchParams.get('ndvi') || '0.52')
    const rainfallDeficit = parseFloat(searchParams.get('rainfallDeficit') || '-12.5')
    const balance = parseFloat(searchParams.get('balance') || '1250.50')

    const recommendation = getRecommendation(ndvi, rainfallDeficit, balance)

    return NextResponse.json({
      success: true,
      data: recommendation,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Recommendation API Error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to generate recommendation',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}

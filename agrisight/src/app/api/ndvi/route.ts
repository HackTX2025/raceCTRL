import { NextRequest, NextResponse } from 'next/server'
import { mockNDVI } from '@/lib/mockData'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const farmId = searchParams.get('farmId') || 'demo1'

    // In a real implementation, this would:
    // 1. Fetch satellite data from Sentinel-2 API
    // 2. Process NDVI calculations
    // 3. Store/retrieve from Supabase database
    
    // For demo purposes, return mock data
    const response = {
      ...mockNDVI,
      farmId,
      timestamp: new Date().toISOString()
    }

    return NextResponse.json({
      success: true,
      data: response,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('NDVI API Error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch NDVI data',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}

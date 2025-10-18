import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Check system health
    const status = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      services: {
        api: 'operational',
        database: 'operational', // In real implementation, check Supabase connection
        external_apis: {
          openweather: process.env.OPENWEATHER_API_KEY ? 'configured' : 'not_configured',
          nessie: process.env.NESSIE_API_KEY ? 'configured' : 'not_configured'
        }
      },
      version: '1.0.0',
      environment: process.env.NODE_ENV || 'development'
    }

    return NextResponse.json({
      success: true,
      data: status,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Status API Error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to get system status',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}

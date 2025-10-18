import { NextRequest, NextResponse } from 'next/server'
import { mockFinancial } from '@/lib/mockData'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const customerId = searchParams.get('customerId') || 'demo'

    // In a real implementation, this would:
    // 1. Call Nessie API (Capital One's mock banking API)
    // 2. Fetch account balance and transactions
    // 3. Store/retrieve from Supabase database

    const nessieApiKey = process.env.NESSIE_API_KEY
    
    if (nessieApiKey) {
      try {
        // Real API call to Nessie
        const accountResponse = await fetch(
          `http://api.nessieisreal.com/accounts?key=${nessieApiKey}`
        )
        
        if (accountResponse.ok) {
          const accounts = await accountResponse.json()
          const account = accounts[0] // Use first account for demo
          
          if (account) {
            const transactionsResponse = await fetch(
              `http://api.nessieisreal.com/accounts/${account._id}/purchases?key=${nessieApiKey}`
            )
            
            let transactions = []
            if (transactionsResponse.ok) {
              const transactionsData = await transactionsResponse.json()
              transactions = transactionsData.slice(0, 3).map((tx: any) => ({
                date: tx.transaction_date,
                description: tx.description,
                amount: -tx.amount // Nessie returns positive amounts for purchases
              }))
            }
            
            const financialData = {
              customerId: customerId,
              accountId: account._id,
              nickname: account.nickname || "Farm Savings Account",
              balance: account.balance,
              transactions,
              timestamp: new Date().toISOString()
            }

            return NextResponse.json({
              success: true,
              data: financialData,
              timestamp: new Date().toISOString()
            })
          }
        }
      } catch (apiError) {
        console.warn('Nessie API failed, using mock data:', apiError)
      }
    }

    // Fallback to mock data
    const response = {
      ...mockFinancial,
      customerId,
      timestamp: new Date().toISOString()
    }

    return NextResponse.json({
      success: true,
      data: response,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Financial API Error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch financial data',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}

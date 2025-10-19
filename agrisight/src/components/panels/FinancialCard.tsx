'use client'

import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card'
import { DollarSign, TrendingUp, TrendingDown, Info } from 'lucide-react'
import { FinancialData } from '@/types'
import { formatCurrency, formatDate } from '@/lib/utils'

interface FinancialCardProps {
  data: FinancialData
  loading?: boolean
}

export function FinancialCard({ data, loading }: FinancialCardProps) {
  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-green-600" />
            Financial Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-32 mb-4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-green-600" />
          Financial Summary
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Account Info */}
          <div className="text-sm text-gray-600">
            {data.nickname}
          </div>

          {/* Current Balance */}
          <div className="text-center py-4 bg-gray-50 rounded-lg">
            <div className="text-sm text-gray-600 mb-1">Current Balance</div>
            <div className="text-3xl font-bold text-gray-900">
              {formatCurrency(data.balance)}
            </div>
          </div>

          {/* Recent Transactions */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Recent Transactions</h4>
            <div className="space-y-2">
              {data.transactions.map((transaction, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">
                      {transaction.description}
                    </div>
                    <div className="text-xs text-gray-500">
                      {formatDate(transaction.date)}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {transaction.amount > 0 ? (
                      <TrendingUp className="h-4 w-4 text-green-600" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-600" />
                    )}
                    <span className={`text-sm font-semibold ${
                      transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {formatCurrency(transaction.amount)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mock Account Disclaimer */}
          <div className="flex items-center gap-2 p-2 bg-blue-50 border border-blue-200 rounded-lg">
            <Info className="h-4 w-4 text-blue-600" />
            <span className="text-xs text-blue-800">
              Mock Account - Demo Data
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

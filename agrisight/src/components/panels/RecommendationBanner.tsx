'use client'

import { RefreshCw, AlertCircle, AlertTriangle, CheckCircle } from 'lucide-react'
import { Recommendation } from '@/types'
import { getSeverityColor } from '@/lib/recommendationEngine'

interface RecommendationBannerProps {
  recommendation: Recommendation
  loading?: boolean
  onRefresh?: () => void
}

export function RecommendationBanner({ 
  recommendation, 
  loading = false, 
  onRefresh 
}: RecommendationBannerProps) {
  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 animate-pulse">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-6 bg-gray-200 rounded"></div>
          <div className="h-6 bg-gray-200 rounded w-48"></div>
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>
    )
  }

  const severityColor = getSeverityColor(recommendation.severity)
  
  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'high':
        return <AlertCircle className="h-6 w-6" />
      case 'medium':
        return <AlertTriangle className="h-6 w-6" />
      case 'low':
        return <CheckCircle className="h-6 w-6" />
      default:
        return <AlertCircle className="h-6 w-6" />
    }
  }

  return (
    <div 
      className="bg-white rounded-lg shadow-md p-6 border-2"
      style={{ borderColor: severityColor }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div style={{ color: severityColor }}>
            {getSeverityIcon(recommendation.severity)}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Financial Recommendation
            </h3>
            <div className="flex items-center gap-2">
              <span 
                className="text-sm font-medium capitalize px-2 py-1 rounded-full"
                style={{ 
                  backgroundColor: `${severityColor}20`,
                  color: severityColor 
                }}
              >
                {recommendation.severity} Priority
              </span>
              <span className="text-sm text-gray-500">
                {Math.round(recommendation.confidence * 100)}% confidence
              </span>
            </div>
          </div>
        </div>
        
        {onRefresh && (
          <button
            onClick={onRefresh}
            className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <RefreshCw className="h-4 w-4" />
            Refresh Insight
          </button>
        )}
      </div>

      <div className="space-y-3">
        {/* Action */}
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">Recommended Action</h4>
          <p className="text-gray-700">{recommendation.action}</p>
        </div>

        {/* Reasoning */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Reasoning</h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            {recommendation.reasoning}
          </p>
        </div>

        {/* Timestamp */}
        <div className="text-xs text-gray-500 pt-2 border-t border-gray-100">
          Generated {new Date(recommendation.timestamp).toLocaleString()}
        </div>
      </div>
    </div>
  )
}

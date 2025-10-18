'use client'

import { Card } from '@/components/ui/Card'
import { Leaf, Clock } from 'lucide-react'
import { NDVIData } from '@/types'
import { getHealthStatus, getNDVIColor } from '@/lib/recommendationEngine'
import { getTimeAgo } from '@/lib/utils'

interface CropHealthCardProps {
  data: NDVIData
  loading?: boolean
}

export function CropHealthCard({ data, loading }: CropHealthCardProps) {
  if (loading) {
    return (
      <Card title="Crop Health" icon={<Leaf className="h-5 w-5 text-green-600" />}>
        <div className="space-y-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-20 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-24 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-16"></div>
          </div>
        </div>
      </Card>
    )
  }

  const healthStatus = getHealthStatus(data.ndvi)
  const healthColor = getNDVIColor(data.ndvi)

  return (
    <Card title="Crop Health" icon={<Leaf className="h-5 w-5 text-green-600" />}>
      <div className="space-y-4">
        {/* NDVI Score */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">NDVI Score</span>
          <span 
            className="text-2xl font-bold font-mono"
            style={{ color: healthColor }}
          >
            {data.ndvi.toFixed(2)}
          </span>
        </div>

        {/* Health Status */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Status</span>
          <div className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: healthColor }}
            ></div>
            <span 
              className="font-semibold capitalize"
              style={{ color: healthColor }}
            >
              {healthStatus}
            </span>
          </div>
        </div>

        {/* Area */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Farm Area</span>
          <span className="font-semibold text-gray-900">
            {data.area_hectares} hectares
          </span>
        </div>

        {/* Last Updated */}
        <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
          <Clock className="h-4 w-4 text-gray-400" />
          <span className="text-xs text-gray-500">
            Updated {getTimeAgo(data.timestamp)}
          </span>
        </div>
      </div>
    </Card>
  )
}

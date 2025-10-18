import dynamic from 'next/dynamic'
import { MapViewProps } from '@/types'
import { mockFarmGeoJSON } from '@/lib/mockData'

// Dynamically import the map client component to avoid SSR issues
const MapClient = dynamic(() => import('./MapClient').then(mod => ({ default: mod.MapClient })), { 
  ssr: false,
  loading: () => (
    <div className="h-[500px] w-full rounded-lg bg-gray-200 flex items-center justify-center">
      <div className="text-gray-500">Loading map...</div>
    </div>
  )
})

export function MapView({ farmId = "demo1", className = "" }: MapViewProps) {
  // For now, we'll use mock data. In production, this would fetch from API
  const farmData = mockFarmGeoJSON

  return (
    <div className={`relative ${className}`}>
      <MapClient farmData={farmData} className={className} />
    </div>
  )
}

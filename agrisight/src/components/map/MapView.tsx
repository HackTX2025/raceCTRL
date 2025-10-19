import dynamic from 'next/dynamic'
import { MapViewProps, FarmGeoJSON, NDVIData } from '@/types'
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

interface ExtendedMapViewProps extends MapViewProps {
  ndviData?: NDVIData | null
}

export function MapView({ className = "", ndviData }: ExtendedMapViewProps) {
  // Generate farm GeoJSON from NDVI data or use mock
  let farmData: FarmGeoJSON

  if (ndviData) {
    farmData = {
      type: 'FeatureCollection',
      features: [{
        type: 'Feature',
        geometry: ndviData.geometry,
        properties: {
          ndvi: ndviData.ndvi,
          health: ndviData.health,
          area_hectares: ndviData.area_hectares
        }
      }]
    }
  } else {
    farmData = mockFarmGeoJSON
  }

  return (
    <div className={`relative ${className}`}>
      <MapClient
        key={ndviData?.timestamp || 'default'}
        farmData={farmData}
        className={className}
      />
    </div>
  )
}

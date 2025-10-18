'use client'

import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { FarmGeoJSON } from '@/types'
import { getNDVIColor } from '@/lib/recommendationEngine'

// Fix for default markers in Leaflet with Next.js
if (typeof window !== 'undefined') {
  delete (L.Icon.Default.prototype as any)._getIconUrl
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  })
}

function MapContent({ farmData }: { farmData: FarmGeoJSON }) {
  const map = useMap()

  useEffect(() => {
    if (farmData.features.length > 0) {
      const bounds = L.geoJSON(farmData).getBounds()
      map.fitBounds(bounds, { padding: [20, 20] })
    }
  }, [farmData, map])

  return (
    <GeoJSON
      data={farmData}
      style={(feature) => {
        const ndvi = feature?.properties?.ndvi || 0
        return {
          fillColor: getNDVIColor(ndvi),
          weight: 2,
          opacity: 1,
          color: 'white',
          fillOpacity: 0.7,
        }
      }}
      onEachFeature={(feature, layer) => {
        const props = feature.properties
        if (props) {
          const popupContent = `
            <div class="p-2">
              <h3 class="font-semibold text-gray-900">Farm Health</h3>
              <p class="text-sm text-gray-600">NDVI: ${props.ndvi.toFixed(2)}</p>
              <p class="text-sm text-gray-600">Status: ${props.health}</p>
              <p class="text-sm text-gray-600">Area: ${props.area_hectares} hectares</p>
            </div>
          `
          layer.bindPopup(popupContent)
        }
      }}
    />
  )
}

interface MapClientProps {
  farmData: FarmGeoJSON
  className?: string
}

export function MapClient({ farmData, className = "" }: MapClientProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className={`relative ${className}`}>
        <div className="h-[500px] w-full rounded-lg bg-gray-200 flex items-center justify-center">
          <div className="text-gray-500">Loading map...</div>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      <MapContainer
        center={[30.245, -97.745]} // Austin, TX area
        zoom={13}
        className="h-full w-full rounded-lg"
        style={{ height: '500px', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapContent farmData={farmData} />
      </MapContainer>
      
      {/* Map Legend */}
      <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-lg border border-gray-200">
        <h4 className="text-sm font-semibold text-gray-900 mb-2">Crop Health</h4>
        <div className="space-y-1 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded" style={{ backgroundColor: '#10B981' }}></div>
            <span className="text-gray-600">Healthy (NDVI &gt; 0.6)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded" style={{ backgroundColor: '#F59E0B' }}></div>
            <span className="text-gray-600">Moderate (0.3-0.6)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded" style={{ backgroundColor: '#EF4444' }}></div>
            <span className="text-gray-600">Stressed (&lt; 0.3)</span>
          </div>
        </div>
      </div>
    </div>
  )
}

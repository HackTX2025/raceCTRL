// Core data types for AgriSight

export interface NDVIData {
  farmId: string
  ndvi: number
  health: 'healthy' | 'moderate' | 'stressed'
  timestamp: string
  geometry: {
    type: 'Polygon'
    coordinates: number[][][]
  }
  area_hectares: number
}

export interface WeatherForecast {
  date: string
  temp: number
  weather: {
    main: string
    icon: string
  }
  rain: number
}

export interface WeatherData {
  location: string
  forecast: WeatherForecast[]
  rainfall_total: number
  rainfall_deficit: number
  alert: string
  timestamp: string
}

export interface Transaction {
  date: string
  description: string
  amount: number
}

export interface FinancialData {
  customerId: string
  accountId: string
  nickname: string
  balance: number
  transactions: Transaction[]
  timestamp: string
}

export interface Recommendation {
  severity: 'low' | 'medium' | 'high'
  action: string
  reasoning: string
  confidence: number
  timestamp: string
}

export interface FarmPolygon {
  type: 'Feature'
  geometry: {
    type: 'Polygon'
    coordinates: number[][][]
  }
  properties: {
    ndvi: number
    health: 'healthy' | 'moderate' | 'stressed'
    area_hectares: number
  }
}

export interface FarmGeoJSON {
  type: 'FeatureCollection'
  features: FarmPolygon[]
}

// API Response types
export interface APIResponse<T> {
  data: T
  success: boolean
  error?: string
  timestamp: string
}

// Component Props types
export interface MapViewProps {
  farmId?: string
  className?: string
}

export interface CardProps {
  title: string
  children: React.ReactNode
  icon?: React.ReactNode
  className?: string
}

export interface PanelProps {
  data: any
  loading?: boolean
  error?: string
}

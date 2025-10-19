# AgriSight Project Overview

## 🌱 Project Description

AgriSight is a hackathon project that translates satellite crop health data into financial guidance for farmers. The application provides real-time insights into crop health, weather conditions, and financial recommendations to help farmers make informed decisions.

## 🎯 Project Goals

- **Primary Goal**: Create a comprehensive dashboard that combines satellite data, weather information, and financial data to provide actionable insights for farmers
- **Secondary Goal**: Demonstrate the integration of multiple data sources (NDVI, weather, financial) in a single, user-friendly interface
- **Technical Goal**: Build a scalable, maintainable application using modern web technologies

## 🏗️ Architecture Overview

### Frontend
- **Framework**: Next.js 15 with React 19
- **Styling**: TailwindCSS
- **Maps**: Leaflet.js with React-Leaflet
- **Charts**: Recharts (for future implementation)
- **Icons**: Lucide React

### Backend
- **API Routes**: Next.js API routes
- **Data Sources**: 
  - NDVI data from Sentinel-2 satellites
  - Weather data from OpenWeatherMap API
  - Financial data from Capital One's Nessie API
- **Database**: Supabase (for future implementation)

### Key Features
- **Interactive Map**: Display farm boundaries with NDVI overlay
- **Crop Health Monitoring**: Real-time NDVI analysis and health status
- **Weather Integration**: 7-day weather forecast with rainfall analysis
- **Financial Recommendations**: AI-powered financial advice based on crop health and weather
- **Responsive Design**: Mobile-first approach with desktop optimization

## 📊 Data Flow

```
Satellite Data → NDVI Processing → Health Analysis → Financial Recommendations
Weather API → Forecast Processing → Rainfall Analysis → Risk Assessment
Financial API → Account Data → Transaction Analysis → Budget Planning
```

## 🚀 Current Status

- ✅ **Core Infrastructure**: Next.js setup, TypeScript configuration, TailwindCSS
- ✅ **API Routes**: NDVI, weather, financial, recommendation, and status endpoints
- ✅ **UI Components**: Map, crop health cards, weather cards, financial cards
- ✅ **Recommendation Engine**: Decision tree logic for financial advice
- ✅ **Mock Data System**: Comprehensive mock data for development and testing
- ✅ **Error Handling**: Error boundaries and fallback systems

## 🔄 Development Phases

### Phase 1: Foundation (Completed)
- Project setup and configuration
- Basic UI components
- API route structure
- Mock data implementation

### Phase 2: Integration (In Progress)
- Real API integration
- Enhanced error handling
- Performance optimization
- Testing implementation

### Phase 3: Enhancement (Planned)
- Advanced features
- User authentication
- Data persistence
- Production deployment

## 🛠️ Technology Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| Frontend | Next.js 15 | React framework with SSR/SSG |
| Frontend | React 19 | UI component library |
| Frontend | TypeScript | Type safety and development experience |
| Frontend | TailwindCSS | Utility-first CSS framework |
| Frontend | Leaflet.js | Interactive maps |
| Backend | Next.js API Routes | Server-side API endpoints |
| Backend | Node.js | JavaScript runtime |
| Data | OpenWeatherMap API | Weather data |
| Data | Nessie API | Financial data |
| Data | Sentinel-2 | Satellite imagery (future) |
| Database | Supabase | PostgreSQL database (future) |

## 📈 Success Metrics

- **Technical Metrics**:
  - Page load time < 3 seconds
  - Error rate < 1%
  - Test coverage > 90%
  - Performance score > 90

- **User Experience Metrics**:
  - User engagement increase
  - Reduced bounce rate
  - Positive user feedback
  - Feature adoption rate

## 🔗 Related Documentation

- [Product Requirements Document](./prd.md) - Detailed project specifications
- [Development Guide](../development/guide.md) - Step-by-step development instructions
- [Implementation Summary](../implementation/summary.md) - Current implementation status
- [Backend Tasks](./backend-tasks.md) - Backend development tasks

---

*Last updated: October 18, 2025*

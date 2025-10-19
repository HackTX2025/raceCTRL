# AgriSight - RaceCTRL Hackathon Project

## 🌱 About AgriSight

AgriSight is a comprehensive farm management dashboard that translates satellite crop health data into financial guidance for farmers. Built for the RaceCTRL hackathon, this application combines real-time NDVI data, weather forecasts, and financial information to provide actionable insights for agricultural decision-making.

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd raceCTRL
   ```

2. **Install dependencies**
   ```bash
   cd agrisight
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📚 Documentation

All project documentation is organized in the [`docs/`](./docs/) directory:

- **[📋 Project Overview](./docs/project/overview.md)** - High-level project description and goals
- **[📖 Product Requirements](./docs/project/prd.md)** - Complete project specifications
- **[🛠️ Development Guide](./docs/development/guide.md)** - Step-by-step development instructions
- **[📊 Implementation Status](./docs/implementation/summary.md)** - Current implementation progress
- **[🎨 UI Integration Plan](./docs/development/ui-revamp-plan.md)** - Backend integration strategy
- **[🧪 Testing Checklist](./docs/development/testing-checklist.md)** - Testing procedures

## 🏗️ Project Structure

```
raceCTRL/
├── agrisight/                 # Main Next.js application
│   ├── src/
│   │   ├── app/              # Next.js app router
│   │   ├── components/       # React components
│   │   ├── lib/              # Utility functions and services
│   │   └── types/            # TypeScript type definitions
│   └── package.json
├── docs/                     # Project documentation
│   ├── project/              # Project specifications and requirements
│   ├── development/          # Development guides and procedures
│   ├── implementation/       # Implementation status and reports
│   └── figma/                # Figma integration documentation
└── PythonTesting/            # Python testing utilities
```

## 🎯 Key Features

- **🌍 Interactive Farm Map**: Satellite imagery with NDVI overlay
- **📊 Crop Health Monitoring**: Real-time health status and recommendations
- **🌤️ Weather Integration**: 7-day forecasts with rainfall analysis
- **💰 Financial Guidance**: AI-powered recommendations based on crop health
- **📱 Responsive Design**: Mobile-first approach with desktop optimization

## 🛠️ Technology Stack

- **Frontend**: Next.js 15, React 19, TypeScript, TailwindCSS
- **Maps**: Leaflet.js with React-Leaflet
- **APIs**: OpenWeatherMap, Capital One Nessie
- **Data**: NDVI satellite data, weather forecasts, financial data

## 📈 Current Status

- ✅ Core infrastructure and API routes
- ✅ Interactive map with NDVI visualization
- ✅ Weather and financial data integration
- ✅ Recommendation engine implementation
- ✅ Comprehensive error handling and fallbacks
- 🔄 UI enhancement and backend integration (in progress)

## 🤝 Contributing

1. Read the [Development Guide](./docs/development/guide.md)
2. Check the [Implementation Status](./docs/implementation/summary.md)
3. Follow the [Testing Checklist](./docs/development/testing-checklist.md)
4. Submit pull requests with clear descriptions

## 📄 License

This project is developed for the RaceCTRL hackathon. See individual files for specific licensing information.

---

*Built with ❤️ for the RaceCTRL Hackathon*
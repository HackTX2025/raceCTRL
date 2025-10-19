# AgriSight 🌾

**Empowering Farmers with Financial Foresight**

AgriSight translates satellite-based crop health data into actionable financial guidance, helping farmers make smarter decisions about savings, loans, and resource allocation.

## 🚀 Features

- **Interactive NDVI Map**: Visualize crop health using satellite data with color-coded overlays
- **Weather Integration**: 7-day weather forecast with rainfall deficit analysis
- **Financial Dashboard**: Account balance and transaction history integration
- **Smart Recommendations**: AI-powered financial advice based on crop health and weather conditions
- **Real-time Updates**: Live data from multiple APIs with fallback mock data

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, TypeScript, TailwindCSS
- **Maps**: Leaflet.js with React-Leaflet
- **Icons**: Lucide React
- **Database**: Supabase
- **APIs**: OpenWeatherMap, Nessie (Capital One), Sentinel-2
- **Styling**: TailwindCSS with custom components

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd agrisight
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Fill in your API keys:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
   OPENWEATHER_API_KEY=your_openweather_api_key_here
   NESSIE_API_KEY=your_nessie_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔑 API Keys Setup

### OpenWeatherMap API
1. Go to [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Get your API key
4. Add it to your `.env.local` file

### Nessie API (Capital One)
1. Go to [Nessie API](http://api.nessieisreal.com/)
2. Sign up for a free account
3. Get your API key
4. Add it to your `.env.local` file

### Supabase (Optional)
1. Go to [Supabase](https://supabase.com)
2. Create a new project
3. Get your project URL and anon key
4. Add them to your `.env.local` file

## 📁 Project Structure

```
agrisight/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API routes
│   │   │   ├── ndvi/          # NDVI data endpoint
│   │   │   ├── weather/       # Weather data endpoint
│   │   │   ├── financial/     # Financial data endpoint
│   │   │   ├── recommendation/ # Recommendation engine
│   │   │   └── status/        # Health check endpoint
│   │   ├── about/             # About page
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Dashboard page
│   ├── components/            # React components
│   │   ├── layout/            # Layout components
│   │   ├── map/               # Map components
│   │   ├── panels/            # Dashboard panels
│   │   └── ui/                # UI components
│   ├── lib/                   # Utilities and configurations
│   │   ├── mockData.ts        # Mock data for demo
│   │   ├── recommendationEngine.ts # Recommendation logic
│   │   ├── supabase.ts        # Supabase client
│   │   └── utils.ts           # Utility functions
│   └── types/                 # TypeScript type definitions
├── public/                    # Static assets
└── README.md
```

## 📚 Documentation

For comprehensive documentation, see the main project documentation:

- **[📋 Project Overview](../docs/project/overview.md)** - High-level project description
- **[📖 Product Requirements](../docs/project/prd.md)** - Complete specifications
- **[🛠️ Development Guide](../docs/development/guide.md)** - Development instructions
- **[📊 Implementation Status](../docs/implementation/summary.md)** - Current progress
- **[🎨 UI Integration Plan](../docs/development/ui-revamp-plan.md)** - Backend integration

## 🎯 API Endpoints

### GET /api/ndvi
Returns NDVI data for a farm
- **Query params**: `farmId` (optional, defaults to "demo1")
- **Response**: NDVI score, health status, coordinates, area

### GET /api/weather
Returns weather forecast and rainfall analysis
- **Query params**: `lat`, `lon` (optional, defaults to Austin, TX)
- **Response**: 7-day forecast, rainfall total, deficit analysis

### GET /api/financial
Returns financial data for a customer
- **Query params**: `customerId` (optional, defaults to "demo")
- **Response**: Account balance, transactions, account info

### POST /api/recommendation
Generates financial recommendations
- **Body**: `{ ndvi, rainfallDeficit, balance }`
- **Response**: Recommendation with severity, action, reasoning, confidence

### GET /api/status
Returns system health status
- **Response**: API status, service health, configuration

## 🎨 Demo Scenarios

The application includes three demo scenarios:

1. **Healthy Farm** (NDVI: 0.68)
   - Green overlay on map
   - Investment recommendations
   - Low priority

2. **Moderate Stress** (NDVI: 0.45)
   - Yellow overlay on map
   - Savings recommendations
   - Medium priority

3. **Critical Condition** (NDVI: 0.28)
   - Red overlay on map
   - Emergency loan recommendations
   - High priority

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

This is a hackathon project, but contributions are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is created for HackTX 2025 hackathon. All rights reserved.

## 👥 Team

- **Jeslyn** - Frontend Development
- **Jace** - Frontend Development  
- **Fellipe** - Backend Development
- **Atharv** - Backend Development

## 🏆 Hackathon Info

- **Event**: HackTX 2025
- **Duration**: 7 hours
- **Target Prizes**: Best Capital One Hack, Best Overall, Best Design
- **Theme**: Financial Technology & Agriculture

---

**Built with ❤️ for farmers worldwide**
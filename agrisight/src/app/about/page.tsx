import { Leaf, Satellite, DollarSign, Users, Target, Award } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Leaf className="h-16 w-16 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About AgriSight</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering Farmers with Financial Foresight through Satellite-Based Crop Health Analysis
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            AgriSight bridges the gap between agricultural data and financial planning. We translate 
            satellite-based crop health data (NDVI) into actionable financial guidance, helping farmers 
            make smarter decisions about savings, loans, and resource allocation. Our platform empowers 
            farmers with the financial foresight they need to build resilient agricultural businesses.
          </p>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Satellite className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Satellite Data</h3>
              <p className="text-sm text-gray-600">
                Analyze crop health using NASA Sentinel-2 satellite imagery and NDVI calculations
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Financial Integration</h3>
              <p className="text-sm text-gray-600">
                Connect with banking APIs to provide personalized financial recommendations
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Target className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Smart Recommendations</h3>
              <p className="text-sm text-gray-600">
                Get actionable advice on savings, loans, and resource allocation based on crop conditions
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Team</h2>
          <div className="flex items-center gap-4 mb-4">
            <Users className="h-6 w-6 text-gray-600" />
            <span className="text-lg font-medium text-gray-900">HackTX 2025 Team</span>
          </div>
          <p className="text-gray-600 mb-4">
            Built by a passionate team of 4 developers in 7 hours for the HackTX 2025 hackathon.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="font-semibold text-gray-900">Jeslyn</div>
              <div className="text-gray-600">Frontend</div>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="font-semibold text-gray-900">Jace</div>
              <div className="text-gray-600">Frontend</div>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="font-semibold text-gray-900">Fellipe</div>
              <div className="text-gray-600">Backend</div>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="font-semibold text-gray-900">Atharv</div>
              <div className="text-gray-600">Backend</div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="font-semibold text-gray-900 mb-1">Next.js</div>
              <div className="text-sm text-gray-600">React Framework</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="font-semibold text-gray-900 mb-1">TailwindCSS</div>
              <div className="text-sm text-gray-600">Styling</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="font-semibold text-gray-900 mb-1">Leaflet</div>
              <div className="text-sm text-gray-600">Interactive Maps</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="font-semibold text-gray-900 mb-1">Supabase</div>
              <div className="text-sm text-gray-600">Database</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="font-semibold text-gray-900 mb-1">OpenWeather</div>
              <div className="text-sm text-gray-600">Weather API</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="font-semibold text-gray-900 mb-1">Nessie API</div>
              <div className="text-sm text-gray-600">Banking API</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="font-semibold text-gray-900 mb-1">Sentinel-2</div>
              <div className="text-sm text-gray-600">Satellite Data</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="font-semibold text-gray-900 mb-1">TypeScript</div>
              <div className="text-sm text-gray-600">Type Safety</div>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center gap-4 mb-4">
            <Award className="h-6 w-6 text-yellow-600" />
            <h2 className="text-2xl font-semibold text-gray-900">Impact & Vision</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            AgriSight addresses the critical need for financial tools in agriculture. With over 500 million 
            farmers globally lacking access to sophisticated financial planning tools, our platform has the 
            potential to transform agricultural finance and improve food security worldwide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">500M+</div>
              <div className="text-sm text-gray-600">Farmers Globally</div>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">Free</div>
              <div className="text-sm text-gray-600">Satellite Data</div>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">Real-time</div>
              <div className="text-sm text-gray-600">Recommendations</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

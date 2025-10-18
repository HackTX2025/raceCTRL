import { Leaf, Github, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Leaf className="h-6 w-6 text-green-600" />
            <div>
              <span className="text-lg font-semibold text-gray-900">AgriSight</span>
              <p className="text-sm text-gray-600">Empowering Farmers with Financial Foresight</p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-600 mb-2">Built with</p>
            <div className="flex flex-wrap justify-center md:justify-end gap-2 text-xs text-gray-500">
              <span className="bg-gray-200 px-2 py-1 rounded">Next.js</span>
              <span className="bg-gray-200 px-2 py-1 rounded">TailwindCSS</span>
              <span className="bg-gray-200 px-2 py-1 rounded">Leaflet</span>
              <span className="bg-gray-200 px-2 py-1 rounded">Supabase</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © 2025 AgriSight. HackTX 2025 Hackathon Project.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a 
              href="#" 
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

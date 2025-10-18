import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AgriSight - Empowering Farmers with Financial Foresight',
  description: 'Translate satellite-based crop health data into actionable financial guidance for farmers.',
  keywords: ['agriculture', 'fintech', 'NDVI', 'crop health', 'financial planning'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 bg-gray-50">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
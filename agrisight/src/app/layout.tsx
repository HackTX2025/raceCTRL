import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

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
        {children}
      </body>
    </html>
  )
}
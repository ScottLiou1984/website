import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'MUGII - Modern Japanese Cuisine',
  description: 'Experience modern Japanese cuisine at MUGII. Fresh high-quality ingredients with elevated technique.',
  keywords: 'ramen, sushi, Japanese food, restaurant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

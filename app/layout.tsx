import type { Metadata } from 'next'
import './globals.css'
import { CosmicBadge } from '@/components/CosmicBadge'

export const metadata: Metadata = {
  title: 'Digital Agency - Professional Web Development & Marketing Services',
  description: 'Professional digital agency offering web development, UI/UX design, and digital marketing services. Transform your business with our expert team.',
  keywords: 'digital agency, web development, UI/UX design, digital marketing, React, Next.js',
  authors: [{ name: 'Digital Agency' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Digital Agency - Professional Web Development & Marketing Services',
    description: 'Professional digital agency offering web development, UI/UX design, and digital marketing services.',
    type: 'website',
    siteName: 'Digital Agency',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Agency - Professional Web Development & Marketing Services',
    description: 'Professional digital agency offering web development, UI/UX design, and digital marketing services.',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        {children}
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}
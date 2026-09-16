import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Primasentials | Care You Can Trust',
  description: 'Premium adult incontinence care designed around dignity, comfort, dryness and dependable protection.',
  keywords: ['Primasentials', 'adult incontinence care', 'adult briefs', 'healthcare products', 'South Africa'],
  authors: [{ name: 'Primasentials' }],
  metadataBase: new URL('https://primassentials.com'),
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Primasentials | Care You Can Trust',
    description: 'Premium adult incontinence care designed around dignity, comfort, dryness and dependable protection.',
    type: 'website',
    siteName: 'Primasentials',
    locale: 'en_ZA',
    url: '/',
    images: [{ url: '/assets/primassentials-brand.webp', width: 1030, height: 687, alt: 'Primasentials adult care products' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Primasentials | Care You Can Trust',
    description: 'Premium adult incontinence care designed around dignity, comfort and dependable protection.',
    images: ['/assets/primassentials-brand.webp'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#102d3d',
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Primasentials',
  description: 'Premium adult incontinence care designed around dignity, comfort, dryness and dependable protection.',
  url: 'https://primassentials.com',
  logo: 'https://primassentials.com/assets/primassentials-logo.webp',
  email: 'info@primassentials.com',
  areaServed: 'ZA',
  makesOffer: {
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Product',
      name: 'Primasentials Adult Briefs',
      description: 'High-absorbency adult incontinence briefs with leak protection, odour control and a secure, refastenable fit.',
      brand: { '@type': 'Brand', name: 'Primasentials' },
    },
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-ZA">
    <head>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </head>
    <body>
      <a className="skip-link" href="#top">Skip to content</a>
      {children}
    </body>
  </html>
}

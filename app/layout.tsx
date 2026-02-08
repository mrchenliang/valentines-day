import type { Metadata } from 'next'
import './globals.css'

const baseUrl = 'https://mrchenliang.github.io/valentines-day'

export const metadata: Metadata = {
  title: 'Valentine\'s Day 💕',
  description: 'A special question for someone special',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Valentine\'s Day 💕',
    description: 'A special question for someone special',
    type: 'website',
    url: baseUrl,
    siteName: 'Valentine\'s Day',
    images: [
      {
        url: `${baseUrl}/couple-image-1.JPG`,
        width: 1200,
        height: 1200,
        alt: 'Valentine\'s Day 💕',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Valentine\'s Day 💕',
    description: 'A special question for someone special',
    images: [`${baseUrl}/couple-image-1.JPG`],
  },
  metadataBase: new URL(baseUrl),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

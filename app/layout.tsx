import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Akshita Moda | Software Engineer & Cybersecurity Enthusiast',
  description: 'Premium developer portfolio. Computer Science student at VIT Vellore specializing in Information Security. Backend developer, AI enthusiast, and cybersecurity professional.',
  generator: 'v0.app',
  keywords: ['Software Engineer', 'Backend Developer', 'Cybersecurity', 'AI Developer', 'Full Stack', 'Portfolio'],
  openGraph: {
    title: 'Akshita Moda | Software Engineer & Cybersecurity Enthusiast',
    description: 'Premium developer portfolio showcasing projects and experience.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akshita Moda | Software Engineer',
    description: 'Premium developer portfolio.',
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [{ media: '(prefers-color-scheme: dark)', color: '#020617' }],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} antialiased bg-background text-foreground`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

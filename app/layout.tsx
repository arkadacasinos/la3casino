import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteUrl = 'https://la3casino.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'La Casino — официальный сайт, зеркало и игра онлайн',
  description: 'Информационный гид La Casino: официальный сайт, рабочее зеркало, вход, игры онлайн, безопасность и ответственная игра.',
  generator: 'Next.js',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'La Casino — официальный сайт, зеркало и игра онлайн',
    description: 'Понятный гид по доступу, играм и безопасному использованию La Casino.',
    url: siteUrl,
    siteName: 'La Casino Guide',
    locale: 'ru_RU',
    type: 'website',
    images: [{ url: '/la-casino-hero.png', width: 960, height: 640, alt: 'La Casino Guide' }],
  },
  twitter: { card: 'summary_large_image', title: 'La Casino — гид по игре онлайн', description: 'Официальный сайт, зеркало, вход и ответственный подход.', images: ['/la-casino-hero.png'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  icons: { icon: '/icon.svg', apple: '/apple-icon.png' },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#11100f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="bg-background">
      <head>
        <meta name="yandex-verification" content="13c04a9b9805a7b5" />
        <meta
          name="keywords"
          content="la casino, la casino зеркало, la casino играть, la casino официальный, la casino официальный сайт, лa казино, ля казино, ля казино зеркало, ля казино зеркало рабочее, ля казино играть, ля казино онлайн, ля казино официальный, ля казино официальный сайт"
        />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

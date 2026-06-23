import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Poppins } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['600', '700', '800'],
  subsets: ['latin'],
})

const siteUrl = 'https://ronaletransporte.com.br'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title:
    'Ronale Transporte | Rede de Despacho para Transportadoras em Mococa-SP',
  description:
    'Rede de Despacho da Ronale Transporte em Mococa-SP: gestão de fretes, monitoramento logístico e distribuição de cargas com cobertura nacional. Solicite sua cotação.',
  keywords: [
    'rede de despacho Mococa',
    'transportadora Mococa SP',
    'gestão de fretes',
    'distribuição de cargas',
    'logística Mococa',
    'Ronale Transporte',
  ],
  authors: [{ name: 'Ronale Transporte' }],
  generator: 'v0.app',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'Ronale Transporte',
    title: 'Ronale Transporte | Rede de Despacho em Mococa-SP',
    description:
      'Rede de Despacho com gestão de fretes, monitoramento logístico e cobertura nacional. Base em Mococa-SP.',
    images: [
      {
        url: '/images/hero-caminhao-mapa.png',
        width: 1200,
        height: 630,
        alt: 'Caminhão da Ronale Transporte com mapa de rotas pelo Brasil',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ronale Transporte | Rede de Despacho em Mococa-SP',
    description:
      'Rede de Despacho com gestão de fretes, monitoramento logístico e cobertura nacional.',
    images: ['/images/hero-caminhao-mapa.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#0A2A5E',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} bg-background`}
    >
      <head>
        {/* Google Analytics GA4 */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-2FG4R6KKES"
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-2FG4R6KKES');
              `}
            </Script>
          </>
        )}
      </head>

      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

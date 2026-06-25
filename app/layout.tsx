'use client'

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
  title: 'Ronale Transporte | Transportadora em Mococa-SP',
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
    title: 'Ronale Transporte | Transportadora e Rede de Despacho em Mococa-SP',
    description:
      'Transportadora e Rede de Despacho com gestão de fretes, monitoramento logístico e cobertura nacional.',
    images: [
      {
        url: '/images/hero.png',
        width: 1200,
        height: 630,
        alt: 'Caminhões da Ronale Transporte',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ronale Transporte | Rede de Despacho em Mococa-SP',
    description:
      'Rede de Despacho com gestão de fretes, monitoramento logístico e cobertura nacional.',
    images: ['/images/hero.png'], 
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
    
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id=GTM-K29LSMFZ'+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K29LSMFZ');
          `}
        </Script>
      </head>

      <body>
      
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K29LSMFZ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {children}
        <Analytics />
      </body>
    </html>
  )
}

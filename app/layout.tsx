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
    'Rede de Despacho da Ronale Transporte em Mococa-SP: gestão de fretes, monitoramento logístico e distribuição de cargas com cobertura nacional.',
  openGraph: {
    images: ['/images/hero.png'],
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
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable}`}
    >
      <head>
  
        <Script id="gtm-head" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id=GTM-K29LSMFZ'+dl;
            f.parentNode.insertBefore(j,f);
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

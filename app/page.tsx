import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Sobre } from '@/components/sobre'
import { Servicos } from '@/components/servicos'
import { Beneficios } from '@/components/beneficios'
import { AreaAtuacao } from '@/components/area-atuacao'
import { Depoimentos } from '@/components/depoimentos'
import { CtaFinal } from '@/components/cta-final'
import { SiteFooter } from '@/components/site-footer'
import { WhatsappFloat } from '@/components/whatsapp-float'
import { site } from '@/lib/site'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MovingCompany',
  name: 'Ronale Transporte',
  description:
    'Transportadora completa em Mococa-SP, com gestão de fretes, monitoramento logístico e distribuição de cargas com cobertura nacional.',
  areaServed: 'BR',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mococa',
    addressRegion: 'SP',
    addressCountry: 'BR',
  },
  telephone: `+${site.whatsappNumber}`,
  email: site.email,
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Beneficios />
        <AreaAtuacao />
        <Depoimentos />
        <CtaFinal />
      </main>
      <SiteFooter />
      <WhatsappFloat />
    </>
  )
}

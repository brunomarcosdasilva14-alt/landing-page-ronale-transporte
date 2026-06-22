import Image from 'next/image'
import { MessageCircle, FileText, MapPin } from 'lucide-react'
import { whatsappLink } from '@/lib/site'

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-primary text-primary-foreground"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            Base em Mococa - SP
          </span>

          <h1 className="font-heading text-3xl font-extrabold leading-tight text-balance sm:text-4xl lg:text-5xl">
            Rede de Despacho para Transportadoras em Mococa-SP
          </h1>

          <p className="max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            Conectamos transportadoras a uma estrutura completa de despacho,
            gestão de fretes e distribuição de cargas com cobertura nacional.
            Mais agilidade, segurança e controle em cada operação.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-red px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:opacity-90"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Falar no WhatsApp
            </a>
            <a
              href="#cotacao"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/30 bg-primary-foreground/5 px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/15"
            >
              <FileText className="h-5 w-5" aria-hidden="true" />
              Solicitar Cotação
            </a>
          </div>

          <dl className="mt-2 grid grid-cols-3 gap-4 border-t border-primary-foreground/15 pt-6">
            <div>
              <dt className="sr-only">Cobertura</dt>
              <dd className="font-heading text-2xl font-bold">Nacional</dd>
              <p className="text-xs text-primary-foreground/70">Cobertura</p>
            </div>
            <div>
              <dt className="sr-only">Atendimento</dt>
              <dd className="font-heading text-2xl font-bold">Ágil</dd>
              <p className="text-xs text-primary-foreground/70">Atendimento</p>
            </div>
            <div>
              <dt className="sr-only">Operação</dt>
              <dd className="font-heading text-2xl font-bold">Segura</dd>
              <p className="text-xs text-primary-foreground/70">Operação</p>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-xl border border-primary-foreground/15 shadow-2xl">
            <Image
              src="/images/hero-caminhao-mapa.png"
              alt="Caminhão da Ronale Transporte com mapa do Brasil e rotas logísticas conectadas"
              width={720}
              height={540}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

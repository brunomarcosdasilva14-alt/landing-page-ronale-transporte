import Image from 'next/image'
import { MessageCircle, FileText } from 'lucide-react'
import { whatsappLink } from '@/lib/site'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="container grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
        
        {/* TEXTO */}
        <div className="flex flex-col gap-6">
          
          <h1 className="font-heading text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Rede de Despacho para Transportadoras em Todo o Brasil
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            Conectamos transportadoras a uma estrutura completa de despacho,
            gestão de fretes e distribuição de cargas com cobertura nacional.
            Mais agilidade, segurança e controle em cada operação.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-red px-6 py-3 text-base font-semibold text-white transition hover:opacity-90"
            >
              <MessageCircle className="h-5 w-5" />
              Falar no WhatsApp
            </a>

            <a
              href="#cotacao"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/30 bg-primary-foreground/5 px-6 py-3 text-base font-semibold text-primary-foreground transition hover:bg-primary-foreground/15"
            >
              <FileText className="h-5 w-5" />
              Solicitar Cotação
            </a>
          </div>

         
          <div className="mt-4 grid grid-cols-3 gap-4 border-t border-primary-foreground/15 pt-6">
            <div>
              <p className="font-heading text-2xl font-bold">Nacional</p>
              <span className="text-xs text-primary-foreground/70">Cobertura</span>
            </div>
            <div>
              <p className="font-heading text-2xl font-bold">Ágil</p>
              <span className="text-xs text-primary-foreground/70">Atendimento</span>
            </div>
            <div>
              <p className="font-heading text-2xl font-bold">Segura</p>
              <span className="text-xs text-primary-foreground/70">Operação</span>
            </div>
          </div>

        </div>

     
        <div className="relative">
          <div className="overflow-hidden rounded-xl border border-primary-foreground/15 shadow-2xl">
            <Image
              src="/images/hero-caminhao-mapa.png"
              alt="Caminhão com rotas logísticas pelo Brasil"
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

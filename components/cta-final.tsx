import { MessageCircle, Phone } from 'lucide-react'
import { whatsappLink, site } from '@/lib/site'

export function CtaFinal() {
  return (
    <section id="cotacao" className="bg-brand-red py-16 text-primary-foreground md:py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center">
        <h2 className="font-heading text-2xl font-extrabold text-balance sm:text-4xl">
          Pronto para otimizar o despacho da sua transportadora?
        </h2>
        <p className="max-w-2xl text-pretty leading-relaxed text-primary-foreground/90 sm:text-lg">
          Fale agora com a equipe da Ronale Transporte e descubra como nossa
          Rede de Despacho pode trazer mais agilidade, segurança e cobertura
          nacional para a sua operação.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 text-base font-bold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Solicitar Cotação no WhatsApp
          </a>
          <a
            href={`tel:+${site.whatsappNumber}`}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/40 px-8 py-4 text-base font-bold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}

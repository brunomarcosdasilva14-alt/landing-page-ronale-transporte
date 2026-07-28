import Image from 'next/image'
import { MapPin, Globe2 } from 'lucide-react'

export function AreaAtuacao() {
  return (
    <section id="atuacao" className="bg-primary py-16 text-primary-foreground md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
        <div className="flex flex-col gap-5">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand-red">
            Área de Atuação
          </span>
          <h2 className="font-heading text-2xl font-bold text-balance sm:text-3xl">
            De Mococa-SP para todo o Brasil
          </h2>
          <p className="text-pretty leading-relaxed text-primary-foreground/80">
            Nossa base operacional está  localizada em
            Mococa-SP,o que nos permite atender com
            agilidade a região e conectar cargas a destinos em todo o território
            nacional.
          </p>

          <div className="mt-2 flex flex-col gap-4">
            <div className="flex items-start gap-3 rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" aria-hidden="true" />
              <div>
                <h3 className="font-heading font-bold">Sede em Mococa-SP</h3>
                <p className="text-sm text-primary-foreground/75">
                  Atendimento local com foco na região e proximidade com os
                  parceiros.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-4">
              <Globe2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" aria-hidden="true" />
              <div>
                <h3 className="font-heading font-bold">Cobertura nacional</h3>
                <p className="text-sm text-primary-foreground/75">
                  Rede de Despacho que conecta sua transportadora a destinos em
                  todo o Brasil.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-primary-foreground/15 shadow-2xl">
          <Image
            src="/images/mapa-brasil-atuacao.png"
            alt="Mapa do Brasil com rotas logísticas partindo de Mococa-SP para todo o país"
            width={680}
            height={560}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

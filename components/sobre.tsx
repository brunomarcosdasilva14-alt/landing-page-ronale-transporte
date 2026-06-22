import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'

const pontos = [
  'Estrutura sólida de rede de despacho',
  'Equipe especializada em logística',
  'Compromisso com prazos e segurança',
]

export function Sobre() {
  return (
    <section id="sobre" className="bg-background py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
        <div className="order-2 overflow-hidden rounded-xl border border-border shadow-lg md:order-1">
          <Image
            src="/images/sobre-frota.png"
            alt="Frota de caminhões da Ronale Transporte em centro de distribuição"
            width={680}
            height={480}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="order-1 flex flex-col gap-5 md:order-2">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand-red">
            Sobre a Ronale Transporte
          </span>
          <h2 className="font-heading text-2xl font-bold text-balance text-primary sm:text-3xl">
            Logística que conecta a sua transportadora a todo o Brasil
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            A Ronale Transporte é uma empresa de logística sediada em Mococa-SP,
            especializada em Rede de Despacho para transportadoras. Atuamos como
            parceira estratégica na gestão e distribuição de cargas, oferecendo
            uma operação organizada, transparente e orientada por resultados.
          </p>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Unindo experiência no setor, tecnologia de monitoramento e uma
            equipe dedicada, garantimos que cada frete chegue ao destino com
            eficiência e segurança — fortalecendo a operação dos nossos
            parceiros em todo o território nacional.
          </p>
          <ul className="mt-2 flex flex-col gap-3">
            {pontos.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-red" aria-hidden="true" />
                <span className="font-medium text-foreground">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

import {
  Truck,
  Radar,
  PackageCheck,
  ShieldCheck,
  Headphones,
  Map,
} from 'lucide-react'

const servicos = [
  {
    icon: Truck,
    title: 'Gestão de Fretes',
    desc: 'Organização completa de fretes, do despacho à entrega, com controle de cada etapa da operação.',
  },
  {
    icon: Radar,
    title: 'Monitoramento Logístico',
    desc: 'Acompanhamento das cargas em tempo real para garantir previsibilidade e transparência.',
  },
  {
    icon: PackageCheck,
    title: 'Distribuição de Cargas',
    desc: 'Rede de despacho estruturada para distribuir cargas com agilidade por todo o país.',
  },
  {
    icon: ShieldCheck,
    title: 'Segurança Operacional',
    desc: 'Processos e protocolos que protegem a carga e reduzem riscos em toda a jornada.',
  },
  {
    icon: Headphones,
    title: 'Atendimento Ágil',
    desc: 'Equipe pronta para responder rápido, resolver demandas e apoiar a sua operação.',
  },
  {
    icon: Map,
    title: 'Cobertura Nacional',
    desc: 'Atuação em todo o Brasil, conectando origens e destinos com eficiência logística.',
  },
]

export function Servicos() {
  return (
    <section id="servicos" className="bg-muted py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand-red">
            Nossos Serviços
          </span>
          <h2 className="mt-2 font-heading text-2xl font-bold text-balance text-primary sm:text-3xl">
            Soluções completas em Transporte e Rede de Despacho.
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Tudo o que a sua transportadora precisa para operar com mais
            eficiência e segurança em um só lugar.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicos.map((s) => (
            <article
              key={s.title}
              className="group flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-colors group-hover:bg-brand-red">
                <s.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="font-heading text-lg font-bold text-primary">
                {s.title}
              </h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

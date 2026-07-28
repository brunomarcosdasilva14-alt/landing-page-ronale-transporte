import { Clock, TrendingUp, Lock, Users, BadgeCheck, Network } from 'lucide-react'

const beneficios = [
  {
    icon: Clock,
    title: 'Agilidade no despacho',
    desc: 'Processos otimizados que aceleram a saída e a chegada das cargas.',
  },
  {
    icon: TrendingUp,
    title: 'Redução de custos',
    desc: 'Operação eficiente que ajuda a reduzir custos logísticos da sua empresa.',
  },
  {
    icon: Lock,
    title: 'Mais segurança',
    desc: 'Protocolos e monitoramento que protegem a sua carga em cada trajeto.',
  },
  {
    icon: Users,
    title: 'Parceria de confiança',
    desc: 'Relacionamento próximo e transparente com cada transportadora parceira.',
  },
  {
    icon: BadgeCheck,
    title: 'Confiabilidade',
    desc: 'Compromisso real com prazos e com a qualidade do serviço prestado.',
  },
  {
    icon: Network,
    title: 'Rede integrada',
    desc: 'Estrutura conectada que amplia o alcance da sua operação no Brasil.',
  },
]

export function Beneficios() {
  return (
    <section id="beneficios" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand-red">
            Por que escolher a Ronale Transporte
          </span>
          <h2 className="mt-2 font-heading text-2xl font-bold text-balance text-primary sm:text-3xl">
            Benefícios que fortalecem a sua operação
          </h2>
        </div>

        <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {beneficios.map((b) => (
            <li key={b.title} className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                <b.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-heading text-base font-bold text-primary">
                  {b.title}
                </h3>
                <p className="mt-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {b.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

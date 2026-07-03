import { Star, Quote } from 'lucide-react'

const depoimentos = [
  {
    nome: 'Marcos Almeida',
    cargo: 'Transportadora parceira',
    texto:
      'A Ronale organizou todo o nosso despacho. Ganhamos agilidade e passamos a ter muito mais controle sobre as cargas.',
  },
  {
    nome: 'Patrícia Souza',
    cargo: 'Gestora de logística',
    texto:
      'Atendimento rápido e transparente. Sentimos segurança em cada operação e os prazos são realmente cumpridos.',
  },
  {
    nome: 'Rafael Carvalho',
    cargo: 'Motorista',
    texto:
      'Parceria que fez diferença no seu negócio!.',
  },
]

export function Depoimentos() {
  return (
    <section id="depoimentos" className="bg-muted py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand-red">
            Depoimentos
          </span>
          <h2 className="mt-2 font-heading text-2xl font-bold text-balance text-primary sm:text-3xl">
            Quem confia na Ronale Transporte
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {depoimentos.map((d) => (
            <figure
              key={d.nome}
              className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <Quote className="h-8 w-8 text-brand-red" aria-hidden="true" />
              <blockquote className="text-pretty leading-relaxed text-foreground">
                {d.texto}
              </blockquote>
              <div className="flex gap-0.5" aria-label="Avaliação 5 de 5 estrelas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-brand-red text-brand-red"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <figcaption className="mt-1 border-t border-border pt-4">
                <span className="block font-heading font-bold text-primary">
                  {d.nome}
                </span>
                <span className="text-sm text-muted-foreground">{d.cargo}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

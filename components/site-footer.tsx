import { Truck, MapPin, Phone, Mail, Camera, ThumbsUp, Briefcase } from 'lucide-react'
import { site, whatsappLink } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="bg-brand-blue-dark text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-red text-primary-foreground">
              <Truck className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-heading text-lg font-extrabold leading-none">
              RONALE
              <span className="block text-xs font-semibold tracking-widest text-primary-foreground/70">
                TRANSPORTE
              </span>
            </span>
          </div>
          <p className="text-pretty text-sm leading-relaxed text-primary-foreground/70">
            Rede de Despacho para transportadoras com gestão de fretes,
            monitoramento e cobertura nacional. Base em Mococa-SP.
          </p>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wide">
            Contato
          </h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-primary-foreground/80">
            <li>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary-foreground">
                <Phone className="h-4 w-4 text-brand-red" aria-hidden="true" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-primary-foreground">
                <Mail className="h-4 w-4 text-brand-red" aria-hidden="true" />
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wide">
            Endereço
          </h3>
          <p className="mt-4 flex items-start gap-2 text-sm text-primary-foreground/80">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" aria-hidden="true" />
            {site.address}
          </p>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wide">
            Redes Sociais
          </h3>
          <div className="mt-4 flex gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Ronale Transporte"
              className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-foreground/10 transition-colors hover:bg-brand-red"
            >
              <Camera className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook da Ronale Transporte"
              className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-foreground/10 transition-colors hover:bg-brand-red"
            >
              <ThumbsUp className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn da Ronale Transporte"
              className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-foreground/10 transition-colors hover:bg-brand-red"
            >
              <Briefcase className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-6xl px-4 py-5 text-center text-xs text-primary-foreground/60">
          {`© ${new Date().getFullYear()} Ronale Transporte. Todos os direitos reservados. Mococa - SP.`}
        </div>
      </div>
    </footer>
  )
}

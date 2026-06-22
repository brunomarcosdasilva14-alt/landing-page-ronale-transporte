'use client'

import { useState } from 'react'
import { Menu, X, Truck, Phone } from 'lucide-react'
import { whatsappLink } from '@/lib/site'

const navItems = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Atuação', href: '#atuacao' },
  { label: 'Depoimentos', href: '#depoimentos' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#topo" className="flex items-center gap-2" aria-label="Ronale Transporte - início">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Truck className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-heading text-lg font-extrabold leading-none text-primary">
            RONALE
            <span className="block text-xs font-semibold tracking-widest text-brand-red">
              TRANSPORTE
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-brand-red"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-md bg-brand-red px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90 md:inline-flex"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Fale Conosco
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-primary md:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-border bg-background px-4 py-3 md:hidden"
          aria-label="Navegação mobile"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2 text-sm font-medium text-foreground hover:bg-muted"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block rounded-md bg-brand-red px-2 py-2 text-center text-sm font-semibold text-primary-foreground"
              >
                Fale no WhatsApp
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

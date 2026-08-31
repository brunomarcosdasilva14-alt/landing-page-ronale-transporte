'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'
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
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur-md">
      
      <div className="container flex h-[72px] items-center justify-between">


        <a
          href="/"
          className="flex items-center transition-opacity duration-200 hover:opacity-90"
        >
          <Image
            src="/images/logo.png"
            alt="Ronale Transporte"
            width={160}
            height={60}
            sizes="160px"
            className="h-14 w-auto object-contain"
            priority
          />
        </a>


        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-foreground/80 transition-colors duration-200 hover:text-brand-red"
            >
              {item.label}
            </a>
          ))}
        </nav>


        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group hidden items-center gap-2.5 rounded-lg bg-brand-red px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-95 md:inline-flex"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
            <Phone className="h-3.5 w-3.5 transition-transform duration-200 group-hover:scale-110" />
          </span>

          <span>Solicitar cotação</span>
        </a>
        <button
          type="button"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-primary transition-colors hover:bg-muted md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background px-4 py-4 shadow-lg md:hidden">
          <ul className="flex flex-col gap-1">
            
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-brand-red"
                >
                  {item.label}
                </a>
              </li>
            ))}

            <li className="pt-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 rounded-lg bg-brand-red px-4 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:opacity-90"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                  <Phone className="h-3.5 w-3.5" />
                </span>

                Solicitar cotação
              </a>
            </li>

          </ul>
        </nav>
      )}
    </header>
  )
}

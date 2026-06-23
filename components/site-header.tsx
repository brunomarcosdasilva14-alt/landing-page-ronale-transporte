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
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        
   
        <a href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Ronale Transporte"
            width={10}
            height={10}
            priority
            className="h-auto w-auto"
          />
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
          <Phone className="h-4 w-4" />
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

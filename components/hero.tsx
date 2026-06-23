'use client'

import Image from 'next/image'
import { MessageCircle, FileText } from 'lucide-react'
import { whatsappLink } from '@/lib/site'

export function Hero() {
  return (
    <section className="bg-[#1f3a6d] text-white py-16 lg:py-24">
      
    
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        
       
        <div className="grid items-center gap-10 lg:grid-cols-2">
          
          
          <div className="flex flex-col gap-6">
            
            <h1 className="font-heading text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Rede de Despacho para Transportadoras em Todo o Brasil
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Conectamos transportadoras a uma estrutura completa de despacho,
              gestão de fretes e distribuição de cargas com cobertura nacional.
              Mais agilidade, segurança e controle em cada operação.
            </p>

  
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-red px-6 py-3 text-base font-semibold text-white transition hover:opacity-90"
              >
                <MessageCircle className="h-5 w-5" />
                Falar no WhatsApp
              </a>

              <a
                href="#cotacao"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-white/10 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/20"
              >
                <FileText className="h-5 w-5" />
                Solicitar Cotação
              </a>
            </div>

            
            <div className="mt-6 grid grid-cols-3 gap-6 border-t border-white/20 pt-6 max-w-md">
              <div>
                <p className="font-heading text-2xl font-bold">Nacional</p>
                <span className="text-xs text-white/70">Cobertura</span>
              </div>
              <div>
                <p className="font-heading text-2xl font-bold">Ágil</p>
                <span className="text-xs text-white/70">Atendimento</span>
              </div>
              <div>
                <p className="font-heading text-2xl font-bold">Segura</p>
                <span className="text-xs text-white/70">Operação</span>
              </div>
            </div>

          </div>

         
          <div className="relative">
            <div className="overflow-hidden rounded-xl border border-white/10 shadow-2xl">
              <Image
                src="/images/hero-caminhao-mapa.png"
                alt="Caminhão com rotas logísticas pelo Brasil"
                width={720}
                height={540}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

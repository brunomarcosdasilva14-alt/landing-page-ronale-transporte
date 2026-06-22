import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/lib/site'

export function WhatsappFloat() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp com a Ronale Transporte"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-brand-red px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  )
}

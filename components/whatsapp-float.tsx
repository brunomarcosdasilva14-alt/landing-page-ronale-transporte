import { whatsappLink } from '@/lib/site'

function WhatsappLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.003 0h-.006C7.166 0 0 7.168 0 16c0 3.498 1.127 6.741 3.046 9.374L1.05 31.343l6.171-1.973A15.9 15.9 0 0 0 16.003 32C24.838 32 32 24.83 32 16S24.838 0 16.003 0Zm9.31 22.594c-.386 1.09-1.918 1.994-3.14 2.258-.836.178-1.928.32-5.604-1.204-4.7-1.948-7.726-6.724-7.962-7.034-.226-.31-1.9-2.53-1.9-4.826 0-2.296 1.166-3.414 1.636-3.894.386-.394.99-.574 1.57-.574.188 0 .356.01.508.018.45.018.676.044.972.75.368.886 1.262 3.182 1.368 3.406.108.224.216.528.064.838-.142.32-.266.454-.49.71-.224.256-.436.452-.66.726-.204.24-.434.498-.176.944.258.436 1.146 1.886 2.454 3.052 1.688 1.504 3.058 1.984 3.55 2.19.366.152.802.116 1.07-.176.34-.376.76-1 1.188-1.616.304-.442.688-.498 1.09-.346.41.142 2.696 1.27 3.146 1.494.45.224.748.332.856.518.106.186.106 1.072-.28 2.162Z" />
    </svg>
  )
}

export function WhatsappFloat() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp com a Ronale Transporte"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
    >
      <WhatsappLogo className="h-6 w-6" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  )
}

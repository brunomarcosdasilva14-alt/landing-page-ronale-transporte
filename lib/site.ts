export const site = {
  name: 'Ronale Transporte',
  phoneDisplay: '(19) 98805-0719',
  // Número usado no link do WhatsApp (formato internacional, sem símbolos)
  whatsappNumber: '5519988050719',
  whatsappMessage: 'Olá,vim pelo site e gostaria de saber mais!',
  email: 'contato@ronaletransporte.com.br',
  address: 'Mococa - SP',
  instagram: 'https://instagram.com',
  facebook: 'https://facebook.com',
  linkedin: 'https://linkedin.com',
}

export const whatsappLink = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`

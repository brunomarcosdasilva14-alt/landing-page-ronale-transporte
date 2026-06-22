export const site = {
  name: 'Ronale Transporte',
  phoneDisplay: '(19) 99999-9999',
  // Número usado no link do WhatsApp (formato internacional, sem símbolos)
  whatsappNumber: '5519999999999',
  whatsappMessage:
    'Olá! Vim pelo site e gostaria de saber mais sobre a Rede de Despacho da Ronale Transporte.',
  email: 'contato@ronaletransporte.com.br',
  address: 'Mococa - SP',
  instagram: 'https://instagram.com',
  facebook: 'https://facebook.com',
  linkedin: 'https://linkedin.com',
}

export const whatsappLink = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`

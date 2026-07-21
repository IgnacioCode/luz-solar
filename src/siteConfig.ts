export const siteConfig = {
  brandName: 'Luz Solar SRL',
  whatsapp: {
    phoneE164: '5491155082413',
    display: '11 5508 2413',
  },
  location: {
    base: 'Morón',
    coverage: 'Envíos a todo el país',
    pickup: 'Entrega, retiro o punto de encuentro a coordinar según cada operación',
  },
  services: [
    'Venta de equipos solares',
    'Kits armados',
    'Dimensionamiento',
    'Instalación a medida',
  ],
};

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsapp.phoneE164}?text=${encodeURIComponent(message)}`;
}

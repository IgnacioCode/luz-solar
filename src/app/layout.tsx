import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Helios Solar | Energia solar profesional',
  description:
    'Plataforma institucional y comercial de soluciones de energia solar: paneles, inversores, baterias, estructuras, soporte tecnico y cotizador interactivo.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Luz Solar SRL | Energía solar, kits e instalación',
  description:
    'Venta de equipos solares, kits armados, dimensionamiento e instalación a medida desde Morón, con envíos a todo el país.',
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

import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { getAllCatalogProducts } from '@/src/lib/products';
import { CartProvider } from '@/src/components/CartProvider';

export const metadata: Metadata = {
  title: 'Luz Solar SRL | Energía solar, kits e instalación',
  description:
    'Venta de equipos solares, kits armados, dimensionamiento e instalación a medida desde Morón, con envíos a todo el país.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const products = await getAllCatalogProducts();

  return (
    <html lang="es">
      <body><CartProvider products={products}>{children}</CartProvider></body>
    </html>
  );
}

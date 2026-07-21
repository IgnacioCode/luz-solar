'use client';

import { ShoppingCart } from 'lucide-react';
import { useCart } from './CartProvider';
import type { CatalogProduct } from '../types';

type ProductAddToCartButtonProps = {
  product: CatalogProduct;
};

export default function ProductAddToCartButton({ product }: ProductAddToCartButtonProps) {
  const { addToCart } = useCart();

  return (
    <button type="button" onClick={() => addToCart(product)} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#F98A1E] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#F98A1E]/20 transition hover:bg-[#E47412]">
      <ShoppingCart className="h-5 w-5" />
      Agregar al carrito
    </button>
  );
}

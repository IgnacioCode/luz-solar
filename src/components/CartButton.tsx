'use client';

import { ShoppingCart } from 'lucide-react';
import { useCart } from './CartProvider';

type CartButtonProps = {
  theme?: 'light' | 'dark';
};

export default function CartButton({ theme = 'light' }: CartButtonProps) {
  const { cartItemCount, openCart } = useCart();
  const colorClass = theme === 'dark'
    ? 'border border-white/30 bg-white/10 text-white hover:bg-white/20'
    : 'border border-slate-200 bg-white text-[#006CB5] hover:bg-slate-50';

  return (
    <button type="button" onClick={openCart} className={`relative inline-flex h-10 w-10 items-center justify-center rounded-full transition ${colorClass}`} aria-label={`Abrir carrito${cartItemCount ? `, ${cartItemCount} productos` : ''}`}>
      <ShoppingCart className="h-4 w-4" />
      {cartItemCount > 0 ? <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#F98A1E] px-1 text-[10px] font-extrabold text-white">{cartItemCount}</span> : null}
    </button>
  );
}

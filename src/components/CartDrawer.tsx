'use client';

import { useEffect } from 'react';
import { MessageCircle, Minus, Plus, ShoppingCart, Trash2, X } from 'lucide-react';
import { buildWhatsAppUrl } from '../siteConfig';
import type { CartItem, CatalogProduct } from '../types';

type CartDrawerProps = {
  isOpen: boolean;
  items: CartItem[];
  onClose: () => void;
  onIncrease: (productId: string) => void;
  onDecrease: (productId: string) => void;
  onRemove: (productId: string) => void;
  onClear: () => void;
};

function formatPrice(amount: number, currency: CatalogProduct['currency'] = 'USD') {
  const formattedAmount = new Intl.NumberFormat('es-AR', { maximumFractionDigits: 0 }).format(amount);
  return `${currency === 'USD' ? 'U$S' : '$'} ${formattedAmount}`;
}

function formatProductPrice(product: CatalogProduct) {
  return formatPrice(product.price, product.currency ?? 'USD');
}

export default function CartDrawer({ isOpen, items, onClose, onIncrease, onDecrease, onRemove, onClear }: CartDrawerProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const totalsByCurrency = items.reduce<Partial<Record<'ARS' | 'USD', number>>>((totals, item) => {
    const currency = item.product.currency ?? 'USD';
    totals[currency] = (totals[currency] ?? 0) + item.product.price * item.quantity;
    return totals;
  }, {});

  const handleWhatsAppOrder = () => {
    const orderLines = items.map((item) => {
      const lineTotal = formatPrice(item.product.price * item.quantity, item.product.currency ?? 'USD');
      return `• ${item.quantity} x *${item.product.name}* — ${lineTotal}`;
    });
    const totals = (Object.entries(totalsByCurrency) as Array<['ARS' | 'USD', number]>).map(([currency, amount]) => formatPrice(amount, currency));
    const message = `Hola Luz Solar! Quisiera realizar el siguiente pedido:\n\n${orderLines.join('\n')}\n\n*Total de referencia:* ${totals.join(' + ')}\n\n¿Me confirman stock, formas de pago y envío?`;
    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`fixed inset-0 z-[60] ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      <button type="button" onClick={onClose} className={`absolute inset-0 bg-slate-950/45 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} aria-label="Cerrar carrito" tabIndex={isOpen ? 0 : -1} />

      <aside role="dialog" aria-modal="true" aria-labelledby="cart-title" className={`absolute bottom-0 right-0 top-0 flex w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <header className="flex items-center justify-between border-b border-slate-200 px-5 py-5">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#006CB5]/10 text-[#006CB5]"><ShoppingCart className="h-5 w-5" /></span>
            <div>
              <h2 id="cart-title" className="text-lg font-extrabold text-slate-900">Tu carrito</h2>
              <p className="text-xs text-slate-500">Armá el pedido y consultalo por WhatsApp.</p>
            </div>
          </div>
          <button type="button" onClick={onClose} className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900" aria-label="Cerrar carrito"><X className="h-5 w-5" /></button>
        </header>

        {items.length > 0 ? (
          <>
            <div className="flex-1 space-y-3 overflow-y-auto p-5">
              {items.map(({ product, quantity }) => {
                const primaryImage = product.images?.[0] ?? product.image;
                return (
                  <article key={product.id} className="flex gap-3 rounded-2xl border border-slate-200 p-3">
                    <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-slate-100 p-2"><img src={primaryImage} alt="" className="h-full w-full object-contain" referrerPolicy="no-referrer" /></div>
                    <div className="min-w-0 flex-1">
                      <div className="flex gap-2">
                        <div className="min-w-0 flex-1"><h3 className="line-clamp-2 text-sm font-bold leading-snug text-slate-900">{product.name}</h3><p className="mt-1 text-sm font-extrabold text-black">{formatProductPrice(product)}</p></div>
                        <button type="button" onClick={() => onRemove(product.id)} className="h-8 rounded-lg p-2 text-slate-400 transition hover:bg-red-50 hover:text-red-600" aria-label={`Quitar ${product.name}`}><Trash2 className="h-4 w-4" /></button>
                      </div>
                      <div className="mt-3 flex items-center justify-between gap-3">
                        <div className="inline-flex items-center rounded-lg border border-slate-200">
                          <button type="button" onClick={() => onDecrease(product.id)} className="p-2 text-slate-600 transition hover:bg-slate-100" aria-label={`Quitar una unidad de ${product.name}`}><Minus className="h-3.5 w-3.5" /></button>
                          <span className="w-8 text-center text-xs font-bold text-slate-900" aria-label={`Cantidad: ${quantity}`}>{quantity}</span>
                          <button type="button" onClick={() => onIncrease(product.id)} className="p-2 text-slate-600 transition hover:bg-slate-100" aria-label={`Agregar una unidad de ${product.name}`}><Plus className="h-3.5 w-3.5" /></button>
                        </div>
                        <p className="text-sm font-bold text-slate-900">{formatPrice(product.price * quantity, product.currency ?? 'USD')}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <footer className="border-t border-slate-200 bg-slate-50 p-5">
              <div className="flex items-start justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Total de referencia</p><div className="mt-1 space-y-0.5">{(Object.entries(totalsByCurrency) as Array<['ARS' | 'USD', number]>).map(([currency, amount]) => <p key={currency} className="text-xl font-extrabold text-black">{formatPrice(amount, currency)}</p>)}</div></div><button type="button" onClick={onClear} className="text-xs font-bold text-slate-500 transition hover:text-red-600">Vaciar</button></div>
              <button type="button" onClick={handleWhatsAppOrder} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#6DA42C] px-5 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-[#6DA42C]/20 transition hover:bg-[#7DBA35]"><MessageCircle className="h-5 w-5" />Enviar pedido por WhatsApp</button>
              <p className="mt-3 text-center text-[11px] leading-relaxed text-slate-500">El stock, el envío y el precio final se confirman antes de concretar la compra.</p>
            </footer>
          </>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#006CB5]/10 text-[#006CB5]"><ShoppingCart className="h-8 w-8" /></span>
            <h3 className="mt-5 text-lg font-bold text-slate-900">Tu carrito está vacío</h3>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-500">Agregá productos del catálogo para armar tu pedido.</p>
            <button type="button" onClick={onClose} className="mt-6 rounded-xl bg-[#006CB5] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#005993]">Ver productos</button>
          </div>
        )}
      </aside>
    </div>
  );
}

'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import CartDrawer from './CartDrawer';
import type { CartItem, CatalogProduct } from '../types';

type CartContextValue = {
  addToCart: (product: CatalogProduct) => void;
  cartItemCount: number;
  openCart: () => void;
};

type CartProviderProps = {
  children: ReactNode;
  products: CatalogProduct[];
};

type StoredCartItem = {
  productId: string;
  quantity: number;
};

const CART_STORAGE_KEY = 'luz-solar-cart';
const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children, products }: CartProviderProps) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    try {
      const storedItems = JSON.parse(window.localStorage.getItem(CART_STORAGE_KEY) ?? '[]') as StoredCartItem[];
      const productsById = new Map(products.map((product) => [product.id, product]));
      setItems(storedItems.flatMap(({ productId, quantity }) => {
        const product = productsById.get(productId);
        return product && Number.isFinite(quantity) && quantity > 0 ? [{ product, quantity }] : [];
      }));
    } catch {
      window.localStorage.removeItem(CART_STORAGE_KEY);
    } finally {
      setIsReady(true);
    }
  }, [products]);

  useEffect(() => {
    if (isReady) {
      const storedItems: StoredCartItem[] = items.map(({ product, quantity }) => ({ productId: product.id, quantity }));
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(storedItems));
    }
  }, [isReady, items]);

  const addToCart = (product: CatalogProduct) => {
    setItems((currentItems) => {
      const item = currentItems.find((currentItem) => currentItem.product.id === product.id);
      return item
        ? currentItems.map((currentItem) => currentItem.product.id === product.id ? { ...currentItem, quantity: currentItem.quantity + 1 } : currentItem)
        : [...currentItems, { product, quantity: 1 }];
    });
    setIsOpen(true);
  };

  const cartItemCount = items.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{ addToCart, cartItemCount, openCart: () => setIsOpen(true) }}>
      {children}
      <CartDrawer
        isOpen={isOpen}
        items={items}
        onClose={() => setIsOpen(false)}
        onIncrease={(productId) => setItems((currentItems) => currentItems.map((item) => item.product.id === productId ? { ...item, quantity: item.quantity + 1 } : item))}
        onDecrease={(productId) => setItems((currentItems) => currentItems.flatMap((item) => item.product.id !== productId ? [item] : item.quantity > 1 ? [{ ...item, quantity: item.quantity - 1 }] : []))}
        onRemove={(productId) => setItems((currentItems) => currentItems.filter((item) => item.product.id !== productId))}
        onClear={() => setItems([])}
      />
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de CartProvider');
  }
  return context;
}

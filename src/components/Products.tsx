import React, { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  BatteryCharging,
  BatteryFull,
  Cable,
  Camera,
  Car,
  CircuitBoard,
  Droplets,
  Heater,
  Info,
  MessageSquare,
  SolarPanel,
  Sun,
  ThermometerSun,
  Waves,
  Wrench,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import { productCategoryLabels } from '../data';
import { buildWhatsAppUrl } from '../siteConfig';
import type { CatalogProduct, Product } from '../types';

type CategoryFilter = {
  value: Product['category'] | 'all';
  label: string;
  icon: LucideIcon;
};

const productIconsBySlug: Record<string, LucideIcon> = {
  'kits-solares-on-grid': SolarPanel,
  'kits-solares-hibridos': SolarPanel,
  'kits-solares-off-grid': SolarPanel,
  'movilidad-electrica': Car,
  'estaciones-de-carga-portatiles': BatteryCharging,
  'paneles-solares': SolarPanel,
  inversores: Zap,
  'baterias-de-litio': BatteryCharging,
  'estructuras-para-paneles': Wrench,
  'baterias-de-plomo': BatteryFull,
  'luminarias-y-camaras': Camera,
  'componentes-electricos': CircuitBoard,
  'bombas-de-calor-piscina': Heater,
  'colectores-solares-piscina': Waves,
  'bombeo-solar': Droplets,
  'termotanque-solar': ThermometerSun,
};

const categoryIcons: Record<Product['category'] | 'all', LucideIcon> = {
  all: Sun,
  kits: Sun,
  solar: SolarPanel,
  storage: BatteryCharging,
  electrical: Cable,
  water: Droplets,
  mobility: Car,
};

function getProductIcon(product: Product) {
  return productIconsBySlug[product.slug] ?? categoryIcons[product.category];
}

type ProductsProps = {
  products: CatalogProduct[];
};

function formatPrice(product: CatalogProduct) {
  const currency = product.currency ?? 'USD';
  const amount = new Intl.NumberFormat('es-AR', { maximumFractionDigits: 0 }).format(product.price);
  return `${currency === 'USD' ? 'U$S' : '$'} ${amount}`;
}

export default function Products({ products }: ProductsProps) {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<Product['category'] | 'all'>('all');

  const categories = useMemo<CategoryFilter[]>(() => [
    { value: 'all', label: productCategoryLabels.all, icon: categoryIcons.all },
    { value: 'kits', label: productCategoryLabels.kits, icon: categoryIcons.kits },
    { value: 'solar', label: productCategoryLabels.solar, icon: categoryIcons.solar },
    { value: 'storage', label: productCategoryLabels.storage, icon: categoryIcons.storage },
    { value: 'electrical', label: productCategoryLabels.electrical, icon: categoryIcons.electrical },
    { value: 'water', label: productCategoryLabels.water, icon: categoryIcons.water },
    { value: 'mobility', label: productCategoryLabels.mobility, icon: categoryIcons.mobility },
  ], []);

  const categoryCounts = useMemo(() => {
    return categories.reduce<Record<string, number>>((counts, category) => {
      counts[category.value] = category.value === 'all'
        ? products.length
        : products.filter((product) => product.category === category.value).length;
      return counts;
    }, {});
  }, [categories, products]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => selectedCategory === 'all' || product.category === selectedCategory);
  }, [products, selectedCategory]);

  const handleWhatsAppConsultation = (product: CatalogProduct) => {
    const baseText = `Hola Luz Solar! Estaba revisando su catálogo web y me interesa consultar por el producto: *${product.name}* (${formatPrice(product)}). ¿Podrían confirmarme disponibilidad, envío e instalación si corresponde? Muchas gracias.`;
    window.open(buildWhatsAppUrl(baseText), '_blank');
  };

  const openProductDetail = (slug: string) => {
    router.push(`/productos/${slug}`);
  };

  return (
    <section id="catalogo" className="relative overflow-hidden bg-white py-24">
      <div className="relative z-10 mx-auto w-full max-w-[92rem] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#006CB5] sm:text-4xl">
            Catálogo de productos con precio de referencia
          </h2>
          <p className="text-base leading-relaxed text-slate-600">
            Productos concretos para comprar o cotizar. Cada ficha informa el equipo, sus características y un precio de referencia sujeto a stock y configuración.
          </p>
        </div>

        <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#6DA42C]">
                  Categorias
                </p>
                <h3 className="mt-1 text-base font-bold text-[#006CB5]">
                  Filtrar productos
                </h3>
              </div>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`group inline-flex h-11 shrink-0 items-center gap-2 rounded-xl border px-3 text-left transition-all ${
                    selectedCategory === category.value
                      ? 'border-[#006CB5] bg-[#006CB5] text-white shadow-sm'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-[#006CB5]/35 hover:bg-slate-50 hover:text-[#006CB5]'
                  }`}
                  title={category.label}
                  aria-label={`Filtrar por ${category.label}`}
                  aria-pressed={selectedCategory === category.value}
                >
                  <category.icon className="h-4 w-4 shrink-0" />
                  <span className="text-xs font-bold">{category.label}</span>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                    selectedCategory === category.value
                      ? 'bg-white/15 text-white'
                      : 'bg-slate-100 text-slate-500 group-hover:bg-[#006CB5]/10 group-hover:text-[#006CB5]'
                  }`}>
                    {categoryCounts[category.value] ?? 0}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => {
              const ProductIcon = getProductIcon(product);

              return (
                <article
                  key={product.id}
                  className="group flex h-full min-w-0 cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#006CB5]/40 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006CB5]"
                  onClick={() => openProductDetail(product.slug)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      openProductDetail(product.slug);
                    }
                  }}
                  role="link"
                  tabIndex={0}
                  aria-label={`Ver detalle de ${product.name}`}
                >
                  <div className="flex min-w-0 flex-1 gap-4 p-4">
                    <div className="relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-[#006CB5]/5 text-[#006CB5] shadow-sm transition-colors group-hover:border-[#006CB5]/30 group-hover:bg-[#006CB5]/10">
                      <ProductIcon className="relative h-10 w-10 transition-transform duration-300 group-hover:scale-105" strokeWidth={1.8} />
                    </div>

                    <div className="min-w-0 flex-1 space-y-2">
                      <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-[#006CB5]">
                        {productCategoryLabels[product.category]}
                      </span>
                      <h3 className="line-clamp-2 block break-words text-sm font-bold leading-snug text-slate-900 transition-colors group-hover:text-[#006CB5]">
                        {product.name}
                      </h3>
                      <p className="line-clamp-3 text-xs leading-relaxed text-slate-500 sm:line-clamp-2">
                        {product.description}
                      </p>
                      <div>
                        <p className="text-lg font-extrabold tracking-tight text-[#006CB5]">{formatPrice(product)}</p>
                        <p className="text-[10px] font-medium text-slate-400">{product.availability ?? 'Consultar disponibilidad'}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 border-t border-slate-100 p-3 sm:p-4">
                    <span className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition group-hover:border-[#006CB5]/50 group-hover:bg-slate-50 group-hover:text-[#006CB5] sm:inline-flex" aria-hidden="true">
                      <Info className="h-4 w-4" />
                    </span>
                    <button
                      onClick={(event) => {
                        event.stopPropagation();
                        handleWhatsAppConsultation(product);
                      }}
                      className="inline-flex h-9 min-w-0 flex-1 items-center justify-center gap-1.5 rounded-lg border border-[#F98A1E]/20 bg-[#F98A1E]/10 px-3 text-xs font-bold text-[#C45F0E] transition hover:border-[#F98A1E] hover:bg-[#F98A1E] hover:text-white"
                    >
                      <MessageSquare className="h-4 w-4 shrink-0" />
                      <span>Consultar compra</span>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="mx-auto max-w-lg rounded-3xl border border-dashed border-slate-200 bg-white px-6 py-16 text-center">
            <p className="text-sm font-medium text-slate-500">
              No encontramos productos para esta categoria.
            </p>
            <button
              onClick={() => setSelectedCategory('all')}
              className="mt-4 inline-flex items-center text-xs font-bold text-[#006CB5] hover:underline"
            >
              Ver todos los productos
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Cable,
  Car,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Droplets,
  Search,
  SolarPanel,
  ShoppingCart,
  Sun,
  X,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import { productCategoryLabels } from '../data';
import type { CatalogProduct, Product } from '../types';

type CategoryFilter = {
  value: Product['category'] | 'all';
  label: string;
  icon: LucideIcon;
};

const categoryIcons: Record<Product['category'] | 'all', LucideIcon> = {
  all: Sun,
  kits: Sun,
  solar: SolarPanel,
  storage: Zap,
  electrical: Cable,
  water: Droplets,
  mobility: Car,
};

type ProductsProps = {
  products: CatalogProduct[];
  onAddToCart: (product: CatalogProduct) => void;
};

function formatPrice(product: CatalogProduct) {
  const currency = product.currency ?? 'USD';
  const amount = new Intl.NumberFormat('es-AR', { maximumFractionDigits: 0 }).format(product.price);
  return `${currency === 'USD' ? 'U$S' : '$'} ${amount}`;
}

function normalizeSearchTerm(value: string) {
  return value.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLocaleLowerCase('es-AR');
}

function getProductsPerPage(viewportWidth: number) {
  if (viewportWidth >= 1536) return 10;
  if (viewportWidth >= 1280) return 8;
  if (viewportWidth >= 1024) return 6;
  if (viewportWidth >= 640) return 4;
  return 3;
}

export default function Products({ products, onAddToCart }: ProductsProps) {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<Product['category'] | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(3);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  useEffect(() => {
    const updateProductsPerPage = () => setProductsPerPage(getProductsPerPage(window.innerWidth));
    updateProductsPerPage();
    window.addEventListener('resize', updateProductsPerPage);
    return () => window.removeEventListener('resize', updateProductsPerPage);
  }, []);

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
    const normalizedSearch = normalizeSearchTerm(searchTerm.trim());
    return products.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const searchableContent = normalizeSearchTerm(`${product.name} ${product.description} ${productCategoryLabels[product.category]}`);
      return matchesCategory && (!normalizedSearch || searchableContent.includes(normalizedSearch));
    });
  }, [products, searchTerm, selectedCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / productsPerPage));
  const visiblePage = Math.min(currentPage, totalPages);
  const pageStart = (visiblePage - 1) * productsPerPage;
  const visibleProducts = filteredProducts.slice(pageStart, pageStart + productsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  useEffect(() => {
    setCurrentPage((page) => Math.min(page, totalPages));
  }, [totalPages]);

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
              <button type="button" onClick={() => setIsFiltersOpen((isOpen) => !isOpen)} className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs font-bold text-[#006CB5] transition hover:bg-slate-50 sm:hidden" aria-expanded={isFiltersOpen} aria-controls="product-filter-options">
                {isFiltersOpen ? 'Ocultar' : 'Ver filtros'}
                <ChevronDown className={`h-4 w-4 transition ${isFiltersOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <div id="product-filter-options" className={`${isFiltersOpen ? 'flex' : 'hidden'} flex-col gap-4 sm:flex`}>
            <div className="flex flex-col gap-2 sm:flex-row sm:overflow-x-auto sm:pb-1">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => {
                    setSelectedCategory(category.value);
                    setCurrentPage(1);
                  }}
                  className={`group inline-flex h-11 w-full items-center justify-between gap-2 rounded-xl border px-4 text-left transition-all sm:w-auto sm:shrink-0 sm:justify-start sm:px-3 ${
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

            <div className="border-t border-slate-100 pt-4">
              <label htmlFor="product-search" className="mb-2 block text-xs font-bold text-slate-600">Buscar en el catálogo</label>
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  id="product-search"
                  type="search"
                  value={searchTerm}
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                    setCurrentPage(1);
                  }}
                  placeholder="Ej. panel, batería, inversor..."
                  className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-10 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#006CB5] focus:bg-white focus:ring-2 focus:ring-[#006CB5]/15"
                />
                {searchTerm ? (
                  <button type="button" onClick={() => { setSearchTerm(''); setCurrentPage(1); }} className="absolute right-2 top-1/2 rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-200 hover:text-slate-700" aria-label="Limpiar búsqueda">
                    <X className="h-4 w-4" />
                  </button>
                ) : null}
              </div>
            </div>
            </div>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <>
            <div className="flex flex-col">
              <div className="order-1 mb-5 flex items-center justify-between gap-3 text-xs text-slate-500">
                <p>{filteredProducts.length} {filteredProducts.length === 1 ? 'producto encontrado' : 'productos encontrados'}</p>
                <p className="font-medium">Mostrando {pageStart + 1}-{Math.min(pageStart + productsPerPage, filteredProducts.length)}</p>
              </div>
            <div className="order-3 grid grid-cols-1 gap-5 sm:order-2 sm:grid-cols-2 lg:grid-cols-5 2xl:grid-cols-5">
            {visibleProducts.map((product) => {
              const primaryImage = product.images?.[0] ?? product.image;

              return (
                <article
                  key={product.id}
                  className="group flex h-full min-w-0 flex-col rounded-[2rem] border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
                >
                  <button
                    type="button"
                    onClick={() => openProductDetail(product.slug)}
                    className="relative aspect-square w-full overflow-hidden rounded-[1.5rem] bg-slate-100 text-left"
                    aria-label={`Ver detalle de ${product.name}`}
                  >
                    <span className="absolute left-4 top-4 z-10 rounded-full border border-slate-200 bg-white/90 px-3 py-1.5 text-[10px] font-bold text-slate-900 shadow-sm backdrop-blur-sm">{productCategoryLabels[product.category]}</span>
                    <img src={primaryImage} alt={product.name} className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105" referrerPolicy="no-referrer" />
                  </button>

                  <div className="flex min-w-0 flex-1 flex-col px-2 pb-2 pt-5">
                    <span className="block text-xs font-medium text-[#4f8721]">
                      {productCategoryLabels[product.category]}
                    </span>
                    <button type="button" onClick={() => openProductDetail(product.slug)} className="mt-1.5 text-left">
                      <h3 className="line-clamp-2 break-words text-base font-bold leading-snug text-slate-900 transition group-hover:text-[#006CB5]">
                        {product.name}
                      </h3>
                    </button>
                    <div className="mt-auto pt-4">
                      <p className="text-lg font-medium tracking-tight text-black">{formatPrice(product)}</p>
                    </div>
                  </div>

                  <div className="px-2 pb-2 pt-2">
                    <button
                      type="button"
                      onClick={() => onAddToCart(product)}
                      className="inline-flex h-11 w-full items-center justify-center gap-1.5 rounded-full bg-[#F98A1E] px-3 text-xs font-bold text-white transition hover:bg-[#E47412]"
                    >
                      <ShoppingCart className="h-4 w-4 shrink-0" />
                      Agregar al carrito
                    </button>
                  </div>
                </article>
              );
            })}
            </div>
            {totalPages > 1 ? (
              <nav className="order-2 mt-5 mb-6 flex flex-wrap items-center justify-center gap-2 sm:order-3 sm:mb-0 sm:mt-10" aria-label="Paginación del catálogo">
                <button type="button" onClick={() => setCurrentPage((page) => Math.max(1, page - 1))} disabled={visiblePage === 1} className="inline-flex h-10 items-center justify-center gap-1 rounded-lg border border-slate-200 px-3 text-xs font-bold text-slate-600 transition hover:border-[#006CB5]/40 hover:text-[#006CB5] disabled:cursor-not-allowed disabled:opacity-40"><ChevronLeft className="h-4 w-4" />Anterior</button>
                {pageNumbers.map((page) => <button key={page} type="button" onClick={() => setCurrentPage(page)} aria-current={visiblePage === page ? 'page' : undefined} className={`flex h-10 min-w-10 items-center justify-center rounded-lg px-3 text-xs font-bold transition ${visiblePage === page ? 'bg-[#006CB5] text-white shadow-sm' : 'border border-slate-200 text-slate-600 hover:border-[#006CB5]/40 hover:text-[#006CB5]'}`}>{page}</button>)}
                <button type="button" onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))} disabled={visiblePage === totalPages} className="inline-flex h-10 items-center justify-center gap-1 rounded-lg border border-slate-200 px-3 text-xs font-bold text-slate-600 transition hover:border-[#006CB5]/40 hover:text-[#006CB5] disabled:cursor-not-allowed disabled:opacity-40">Siguiente<ChevronRight className="h-4 w-4" /></button>
              </nav>
            ) : null}
            </div>
          </>
        ) : (
          <div className="mx-auto max-w-lg rounded-3xl border border-dashed border-slate-200 bg-white px-6 py-16 text-center">
            <p className="text-sm font-medium text-slate-500">
              No encontramos productos para estos filtros.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchTerm('');
                setCurrentPage(1);
              }}
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

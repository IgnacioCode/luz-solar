import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronLeft, ChevronRight, Info, MessageSquare, Search, X } from 'lucide-react';
import { productCategoryLabels, productsData } from '../data';
import { buildWhatsAppUrl } from '../siteConfig';

const PRODUCTS_PER_PAGE = 6;

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const categories = useMemo(() => [
    { value: 'all', label: productCategoryLabels.all },
    { value: 'panels', label: productCategoryLabels.panels },
    { value: 'inverters', label: productCategoryLabels.inverters },
    { value: 'batteries', label: productCategoryLabels.batteries },
    { value: 'controllers', label: productCategoryLabels.controllers },
    { value: 'structures', label: productCategoryLabels.structures },
    { value: 'electrical', label: productCategoryLabels.electrical },
  ], []);

  const normalizedSearchQuery = searchQuery.trim().toLowerCase();

  const categoryCounts = useMemo(() => {
    return categories.reduce<Record<string, number>>((counts, category) => {
      counts[category.value] = category.value === 'all'
        ? productsData.length
        : productsData.filter((product) => product.category === category.value).length;
      return counts;
    }, {});
  }, [categories]);

  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = !normalizedSearchQuery ||
        product.name.toLowerCase().includes(normalizedSearchQuery) ||
        product.description.toLowerCase().includes(normalizedSearchQuery) ||
        product.specifications.some((spec) => spec.toLowerCase().includes(normalizedSearchQuery));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, normalizedSearchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE));
  const pageStartIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(pageStartIndex, pageStartIndex + PRODUCTS_PER_PAGE);
  const visibleStart = filteredProducts.length ? pageStartIndex + 1 : 0;
  const visibleEnd = Math.min(pageStartIndex + PRODUCTS_PER_PAGE, filteredProducts.length);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, normalizedSearchQuery]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const handleWhatsAppConsultation = (productName: string) => {
    const baseText = `Hola Luz Solar! Estaba revisando su catálogo web y me interesa consultar por el producto: *${productName}*. ¿Podrían ayudarme con precio, disponibilidad, envío e instalación si corresponde? Muchas gracias.`;
    window.open(buildWhatsAppUrl(baseText), '_blank');
  };

  const resetFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setFiltersOpen(false);
  };

  return (
    <section id="productos" className="relative overflow-hidden bg-slate-50 py-24">
      <div className="relative z-10 mx-auto w-full max-w-[92rem] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#006CB5] sm:text-4xl">
            Catálogo solar para comprar o cotizar a medida
          </h2>
          <p className="text-base leading-relaxed text-slate-600">
            Equipos, kits armados e insumos para hogares, comercios, industrias, campos e instaladores. Podés consultar por producto suelto o pedir dimensionamiento completo con instalación.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between gap-3 lg:mb-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#6DA42C]">
                    Categorías
                  </p>
                  <h3 className="mt-1 text-base font-bold text-[#006CB5]">
                    Filtrar productos
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  {(selectedCategory !== 'all' || searchQuery) && (
                    <button
                      onClick={resetFilters}
                      className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                      aria-label="Restablecer filtros"
                      title="Restablecer filtros"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => setFiltersOpen((open) => !open)}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-[#006CB5] transition hover:bg-slate-50 lg:hidden"
                    aria-expanded={filtersOpen}
                    aria-controls="product-category-filters"
                    aria-label={filtersOpen ? 'Ocultar filtros' : 'Mostrar filtros'}
                    title={filtersOpen ? 'Ocultar filtros' : 'Mostrar filtros'}
                  >
                    <ChevronDown className={`h-4 w-4 transition-transform ${filtersOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>

              <div
                id="product-category-filters"
                className={`${filtersOpen ? 'mt-4 grid' : 'hidden'} grid-cols-2 gap-2 sm:grid-cols-3 lg:mt-0 lg:flex lg:flex-col`}
              >
                {categories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => {
                      setSelectedCategory(category.value);
                      setFiltersOpen(false);
                    }}
                    className={`group flex min-w-0 items-center justify-between gap-2 rounded-xl border px-3 py-2.5 text-left transition-all ${
                      selectedCategory === category.value
                        ? 'border-[#006CB5] bg-[#006CB5] text-white shadow-sm'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-[#006CB5]/35 hover:bg-slate-50 hover:text-[#006CB5]'
                    }`}
                  >
                    <span className="min-w-0 truncate text-xs font-bold">{category.label}</span>
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
          </aside>

          <div className="min-w-0">
            <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="relative w-full lg:max-w-lg">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Buscar por nombre, descripción o especificación..."
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-11 text-sm text-slate-800 shadow-inner transition-all placeholder:text-slate-400 focus:border-[#006CB5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#006CB5]/10"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                      aria-label="Limpiar búsqueda"
                      title="Limpiar búsqueda"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>

                <div className="flex items-center justify-between gap-3 text-xs font-bold text-slate-500 lg:justify-end">
                  <span>
                    {filteredProducts.length === 0
                      ? 'Sin resultados'
                      : `${visibleStart}-${visibleEnd} de ${filteredProducts.length} productos`}
                  </span>
                  {totalPages > 1 && (
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-500">
                      Página {currentPage} / {totalPages}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {paginatedProducts.map((product) => (
                    <article
                      key={product.id}
                      className="group flex h-full min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#006CB5]/40 hover:shadow-xl sm:flex-col"
                    >
                      <Link
                        href={`/productos/${product.slug}`}
                        className="relative block aspect-square w-24 shrink-0 overflow-hidden bg-slate-100 sm:aspect-[16/7] sm:w-full"
                        aria-label={`Ver detalle de ${product.name}`}
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        {product.badge && (
                          <span className="absolute left-2 top-2 hidden rounded bg-[#F98A1E] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white shadow-md sm:inline">
                            {product.badge}
                          </span>
                        )}
                      </Link>

                      <div className="flex min-w-0 flex-1 flex-col justify-between p-3 sm:p-4">
                        <div className="min-w-0 flex-1 space-y-2">
                          <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#006CB5]">
                            {productCategoryLabels[product.category]}
                          </span>
                          <Link
                            href={`/productos/${product.slug}`}
                            className="line-clamp-2 block break-words text-sm font-bold leading-snug text-slate-900 transition-colors hover:text-[#006CB5] hover:underline hover:underline-offset-4"
                          >
                            {product.name}
                          </Link>
                          <p className="hidden text-xs leading-relaxed text-slate-500 sm:line-clamp-2">
                            {product.description}
                          </p>
                          
                        </div>

                        <div className="mt-3 flex items-center gap-2 sm:mt-4 sm:border-t sm:border-slate-100 sm:pt-3">
                          <Link
                            href={`/productos/${product.slug}`}
                            className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition hover:border-[#006CB5]/50 hover:bg-slate-50 hover:text-[#006CB5] sm:inline-flex"
                            title="Especificaciones técnicas"
                            aria-label={`Ver especificaciones de ${product.name}`}
                          >
                            <Info className="h-4 w-4" />
                          </Link>
                          <button
                            onClick={() => handleWhatsAppConsultation(product.name)}
                            className="inline-flex h-9 min-w-0 flex-1 items-center justify-center gap-1.5 rounded-lg border border-[#F98A1E]/20 bg-[#F98A1E]/10 px-3 text-xs font-bold text-[#C45F0E] transition hover:border-[#F98A1E] hover:bg-[#F98A1E] hover:text-white"
                          >
                            <MessageSquare className="h-4 w-4 shrink-0" />
                            <span>Consultar</span>
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {totalPages > 1 && (
                  <div className="mt-8 flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6">
                      <button
                        onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                        disabled={currentPage === 1}
                        className="inline-flex h-10 items-center gap-2 rounded-xl border border-slate-200 px-3 text-xs font-bold text-slate-600 transition hover:border-[#006CB5]/40 hover:text-[#006CB5] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-600"
                      >
                        <ChevronLeft className="h-4 w-4" />
                        Anterior
                      </button>

                      <div className="flex items-center gap-2 sm:gap-3">
                        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                          <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`h-10 w-10 rounded-xl text-xs font-bold transition ${
                              currentPage === page
                                ? 'bg-[#006CB5] text-white shadow-sm'
                                : 'border border-slate-200 bg-white text-slate-600 hover:border-[#006CB5]/40 hover:text-[#006CB5]'
                            }`}
                            aria-label={`Ir a página ${page}`}
                            aria-current={currentPage === page ? 'page' : undefined}
                          >
                            {page}
                          </button>
                        ))}
                      </div>

                      <button
                        onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                        disabled={currentPage === totalPages}
                        className="inline-flex h-10 items-center gap-2 rounded-xl border border-slate-200 px-3 text-xs font-bold text-slate-600 transition hover:border-[#006CB5]/40 hover:text-[#006CB5] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-600"
                      >
                        Siguiente
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="mx-auto max-w-lg rounded-3xl border border-dashed border-slate-200 bg-white px-6 py-16 text-center">
                <p className="text-sm font-medium text-slate-500">
                  No encontramos productos que coincidan con tu búsqueda o filtro.
                </p>
                <button
                  onClick={resetFilters}
                  className="mt-4 inline-flex items-center text-xs font-bold text-[#006CB5] hover:underline"
                >
                  Restablecer filtros
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

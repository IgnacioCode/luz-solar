import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, Info, MessageSquare } from 'lucide-react';
import { productCategoryLabels, productsData } from '../data';
import { buildWhatsAppUrl } from '../siteConfig';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { value: 'all', label: productCategoryLabels.all },
    { value: 'panels', label: productCategoryLabels.panels },
    { value: 'inverters', label: productCategoryLabels.inverters },
    { value: 'batteries', label: productCategoryLabels.batteries },
    { value: 'controllers', label: productCategoryLabels.controllers },
    { value: 'structures', label: productCategoryLabels.structures },
    { value: 'electrical', label: productCategoryLabels.electrical },
  ];

  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.specifications.some(spec => spec.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleWhatsAppConsultation = (productName: string) => {
    const baseText = `Hola Luz Solar! Estaba revisando su catálogo web y me interesa consultar por el producto: *${productName}*. ¿Podrían ayudarme con precio, disponibilidad, envío e instalación si corresponde? Muchas gracias.`;
    window.open(buildWhatsAppUrl(baseText), '_blank');
  };

  return (
    <section id="productos" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#006CB5]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#6DA42C]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#006CB5]">
            Catálogo solar para comprar o cotizar a medida
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Equipos, kits armados e insumos para hogares, comercios, industrias, campos e instaladores. Podés consultar por producto suelto o pedir dimensionamiento completo con instalación.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="space-y-6 mb-12">
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar panel, batería de litio, inversor..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#006CB5] focus:ring-1 focus:ring-[#006CB5] transition-all font-sans text-sm shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-800 text-xs font-semibold"
              >
                Limpiar
              </button>
            )}
          </div>

          {/* Categories Horizontal Scroll / Grid */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all cursor-pointer border ${
                  selectedCategory === category.value
                    ? 'bg-[#006CB5] text-white border-[#006CB5] shadow-sm'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-350 hover:text-slate-800'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group flex flex-col h-full bg-white border border-slate-200 hover:border-[#006CB5]/40 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-in fade-in zoom-in-95 duration-200"
              >
                {/* Image Frame */}
                <Link
                  href={`/productos/${product.slug}`}
                  className="relative aspect-video w-full overflow-hidden bg-slate-50 border-b border-slate-100 block"
                  aria-label={`Ver detalle de ${product.name}`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#F98A1E] text-white shadow-md">
                      {product.badge}
                    </span>
                  )}
                </Link>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono tracking-widest text-[#006CB5] uppercase font-bold">
                      {productCategoryLabels[product.category]}
                    </span>
                    <Link
                      href={`/productos/${product.slug}`}
                      className="block text-sm font-bold text-[#006CB5] group-hover:text-[#006CB5] transition-colors line-clamp-2 h-10 hover:underline underline-offset-4"
                    >
                      {product.name}
                    </Link>
                    <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed font-normal">
                      {product.description}
                    </p>
                  </div>

                  {/* CTAs */}
                  <div className="pt-5 mt-4 border-t border-slate-100 flex items-center gap-2">
                    <Link
                      href={`/productos/${product.slug}`}
                      className="p-2.5 rounded-lg border border-slate-200 text-slate-400 hover:text-[#006CB5] hover:bg-slate-50 hover:border-[#006CB5]/50 transition-all cursor-pointer"
                      title="Especificaciones técnicas"
                    >
                      <Info className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={() => handleWhatsAppConsultation(product.name)}
                      className="flex-1 flex items-center justify-center space-x-1.5 px-3 py-2.5 rounded-lg bg-slate-50 hover:bg-[#F98A1E] text-slate-700 hover:text-white border border-slate-200 hover:border-[#F98A1E] transition-all text-xs font-bold cursor-pointer shadow-sm group/btn"
                    >
                      <MessageSquare className="w-4 h-4 text-[#F98A1E] group-hover/btn:text-white" />
                      <span>Consultar</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white border border-slate-200 border-dashed rounded-3xl max-w-lg mx-auto">
            <p className="text-slate-500 text-sm font-medium">No encontramos productos que coincidan con tu búsqueda o filtro.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 inline-flex items-center text-xs font-bold text-[#006CB5] hover:underline"
            >
              Restablecer filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

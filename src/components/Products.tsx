import React, { useState, useMemo } from 'react';
import { Search, Info, MessageSquare, Check, X } from 'lucide-react';
import { productsData } from '../data';
import { Product } from '../types';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = [
    { value: 'all', label: 'Todos' },
    { value: 'panels', label: 'Paneles Solares' },
    { value: 'inverters', label: 'Inversores' },
    { value: 'batteries', label: 'Baterías' },
    { value: 'controllers', label: 'Reguladores' },
    { value: 'structures', label: 'Estructuras' },
    { value: 'electrical', label: 'Insumos / Cables' },
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
    const baseText = `Hola Luz Solar! Estaba revisando su catálogo web y me interesa consultar por el producto: *${productName}*. ¿Podrían enviarme especificaciones técnicas de cotización y plazos de entrega? Muchas gracias.`;
    const encodedText = encodeURIComponent(baseText);
    const whatsappUrl = `https://wa.me/5491123456789?text=${encodedText}`; // Mock local number, customizable
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="productos" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#006CB5]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#6DA42C]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#006CB5]">
            Componentes solares y eléctricos homologados
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Distribuimos únicamente equipamiento certificado de marcas globales, asegurando máxima vida útil, garantías sólidas y rendimiento técnico impecable.
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
                <div className="relative aspect-video w-full overflow-hidden bg-slate-50 border-b border-slate-100">
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
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono tracking-widest text-[#006CB5] uppercase font-bold">
                      {categories.find(c => c.value === product.category)?.label || product.category}
                    </span>
                    <h3 className="text-sm font-bold text-[#006CB5] group-hover:text-[#006CB5] transition-colors line-clamp-2 h-10">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed font-normal">
                      {product.description}
                    </p>
                  </div>

                  {/* CTAs */}
                  <div className="pt-5 mt-4 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="p-2.5 rounded-lg border border-slate-200 text-slate-400 hover:text-[#006CB5] hover:bg-slate-50 hover:border-[#006CB5]/50 transition-all cursor-pointer"
                      title="Especificaciones técnicas"
                    >
                      <Info className="w-4 h-4" />
                    </button>
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

      {/* Product Specification Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-xl bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <span className="text-xs font-mono tracking-widest text-[#006CB5] uppercase font-bold">
                Ficha Técnica de Componente
              </span>
              <button
                onClick={() => setSelectedProduct(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-55 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="w-full sm:w-1/3 aspect-video sm:aspect-square rounded-xl overflow-hidden bg-slate-100">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-bold text-[#006CB5]">{selectedProduct.name}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">{selectedProduct.description}</p>
                </div>
              </div>

              {/* Technical Specifications checklist */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold tracking-wider text-slate-500 uppercase">
                  Características y Especificaciones:
                </h4>
                <ul className="space-y-2.5">
                  {selectedProduct.specifications.map((spec, i) => (
                    <li key={i} className="flex items-start space-x-2 text-xs text-slate-600">
                      <Check className="w-4 h-4 text-[#6DA42C] shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust Badge */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-250 text-xs text-slate-500 flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#6DA42C] shrink-0 mt-1.5" />
                <p>Todos nuestros equipos se entregan con embalaje original de fábrica, número de serie registrado para la garantía oficial y certificado de homologación eléctrica internacional.</p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setSelectedProduct(null)}
                className="w-full sm:w-1/3 py-3 rounded-full border border-slate-200 text-slate-600 hover:text-slate-800 hover:bg-slate-100 text-xs font-bold transition-all cursor-pointer"
              >
                Cerrar
              </button>
              <button
                onClick={() => {
                  handleWhatsAppConsultation(selectedProduct.name);
                  setSelectedProduct(null);
                }}
                className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-full bg-[#F98A1E] text-white hover:bg-[#F98A1E]/90 text-xs font-bold shadow-lg shadow-[#F98A1E]/20 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Consultar por WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

import React from 'react';
import { TrendingDown, Leaf, Compass, ShieldCheck } from 'lucide-react';
import { benefitsData } from '../data';

const iconMap = {
  TrendingDown,
  Leaf,
  Compass,
  ShieldCheck,
};

const brandLogoUrls = [
  // Agrega aca las URLs de los logos que quieras mostrar en el carrusel.
  // Ejemplo:
  // 'https://tusitio.com/logos/marca-1.png',
  // 'https://tusitio.com/logos/marca-2.png',
  'https://www.manuelacanteros.com/wp-content/uploads/2026/07/LOGO-DEYE-300x300.png',
  'https://www.manuelacanteros.com/wp-content/uploads/2026/07/LOGO-ABB-300x300.png',
  'https://www.manuelacanteros.com/wp-content/uploads/2026/07/LOGO-HUAWEI-2-300x300.png',
  'https://www.manuelacanteros.com/wp-content/uploads/2026/07/LOGO-GOODWE-300x300.png',
  'https://www.manuelacanteros.com/wp-content/uploads/2026/07/LOGO-GROWATT-1-300x300.png',
  'https://www.manuelacanteros.com/wp-content/uploads/2026/07/icono-1-5-300x300.png'
];

export default function Benefits() {
  const logoItems = Array.from({ length: Math.max(12, brandLogoUrls.length * 6) }, (_, index) => {
    return brandLogoUrls[index % brandLogoUrls.length];
  });

  return (
    <section id="beneficios" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-[#006CB5]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#6DA42C]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#006CB5]">
            Soluciones inteligentes para un futuro eficiente y autónomo
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            La energía solar fotovoltaica representa la inversión más segura, rentable y ecológica para asegurar tu suministro eléctrico y reducir tus gastos operativos.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitsData.map((benefit, idx) => {
            const IconComponent = iconMap[benefit.iconName as keyof typeof iconMap];
            
            return (
              <div
                key={benefit.id}
                id={`benefit-card-${benefit.id}`}
                className="relative group p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 hover:border-[#006CB5]/50 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl flex flex-col items-start"
              >
                {/* Visual Accent Glow on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#006CB5]/5 to-[#6DA42C]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {/* Icon badge */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-150 text-[#006CB5] group-hover:text-white group-hover:bg-[#006CB5] group-hover:border-[#006CB5] transition-all mb-6">
                  {IconComponent ? <IconComponent className="w-6 h-6" /> : <TrendingDown className="w-6 h-6" />}
                </div>

                {/* Text Content */}
                <h3 className="text-lg font-bold text-[#006CB5] mb-3 group-hover:text-[#006CB5] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors">
                  {benefit.description}
                </p>

                {/* Absolute small index indicator */}
                <span className="absolute bottom-4 right-6 text-2xl font-black text-slate-100 group-hover:text-slate-200 transition-colors select-none font-mono">
                  {`0${idx + 1}`}
                </span>
              </div>
            );
          })}
        </div>

        {brandLogoUrls.length > 0 && (
          <div className="">
            <div className="brand-logo-marquee">
              <div className="brand-logo-track">
                {logoItems.map((logoUrl, index) => (
                  <div
                    key={`${logoUrl}-${index}`}
                    className="flex h-60 w-80 shrink-0 items-center justify-center px-6"
                  >
                    <img
                      src={logoUrl}
                      alt=""
                      className="max-h-60 max-w-64 object-contain opacity-95 transition duration-300 hover:opacity-100"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

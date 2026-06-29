import React from 'react';
import { TrendingDown, Leaf, Compass, ShieldCheck } from 'lucide-react';
import { benefitsData } from '../data';

const iconMap = {
  TrendingDown,
  Leaf,
  Compass,
  ShieldCheck,
};

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-[#19A7CE]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#57C5B6]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-[#19A7CE] font-mono uppercase bg-[#19A7CE]/10 px-3.5 py-1.5 rounded-full border border-[#19A7CE]/25">
            ¿Por qué Energía Solar?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B2447]">
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
                className="relative group p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 hover:border-[#19A7CE]/50 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl flex flex-col items-start"
              >
                {/* Visual Accent Glow on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#19A7CE]/5 to-[#57C5B6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {/* Icon badge */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-150 text-[#19A7CE] group-hover:text-white group-hover:bg-[#19A7CE] group-hover:border-[#19A7CE] transition-all mb-6">
                  {IconComponent ? <IconComponent className="w-6 h-6" /> : <TrendingDown className="w-6 h-6" />}
                </div>

                {/* Text Content */}
                <h3 className="text-lg font-bold text-[#0B2447] mb-3 group-hover:text-[#19A7CE] transition-colors">
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
      </div>
    </section>
  );
}

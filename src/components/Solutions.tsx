import React, { useState } from 'react';
import { Home, Building2, Factory, Tractor, CheckCircle, ArrowRight } from 'lucide-react';
import { solutionsData } from '../data';

const iconMap = {
  Home,
  Building2,
  Factory,
  Tractor,
};

interface SolutionsProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Solutions({ onScrollToSection }: SolutionsProps) {
  const [activeTab, setActiveTab] = useState<string>('s1');

  const activeSolution = solutionsData.find((sol) => sol.id === activeTab) || solutionsData[0];
  const IconComponent = iconMap[activeSolution.iconName as keyof typeof iconMap];

  return (
    <section id="soluciones" className="py-24 bg-slate-100 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#006CB5]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#6DA42C]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#006CB5]">
            Diseñamos el sistema ideal para tu escala de consumo
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Cada cliente tiene necesidades particulares. Ofrecemos asesoramiento personalizado para dimensionar sistemas de acuerdo a tu locación geográfica y perfiles de carga.
          </p>
        </div>

        {/* Tab Switcher Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Tabs Navigation (Left/Top) */}
          <div className="lg:col-span-4 space-y-3">
            {solutionsData.map((sol) => {
              const TabIcon = iconMap[sol.iconName as keyof typeof iconMap];
              const isActive = sol.id === activeTab;
              
              return (
                <button
                  key={sol.id}
                  onClick={() => setActiveTab(sol.id)}
                  className={`w-full flex items-center space-x-4 p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                    isActive
                      ? 'bg-white border-[#006CB5] text-[#006CB5] shadow-lg shadow-blue-700/5'
                      : 'bg-white/40 border-slate-200 text-slate-500 hover:border-slate-300 hover:text-slate-800'
                  }`}
                >
                  <div className={`p-3 rounded-xl border ${
                    isActive 
                      ? 'bg-[#006CB5]/10 border-[#006CB5]/20 text-[#006CB5]' 
                      : 'bg-slate-50 border-slate-150 text-slate-400'
                  }`}>
                    {TabIcon ? <TabIcon className="w-5 h-5" /> : <Home className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold">{sol.title}</h3>
                    <p className="text-[11px] text-slate-500 mt-0.5 font-normal line-clamp-1">
                      {sol.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Solution Panel (Right/Bottom) */}
          <div className="lg:col-span-8">
            <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
              
              {/* Solution Info Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center space-x-3.5">
                  <div className="p-3.5 rounded-2xl bg-[#006CB5]/10 border border-[#006CB5]/20 text-[#006CB5]">
                    {IconComponent ? <IconComponent className="w-7 h-7" /> : <Home className="w-7 h-7" />}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#006CB5] font-bold uppercase">
                      Sector Solicitante
                    </span>
                    <h3 className="text-2xl font-bold text-[#006CB5] mt-0.5">{activeSolution.title}</h3>
                  </div>
                </div>
                
                {/* Kit Recommendation Badge */}
                <div className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono font-semibold text-slate-700">
                  <span className="text-[#F98A1E] block text-[10px] uppercase font-bold tracking-wider mb-0.5">Kit Recomendado:</span>
                  {activeSolution.recommendedKit}
                </div>
              </div>

              {/* Tagline & Long Description */}
              <div className="space-y-3">
                <p className="text-base font-bold text-[#006CB5]">
                  {activeSolution.tagline}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {activeSolution.description}
                </p>
              </div>

              {/* Specific features checklist */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase">
                  Ventajas y Puntos Clave de la Solución:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeSolution.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-3 text-xs text-slate-600">
                      <CheckCircle className="w-4.5 h-4.5 text-[#6DA42C] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA button inside Solution */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-500 text-center sm:text-left font-medium">
                  ¿Querés simular la capacidad e inversión requerida para tu {activeSolution.title.toLowerCase()}?
                </p>
                <button
                  onClick={() => onScrollToSection('contacto')}
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3 text-xs font-bold rounded-full bg-[#F98A1E] text-white hover:bg-[#E47412] shadow-md transition-all cursor-pointer"
                >
                  <span>Pedir Cotización de {activeSolution.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

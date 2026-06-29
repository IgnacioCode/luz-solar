import React from 'react';
import { processStepsData } from '../data';

export default function Process() {
  return (
    <section id="proceso" className="py-24 bg-slate-100 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#19A7CE]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-xs font-bold tracking-widest text-[#19A7CE] font-mono uppercase bg-[#19A7CE]/10 px-3.5 py-1.5 rounded-full border border-[#19A7CE]/25">
            Nuestra Metodología
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B2447]">
            El camino hacia tu propia energía, paso a paso
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Garantizamos un servicio "llave en mano" libre de fricciones. Nos encargamos de todo el proceso para que solo te preocupes por ver descender tu consumo mensual.
          </p>
        </div>

        {/* Desktop timeline line */}
        <div className="relative mt-12">
          {/* Horizontal line for desktop */}
          <div className="absolute top-[2.25rem] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#19A7CE]/20 via-[#57C5B6]/40 to-[#F27D26]/20 hidden lg:block z-0" />

          {/* Timeline steps grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {processStepsData.map((step, idx) => {
              // Color accents depending on step to create visual rhythm
              const accentColorClass = 
                idx === 0 ? 'text-[#19A7CE] border-[#19A7CE]/30' :
                idx === 1 ? 'text-[#57C5B6] border-[#57C5B6]/30' :
                idx === 2 ? 'text-[#F27D26] border-[#F27D26]/30' :
                idx === 3 ? 'text-[#19A7CE] border-[#19A7CE]/30' :
                'text-[#57C5B6] border-[#57C5B6]/30';

              const badgeColorClass = 
                idx === 0 ? 'bg-[#19A7CE]/10 text-[#19A7CE] border-[#19A7CE]/20' :
                idx === 1 ? 'bg-[#57C5B6]/10 text-[#57C5B6] border-[#57C5B6]/20' :
                idx === 2 ? 'bg-[#F27D26]/10 text-[#F27D26] border-[#F27D26]/20' :
                idx === 3 ? 'bg-[#19A7CE]/10 text-[#19A7CE] border-[#19A7CE]/20' :
                'bg-[#57C5B6]/10 text-[#57C5B6] border-[#57C5B6]/20';

              return (
                <div
                  key={step.stepNumber}
                  id={`process-step-${step.stepNumber}`}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 group"
                >
                  {/* Step bubble */}
                  <div className={`relative flex items-center justify-center w-14 h-14 rounded-2xl bg-white border-2 ${accentColorClass} shadow-md group-hover:scale-110 transition-transform duration-300 z-10`}>
                    <span className="text-lg font-bold tracking-tight text-[#0B2447] font-mono">
                      {step.stepNumber}
                    </span>
                    {/* Glowing pulse aura */}
                    <div className="absolute -inset-1 rounded-2xl bg-[#19A7CE]/5 group-hover:bg-[#19A7CE]/10 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>

                  {/* Step detail content */}
                  <div className="space-y-2.5">
                    <span className={`inline-block px-2.5 py-0.5 rounded-md text-[9px] font-mono uppercase tracking-wider font-bold border ${badgeColorClass}`}>
                      {step.badge}
                    </span>
                    <h3 className="text-base font-bold text-[#0B2447] group-hover:text-[#19A7CE] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal max-w-xs mx-auto lg:mx-0">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process callout banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-sm font-bold text-[#0B2447]">¿Tenés tu última factura eléctrica a mano?</h4>
            <p className="text-xs text-slate-500">Es todo lo que necesitamos para realizar el dimensionamiento preliminar sin costo.</p>
          </div>
          <button
            onClick={() => {
              const element = document.getElementById('contacto');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-5 py-3 rounded-full bg-[#F27D26] hover:bg-orange-600 text-xs font-bold text-white shadow-sm transition-all cursor-pointer whitespace-nowrap"
          >
            Adjuntar Factura en Consulta
          </button>
        </div>

      </div>
    </section>
  );
}

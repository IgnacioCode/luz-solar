import React from 'react';
import { processStepsData } from '../data';

export default function Process() {
  return (
    <section id="proceso" className="py-24 bg-slate-100 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#006CB5]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#006CB5]">
            El camino hacia tu propia energía, paso a paso
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Garantizamos un servicio "llave en mano" libre de fricciones. Nos encargamos de todo el proceso para que solo te preocupes por ver descender tu consumo mensual.
          </p>
        </div>

        {/* Desktop timeline line */}
        <div className="relative mx-auto mt-12 max-w-6xl">
          {/* Horizontal line for desktop */}
          <div className="absolute top-[2.25rem] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#006CB5]/20 via-[#6DA42C]/40 to-[#F98A1E]/20 hidden lg:block z-0" />

          {/* Timeline steps grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
            {processStepsData.map((step, idx) => {
              // Color accents depending on step to create visual rhythm
              const accentColorClass = 
                idx === 0 ? 'text-[#006CB5] border-[#006CB5]/30' :
                idx === 1 ? 'text-[#6DA42C] border-[#6DA42C]/30' :
                idx === 2 ? 'text-[#F98A1E] border-[#F98A1E]/30' :
                idx === 3 ? 'text-[#006CB5] border-[#006CB5]/30' :
                'text-[#6DA42C] border-[#6DA42C]/30';

              const badgeColorClass = 
                idx === 0 ? 'bg-[#006CB5]/10 text-[#006CB5] border-[#006CB5]/20' :
                idx === 1 ? 'bg-[#6DA42C]/10 text-[#6DA42C] border-[#6DA42C]/20' :
                idx === 2 ? 'bg-[#F98A1E]/10 text-[#F98A1E] border-[#F98A1E]/20' :
                idx === 3 ? 'bg-[#006CB5]/10 text-[#006CB5] border-[#006CB5]/20' :
                'bg-[#6DA42C]/10 text-[#6DA42C] border-[#6DA42C]/20';

              return (
                <div
                  key={step.stepNumber}
                  id={`process-step-${step.stepNumber}`}
                  className="flex flex-col items-center text-center space-y-4 group"
                >
                  {/* Step bubble */}
                  <div className={`relative flex items-center justify-center w-14 h-14 rounded-2xl bg-white border-2 ${accentColorClass} shadow-md group-hover:scale-110 transition-transform duration-300 z-10`}>
                    <span className="text-lg font-bold tracking-tight text-[#006CB5] font-mono">
                      {step.stepNumber}
                    </span>
                    {/* Glowing pulse aura */}
                    <div className="absolute -inset-1 rounded-2xl bg-[#006CB5]/5 group-hover:bg-[#006CB5]/10 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>

                  {/* Step detail content */}
                  <div className="space-y-2.5">
                    <span className={`inline-block px-2.5 py-0.5 rounded-md text-[9px] font-mono uppercase tracking-wider font-bold border ${badgeColorClass}`}>
                      {step.badge}
                    </span>
                    <h3 className="text-base font-bold text-[#006CB5] group-hover:text-[#006CB5] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal max-w-xs mx-auto">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

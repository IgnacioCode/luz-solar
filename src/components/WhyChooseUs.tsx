import React from 'react';
import { Award, ThumbsUp, Users, HeartHandshake } from 'lucide-react';
import { commercialArgumentsData } from '../data';

const iconMap = {
  Award,
  ThumbsUp,
  Users,
  HeartHandshake,
};

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#006CB5]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#6DA42C]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-[#006CB5] font-mono uppercase bg-[#006CB5]/10 px-3.5 py-1.5 rounded-full border border-[#006CB5]/25">
            Diferenciadores Comerciales
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#006CB5]">
            Por qué confían en nosotros industrias, campos y familias
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Consolidamos nuestra reputación basándonos en la seriedad de ingeniería, marcas de primera línea y un compromiso ético de acompañar el ciclo de vida completo del sistema solar.
          </p>
        </div>

        {/* Arguments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {commercialArgumentsData.map((arg) => {
            const ArgIcon = iconMap[arg.iconName as keyof typeof iconMap];
            
            return (
              <div
                key={arg.id}
                id={`why-choose-${arg.id}`}
                className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#006CB5]/30 hover:bg-white transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5">
                  {/* Icon Wrapper */}
                  <div className="p-3.5 rounded-xl bg-white border border-slate-150 text-[#006CB5] shrink-0">
                    {ArgIcon ? <ArgIcon className="w-6 h-6" /> : <Award className="w-6 h-6" />}
                  </div>

                  {/* Text Contents */}
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-[#006CB5]">
                      {arg.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      {arg.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Seal banner */}
        <div className="mt-16 text-center">
          <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">
            Nuestros instaladores operan bajo normativas de seguridad e higiene{' '}
            <span className="text-[#6DA42C] font-bold">Iram / AEA 90364-7-712</span>
          </p>
        </div>

      </div>
    </section>
  );
}

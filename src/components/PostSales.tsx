import React from 'react';
import { ShieldAlert, Wrench, RefreshCw, Zap, Activity, ShieldCheck, HeartHandshake } from 'lucide-react';
import { postSalesServicesData } from '../data';

const iconMap = {
  ShieldAlert,
  Wrench,
  RefreshCw,
  Zap,
  Activity,
};

export default function PostSales() {
  return (
    <section id="post-venta" className="py-24 bg-slate-100 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-[#006CB5]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#6DA42C]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Security and Trust Callout */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4 text-center lg:text-left">
              <span className="text-xs font-bold tracking-widest text-[#006CB5] font-mono uppercase bg-[#006CB5]/10 px-3.5 py-1.5 rounded-full border border-[#006CB5]/25">
                Soporte y Garantía Real
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#006CB5] leading-tight">
                No solo vendemos equipos. Te respaldamos de por vida.
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                Nuestra relación con vos comienza realmente una vez que la instalación queda encendida. Nos diferenciamos por estructurar un departamento de soporte técnico e ingeniería post venta real, proactivo y veloz.
              </p>
            </div>

            {/* Glowing Trust Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl relative overflow-hidden group">
              {/* Subtle background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#006CB5]/5 to-[#6DA42C]/5 opacity-50 pointer-events-none" />
              
              <div className="relative z-10 space-y-5">
                <div className="flex items-center space-x-3 text-[#006CB5]">
                  <ShieldCheck className="w-8 h-8 shrink-0 animate-pulse text-[#006CB5]" />
                  <span className="text-sm font-bold text-[#006CB5] uppercase tracking-wider font-mono">
                    Garantía de Funcionamiento
                  </span>
                </div>
                
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  Monitoreamos tu sistema en la nube de forma activa. Si el inversor arroja un código de alerta o baja su promedio de generación estacional, nuestro equipo se contacta con vos para solucionarlo antes de que lo notes.
                </p>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono font-bold text-slate-400">
                  <div className="flex items-center space-x-1.5 text-slate-500">
                    <HeartHandshake className="w-4 h-4 text-[#6DA42C]" />
                    <span>Soporte 24/7 de Guardia</span>
                  </div>
                  <span className="text-[#F98A1E] font-bold">STOCK INMEDIATO</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Post-Sales Services List */}
          <div className="lg:col-span-7 space-y-5">
            {postSalesServicesData.map((service) => {
              const ServiceIcon = iconMap[service.iconName as keyof typeof iconMap];
              
              return (
                <div
                  key={service.id}
                  id={`post-sales-card-${service.id}`}
                  className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-5 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#006CB5]/30 hover:shadow-md transition-all duration-300 group hover:bg-white"
                >
                  {/* Icon Frame */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-150 text-[#006CB5] group-hover:text-[#6DA42C] group-hover:border-[#6DA42C]/30 transition-colors shrink-0">
                    {ServiceIcon ? <ServiceIcon className="w-5.5 h-5.5" /> : <Wrench className="w-5.5 h-5.5" />}
                  </div>

                  {/* Text Details */}
                  <div className="space-y-1.5 flex-1">
                    <h3 className="text-sm font-bold text-[#006CB5] group-hover:text-[#006CB5] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      {service.description}
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

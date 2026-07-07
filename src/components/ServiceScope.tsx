import React from 'react';
import { BatteryCharging, Home, MapPin, PackageCheck, Ruler, Truck, Wrench, Zap } from 'lucide-react';
import { siteConfig } from '../siteConfig';

const scopeItems = [
  {
    title: 'Equipos solares',
    description: 'Paneles, inversores, baterías, reguladores, protecciones, estructuras y cableado fotovoltaico.',
    icon: BatteryCharging,
  },
  {
    title: 'Dimensionamiento',
    description: 'Calculamos potencia, autonomía, cantidad de paneles y tipo de inversor según consumo y objetivo.',
    icon: Ruler,
  },
  {
    title: 'Kits armados',
    description: 'Soluciones on-grid, híbridas u off-grid preparadas para hogares, comercios, industrias y campos.',
    icon: PackageCheck,
  },
  {
    title: 'Instalación a medida',
    description: 'Acompañamiento desde el relevamiento hasta la puesta en marcha cuando el proyecto lo requiere.',
    icon: Wrench,
  },
];

const quickFacts = [
  { label: 'Base comercial', value: siteConfig.location.base, icon: MapPin },
  { label: 'Cobertura', value: siteConfig.location.coverage, icon: Truck },
  { label: 'Modalidad', value: siteConfig.location.pickup, icon: Home },
];

export default function ServiceScope() {
  return (
    <section id="alcance" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="space-y-5 lg:col-span-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#6DA42C]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#6DA42C]">
              <Zap className="h-3.5 w-3.5" />
              Ahorro e independencia energética
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-[#006CB5] sm:text-4xl">
              Venta, kits e instalación con asesoramiento cercano
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              La propuesta de Luz Solar combina catálogo, consulta técnica y confianza institucional: podés comprar equipos, pedir un kit o avanzar con una instalación dimensionada para tu consumo.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {scopeItems.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="mb-4 inline-flex rounded-xl bg-white p-3 text-[#006CB5] shadow-sm">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-[#006CB5]">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {quickFacts.map((fact) => (
            <div key={fact.label} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <fact.icon className="mt-0.5 h-5 w-5 shrink-0 text-[#F98A1E]" />
              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">{fact.label}</p>
                <p className="mt-1 text-sm font-bold text-[#006CB5]">{fact.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

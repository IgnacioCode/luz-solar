'use client';

import Link from 'next/link';
import {
  ArrowRight,
  BatteryCharging,
  Cable,
  Car,
  Droplets,
  SolarPanel,
  Sun,
  type LucideIcon,
} from 'lucide-react';
import { productCategoryLabels } from '../data';
import type { Product } from '../types';

type SolarGuideProps = {
  topics: Product[];
  onExploreCatalog: () => void;
};

const categoryIcons: Record<Product['category'], LucideIcon> = {
  kits: Sun,
  solar: SolarPanel,
  storage: BatteryCharging,
  electrical: Cable,
  water: Droplets,
  mobility: Car,
};

const primarySolutionSlugs = [
  'kits-solares-on-grid',
  'kits-solares-hibridos',
  'kits-solares-off-grid',
];

const systemStepSlugs = [
  'paneles-solares',
  'estructuras-para-paneles',
  'inversores',
  'baterias-de-litio',
  'baterias-de-plomo',
];

const applicationSlugs = [
  'bombeo-solar',
  'termotanque-solar',
  'colectores-solares-piscina',
  'bombas-de-calor-piscina',
  'luminarias-y-camaras',
  'movilidad-electrica',
  'estaciones-de-carga-portatiles',
];

const systemStepLabels = [
  'Captá la energía',
  'Montá el sistema',
  'Convertí la energía',
  'Sumá respaldo',
  'Elegí la autonomía',
];

function getTopicsBySlug(topics: Product[], slugs: string[]) {
  return slugs.flatMap((slug) => {
    const topic = topics.find((item) => item.slug === slug);
    return topic ? [topic] : [];
  });
}

export default function SolarGuide({ topics, onExploreCatalog }: SolarGuideProps) {
  const primarySolutions = getTopicsBySlug(topics, primarySolutionSlugs);
  const systemSteps = getTopicsBySlug(topics, systemStepSlugs);
  const applications = getTopicsBySlug(topics, applicationSlugs);

  return (
    <section id="conceptos" className="relative overflow-hidden bg-slate-50 py-24">
      <div className="mx-auto w-full max-w-[92rem] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6DA42C]">Guía solar</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#006CB5] sm:text-4xl">Encontrá el camino que mejor se adapta a tu energía</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">Primero definí qué necesitás resolver; después conocé los equipos que forman el sistema y las aplicaciones que podés sumar.</p>
        </div>

        <div className="mt-14">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#6DA42C]">01 · Elegí tu punto de partida</p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">¿Qué querés resolver?</h3>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-500">Cada camino parte de una necesidad concreta: ahorro, respaldo o energía en lugares sin red.</p>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {primarySolutions.map((topic, index) => {
              const TopicIcon = categoryIcons[topic.category];
              return (
                <Link key={topic.id} href={`/soluciones/${topic.slug}`} className="group relative min-h-[21rem] overflow-hidden rounded-3xl bg-[#003E6B] p-6 text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006CB5]">
                  <img src={topic.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-45 transition duration-500 group-hover:scale-105 group-hover:opacity-55" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003E6B] via-[#003E6B]/65 to-[#003E6B]/10" />
                  <article className="relative z-10 flex h-full flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-sm font-bold">0{index + 1}</span>
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15"><TopicIcon className="h-5 w-5" /></span>
                    </div>
                    <div className="mt-auto">
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#B5DF82]">{index === 0 ? 'Tengo red y quiero ahorrar' : index === 1 ? 'Quiero respaldo ante cortes' : 'No tengo red eléctrica'}</p>
                      <h4 className="mt-2 text-2xl font-bold tracking-tight">{topic.name}</h4>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-100/85">{topic.description}</p>
                      <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-white">Conocer esta solución <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] border border-slate-200 bg-white px-5 py-8 shadow-sm sm:px-8 sm:py-10">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#6DA42C]">02 · Entendé cómo se compone</p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">Un sistema solar es una cadena de decisiones</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">De izquierda a derecha, recorré los equipos que captan, administran y almacenan la energía según el tipo de proyecto.</p>
          </div>

          <div className="relative mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
            <div className="absolute left-[10%] right-[10%] top-11 hidden h-px bg-[#006CB5]/20 xl:block" aria-hidden="true" />
            {systemSteps.map((topic, index) => {
              const TopicIcon = categoryIcons[topic.category];
              return (
                <Link key={topic.id} href={`/soluciones/${topic.slug}`} className="group relative z-10 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-[#006CB5]/35 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006CB5]">
                  <article>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#006CB5]/15 bg-slate-50 text-[#006CB5] transition group-hover:bg-[#006CB5] group-hover:text-white"><TopicIcon className="h-5 w-5" /></span>
                    <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#6DA42C]">Paso {index + 1}</p>
                    <h4 className="mt-1 text-sm font-bold leading-snug text-slate-900">{systemStepLabels[index]}</h4>
                    <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-500">{topic.name}</p>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#6DA42C]">03 · Aplicaciones especiales</p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">Llevá la energía solar a cada necesidad</h3>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-500">Agua, climatización, iluminación y movilidad: explorá soluciones concretas para cada uso.</p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {applications.map((topic) => {
              const TopicIcon = categoryIcons[topic.category];
              return (
                <Link key={topic.id} href={`/soluciones/${topic.slug}`} className="group flex min-w-0 items-center gap-4 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:border-[#006CB5]/35 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006CB5]">
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-slate-100"><img src={topic.image} alt="" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" referrerPolicy="no-referrer" /></div>
                  <article className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#6DA42C]">{productCategoryLabels[topic.category]}</p>
                    <h4 className="mt-1 line-clamp-2 text-sm font-bold leading-snug text-slate-900">{topic.name}</h4>
                  </article>
                  <TopicIcon className="h-4 w-4 shrink-0 text-slate-300 transition group-hover:text-[#006CB5]" />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-[#006CB5]/15 bg-[#006CB5]/5 px-6 py-7 text-center">
          <p className="text-sm text-slate-600">¿Ya sabés qué equipo necesitás?</p>
          <button onClick={onExploreCatalog} className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-[#006CB5] transition hover:text-[#005b98] hover:underline hover:underline-offset-4">Ir al catálogo con precios <ArrowRight className="h-4 w-4" /></button>
        </div>
      </div>
    </section>
  );
}

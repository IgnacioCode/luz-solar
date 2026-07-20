'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
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

const categoryIcons: Record<Product['category'] | 'all', LucideIcon> = {
  all: Sun,
  kits: Sun,
  solar: SolarPanel,
  storage: BatteryCharging,
  electrical: Cable,
  water: Droplets,
  mobility: Car,
};

export default function SolarGuide({ topics, onExploreCatalog }: SolarGuideProps) {
  const [selectedCategory, setSelectedCategory] = useState<Product['category'] | 'all'>('all');
  const categories = useMemo(() => [
    { value: 'all' as const, label: 'Todos los conceptos' },
    { value: 'kits' as const, label: productCategoryLabels.kits },
    { value: 'solar' as const, label: productCategoryLabels.solar },
    { value: 'storage' as const, label: productCategoryLabels.storage },
    { value: 'electrical' as const, label: productCategoryLabels.electrical },
    { value: 'water' as const, label: productCategoryLabels.water },
    { value: 'mobility' as const, label: productCategoryLabels.mobility },
  ], []);
  const visibleTopics = topics.filter((topic) => selectedCategory === 'all' || topic.category === selectedCategory);

  return (
    <section id="conceptos" className="relative overflow-hidden bg-slate-50 py-24">
      <div className="mx-auto w-full max-w-[92rem] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6DA42C]">Guía solar</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#006CB5] sm:text-4xl">
            Conceptos y soluciones para generar energía solar
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Conocé cómo se compone un sistema solar, cuándo conviene cada tecnología y qué equipos intervienen antes de elegir un producto.
          </p>
        </div>

        <div className="mt-10 flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => {
            const CategoryIcon = categoryIcons[category.value];
            const selected = selectedCategory === category.value;

            return (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`inline-flex h-10 shrink-0 items-center gap-2 rounded-full border px-4 text-xs font-bold transition ${selected ? 'border-[#006CB5] bg-[#006CB5] text-white' : 'border-slate-200 bg-white text-slate-600 hover:border-[#006CB5]/35 hover:text-[#006CB5]'}`}
                aria-pressed={selected}
              >
                <CategoryIcon className="h-4 w-4" />
                {category.label}
              </button>
            );
          })}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {visibleTopics.map((topic) => {
            const TopicIcon = categoryIcons[topic.category];

            return (
              <Link key={topic.id} href={`/soluciones/${topic.slug}`} className="group flex min-w-0 flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-[#006CB5]/35 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006CB5]">
                <article>
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#006CB5]/10 text-[#006CB5]">
                      <TopicIcon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#6DA42C]">{productCategoryLabels[topic.category]}</p>
                      <h3 className="mt-0.5 text-base font-bold leading-snug text-slate-900 sm:text-lg">{topic.name}</h3>
                    </div>
                  </div>
                  <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-slate-500">{topic.description}</p>
                </article>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500">¿Buscás un equipo concreto?</p>
          <button onClick={onExploreCatalog} className="mt-2 text-sm font-bold text-[#006CB5] hover:underline hover:underline-offset-4">
            Ir al catálogo con precios
          </button>
        </div>
      </div>
    </section>
  );
}

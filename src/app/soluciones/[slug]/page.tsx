import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle, Info, Ruler, ShoppingBag } from 'lucide-react';
import { getSolarTopicBySlug, productCategoryLabels, solarTopicsData } from '@/src/data';
import BrandLogo from '@/src/components/BrandLogo';
import CartButton from '@/src/components/CartButton';

type SolutionDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return solarTopicsData.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({ params }: SolutionDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = getSolarTopicBySlug(slug);

  return topic
    ? { title: `${topic.name} | Guía solar | Luz Solar SRL`, description: topic.description }
    : { title: 'Solución no encontrada | Luz Solar SRL' };
}

export default async function SolutionDetailPage({ params }: SolutionDetailPageProps) {
  const { slug } = await params;
  const topic = getSolarTopicBySlug(slug);

  if (!topic) {
    notFound();
  }

  const hasDetailSections = Boolean(topic.detailSections?.length);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-[#003E6B] text-white">
        <div className="absolute inset-0 opacity-20">
          <img src={topic.image} alt="" className="h-full w-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#003E6B] via-[#003E6B]/95 to-[#006CB5]/75" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-center justify-between gap-4">
            <Link href="/#conceptos" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold transition hover:bg-white/15">
              <ArrowLeft className="h-4 w-4" />
              Volver a la guía
            </Link>
            <div className="flex items-center gap-5">
              <Link href="/#catalogo" className="hidden items-center gap-2 text-xs font-bold text-white/90 hover:text-white sm:inline-flex">
                <ShoppingBag className="h-4 w-4" />
                Ver catálogo
              </Link>
              <BrandLogo textClassName="text-white" subTextClassName="text-white/75" />
              <CartButton theme="dark" />
            </div>
          </div>
          <div className="max-w-3xl">
            <span className="rounded-full bg-[#6DA42C] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              {productCategoryLabels[topic.category]}
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">{topic.name}</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-200">{topic.detailIntro}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="space-y-6 lg:col-span-8">
          {hasDetailSections ? topic.detailSections?.map((section, index) => (
            <article key={section.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#006CB5]/10 text-xs font-bold text-[#006CB5]">{index + 1}</span>
                <div className="min-w-0 flex-1">
                  <h2 className="text-xl font-bold text-[#006CB5]">{section.title}</h2>
                  {section.body?.map((paragraph) => <p key={paragraph} className="mt-3 text-sm leading-relaxed text-slate-600">{paragraph}</p>)}
                  {section.items?.length ? <div className="mt-5 grid gap-3 sm:grid-cols-2">{section.items.map((item) => <div key={item} className="flex gap-2 text-sm text-slate-600"><CheckCircle className="h-5 w-5 shrink-0 text-[#6DA42C]" />{item}</div>)}</div> : null}
                  {section.subsections?.length ? <div className="mt-5 grid gap-4 sm:grid-cols-2">{section.subsections.map((item) => <div key={item.title} className="border-l-2 border-[#F98A1E]/45 pl-4"><h3 className="text-sm font-bold text-slate-900">{item.title}</h3><p className="mt-1 text-sm leading-relaxed text-slate-600">{item.body}</p></div>)}</div> : null}
                </div>
              </div>
            </article>
          )) : (
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#006CB5]">Puntos clave</h2>
              <div className="mt-5 space-y-4">{topic.detailPoints.map((point) => <div key={point} className="flex gap-3 text-sm leading-relaxed text-slate-600"><Ruler className="h-5 w-5 shrink-0 text-[#F98A1E]" />{point}</div>)}</div>
            </article>
          )}
        </div>

        <aside className="space-y-5 lg:col-span-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-[#006CB5]"><Info className="h-5 w-5" /><h2 className="text-base font-bold">Ideal para</h2></div>
            <div className="mt-4 flex flex-wrap gap-2">{topic.idealFor.map((item) => <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{item}</span>)}</div>
          </div>
          <div className="rounded-2xl border border-[#6DA42C]/30 bg-[#6DA42C]/10 p-6">
            <h2 className="font-bold text-[#006CB5]">¿Querés armar tu sistema?</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">Conocé equipos concretos, precios de referencia y sus fichas de compra.</p>
            <Link href="/#catalogo" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#006CB5] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#005b98]"><ShoppingBag className="h-4 w-4" />Ir al catálogo</Link>
          </div>
        </aside>
      </section>
    </main>
  );
}

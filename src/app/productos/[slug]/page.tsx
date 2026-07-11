import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  CheckCircle,
  MessageSquare,
  PackageCheck,
  Ruler,
  Send,
  ShieldCheck,
  Truck,
} from 'lucide-react';
import { productCategoryLabels } from '@/src/data';
import { getAllProducts, getMergedProductBySlug } from '@/src/lib/products';
import { buildWhatsAppUrl, siteConfig } from '@/src/siteConfig';

type ProductDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const products = await getAllProducts();

  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getMergedProductBySlug(slug);

  if (!product) {
    return {
      title: 'Producto no encontrado | Luz Solar SRL',
    };
  }

  return {
    title: `${product.name} | Luz Solar SRL`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = await getMergedProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const whatsappText = `Hola Luz Solar! Vi la ficha del producto *${product.name}* y quiero consultar por ${product.consultationFocus}. ¿Me pueden orientar con precio, disponibilidad y envío?`;
  const whatsappUrl = buildWhatsAppUrl(whatsappText);
  const hasDetailSections = Boolean(product.detailSections?.length);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-[#003E6B] text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src={product.image}
            alt=""
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#003E6B] via-[#003E6B]/95 to-[#006CB5]/75" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-center justify-between gap-4">
            <Link
              href="/#productos"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-white transition hover:bg-white/15"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver al catálogo
            </Link>
            <Link href="/" className="flex items-center gap-2" aria-label="Ir al inicio">
              <span className="text-lg font-bold tracking-tight">LUZ <span className="text-[#F98A1E]">SOLAR</span></span>
              <span className="text-[10px] font-mono font-bold text-[#6DA42C]">SRL</span>
            </Link>
          </div>

          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="space-y-6 lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#F98A1E] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  {productCategoryLabels[product.category]}
                </span>
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white/85">
                  Precio y stock a consultar
                </span>
              </div>
              <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
                {product.name}
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-slate-200">
                {product.detailIntro}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F98A1E] px-6 py-3 text-sm font-bold text-white shadow-xl shadow-[#F98A1E]/20 transition hover:bg-[#E47412]"
                >
                  <MessageSquare className="h-4 w-4" />
                  Consultar por WhatsApp
                </a>
                <Link
                  href="/#contacto"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  <Send className="h-4 w-4" />
                  Pedir dimensionamiento
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-2 shadow-2xl">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-slate-950">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="space-y-8 lg:col-span-8">
          {hasDetailSections ? (
            product.detailSections?.map((section, sectionIndex) => (
              <div key={section.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#006CB5]/10 text-xs font-bold text-[#006CB5]">
                    {sectionIndex + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-xl font-bold text-[#006CB5]">{section.title}</h2>

                    {section.body?.length ? (
                      <div className="mt-4 space-y-3">
                        {section.body.map((paragraph) => (
                          <p key={paragraph} className="text-sm leading-relaxed text-slate-600">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    ) : null}

                    {section.items?.length ? (
                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        {section.items.map((item) => (
                          <div key={item} className="flex items-start gap-3 text-sm text-slate-600">
                            <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#6DA42C]" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    ) : null}

                    {section.subsections?.length ? (
                      <div className="mt-5 grid gap-4 sm:grid-cols-2">
                        {section.subsections.map((subsection) => (
                          <div key={subsection.title} className="border-l-2 border-[#F98A1E]/45 pl-4">
                            <h3 className="text-sm font-bold text-slate-900">{subsection.title}</h3>
                            <p className="mt-1 text-sm leading-relaxed text-slate-600">{subsection.body}</p>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-[#006CB5]">Características puntuales</h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {product.specifications.map((specification) => (
                    <div key={specification} className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#6DA42C]" />
                      <span>{specification}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-[#006CB5]">Cómo se aplica en un proyecto</h2>
                <div className="mt-5 space-y-4">
                  {product.detailPoints.map((point) => (
                    <div key={point} className="flex items-start gap-3 text-sm leading-relaxed text-slate-600">
                      <Ruler className="mt-0.5 h-5 w-5 shrink-0 text-[#F98A1E]" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        <aside className="space-y-5 lg:col-span-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-base font-bold text-[#006CB5]">Ideal para</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {product.idealFor.map((item) => (
                <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-base font-bold text-[#006CB5]">Venta y entrega</h2>
            <div className="mt-4 space-y-4 text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <PackageCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#6DA42C]" />
                <span>Producto suelto, kit armado o instalación a medida según el caso.</span>
              </div>
              <div className="flex items-start gap-3">
                <Truck className="mt-0.5 h-5 w-5 shrink-0 text-[#006CB5]" />
                <span>{siteConfig.location.coverage}. Base comercial en {siteConfig.location.base}.</span>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#F98A1E]" />
                <span>{siteConfig.location.pickup}.</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#6DA42C]/25 bg-[#6DA42C]/10 p-6">
            <h2 className="text-base font-bold text-[#006CB5]">Consulta rápida</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              El precio final puede variar por marca, stock, cantidad, envío y dimensionamiento del sistema.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#6DA42C] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#5F9326]"
            >
              <MessageSquare className="h-4 w-4" />
              Escribir al {siteConfig.whatsapp.display}
            </a>
          </div>
        </aside>
      </section>
    </main>
  );
}

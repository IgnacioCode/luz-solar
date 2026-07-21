import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  CheckCircle2,
  CreditCard,
  PackageCheck,
  ShieldCheck,
  ShoppingBag,
  Truck,
} from 'lucide-react';
import { productCategoryLabels } from '@/src/data';
import { getAllCatalogProducts, getMergedProductBySlug } from '@/src/lib/products';
import { siteConfig } from '@/src/siteConfig';
import BrandLogo from '@/src/components/BrandLogo';
import ProductGallery from '@/src/components/ProductGallery';
import CartButton from '@/src/components/CartButton';
import ProductAddToCartButton from '@/src/components/ProductAddToCartButton';

type ProductDetailPageProps = {
  params: Promise<{ slug: string }>;
};

function formatPrice(price: number, currency: 'ARS' | 'USD' = 'USD') {
  const amount = new Intl.NumberFormat('es-AR', { maximumFractionDigits: 0 }).format(price);
  return `${currency === 'USD' ? 'U$S' : '$'} ${amount}`;
}

export async function generateStaticParams() {
  const products = await getAllCatalogProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getMergedProductBySlug(slug);

  return product
    ? { title: `${product.name} | Catálogo | Luz Solar SRL`, description: product.description }
    : { title: 'Producto no encontrado | Luz Solar SRL' };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = await getMergedProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const price = formatPrice(product.price, product.currency ?? 'USD');
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/#catalogo" className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 transition hover:text-[#006CB5]">
            <ArrowLeft className="h-4 w-4" />
            Volver al catálogo
          </Link>
          <div className="flex items-center gap-3"><BrandLogo /><CartButton /></div>
        </div>
      </header>

      <section className="pb-10">
        <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Inicio / Catálogo / {productCategoryLabels[product.category]}</p>
        <div className="mt-5 grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6">
            <ProductGallery images={product.images?.length ? product.images : [product.image]} name={product.name} badge={product.badge} />
          </div>

          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#6DA42C]">{productCategoryLabels[product.category]}</span>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{product.name}</h1>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{product.description}</p>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Precio de referencia</p>
                <p className="mt-1 text-4xl font-extrabold tracking-tight text-[#006CB5]">{price}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">{product.priceNote ?? 'Precio sujeto a disponibilidad y configuración del producto.'}</p>
                <div className="mt-4 flex items-center gap-2 rounded-lg bg-[#6DA42C]/10 px-3 py-2 text-xs font-bold text-[#47771c]"><CheckCircle2 className="h-4 w-4" />{product.availability ?? 'Consultar disponibilidad'}</div>
                <ProductAddToCartButton product={product} />
                <p className="mt-3 text-center text-[11px] text-slate-400">Te confirmamos stock, entrega y medios de pago antes de concretar la compra.</p>
              </div>
              <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h2 className="text-sm font-bold text-[#006CB5]">Especificaciones principales</h2>
                <div className="mt-4 space-y-3">
                  {product.specifications.map((specification) => <div key={specification} className="flex items-start gap-2 text-xs leading-relaxed text-slate-600"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#6DA42C]" />{specification}</div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="space-y-8 lg:col-span-8">
            <article>
              <h2 className="text-2xl font-bold text-[#006CB5]">Sobre este producto</h2>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600">{product.detailIntro}</p>
            </article>
            <article className="border-t border-slate-200 pt-8">
              <h2 className="text-2xl font-bold text-[#006CB5]">Antes de comprar</h2>
              <div className="mt-5 space-y-3">{product.detailPoints.map((point) => <p key={point} className="border-l-2 border-[#F98A1E]/50 pl-4 text-sm leading-relaxed text-slate-600">{point}</p>)}</div>
            </article>
          </div>

          <aside className="space-y-4 lg:col-span-4">
            <div className="rounded-2xl border border-slate-200 p-5">
              <h2 className="font-bold text-[#006CB5]">Ideal para</h2>
              <div className="mt-4 flex flex-wrap gap-2">{product.idealFor.map((item) => <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{item}</span>)}</div>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5">
              <h2 className="font-bold text-[#006CB5]">Compra acompañada</h2>
              <div className="mt-4 space-y-4 text-sm text-slate-600">
                <div className="flex gap-3"><PackageCheck className="h-5 w-5 shrink-0 text-[#6DA42C]" />Confirmación de stock y modelo antes de la compra.</div>
                <div className="flex gap-3"><Truck className="h-5 w-5 shrink-0 text-[#006CB5]" />{siteConfig.location.coverage}.</div>
                <div className="flex gap-3"><CreditCard className="h-5 w-5 shrink-0 text-[#F98A1E]" />Medios de pago y factura a confirmar por WhatsApp.</div>
                <div className="flex gap-3"><ShieldCheck className="h-5 w-5 shrink-0 text-[#006CB5]" />Asesoramiento para verificar compatibilidad técnica.</div>
              </div>
            </div>
            <Link href="/#conceptos" className="flex items-center justify-center gap-2 rounded-2xl bg-slate-100 px-5 py-4 text-sm font-bold text-[#006CB5] transition hover:bg-slate-200"><ShoppingBag className="h-4 w-4" />Ver guía de soluciones solares</Link>
          </aside>
        </div>
      </section>
    </main>
  );
}

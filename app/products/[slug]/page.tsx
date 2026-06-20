import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getProductBySlug, products } from "@/data/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) return {};

  return {
    title: `${product.name} | ACTION Water Solutions`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  return (
    <main className="bg-white">
      <Navbar />
      <section className="relative overflow-hidden bg-[#062b47] px-5 pb-24 pt-40 text-white sm:px-8 lg:px-10 lg:pb-28 lg:pt-48">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_35%,rgba(34,211,238,0.18),transparent_30%),linear-gradient(125deg,#063354_0%,#075476_55%,#05283f_100%)]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[58%] opacity-25 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="relative mx-auto max-w-[1440px]">
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-200 transition-colors hover:text-white"
          >
            <ArrowLeft size={14} />
            Product Systems
          </Link>
          <div className="mt-10 max-w-4xl">
            <div className="text-[11px] font-bold uppercase tracking-[0.23em] text-cyan-300">
              {product.category}
            </div>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              {product.name}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {product.description}
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-start lg:gap-20">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-600">
              System Overview
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#082d49] sm:text-4xl">
              Engineered for complete water infrastructure delivery
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">
              ACTION combines engineering, equipment integration, controls, and
              project support to configure each system around site conditions,
              treatment objectives, and operational requirements.
            </p>
          </div>

          <aside className="rounded-[1.75rem] border border-slate-200 bg-[#f5f8fa] p-7 shadow-[0_15px_45px_rgba(8,45,73,0.06)] sm:p-8">
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-600">
              Project Support
            </div>
            <div className="mt-5 space-y-4">
              {["System engineering", "Equipment integration", "Commissioning support"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-[#082d49]">
                    <CheckCircle2 size={16} className="text-cyan-500" />
                    {item}
                  </div>
                ),
              )}
            </div>
            <Link
              href="/#contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#082d49] px-5 py-3 text-xs font-bold text-white transition-colors hover:bg-[#0b3b5e]"
            >
              Discuss Your Project
              <ArrowRight size={14} />
            </Link>
          </aside>
        </div>
      </section>
      <Footer />
    </main>
  );
}

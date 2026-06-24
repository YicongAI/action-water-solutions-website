import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NewsCategoryListing from "@/components/NewsCategoryListing";
import {
  getNewsCategory,
  getNewsPostsByCategory,
  newsCategories,
} from "@/data/news";

type NewsCategoryPageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return newsCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: NewsCategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getNewsCategory(categorySlug);

  if (!category) return {};

  return {
    title: `${category.title} | ACTION Water Solutions`,
    description: category.description,
  };
}

export default async function NewsCategoryPage({
  params,
}: NewsCategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getNewsCategory(categorySlug);

  if (!category) notFound();

  const posts = getNewsPostsByCategory(category.slug);

  return (
    <main id="top" className="bg-[#f5f8fa]">
      <Navbar />
      <section className="relative overflow-hidden bg-[#062b47] px-5 pb-24 pt-40 text-white sm:px-8 lg:px-10 lg:pb-28 lg:pt-48">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_35%,rgba(34,211,238,0.18),transparent_30%),linear-gradient(125deg,#063354_0%,#075476_55%,#05283f_100%)]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[58%] opacity-25 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="relative mx-auto max-w-[1440px]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-200 transition-colors hover:text-white"
          >
            <ArrowLeft size={14} />
            Home
          </Link>
          <div className="mt-10 max-w-4xl">
            <div className="text-[11px] font-bold uppercase tracking-[0.23em] text-cyan-300">
              News &amp; Insights
            </div>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              {category.title}
            </h1>
            <p className="mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-600">
                Latest Articles
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[#082d49] sm:text-4xl">
                Knowledge for water infrastructure
              </h2>
            </div>
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              {posts.length} {posts.length === 1 ? "Article" : "Articles"}
            </div>
          </div>
          <NewsCategoryListing posts={posts} />
        </div>
      </section>
      <Footer />
    </main>
  );
}

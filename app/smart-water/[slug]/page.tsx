import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SmartWaterCapabilityPage from "@/components/SmartWaterCapabilityPage";
import {
  getSmartWaterItemBySlug,
  smartWaterItems,
} from "@/data/smartWater";

type SmartWaterPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return smartWaterItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: SmartWaterPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getSmartWaterItemBySlug(slug);

  if (!item) return {};

  return {
    title: `${item.title} | ACTION Water Solutions`,
    description: item.shortDescription,
  };
}

export default async function SmartWaterPage({
  params,
}: SmartWaterPageProps) {
  const { slug } = await params;
  const item = getSmartWaterItemBySlug(slug);

  if (!item) notFound();

  return (
    <main id="top" className="bg-white">
      <Navbar />
      <SmartWaterCapabilityPage item={item} />
      <Footer />
    </main>
  );
}

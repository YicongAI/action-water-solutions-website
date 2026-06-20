import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import ProjectsSection from "@/components/ProjectsSection";
import GlobalPresenceSection from "@/components/GlobalPresenceSection";
import ProductSystemsSection from "@/components/ProductSystemsSection";
import SmartWaterSection from "@/components/SmartWaterSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <SolutionsSection />
      <ProjectsSection />
      <GlobalPresenceSection />
      <ProductSystemsSection />
      <SmartWaterSection />
      <section id="contact" className="min-h-screen bg-white p-20">
        <h2 className="text-4xl font-semibold text-slate-900">
          Contact Placeholder
        </h2>
      </section>
    </main>
  );
}

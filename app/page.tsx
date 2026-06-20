import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import ProjectsSection from "@/components/ProjectsSection";
import GlobalPresenceSection from "@/components/GlobalPresenceSection";
import ProductSystemsSection from "@/components/ProductSystemsSection";
import SmartWaterSection from "@/components/SmartWaterSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

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
      <ContactSection />
      <Footer />
    </main>
  );
}

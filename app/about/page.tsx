import type { Metadata } from "next";
import AboutPageContent from "@/components/AboutPageContent";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "About ACTION | ACTION Water Solutions",
  description:
    "Learn about ACTION Water Solutions, our manufacturing base, engineering capabilities, research and development, and commitment to sustainable water infrastructure.",
};

export default function AboutPage() {
  return (
    <main id="top" className="bg-white">
      <Navbar />
      <AboutPageContent />
      <Footer />
    </main>
  );
}

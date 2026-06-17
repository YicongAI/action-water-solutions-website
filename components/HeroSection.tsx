"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Gauge, Waves } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  const scrollToContact = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-[#062b47]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_38%,rgba(34,211,238,0.2),transparent_30%),linear-gradient(125deg,#063354_0%,#075476_55%,#05283f_100%)]" />
      <div className="absolute inset-y-0 right-0 hidden w-[58%] overflow-hidden lg:block">
        <motion.video
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 0.68, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.35, ease: "easeOut" }}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover object-center saturate-[0.78] contrast-[1.06]"
        >
          <source src="/videos/factory-intro.mp4" type="video/mp4" />
        </motion.video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#063354] via-[#063b59]/30 to-[#031c2e]/25" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(3,28,46,0.86)_0%,rgba(5,50,75,0.22)_34%,rgba(5,50,75,0.12)_58%,rgba(3,28,46,0.9)_100%)]" />
        <div className="absolute inset-y-0 left-0 w-[38%] bg-gradient-to-r from-[#063354] via-[#063354]/75 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 z-[2] w-full opacity-35 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:72px_72px] lg:w-[62%]" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1600px] items-stretch">
        <div className="relative flex w-full items-center bg-white px-5 pb-20 pt-32 sm:px-10 lg:w-[58%] lg:px-14 lg:pb-12 lg:pt-28 xl:w-[55%] xl:px-24">
          <div className="pointer-events-none absolute -right-36 inset-y-0 hidden w-72 rounded-[0_50%_50%_0/0_50%_50%_0] bg-white lg:block" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-50/80 to-transparent lg:hidden" />

          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.14, delayChildren: 0.2 }}
            className="relative z-10 max-w-2xl"
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.25em] text-cyan-600"
            >
              <span className="h-px w-9 bg-cyan-500" />
              Water systems. Built for tomorrow.
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="text-[clamp(2.8rem,6vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[#082d49]"
            >
              Engineering Sustainable
              <span className="mt-2 block text-cyan-500">
                Water Infrastructure
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8"
            >
              For municipal water supply, rural communities, integrated
              treatment systems, and smart water operations.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#solutions"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#082d49] px-7 py-4 text-sm font-bold text-white shadow-[0_12px_30px_rgba(8,45,73,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b3b5e]"
              >
                Explore Solutions
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-7 py-4 text-sm font-bold text-[#082d49] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-600"
              >
                Request a Quote
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-slate-200 pt-6 text-xs font-semibold text-slate-500"
            >
              <span className="flex items-center gap-2">
                <Waves size={16} className="text-cyan-500" />
                Integrated systems
              </span>
              <span className="flex items-center gap-2">
                <Gauge size={16} className="text-cyan-500" />
                Smart operations
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="absolute bottom-7 right-7 z-20 hidden items-center gap-3 lg:flex xl:bottom-9 xl:right-10"
      >
        <Image
          src="/logo/aks-logo.png"
          alt="ACTION Water Solutions"
          width={48}
          height={48}
          className="h-10 w-10 object-contain opacity-80 xl:h-12 xl:w-12"
        />
        <div className="border-l border-cyan-300/30 pl-3">
          <div className="text-[9px] font-bold uppercase tracking-[0.22em] text-cyan-100/75">
            From Source to Service
          </div>
          <div className="mt-1 text-[8px] font-medium uppercase tracking-[0.17em] text-white/35">
            ACTION Water Solutions
          </div>
        </div>
      </motion.div>
    </section>
  );
}

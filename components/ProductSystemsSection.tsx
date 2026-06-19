"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Boxes,
  Droplets,
  Filter,
  Settings2,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

type ProductSystem = {
  title: string;
  category: string;
  description: string;
  icon: LucideIcon;
  image: string | null;
};

const productSystems: ProductSystem[] = [
  {
    title: "RO & Membrane Systems",
    category: "Water Treatment",
    description:
      "Reverse osmosis and membrane treatment systems for municipal, industrial, and drinking water applications.",
    icon: Droplets,
    image: null,
  },
  {
    title: "Ultrafiltration Technology",
    category: "Membrane Systems",
    description:
      "Advanced ultrafiltration solutions delivering reliable water quality and efficient pretreatment performance.",
    icon: Filter,
    image: null,
  },
  {
    title: "Integrated Treatment Plants",
    category: "Modular Systems",
    description:
      "Containerized and modular water treatment plants designed for scalable deployment and reliable operation.",
    icon: Boxes,
    image: null,
  },
  {
    title: "Environmental Equipment",
    category: "Wastewater Equipment",
    description:
      "Sludge handling, screening, separation, dewatering, and supporting equipment for wastewater treatment projects.",
    icon: Settings2,
    image: null,
  },
  {
    title: "Disinfection Systems",
    category: "Water Safety",
    description:
      "On-site sodium hypochlorite generation and disinfection systems for safe and efficient water treatment.",
    icon: ShieldCheck,
    image: null,
  },
  {
    title: "Smart Water Systems",
    category: "Digital Operations",
    description:
      "Monitoring, automation, remote operation, and intelligent water management systems.",
    icon: Activity,
    image: null,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ProductSystemsSection() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-gradient-to-b from-[#f4f8fa] via-white to-[#f7fafb] px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32"
    >
      <div className="pointer-events-none absolute -right-52 top-20 size-[34rem] rounded-full border border-cyan-500/10" />
      <div className="pointer-events-none absolute -left-40 bottom-10 size-80 rounded-full bg-cyan-100/30 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-16"
        >
          <div>
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.55 }}
              className="mb-5 flex items-center gap-3 text-[11px] font-bold tracking-[0.25em] text-cyan-600"
            >
              <span className="h-px w-10 bg-cyan-500" />
              TECHNOLOGIES &amp; PRODUCT SYSTEMS
            </motion.div>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-[#082d49] sm:text-5xl lg:text-[3.5rem]"
            >
              Integrated Systems for
              <span className="block text-cyan-500">
                Water Treatment and Smart Operations
              </span>
            </motion.h2>
          </div>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.65 }}
            className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
          >
            From membrane treatment and disinfection systems to environmental
            equipment and digital water operations, ACTION delivers complete
            product systems for water infrastructure projects.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.12 }}
          className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {productSystems.map((system, index) => {
            const Icon = system.icon;

            return (
              <motion.article
                key={system.title}
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -7 }}
                className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-white shadow-[0_14px_45px_rgba(8,45,73,0.07)] transition-shadow duration-300 hover:shadow-[0_25px_65px_rgba(8,45,73,0.13)]"
              >
                <div className="relative h-56 overflow-hidden bg-[linear-gradient(135deg,#082d49_0%,#0a536f_58%,#087f98_100%)]">
                  {system.image ? (
                    <Image
                      src={system.image}
                      alt={system.title}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:42px_42px]" />
                      <div className="absolute -right-12 -top-14 size-52 rounded-full border border-cyan-200/20" />
                      <div className="absolute -right-2 -top-4 size-36 rounded-full border border-cyan-200/20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex size-20 items-center justify-center rounded-[1.4rem] border border-cyan-200/25 bg-white/10 text-cyan-100 shadow-[0_18px_45px_rgba(0,20,35,0.2)] backdrop-blur-md transition-transform duration-500 group-hover:scale-105">
                          <Icon size={36} strokeWidth={1.35} />
                        </div>
                      </div>
                    </>
                  )}

                  <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-[#062b47]/70 to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-[#062b47]/55 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.17em] text-cyan-100 backdrop-blur-sm">
                    System 0{index + 1}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-600">
                    {system.category}
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#082d49]">
                    {system.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {system.description}
                  </p>
                  <button
                    type="button"
                    className="mt-auto flex items-center gap-2 pt-7 text-xs font-bold uppercase tracking-[0.14em] text-[#082d49] transition-colors hover:text-cyan-600"
                  >
                    Learn More
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Cpu,
  Factory,
  Recycle,
} from "lucide-react";

const solutions = [
  {
    title: "Municipal & Rural Water Supply",
    description:
      "Water infrastructure for towns, communities, industrial parks, and public utilities.",
    icon: Building2,
  },
  {
    title: "Wastewater Treatment",
    description:
      "Integrated wastewater treatment systems for municipal and industrial applications.",
    icon: Recycle,
  },
  {
    title: "Equipment Manufacturing",
    description:
      "Containerized plants, RO systems, filtration units, control panels, and packaged treatment systems.",
    icon: Factory,
  },
  {
    title: "Smart Water Operations",
    description:
      "Remote monitoring, AI prediction, predictive maintenance, and digital water management.",
    icon: Cpu,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function SolutionsSection() {
  return (
    <section
      id="solutions"
      className="relative overflow-hidden bg-[#f5f8fa] px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32"
    >
      <div className="pointer-events-none absolute -right-44 -top-44 size-[32rem] rounded-full border border-cyan-500/10" />
      <div className="pointer-events-none absolute -right-20 -top-20 size-[20rem] rounded-full border border-cyan-500/10" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-full bg-gradient-to-t from-white/70 to-transparent" />

      <div className="relative mx-auto max-w-[1440px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.12 }}
          className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16"
        >
          <div>
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mb-5 flex items-center gap-3 text-[11px] font-bold tracking-[0.25em] text-cyan-600"
            >
              <span className="h-px w-10 bg-cyan-500" />
              WHAT WE DO
            </motion.div>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-[#082d49] sm:text-5xl lg:text-[3.5rem]"
            >
              Complete Water Solutions
              <span className="block text-cyan-500">
                from Engineering to Smart Operations
              </span>
            </motion.h2>
          </div>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.65 }}
            className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
          >
            ACTION Water Solutions delivers municipal water supply projects,
            integrated treatment equipment, wastewater systems, and smart
            water operations for communities, utilities, and channel partners.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.12 }}
          className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
        >
          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <motion.article
                key={solution.title}
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="group relative flex min-h-80 flex-col overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white p-7 shadow-[0_12px_45px_rgba(8,45,73,0.06)] transition-shadow duration-300 hover:shadow-[0_24px_60px_rgba(8,45,73,0.13)] sm:p-8"
              >
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-cyan-400 transition-transform duration-500 group-hover:scale-x-100" />
                <div className="flex items-start justify-between">
                  <span className="flex size-14 items-center justify-center rounded-2xl border border-cyan-100 bg-cyan-50 text-cyan-600 transition-colors duration-300 group-hover:bg-cyan-500 group-hover:text-white">
                    <Icon size={26} strokeWidth={1.6} />
                  </span>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-slate-300">
                    0{index + 1}
                  </span>
                </div>

                <div className="mt-auto pt-12">
                  <h3 className="text-xl font-semibold leading-snug tracking-[-0.025em] text-[#082d49]">
                    {solution.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {solution.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.13em] text-cyan-600 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    Learn more
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

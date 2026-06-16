"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const projects = [
  {
    image: "/projects/xiangzhou-waterworks.jpg",
    title: "Xiangzhou Waterworks Expansion Project",
    category: "Municipal Water Supply",
    highlight: "35,000 m³/day Capacity",
    description:
      "Large-scale municipal water infrastructure project supporting regional water supply expansion and long-term operational reliability.",
    flagship: true,
  },
  {
    image: "/projects/smart-water-system1.png",
    title: "Smart Water Operations System",
    category: "Remote Monitoring",
    highlight: "Unattended Intelligent Control",
    description:
      "Integrated intelligent monitoring and automation systems enabling efficient operation and remote management of water facilities.",
  },
  {
    image: "/projects/wuli-town-treatment.jpg",
    title: "Wuli Town Wastewater Treatment Project",
    category: "Wastewater Treatment",
    highlight: "Environmental Infrastructure",
    description:
      "Integrated wastewater treatment facilities supporting environmental protection and sustainable community development.",
  },
];

const stats = [
  { value: "50,000", unit: "m³/day", label: "Treatment Capacity" },
  { value: "20+", label: "Years Experience" },
  { value: "100+", label: "Projects Delivered" },
  { value: "10+", label: "Patents & Certifications" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#f5f8fa] to-transparent" />
      <div className="pointer-events-none absolute -left-64 top-1/3 size-[34rem] rounded-full border border-cyan-500/10" />

      <div className="relative mx-auto max-w-[1440px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.12 }}
          className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16"
        >
          <div>
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mb-5 flex items-center gap-3 text-[11px] font-bold tracking-[0.25em] text-cyan-600"
            >
              <span className="h-px w-10 bg-cyan-500" />
              PROVEN INFRASTRUCTURE PROJECTS
            </motion.div>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-[#082d49] sm:text-5xl lg:text-[3.5rem]"
            >
              Delivering Water Infrastructure
              <span className="block text-cyan-500">at Scale</span>
            </motion.h2>
          </div>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.65 }}
            className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
          >
            From municipal waterworks and integrated treatment systems to smart
            water operations and wastewater treatment, ACTION Water Solutions
            delivers reliable water infrastructure across communities and
            industries.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          transition={{ staggerChildren: 0.12, delayChildren: 0.12 }}
          className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              whileHover={{ y: -8 }}
              className={`group flex h-full flex-col overflow-hidden rounded-[1.75rem] border bg-white transition-shadow duration-300 ${
                project.flagship
                  ? "border-cyan-200 shadow-[0_22px_65px_rgba(8,45,73,0.14)] ring-1 ring-cyan-100"
                  : "border-slate-200/80 shadow-[0_14px_45px_rgba(8,45,73,0.07)] hover:shadow-[0_24px_60px_rgba(8,45,73,0.13)]"
              }`}
            >
              <div
                className={`relative overflow-hidden bg-[#eaf1f4] ${
                  project.flagship ? "h-72 sm:h-80" : "h-72"
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062b47]/55 via-transparent to-transparent" />
                <div className="absolute left-5 top-5 rounded-full border border-white/25 bg-[#082d49]/80 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                  {project.category}
                </div>
                {project.flagship && (
                  <div className="absolute bottom-5 left-5 rounded-full bg-cyan-400 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#062b47]">
                    Flagship Project
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-cyan-600">
                  <CheckCircle2 size={15} strokeWidth={2} />
                  {project.highlight}
                </div>
                <h3 className="mt-5 text-2xl font-semibold leading-tight tracking-[-0.035em] text-[#082d49]">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {project.description}
                </p>
                <button
                  type="button"
                  className="mt-auto flex items-center gap-2 pt-7 text-xs font-bold uppercase tracking-[0.14em] text-[#082d49] transition-colors hover:text-cyan-600"
                >
                  View Project
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-12 grid overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-[#f5f8fa] shadow-[0_12px_40px_rgba(8,45,73,0.05)] sm:grid-cols-2 xl:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-7 py-7 ${
                index > 0 ? "border-t border-slate-200 sm:border-l" : ""
              } ${index === 2 ? "sm:border-l-0 xl:border-l" : ""} ${
                index > 1 ? "sm:border-t xl:border-t-0" : ""
              }`}
            >
              <div className="text-2xl font-semibold tracking-[-0.035em] text-[#082d49] sm:text-3xl">
                {stat.value}{" "}
                {stat.unit && (
                  <span className="text-sm font-bold text-cyan-600">
                    {stat.unit}
                  </span>
                )}
              </div>
              <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

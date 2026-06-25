"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  BrainCircuit,
  Check,
  Cloud,
  Database,
  Factory,
  MapPin,
  MonitorCog,
  Network,
  RadioTower,
  type LucideIcon,
} from "lucide-react";
import type { SmartWaterItem } from "@/data/smartWater";

type SmartWaterCapabilityPageProps = {
  item: SmartWaterItem;
};

const architectureIcons: LucideIcon[] = [
  Factory,
  RadioTower,
  Cloud,
  BrainCircuit,
  MonitorCog,
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export default function SmartWaterCapabilityPage({
  item,
}: SmartWaterCapabilityPageProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-[#061f34] px-5 pb-24 pt-40 text-white sm:px-8 lg:px-10 lg:pb-28 lg:pt-48">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_44%,rgba(34,211,238,0.16),transparent_34%),radial-gradient(circle_at_8%_100%,rgba(14,116,144,0.14),transparent_28%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:80px_80px]" />

        <div className="relative mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1fr_0.72fr] lg:items-center lg:gap-20">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
              <Link
                href="/#smart-water"
                className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-200 transition-colors hover:text-white"
              >
                <ArrowLeft size={14} />
                Smart Water
              </Link>
            </motion.div>
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.55 }}
              className="mt-10 text-[11px] font-bold uppercase tracking-[0.23em] text-cyan-300"
            >
              {item.eyebrow}
            </motion.div>
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              className="mt-5 text-4xl font-semibold leading-[1.04] tracking-[-0.05em] sm:text-6xl lg:text-7xl"
            >
              {item.title}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              className="mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg"
            >
              {item.shortDescription}
            </motion.p>
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/[0.08] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-cyan-200"
            >
              <span className="size-1.5 rounded-full bg-cyan-400" />
              {item.status}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-cyan-300/20 bg-[linear-gradient(135deg,#082d49_0%,#0a536f_58%,#087f98_100%)] shadow-[0_30px_80px_rgba(0,0,0,0.3)]"
          >
            <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:42px_42px]" />
            <div className="absolute -right-16 -top-16 size-72 rounded-full border border-cyan-200/20" />
            <div className="absolute -right-4 -top-4 size-48 rounded-full border border-cyan-200/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex size-28 items-center justify-center rounded-[2rem] border border-cyan-200/25 bg-white/10 text-cyan-100 backdrop-blur-md">
                <motion.span
                  animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.15, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 rounded-[2rem] bg-cyan-300/10"
                />
                <Network size={48} strokeWidth={1.2} className="relative" />
              </div>
            </div>
            <div className="absolute inset-x-6 bottom-6 border-t border-white/10 pt-4">
              <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-200">
                Smart Water Capability
              </div>
              <div className="mt-1 text-xs text-white/50">
                Conceptual architecture and future-ready integration
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f5f8fa] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-12 xl:grid-cols-[0.9fr_1.1fr] xl:items-start xl:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.55 }}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-600"
            >
              Capability Overview
            </motion.div>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#082d49] sm:text-4xl"
            >
              Connected intelligence for modern water operations
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mt-6 text-base leading-8 text-slate-600"
            >
              {item.overview}
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mt-9 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(8,45,73,0.06)] sm:p-7"
            >
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-600">
                Core Capabilities
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {item.capabilities.map((capability) => (
                  <div
                    key={capability}
                    className="flex items-start gap-3 text-sm leading-6 text-[#082d49]"
                  >
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-cyan-600">
                      <Check size={12} strokeWidth={2} />
                    </span>
                    {capability}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-[1.75rem] border border-cyan-300/20 bg-[#061f34] p-3 text-white shadow-[0_25px_70px_rgba(8,45,73,0.2)] sm:p-4"
          >
            <div className="rounded-[1.25rem] border border-white/10 bg-[#041a2c]">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-6">
                <div>
                  <div className="text-xs font-semibold">
                    Capability Architecture
                  </div>
                  <div className="mt-1 text-[8px] font-bold uppercase tracking-[0.16em] text-slate-500">
                    Conceptual system flow
                  </div>
                </div>
                <Database size={17} className="text-cyan-400" />
              </div>

              <div className="relative p-5 sm:p-7">
                <div className="pointer-events-none absolute bottom-12 left-1/2 top-12 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400/15 via-cyan-400/50 to-cyan-400/15" />
                <div className="relative mx-auto max-w-lg">
                  {item.architectureSteps.map((step, index) => {
                    const Icon =
                      architectureIcons[index % architectureIcons.length];

                    return (
                      <div key={step}>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.45, delay: index * 0.1 }}
                          className={`relative z-10 flex items-center gap-4 rounded-2xl border bg-[#082942]/95 p-4 ${
                            index === item.architectureSteps.length - 1
                              ? "border-cyan-300/35 shadow-[0_15px_45px_rgba(34,211,238,0.1)]"
                              : "border-white/10"
                          }`}
                        >
                          <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-300">
                            <Icon size={20} strokeWidth={1.6} />
                          </span>
                          <div>
                            <div className="text-[8px] font-bold uppercase tracking-[0.16em] text-cyan-400/65">
                              Stage 0{index + 1}
                            </div>
                            <div className="mt-1 text-sm font-semibold sm:text-base">
                              {step}
                            </div>
                          </div>
                        </motion.div>
                        {index < item.architectureSteps.length - 1 && (
                          <div className="relative z-10 flex h-9 items-center justify-center">
                            <span className="absolute h-full w-px bg-cyan-400/35" />
                            <span className="relative flex size-5 items-center justify-center rounded-full border border-cyan-300/20 bg-[#061f34] text-cyan-400">
                              <ArrowDown size={11} />
                            </span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {item.relatedProjects && item.relatedProjects.length > 0 && (
        <section className="relative overflow-hidden bg-[#061f34] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_30%,rgba(34,211,238,0.1),transparent_30%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.1] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:80px_80px]" />

          <div className="relative mx-auto max-w-[1440px]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.1 }}
            >
              <motion.div
                variants={fadeUp}
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300"
              >
                Applied Capability
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl"
              >
                Related Smart Water Applications
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base"
              >
                Practical examples connecting monitoring, automation, and
                operational support with water treatment infrastructure.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
              className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            >
              {item.relatedProjects.map((project) => (
                <motion.article
                  key={project.title}
                  variants={fadeUp}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -6 }}
                  className="group overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.05] shadow-[0_20px_55px_rgba(0,0,0,0.2)] backdrop-blur-sm"
                >
                  <div className="relative h-64 overflow-hidden bg-[linear-gradient(135deg,#082d49_0%,#0a536f_58%,#087f98_100%)]">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    ) : (
                      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:42px_42px]" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#041a2c]/80 via-transparent to-[#061f34]/15" />
                    <span className="absolute left-5 top-5 rounded-full border border-cyan-200/20 bg-[#061f34]/75 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-cyan-200 backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>

                  <div className="p-6 sm:p-7">
                    <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                      <MapPin size={13} className="text-cyan-400" />
                      {project.location}
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.03em]">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-400">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-cyan-300/15 bg-cyan-400/[0.07] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-cyan-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1440px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.08 }}
          >
            <motion.div
              variants={fadeUp}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-600"
            >
              Applications
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#082d49] sm:text-4xl"
            >
              Designed around real water infrastructure needs
            </motion.h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {item.applications.map((application, index) => (
                <motion.article
                  key={application}
                  variants={fadeUp}
                  transition={{ duration: 0.5 }}
                  className="rounded-[1.4rem] border border-slate-200 bg-[#f8fafb] p-6"
                >
                  <div className="text-[9px] font-bold tracking-[0.17em] text-cyan-600">
                    0{index + 1}
                  </div>
                  <h3 className="mt-5 text-base font-semibold leading-snug text-[#082d49]">
                    {application}
                  </h3>
                </motion.article>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65 }}
            className="mt-14 flex flex-col gap-6 rounded-[1.75rem] bg-[#082d49] p-7 text-white shadow-[0_20px_60px_rgba(8,45,73,0.15)] sm:flex-row sm:items-center sm:justify-between sm:p-9"
          >
            <div>
              <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-300">
                Smart Water Consultation
              </div>
              <div className="mt-2 text-xl font-semibold">
                Plan the right digital capability for your infrastructure.
              </div>
            </div>
            <Link
              href="/#contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 py-3.5 text-xs font-bold text-white transition-colors hover:bg-cyan-400"
            >
              Discuss Smart Water Solutions
              <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

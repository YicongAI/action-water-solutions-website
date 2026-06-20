"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  BrainCircuit,
  Cloud,
  Factory,
  MonitorCog,
  Network,
  RadioTower,
  Wrench,
  type LucideIcon,
} from "lucide-react";

type Capability = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const capabilities: Capability[] = [
  {
    title: "AI Prediction",
    description:
      "Machine learning models for water demand forecasting, equipment status prediction, and operational optimization.",
    icon: BrainCircuit,
  },
  {
    title: "Remote Monitoring",
    description:
      "Real-time visibility into water plant operation, system performance, alarms, and water quality indicators.",
    icon: MonitorCog,
  },
  {
    title: "Predictive Maintenance",
    description:
      "Early warning for pumps, membranes, dosing systems, and key equipment to reduce downtime and maintenance cost.",
    icon: Wrench,
  },
  {
    title: "Digital Twin Water Plant",
    description:
      "A digital representation of water facilities for monitoring, simulation, planning, and intelligent decision support.",
    icon: Network,
  },
];

const architectureNodes = [
  {
    title: "Water Plant",
    description: "On-site treatment infrastructure",
    icon: Factory,
  },
  {
    title: "Sensors",
    description: "Equipment and water quality signals",
    icon: RadioTower,
  },
  {
    title: "Cloud Platform",
    description: "Secure data collection and integration",
    icon: Cloud,
  },
  {
    title: "AI Analysis",
    description: "Prediction and decision support models",
    icon: BrainCircuit,
  },
  {
    title: "Operation Center",
    description: "Monitoring and intelligent operations",
    icon: MonitorCog,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export default function SmartWaterSection() {
  return (
    <section
      id="smart-water"
      className="relative overflow-hidden bg-[#061f34] px-5 py-24 text-white sm:px-8 sm:py-28 lg:px-10 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_44%,rgba(34,211,238,0.13),transparent_34%),radial-gradient(circle_at_8%_100%,rgba(14,116,144,0.14),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="relative mx-auto max-w-[1440px]">
        <div className="grid gap-16 xl:grid-cols-[0.92fr_1.08fr] xl:items-center xl:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.55 }}
              className="mb-5 flex items-center gap-3 text-[11px] font-bold tracking-[0.25em] text-cyan-300"
            >
              <span className="h-px w-10 bg-cyan-400" />
              SMART WATER
            </motion.div>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-[3.5rem]"
            >
              Digital Intelligence for
              <span className="block text-cyan-400">
                Water Infrastructure
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
            >
              ACTION is developing smart water capabilities that combine
              remote monitoring, AI prediction, predictive maintenance, and
              digital operations for modern water facilities.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2"
            >
              {capabilities.map((capability) => {
                const Icon = capability.icon;

                return (
                  <article
                    key={capability.title}
                    className="border-t border-white/10 pt-5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex size-9 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-400/10 text-cyan-300">
                        <Icon size={17} strokeWidth={1.7} />
                      </span>
                      <h3 className="text-sm font-semibold tracking-[-0.01em]">
                        {capability.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-xs leading-6 text-slate-400">
                      {capability.description}
                    </p>
                  </article>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-8 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-cyan-300/20 bg-[#082942]/90 p-3 shadow-[0_35px_90px_rgba(0,0,0,0.35),0_0_50px_rgba(34,211,238,0.08)] backdrop-blur-md sm:p-4">
              <div className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#041a2c]">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-6">
                  <div>
                    <div className="text-xs font-semibold">
                      Smart Water Capability Framework
                    </div>
                    <div className="mt-1 text-[8px] font-bold uppercase tracking-[0.16em] text-slate-500">
                      Infrastructure to intelligent operations
                    </div>
                  </div>
                  <div className="rounded-full border border-cyan-300/15 bg-cyan-400/[0.07] px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.14em] text-cyan-300">
                    Architecture Model
                  </div>
                </div>

                <div className="relative px-4 py-7 sm:px-8 sm:py-8">
                  <div className="pointer-events-none absolute bottom-12 left-1/2 top-12 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400/15 via-cyan-400/50 to-cyan-400/15" />

                  <div className="relative mx-auto max-w-lg">
                    {architectureNodes.map((node, index) => {
                      const Icon = node.icon;

                      return (
                        <div key={node.title}>
                          <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.5,
                              delay: 0.18 + index * 0.1,
                            }}
                            className={`relative z-10 flex items-center gap-4 rounded-2xl border bg-[#082942]/95 p-4 shadow-[0_15px_40px_rgba(0,0,0,0.22)] backdrop-blur-md sm:p-5 ${
                              index === architectureNodes.length - 1
                                ? "border-cyan-300/35 shadow-[0_18px_50px_rgba(34,211,238,0.1)]"
                                : "border-white/10"
                            }`}
                          >
                            <span className="relative flex size-11 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-300">
                              <motion.span
                                animate={{ opacity: [0.25, 0.6, 0.25], scale: [1, 1.18, 1] }}
                                transition={{
                                  duration: 2.8,
                                  repeat: Infinity,
                                  delay: index * 0.25,
                                }}
                                className="absolute inset-0 rounded-xl bg-cyan-400/10"
                              />
                              <Icon
                                size={20}
                                strokeWidth={1.6}
                                className="relative"
                              />
                            </span>
                            <div className="min-w-0">
                              <div className="text-[9px] font-bold uppercase tracking-[0.17em] text-cyan-400/70">
                                Stage 0{index + 1}
                              </div>
                              <h3 className="mt-1 text-sm font-semibold tracking-[-0.01em] text-white sm:text-base">
                                {node.title}
                              </h3>
                              <p className="mt-1 text-[10px] leading-5 text-slate-400 sm:text-xs">
                                {node.description}
                              </p>
                            </div>
                          </motion.div>

                          {index < architectureNodes.length - 1 && (
                            <div className="relative z-10 flex h-9 items-center justify-center">
                              <span className="absolute h-full w-px bg-cyan-400/35" />
                              <span className="relative flex size-5 items-center justify-center rounded-full border border-cyan-300/20 bg-[#061f34] text-cyan-400">
                                <ArrowDown size={11} strokeWidth={1.8} />
                              </span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="border-t border-white/10 px-5 py-4 text-center text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-400 sm:px-6">
                  From on-site infrastructure to intelligent operations.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BellRing,
  BrainCircuit,
  Droplets,
  Gauge,
  MonitorCog,
  Network,
  ShieldCheck,
  Wrench,
  Zap,
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

const metrics = [
  {
    label: "Flow Rate",
    value: "2,480",
    unit: "m³/h",
    status: "Stable",
    icon: Droplets,
  },
  {
    label: "Water Quality",
    value: "Within",
    unit: "target",
    status: "Normal",
    icon: ShieldCheck,
  },
  {
    label: "Equipment Health",
    value: "96",
    unit: "%",
    status: "Optimal",
    icon: Activity,
  },
  {
    label: "Energy Efficiency",
    value: "+12",
    unit: "%",
    status: "Illustrative",
    icon: Zap,
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
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300">
                      <Gauge size={18} strokeWidth={1.7} />
                    </span>
                    <div>
                      <div className="text-xs font-semibold">
                        Water Operations Center
                      </div>
                      <div className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.16em] text-slate-500">
                        Next-generation platform concept
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-400/[0.07] px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.14em] text-emerald-300">
                    <span className="size-1.5 rounded-full bg-emerald-400" />
                    Interface Preview
                  </div>
                </div>

                <div className="grid gap-3 p-4 sm:grid-cols-2 sm:p-5">
                  {metrics.map((metric) => {
                    const Icon = metric.icon;

                    return (
                      <div
                        key={metric.label}
                        className="rounded-xl border border-white/[0.08] bg-white/[0.035] p-4"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
                            {metric.label}
                          </span>
                          <Icon size={15} className="text-cyan-400" strokeWidth={1.7} />
                        </div>
                        <div className="mt-4 flex items-end gap-1.5">
                          <span className="text-2xl font-semibold tracking-[-0.04em] text-white">
                            {metric.value}
                          </span>
                          <span className="pb-1 text-[9px] font-bold uppercase tracking-[0.1em] text-cyan-300">
                            {metric.unit}
                          </span>
                        </div>
                        <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/[0.07]">
                          <div className="h-full w-[76%] rounded-full bg-gradient-to-r from-cyan-500 to-cyan-300" />
                        </div>
                        <div className="mt-2 text-[8px] uppercase tracking-[0.12em] text-slate-500">
                          {metric.status}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="grid gap-3 border-t border-white/10 p-4 sm:grid-cols-[1.45fr_0.55fr] sm:p-5">
                  <div className="rounded-xl border border-white/[0.08] bg-white/[0.035] p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
                          Operational Trend
                        </div>
                        <div className="mt-1 text-[8px] text-slate-600">
                          Illustrative 24-hour system profile
                        </div>
                      </div>
                      <Activity size={15} className="text-cyan-400" />
                    </div>
                    <div className="mt-5 flex h-24 items-end gap-2">
                      {[42, 54, 49, 66, 61, 75, 69, 84, 72, 88, 79, 91].map(
                        (height, index) => (
                          <div
                            key={`${height}-${index}`}
                            className="flex-1 rounded-t-sm bg-gradient-to-t from-cyan-700/30 to-cyan-400/80"
                            style={{ height: `${height}%` }}
                          />
                        ),
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-white/[0.035] p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
                        Alert Status
                      </span>
                      <BellRing size={15} className="text-cyan-400" />
                    </div>
                    <div className="py-5">
                      <div className="text-3xl font-semibold tracking-[-0.04em]">
                        0
                      </div>
                      <div className="mt-1 text-[8px] uppercase tracking-[0.13em] text-slate-500">
                        Critical alerts
                      </div>
                    </div>
                    <div className="rounded-lg bg-emerald-400/[0.08] px-3 py-2 text-[8px] font-bold uppercase tracking-[0.12em] text-emerald-300">
                      Normal Status
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 px-5 py-3 text-[8px] leading-4 text-slate-600 sm:px-6">
                  Illustrative interface for developing smart water capabilities.
                  Metrics shown are placeholders and do not represent live operations.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

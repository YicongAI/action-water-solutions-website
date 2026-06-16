"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, MapPin } from "lucide-react";

const markets = [
  {
    name: "China",
    position: "Headquarters & Manufacturing Base",
    items: [
      "Water treatment engineering",
      "Equipment manufacturing",
      "Project delivery",
    ],
  },
  {
    name: "Vietnam",
    position: "Strategic Expansion Market",
    items: [
      "Municipal water supply",
      "Local partnerships",
      "Infrastructure development",
    ],
  },
  {
    name: "Kazakhstan",
    position: "Emerging Infrastructure Market",
    items: [
      "Water treatment opportunities",
      "Industrial water systems",
      "Long-term regional growth",
    ],
  },
  {
    name: "Southeast Asia",
    position: "Regional Growth Strategy",
    items: [
      "Rural water supply",
      "Smart water solutions",
      "Future market expansion",
    ],
  },
];

const timeline = [
  { year: "2002", label: "Company Founded" },
  { year: "2026", label: "International Expansion" },
  { year: "2027+", label: "Smart Water Platform" },
];

const mapMarkers = [
  { name: "China", left: "79.2%", top: "50%" },
  { name: "Vietnam", left: "79.8%", top: "62%" },
  { name: "Kazakhstan", left: "68%", top: "44%" },
  { name: "Southeast Asia", left: "80%", top: "69%" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export default function GlobalPresenceSection() {
  return (
    <section
      id="global-presence"
      className="relative overflow-hidden bg-[#061f34] px-5 py-24 text-white sm:px-8 sm:py-28 lg:px-10 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_48%,rgba(34,211,238,0.09),transparent_34%),radial-gradient(circle_at_88%_18%,rgba(14,116,144,0.13),transparent_25%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:88px_88px]" />

      <div className="relative mx-auto max-w-[1440px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16"
        >
          <div>
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.55 }}
              className="mb-5 flex items-center gap-3 text-[11px] font-bold tracking-[0.25em] text-cyan-300"
            >
              <span className="h-px w-10 bg-cyan-400" />
              REGIONAL PRESENCE
            </motion.div>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.65 }}
              className="text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-[3.5rem]"
            >
              Expanding Across Asia&apos;s
              <span className="block text-cyan-400">
                Emerging Water Markets
              </span>
            </motion.h2>
          </div>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.65 }}
            className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
          >
            Leveraging over 20 years of engineering experience to support
            municipal water infrastructure, treatment systems, and smart water
            operations across Asia.
          </motion.p>
        </motion.div>

        <div className="mt-14 grid gap-7 xl:grid-cols-[1.1fr_0.9fr] xl:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75 }}
            className="relative min-h-[27rem] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#082942]/80 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.2)] sm:p-8"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                  Asia Market Network
                </div>
                <div className="mt-1 text-xs text-slate-400">
                  Current presence and strategic growth markets
                </div>
              </div>
              <MapPin size={18} className="text-cyan-400" strokeWidth={1.6} />
            </div>

            <div className="relative mt-5 aspect-[1326/860] w-full overflow-hidden rounded-xl">
              <Image
                src="/logo/world-map.png"
                alt="World map highlighting ACTION Water Solutions markets across Asia"
                fill
                sizes="(min-width: 1280px) 55vw, 100vw"
                className="object-contain opacity-90"
              />

              <svg
                viewBox="0 0 1326 860"
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full"
              >
                <g
                  fill="none"
                  stroke="#22d3ee"
                  strokeDasharray="7 11"
                  strokeLinecap="round"
                  strokeOpacity="0.6"
                  strokeWidth="2"
                >
                  <motion.path
                    d="M1050 430 Q1090 470 1058 533"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.6 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.35 }}
                  />
                  <motion.path
                    d="M1050 430 Q980 350 902 378"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.6 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.45 }}
                  />
                  <motion.path
                    d="M1050 430 Q1015 520 1060 592"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.6 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.55 }}
                  />
                </g>
              </svg>

              {mapMarkers.map((marker, index) => (
                <motion.div
                  key={marker.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.25 + index * 0.1 }}
                  className="absolute"
                  style={{ left: marker.left, top: marker.top }}
                >
                  <span className="absolute -inset-2 rounded-full bg-cyan-400/20 blur-sm" />
                  <span className="relative block size-2.5 rounded-full border border-cyan-100 bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.85)]" />
                  <span className="absolute left-4 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-white/10 bg-[#061f34]/85 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.14em] text-cyan-100 backdrop-blur-sm sm:block">
                    {marker.name}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-4 text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-400 sm:bottom-8 sm:left-8 sm:right-8">
              <span className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-cyan-400" />
                Active Market
              </span>
              <span className="flex items-center gap-2">
                <span className="size-1.5 rounded-full border border-cyan-400" />
                Strategic Expansion
              </span>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ staggerChildren: 0.1 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {markets.map((market, index) => (
              <motion.article
                key={market.name}
                variants={fadeUp}
                transition={{ duration: 0.55 }}
                className={`group rounded-[1.5rem] border p-5 transition-colors duration-300 sm:p-6 ${
                  index === 0
                    ? "border-cyan-400/35 bg-cyan-400/[0.09]"
                    : "border-white/10 bg-white/[0.05] hover:border-cyan-400/25 hover:bg-white/[0.07]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                    {market.name}
                  </div>
                  <span className="text-[9px] font-bold tracking-[0.15em] text-white/20">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-4 min-h-12 text-base font-semibold leading-snug tracking-[-0.02em] text-white">
                  {market.position}
                </h3>
                <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-4">
                  {market.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-xs leading-5 text-slate-300"
                    >
                      <Check
                        size={13}
                        className="mt-0.5 shrink-0 text-cyan-400"
                        strokeWidth={2}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mt-14 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04]"
        >
          <div className="grid sm:grid-cols-3">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative px-6 py-7 sm:px-8 ${
                  index > 0 ? "border-t border-white/10 sm:border-l sm:border-t-0" : ""
                }`}
              >
                <div className="absolute left-0 top-0 h-0.5 w-16 bg-cyan-400/80" />
                <div className="text-3xl font-semibold tracking-[-0.04em] text-cyan-400">
                  {item.year}
                </div>
                <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-300">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

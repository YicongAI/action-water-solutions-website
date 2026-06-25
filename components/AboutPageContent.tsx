"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Factory,
  FlaskConical,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import {
  capabilities,
  companyProfile,
  companyStats,
  manufacturingCapabilities,
  missionValues,
  rndImages,
  rndParagraphs,
} from "@/data/about";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPageContent() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f4f8fa] to-white px-5 pb-20 pt-36 sm:px-8 lg:px-10 lg:pb-24 lg:pt-44">
        <div className="pointer-events-none absolute -right-48 -top-48 size-[38rem] rounded-full border border-cyan-500/10" />
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3 text-[11px] font-bold tracking-[0.25em] text-cyan-600"
            >
              <span className="h-px w-10 bg-cyan-500" />
              ABOUT ACTION
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="mt-6 text-4xl font-semibold leading-[1.04] tracking-[-0.05em] text-[#082d49] sm:text-6xl lg:text-7xl"
            >
              Engineering Water Infrastructure
              <span className="block text-cyan-500">Since 2002</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
            >
              A professional water treatment equipment and engineering company
              delivering municipal water supply, wastewater treatment,
              disinfection systems, and smart water solutions.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative min-h-[24rem] overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-[0_30px_80px_rgba(8,45,73,0.14)] sm:min-h-[32rem]"
          >
            <Image
              src="/about/factory.jpg"
              alt="ACTION Water Solutions manufacturing base"
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#062b47]/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 rounded-full border border-white/20 bg-[#062b47]/70 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.17em] text-cyan-100 backdrop-blur-md">
              China–ASEAN Youth Industrial Park
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mx-auto mt-14 grid max-w-[1440px] overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_15px_50px_rgba(8,45,73,0.07)] sm:grid-cols-2 xl:grid-cols-4"
        >
          {companyStats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-6 py-7 ${
                index > 0 ? "border-t border-slate-200 sm:border-l" : ""
              } ${index === 2 ? "sm:border-l-0 xl:border-l" : ""} ${
                index > 1 ? "sm:border-t xl:border-t-0" : ""
              }`}
            >
              <div className="text-2xl font-semibold tracking-[-0.04em] text-[#082d49] sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-2 text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-600">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.div
              variants={fadeUp}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-600"
            >
              Who We Are
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#082d49] sm:text-5xl"
            >
              Company Profile
            </motion.h2>
            <div className="mt-7 space-y-5">
              {companyProfile.map((paragraph) => (
                <motion.p
                  key={paragraph}
                  variants={fadeUp}
                  className="text-base leading-8 text-slate-600"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75 }}
            className="relative min-h-[25rem] overflow-hidden rounded-[1.75rem] border border-slate-200 shadow-[0_24px_65px_rgba(8,45,73,0.12)]"
          >
            <Image
              src="/about/factory1.jpg"
              alt="ACTION manufacturing and engineering base"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#062b47]/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-100">
              Manufacturing &amp; Engineering Base
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#061f34] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:80px_80px]" />
        <div className="relative mx-auto grid max-w-[1440px] gap-12 xl:grid-cols-[0.78fr_1.22fr] xl:items-center xl:gap-20">
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
              Production Capability
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl"
            >
              Manufacturing Base
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 text-base leading-8 text-slate-300"
            >
              Modern production facilities supporting equipment manufacturing,
              system assembly, quality inspection, and project delivery.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 grid gap-3 sm:grid-cols-2">
              {manufacturingCapabilities.map((capability) => (
                <div
                  key={capability}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200"
                >
                  <Check size={15} className="text-cyan-400" />
                  {capability}
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75 }}
          >
            <div className="overflow-hidden rounded-[1.75rem] border border-cyan-300/25 bg-[#082942] p-2 shadow-[0_28px_80px_rgba(0,0,0,0.35),0_0_40px_rgba(34,211,238,0.08)]">
              <video
                controls
                preload="metadata"
                poster="/about/factory.jpg"
                className="aspect-video w-full rounded-[1.35rem] bg-[#041a2c] object-cover"
              >
                <source src="/about/factory-intro.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="mt-4 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.17em] text-slate-400">
              <span className="h-px w-8 bg-cyan-400/50" />
              Production Base · China–ASEAN Youth Industrial Park
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f5f8fa] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:gap-16"
          >
            <div>
              <motion.div
                variants={fadeUp}
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-600"
              >
                Technical Development
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#082d49] sm:text-5xl"
              >
                Research &amp; Development
              </motion.h2>
            </div>
            <motion.div variants={fadeUp} className="space-y-3">
              {rndParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-slate-600">
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ staggerChildren: 0.1 }}
            className="mt-12 grid gap-6 md:grid-cols-3"
          >
            {rndImages.map((image) => (
              <motion.article
                key={image.label}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_14px_45px_rgba(8,45,73,0.07)]"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.label}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#062b47]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 text-[10px] font-bold uppercase tracking-[0.17em] text-cyan-100">
                    {image.label}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative overflow-hidden rounded-[1.75rem] bg-[#082d49] p-7 text-white shadow-[0_25px_70px_rgba(8,45,73,0.18)] sm:p-9"
          >
            <Image
              src="/about/26Asset 14@3x.png"
              alt=""
              fill
              sizes="50vw"
              className="pointer-events-none object-contain opacity-[0.035]"
            />
            <div className="relative">
              <FlaskConical size={24} className="text-cyan-300" />
              <h2 className="mt-6 text-3xl font-semibold tracking-[-0.035em]">
                Corporate Mission
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                We are committed to delivering reliable water treatment
                solutions through engineering excellence, continuous
                innovation, strict quality management, and responsive customer
                service.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {missionValues.map((value) => (
                  <span
                    key={value}
                    className="rounded-full border border-cyan-300/15 bg-cyan-400/[0.07] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-cyan-100"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.08 }}
            className="rounded-[1.75rem] border border-slate-200 bg-[#f8fafb] p-7 sm:p-9"
          >
            <Wrench size={24} className="text-cyan-600" />
            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.035em] text-[#082d49]">
              Scope of Business
            </h2>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {capabilities.map((capability) => (
                <div
                  key={capability}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#082d49]"
                >
                  <ShieldCheck size={15} className="shrink-0 text-cyan-500" />
                  {capability}
                </div>
              ))}
            </div>
          </motion.article>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:px-10 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative mx-auto flex max-w-[1440px] flex-col gap-8 overflow-hidden rounded-[2rem] bg-[#062b47] p-8 text-white shadow-[0_30px_80px_rgba(8,45,73,0.2)] sm:p-12 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_20%,rgba(34,211,238,0.18),transparent_28%)]" />
          <div className="relative max-w-3xl">
            <Factory size={25} className="text-cyan-300" />
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Let&apos;s Build Better Water Infrastructure Together
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              From water treatment equipment to complete infrastructure
              projects and smart operations, ACTION is ready to support your
              next project.
            </p>
          </div>
          <div className="relative flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 py-3.5 text-xs font-bold text-white transition-colors hover:bg-cyan-400"
            >
              Request Consultation
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/projects/water-treatment"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-xs font-bold text-white transition-colors hover:border-cyan-300 hover:text-cyan-200"
            >
              Explore Projects
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}

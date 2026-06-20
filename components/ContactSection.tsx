"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Clock3,
  Globe2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const serviceAreas = ["China", "Vietnam", "Kazakhstan", "Southeast Asia"];

const projectTypes = [
  "Municipal Water Supply",
  "Wastewater Treatment",
  "Equipment Procurement",
  "Industrial Water Treatment",
  "Smart Water Initiative",
  "Other",
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

const fieldClassName =
  "mt-2 w-full rounded-xl border border-slate-200 bg-[#f8fafb] px-4 py-3.5 text-sm text-[#082d49] outline-none transition-all placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-400/10";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-white to-[#f2f7f9] px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32"
    >
      <div className="pointer-events-none absolute -right-48 -top-48 size-[34rem] rounded-full border border-cyan-500/10" />
      <div className="pointer-events-none absolute -left-40 bottom-0 size-96 rounded-full bg-cyan-100/30 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.1 }}
          className="max-w-4xl"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="mb-5 flex items-center gap-3 text-[11px] font-bold tracking-[0.25em] text-cyan-600"
          >
            <span className="h-px w-10 bg-cyan-500" />
            CONTACT
          </motion.div>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.65 }}
            className="text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-[#082d49] sm:text-5xl lg:text-[3.5rem]"
          >
            Let&apos;s Build Sustainable
            <span className="block text-cyan-500">
              Water Infrastructure Together
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.65 }}
            className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg"
          >
            Whether you are planning a municipal water project, wastewater
            treatment system, equipment procurement, or smart water initiative,
            our team is ready to support your project.
          </motion.p>
        </motion.div>

        <div className="mt-14 grid gap-8 xl:grid-cols-[0.82fr_1.18fr] xl:items-start xl:gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ staggerChildren: 0.1 }}
            className="grid gap-5 sm:grid-cols-2 xl:grid-cols-1"
          >
            <motion.article
              variants={fadeUp}
              transition={{ duration: 0.55 }}
              className="rounded-[1.5rem] border border-slate-200/90 bg-white p-6 shadow-[0_12px_40px_rgba(8,45,73,0.06)] sm:p-7"
            >
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                  <Building2 size={20} strokeWidth={1.7} />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-[#082d49]">
                    Headquarters
                  </h3>
                  <address className="mt-3 text-sm not-italic leading-7 text-slate-600">
                    Room 1018, Yongkai Building
                    <br />
                    No.137 Minzu Avenue
                    <br />
                    Nanning, Guangxi, China
                  </address>
                </div>
              </div>
            </motion.article>

            <motion.article
              variants={fadeUp}
              transition={{ duration: 0.55 }}
              className="rounded-[1.5rem] border border-slate-200/90 bg-white p-6 shadow-[0_12px_40px_rgba(8,45,73,0.06)] sm:p-7"
            >
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                  <MapPin size={20} strokeWidth={1.7} />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-[#082d49]">
                    Manufacturing Base
                  </h3>
                  <address className="mt-3 text-sm not-italic leading-7 text-slate-600">
                    China–ASEAN Youth Industrial Park
                    <br />
                    Fusui County
                    <br />
                    Chongzuo, Guangxi, China
                  </address>
                </div>
              </div>
            </motion.article>

            <motion.article
              variants={fadeUp}
              transition={{ duration: 0.55 }}
              className="rounded-[1.5rem] border border-slate-200/90 bg-white p-6 shadow-[0_12px_40px_rgba(8,45,73,0.06)] sm:p-7"
            >
              <h3 className="text-base font-semibold text-[#082d49]">Contact</h3>
              <div className="mt-5 space-y-4">
                <a
                  href="mailto:leiaction@163.com"
                  className="group flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-cyan-600"
                >
                  <Mail size={16} className="text-cyan-500" />
                  <span className="w-12 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    Email
                  </span>
                  <span>leiaction@163.com</span>
                </a>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <Phone size={16} className="text-cyan-500" />
                  <span className="w-12 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    Phone
                  </span>
                  <span>+86 771 263 5813</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <Phone size={16} className="text-cyan-500" />
                  <span className="w-12 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    Mobile
                  </span>
                  <span>+86 133 0771 3738</span>
                </div>
              </div>
            </motion.article>

            <motion.article
              variants={fadeUp}
              transition={{ duration: 0.55 }}
              className="rounded-[1.5rem] border border-slate-200/90 bg-[#082d49] p-6 text-white shadow-[0_18px_50px_rgba(8,45,73,0.15)] sm:p-7"
            >
              <div className="flex items-center gap-3">
                <Globe2 size={19} className="text-cyan-300" strokeWidth={1.7} />
                <h3 className="text-base font-semibold">Service Areas</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-300"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </motion.article>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] border border-slate-200/90 bg-white p-6 shadow-[0_24px_70px_rgba(8,45,73,0.1)] sm:p-8 lg:p-10"
          >
            <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-6">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-600">
                  Project Inquiry
                </div>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[#082d49]">
                  Tell us about your project
                </h3>
              </div>
              <span className="hidden size-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 sm:flex">
                <Mail size={21} strokeWidth={1.7} />
              </span>
            </div>

            <form className="mt-7 grid gap-x-5 gap-y-5 sm:grid-cols-2">
              <label className="text-xs font-semibold text-[#082d49]">
                Full Name
                <input
                  type="text"
                  name="fullName"
                  autoComplete="name"
                  placeholder="Your name"
                  className={fieldClassName}
                />
              </label>
              <label className="text-xs font-semibold text-[#082d49]">
                Company
                <input
                  type="text"
                  name="company"
                  autoComplete="organization"
                  placeholder="Company name"
                  className={fieldClassName}
                />
              </label>
              <label className="text-xs font-semibold text-[#082d49]">
                Country
                <input
                  type="text"
                  name="country"
                  autoComplete="country-name"
                  placeholder="Country or region"
                  className={fieldClassName}
                />
              </label>
              <label className="text-xs font-semibold text-[#082d49]">
                Email
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  className={fieldClassName}
                />
              </label>
              <label className="text-xs font-semibold text-[#082d49]">
                Phone
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  placeholder="Country code and number"
                  className={fieldClassName}
                />
              </label>
              <label className="text-xs font-semibold text-[#082d49]">
                Project Type
                <select
                  name="projectType"
                  defaultValue=""
                  className={fieldClassName}
                >
                  <option value="" disabled>
                    Select project type
                  </option>
                  {projectTypes.map((projectType) => (
                    <option key={projectType} value={projectType}>
                      {projectType}
                    </option>
                  ))}
                </select>
              </label>
              <label className="text-xs font-semibold text-[#082d49] sm:col-span-2">
                Message
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell us about your project requirements, location, capacity, or timeline."
                  className={`${fieldClassName} resize-none`}
                />
              </label>

              <div className="flex flex-col gap-4 pt-2 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#082d49] px-7 py-4 text-sm font-bold text-white shadow-[0_12px_30px_rgba(8,45,73,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b3b5e]"
                >
                  Request Consultation
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Clock3 size={15} className="text-cyan-500" />
                  We typically respond within 1–2 business days.
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

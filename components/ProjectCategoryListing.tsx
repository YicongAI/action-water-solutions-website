"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Gauge, MapPin } from "lucide-react";
import type { Project } from "@/data/projects";

type ProjectCategoryListingProps = {
  projects: Project[];
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectCategoryListing({
  projects,
}: ProjectCategoryListingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      transition={{ staggerChildren: 0.1 }}
      className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
    >
      {projects.map((project) => (
        <motion.article
          key={project.slug}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -7 }}
          className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-white shadow-[0_14px_45px_rgba(8,45,73,0.07)] transition-shadow duration-300 hover:shadow-[0_25px_65px_rgba(8,45,73,0.13)]"
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
              <>
                <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:42px_42px]" />
                <div className="absolute -right-12 -top-14 size-52 rounded-full border border-cyan-200/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex size-20 items-center justify-center rounded-[1.4rem] border border-cyan-200/25 bg-white/10 text-cyan-100 shadow-[0_18px_45px_rgba(0,20,35,0.2)] backdrop-blur-md">
                    <Droplets size={36} strokeWidth={1.35} />
                  </span>
                </div>
              </>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#062b47]/70 via-transparent to-transparent" />
            <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-[#082d49]/75 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-cyan-100 backdrop-blur-sm">
              {project.category}
            </div>
          </div>

          <div className="flex flex-1 flex-col p-7 sm:p-8">
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-500">
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="text-cyan-500" />
                {project.location}
              </span>
              <span className="flex items-center gap-1.5 text-cyan-600">
                <Gauge size={13} />
                {project.capacity}
              </span>
            </div>

            <h2 className="mt-5 text-2xl font-semibold leading-tight tracking-[-0.035em] text-[#082d49]">
              {project.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              {project.shortDescription}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-cyan-100 bg-cyan-50 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-cyan-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="#"
              className="mt-auto flex items-center gap-2 pt-7 text-xs font-bold uppercase tracking-[0.14em] text-[#082d49] transition-colors hover:text-cyan-600"
            >
              View Project
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}

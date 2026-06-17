"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

type NavItem = {
  label: string;
  children?: string[];
};

const navItems: NavItem[] = [
  {
    label: "Solutions",
    children: [
      "Municipal Water Supply",
      "Rural Water Supply",
      "Wastewater Treatment",
      "Industrial Water Treatment",
      "Smart Water Solutions",
    ],
  },
  {
    label: "Projects",
    children: [
      "Municipal Projects",
      "Industrial Projects",
      "Overseas Projects",
      "Case Studies",
    ],
  },
  {
    label: "Products",
    children: [
      "Containerized Water Plant",
      "Integrated Treatment Systems",
      "RO Systems",
      "Wastewater Treatment Systems",
      "Control Panels & Automation",
      "Household Water Purification",
    ],
  },
  {
    label: "Smart Water",
    children: [
      "Remote Monitoring",
      "AI Prediction",
      "Predictive Maintenance",
      "Digital Twin",
    ],
  },
  {
    label: "News & Insights",
    children: [
      "Company News",
      "Technology",
      "Patents & Innovation",
      "Leadership Activities",
      "Publications",
    ],
  },
  { label: "About" },
  { label: "Contact" },
];

const toHref = (label: string) =>
  `#${label.toLowerCase().replaceAll(" & ", "-").replaceAll(" ", "-")}`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isSolid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isSolid
          ? "bg-white/95 shadow-[0_8px_30px_rgba(8,42,69,0.09)] backdrop-blur-xl"
          : "bg-gradient-to-b from-[#041d31]/60 to-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-20 max-w-[1600px] items-center gap-4 px-5 sm:px-8 lg:h-24 lg:gap-5 lg:px-6 xl:gap-8 xl:px-10"
      >
        <a
          href="#top"
          aria-label="ACTION Water Solutions home"
          className="group flex shrink-0 items-center gap-2.5 text-[#092a45] xl:gap-3"
        >
          <Image
            src="/logo/aks-logo.png"
            alt="ACTION Water Solutions logo"
            width={48}
            height={48}
            priority
            className="h-10 w-10 shrink-0 object-contain transition-transform duration-300 group-hover:scale-105 lg:h-12 lg:w-12"
          />
          <span className="leading-none">
            <span className="block text-base font-bold tracking-[0.13em] sm:text-lg">
              ACTION
            </span>
            <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.24em] text-slate-500">
              Water Solutions
            </span>
          </span>
        </a>

        <div
          className={`ml-auto hidden min-h-16 items-center gap-1 rounded-full px-4 transition-all duration-300 lg:flex xl:gap-2 xl:px-6 ${
            isSolid
              ? "bg-white shadow-[0_8px_28px_rgba(8,42,69,0.08)] ring-1 ring-slate-100"
              : "bg-white/90 shadow-[0_8px_24px_rgba(8,42,69,0.08)] backdrop-blur-md"
          }`}
        >
          {navItems.map((item) => {
            const isOpen = activeDropdown === item.label;

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.children && setActiveDropdown(item.label)
                }
                onMouseLeave={() => setActiveDropdown(null)}
                onFocus={() => item.children && setActiveDropdown(item.label)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    setActiveDropdown(null);
                  }
                }}
              >
                <a
                  href={toHref(item.label)}
                  aria-haspopup={item.children ? "menu" : undefined}
                  aria-expanded={item.children ? isOpen : undefined}
                  className={`group flex items-center gap-1 px-2 py-5 text-[11px] font-semibold whitespace-nowrap text-[#092a45] transition-colors duration-200 hover:text-cyan-600 xl:px-2.5 xl:text-[13px] 2xl:px-3 2xl:text-sm ${
                    isOpen ? "text-cyan-600" : ""
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      size={13}
                      strokeWidth={2}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-cyan-500" : "text-slate-400"
                      }`}
                    />
                  )}
                  <span className="absolute inset-x-2 bottom-2 h-px origin-left scale-x-0 bg-cyan-400 transition-transform duration-300 group-hover:scale-x-100" />
                </a>

                <AnimatePresence>
                  {item.children && isOpen && (
                    <motion.div
                      role="menu"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className={`absolute top-full z-50 pt-2 ${
                        item.label === "News & Insights"
                          ? "right-0"
                          : "left-1/2 -translate-x-1/2"
                      }`}
                    >
                      <div className="w-72 overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-[0_22px_60px_rgba(8,42,69,0.18)]">
                        <div className="mb-1 px-3 pb-2 pt-2 text-[9px] font-bold uppercase tracking-[0.22em] text-slate-400">
                          {item.label}
                        </div>
                        {item.children.map((child) => (
                          <a
                            key={child}
                            role="menuitem"
                            href={toHref(child)}
                            className="group/item flex items-center justify-between rounded-xl px-3 py-2.5 text-[13px] font-medium text-[#092a45] transition-colors duration-200 hover:bg-cyan-50 hover:text-cyan-600 focus:bg-cyan-50 focus:text-cyan-600 focus:outline-none"
                          >
                            {child}
                            <span className="size-1.5 rounded-full bg-cyan-400 opacity-0 transition-opacity group-hover/item:opacity-100" />
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="hidden shrink-0 items-center lg:flex">
          <div
            className={`flex items-center gap-1.5 text-[10px] font-semibold xl:gap-2 xl:text-[11px] ${
              isSolid ? "text-slate-400" : "text-white/60"
            }`}
          >
            <button
              className={`transition-colors hover:text-cyan-400 ${
                isSolid ? "text-[#092a45]" : "text-white"
              }`}
            >
              EN
            </button>
            <span>/</span>
            <button className="transition-colors hover:text-cyan-400">中文</button>
            <span>/</span>
            <button className="transition-colors hover:text-cyan-400">VI</button>
          </div>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className={`ml-auto rounded-full border p-2.5 transition-colors lg:hidden ${
            isSolid
              ? "border-slate-200 text-[#092a45] hover:bg-slate-50"
              : "border-white/30 text-white hover:bg-white/10"
          }`}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      <div
        className={`overflow-hidden bg-white transition-all duration-500 lg:hidden ${
          menuOpen
            ? "max-h-[calc(100vh-5rem)] border-t border-slate-100"
            : "max-h-0"
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] flex-col px-5 py-5 sm:px-8">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={toHref(item.label)}
              onClick={() => setMenuOpen(false)}
              className="border-b border-slate-100 py-3.5 text-sm font-medium text-[#092a45] transition-colors hover:text-cyan-600"
              style={{ transitionDelay: `${index * 25}ms` }}
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-5 text-xs font-semibold text-slate-500">
            <span className="mr-1 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
              Language
            </span>
            <div className="flex gap-3 text-xs font-semibold text-slate-500">
              <button className="text-[#092a45]">EN</button>
              <button>中文</button>
              <button>VI</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { products } from "@/data/products";
import { smartWaterItems } from "@/data/smartWater";
import { newsCategories } from "@/data/news";

type NavChild = {
  label: string;
  href: string;
};

type NavItem = {
  label: string;
  href?: string;
  dropdownTitle?: string;
  children?: NavChild[];
};

const toHref = (label: string) =>
  `#${label.toLowerCase().replaceAll(" & ", "-").replaceAll(" ", "-")}`;

const navItems: NavItem[] = [
  {
    label: "Projects",
    dropdownTitle: "Projects",
    children: [
      {
        label: "Water Treatment Projects",
        href: "/projects/water-treatment",
      },
      {
        label: "Wastewater Treatment Projects",
        href: "/projects/wastewater-treatment",
      },
      {
        label: "Other Infrastructure Projects",
        href: "/projects/other-infrastructure",
      },
    ],
  },
  {
    label: "Products",
    dropdownTitle: "Product Systems",
    children: products.map((product) => ({
      label: product.name,
      href: `/products/${product.slug}`,
    })),
  },
  {
    label: "Smart Water",
    dropdownTitle: "Smart Water",
    children: smartWaterItems.map((item) => ({
      label: item.title,
      href: `/smart-water/${item.slug}`,
    })),
  },
  {
    label: "News & Insights",
    dropdownTitle: "News & Insights",
    children: newsCategories.map((category) => ({
      label: category.title,
      href: `/news/${category.slug}`,
    })),
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<
    string | null
  >(null);

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
        <Link
          href="/"
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
        </Link>

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
                  href={item.href ?? toHref(item.label)}
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
                          {item.dropdownTitle ?? item.label}
                        </div>
                        {item.children.map((child) => (
                          <a
                            key={child.href}
                            role="menuitem"
                            href={child.href}
                            className="group/item flex items-center justify-between rounded-xl px-3 py-2.5 text-[13px] font-medium text-[#092a45] transition-colors duration-200 hover:bg-cyan-50 hover:text-cyan-600 focus:bg-cyan-50 focus:text-cyan-600 focus:outline-none"
                          >
                            {child.label}
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
          onClick={() => {
            if (menuOpen) setActiveMobileDropdown(null);
            setMenuOpen((open) => !open);
          }}
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
        className={`bg-white transition-all duration-500 lg:hidden ${
          menuOpen
            ? "max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-slate-100"
            : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] flex-col px-5 py-5 sm:px-8">
          {navItems.map((item) => {
            const isOpen = activeMobileDropdown === item.label;

            if (!item.children) {
              return (
                <a
                  key={item.label}
                  href={item.href ?? toHref(item.label)}
                  onClick={() => {
                    setActiveMobileDropdown(null);
                    setMenuOpen(false);
                  }}
                  className="border-b border-slate-100 py-4 text-[15px] font-semibold text-[#092a45] transition-colors hover:text-cyan-600"
                >
                  {item.label}
                </a>
              );
            }

            return (
              <div key={item.label} className="border-b border-slate-100">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`mobile-${item.label
                    .toLowerCase()
                    .replaceAll(" & ", "-")
                    .replaceAll(" ", "-")}`}
                  onClick={() =>
                    setActiveMobileDropdown((current) =>
                      current === item.label ? null : item.label,
                    )
                  }
                  className={`flex w-full items-center justify-between py-4 text-left text-[15px] font-semibold transition-colors ${
                    isOpen ? "text-cyan-600" : "text-[#092a45]"
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    size={17}
                    strokeWidth={2}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-cyan-500" : "text-slate-400"
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`mobile-${item.label
                        .toLowerCase()
                        .replaceAll(" & ", "-")
                        .replaceAll(" ", "-")}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="mb-3 ml-3 border-l border-cyan-200 pl-4">
                        {item.children.map((child) => (
                          <a
                            key={child.href}
                            href={child.href}
                            onClick={() => {
                              setActiveMobileDropdown(null);
                              setMenuOpen(false);
                            }}
                            className="flex items-center gap-3 py-2.5 text-[13px] font-medium leading-5 text-slate-600 transition-colors hover:text-cyan-600"
                          >
                            <span className="size-1.5 shrink-0 rounded-full bg-cyan-400/70" />
                            {child.label}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
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

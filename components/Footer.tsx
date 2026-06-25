import { Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Projects", href: "#projects" },
  { label: "Products", href: "#products" },
  { label: "Smart Water", href: "#smart-water" },
  { label: "News & Insights", href: "#news-insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#041a2c] px-5 text-white sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(34,211,238,0.08),transparent_28%),radial-gradient(circle_at_90%_100%,rgba(14,116,144,0.1),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="relative mx-auto max-w-[1440px] py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-[1.35fr_0.65fr_0.9fr_1.1fr] xl:gap-12">
          <div>
            <a href="#top" className="inline-flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-400/10 text-sm font-bold tracking-[0.12em] text-cyan-300">
                A
              </span>
              <span>
                <span className="block text-lg font-bold tracking-[0.12em]">
                  ACTION
                </span>
                <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                  Water Solutions
                </span>
              </span>
            </a>
            <h2 className="mt-6 max-w-sm text-xl font-semibold leading-snug tracking-[-0.02em]">
              Engineering Sustainable Water Infrastructure
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
              Municipal water supply, integrated treatment systems, wastewater
              treatment, and smart water operations for emerging markets.
            </p>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation" className="mt-5 grid gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-fit text-sm text-slate-400 transition-colors hover:text-cyan-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
              Contact
            </h3>
            <div className="mt-5 space-y-4">
              <a
                href="mailto:leiaction@163.com"
                className="flex items-start gap-3 text-sm text-slate-400 transition-colors hover:text-cyan-300"
              >
                <Mail size={15} className="mt-0.5 shrink-0 text-cyan-500" />
                leiaction@163.com
              </a>
              <a
                href="tel:+867712635813"
                className="flex items-start gap-3 text-sm text-slate-400 transition-colors hover:text-cyan-300"
              >
                <Phone size={15} className="mt-0.5 shrink-0 text-cyan-500" />
                +86 771 263 5813
              </a>
              <a
                href="tel:+8613307713738"
                className="flex items-start gap-3 text-sm text-slate-400 transition-colors hover:text-cyan-300"
              >
                <Phone size={15} className="mt-0.5 shrink-0 text-cyan-500" />
                +86 133 0771 3738
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
              Addresses
            </h3>
            <div className="mt-5 space-y-5">
              <address className="flex gap-3 text-sm not-italic leading-6 text-slate-400">
                <MapPin size={15} className="mt-1 shrink-0 text-cyan-500" />
                <span>
                  <strong className="mb-1 block font-semibold text-slate-200">
                    Headquarters
                  </strong>
                  Room 1018, Yongkai Building, No.137 Minzu Avenue, Nanning,
                  Guangxi, China
                </span>
              </address>
              <address className="flex gap-3 border-t border-white/[0.07] pt-5 text-sm not-italic leading-6 text-slate-400">
                <MapPin size={15} className="mt-1 shrink-0 text-cyan-500" />
                <span>
                  <strong className="mb-1 block font-semibold text-slate-200">
                    Manufacturing Base
                  </strong>
                  China–ASEAN Youth Industrial Park, Fusui County, Chongzuo,
                  Guangxi, China
                </span>
              </address>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.08] pt-6 text-[10px] uppercase tracking-[0.14em] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 ACTION Water Solutions. All rights reserved.</p>
          <p>Engineering · Manufacturing · Smart Operations</p>
        </div>
      </div>
    </footer>
  );
}

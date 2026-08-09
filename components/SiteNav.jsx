"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import content from "../content.json";

export default function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 4);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav
      className={`w-full sticky top-0 z-50 bg-white/85 backdrop-blur transition-shadow relative ${
        scrolled ? "shadow-sm border-b border-border" : "border-b border-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0 group">
          <Image
            src="/logo.jpg"
            alt={content.site.logoAlt}
            width={72}
            height={72}
            priority
            className="h-9 w-auto object-contain transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105"
          />
          <span className="font-extrabold text-base text-foreground tracking-tight">
            {content.site.name}
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 md:mr-[2cm]">
          {content.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`relative py-1 text-sm font-extrabold tracking-wide transition-colors after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-0.5 after:bg-accent after:origin-left after:transition-transform after:duration-300 ${
                isActive(item.href)
                  ? "text-foreground after:scale-x-100"
                  : "text-muted-foreground hover:text-foreground after:scale-x-0 hover:after:scale-x-100"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <MobileMenu isActive={isActive} />
      </div>
    </nav>
  );
}

function MobileMenu({ isActive }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        className="text-foreground py-2 px-2 focus:outline-none"
        aria-label="Abrir menú"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        >
          <line x1="3" y1="6" x2="19" y2="6" />
          <line x1="3" y1="11" x2="19" y2="11" />
          <line x1="3" y1="16" x2="19" y2="16" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full bg-white border-t border-border shadow-sm">
          <div className="max-w-5xl mx-auto px-4 flex flex-col py-2">
            {content.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={
                  isActive(item.href)
                    ? "py-2.5 text-sm font-extrabold text-foreground"
                    : "py-2.5 text-sm font-extrabold text-muted-foreground"
                }
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

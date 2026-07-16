"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import content from "../content.json";

export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const linkClass = (href) =>
    isActive(href)
      ? "px-5 py-3 text-sm font-semibold tracking-wide text-white border-b-2 border-accent"
      : "px-5 py-3 text-sm font-semibold tracking-wide text-white/75 hover:text-white transition-colors";

  return (
    <nav className="w-full bg-primary sticky top-0 z-50 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between md:justify-start md:gap-1">
        <div className="hidden md:flex items-center gap-1">
          {content.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={linkClass(item.href)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <span className="md:hidden text-white font-bold text-sm py-3">
          {content.site.name}
        </span>
        <button
          className="md:hidden text-white py-3 px-2 focus:outline-none"
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
      </div>

      {open && (
        <div className="md:hidden border-t border-white/15">
          <div className="max-w-5xl mx-auto px-4 flex flex-col py-2">
            {content.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={
                  isActive(item.href)
                    ? "py-2.5 text-sm font-semibold text-white"
                    : "py-2.5 text-sm font-semibold text-white/75"
                }
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import content from "../content.json";
import HeroSnow from "./HeroSnow";

const SEASONS = {
  winter: {
    bg: "bg-gradient-to-br from-primary via-primary to-[#0047b3]",
    glowStyle:
      "radial-gradient(560px 320px at 88% 8%, rgba(0,199,149,.25), transparent 70%), radial-gradient(420px 260px at 10% 100%, rgba(255,255,255,.08), transparent 70%)",
    particleColor: "#ffffff",
    particleGlow: "rgba(255,255,255,.55)",
    ember: false,
  },
  summer: {
    bg: "bg-gradient-to-br from-[#0a0a0a] via-[#0a0a0a] to-[#1a1206]",
    glowStyle:
      "radial-gradient(560px 320px at 88% 8%, rgba(255,138,0,.22), transparent 70%), radial-gradient(420px 260px at 10% 100%, rgba(255,138,0,.1), transparent 70%)",
    particleColor: "#ff9a1f",
    particleGlow: "rgba(255,154,31,.85)",
    ember: true,
  },
};

function SunIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="#ff8a00" {...props}>
      <circle cx="12" cy="12" r="5" />
      <g stroke="#ff8a00" strokeWidth="2" strokeLinecap="round">
        <line x1="12" y1="1.5" x2="12" y2="4" />
        <line x1="12" y1="20" x2="12" y2="22.5" />
        <line x1="1.5" y1="12" x2="4" y2="12" />
        <line x1="20" y1="12" x2="22.5" y2="12" />
        <line x1="4.4" y1="4.4" x2="6.1" y2="6.1" />
        <line x1="17.9" y1="17.9" x2="19.6" y2="19.6" />
        <line x1="4.4" y1="19.6" x2="6.1" y2="17.9" />
        <line x1="17.9" y1="6.1" x2="19.6" y2="4.4" />
      </g>
    </svg>
  );
}

function SnowflakeIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="#bfe4ff"
      strokeWidth="1.8"
      strokeLinecap="round"
      {...props}
    >
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="3.5" y1="7" x2="20.5" y2="17" />
      <line x1="3.5" y1="17" x2="20.5" y2="7" />
      <path d="M12 2 9.5 4.5M12 2l2.5 2.5M12 22l-2.5-2.5M12 22l2.5-2.5" />
      <path d="M3.5 7 6.3 6.6M3.5 7l1 2.7M20.5 17l-2.8.4M20.5 17l-1-2.7" />
      <path d="M3.5 17 6.3 17.4M3.5 17l1-2.7M20.5 7l-2.8-.4M20.5 7l-1 2.7" />
    </svg>
  );
}

export default function Hero() {
  const { hero, videoBanner } = content.home;
  const [season, setSeason] = useState("winter");
  const isSummer = season === "summer";
  const theme = SEASONS[season];
  const toggleLabel = isSummer
    ? hero.seasonToggle.toWinter
    : hero.seasonToggle.toSummer;

  return (
    <section
      className={`relative overflow-hidden ${theme.bg} py-10 md:py-14 px-6 transition-colors duration-700`}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-[background] duration-700"
        style={{ background: theme.glowStyle }}
      />
      <HeroSnow
        color={theme.particleColor}
        glow={theme.particleGlow}
        ember={theme.ember}
      />

      <button
        type="button"
        onClick={() => setSeason(isSummer ? "winter" : "summer")}
        aria-label={toggleLabel}
        title={toggleLabel}
        aria-pressed={isSummer}
        className={`absolute top-4 right-4 z-[3] flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/20 ${
          isSummer ? "ring-2 ring-[#ff8a00]" : "ring-0"
        }`}
      >
        <span className="relative block w-5 h-5">
          <SunIcon
            aria-hidden="true"
            className={`absolute inset-0 transition-all duration-300 ${
              isSummer
                ? "opacity-0 scale-50 rotate-90"
                : "opacity-100 scale-100 rotate-0"
            }`}
          />
          <SnowflakeIcon
            aria-hidden="true"
            className={`absolute inset-0 transition-all duration-300 ${
              isSummer
                ? "opacity-100 scale-100 rotate-0"
                : "opacity-0 scale-50 -rotate-90"
            }`}
          />
        </span>
      </button>

      <div className="relative z-[2] max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-9 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-[.72rem] uppercase tracking-[.14em] text-white/[.78]">
            <span className="relative flex h-[7px] w-[7px]">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent animate-ping opacity-60" />
              <span className="relative inline-flex rounded-full h-[7px] w-[7px] bg-accent" />
            </span>
            {hero.eyebrow}
          </span>

          <h1 className="text-[1.7rem] md:text-[2.5rem] font-semibold leading-[1.12] tracking-tight text-white mt-3 mb-3">
            {hero.titleLine1}
            <br />
            {hero.titleLine2}
          </h1>
          <p className="text-white/[.82] text-[.96rem] leading-relaxed max-w-[34ch] mb-5">
            {hero.subtitle}
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <Link
              href="/contacto"
              className="inline-flex items-center bg-accent hover:bg-[#00a67c] text-white font-extrabold text-[.88rem] tracking-wide px-5 py-[.6rem] rounded-[9px] shadow-[0_10px_24px_-10px_rgba(0,199,149,.55)] transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_16px_30px_-10px_rgba(0,199,149,.6)] active:translate-y-0 active:scale-95"
              style={{ textShadow: "0 1px 1px rgba(0,40,25,.18)" }}
            >
              {hero.cta}
            </Link>
            <Link
              href={videoBanner.ctaHref}
              className="group inline-flex items-center gap-1.5 text-white font-semibold text-[.96rem] py-1.5 border-b border-white/0 hover:border-white/50 transition-colors"
            >
              {videoBanner.cta}
              <span className="transition-transform duration-300 group-hover:translate-x-[5px]">
                →
              </span>
            </Link>
          </div>
        </div>

        <Link
          href={videoBanner.ctaHref}
          aria-label={videoBanner.cta}
          className="group relative block max-w-[320px] md:ml-auto rounded-[14px] p-[7px] shadow-[0_24px_48px_-16px_rgba(0,71,179,.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_56px_-16px_rgba(0,71,179,.4)]"
          style={{
            background:
              "linear-gradient(155deg, rgba(255,255,255,.22), rgba(255,255,255,.04))",
          }}
        >
          <div className="relative rounded-[10px] overflow-hidden aspect-[4/3] bg-[#031428]">
            <span className="absolute top-3.5 left-3.5 z-10 inline-flex items-center gap-[.45rem] rounded-full bg-[rgba(3,20,40,.72)] backdrop-blur-sm text-white text-[.7rem] tracking-[.08em] px-[.65rem] py-[.35rem]">
              <span className="relative flex h-[7px] w-[7px]">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent animate-ping opacity-60" />
                <span className="relative inline-flex rounded-full h-[7px] w-[7px] bg-accent" />
              </span>
              {videoBanner.badge}
            </span>
            <video
              className="w-full h-full object-cover block"
              src={videoBanner.videoSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
            <div
              className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  "linear-gradient(to top, rgba(3,20,40,.72) 0%, rgba(3,20,40,0) 42%)",
              }}
            >
              <span className="inline-flex items-center gap-2 bg-white text-foreground font-bold text-[.88rem] px-[1.15rem] py-[.65rem] rounded-full shadow-md translate-y-2.5 group-hover:translate-y-0 transition-transform duration-300">
                {videoBanner.cta}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

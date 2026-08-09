"use client";

import { useEffect, useRef } from "react";

const COUNT = 34;

export default function HeroSnow({
  color = "#ffffff",
  glow = "rgba(255,255,255,.55)",
  ember = false,
}) {
  const fieldRef = useRef(null);

  useEffect(() => {
    const field = fieldRef.current;
    if (!field) return;
    field.innerHTML = "";
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const hero = field.parentElement;
    const rect = (hero || field).getBoundingClientRect();
    const W = rect.width || 1180;
    const H = rect.height || 500;
    const laneWidth = W / COUNT;

    const frag = document.createDocumentFragment();
    for (let i = 0; i < COUNT; i++) {
      const flake = document.createElement("span");
      flake.className = "snowflake";
      const sizeMm = (0.2 + Math.random() * 1.8).toFixed(2);
      const amp = Math.round(laneWidth * 0.2 * (0.6 + Math.random() * 0.8));
      const fall = Math.round(H + 60);
      const dur = (9 + Math.random() * 11).toFixed(2);
      const delay = (-Math.random() * dur).toFixed(2);
      const fadeDur = (3 + Math.random() * 4).toFixed(2);
      const fadeDelay = (-Math.random() * fadeDur).toFixed(2);
      const peak = ember
        ? (0.55 + Math.random() * 0.45).toFixed(2)
        : (0.35 + Math.random() * 0.55).toFixed(2);

      flake.style.left = (Math.random() * 100).toFixed(2) + "%";
      flake.style.width = sizeMm + "mm";
      flake.style.height = sizeMm + "mm";
      flake.style.background = color;
      flake.style.boxShadow = ember
        ? `0 0 4px ${glow}, 0 0 9px ${glow}`
        : `0 0 2px ${glow}`;
      flake.style.setProperty("--amp", amp + "px");
      flake.style.setProperty("--fall", fall + "px");
      flake.style.setProperty("--peak", peak);
      const fadeName = ember ? "ember-fade" : "snow-fade";
      flake.style.animation = `snow-fall ${dur}s linear ${delay}s infinite, ${fadeName} ${fadeDur}s ease-out ${fadeDelay}s infinite`;
      frag.appendChild(flake);
    }
    field.appendChild(frag);

    return () => {
      field.innerHTML = "";
    };
  }, [color, glow, ember]);

  return <div className="snowfield" ref={fieldRef} aria-hidden="true" />;
}

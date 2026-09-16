"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import content from "../content.json";

/** Ancho por debajo del cual la rejilla es de una sola columna (breakpoint sm). */
const MOBILE_QUERY = "(max-width: 639px)";
/** Porcion visible a partir de la cual un reel se considera "en pantalla". */
const VISIBLE_RATIO = 0.55;

function safePlay(video) {
  const played = video.play();
  if (played && typeof played.catch === "function") played.catch(() => {});
}

/**
 * Rejilla de reels verticales.
 *
 * En escritorio los cuatro se reproducen a la vez. En movil solo corre el que
 * esta en pantalla: los cuatro archivos suman ~29 MB y arrancarlos todos
 * gastaria los datos del visitante en tres videos que no esta mirando.
 *
 * Todos arrancan en silencio (los navegadores solo permiten autoplay mudo);
 * un clic en cualquier punto de la ficha activa el audio de ese reel y silencia
 * el resto, para que nunca suenen dos a la vez.
 */
export default function ReelGrid() {
  const { pendingLabel, videoAlt, soundOn, soundOff, appLinkTitle, reels } =
    content.multimodal;

  // Nombre del reel que suena ahora mismo, o null si estan todos en silencio.
  const [audible, setAudible] = useState(null);
  // null mientras no se ha medido: el render del servidor no puede saberlo.
  const [isMobile, setIsMobile] = useState(null);
  const videoRefs = useRef({});

  const muteAll = useCallback(() => {
    setAudible(null);
    Object.values(videoRefs.current).forEach((el) => {
      if (el) el.muted = true;
    });
  }, []);

  const toggleSound = useCallback(
    (name) => {
      const next = audible === name ? null : name;
      Object.entries(videoRefs.current).forEach(([key, el]) => {
        if (!el) return;
        el.muted = key !== next;
        // Al quitar el silencio el video debe seguir corriendo: si el navegador
        // lo habia pausado por politica de autoplay, se relanza.
        if (key === next) safePlay(el);
      });
      setAudible(next);
    },
    [audible]
  );

  useEffect(() => {
    const query = window.matchMedia(MOBILE_QUERY);
    const update = () => setIsMobile(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (isMobile === null) return undefined;
    const videos = Object.values(videoRefs.current).filter(Boolean);
    if (videos.length === 0) return undefined;

    if (!isMobile) {
      videos.forEach(safePlay);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting && entry.intersectionRatio >= VISIBLE_RATIO) {
            safePlay(video);
          } else {
            video.pause();
            // Un reel que sale de pantalla no puede quedarse sonando.
            if (!video.muted) {
              video.muted = true;
              setAudible((current) =>
                current === video.dataset.reel ? null : current
              );
            }
          }
        });
      },
      { threshold: [0, VISIBLE_RATIO, 1] }
    );

    videos.forEach((video) => {
      video.pause();
      observer.observe(video);
    });

    return () => observer.disconnect();
  }, [isMobile]);

  // Al pasar de escritorio a movil (o al reves) el audio arranca de cero.
  useEffect(() => {
    if (isMobile !== null) muteAll();
  }, [isMobile, muteAll]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 pb-20 max-w-[340px] sm:max-w-none mx-auto">
      {reels.map((reel) => (
        <article
          key={reel.name}
          onClick={() => reel.video && toggleSound(reel.name)}
          className={
            reel.video ? "flex flex-col gap-4 cursor-pointer group" : "flex flex-col gap-4"
          }
        >
          <Stage
            reel={reel}
            isAudible={audible === reel.name}
            pendingLabel={pendingLabel}
            videoAlt={videoAlt}
            soundOn={soundOn}
            soundOff={soundOff}
            onToggle={() => toggleSound(reel.name)}
            registerRef={(el) => {
              videoRefs.current[reel.name] = el;
            }}
          />

          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-extrabold tracking-tight text-foreground">
              {reel.url ? (
                <a
                  href={reel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={appLinkTitle.replace("{app}", reel.name)}
                  onClick={(event) => event.stopPropagation()}
                  className="inline-flex items-center gap-1.5 hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
                >
                  {reel.name}
                  <ArrowUpRight />
                </a>
              ) : (
                reel.name
              )}
            </h2>
            <p className="text-[11px] font-bold uppercase tracking-wider text-accent">
              {reel.claim}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {reel.resumen}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

/**
 * Marco vertical 9:16. Si el reel todavia no tiene video, cae al logo de la app
 * sobre el mismo fondo oscuro para que el hueco no rompa la rejilla.
 */
function Stage({
  reel,
  isAudible,
  pendingLabel,
  videoAlt,
  soundOn,
  soundOff,
  onToggle,
  registerRef,
}) {
  const frame =
    "relative aspect-[9/16] rounded-xl overflow-hidden ring-1 ring-inset ring-white/10";

  if (!reel.video) {
    return (
      <div
        className={`${frame} grid place-items-center bg-[radial-gradient(120%_80%_at_50%_12%,#161c2a_0%,#0b0e14_62%)]`}
      >
        <div className="relative w-[62%] aspect-square rounded-[18%] overflow-hidden shadow-2xl">
          <Image
            src={reel.poster}
            alt={`${reel.name} — logo de la app`}
            fill
            sizes="(max-width: 640px) 60vw, 200px"
            className="object-cover"
          />
        </div>
        <span className="absolute left-3 bottom-3 rounded-full border border-white/15 bg-white/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white/60">
          {pendingLabel}
        </span>
      </div>
    );
  }

  const label = (isAudible ? soundOff : soundOn).replace("{app}", reel.name);

  return (
    <div className={`${frame} bg-[#0b0e14]`}>
      {/* Sin autoPlay en el marcado: quien decide que se reproduce y cuando es
          el efecto de ReelGrid, que en movil solo arranca el reel visible. */}
      <video
        ref={registerRef}
        data-reel={reel.name}
        className="block w-full h-full object-cover"
        src={reel.video}
        poster={reel.poster}
        aria-label={videoAlt.replace("{app}", reel.name)}
        muted
        loop
        playsInline
        preload="none"
      />

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onToggle();
        }}
        aria-label={label}
        aria-pressed={isAudible}
        title={label}
        className={`absolute right-2.5 top-2.5 grid h-9 w-9 place-items-center rounded-full border backdrop-blur-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
          isAudible
            ? "border-accent/60 bg-accent text-white"
            : "border-white/20 bg-black/45 text-white/80 group-hover:bg-black/65 group-hover:text-white"
        }`}
      >
        {isAudible ? <SpeakerOn /> : <SpeakerOff />}
      </button>
    </div>
  );
}

function SpeakerOn() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11 5 6 9H3v6h3l5 4z" />
      <path d="M15.5 8.5a5 5 0 0 1 0 7" />
      <path d="M18.5 5.5a9 9 0 0 1 0 13" />
    </svg>
  );
}

function SpeakerOff() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11 5 6 9H3v6h3l5 4z" />
      <line x1="16" y1="9" x2="21" y2="15" />
      <line x1="21" y1="9" x2="16" y2="15" />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="8 7 17 7 17 16" />
    </svg>
  );
}

"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const gallery = [
  { src: "/images/rasht render 02.png", en: "Exterior View", fa: "نمای بیرونی", type: "image" },
  { src: "/images/rasht dakheli 02.png", en: "Interior Design", fa: "طراحی داخلی", type: "image" },
  { src: "/images/rasht render 03.png", en: "Architectural Visualization", fa: "تجسم معماری", type: "image" },
  { src: "/images/rasht diagram 03.png", en: "Design Development", fa: "روند شکل‌گیری طرح", type: "image" },
  { src: "/images/rasht diagram 01.png", en: "Concept Diagram", fa: "دیاگرام مفهومی", type: "image" },
  { src: "/images/rasht dakheli 03.png", en: "Interior Atmosphere", fa: "فضای داخلی", type: "image" },
  { src: "/images/rasht plan.pdf", en: "Floor Plan", fa: "پلان معماری", type: "pdf" },
  { src: "/images/rasht deatail 01.jpg", en: "Architectural Detail 01", fa: "دیتیل معماری ۰۱", type: "image" },
  { src: "/images/rasht dakheli 01.png", en: "Interior Design", fa: "طراحی داخلی", type: "image" },
  { src: "/images/rasht deatail 02.jpg", en: "Architectural Detail 02", fa: "دیتیل معماری ۰۲", type: "image" },
  { src: "/images/rasht boresh.pdf", en: "Building Section", fa: "برش معماری", type: "pdf" },
  { src: "/images/rasht deatail 03.jpg", en: "Architectural Detail 03", fa: "دیتیل معماری ۰۳", type: "image" },
];

const totalSlides = gallery.length + 2;

export default function VillaRasht() {
  const [activeSlide, setActiveSlide] = useState(0);
  const wheelLock = useRef(false);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const wheelTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((index: number) => {
    setActiveSlide(Math.max(0, Math.min(index, totalSlides - 1)));
  }, []);

  const next = useCallback(() => {
    setActiveSlide((current) => Math.min(current + 1, totalSlides - 1));
  }, []);

  const previous = useCallback(() => {
    setActiveSlide((current) => Math.max(current - 1, 0));
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") previous();
      if (event.key === "ArrowLeft") next();
      if (event.key === "PageDown") { event.preventDefault(); next(); }
      if (event.key === "PageUp") { event.preventDefault(); previous(); }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [next, previous]);

  useEffect(() => () => {
    if (wheelTimer.current) clearTimeout(wheelTimer.current);
  }, []);

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (wheelLock.current) return;
    const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
    if (Math.abs(delta) < 18) return;
    wheelLock.current = true;
    if (delta > 0) next();
    else previous();
    wheelTimer.current = setTimeout(() => { wheelLock.current = false; }, 700);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX;
    touchStartY.current = event.touches[0].clientY;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const dx = event.changedTouches[0].clientX - touchStartX.current;
    const dy = event.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) < 45 || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0) next();
    else previous();
  };

  return (
    <main
      className="fixed inset-0 overflow-hidden bg-black text-white"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ width: `${totalSlides * 100}vw`, transform: `translateX(-${activeSlide * 100}vw)` }}
      >
        <section className="relative h-full w-screen flex-none">
          <Image src="/images/villa-rasht.png" alt="Villa Rasht" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute bottom-20 left-6 right-6 sm:bottom-16 sm:left-14">
            <p className="mb-3 text-[10px] tracking-[0.3em] text-white/65">BAMDA / RESIDENTIAL PROJECT</p>
            <h1 className="text-5xl font-extralight tracking-wide sm:text-7xl">Villa Rasht</h1>
            <p className="mt-3 text-xs tracking-[0.25em] text-zinc-300">RASHT, IRAN / 2026</p>
            <button onClick={next} className="mt-8 flex items-center gap-3 text-[10px] tracking-[0.2em]">EXPLORE PROJECT <span className="text-xl">←</span></button>
          </div>
        </section>

        <section className="flex h-full w-screen flex-none items-center overflow-y-auto px-7 py-24 sm:px-16 lg:px-24">
          <div className="max-w-4xl">
            <p className="mb-6 text-[10px] tracking-[0.4em] text-[#E74727]">CONCEPT / 01</p>
            <h2 className="mb-8 text-3xl font-light tracking-wide sm:text-5xl">Architecture in Dialogue with Nature</h2>
            <p className="text-sm leading-8 text-zinc-300 sm:text-base sm:leading-9">A contemporary villa redesign exploring spatial quality, materiality, and the relationship between architecture and nature. The project reimagines an existing structure through a considered approach to light, landscape, climate, and everyday living.</p>
            <p dir="rtl" className="mt-5 text-sm leading-8 text-zinc-400 sm:text-base sm:leading-9">بازطراحی ویلایی معاصر با تأکید بر کیفیت فضایی، مصالح، نور و ارتباط معماری با طبیعت و منظر؛ با رویکردی متناسب با اقلیم شمال ایران و تجربهٔ زندگی روزمره.</p>
          </div>
        </section>

        {gallery.map((item, index) => (
          <section key={item.src} className="relative flex h-full w-screen flex-none flex-col bg-black px-4 pb-20 pt-16 sm:px-10 sm:pt-14">
            <div className="relative min-h-0 flex-1">
              {item.type === "pdf" ? (
                <iframe src={`${encodeURI(item.src)}${item.src === "/images/rasht boresh.pdf" ? "#zoom=page-fit&toolbar=0&navpanes=0" : "#toolbar=1&navpanes=0"}`} title={item.en} className="h-full min-h-[300px] w-full bg-white" />
              ) : (
                <Image src={item.src} alt={item.en} fill sizes="100vw" className="object-contain" />
              )}
            </div>
            <div className="flex items-end justify-between gap-4 pt-4">
              <div>
                <p className="text-[10px] tracking-[0.18em] text-zinc-200 sm:text-xs">{item.en}</p>
                <p dir="rtl" className="mt-1 text-xs text-zinc-500">{item.fa}</p>
              </div>
              <span className="text-[10px] tracking-widest text-zinc-600">{String(index + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")}</span>
            </div>
            {item.type === "pdf" && <a href={encodeURI(item.src)} target="_blank" rel="noreferrer" className="absolute right-5 top-5 z-10 text-[10px] tracking-widest text-zinc-400 hover:text-white">OPEN PDF ↗</a>}
          </section>
        ))}
      </div>

      <header className="pointer-events-none absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-5 py-5 sm:px-10">
        <a href="/projects" className="pointer-events-auto text-[10px] tracking-[0.18em] text-white/80 transition-colors hover:text-[#E74727]">← ALL PROJECTS</a>
        <span className="text-[9px] tracking-[0.18em] text-white/65 sm:text-[10px]">BAMDA / VILLA RASHT</span>
      </header>

      <footer className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between gap-3 border-t border-white/10 bg-black/80 px-4 py-4 backdrop-blur-sm sm:px-10">
        <button type="button" onClick={previous} disabled={activeSlide === 0} className="shrink-0 text-[9px] tracking-widest transition-colors hover:text-[#E74727] disabled:opacity-25 sm:text-xs">← PREVIOUS</button>
        <div className="flex min-w-0 items-center justify-center gap-1.5 sm:gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button key={index} type="button" onClick={() => goTo(index)} aria-label={`Go to slide ${index + 1}`} aria-current={activeSlide === index ? "step" : undefined} className={`h-1 transition-all duration-300 ${activeSlide === index ? "w-5 bg-[#E74727] sm:w-7" : "w-1.5 bg-white/30 sm:w-2"}`} />
          ))}
        </div>
        <button type="button" onClick={next} disabled={activeSlide === totalSlides - 1} className="shrink-0 text-[9px] tracking-widest transition-colors hover:text-[#E74727] disabled:opacity-25 sm:text-xs">NEXT →</button>
      </footer>
    </main>
  );
}

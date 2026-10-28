"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const base = "https://bamda-dkmer4wk8-bamda.vercel.app/images/abas%20khani";
const gallery = Array.from({ length: 9 }, (_, index) => ({
  src: `${base}/${String(index + 1).padStart(2, "0")}.png`,
  en: `Abas Khani Residence — View ${String(index + 1).padStart(2, "0")}`,
  fa: `اقامتگاه عباس‌خانی — نمای ${String(index + 1).padStart(2, "0")}`,
}));
const totalSlides = gallery.length + 2;

export default function AbasKhaniResidence() {
  const [activeSlide, setActiveSlide] = useState(0);
  const wheelLock = useRef(false);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const wheelTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const next = useCallback(() => setActiveSlide((current) => Math.min(current + 1, totalSlides - 1)), []);
  const previous = useCallback(() => setActiveSlide((current) => Math.max(current - 1, 0)), []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") previous();
      if (event.key === "ArrowLeft" || event.key === "PageDown") { event.preventDefault(); next(); }
      if (event.key === "PageUp") { event.preventDefault(); previous(); }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [next, previous]);

  useEffect(() => () => { if (wheelTimer.current) clearTimeout(wheelTimer.current); }, []);

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (wheelLock.current) return;
    const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
    if (Math.abs(delta) < 18) return;
    wheelLock.current = true;
    delta > 0 ? next() : previous();
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
    dx < 0 ? next() : previous();
  };

  return (
    <main className="fixed inset-0 overflow-hidden bg-black text-white" onWheel={handleWheel} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" style={{ width: `${totalSlides * 100}vw`, transform: `translateX(-${activeSlide * 100}vw)` }}>
        <section className="relative h-full w-screen flex-none">
          <img src={gallery[0].src} alt="Abas Khani Residence — cover" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute bottom-20 left-6 right-6 sm:bottom-16 sm:left-14">
            <p className="mb-3 text-[10px] tracking-[0.3em] text-white/65">BAMDA / RESIDENTIAL INTERIOR</p>
            <h1 className="text-5xl font-extralight tracking-wide sm:text-7xl">Abas Khani Residence</h1>
            <p className="mt-3 text-xs tracking-[0.25em] text-zinc-300">IRAN / INTERIOR DESIGN</p>
            <button onClick={next} className="mt-8 flex items-center gap-3 text-[10px] tracking-[0.2em]">EXPLORE PROJECT <span className="text-xl">←</span></button>
          </div>
        </section>

        <section className="flex h-full w-screen flex-none items-center overflow-y-auto px-7 py-24 sm:px-16 lg:px-24">
          <div className="max-w-4xl">
            <p className="mb-6 text-[10px] tracking-[0.4em] text-[#E74727]">CONCEPT / 01</p>
            <h2 className="mb-8 text-3xl font-light tracking-wide sm:text-5xl">Abas Khani Residence</h2>
            <p className="text-sm leading-8 text-zinc-300 sm:text-base sm:leading-9">A contemporary residential interior project exploring the relationship between materiality, light, and the atmosphere of everyday living.</p>
            <p dir="rtl" className="mt-5 text-sm leading-8 text-zinc-400 sm:text-base sm:leading-9">پروژه‌ی طراحی داخلی مسکونی با تأکید بر متریال، نور و کیفیت تجربه‌ی فضای زندگی.</p>
          </div>
        </section>

        {gallery.map((item, index) => (
          <section key={item.src} className="relative flex h-full w-screen flex-none flex-col bg-black px-4 pb-20 pt-16 sm:px-10 sm:pt-14">
            <div className="relative min-h-0 flex-1">
              <img src={item.src} alt={item.en} loading="lazy" className="h-full w-full object-contain" />
            </div>
            <div className="flex items-center justify-between gap-4 pt-3 text-[10px] tracking-[0.15em] text-zinc-400">
              <span>{item.en}</span><span>{String(index + 1).padStart(2, "0")} / 09</span>
            </div>
          </section>
        ))}
      </div>

      <header className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-5 py-5 sm:px-10">
        <a href="/projects" className="text-[10px] tracking-[0.2em] hover:text-[#E74727]">← ALL PROJECTS</a>
        <p className="text-[9px] tracking-[0.2em] text-white/70">BAMDA / ABAS KHANI RESIDENCE</p>
        <span className="text-[10px] tabular-nums tracking-widest">{String(activeSlide + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}</span>
      </header>

      <footer className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between gap-3 border-t border-white/10 bg-black/75 px-5 py-4 backdrop-blur-sm sm:px-10">
        <button onClick={previous} disabled={activeSlide === 0} className="text-[9px] tracking-widest disabled:opacity-25 sm:text-xs">← PREVIOUS</button>
        <div className="flex items-center gap-1.5 sm:gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => <button key={index} onClick={() => setActiveSlide(index)} aria-label={`Go to slide ${index + 1}`} className={`h-1 transition-all ${activeSlide === index ? "w-6 bg-[#E74727] sm:w-8" : "w-2.5 bg-white/35 sm:w-3"}`} />)}
        </div>
        <button onClick={next} disabled={activeSlide === totalSlides - 1} className="text-[9px] tracking-widest disabled:opacity-25 sm:text-xs">NEXT →</button>
      </footer>
    </main>
  );
}

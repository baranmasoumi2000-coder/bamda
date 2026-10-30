"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const gallery = [2, 3, 4, 5, 6].map((n) => ({
  src: `/images/ebrahim-jondoni/${String(n).padStart(2, "0")}.png`,
  en: "Bedroom Visualization",
  fa: "رندر اتاق خواب",
}));

const totalSlides = gallery.length + 2;
const toFa = (v: number) => String(v).replace(/\\d/g, d => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);

export default function EbrahimJondoniBedroom() {
  const [active, setActive] = useState(0);
  const lock = useRef(false);
  const startX = useRef(0);
  const startY = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const goTo = useCallback((n: number) => setActive(Math.max(0, Math.min(n, totalSlides - 1))), []);
  const next = useCallback(() => setActive(n => Math.min(n + 1, totalSlides - 1)), []);
  const prev = useCallback(() => setActive(n => Math.max(n - 1, 0)), []);

  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "PageUp") { e.preventDefault(); prev(); }
      if (e.key === "ArrowLeft" || e.key === "PageDown") { e.preventDefault(); next(); }
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [next, prev]);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const wheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (lock.current) return;
    const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(d) < 18) return;
    lock.current = true;
    d > 0 ? next() : prev();
    timer.current = setTimeout(() => { lock.current = false; }, 700);
  };

  const touchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
  };
  const touchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const dx = e.changedTouches[0].clientX - startX.current;
    const dy = e.changedTouches[0].clientY - startY.current;
    if (Math.abs(dx) < 45 || Math.abs(dx) < Math.abs(dy)) return;
    dx < 0 ? next() : prev();
  };

  return (
    <main dir="ltr" className="fixed inset-0 overflow-hidden bg-black text-white" onWheel={wheel} onTouchStart={touchStart} onTouchEnd={touchEnd}>
      <div className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" style={{ direction: "ltr", width: `${totalSlides * 100}vw`, transform: `translateX(-${active * 100}vw)` }}>
        <section className="relative h-full w-screen flex-none">
          <img src="/images/ebrahim-jondoni/01.png" alt="Ebrahim Jondoni Bedroom" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute bottom-20 left-6 right-6 sm:bottom-16 sm:left-14">
            <p className="mb-3 text-[10px] tracking-[0.3em] text-white/65">BAMDA / RESIDENTIAL PROJECT</p>
            <h1 className="text-4xl font-extralight tracking-wide sm:text-7xl">Ebrahim Jondoni Bedroom</h1>
            <p className="mt-3 text-xs tracking-[0.25em] text-zinc-300">RESIDENTIAL INTERIOR / IRAN</p>
            <p dir="rtl" className="mt-2 text-left text-sm text-zinc-300">طراحی داخلی اتاق خواب</p>
            <button type="button" onClick={next} className="mt-7 flex items-center gap-3 text-[10px] tracking-[0.2em] hover:text-[#E74727]">EXPLORE PROJECT <span className="text-xl">←</span></button>
          </div>
        </section>

        <section className="flex h-full w-screen flex-none items-center overflow-y-auto px-7 py-24 sm:px-16 lg:px-24">
          <div className="max-w-4xl">
            <p className="mb-6 text-[10px] tracking-[0.4em] text-[#E74727]">CONCEPT / 02</p>
            <h2 className="mb-8 text-3xl font-light tracking-wide sm:text-5xl">A Calm, Contemporary Bedroom</h2>
            <p className="text-sm leading-8 text-zinc-300 sm:text-base sm:leading-9">An interior design project focused on a single bedroom, presented through a sequence of architectural visualizations. The design explores the relationship between materials, lighting, and a calm atmosphere for everyday rest.</p>
            <p dir="rtl" className="mt-5 text-left text-sm leading-8 text-zinc-400 sm:text-base sm:leading-9">این پروژه به طراحی داخلی یک اتاق خواب اختصاص دارد و از طریق مجموعه‌ای از رندرهای معماری ارائه می‌شود. تمرکز طراحی بر هماهنگی متریال، نورپردازی و شکل‌گیری فضایی آرام برای استراحت روزمره است.</p>
          </div>
        </section>

        {gallery.map((item, i) => (
          <section key={item.src} className="relative flex h-full w-screen flex-none flex-col bg-[#E7E3DA] px-4 pb-20 pt-16 sm:px-10 sm:pt-14">
            <div className="relative min-h-0 flex-1"><img src={item.src} alt={item.en + " " + (i + 1)} className="absolute inset-0 h-full w-full object-contain" /></div>
            <div className="flex items-end justify-between gap-4 pt-4">
              <div><p className="text-[10px] tracking-[0.18em] text-zinc-200 sm:text-xs">{item.en}</p><p dir="rtl" className="mt-1 text-left text-xs text-zinc-500">{item.fa}</p></div>
              <span className="text-[10px] tracking-widest text-zinc-600">{String(i + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")}</span>
            </div>
          </section>
        ))}
      </div>

      <header className="pointer-events-none absolute left-0 right-0 top-0 z-20 flex items-center justify-between gap-4 px-5 py-5 sm:px-10">
        <a href="/projects" className="pointer-events-auto text-[10px] tracking-[0.18em] text-white/80 transition-colors hover:text-[#E74727]">← ALL PROJECTS / همهٔ پروژه‌ها</a>
        <span className="text-[9px] tracking-[0.18em] text-white/65 sm:text-[10px]">BAMDA / EBRAHIM JONDONI BEDROOM</span>
        <span className="text-xs tabular-nums tracking-widest">{toFa(active + 1).padStart(2, "۰")} / {toFa(totalSlides).padStart(2, "۰")}</span>
      </header>

      <footer className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between gap-3 border-t border-white/10 bg-black/80 px-4 py-4 backdrop-blur-sm sm:px-10">
        <button type="button" onClick={prev} disabled={active === 0} className="shrink-0 text-[9px] tracking-widest transition-colors hover:text-[#E74727] disabled:opacity-25 sm:text-xs">← PREVIOUS / قبلی</button>
        <div className="flex min-w-0 items-center justify-center gap-1.5 sm:gap-2">{Array.from({ length: totalSlides }).map((_, i) => <button key={i} type="button" onClick={() => goTo(i)} aria-label={"Go to slide " + (i + 1)} aria-current={active === i ? "step" : undefined} className={"h-1 transition-all duration-300 " + (active === i ? "w-5 bg-[#E74727] sm:w-7" : "w-1.5 bg-white/30 sm:w-2")} />)}</div>
        <button type="button" onClick={next} disabled={active === totalSlides - 1} className="shrink-0 text-[9px] tracking-widest transition-colors hover:text-[#E74727] disabled:opacity-25 sm:text-xs">NEXT / بعدی →</button>
      </footer>
    </main>
  );
}

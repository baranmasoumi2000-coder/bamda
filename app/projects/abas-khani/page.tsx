"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const base = "https://bamda-dkmer4wk8-bamda.vercel.app/images/abas%20khani";
const toFa = (value: number) => String(value).replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]);
const gallery = Array.from({ length: 9 }, (_, index) => ({
  src: `${base}/${String(index + 1).padStart(2, "0")}.png`,
  alt: `اقامتگاه عباس‌خانی — نمای ${toFa(index + 1)}`,
  caption: `نمای ${toFa(index + 1)}`,
}));
const totalSlides = gallery.length + 2;

export default function AbasKhaniResidence() {
  const [activeSlide, setActiveSlide] = useState(0);
  const wheelLock = useRef(false);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const wheelTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((index: number) => {
    setActiveSlide(Math.max(0, Math.min(index, totalSlides - 1)));
  }, []);
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

  useEffect(() => () => {
    if (wheelTimer.current) clearTimeout(wheelTimer.current);
  }, []);

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
    <main
      dir="ltr" className="fixed inset-0 overflow-hidden bg-black text-white"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ direction: "ltr", width: `${totalSlides * 100}vw`, transform: `translateX(-${activeSlide * 100}vw)` }}
      >
        <section className="relative h-full w-screen flex-none">
          <Image src={gallery[0].src} alt="اقامتگاه عباس‌خانی" fill priority sizes="100vw" className="object-cover" unoptimized />
          <div className="absolute inset-0 bg-black/45" />
          <div dir="rtl" className="absolute bottom-20 right-6 left-6 text-right sm:bottom-16 sm:right-14">
            <p className="mb-3 text-xs tracking-wide text-white/70">بامدا / پروژهٔ مسکونی</p>
            <h1 className="text-5xl font-extralight leading-tight sm:text-7xl">اقامتگاه عباس‌خانی</h1>
            <p className="mt-3 text-sm text-zinc-300">چیتگر، تهران / طراحی داخلی</p>
            <div className="mt-5 flex items-center gap-3 text-xs text-white/70">
              <span className="text-2xl font-light tabular-nums">{toFa(4).padStart(2, "۰")}</span>
              <span className="h-px w-10 bg-[#E74727]" />
              <span>مجموعهٔ پروژه‌های بامدا</span>
            </div>
            <button type="button" onClick={next} className="mt-7 flex items-center gap-3 text-xs hover:text-[#E74727]">
              مشاهدهٔ پروژه <span className="text-xl">←</span>
            </button>
          </div>
        </section>

        <section className="flex h-full w-screen flex-none items-center overflow-y-auto px-7 py-24 sm:px-16 lg:px-24">
          <div dir="rtl" className="max-w-4xl text-right">
            <p className="mb-6 text-xs tracking-wide text-[#E74727]">پروژه / ۰۴</p>
            <h2 className="mb-8 text-3xl font-light sm:text-5xl">اقامتگاه عباس‌خانی</h2>
            <p className="text-sm leading-8 text-zinc-300 sm:text-base sm:leading-9">
              طراحی داخلی فضای مسکونی با تمرکز بر کیفیت فضایی، انتخاب متریال، نورپردازی و ایجاد فضایی آرام و هماهنگ برای زندگی روزمره.
            </p>
          </div>
        </section>

        {gallery.map((item, index) => (
          <section key={item.src} className="relative flex h-full w-screen flex-none flex-col bg-black px-4 pb-20 pt-16 sm:px-10 sm:pt-14">
            <div className="relative min-h-0 flex-1">
              <Image src={item.src} alt={item.alt} fill sizes="100vw" className="object-contain" unoptimized />
            </div>
            <div className="flex items-end justify-between gap-4 pt-4">
              <p className="text-xs text-zinc-300">{item.caption}</p>
              <span className="text-xs tabular-nums tracking-widest text-zinc-500">{toFa(index + 1).padStart(2, "۰")} / {toFa(gallery.length).padStart(2, "۰")}</span>
            </div>
          </section>
        ))}
      </div>

      <header className="pointer-events-none absolute left-0 right-0 top-0 z-20 flex items-center justify-between gap-4 px-5 py-5 sm:px-10">
        <a href="/projects" className="pointer-events-auto text-xs text-white/80 transition-colors hover:text-[#E74727]">← همهٔ پروژه‌ها</a>
        <span className="text-xs text-white/70">بامدا / اقامتگاه عباس‌خانی</span>
        <span className="text-xs tabular-nums tracking-widest">{toFa(activeSlide + 1).padStart(2, "۰")} / {toFa(totalSlides).padStart(2, "۰")}</span>
      </header>

      <footer className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between gap-3 border-t border-white/10 bg-black/80 px-4 py-4 backdrop-blur-sm sm:px-10">
        <button type="button" onClick={previous} disabled={activeSlide === 0} className="shrink-0 text-xs transition-colors hover:text-[#E74727] disabled:opacity-25">← قبلی</button>
        <div className="flex min-w-0 items-center justify-center gap-1.5 sm:gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button key={index} type="button" onClick={() => goTo(index)} aria-label={`رفتن به اسلاید ${toFa(index + 1)}`} aria-current={activeSlide === index ? "step" : undefined} className={`h-1 transition-all duration-300 ${activeSlide === index ? "w-5 bg-[#E74727] sm:w-7" : "w-1.5 bg-white/30 sm:w-2"}`} />
          ))}
        </div>
        <button type="button" onClick={next} disabled={activeSlide === totalSlides - 1} className="shrink-0 text-xs transition-colors hover:text-[#E74727] disabled:opacity-25">بعدی →</button>
      </footer>
    </main>
  );
}

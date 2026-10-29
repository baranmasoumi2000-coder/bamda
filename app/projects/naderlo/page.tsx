"use client";
import { useCallback, useEffect, useRef, useState } from "react";
const gallery = Array.from({ length: 6 }, (_, index) => ({ src: "/images/naderlo/" + String(index + 2).padStart(2, "0") + ".png", en: "Bedroom", fa: "اتاق خواب" }));
const totalSlides = gallery.length + 2;
const toFa = (value: number) => String(value).replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]);
export default function NaderloBedroom() {
  const [activeSlide, setActiveSlide] = useState(0);
  const wheelLock = useRef(false);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const wheelTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const goTo = useCallback((index: number) => setActiveSlide(Math.max(0, Math.min(index, totalSlides - 1))), []);
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
  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => { touchStartX.current = event.touches[0].clientX; touchStartY.current = event.touches[0].clientY; };
  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const dx = event.changedTouches[0].clientX - touchStartX.current;
    const dy = event.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) < 45 || Math.abs(dx) < Math.abs(dy)) return;
    dx < 0 ? next() : previous();
  };
  return (
    <main dir="ltr" className="fixed inset-0 overflow-hidden bg-black text-white" onWheel={handleWheel} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" style={{ direction: "ltr", width: (totalSlides * 100) + "vw", transform: "translateX(-" + (activeSlide * 100) + "vw)" }}>
        <section className="relative h-full w-screen flex-none"><div className="absolute inset-0 bg-zinc-900" /><img src="/images/naderlo/01.png" alt="Naderlo Bedroom" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-black/45" />
          <div className="absolute bottom-20 left-6 right-6 sm:bottom-16 sm:left-14"><p className="mb-3 text-[10px] tracking-[0.3em] text-white/65">BAMDA / RESIDENTIAL PROJECT</p><h1 className="text-5xl font-extralight tracking-wide sm:text-7xl">Naderlo Bedroom</h1><p className="mt-3 text-xs tracking-[0.25em] text-zinc-300">RESIDENTIAL INTERIOR / SHAHRAK-E GHARB, TEHRAN</p><p dir="rtl" className="mt-2 text-left text-sm text-zinc-300">اتاق خواب آقای ندرلو / شهرک غرب، تهران</p><button type="button" onClick={next} className="mt-7 flex items-center gap-3 text-[10px] tracking-[0.2em] hover:text-[#E74727]">EXPLORE PROJECT <span className="text-xl">←</span></button></div>
        </section>
        <section className="flex h-full w-screen flex-none items-center overflow-y-auto px-7 py-24 sm:px-16 lg:px-24"><div className="max-w-4xl"><p className="mb-6 text-[10px] tracking-[0.4em] text-[#E74727]">CONCEPT / 05</p><h2 className="mb-8 text-3xl font-light tracking-wide sm:text-5xl">A Considered Private Space</h2><p className="text-sm leading-8 text-zinc-300 sm:text-base sm:leading-9">A residential bedroom interior project in Shahrak-e Gharb, Tehran, presented through architectural visualizations exploring material, light, and a calm atmosphere.</p><p dir="rtl" className="mt-5 text-left text-sm leading-8 text-zinc-400 sm:text-base sm:leading-9">پروژه طراحی داخلی اتاق خواب مسکونی آقای ندرلو در شهرک غرب تهران؛ ارائه‌شده در قالب مجموعه‌ای از تصاویر معماری با تأکید بر متریال، نورپردازی و ایجاد فضایی آرام.</p></div></section>
        {gallery.map((item, index) => <section key={item.src} className="relative flex h-full w-screen flex-none flex-col bg-black px-4 pb-20 pt-16 sm:px-10 sm:pt-14"><div className="relative min-h-0 flex-1"><img src={item.src} alt={item.en + " view " + (index + 1)} className="absolute inset-0 h-full w-full object-contain" /></div><div className="flex items-end justify-between gap-4 pt-4"><div><p className="text-[10px] tracking-[0.18em] text-zinc-200 sm:text-xs">{item.en}</p><p dir="rtl" className="mt-1 text-left text-xs text-zinc-500">{item.fa}</p></div><span className="text-[10px] tracking-widest text-zinc-600">{String(index + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")}</span></div></section>)}
      </div>
      <header className="pointer-events-none absolute left-0 right-0 top-0 z-20 flex items-center justify-between gap-4 px-5 py-5 sm:px-10"><a href="/projects" className="pointer-events-auto text-[10px] tracking-[0.18em] text-white/80 transition-colors hover:text-[#E74727]">← ALL PROJECTS / همهٔ پروژه‌ها</a><span className="text-[9px] tracking-[0.18em] text-white/65 sm:text-[10px]">BAMDA / NADERLO BEDROOM</span><span className="text-xs tabular-nums tracking-widest">{toFa(activeSlide + 1).padStart(2, "۰")} / {toFa(totalSlides).padStart(2, "۰")}</span></header>
      <footer className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between gap-3 border-t border-white/10 bg-black/80 px-4 py-4 backdrop-blur-sm sm:px-10"><button type="button" onClick={previous} disabled={activeSlide === 0} className="shrink-0 text-[9px] tracking-widest transition-colors hover:text-[#E74727] disabled:opacity-25 sm:text-xs">← PREVIOUS / قبلی</button><div className="flex min-w-0 items-center justify-center gap-1.5 sm:gap-2">{Array.from({ length: totalSlides }).map((_, index) => <button key={index} type="button" onClick={() => goTo(index)} aria-label={"Go to slide " + (index + 1)} aria-current={activeSlide === index ? "step" : undefined} className={"h-1 transition-all duration-300 " + (activeSlide === index ? "w-5 bg-[#E74727] sm:w-7" : "w-1.5 bg-white/30 sm:w-2")} />)}</div><button type="button" onClick={next} disabled={activeSlide === totalSlides - 1} className="shrink-0 text-[9px] tracking-widest transition-colors hover:text-[#E74727] disabled:opacity-25 sm:text-xs">NEXT / بعدی →</button></footer>
    </main>
  );
}
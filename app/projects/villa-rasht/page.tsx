
"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const gallery = [
  {
    src: "/images/rasht render 02.png",
    en: "Exterior View",
    fa: "نمای بیرونی",
    type: "image",
  },
  {
    src: "/images/rasht dakheli 02.png",
    en: "Interior Design",
    fa: "طراحی داخلی",
    type: "image",
  },
  {
    src: "/images/rasht render 03.png",
    en: "Architectural Visualization",
    fa: "تجسم معماری",
    type: "image",
  },
  {
    src: "/images/rasht diagram 03.png",
    en: "Design Development",
    fa: "روند شکل‌گیری طرح",
    type: "image",
  },
  {
    src: "/images/rasht diagram 01.png",
    en: "Concept Diagram",
    fa: "دیاگرام مفهومی",
    type: "image",
  },
  {
    src: "/images/rasht dakheli 03.png",
    en: "Interior Atmosphere",
    fa: "فضای داخلی",
    type: "image",
  },
  {
    src: "/images/rasht plan.pdf",
    en: "Floor Plan",
    fa: "پلان معماری",
    type: "pdf",
  },
  {
    src: "/images/rasht deatail 01.jpg",
    en: "Architectural Detail 01",
    fa: "دیتیل معماری ۰۱",
    type: "image",
  },
  {
    src: "/images/rasht dakheli 01.png",
    en: "Interior Design",
    fa: "طراحی داخلی",
    type: "image",
  },
  {
    src: "/images/rasht deatail 02.jpg",
    en: "Architectural Detail 02",
    fa: "دیتیل معماری ۰۲",
    type: "image",
  },
  {
    src: "/images/rasht boresh.pdf",
    en: "Building Section",
    fa: "برش معماری",
    type: "pdf",
  },
  {
    src: "/images/rasht deatail 03.jpg",
    en: "Architectural Detail 03",
    fa: "دیتیل معماری ۰۳",
    type: "image",
  },
];

export default function VillaRasht() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);

  useEffect(() => {
    const element = galleryRef.current;
    if (!element) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key !== "ArrowLeft" &&
        event.key !== "ArrowRight"
      ) {
        return;
      }

      const target = event.target as HTMLElement | null;
      if (
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable
      ) {
        return;
      }

      event.preventDefault();

      const direction = event.key === "ArrowRight" ? 1 : -1;
      element.scrollBy({
        left: direction * element.clientWidth * 0.8,
        behavior: "smooth",
      });
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const scrollGallery = (direction: number) => {
    galleryRef.current?.scrollBy({
      left: direction * (galleryRef.current.clientWidth * 0.8),
      behavior: "smooth",
    });
  };

  const handlePointerDown = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    if (event.pointerType === "touch") return;

    isDragging.current = true;
    startX.current = event.clientX;
    startScroll.current = galleryRef.current?.scrollLeft ?? 0;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    if (!isDragging.current || !galleryRef.current) return;

    const distance = event.clientX - startX.current;
    galleryRef.current.scrollLeft = startScroll.current - distance;
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO — unchanged */}
      <section className="relative h-[85svh] min-h-[520px] w-full md:h-screen">
        <Image
          src="/images/villa-rasht.png"
          alt="Villa Rasht"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute bottom-10 left-6 md:bottom-14 md:left-14">
          <h1 className="text-5xl font-extralight tracking-wide md:text-7xl">
            Villa Rasht
          </h1>
          <p className="mt-3 text-xs tracking-[0.3em] text-zinc-300 md:text-sm">
            RESIDENTIAL PROJECT / 2026
          </p>
        </div>
      </section>

      {/* CONCEPT */}
      <section className="max-w-4xl px-6 py-16 md:px-14 md:py-24">
        <h2 className="mb-6 text-xs tracking-[0.4em] text-zinc-500">
          CONCEPT
        </h2>

        <p className="text-sm leading-8 text-zinc-300 md:text-base">
          A contemporary villa design exploring spatial quality, materiality,
          and the relationship between architecture and nature.
        </p>

        <p
          dir="rtl"
          className="mt-4 text-sm leading-8 text-zinc-400 md:text-base"
        >
          طراحی ویلایی معاصر با تأکید بر کیفیت فضا، انتخاب مصالح و ارتباط
          معماری با طبیعت.
        </p>
      </section>

      {/* HORIZONTAL GALLERY */}
      <section className="pb-20">
        <div className="mb-6 flex items-center justify-between px-5 md:px-10 lg:px-14">
          <div>
            <h2 className="text-xs tracking-[0.3em] text-zinc-400">
              PROJECT GALLERY
            </h2>
            <p className="mt-2 text-xs text-zinc-600">
              Scroll or drag to explore
            </p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollGallery(-1)}
              aria-label="Previous images"
              className="flex h-10 w-10 items-center justify-center border border-zinc-700 text-xl transition hover:border-white hover:bg-white hover:text-black"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollGallery(1)}
              aria-label="Next images"
              className="flex h-10 w-10 items-center justify-center border border-zinc-700 text-xl transition hover:border-white hover:bg-white hover:text-black"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={galleryRef}
          tabIndex={0}
          aria-label="Villa Rasht project gallery. Use left and right arrow keys to navigate."
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onLostPointerCapture={handlePointerUp}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain px-5 pb-5 outline-none cursor-grab active:cursor-grabbing md:gap-8 md:px-10 lg:px-14"
          style={{ scrollbarWidth: "thin" }}
        >
          {gallery.map((item, index) => (
            <article
              key={item.src}
              className="w-[86vw] flex-none snap-start sm:w-[72vw] md:w-[62vw] lg:w-[58vw] xl:w-[54vw]"
            >
              <div className="flex h-[55svh] min-h-[320px] max-h-[680px] items-center justify-center overflow-hidden bg-zinc-950 md:h-[68svh]">
                {item.type === "pdf" ? (
                  <iframe
                    src={encodeURI(item.src) + "#toolbar=1&navpanes=0"}
                    title={item.en}
                    className="h-full w-full bg-white"
                    draggable={false}
                  />
                ) : (
                  <a
                    href={encodeURI(item.src)}
                    target="_blank"
                    rel="noreferrer"
                    draggable={false}
                    onClick={(event) => {
                      if (isDragging.current) event.preventDefault();
                    }}
                    className="flex h-full w-full items-center justify-center"
                  >
                    <Image
                      src={encodeURI(item.src)}
                      alt={item.en}
                      width={2400}
                      height={1600}
                      sizes="(max-width: 768px) 86vw, 62vw"
                      draggable={false}
                      className="h-full w-full select-none object-contain"
                    />
                  </a>
                )}
              </div>

              <div className="flex items-start justify-between gap-4 border-t border-zinc-800 pt-4">
                <div>
                  <h3 className="text-sm tracking-wide text-zinc-200 md:text-base">
                    {item.en}
                  </h3>
                  <p
                    dir="rtl"
                    className="mt-2 text-sm leading-7 text-zinc-400"
                  >
                    {item.fa}
                  </p>

                  {item.type === "pdf" && (
                    <a
                      href={encodeURI(item.src)}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-block text-xs text-zinc-500 transition hover:text-white"
                      onPointerDown={(event) => event.stopPropagation()}
                    >
                      Open PDF ↗
                    </a>
                  )}
                </div>

                <span className="pt-1 text-xs tracking-widest text-zinc-600">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(gallery.length).padStart(2, "0")}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-zinc-800 px-6 py-8 md:px-14">
        <p className="text-xs tracking-[0.2em] text-zinc-500">
          BAMDA / ARCHITECTURE STUDIO
        </p>
      </footer>
    </main>
  );
}

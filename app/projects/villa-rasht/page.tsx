
"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const gallery = [
  {
    src: "/images/villa-rasht.png",
    en: "Main Render",
    fa: "رندر اصلی",
    type: "image",
  },
  {
    src: "/images/rasht render 02.png",
    en: "Exterior Render 02",
    fa: "رندر خارجی ۰۲",
    type: "image",
  },
  {
    src: "/images/rasht render 03.png",
    en: "Exterior Render 03",
    fa: "رندر خارجی ۰۳",
    type: "image",
  },
  {
    src: "/images/rasht dakheli 01.png",
    en: "Interior Design 01",
    fa: "طراحی داخلی ۰۱",
    type: "image",
  },
  {
    src: "/images/rasht dakheli 02.png",
    en: "Interior Design 02",
    fa: "طراحی داخلی ۰۲",
    type: "image",
  },
  {
    src: "/images/rasht dakheli 03.png",
    en: "Interior Design 03",
    fa: "طراحی داخلی ۰۳",
    type: "image",
  },
  {
    src: "/images/rasht deatail 01.jpg",
    en: "Architectural Detail 01",
    fa: "دیتیل معماری ۰۱",
    type: "image",
  },
  {
    src: "/images/rasht deatail 02.jpg",
    en: "Architectural Detail 02",
    fa: "دیتیل معماری ۰۲",
    type: "image",
  },
  {
    src: "/images/rasht deatail 03.jpg",
    en: "Architectural Detail 03",
    fa: "دیتیل معماری ۰۳",
    type: "image",
  },
  {
    src: "/images/rasht diagram 01.png",
    en: "Concept Diagram",
    fa: "دیاگرام مفهومی",
    type: "image",
  },
  {
    src: "/images/rasht diagram 02.png",
    en: "Design Diagram 02",
    fa: "دیاگرام طراحی ۰۲",
    type: "image",
  },
  {
    src: "/images/rasht diagram 03.png",
    en: "Design Development",
    fa: "روند شکل‌گیری طرح",
    type: "image",
  },
  {
    src: "/images/rasht plan.pdf",
    en: "Floor Plan",
    fa: "پلان معماری",
    type: "pdf",
  },
  {
    src: "/images/rasht boresh.pdf",
    en: "Building Section",
    fa: "برش معماری",
    type: "pdf",
  },
];

export default function VillaRasht() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);

  const scrollGallery = (direction: number) => {
    const element = galleryRef.current;
    if (!element) return;

    element.scrollBy({
      left: direction * element.clientWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
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
      scrollGallery(event.key === "ArrowRight" ? 1 : -1);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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

    galleryRef.current.scrollLeft =
      startScroll.current - (event.clientX - startX.current);
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-5 pb-12 pt-8 md:px-10 md:pt-12 lg:px-14">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-extralight tracking-wide md:text-5xl">
              Villa Rasht
            </h1>

            <p className="mt-3 text-xs tracking-[0.25em] text-zinc-400">
              RESIDENTIAL PROJECT / 2026
            </p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollGallery(-1)}
              aria-label="Previous slide"
              className="flex h-10 w-10 items-center justify-center border border-zinc-700 text-xl transition hover:bg-white hover:text-black"
            >
              ←
            </button>

            <button
              type="button"
              onClick={() => scrollGallery(1)}
              aria-label="Next slide"
              className="flex h-10 w-10 items-center justify-center border border-zinc-700 text-xl transition hover:bg-white hover:text-black"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={galleryRef}
          tabIndex={0}
          aria-label="Villa Rasht project gallery"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onLostPointerCapture={handlePointerUp}
          className="flex snap-x snap-mandatory gap-0 overflow-x-auto overscroll-x-contain outline-none cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none" }}
        >
          {gallery.map((item, index) => (
            <article
              key={item.src}
              className="w-full flex-none snap-start"
            >
              <div className="flex h-[58svh] min-h-[320px] max-h-[760px] items-center justify-center overflow-hidden bg-zinc-950 md:h-[72svh]">
                {item.type === "pdf" ? (
                  <iframe
                    src={`${encodeURI(item.src)}#toolbar=1&navpanes=0`}
                    title={item.en}
                    className="h-full w-full bg-white"
                  />
                ) : (
                  <a
                    href={encodeURI(item.src)}
                    target="_blank"
                    rel="noreferrer"
                    draggable={false}
                    onClick={(event) => {
                      if (isDragging.current) {
                        event.preventDefault();
                      }
                    }}
                    className="flex h-full w-full items-center justify-center"
                  >
                    <Image
                      src={item.src}
                      alt={item.en}
                      width={2400}
                      height={1600}
                      sizes="100vw"
                      priority={index === 0}
                      draggable={false}
                      className="h-full w-full select-none object-contain"
                    />
                  </a>
                )}
              </div>

              <div className="flex items-start justify-between gap-4 border-t border-zinc-800 pt-4">
                <div>
                  <h2 className="text-sm tracking-wide text-zinc-200 md:text-base">
                    {item.en}
                  </h2>

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

      <footer className="border-t border-zinc-800 px-6 py-8 md:px-14">
        <p className="text-xs tracking-[0.2em] text-zinc-500">
          BAMDA / ARCHITECTURE STUDIO
        </p>
      </footer>
    </main>
  );
}

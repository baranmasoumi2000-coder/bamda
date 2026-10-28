import Image from "next/image";

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
  return (
    <main className="bg-black text-white">
      {/* HERO */}
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
          <p className="mt-2 text-sm tracking-[0.3em] text-zinc-400">
            Residential Project / 2026
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
          className="mt-3 text-sm leading-8 text-zinc-400 md:text-base"
        >
          طراحی ویلایی معاصر با تأکید بر کیفیت فضا، مصالح و ارتباط معماری با طبیعت.
        </p>
      </section>

      {/* PROJECT GALLERY */}
      <section className="space-y-16 px-4 pb-20 md:space-y-24 md:px-10 lg:px-14">
        {gallery.map((item, index) => (
          <article key={item.src} className="w-full">
            {item.type === "pdf" ? (
              <iframe
                src={`${encodeURI(item.src)}#toolbar=1&navpanes=0`}
                title={item.en}
                className="h-[70svh] min-h-[450px] w-full bg-white md:h-[85svh]"
              />
            ) : (
              <a
                href={encodeURI(item.src)}
                target="_blank"
                rel="noreferrer"
                className="block w-full"
              >
                <Image
                  src={encodeURI(item.src)}
                  alt={item.en}
                  width={2400}
                  height={1600}
                  sizes="100vw"
                  className="h-auto w-full object-contain"
                />
              </a>
            )}

            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xs tracking-wide text-zinc-200 md:text-sm">
                  {item.en}
                </h3>
                <p
                  dir="rtl"
                  className="mt-1 text-xs leading-6 text-zinc-400 md:text-sm"
                >
                  {item.fa}
                </p>
              </div>

              <span className="text-[10px] tracking-widest text-zinc-600">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            {item.type === "pdf" && (
              <a
                href={encodeURI(item.src)}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-xs text-zinc-500 hover:text-white"
              >
                Open PDF ↗
              </a>
            )}
          </article>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 px-6 py-8 md:px-14">
        <p className="text-xs tracking-[0.2em] text-zinc-500">
          BAMDA / ARCHITECTURE STUDIO
        </p>
      </footer>
    </main>
  );
}

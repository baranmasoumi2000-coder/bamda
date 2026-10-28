import Link from "next/link";

const images = Array.from({ length: 9 }, (_, index) => ({
  src: `https://bamda-dkmer4wk8-bamda.vercel.app/images/abas%20khani/${String(index + 1).padStart(2, "0")}.png`,
  alt: `Abas Khani Residence — view ${String(index + 1).padStart(2, "0")}`,
}));

export default function AbasKhaniResidence() {
  return (
    <main className="min-h-screen bg-[#E7E3DA] text-[#292B29]">
      <section className="relative flex min-h-[65svh] items-end overflow-hidden bg-[#292B29] text-white sm:min-h-[78svh]">
        <img
          src={images[0].src}
          alt={images[0].alt}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" />
        <div className="relative z-10 px-6 pb-10 sm:px-12 sm:pb-14 lg:px-20">
          <p className="mb-4 text-[10px] tracking-[0.3em] text-white/75">BAMDA / RESIDENTIAL INTERIOR</p>
          <h1 className="text-4xl font-light tracking-wide sm:text-7xl">Abas Khani Residence</h1>
          <p className="mt-3 text-xs tracking-[0.2em] text-white/70">IRAN / 2026</p>
        </div>
      </section>

      <section className="max-w-4xl px-6 py-16 sm:px-12 sm:py-24">
        <p className="mb-5 text-[10px] tracking-[0.3em] text-[#E74727]">THE PROJECT</p>
        <p className="text-base font-light leading-8 text-[#55534E] sm:text-lg sm:leading-9">
          A contemporary residential project exploring the relationship between materiality, light, and the atmosphere of everyday living.
        </p>
      </section>

      <section className="space-y-10 px-4 pb-20 sm:space-y-16 sm:px-10 lg:px-14">
        {images.map((image, index) => (
          <figure key={image.src}>
            <img src={image.src} alt={image.alt} loading={index === 0 ? "eager" : "lazy"} className="h-auto w-full object-contain" />
            <figcaption className="mt-3 flex justify-between text-[10px] tracking-[0.15em] text-[#77736D]">
              <span>ABAS KHANI RESIDENCE</span>
              <span>{String(index + 1).padStart(2, "0")}</span>
            </figcaption>
          </figure>
        ))}
      </section>

      <footer className="flex items-center justify-between border-t border-[#292B29]/15 px-6 py-8 sm:px-12">
        <span className="text-[10px] tracking-[0.2em] text-[#77736D]">BAMDA ARCHITECTURE STUDIO</span>
        <Link href="/projects" className="text-xs hover:text-[#E74727]">← ALL PROJECTS</Link>
      </footer>
    </main>
  );
}

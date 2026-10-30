"use client";

import Header from "@/components/Header";

type ComingSoonProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  persianTitle: string;
};

export default function ComingSoon({
  eyebrow,
  title,
  subtitle,
  persianTitle,
}: ComingSoonProps) {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-[#E7E3DA] text-[#292B29]">
      <Header />
      <section className="relative flex flex-1 items-center justify-center px-6 pb-16 pt-28 text-center">
        <div className="pointer-events-none absolute inset-0 opacity-[0.16]">
          <div className="absolute left-1/2 top-1/2 h-[min(72vw,620px)] w-[min(72vw,620px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#292B29]" />
          <div className="absolute left-1/2 top-1/2 h-[min(52vw,440px)] w-[min(52vw,440px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#292B29]" />
          <div className="absolute left-1/2 top-1/2 h-px w-[min(90vw,900px)] -translate-x-1/2 bg-[#292B29]" />
          <div className="absolute left-1/2 top-1/2 h-[min(90vw,900px)] w-px -translate-y-1/2 bg-[#292B29]" />
        </div>
        <div className="relative z-10 max-w-3xl">
          <p className="mb-8 text-[10px] tracking-[0.35em] text-[#E74727] sm:text-xs">
            {eyebrow}
          </p>
          <h1 className="text-4xl font-light tracking-[0.12em] sm:text-6xl md:text-7xl">
            {title}
          </h1>
          <p className="mt-5 text-sm leading-8 text-[#77736D] sm:text-base">
            {persianTitle}
          </p>
          <div className="mx-auto my-10 h-px w-16 bg-[#E74727]" />
          <p className="text-[11px] tracking-[0.28em] text-[#292B29] sm:text-xs">
            COMING SOON
          </p>
          <p className="mt-4 text-xs leading-7 text-[#77736D] sm:text-sm">
            {subtitle}
          </p>
          <p className="mt-12 text-[9px] tracking-[0.25em] text-[#99948B]">
            BAMDA / ARCHITECTURE STUDIO
          </p>
        </div>
      </section>
    </main>
  );
}

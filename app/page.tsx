
import Link from "next/link";
import Header from "@/components/Header";

const projects = [
  {
    number: "01",
    title: "Villa Rasht",
    category: "RESIDENTIAL",
    location: "SARAVAN, RASHT, IRAN",
    image: "/images/villa-rasht.png",
    description:
      "بازطراحی یک سازه موجود با تأکید بر پیوند میان معماری، طبیعت و اقلیم شمال ایران.",
  },
  {
    number: "02",
    title: "Yousefi Residence",
    category: "RESIDENTIAL INTERIOR",
    location: "SHAHRAK-E GHARB, TEHRAN",
    image: "/images/yousefi/yousefi 01.png",
    description:
      "طراحی داخلی معاصر یک واحد مسکونی با تأکید بر مصالح آرام، نورپردازی گرم و آسایش روزمره.",
  },
  {
    number: "03",
    title: "Mohammadi Café",
    category: "CAFÉ DESIGN",
    location: "KORDAN, IRAN",
    image: "/images/mohammadi/01.png",
    description:
      "طراحی کافه‌ای در کردان با تمرکز بر تجربه‌ی فضا و حال‌وهوای محیط.",
  },
  {
    number: "04",
    title: "Abas Khani Residence",
    category: "RESIDENTIAL INTERIOR",
    location: "IRAN",
    image: "https://bamda-dkmer4wk8-bamda.vercel.app/images/abas%20khani/01.png",
    description:
      "طراحی داخلی معاصر با تأکید بر متریال، نور و کیفیت تجربه‌ی فضای مسکونی.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#E7E3DA] text-[#292B29]">
      <Header />

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-[85svh] w-full items-center justify-center overflow-hidden bg-[#292B29] text-white sm:min-h-screen"
      >
        <img
          src="/images/villa-rasht.png"
          alt="Villa Rasht — BAMDA Architecture Studio"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 px-5 text-center">
          <p className="mb-6 text-[10px] tracking-[0.4em] text-white/75 sm:text-xs">
            CONTEMPORARY ARCHITECTURE
          </p>

          <h1 className="text-5xl font-extralight tracking-[0.28em] sm:text-7xl sm:tracking-[0.4em] md:text-9xl">
            BAMDA
          </h1>

          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-white/85 sm:text-sm sm:tracking-[0.4em]">
            Architecture Studio
          </p>

          <a
            href="#projects"
            className="mt-12 inline-flex items-center gap-4 border border-white/60 px-6 py-4 text-[10px] tracking-[0.2em] transition-colors hover:border-[#E74727] hover:bg-[#E74727]"
          >
            EXPLORE OUR WORK <span className="text-lg">↓</span>
          </a>
        </div>

        <p className="absolute bottom-7 left-6 text-[9px] tracking-[0.25em] text-white/70 sm:left-10">
          SELECTED WORKS / 2026
        </p>

        <p className="absolute bottom-7 right-6 text-[9px] tracking-[0.2em] text-white/70 sm:right-10">
          ARCHITECTURE · INTERIORS · DESIGN
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-4 pb-24 pt-20 sm:px-8 sm:pb-32 sm:pt-28 lg:px-12">
        <div className="mb-12 flex items-end justify-between gap-5 border-b border-[#292B29]/20 pb-6 sm:mb-16">
          <div>
            <p className="mb-3 text-[10px] tracking-[0.3em] text-[#E74727]">
              BAMDA / SELECTED WORKS
            </p>
            <h2 className="text-4xl font-light tracking-[0.12em] sm:text-6xl">
              PROJECTS
            </h2>
          </div>

          <p className="hidden text-xs tracking-widest text-[#77736D] sm:block">
            OUR SELECTED PROJECTS
          </p>
        </div>

        <div className="flex flex-col gap-20 sm:gap-28 lg:gap-36">
          {projects.map((project) => (
            <article key={project.number}>
              <Link
                href={project.number === "03" ? "/projects/mohammadi" : project.number === "04" ? "/projects/abas-khani" : "/projects"}
                className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E74727]"
                aria-label={`Explore ${project.title}`}
              >
                <div className="relative h-[65svh] min-h-[380px] max-h-[900px] overflow-hidden bg-[#D5D0C6] sm:h-[78svh] lg:h-[85svh]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

                  <span className="absolute left-5 top-5 text-xs tracking-[0.2em] text-white sm:left-10 sm:top-10">
                    {project.number} / 04
                  </span>

                  <span className="absolute bottom-6 left-5 text-[10px] tracking-[0.2em] text-white sm:bottom-10 sm:left-10">
                    DISCOVER PROJECT ↙
                  </span>

                  <span className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/70 text-xl text-white transition-colors group-hover:border-[#E74727] group-hover:bg-[#E74727] sm:bottom-10 sm:right-10 sm:h-14 sm:w-14">
                    ↙
                  </span>
                </div>

                <div className="mt-5 flex items-start justify-between gap-5 sm:mt-7">
                  <div>
                    <h3 className="text-3xl font-light tracking-wide sm:text-5xl">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-[10px] tracking-[0.14em] text-[#77736D] sm:text-xs sm:tracking-[0.18em]">
                      {project.category} / {project.location}
                    </p>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-[#55534E] sm:text-base">
                      {project.description}
                    </p>
                  </div>

                  <span className="mt-1 text-2xl transition-transform duration-300 group-hover:-translate-x-2 sm:text-3xl">
                    ←
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-t border-[#292B29]/15 px-6 py-24 sm:px-12 sm:py-32 lg:px-24"
      >
        <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
          <div>
            <p className="mb-4 text-[10px] tracking-[0.3em] text-[#E74727]">
              WHO WE ARE
            </p>
            <h2 className="text-4xl font-light tracking-wide sm:text-6xl">
              ABOUT BAMDA
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-lg font-light leading-9 text-[#55534E] sm:text-xl sm:leading-10">
              بامدا یک استودیوی معماری است که طراحی را از دل نیازهای واقعی،
              کیفیت تجربه فضا و ارتباط میان انسان و محیط پیرامون شکل می‌دهد.
              رویکرد ما بر خلق فضاهایی معاصر، کاربردی و هماهنگ با زمینه هر
              پروژه استوار است.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-4 border-b border-[#292B29]/30 pb-3 text-[10px] tracking-[0.2em] transition-colors hover:border-[#E74727] hover:text-[#E74727]"
            >
              MORE ABOUT BAMDA <span className="text-lg">←</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section
        id="contact"
        className="bg-[#292B29] px-6 py-20 text-[#E7E3DA] sm:px-12 sm:py-28 lg:px-24"
      >
        <p className="mb-5 text-[10px] tracking-[0.3em] text-[#E74727]">
          HAVE A PROJECT IN MIND?
        </p>

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <h2 className="max-w-3xl text-4xl font-light leading-tight sm:text-6xl lg:text-7xl">
            Let&apos;s create something meaningful.
          </h2>

          <Link
            href="/contact"
            className="inline-flex w-fit items-center gap-5 border border-white/40 px-6 py-4 text-[10px] tracking-[0.2em] transition-colors hover:border-[#E74727] hover:bg-[#E74727]"
          >
            CONTACT BAMDA <span className="text-lg">↗</span>
          </Link>
        </div>

        <div className="mt-20 flex flex-col justify-between gap-4 border-t border-white/20 pt-6 text-[10px] tracking-[0.15em] text-white/60 sm:flex-row">
          <p>BAMDA ARCHITECTURE STUDIO</p>
          <p>ARCHITECTURE · INTERIORS · DESIGN</p>
        </div>
      </section>
    </main>
  );
}

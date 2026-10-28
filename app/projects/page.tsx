
"use client";

import {
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useSearchParams } from "next/navigation";

type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  description: string;
  sections: {
    eyebrow: string;
    title: string;
    body: string;
  }[];
};

const projects: Project[] = [
  {
    slug: "villa-rasht",
    title: "Villa Rasht",
    category: "RESIDENTIAL",
    location: "RASHT, IRAN",
    year: "2026",
    image: "/images/villa-rasht.png",
    description:
      "A home shaped by the landscape, regional character, and the experience of everyday living.",
    sections: [
      {
        eyebrow: "01 / THE PROJECT",
        title: "A Different Way to Experience Home",
        body:
          "Villa Rasht is a redesign of an existing structure, approximately ten years old. The project brings architecture, interiors, and the surrounding landscape together to create a more connected and considered living experience.",
      },
      {
        eyebrow: "02 / THE EXPERIENCE",
        title: "Living with the Landscape",
        body:
          "The valley view is one of the defining qualities of the home. Full-height windows frame the landscape and bring natural light and a stronger visual connection with the outdoors into everyday living spaces. A large kitchen window extends this experience into the heart of the home.",
      },
      {
        eyebrow: "03 / CLIMATE & COMFORT",
        title: "Designed for Northern Iran",
        body:
          "The design responds to the region's distinctive climate and wind-driven rain. Openings are avoided on the façade exposed to oblique rainfall, while the roof is inclined toward that side to help reduce direct exposure. These decisions support a more thoughtful relationship between the home and its environment.",
      },
      {
        eyebrow: "04 / DESIGN APPROACH",
        title: "Regional Character, Contemporary Living",
        body:
          "Inspired by the spatial qualities of traditional houses in northern Iran, the project explores how regional architectural character can inform contemporary living. The aim is to balance openness, comfort, privacy, and a lasting connection with nature.",
      },
    ],
  },
  {
    slug: "yousefi",
    title: "Yousefi Residence",
    category: "RESIDENTIAL INTERIOR",
    location: "SHAHRAK-E GHARB, TEHRAN",
    year: "",
    image: "/images/yousefi/yousefi 01.png",
    description:
      "A contemporary residential interior shaped around calm materials, warm lighting, and everyday comfort.",
    sections: [
      {
        eyebrow: "01 / THE PROJECT",
        title: "A Calm, Contemporary Interior",
        body:
          "An interior design project for a residential unit in Shahrak-e Gharb, Tehran, presented through rendered views of the main living and private spaces.",
      },
      {
        eyebrow: "02 / LIVING & DINING",
        title: "Spaces for Gathering",
        body:
          "The TV room and dining area bring together the main shared spaces, with dedicated views highlighting the ceiling lighting detail and the decorative console.",
      },
      {
        eyebrow: "03 / PRIVATE SPACES",
        title: "Everyday Rituals",
        body:
          "The presentation continues through the entrance dressing area, kitchen, and bedrooms, including a close view of the bedroom flooring.",
      },
    ],
  },
  {
    slug: "mohammadi",
    title: "Mohammadi Café",
    category: "CAFÉ DESIGN",
    location: "KORDAN, IRAN",
    year: "2026",
    image: "/images/mohammadi/01.png",
    description:
      "طراحی کافه‌ای در کردان با تمرکز بر تجربه‌ی فضا، متریال و ارتباط محیط داخلی با بستر طبیعی.",
    sections: [
      {
        eyebrow: "01 / THE PROJECT",
        title: "Mohammadi Café",
        body:
          "A café design project in Kordan, Iran, presented through a concise series of architectural images.",
      },
      {
        eyebrow: "02 / DESIGN APPROACH",
        title: "Space, Material, Experience",
        body:
          "The project explores the atmosphere of a café through its spatial composition, material choices, and relationship with its surroundings.",
      },
    ],
  },

];

function ProjectsContent() {
  const searchParams = useSearchParams();
  const requestedProject = searchParams.get("project");

  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState(0);

  const wheelLock = useRef(false);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const project =
    activeProject !== null ? projects[activeProject] : null;

  const totalSections = project ? project.sections.length + 1 : 0;

  const openProject = useCallback((index: number) => {
    setActiveProject(index);
    setActiveSection(0);
  }, []);

  const closeProject = useCallback(() => {
    setActiveProject(null);
    setActiveSection(0);

    window.history.replaceState(
      window.history.state,
      "",
      window.location.pathname
    );
  }, []);

  const nextSection = useCallback(() => {
    setActiveSection((current) =>
      Math.min(current + 1, totalSections - 1)
    );
  }, [totalSections]);

  const previousSection = useCallback(() => {
    setActiveSection((current) => Math.max(current - 1, 0));
  }, []);

  useEffect(() => {
    if (!requestedProject) {
      setActiveProject(null);
      setActiveSection(0);
      return;
    }

    const projectIndex = projects.findIndex(
      (item) => item.slug === requestedProject
    );

    if (projectIndex !== -1) {
      setActiveProject(projectIndex);
      setActiveSection(0);
    } else {
      setActiveProject(null);
      setActiveSection(0);
    }
  }, [requestedProject]);

  useEffect(() => {
    if (activeProject === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeProject();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        previousSection();
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        nextSection();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    activeProject,
    closeProject,
    nextSection,
    previousSection,
  ]);

  const handleWheel = (
    event: React.WheelEvent<HTMLDivElement>
  ) => {
    if (wheelLock.current) return;

    const delta =
      Math.abs(event.deltaX) > Math.abs(event.deltaY)
        ? event.deltaX
        : event.deltaY;

    if (Math.abs(delta) < 20) return;

    wheelLock.current = true;

    if (delta > 0) {
      nextSection();
    } else {
      previousSection();
    }

    window.setTimeout(() => {
      wheelLock.current = false;
    }, 650);
  };

  const handleTouchStart = (
    event: React.TouchEvent<HTMLDivElement>
  ) => {
    touchStartX.current = event.touches[0].clientX;
    touchStartY.current = event.touches[0].clientY;
  };

  const handleTouchEnd = (
    event: React.TouchEvent<HTMLDivElement>
  ) => {
    const deltaX =
      event.changedTouches[0].clientX - touchStartX.current;
    const deltaY =
      event.changedTouches[0].clientY - touchStartY.current;

    if (
      Math.abs(deltaX) < 45 ||
      Math.abs(deltaX) < Math.abs(deltaY)
    ) {
      return;
    }

    if (deltaX < 0) {
      nextSection();
    } else {
      previousSection();
    }
  };

  return (
    <main className="min-h-screen bg-[#E7E3DA] text-[#292B29]">
      <section className="px-4 pb-20 pt-28 sm:px-8 sm:pt-32 lg:px-12">
        <div className="mb-12 flex items-end justify-between gap-6 border-b border-[#292B29]/20 pb-6 sm:mb-16">
          <div>
            <p className="mb-3 text-[10px] tracking-[0.35em] text-[#E74727]">
              BAMDA / SELECTED WORKS
            </p>

            <h1 className="text-4xl font-light tracking-[0.16em] sm:text-6xl">
              PROJECTS
            </h1>
          </div>

          <p className="hidden text-xs tracking-[0.15em] text-[#77736D] sm:block">
            ARCHITECTURE · INTERIORS · DESIGN
          </p>
        </div>

        <div className="flex flex-col gap-20 sm:gap-28 lg:gap-36">
          {projects.map((item, index) => (
            <article key={item.slug} className="w-full">
              <button
                type="button"
                onClick={() => {
                  if (item.slug === "yousefi") {
                    window.location.href = "/projects/yousefi";
                    return;
                  }

                  if (item.slug === "villa-rasht") {
                    window.location.href = "/projects/villa-rasht";
                    return;
                  }

                  if (item.slug === "mohammadi") {
                    window.location.href = "/projects/mohammadi";
                    return;
                  }

                  openProject(index);
                }}
                className="group block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E74727]"
                aria-label={`Open ${item.title} project`}
              >
                <div className="relative h-[62svh] min-h-[360px] max-h-[850px] overflow-hidden bg-[#D5D0C6] sm:h-[72vh] lg:h-[82vh]">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10 transition-opacity duration-500 group-hover:from-black/55" />

                  <div className="absolute bottom-6 left-5 flex items-center gap-3 text-white sm:bottom-10 sm:left-10">
                    <span className="text-xs tracking-[0.2em]">
                      String(index + 1).padStart(2, "0")
                    </span>

                    <span className="h-px w-8 bg-white/80" />

                    <span className="text-[10px] tracking-[0.2em]">
                      DISCOVER PROJECT
                    </span>
                  </div>

                  <span className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/70 text-xl text-white transition-all duration-300 group-hover:border-[#E74727] group-hover:bg-[#E74727] sm:right-10 sm:top-10">
                    ↙
                  </span>
                </div>

                <div className="mt-5 flex items-start justify-between gap-5 sm:mt-7">
                  <div>
                    <h2 className="text-2xl font-light tracking-wide sm:text-4xl lg:text-5xl">
                      {item.title}
                    </h2>

                    <p className="mt-3 text-[10px] tracking-[0.12em] text-[#77736D] sm:text-xs sm:tracking-[0.16em]">
                      {item.category} / {item.location}
                      {item.year ? ` / ${item.year}` : ""}
                    </p>
                  </div>

                  <span className="mt-1 text-2xl font-light transition-transform duration-300 group-hover:-translate-x-2 sm:text-3xl">
                    ←
                  </span>
                </div>
              </button>
            </article>
          ))}
        </div>

        <div className="mt-24 border-t border-[#292B29]/20 pt-5">
          <p className="text-[10px] tracking-[0.2em] text-[#77736D]">
            BAMDA ARCHITECTURE STUDIO
          </p>
        </div>
      </section>

      {project && (
        <div
          className="fixed inset-0 z-[100] overflow-hidden bg-[#E7E3DA] text-[#292B29]"
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} project presentation`}
        >
          <header className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between gap-3 px-4 py-5 sm:px-10">
            <button
              type="button"
              onClick={closeProject}
              className="flex shrink-0 items-center gap-2 text-[10px] tracking-[0.12em] transition-colors hover:text-[#E74727] sm:gap-3 sm:tracking-[0.2em]"
            >
              <span className="text-xl">×</span>
              CLOSE
            </button>

            <p className="min-w-0 truncate text-center text-[9px] tracking-[0.1em] sm:text-[10px] sm:tracking-[0.2em]">
              BAMDA <span className="text-[#E74727]">/</span>{" "}
              {project.title.toUpperCase()}
            </p>

            <span className="shrink-0 text-[10px] tabular-nums tracking-widest">
              {String(activeSection + 1).padStart(2, "0")} /{" "}
              {String(totalSections).padStart(2, "0")}
            </span>
          </header>

          <div
            className="flex h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              transform: `translateX(-${activeSection * 100}vw)`,
            }}
          >
            <section className="relative h-full w-screen flex-none overflow-hidden bg-[#292B29] text-white">
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/25" />

              <div className="absolute bottom-28 left-6 right-6 sm:bottom-28 sm:left-12 lg:left-20">
                <p className="mb-5 text-[10px] tracking-[0.2em] text-white/75 sm:tracking-[0.3em]">
                  {project.category} / {project.location}
                </p>

                <h2 className="max-w-5xl text-4xl font-light tracking-wide sm:text-7xl lg:text-8xl">
                  {project.title}
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/85 sm:text-base">
                  {project.description}
                </p>
              </div>

              <button
                type="button"
                onClick={nextSection}
                className="absolute bottom-24 right-6 flex items-center gap-3 text-[9px] tracking-[0.12em] sm:right-12 sm:gap-4 sm:text-[10px] sm:tracking-[0.2em]"
              >
                EXPLORE PROJECT <span className="text-xl">←</span>
              </button>
            </section>

            {project.sections.map((section, index) => (
              <section
                key={section.eyebrow}
                className="flex h-full w-screen flex-none items-center overflow-y-auto px-6 pb-24 pt-24 sm:px-12 lg:px-24"
              >
                <div className="grid w-full max-w-7xl grid-cols-1 items-center gap-8 md:grid-cols-[0.7fr_1.3fr] lg:gap-24">
                  <div>
                    <p className="mb-6 text-[10px] tracking-[0.2em] text-[#E74727] sm:mb-8 sm:tracking-[0.25em]">
                      {section.eyebrow}
                    </p>

                    <h2 className="max-w-lg text-3xl font-light leading-tight sm:text-5xl lg:text-7xl">
                      {section.title}
                    </h2>

                    <div className="mt-8 h-px w-16 bg-[#E74727] sm:mt-10" />
                  </div>

                  <div className="max-w-2xl">
                    <p className="text-sm font-light leading-7 text-[#55534E] sm:text-lg sm:leading-9">
                      {section.body}
                    </p>

                    <p className="mt-8 text-[9px] tracking-[0.15em] text-[#969087] sm:mt-10 sm:text-[10px] sm:tracking-[0.2em]">
                      {project.title.toUpperCase()}{" "}
                      <span className="mx-2 text-[#E74727]">/</span>
                      {String(index + 2).padStart(2, "0")}
                    </p>
                  </div>
                </div>
              </section>
            ))}
          </div>

          <footer className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between gap-2 border-t border-[#292B29]/10 bg-[#E7E3DA]/95 px-4 py-4 backdrop-blur-sm sm:px-10">
            <button
              type="button"
              onClick={previousSection}
              disabled={activeSection === 0}
              className="shrink-0 text-[9px] tracking-[0.08em] transition-colors hover:text-[#E74727] disabled:opacity-25 sm:text-xs sm:tracking-widest"
            >
              ← PREVIOUS
            </button>

            <div className="flex items-center justify-center gap-1.5 sm:gap-2">
              {Array.from({ length: totalSections }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveSection(index)}
                  aria-label={`Go to section ${index + 1}`}
                  aria-current={
                    activeSection === index ? "step" : undefined
                  }
                  className={`h-1 transition-all duration-300 ${
                    activeSection === index
                      ? "w-6 bg-[#E74727] sm:w-8"
                      : "w-2.5 bg-[#292B29]/25 sm:w-3"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextSection}
              disabled={activeSection === totalSections - 1}
              className="shrink-0 text-[9px] tracking-[0.08em] transition-colors hover:text-[#E74727] disabled:opacity-25 sm:text-xs sm:tracking-widest"
            >
              NEXT →
            </button>
          </footer>
        </div>
      )}
    </main>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#E7E3DA] px-6 pt-32 text-[#292B29]">
          <p className="text-sm tracking-widest">
            BAMDA / PROJECTS
          </p>
        </main>
      }
    >
      <ProjectsContent />
    </Suspense>
  );
}

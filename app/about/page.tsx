import Image from "next/image";

const services = [
  {
    number: "01",
    en: "Architectural Design",
    fa: "طراحی معماری",
    enDescription:
      "Architectural concepts, residential and villa design, spatial planning, floor plans, and façade development.",
    faDescription:
      "شکل‌دهی ایده‌ی معماری، طراحی ساختمان‌های مسکونی و ویلا، سازمان‌دهی فضاها، طراحی پلان و توسعه‌ی طرح نما.",
  },
  {
    number: "02",
    en: "Interior Design",
    fa: "طراحی داخلی",
    enDescription:
      "Interior concepts, spatial organization, material and finish selection, and detailed interior design development.",
    faDescription:
      "شکل‌دهی کانسپت داخلی، سازمان‌دهی فضایی، انتخاب متریال و پرداخت‌های نهایی، و توسعه‌ی جزئیات طراحی داخلی.",
  },
  {
    number: "03",
    en: "BIM & Technical Documentation",
    fa: "مدل‌سازی اطلاعات ساختمان و مستندات فنی",
    enDescription:
      "BIM modeling, construction detailing, coordinated technical drawings, quantity takeoffs, and cost estimation.",
    faDescription:
      "مدل‌سازی اطلاعات ساختمان (BIM)، تهیه‌ی دیتیل‌های اجرایی، نقشه‌های فنی هماهنگ، متره و برآورد هزینه.",
  },
];

const founders = [
  {
    name: "Baran Masoumi",
    role: "Architectural Designer",
    image: "/images/Baran2.png",
    enDescription:
      "Focused on architectural design, residential and villa projects, spatial planning, façade development, BIM modeling, and technical documentation.",
    faDescription:
      "تمرکز بر طراحی معماری، پروژه‌های مسکونی و ویلایی، سازمان‌دهی فضایی، توسعه‌ی طرح نما، مدل‌سازی اطلاعات ساختمان (BIM) و تهیه‌ی مستندات فنی.",
  },
  {
    name: "Mohammad Mehdi Jondouni",
    role: "Interior Designer",
    image: "/images/MAHDI2.jpg",
    enDescription:
      "Focused on interior architecture, spatial experience, material and finish selection, and the development of interior design details.",
    faDescription:
      "تمرکز بر معماری داخلی، کیفیت و تجربه‌ی فضایی، انتخاب متریال و پرداخت‌های نهایی، و توسعه‌ی جزئیات طراحی داخلی.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-7xl px-5 pb-24 pt-16 sm:px-8 sm:pt-24 lg:px-12">
        <a href="/" className="mb-8 inline-flex items-center gap-2 text-[10px] tracking-[0.2em] text-zinc-400 transition-colors hover:text-[#E74727]"><span className="text-lg">←</span> BACK</a>
        <header className="border-b border-white/15 pb-10 sm:pb-14">
          <p className="text-[10px] tracking-[0.35em] text-[#E45736] sm:text-xs">
            BAMDA / STUDIO
          </p>

          <div className="mt-6 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <h1 className="text-5xl font-light tracking-tight sm:text-7xl lg:text-8xl">
              About<span className="text-[#E45736]">.</span>
            </h1>

            <p
              dir="rtl"
              className="max-w-sm text-right text-sm leading-8 text-zinc-400 sm:text-base"
            >
              درباره‌ی استودیو بامدا
              <br />
              طراحی، جزئیات و تجربه‌ی فضا
            </p>
          </div>
        </header>

        <section className="grid grid-cols-1 gap-10 border-b border-white/15 py-14 sm:py-20 lg:grid-cols-2 lg:gap-20">
          <div dir="ltr" className="text-left">
            <p className="mb-5 text-[10px] tracking-[0.3em] text-[#E45736]">
              01 / STUDIO
            </p>
            <h2 className="mb-6 text-2xl font-light leading-relaxed sm:text-3xl">
              Architecture shaped around people, place and purpose.
            </h2>
            <p className="max-w-xl text-sm leading-8 text-zinc-400 sm:text-base">
              BAMDA is an architecture studio focused on architectural design,
              interior spaces, and technical development. We approach each
              project as a dialogue between context, function, material, and
              spatial experience.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-8 text-zinc-400 sm:text-base">
              From the initial concept to design development and technical
              documentation, our process brings architectural thinking and
              practical considerations together to create thoughtful, coherent,
              and buildable solutions.
            </p>
          </div>

          <div dir="rtl" className="text-right">
            <p className="mb-5 text-[10px] tracking-[0.2em] text-[#E45736]">
              ۰۱ / استودیو
            </p>
            <h2 className="mb-6 text-2xl font-normal leading-relaxed sm:text-3xl">
              معماری در پیوند با انسان، مکان و هدف
            </h2>
            <p className="max-w-xl text-sm leading-8 text-zinc-300 sm:text-base">
              بامدا استودیویی معماری با تمرکز بر طراحی معماری، فضاهای داخلی و
              توسعه‌ی فنی پروژه‌هاست. رویکرد ما بر پیوند میان بستر، عملکرد،
              متریال و تجربه‌ی فضایی استوار است.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-8 text-zinc-300 sm:text-base">
              از شکل‌گیری ایده‌ی اولیه تا توسعه‌ی طرح و تدوین مستندات فنی،
              تلاش می‌کنیم تفکر معمارانه را با ملاحظات اجرایی تلفیق کنیم و به
              راهکارهایی سنجیده، منسجم و قابل ساخت برسیم.
            </p>
          </div>
        </section>

        <section className="border-b border-white/15 py-14 sm:py-20">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:mb-14 sm:flex-row sm:items-end">
            <div>
              <p className="mb-4 text-[10px] tracking-[0.3em] text-[#E45736]">
                02 / PEOPLE
              </p>
              <h2 className="text-3xl font-light sm:text-5xl">
                The Founders
              </h2>
            </div>

            <p
              dir="rtl"
              className="text-right text-sm leading-7 text-zinc-400"
            >
              بنیان‌گذاران استودیو
              <br />
              دو نگاه تخصصی، یک رویکرد مشترک
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-8 lg:gap-12">
            {founders.map((founder, index) => (
              <article key={founder.name} className="min-w-0">
                <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 560px"
                    className="object-cover object-center transition duration-700 hover:scale-[1.02]"
                  />
                  <span className="absolute bottom-4 left-4 text-xs tracking-[0.2em] text-white">
                    0{index + 1}
                  </span>
                </div>

                <div className="border-b border-white/15 py-5">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <div dir="ltr" className="text-left">
                      <h3 className="text-xl font-normal sm:text-2xl">
                        {founder.name}
                      </h3>
                      <p className="mt-2 text-xs tracking-wide text-[#E45736]">
                        {founder.role}
                      </p>
                    </div>

                    <p
                      dir="rtl"
                      className="text-right text-sm text-zinc-400 sm:pt-1"
                    >
                      {index === 0 ? "طراح معماری" : "طراح داخلی"}
                    </p>
                  </div>

                  <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
                    <p
                      dir="ltr"
                      className="text-left text-sm leading-7 text-zinc-400"
                    >
                      {founder.enDescription}
                    </p>
                    <p
                      dir="rtl"
                      className="text-right text-sm leading-8 text-zinc-300"
                    >
                      {founder.faDescription}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-b border-white/15 py-14 sm:py-20">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:mb-12 sm:flex-row sm:items-end">
            <div>
              <p className="mb-4 text-[10px] tracking-[0.3em] text-[#E45736]">
                03 / CAPABILITIES
              </p>
              <h2 className="text-3xl font-light sm:text-5xl">
                What We Do
              </h2>
            </div>

            <h3
              dir="rtl"
              className="text-right text-2xl font-normal sm:text-3xl"
            >
              حوزه‌های فعالیت
            </h3>
          </div>

          <div>
            {services.map((service) => (
              <article
                key={service.number}
                className="grid grid-cols-1 gap-4 border-t border-white/15 py-7 sm:gap-8 md:grid-cols-[64px_1fr_1fr] md:py-9"
              >
                <span className="text-sm text-[#E45736]">
                  {service.number}
                </span>

                <div dir="ltr" className="text-left">
                  <h3 className="text-xl font-normal sm:text-2xl">
                    {service.en}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    {service.enDescription}
                  </p>
                </div>

                <div dir="rtl" className="text-right md:pl-2">
                  <h3 className="text-xl font-normal leading-relaxed sm:text-2xl">
                    {service.fa}
                  </h3>
                  <p className="mt-3 text-sm leading-8 text-zinc-300">
                    {service.faDescription}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-8 py-14 sm:py-20 lg:grid-cols-2 lg:gap-20">
          <div dir="ltr" className="text-left">
            <p className="mb-5 text-[10px] tracking-[0.3em] text-[#E45736]">
              04 / APPROACH
            </p>
            <h2 className="text-3xl font-light leading-relaxed sm:text-4xl">
              Thoughtful design.
              <br />
              Practical outcomes.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-8 text-zinc-400 sm:text-base">
              We believe architecture extends beyond visual expression. It
              must respond to the people who use it, the character of its
              context, and the realities of construction. Our approach combines
              design exploration with technical clarity to develop solutions
              that are considered, functional, and feasible to build.
            </p>
          </div>

          <div dir="rtl" className="text-right">
            <p className="mb-5 text-[10px] tracking-[0.2em] text-[#E45736]">
              ۰۴ / رویکرد
            </p>
            <h2 className="text-3xl font-normal leading-relaxed sm:text-4xl">
              طراحی سنجیده؛
              <br />
              راهکارهای قابل اجرا
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-8 text-zinc-300 sm:text-base">
              از نگاه ما، معماری فراتر از بیان بصری است. هر طرح باید به
              نیازهای کاربران، ویژگی‌های بستر و واقعیت‌های اجرا پاسخ دهد.
              رویکرد ما تلفیقی از جست‌وجوی خلاقانه و دقت فنی است تا راهکارهایی
              شکل بگیرند که در عین برخورداری از کیفیت فضایی، عملکردی و
              امکان‌پذیر باشند.
            </p>
          </div>
        </section>

        <footer className="border-t border-white/15 pt-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-xs tracking-[0.25em] text-zinc-500">
              BAMDA ARCHITECTURE STUDIO
            </p>
            <p dir="rtl" className="text-right text-xs text-zinc-500">
              استودیو معماری بامدا
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
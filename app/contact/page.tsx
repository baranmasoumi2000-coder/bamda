
export default function ContactPage() {
  const contacts = [
    {
      label: "PHONE",
      value: "021 4423 0252",
      href: "tel:+982144230252",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          className="h-5 w-5"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 11.2 18.8a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 3.18 2 2 0 0 1 4.1 1h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.08 8.88a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.1-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.92Z" />
        </svg>
      ),
    },
    {
      label: "WHATSAPP",
      value: "+98 935 567 2442",
      href: "https://wa.me/989355672442",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          className="h-5 w-5"
        >
          <path d="M21 11.5a8.4 8.4 0 0 1-12.1 7.5L3 21l2-5.7A8.5 8.5 0 1 1 21 11.5Z" />
          <path d="M9 9c.5 2 2 3.5 4 4l1-1 2 1c-.2 1-1 2-2 2-3.5-.5-6.5-3.5-7-7 0-1 1-1.8 2-2l1 2-1 1Z" />
        </svg>
      ),
    },
    {
      label: "EMAIL",
      value: "bamdastudio@outlook.com",
      href: "mailto:bamdastudio@outlook.com",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          className="h-5 w-5"
        >
          <rect x="2" y="4" width="20" height="16" rx="1" />
          <path d="m2 6 10 7 10-7" />
        </svg>
      ),
    },
    {
      label: "INSTAGRAM",
      value: "@bamda.architecture",
      href: "https://www.instagram.com/bamda.architecture/",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          className="h-5 w-5"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950 px-6 py-20 text-white">
      <section className="w-full max-w-5xl">
        <div className="mb-14 md:mb-16">
          <p className="mb-5 text-[10px] uppercase tracking-[0.45em] text-zinc-500">
            BAMDA Architecture Studio
          </p>

          <h1 className="text-4xl font-extralight tracking-[0.18em] text-white sm:text-5xl md:text-6xl">
            CONTACT
          </h1>

          <div className="mt-7 h-px w-full bg-white/15" />
        </div>

        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-4 md:gap-x-8">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={
                contact.label === "INSTAGRAM" ||
                contact.label === "WHATSAPP"
                  ? "_blank"
                  : undefined
              }
              rel={
                contact.label === "INSTAGRAM" ||
                contact.label === "WHATSAPP"
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group border-b border-white/15 py-7 transition-colors duration-300 hover:border-[#E74727] sm:px-2 md:border-b-0 md:py-4"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-zinc-400 transition-colors duration-300 group-hover:text-[#E74727]">
                  {contact.icon}
                </span>

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  className="h-4 w-4 text-zinc-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#E74727]"
                >
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </div>

              <p className="mb-3 text-[10px] tracking-[0.3em] text-zinc-500">
                {contact.label}
              </p>

              <p className="break-words text-sm font-light tracking-wide text-zinc-200 transition-colors duration-300 group-hover:text-white">
                {contact.value}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-16 border-t border-white/15 pt-8">
          <p className="text-[10px] tracking-[0.3em] text-zinc-500">
            WORKSHOP LOCATION / آدرس کارگاه و دفتر
          </p>

          <p className="mt-5 text-base font-light leading-8 text-zinc-100 sm:text-lg">
            جاده شهریار، شهرک صنعتی گلگون، خیابان سوم شمالی، پلاک ۵
          </p>

          <p className="mt-2 text-sm font-light leading-7 text-zinc-500">
            Shahriar Road, Golgoon Industrial Town, 3rd North Street, No. 5
          </p>
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-6">
          <p className="text-[9px] uppercase tracking-[0.25em] text-zinc-600">
            Architecture · Design · Space
          </p>

          <p className="text-[9px] tracking-[0.2em] text-zinc-600">
            TEHRAN · IRAN
          </p>
        </div>
      </section>
    </main>
  );
}

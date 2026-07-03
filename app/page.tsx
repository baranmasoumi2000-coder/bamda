import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      <Header />

      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">

        <img
          src="/images/villa-rasht.png"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">

          <h1 className="text-7xl md:text-9xl font-extralight tracking-[0.5em]">
            BAMDA
          </h1>

          <p className="mt-6 text-zinc-300 uppercase tracking-[0.35em] text-sm">
            Architecture Studio
          </p>

          <p className="mt-12 text-[10px] uppercase tracking-[0.4em] text-zinc-400">
            Selected Works / 2026
          </p>

        </div>
      </section>

      {/* PROJECTS */}
      <section className="px-10 pb-32">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <Link href="/projects">
            <div className="relative h-72 overflow-hidden rounded-lg cursor-pointer group">
              <img
                src="/images/villa-rasht.png"
                alt="Villa Rasht"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          </Link>

          <Link href="/projects">
            <div className="relative h-72 overflow-hidden rounded-lg cursor-pointer group">
              <img
                src="/images/medatech.png"
                alt="Medatech"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          </Link>

          <Link href="/projects">
            <div className="relative h-72 overflow-hidden rounded-lg cursor-pointer group">
              <img
                src="/images/parking.png"
                alt="Parking"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          </Link>

        </div>

      </section>

    </main>
  );
}
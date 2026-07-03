export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white px-10 py-24">

      <h1 className="text-5xl font-light tracking-[0.25em] mb-16">
        PROJECTS
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        <div>
          <img
            src="/images/villa-rasht.png"
            className="rounded-xl"
            alt="Villa Rasht"
          />
          <h2 className="mt-5 text-2xl">Villa Rasht</h2>
          <p className="text-zinc-400 mt-2">
            Residential Villa / Rasht / 2026
          </p>
        </div>

        <div>
          <img
            src="/images/medatech.png"
            className="rounded-xl"
            alt="Medatech"
          />
          <h2 className="mt-5 text-2xl">Medatech</h2>
          <p className="text-zinc-400 mt-2">
            Medical Office / Tehran
          </p>
        </div>

        <div>
          <img
            src="/images/parking.png"
            className="rounded-xl"
            alt="Parking"
          />
          <h2 className="mt-5 text-2xl">Parking Project</h2>
          <p className="text-zinc-400 mt-2">
            Urban Parking Concept
          </p>
        </div>

      </div>

    </main>
  );
}
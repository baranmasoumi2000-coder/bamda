
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-7 sm:px-8">
        <Link
          href="/"
          className="shrink-0 transition-opacity hover:opacity-70"
        >
          <Image
            src="/logo/monogram.png"
            alt="BAMDA"
            width={42}
            height={42}
            priority
          />
        </Link>

        <nav className="flex items-center gap-3 sm:gap-6 md:gap-12 text-[9px] sm:text-[11px] font-light uppercase tracking-[0.08em] sm:tracking-[0.2em] md:tracking-[0.35em] text-zinc-300">
          <Link
            href="/projects"
            className="whitespace-nowrap transition duration-300 hover:text-white"
          >
            Projects
          </Link>

          <Link
            href="/about"
            className="whitespace-nowrap transition duration-300 hover:text-white"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="whitespace-nowrap transition duration-300 hover:text-white"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

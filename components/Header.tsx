import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-7">

        {/* Logo */}
        <Link href="/" className="transition-opacity hover:opacity-70">
          <Image
            src="/logo/monogram.png"
            alt="BAMDA"
            width={42}
            height={42}
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-12 text-[11px] font-light uppercase tracking-[0.35em] text-zinc-300">

          <Link
            href="/projects"
            className="transition duration-300 hover:text-white"
          >
            Projects
          </Link>

          <Link
            href="/about"
            className="transition duration-300 hover:text-white"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="transition duration-300 hover:text-white"
          >
            Contact
          </Link>

        </nav>

      </div>

    </header>
  );
}
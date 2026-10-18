
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLink =
  "whitespace-nowrap text-[10px] font-light tracking-[0.14em] transition-colors duration-300 hover:text-[#E74727] sm:text-[11px] sm:tracking-[0.18em]";

const persianLabel =
  "mt-1 block text-[9px] tracking-normal text-zinc-500";

const dropdownItem =
  "block px-4 py-3 text-[10px] tracking-[0.13em] transition-colors duration-200 hover:bg-white/5 hover:text-[#E74727]";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const closeMenus = () => {
    setMobileOpen(false);
    setMoreOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#292B29]/95 text-zinc-200 backdrop-blur-md">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-5 px-4 sm:px-8 lg:px-12">
        <Link
          href="/"
          onClick={closeMenus}
          aria-label="BAMDA Home"
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

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-5 lg:flex xl:gap-8">
          <Link href="/projects" className={navLink}>
            <span>PROJECTS</span>
            <span className={persianLabel}>پروژه‌ها</span>
          </Link>

          {/* THREE-DOT MENU */}
          <div
            className="group relative flex h-[76px] items-center"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button
              type="button"
              aria-label="More navigation options"
              aria-expanded={moreOpen}
              onClick={() => setMoreOpen((open) => !open)}
              className="flex h-11 w-10 items-center justify-center text-xl tracking-[0.12em] text-zinc-300 transition-colors hover:text-[#E74727]"
            >
              •••
            </button>

            <div
              className={`absolute right-0 top-[calc(100%-4px)] w-64 border border-white/10 bg-[#292B29] p-2 shadow-2xl transition-all duration-200 ${
                moreOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible translate-y-2 opacity-0"
              }`}
            >
              <Link
                href="/architectural-library"
                onClick={closeMenus}
                className={dropdownItem}
              >
                ARCHITECTURAL LIBRARY
                <span className={persianLabel}>کتابخانه معماری</span>
              </Link>

              <div className="mx-4 border-t border-white/10" />

              <Link
                href="/architectural-library/2d"
                onClick={closeMenus}
                className={dropdownItem}
              >
                2D LIBRARY
                <span className={persianLabel}>کتابخانه دوبعدی</span>
              </Link>

              <Link
                href="/architectural-library/3d"
                onClick={closeMenus}
                className={dropdownItem}
              >
                3D LIBRARY
                <span className={persianLabel}>کتابخانه سه‌بعدی</span>
              </Link>

              <div className="mx-4 border-t border-white/10" />

              <Link
                href="/journal"
                onClick={closeMenus}
                className={dropdownItem}
              >
                JOURNAL
                <span className={persianLabel}>مجله معماری</span>
              </Link>
            </div>
          </div>

          <Link href="/about" className={navLink}>
            <span>ABOUT</span>
            <span className={persianLabel}>درباره ما</span>
          </Link>

          <Link href="/contact" className={navLink}>
            <span>CONTACT</span>
            <span className={persianLabel}>تماس با ما</span>
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-px w-6 bg-white transition-transform ${
              mobileOpen ? "translate-y-[4px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-white transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-white transition-transform ${
              mobileOpen ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      {mobileOpen && (
        <nav className="max-h-[calc(100svh-76px)] overflow-y-auto border-t border-white/10 bg-[#292B29] px-6 pb-7 pt-3 lg:hidden">
          <Link
            href="/projects"
            onClick={closeMenus}
            className="block border-b border-white/10 py-4 text-[11px] tracking-[0.16em] hover:text-[#E74727]"
          >
            PROJECTS
            <span className={persianLabel}>پروژه‌ها</span>
          </Link>

          <button
            type="button"
            onClick={() => setMoreOpen((open) => !open)}
            aria-expanded={moreOpen}
            className="flex w-full items-center justify-between border-b border-white/10 py-4 text-left text-[11px] tracking-[0.16em] hover:text-[#E74727]"
          >
            <span>
              MORE <span className="ml-2">•••</span>
              <span className={persianLabel}>بخش‌های بیشتر</span>
            </span>
            <span className="text-lg text-[#E74727]">
              {moreOpen ? "−" : "+"}
            </span>
          </button>

          {moreOpen && (
            <div className="border-b border-white/10 py-2 pl-3">
              <Link
                href="/architectural-library"
                onClick={closeMenus}
                className={dropdownItem}
              >
                ARCHITECTURAL LIBRARY
                <span className={persianLabel}>کتابخانه معماری</span>
              </Link>

              <Link
                href="/architectural-library/2d"
                onClick={closeMenus}
                className={dropdownItem}
              >
                2D LIBRARY
                <span className={persianLabel}>کتابخانه دوبعدی</span>
              </Link>

              <Link
                href="/architectural-library/3d"
                onClick={closeMenus}
                className={dropdownItem}
              >
                3D LIBRARY
                <span className={persianLabel}>کتابخانه سه‌بعدی</span>
              </Link>

              <Link
                href="/journal"
                onClick={closeMenus}
                className={dropdownItem}
              >
                JOURNAL
                <span className={persianLabel}>مجله معماری</span>
              </Link>
            </div>
          )}

          <Link
            href="/about"
            onClick={closeMenus}
            className="block border-b border-white/10 py-4 text-[11px] tracking-[0.16em] hover:text-[#E74727]"
          >
            ABOUT
            <span className={persianLabel}>درباره ما</span>
          </Link>

          <Link
            href="/contact"
            onClick={closeMenus}
            className="block py-4 text-[11px] tracking-[0.16em] hover:text-[#E74727]"
          >
            CONTACT
            <span className={persianLabel}>تماس با ما</span>
          </Link>
        </nav>
      )}
    </header>
  );
}

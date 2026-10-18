
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLink =
  "whitespace-nowrap text-[12px] font-light tracking-[0.14em] text-white transition-colors duration-300 hover:text-[#E74727] xl:text-[13px] xl:tracking-[0.16em]";

const persianLabel =
  "mt-1 block text-[10px] tracking-normal text-white/70";

const dropdownItem =
  "block px-4 py-3 text-[12px] tracking-[0.10em] text-zinc-200 transition-colors duration-200 hover:bg-white/5 hover:text-[#E74727]";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const closeMenus = () => {
    setMobileOpen(false);
    setMoreOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[100] m-0 w-full border-0 bg-transparent p-0 text-white shadow-none outline-none">
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
              className="flex h-10 w-10 items-center justify-center border-0 bg-transparent p-0 text-lg tracking-[0.12em] text-white/90 shadow-none outline-none transition-colors hover:text-[#E74727]"
            >
              •••
            </button>

            <div
              className={`absolute right-0 top-[calc(100%-4px)] w-64 border-0 bg-[#292B29] p-2 shadow-lg outline-none transition-all duration-200 ${
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
          className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-[5px] border-0 bg-transparent p-0 shadow-none outline-none lg:hidden"
        >
          <span
            className={`block h-px w-[18px] bg-white transition-transform duration-200 ${
              mobileOpen ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-[18px] bg-white transition-opacity duration-200 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-[18px] bg-white transition-transform duration-200 ${
              mobileOpen ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      {mobileOpen && (
        <nav className="max-h-[calc(100svh-76px)] overflow-y-auto border-0 bg-[#292B29] px-6 pb-7 pt-3 shadow-lg lg:hidden">
          <Link
            href="/projects"
            onClick={closeMenus}
            className="block py-4 text-[13px] tracking-[0.14em] text-white transition-colors hover:text-[#E74727]"
          >
            PROJECTS
            <span className={persianLabel}>پروژه‌ها</span>
          </Link>

          <button
            type="button"
            onClick={() => setMoreOpen((open) => !open)}
            aria-expanded={moreOpen}
            className="flex w-full items-center justify-between border-0 bg-transparent py-4 text-left text-[13px] tracking-[0.14em] text-white shadow-none outline-none transition-colors hover:text-[#E74727]"
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
            <div className="py-2 pl-3">
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
            className="block py-4 text-[13px] tracking-[0.14em] text-white transition-colors hover:text-[#E74727]"
          >
            ABOUT
            <span className={persianLabel}>درباره ما</span>
          </Link>

          <Link
            href="/contact"
            onClick={closeMenus}
            className="block py-4 text-[13px] tracking-[0.14em] text-white transition-colors hover:text-[#E74727]"
          >
            CONTACT
            <span className={persianLabel}>تماس با ما</span>
          </Link>
        </nav>
      )}
    </header>
  );
}

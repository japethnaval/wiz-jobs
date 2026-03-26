"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon5 } from "@/assets";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "For Employers", href: "/employer" },
  { label: "For Candidates", href: "/candidate" },
  { label: "About", href: "/about-us" },
] as const;

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-60 min-h-20 border-b border-white/15 bg-[#455FF6] text-white shadow-[0_10px_30px_-14px_rgba(17,24,39,0.45)] min-[1240px]:min-h-[127px]">
      
      {/* TOP BAR */}
      <div className="mx-auto grid w-full max-w-480 grid-cols-[auto_1fr_auto] items-center gap-4 px-6 py-4 sm:px-10 min-[1240px]:min-h-[127px] min-[1240px]:grid-cols-[1fr_auto_1fr] min-[1240px]:items-center min-[1240px]:gap-6 min-[1240px]:px-16 min-[1240px]:py-0">
        
        {/* LOGO */}
        <Link
          href="/"
          aria-label="WizJobs home"
          className="col-start-1 flex items-center justify-self-start self-center"
        >
          <Icon5 className="h-9 w-auto sm:h-11 min-[1240px]:h-[85px]" />
        </Link>

        {/* DESKTOP NAV */}
        <nav
          aria-label="Primary"
          className="hidden self-center justify-self-center min-[1240px]:flex"
        >
          <ul className="flex items-center gap-8 xl:gap-10">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="font-extrabold whitespace-nowrap text-[15px] text-white transition-colors hover:text-white/85"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden self-center min-[1240px]:flex items-center justify-end gap-4 xl:gap-5">
          <Link
            href="#sign-in"
            className="text-[13px] font-extrabold tracking-wide text-white uppercase hover:opacity-85"
          >
            Sign in
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/employer"
              className="inline-flex min-h-11 min-w-30 items-center justify-center rounded-full border border-white px-5 text-[15px] font-extrabold italic text-white hover:bg-white/10"
            >
              Recruiter
            </Link>

            <Link
              href="/candidate"
              className="inline-flex min-h-11 min-w-30 items-center justify-center rounded-full border border-white px-5 text-[15px] font-extrabold italic text-white hover:bg-white/10"
            >
              Candidate
            </Link>
          </div>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          type="button"
          className="col-start-3 flex size-11 items-center justify-center justify-self-end rounded-lg border border-white/50 text-white transition-colors hover:bg-white/10 min-[1240px]:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <svg
            className="size-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            {menuOpen ? (
              <path strokeLinecap="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        id="mobile-nav"
        className={`border-t border-white/15 bg-[#455ef6] min-[1240px]:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <div className="mx-auto max-w-480 space-y-1 px-6 py-4 sm:px-10">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="block py-2.5 text-[15px] font-medium text-white hover:text-white/85"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}

          <Link
            href="#sign-in"
            className="block py-3 pt-4 text-[13px] font-extrabold tracking-wide text-white uppercase hover:text-white/85"
            onClick={() => setMenuOpen(false)}
          >
            Sign in
          </Link>

          <div className="flex flex-row gap-3 pt-1">
            <Link
              href="/employer"
              className="inline-flex min-h-11 min-w-0 flex-1 items-center justify-center rounded-full border border-white px-3 text-[15px] font-medium italic text-white hover:bg-white/10 sm:px-5"
              onClick={() => setMenuOpen(false)}
            >
              Recruiter
            </Link>

            <Link
              href="/candidate"
              className="inline-flex min-h-11 min-w-0 flex-1 items-center justify-center rounded-full border border-white px-3 text-[15px] font-medium italic text-white hover:bg-white/10 sm:px-5"
              onClick={() => setMenuOpen(false)}
            >
              Candidate
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
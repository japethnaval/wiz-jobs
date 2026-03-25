"use client";

import Link from "next/link";
import { useState } from "react";
import WizLogo from "@/assets/WizLogo.svg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "For Employers", href: "/employer" },
  { label: "For Candidates", href: "/candidate" },
  { label: "About", href: "/about-us" },
  // { label: "Contact", href: "#contact" },
] as const;



export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 min-h-20 border-b border-white/15 bg-[#455FF6] text-white shadow-[0_10px_30px_-14px_rgba(17,24,39,0.45)] lg:min-h-[127px]">
      <div className="mx-auto grid w-full max-w-480 grid-cols-[1fr_auto] items-center gap-4 px-6 py-4 sm:px-10 lg:min-h-[127px] lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-6 lg:px-16 lg:py-0">
        <Link
          href="/"
          aria-label="WizJobs home"
          className="col-start-1 row-start-1 flex shrink-0 justify-self-start transition-opacity hover:opacity-90"
        >
          <WizLogo
            className="h-9 w-auto shrink-0 sm:h-11 lg:h-[85px]"
            aria-hidden
          />
        </Link>

        <nav
          aria-label="Primary"
          className="col-start-2 row-start-1 hidden justify-self-center lg:flex"
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

        <div className="row-start-1 hidden min-w-0 items-center justify-end gap-4 lg:col-start-3 lg:flex lg:justify-self-end xl:gap-5">
          <Link
            href="#sign-in"
            className="shrink-0 text-[13px] font-extrabold tracking-wide text-white uppercase transition-opacity hover:opacity-85"
          >
            Sign in
          </Link>
          <div className="flex shrink-0 items-center gap-3">
            <Link
              href="/employer"
              className="inline-flex min-h-11 min-w-[7.5rem] items-center justify-center rounded-full border border-white bg-transparent px-5 text-[15px] font-extrabold italic text-white transition-colors hover:bg-white/10"
            >
              Recruiter
            </Link>
            <Link
              href="/candidate"
              className="inline-flex min-h-11 min-w-[7.5rem] items-center justify-center rounded-full border border-white bg-transparent px-5 text-[15px] font-extrabold italic text-white transition-colors hover:bg-white/10"
            >
              Candidate
            </Link>
          </div>
        </div>

        <button
          type="button"
          className="col-start-2 row-start-1 flex size-11 shrink-0 items-center justify-center justify-self-end rounded-lg border border-white/50 text-white transition-colors hover:bg-white/10 lg:hidden"
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
            aria-hidden
          >
            {menuOpen ? (
              <path strokeLinecap="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-white/15 bg-[#4f46e5] lg:hidden ${menuOpen ? "block" : "hidden"}`}
      >
        <div className="mx-auto max-w-[120rem] space-y-1 px-6 py-4 sm:px-10">
          <Link
            href="#sign-in"
            className="block py-2 text-[13px] font-extrabold tracking-wide text-white uppercase"
            onClick={() => setMenuOpen(false)}
          >
            Sign in
          </Link>
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="block py-2.5 text-[15px] font-medium text-white transition-colors hover:text-white/85"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-4">
            <Link
              href="/employer"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-white bg-transparent px-5 text-[15px] font-medium italic text-white hover:bg-white/10"
              onClick={() => setMenuOpen(false)}
            >
              Recruiter
            </Link>
            <Link
              href="/candidate"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-white bg-transparent px-5 text-[15px] font-medium italic text-white hover:bg-white/10"
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

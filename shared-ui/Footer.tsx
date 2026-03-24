import Link from "next/link";
import WizLogo from "@/assets/WizLogo.svg";
import BotIcon from "@/assets/BotIcon.svg";

const productLinks = [
  { label: "For Employers", href: "#employers" },
  { label: "For Candidates", href: "#candidates" },
  { label: "How It Works", href: "#how-it-works" },
] as const;

const resourceLinks = [{ label: "Help Center", href: "#help" }] as const;

const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms of Service", href: "#terms" },
] as const;

const socials = [
  {
    name: "Instagram",
    href: "#",
    icon: (
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    ),
  },
  {
    name: "X",
    href: "#",
    icon: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    ),
  },
  {
    name: "TikTok",
    href: "#",
    icon: (
      <path d="M12.525.02c1.31-.02 2.61-.01 3.918-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48.04 2.96-.04 4.44-.92-.32-1.85-.26-2.74.09-.96.36-1.72 1.18-2.07 2.16-.46 1.14-.19 2.55.71 3.37.77.67 1.89.87 2.89.55 1.02-.36 1.72-1.32 1.79-2.41.09-.94.07-1.88.08-2.82-.01-3.23 0-6.46-.02-9.69z" />
    ),
  },
] as const;

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-sm font-extrabold text-black">{title}</p>
      <ul className="mt-4 space-y-3">
        {links.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className="size-sm text-black font-regular transition-colors hover:text-[#4f46e5]"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative text-zinc-900 bg-[#F0F2F9]">
      
      <div className="mx-auto max-w-[120rem] px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Link
              href="/"
              aria-label="WizJobs home"
              className="inline-block text-[#4f46e5]"
            >
              <WizLogo className="h-10 w-auto sm:h-11" aria-hidden />
            </Link>
            <p className="mt-5 max-w-xs text-sm font-medium leading-relaxed text-[#4f46e5]">
            Human-led AI hiring. <br />
            Built for accountable decisions.
            </p>
            <p className="mt-8 text-xs text-zinc-500">
              © {year} WizJobs. All rights reserved.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-5 lg:gap-12">
            <FooterColumn title="Product" links={productLinks} />
            <FooterColumn title="Resources" links={resourceLinks} />
            <FooterColumn title="Company" links={companyLinks} />
          </div>

          <div className="flex flex-col gap-6 lg:col-span-3 lg:items-end">
            <p className="text-sm font-bold text-[#4f46e5] lg:text-right">
              Socials
            </p>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {socials.map(({ name, href, icon }) => (
                <Link
                  key={name}
                  href={href}
                  className="flex size-10 items-center justify-center rounded-full border border-[#4f46e5]/25 text-[#4f46e5] transition-colors hover:border-[#4f46e5]/50 hover:bg-[#4f46e5]/5"
                  aria-label={name}
                >
                  <svg
                    className="size-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    {icon}
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Link
        href="#chat"
        className="fixed bottom-6 right-6 z-40 flex items-center justify-center"
        aria-label="Open chat assistant"
      >
        <BotIcon className="size-20"/>
      </Link>
    </footer>
  );
}

"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

import { Footer } from "@/shared-ui/Footer";
import { FloatingRegisterPill } from "@/shared-ui/FloatingRegisterPill";
import { Navigation } from "@/shared-ui/Navigation";

const FooterHeading = dynamic(
  () =>
    import("@/shared-ui/FooterHeading").then((mod) => ({
      default: mod.FooterHeading,
    })),
  {
    loading: () => (
      <div
        className="relative min-h-[min(45vh,360px)] md:min-h-[min(40vh,400px)]"
        aria-hidden
      />
    ),
  },
);

const MINIMAL_CHROME_PREFIXES = ["/coming-soon"] as const;

function useMinimalChrome(pathname: string | null) {
  if (!pathname) return false;
  return MINIMAL_CHROME_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

export function AppChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const minimal = useMinimalChrome(pathname);

  if (minimal) {
    return (
      <div className="relative z-10 flex min-h-0 flex-1 flex-col overflow-hidden">
        <main className="flex min-h-0 flex-1 flex-col overflow-hidden">{children}</main>
      </div>
    );
  }

  return (
    <>
      <Navigation />
      <FloatingRegisterPill href="/coming-soon" />
      <div className="relative z-10 flex flex-1 flex-col overflow-clip">
        <main className="flex-1">{children}</main>
        <FooterHeading />
        <Footer />
      </div>
    </>
  );
}

/**
 * Footer CTA band copy per route. Resolved in FooterHeading via usePathname().
 * Add entries as you add routes; unknown paths use `defaultFooterHeading`.
 */
export type FooterHeadingCta = {
  text: string;
  href: string;
};

export type FooterHeadingContent = {
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  ctas: readonly FooterHeadingCta[];
};

export const defaultFooterHeading: FooterHeadingContent = {
  titleLine1: "The Future of Hiring",
  titleLine2: "Starts May 2026",
  subtitle: "Create your profile now!",
  ctas: [
    {
      text: "I'm Hiring Get Early Access",
      href: "#early-access",
    },
    {
      text: "I'm Job Searching Get Verified",
      href: "#get-verified",
    },
  ],
};

/** Exact path → content (highest priority). */
export const footerHeadingByPath: Record<string, FooterHeadingContent> = {
  "candidate": {
    ...defaultFooterHeading,
    titleLine1: "Your Next Job \nis Waiting",
    titleLine2: "",
    subtitle: "Are You Verified?",
    ctas: [
      { text: "Create Your Free Profile", href: "#create-profile" },
    ],
  },
  "employer": {
    ...defaultFooterHeading,
    titleLine1: "Ready to Hire Smarter?",
    titleLine2: "",
    subtitle: "Get Started Today",
    ctas: [
      { text: "Book a 15-min demo", href: "#create-profile" },
      { text: "Start a trial!", href: "#contact" },
    ],
  },
};

/** Longest matching prefix wins (after exact match fails). Skip "/" here; it is handled by default. */
export const footerHeadingByPathPrefix: {
  prefix: string;
  content: FooterHeadingContent;
}[] = [
  // { prefix: "/dashboard", content: { ... } },
];

export function getFooterHeadingForPath(pathname: string): FooterHeadingContent {
  const cleanPathname = pathname.replace(/\//g, "");
  const exact = footerHeadingByPath[cleanPathname];
  if (exact) return exact;

  const byPrefix = [...footerHeadingByPathPrefix].sort(
    (a, b) => b.prefix.length - a.prefix.length,
  );
  for (const { prefix, content } of byPrefix) {
    if (prefix !== "/" && cleanPathname.startsWith(prefix)) return content;
  }

  return defaultFooterHeading;
}

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
  ctas: readonly [FooterHeadingCta, FooterHeadingCta];
};

export const defaultFooterHeading: FooterHeadingContent = {
  titleLine1: "The Future of Hiring",
  titleLine2: "Starts May 2026",
  subtitle: "Create your profile now!",
  ctas: [
    {
      text: "I'm Hiring - Get Early Access",
      href: "#early-access",
    },
    {
      text: "I'm Job Searching - Get Verified",
      href: "#get-verified",
    },
  ],
};

/** Exact path → content (highest priority). */
export const footerHeadingByPath: Record<string, FooterHeadingContent> = {
  // Example overrides — customize as you add pages:
  // "/for-employers": {
  //   ...defaultFooterHeading,
  //   titleLine1: "Hire verified talent",
  //   titleLine2: "faster",
  //   subtitle: "Post a role in minutes.",
  //   ctas: [
  //     { text: "Post a job - Get started", href: "/post" },
  //     { text: "Talk to sales - Book a call", href: "/contact" },
  //   ],
  // },
};

/** Longest matching prefix wins (after exact match fails). Skip "/" here; it is handled by default. */
export const footerHeadingByPathPrefix: {
  prefix: string;
  content: FooterHeadingContent;
}[] = [
  // { prefix: "/dashboard", content: { ... } },
];

export function getFooterHeadingForPath(pathname: string): FooterHeadingContent {
  const exact = footerHeadingByPath[pathname];
  if (exact) return exact;

  const byPrefix = [...footerHeadingByPathPrefix].sort(
    (a, b) => b.prefix.length - a.prefix.length,
  );
  for (const { prefix, content } of byPrefix) {
    if (prefix !== "/" && pathname.startsWith(prefix)) return content;
  }

  return defaultFooterHeading;
}

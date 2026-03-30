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
      href: "/coming-soon",
    },
    {
      text: "I'm Job Searching Get Verified",
      href: "/coming-soon",
    },
  ],
};

export const footerHeadingByPath: Record<string, FooterHeadingContent> = {
  "candidate": {
    ...defaultFooterHeading,
    titleLine1: "Your Next Job is Waiting",
    titleLine2: "",
    subtitle: "Are You Verified?",
    ctas: [
      { text: "Create Your Free Profile", href: "/coming-soon" },
    ],
  },
  "employer": {
    ...defaultFooterHeading,
    titleLine1: "Ready to Hire Smarter?",
    titleLine2: "",
    subtitle: "Get Started Today",
    ctas: [
      { text: "Book a 15-min demo", href: "/coming-soon" },
      { text: "Start a trial!", href: "/coming-soon" },
    ],
  },
};

export const footerHeadingByPathPrefix: {
  prefix: string;
  content: FooterHeadingContent;
}[] = [
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

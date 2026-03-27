import type { Metadata } from "next";

const SITE_NAME = "WizJobs";
const SITE_URL = "https://wizjobs.com";
const DEFAULT_OG_IMAGE = "/og.webp";

export function createPageMetadata({
  title,
  description,
  canonicalPath = "/",
  ogImagePath = DEFAULT_OG_IMAGE,
}: {
  title: string;
  description: string;
  canonicalPath?: `/${string}` | "/";
  ogImagePath?: `/${string}`;
}): Metadata {
  const canonicalUrl = new URL(canonicalPath, SITE_URL).toString();

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      url: canonicalUrl,
      title,
      description,
      images: [{ url: ogImagePath, width: 1200, height: 630, alt: SITE_NAME }],
    },
  };
}


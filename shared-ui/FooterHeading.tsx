"use client";

import { usePathname } from "next/navigation";

import { GradientCtaButton } from "@/shared-ui/GradientCtaButton";
import { getFooterHeadingForPath } from "@/config/footer-heading";

export function FooterHeading() {
  const pathname = usePathname() ?? "/";
  const {
    titleLine1,
    titleLine2,
    subtitle,
    ctas: [primary, secondary],
  } = getFooterHeadingForPath(pathname);

  return (
    <div className={["relative",  "pt-24" ].filter(Boolean).join(" ")}>
      {(
        <div
          className="pointer-events-none absolute inset-0 z-10 bg-[#eceef8]"
          aria-hidden
        />
      )}
      <section
        className="relative z-10 rounded-t-[452px] border-b border-white bg-[linear-gradient(180deg,#FFF_0%,#F0F2F9_100%)] px-6 pb-16 pt-14 text-center sm:px-10 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20"
        aria-labelledby="footer-heading-title"
      >
        <h2
          id="footer-heading-title"
          className="mx-auto max-w-3xl text-pretty text-4xl font-extrabold leading-[1.1] text-black sm:text-5xl lg:text-6xl"
        >
          <span className="block">{titleLine1}</span>
          <span className="block">{titleLine2}</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-xl font-extrabold text-[#4f46e5] sm:text-2xl lg:text-[2.75rem]">
          {subtitle}
        </p>
        <div className="mx-auto mt-10 flex w-full max-w-2xl flex-col gap-4 sm:mt-12 sm:flex-row sm:justify-center sm:gap-5">
          <GradientCtaButton
            className="w-full justify-center px-6 py-3 text-base lg:px-8 lg:py-4 lg:max-h-[124px] overflow-hidden sm:flex-initial sm:max-w-[442px] sm:text-2xl"
            href={primary.href}
            text={primary.text}
          />
          <GradientCtaButton
            className="w-full justify-center px-6 py-3 text-base lg:px-8 lg:py-4 lg:max-h-[124px] overflow-hidden sm:flex-initial sm:max-w-[442px] sm:text-2xl"
            href={secondary.href}
            text={secondary.text}
          />
        </div>
      </section>
    </div>
  );
}

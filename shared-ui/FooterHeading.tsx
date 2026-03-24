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
    <section
      className="z-10 rounded-t-[452px] border-b border-white bg-[#f2f3fb] px-6 pb-16 pt-14 text-center sm:px-10 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20"
      aria-labelledby="footer-heading-title"
    >
      <h2
        id="footer-heading-title"
        className="mx-auto max-w-3xl text-balance text-3xl font-black leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl"
      >
        <span className="block">{titleLine1}</span>
        <span className="block">{titleLine2}</span>
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-xl font-bold text-[#4f46e5] sm:text-2xl lg:text-[2.75rem]">
        {subtitle}
      </p>
      <div className="mx-auto mt-10 flex w-full max-w-2xl flex-col gap-4 sm:mt-12 sm:flex-row sm:justify-center sm:gap-5">
        <GradientCtaButton
          className="w-full justify-center px-14 pb-4 sm:w-auto text-2xl"
          href={primary.href}
          text={primary.text}
        />
        <GradientCtaButton
          className="w-full justify-center px-14 pb-4 sm:w-auto text-2xl"
          href={secondary.href}
          text={secondary.text}
        />
      </div>
    </section>
  );
}

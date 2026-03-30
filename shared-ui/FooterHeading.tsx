"use client";

import type { ComponentType } from "react";
import { usePathname } from "next/navigation";

import { GradientCtaButton } from "@/shared-ui/GradientCtaButton";
import { TextType } from "@/shared-ui/ReactBits";
import { getFooterHeadingForPath } from "@/config/footer-heading";

const TextTypeBand = TextType as ComponentType<Record<string, unknown>>;

const bandHeadingType =
  "text-pretty font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[2.5rem]";

const bandSubHeadingType =
  "text-pretty font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[2.4rem]";

export function FooterHeading() {
  const pathname = usePathname() ?? "/";
  const { titleLine1, titleLine2, subtitle, ctas } = getFooterHeadingForPath(pathname);
  const isSingleCta = ctas.length === 1;

  return (
    <div className={["relative pt-12 md:pt-16 lg:pt-24"].filter(Boolean).join(" ")}>
      <div className="pointer-events-none absolute inset-0 z-10 bg-[#eceef8]" aria-hidden />
      <section
        className="relative z-10 rounded-t-[52px] md:rounded-t-[452px] border-b border-white bg-[linear-gradient(180deg,#FFF_0%,#F0F2F9_100%)] px-4 pb-12 pt-10 text-center shadow-[0_-6px_28px_-10px_rgba(15,23,42,0.05),0_14px_44px_-18px_rgba(15,23,42,0.07)] sm:px-10 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20"
        aria-labelledby="footer-heading-title"
      >
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center">
        <h2
          id="footer-heading-title"
            className={[
              "mx-auto w-full px-0 font-bold leading-[1.06]",
              bandHeadingType,
            ].join(" ")}
          >
            <span className="block">{titleLine1}</span>
            {titleLine2.trim() ? <span className="block">{titleLine2}</span> : null}
          </h2>
          <div
            className={[
              "mx-auto mt-3 flex w-full min-h-[2.2lh] items-center justify-center leading-[1.15] sm:mt-5 lg:mt-6",
              bandSubHeadingType,
            ].join(" ")}
          >
            <TextTypeBand
              as="p"
              text={subtitle}
              loop={true}
              startOnVisible
              showCursor={false}
              className="m-0 max-w-none text-center font-extrabold text-[#4f46e5]"
            />
          </div>
          <div
            className={[
              "mx-auto mt-6 flex w-full flex-col items-center gap-3 px-4 sm:mt-10 sm:flex-row sm:items-stretch sm:justify-center sm:gap-4 sm:px-0 md:gap-5",
              isSingleCta ? "max-w-[min(320px,calc(100vw-2rem))]" : "max-w-2xl",
            ].join(" ")}
          >
            {ctas.map((cta, i) => (
              <GradientCtaButton
                key={`${cta.href}-${i}`}
                className={[
                  "justify-center overflow-hidden px-6 py-3 text-sm sm:self-stretch sm:px-5 sm:py-2.5 sm:text-base md:px-6 md:py-3 md:text-lg lg:px-8 lg:py-4 lg:text-2xl",
                  isSingleCta
                    ? "w-full"
                    : "w-full max-w-[320px] sm:max-w-[min(442px,100%)]",
                ].join(" ")}
                href={cta.href}
                text={cta.text}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { HeroImageCollage } from "@/app/(homepage)/components/HeroImageCollage";
import { FadeInScale, FadeUp } from "@/shared-ui";
import { GradientCtaButton } from "../../../shared-ui/GradientCtaButton";


function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
    </svg>
  );
}

export function VerifiedTalanetsSection() {
  return (
    <section
      className="relative isolate -mx-4 overflow-x-clip overflow-y-visible md:-mx-6 lg:-mx-8"
      aria-labelledby="hero-heading"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[min(100%,96rem)] flex-col items-center px-4 sm:px-6 lg:px-8">
        <FadeUp className="mb-8 max-w-4xl text-center sm:mb-12 lg:mb-16">
          <h1
            id="hero-heading"
            className="text-balance font-bold leading-[1.1] text-[clamp(2.75rem,1.25rem+5.5vw,5.0625rem)]"
          >
            <span className="block">
              Verified Talents
            </span>
            <span className="block">
              at the Speed of{" "}
              <span className="relative inline-block">
                AI
                <SparkleIcon className="absolute -right-5 -top-1 h-4 w-4 text-black sm:h-5 sm:w-5 sm:-right-6 sm:-top-1.5" />
              </span>
            </span>
          </h1>
          <h3 className="relative z-10 text-[clamp(1.5rem,0.65rem+2.6vw,2.5rem)] font-bold text-[#455FF6] mt-4 sm:mt-8 mx-auto max-w-[650px] leading-[1.30]">
            The first recruitment platform built on truth, not volume.
          </h3>
        </FadeUp>
        <FadeInScale delay={0.08}>
          <HeroImageCollage />
        </FadeInScale>
      </div>
      <FadeUp
        delay={0.12}
        className="relative z-10 mx-auto mt-8 flex w-full max-w-[min(100%,96rem)] flex-col items-center justify-center gap-4 px-4 sm:mt-12 sm:flex-row sm:gap-4 sm:px-6 lg:px-8"
      >
        <GradientCtaButton
          href="#early-access"
          className="px-14 py-3"
          text="Start Hiring Smarter"
        />
        <GradientCtaButton
          href="#get-verified"
          className="px-14 py-3"
          text="Get Verified & Hired"
        />
      </FadeUp>
    </section>
  );
}

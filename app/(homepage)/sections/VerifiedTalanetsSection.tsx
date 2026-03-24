"use client";

import { WizJobGrey } from "@/assets";
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
      {/* <div
        className="pointer-events-none absolute -bottom-24 -left-24 z-0 h-[min(70vw,32rem)] w-[min(70vw,32rem)] rounded-full bg-[#d9d4f5]/55 blur-3xl"
        aria-hidden
      /> */}
      <div
        className="opacity-45 pointer-events-none absolute left-0 top-[42%] z-0  -translate-x-[45%] -translate-y-1/2 select-none sm:top-1/2  sm:-translate-x-[35%] lg:w-[min(50vw,56rem)] lg:-translate-x-[5%]"
        aria-hidden
      >
        <WizJobGrey className="h-auto" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[min(100%,96rem)] flex-col items-center px-4 sm:px-6 lg:px-8">
        <FadeUp className="mb-8 max-w-4xl text-center sm:mb-12 lg:mb-16">
          <h1
            id="hero-heading"
            className="text-balance font-extrabold tracking-tight text-black text-[80px]"
          >
            <span className="block text-[clamp(1.75rem,5vw,3.25rem)] leading-[1.1]">
              Verified Talents
            </span>
            <span className="mt-1 block text-[clamp(1.75rem,5vw,3.25rem)] leading-[1.1]">
              at the Speed of{" "}
              <span className="relative inline-block">
                AI
                <SparkleIcon className="absolute -right-5 -top-1 h-4 w-4 text-neutral-900 sm:h-5 sm:w-5 sm:-right-6 sm:-top-1.5" />
              </span>
            </span>
          </h1>
          <p className="relative z-10 mt-4 text-pretty text-2xl font-extrabold text-[#455ff6] sm:mt-8">
            The first recruitment platform <br /> built on truth, not volume.
          </p>
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
          className="px-14"
          text="Start Hiring Smarter"
        />
        <GradientCtaButton
          href="#get-verified"
          className="px-14"
          text="Get Verified & Hired"
        />
      </FadeUp>
    </section>
  );
}

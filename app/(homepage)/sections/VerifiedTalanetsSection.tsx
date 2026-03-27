"use client";

import type { ComponentType } from "react";
import { HeroImageCollage } from "@/app/(homepage)/components/HeroImageCollage";
import { FadeInScale, FadeUp } from "@/shared-ui";
import { GradientCtaButton } from "../../../shared-ui/GradientCtaButton";
import { RotatingText, ShinyText } from "@/shared-ui/ReactBits";

const RotatingTextComponent = RotatingText as ComponentType<Record<string, unknown>>;

const homeHeroSubtexts = [
  "The first recruitment platform built on truth, not volume.",
  "Verification-first hiring with real qualification matching.",
] as const;


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
        <div className="mb-8 max-w-4xl text-center sm:mb-12 lg:mb-16">
          <h1
            id="hero-heading"
            className="text-balance font-bold leading-[1.1] text-black text-[clamp(2.75rem,1.25rem+5.5vw,5.0625rem)]"
          >
            <span className="block">
              <ShinyText
                text="Verified Talents"
                disabled={false}
                speed={3}
                className="mx-0! inline-block! cursor-default! rounded-none! p-0!"
                color="#000000"
                shineColor="#435FF6"
                spread={120}
                yoyo={false}
                pauseOnHover={false}
                direction="left"
                delay={0}
              />
            </span>
            <span className="block">
              <ShinyText
                text="at the Speed of AI"
                disabled={false}
                speed={3}
                className="mx-0! inline-block! cursor-default! rounded-none! p-0!"
                color="#000000"
                shineColor="#435FF6"
                spread={120}
                yoyo={false}
                pauseOnHover={false}
                direction="left"
                delay={0}
              />
              <span className="relative inline-block">
                <SparkleIcon className="absolute -right-5 -top-1 h-4 w-4 text-black sm:h-5 sm:w-5 sm:-right-6 sm:-top-1.5" />
              </span>
            </span>
          </h1>
          <h2
            className="relative z-10 mx-auto mt-4 flex min-h-24 w-full max-w-[650px] items-center justify-center text-pretty font-bold leading-[1.30] text-[#455FF6] text-[clamp(1.5rem,0.65rem+2.6vw,2.5rem)] sm:mt-8 sm:min-h-28"
          >
            <RotatingTextComponent
              texts={[...homeHeroSubtexts]}
              auto
              loop
              splitBy="lines"
              rotationInterval={2600}
              staggerDuration={0.01}
              staggerFrom="first"
              mainClassName="mx-auto flex w-full max-w-full justify-center text-center text-[#455FF6]"
              splitLevelClassName="justify-center"
              elementLevelClassName="will-change-transform"
            />
          </h2>
        </div>
        <FadeInScale delay={0.08}>
          <HeroImageCollage />
        </FadeInScale>
      </div>
      <FadeUp
        delay={0.12}
        className="relative z-10 mx-auto mt-8 flex w-full max-w-[min(100%,96rem)] flex-col items-center justify-center gap-3 px-4 sm:mt-12 sm:flex-row sm:gap-3 sm:px-6 lg:px-8"
      >
        <GradientCtaButton
          href="#early-access"
          className="w-full max-w-[320px] px-6 py-3 sm:w-auto sm:max-w-none sm:px-14"
          text="Start Hiring Smarter"
        />
        <GradientCtaButton
          href="#get-verified"
          className="w-full max-w-[320px] px-6 py-3 sm:w-auto sm:max-w-none sm:px-14"
          text="Get Verified & Hired"
        />
      </FadeUp>
    </section>
  );
}

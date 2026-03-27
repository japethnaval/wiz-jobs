"use client";

import type { ComponentType } from "react";
import Image from "next/image";
import { Graphics3 } from "@/assets/images";
import { GradientCtaButton } from "@/shared-ui/GradientCtaButton";
import { FadeInScale } from "@/shared-ui";
import { RotatingText, ShinyText } from "@/shared-ui/ReactBits";

const RotatingTextComponent = RotatingText as ComponentType<Record<string, unknown>>;

const candidateHeroSubtexts = [
  "Stop sending resumes into black holes.\n\n",
  "Get verified, get scored, and get matched Where you are truly qualified",
] as const;

export function CandidateHeroSection() {
  return (
    <section
      aria-labelledby="candidate-hero-heading"
      className="relative isolate overflow-x-clip px-4 md:px-8 lg:px-12"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[min(100%,96rem)] flex-col items-center text-center">
        <h1
          id="candidate-hero-heading"
          className="pb-8 text-balance font-bold leading-[1.1] text-black text-[clamp(2.75rem,1.25rem+5.5vw,5.0625rem)]"
        >
          <span className="block">
            <ShinyText
              text="Get Hired for Your Skills,"
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
              text="Not Your Luck"
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
        </h1>
        <h2
          className="relative z-10 mx-auto flex min-h-24 w-full max-w-[650px] items-center justify-center pb-8 text-pretty font-bold leading-[1.30] text-[#455FF6] text-[clamp(1.5rem,0.65rem+2.6vw,2.5rem)] sm:min-h-28"
        >
          <RotatingTextComponent
            texts={[...candidateHeroSubtexts]}
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
        <FadeInScale delay={0.08}>
          <div className="mx-auto w-full max-w-[min(100%,960px)] min-w-0 overflow-hidden rounded-4xl py-8 sm:rounded-[2.25rem]">
            <Image
              src={Graphics3}
              alt="A candidate profile preview with verification and scoring indicators."
              placeholder="blur"
              sizes="(max-width: 1040px) 100vw, 1040px"
              className="h-auto w-full object-cover"
            />
          </div>
        </FadeInScale>
        <GradientCtaButton
          href="#create-profile"
          text="Create Your Verified Profile - It’s Free"
        />
      </div>
    </section>
  );
}

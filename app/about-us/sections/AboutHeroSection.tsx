"use client";

import type { ComponentType } from "react";
import Image from "next/image";
import { Graphics1, Graphics2 } from "@/assets/images";
import { FadeInScale } from "@/shared-ui";
import { RotatingText, ShinyText } from "@/shared-ui/ReactBits";

const RotatingTextComponent = RotatingText as ComponentType<Record<string, unknown>>;

const aboutHeroSubtexts = [
  "We’re building the world’s most trusted recruitment platform.",
  "Built on trust, verification, and real qualifications.",
] as const;

export function AboutHeroSection() {
  return (
    <section
      aria-labelledby="candidate-hero-heading"
      className="relative isolate overflow-x-clip"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[min(100%,96rem)] flex-col items-center text-center">
        <h1
          id="candidate-hero-heading"
          className="pb-8 text-balance font-bold leading-[1.1] text-[clamp(2.75rem,1.25rem+5.5vw,5.0625rem)]"
        >
          <ShinyText
            text="About WizJobs"
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
        </h1>
        <h2
          className="relative z-10 mx-auto flex min-h-24 w-full max-w-[650px] items-center justify-center pb-8 text-pretty font-bold leading-[1.30] text-[#455FF6] text-[clamp(1.5rem,0.65rem+2.6vw,2.5rem)] sm:min-h-28"
        >
          <RotatingTextComponent
            texts={[...aboutHeroSubtexts]}
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
        <h4 className="relative pb-8  max-w-[460px] font-normal leading-[1.30] text-black text-[clamp(0.875rem,0.65rem+0.8vw,1.125rem)]">
          where qualifications matter more than keywords, and verification matters more than volume.
        </h4>
        <FadeInScale delay={0.08} className="mx-auto w-full max-w-[min(100%,960px)] pt-8">
          <div className="mx-auto flex w-full max-w-[min(100%,960px)] flex-col items-center gap-[34px] min-[960px]:flex-row min-[960px]:items-stretch">
            <div className="w-full min-w-0 overflow-hidden rounded-4xl sm:rounded-[2.25rem] min-[960px]:basis-[58%]">
              <Image
                src={Graphics1}
                priority
                alt="A professional handshake representing trusted hiring outcomes."
                placeholder="blur"
                sizes="(max-width: 959px) 100vw, 58vw"
                className="h-auto w-full object-cover"
              />
            </div>

            <div className="w-full min-w-0 overflow-hidden rounded-4xl sm:rounded-[2.25rem] min-[960px]:basis-[42%]">
              <Image
                src={Graphics2}
                priority
                alt="A candidate profile interview image showing confidence and trust."
                placeholder="blur"
                sizes="(max-width: 959px) 100vw, 42vw"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </FadeInScale>
      </div>
    </section>

 
  );
}

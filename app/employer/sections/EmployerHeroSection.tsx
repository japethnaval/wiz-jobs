"use client";

import type { ComponentType } from "react";
import Image from "next/image";
import { Graphics13 } from "@/assets/images";
import { GradientCtaButton } from "@/shared-ui/GradientCtaButton";
import { FadeInScale } from "@/shared-ui/Motion";
import { RotatingText, ShinyText } from "@/shared-ui/ReactBits";

const RotatingTextComponent = RotatingText as ComponentType<Record<string, unknown>>;

const employerHeroSubtexts = [
  "Stop wasting time on unqualified candidates.",
  "Interview verified, high-fit talent faster.",
] as const;

export function EmployerHeroSection() {
  return (
    <section
      aria-labelledby="employer-hero-heading"
      className="relative isolate overflow-x-clip"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[min(100%,96rem)] flex-col items-center text-center">
        <h1
          id="employer-hero-heading"
          className="pb-8 text-balance font-bold leading-[1.1] text-black text-[clamp(2.75rem,1.25rem+5.5vw,5.0625rem)]"
        >
          <span className="block">
            <ShinyText
              text="Hire Verified Talent"
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
              text="in Hours, Not Weeks"
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
            texts={[...employerHeroSubtexts]}
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
        <FadeInScale delay={0.08} className="flex w-full justify-center">
          <div className="mx-auto w-full max-w-[min(100%,960px)] min-w-0 overflow-hidden rounded-4xl py-8 sm:rounded-[2.25rem]">
            <Image
              src={Graphics13}
              alt="A professional handshake representing trusted hiring outcomes."
              priority
              placeholder="blur"
              sizes="(max-width: 1368px) 100vw, 782px"
              className="mx-auto block h-auto w-full object-cover object-center"
            />
          </div>
        </FadeInScale>
        <GradientCtaButton
          href="#book-demo"
          className="w-full max-w-[320px] px-6 py-3 sm:w-auto sm:max-w-none sm:px-14"
          text="Book a Demo"
        />
      </div>
    </section>
  );
}

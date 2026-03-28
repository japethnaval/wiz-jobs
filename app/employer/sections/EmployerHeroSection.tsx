"use client";

import Image from "next/image";
import { Graphics13 } from "@/assets/images";
import { GradientCtaButton } from "@/shared-ui/GradientCtaButton";
import { FadeInScale } from "@/shared-ui/Motion";
import { ShinyText } from "@/shared-ui/ReactBits";
import { HeroImage } from "../components/HeroImage";

export function EmployerHeroSection() {
  return (
    <section
      aria-labelledby="employer-hero-heading"
      className="relative isolate overflow-x-clip"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[min(100%,96rem)] flex-col items-center text-center">
        <h1
          id="employer-hero-heading"
          className="text-balance font-bold leading-[1.1] text-black text-[clamp(2.75rem,1.25rem+5.5vw,5.0625rem)]"
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
        <h3 className="relative z-10 mx-auto max-w-[650px] pt-8 text-[clamp(1.5rem,0.65rem+2.6vw,2.5rem)] font-bold leading-[1.30] text-[#455FF6]">
          Stop wasting time on unqualified candidates. Get AI-matched, blockchain-verified talent.
        </h3>
        <FadeInScale delay={0.08}>
          <HeroImage />
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

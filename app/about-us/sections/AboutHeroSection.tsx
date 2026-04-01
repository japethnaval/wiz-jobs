"use client";

import { HeroImage } from "../components/HeroImage";
import { FadeInScale } from "@/shared-ui";
import { ShinyText } from "@/shared-ui/ReactBits";

export function AboutHeroSection() {
  return (
    <section
      aria-labelledby="candidate-hero-heading"
      className="relative isolate overflow-x-clip"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[min(100%,96rem)] flex-col items-center text-center">
        <h1
          id="candidate-hero-heading"
          className="text-balance font-bold leading-[1.1] text-[clamp(2.75rem,1.25rem+5.5vw,5.0625rem)]"
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
        <h3 className="mb-8 relative z-10 mx-auto max-w-[650px] pt-8 text-[clamp(0.875rem,0.525rem+2.6vw,2.375rem)] font-bold leading-[1.30] text-[#455FF6]">
          We’re building the world’s most trusted recruitment platform.
        </h3>
        <h4 className="relative pb-8  max-w-[460px] font-normal leading-[1.30] text-black text-[clamp(0.875rem,0.65rem+0.8vw,1.125rem)]">
          where qualifications matter more than keywords, and verification matters more than volume.
        </h4>
        <FadeInScale delay={0.08}>
          <HeroImage />
        </FadeInScale>
      </div>
    </section>
  );
}

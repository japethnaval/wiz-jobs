"use client";

import Image from "next/image";
import { CandidateHeroGraphic } from "@/assets/images";
import { FadeInScale, FadeUp } from "@/shared-ui";
import { GradientCtaButton } from "@/shared-ui/GradientCtaButton";

export function CandidateHeroSection() {
  return (
    <section
      aria-labelledby="candidate-hero-heading"
      className="relative isolate overflow-x-clip md:-mx-6 lg:-mx-8 pb-[80px]"
    >
      <div className="relative z-10 mx-auto w-full max-w-[min(100%,96rem)] px-6 pt-12 sm:pt-16 lg:px-8 lg:pt-[125px]">
        <FadeUp className="relative mx-auto text-center">
          <h1
            id="candidate-hero-heading"
            className="mx-auto max-w-[100%] text-balance font-black text-black leading-[1.37] text-[clamp(2.75rem,1.25rem+5.5vw,5.0625rem)]"
          >
            Get Hired for Your Skills, <br/> Not Your Luck
          </h1>
          <h3 className="relative z-10 mt-0 mx-auto max-w-[612px] text-[clamp(1.125rem,0.45rem+2.1vw,1.5625rem)] font-black leading-[1.25] text-[#455FF6]">
            Stop sending resumes into black holes. Get verified, get scored, get matched to jobs where
            you’re actually qualified.
          </h3>
        </FadeUp>

        <FadeInScale delay={0.08} className="mx-auto mt-[20px] w-full max-w-[1272px] sm:mt-[27px]">
          <div className="w-full overflow-hidden">
            <Image
              src={CandidateHeroGraphic}
              alt="A candidate profile preview with verification and scoring indicators."
              priority
              sizes="(max-width: 1040px) 100vw, 1040px"
              className="h-auto w-full object-cover"
            />
          </div>
        </FadeInScale>

        <FadeUp delay={0.12} className="mt-10 flex justify-center sm:mt-[95px]">
          <GradientCtaButton href="#create-profile" text="Create Your Verified Profile - It’s Free" />
        </FadeUp>
      </div>
    </section>
  );
}

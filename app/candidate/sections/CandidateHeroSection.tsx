"use client";

import Image from "next/image";
import { Graphics3 } from "@/assets/images";
import { GradientCtaButton } from "@/shared-ui/GradientCtaButton";
import { FadeInScale } from "@/shared-ui";
import { ShinyText } from "@/shared-ui/ReactBits";
import { HeroImage } from "../components/HeroImage";

export function CandidateHeroSection() {
  return (
    <section
      aria-labelledby="candidate-hero-heading"
      className="relative isolate overflow-x-clip px-4 md:px-8 lg:px-12"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[min(100%,96rem)] flex-col items-center text-center">
        <h1
          id="candidate-hero-heading"
          className="text-balance font-bold leading-[1.1] text-black text-[clamp(2.75rem,1.25rem+5.5vw,5.0625rem)]"
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
        <h3 className="relative z-10 mx-auto max-w-[780px] pt-8 text-[clamp(1.5rem,0.65rem+2.6vw,2.5rem)] font-bold leading-[1.30] text-[#455FF6]">
          Stop sending resumes into black holes. Get verified, get scored, get matched to jobs where
          you’re actually qualified.
        </h3>
        <FadeInScale delay={0.08}>
          <HeroImage />
        </FadeInScale>
        <GradientCtaButton
          href="#create-profile"
          text="Create Your Verified Profile - It’s Free"
        />
      </div>
    </section>
  );
}

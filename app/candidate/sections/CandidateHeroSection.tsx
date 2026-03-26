"use client";

import Image from "next/image";
import { Graphics3 } from "@/assets/images";
import { GradientCtaButton } from "@/shared-ui/GradientCtaButton";

export function CandidateHeroSection() {
  return (
    <section
      aria-labelledby="candidate-hero-heading"
      className="relative isolate overflow-x-clip"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[min(100%,96rem)] flex-col items-center text-center">
        <h1
          id="candidate-hero-heading"
          className="pb-8 text-balance font-bold leading-[1.1] text-black text-[clamp(2.75rem,1.25rem+5.5vw,5.0625rem)]"
        >
          Get Hired for Your Skills,<br /> Not Your Luck
        </h1>
        <h3 className="relative z-10 max-w-[612px] pb-8 font-bold leading-[1.30] text-[#455FF6] text-[clamp(0.875rem,0.65rem+2.6vw,25px)]">
          Stop sending resumes into black holes. Get verified, get scored, get matched to jobs where
          you’re actually qualified.
        </h3>
        <div className="w-full max-w-[min(100%,960px)] min-w-0 overflow-hidden rounded-4xl py-8 sm:rounded-[2.25rem]">
          <Image
            src={Graphics3}
            alt="A candidate profile preview with verification and scoring indicators."
            priority
            sizes="(max-width: 1040px) 100vw, 1040px"
            className="h-auto w-full object-cover"
          />
        </div>
        <GradientCtaButton
          href="#create-profile"
          className="px-14"
          text="Create Your Verified Profile - It’s Free"
        />
      </div>
    </section>
  );
}

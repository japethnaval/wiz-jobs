"use client";

import Image from "next/image";
import { Graphics1, Graphics2 } from "@/assets/images";
import { FadeInScale } from "@/shared-ui";

export function AboutHeroSection() {
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
          About WizJobs
        </h1>
        <h3 className="pb-8 relative z-10 max-w-[412px] font-bold leading-[1.30] text-[#455FF6] text-[clamp(0.875rem,0.65rem+2.6vw,25px)]">
        We’re building the world’s most
        trusted recruitment platform
        </h3>
        <h4 className="relative pb-8  max-w-[460px] font-normal leading-[1.30] text-black text-[clamp(0.875rem,0.65rem+0.8vw,1.125rem)]">
          where qualifications matter more than keywords, and verification matters more than volume.
        </h4>
        <FadeInScale delay={0.08} className="mx-auto w-full max-w-[min(100%,960px)] pt-8">
          <div className="mx-auto flex w-full max-w-[min(100%,960px)] flex-col items-center gap-[34px] min-[960px]:flex-row min-[960px]:items-stretch">
            <div className="w-full min-w-0 overflow-hidden rounded-4xl sm:rounded-[2.25rem] min-[960px]:basis-[58%]">
              <Image
                src={Graphics1}
                alt="A professional handshake representing trusted hiring outcomes."
                priority
                sizes="(max-width: 959px) 100vw, 58vw"
                className="h-auto w-full object-cover"
              />
            </div>

            <div className="w-full min-w-0 overflow-hidden rounded-4xl sm:rounded-[2.25rem] min-[960px]:basis-[42%]">
              <Image
                src={Graphics2}
                alt="A candidate profile interview image showing confidence and trust."
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

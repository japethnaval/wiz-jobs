"use client";

import Image from "next/image";
import { Graphics13 } from "@/assets/images";
import { GradientCtaButton } from "@/shared-ui/GradientCtaButton";

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
          Hire Verified Talent <br /> in Hours, Not Weeks
        </h1>
        <h3 className="relative z-10 max-w-[650px] pb-8 font-bold leading-[1.30] text-[#455FF6] text-[clamp(1.5rem,0.65rem+2.6vw,2.5rem)]">
          Stop wasting time on unqualified candidates.
        </h3>
        <div className="py-8 w-full max-w-[min(100%,960px)] min-w-0 overflow-hidden rounded-4xl sm:rounded-[2.25rem]">
          <Image
            src={Graphics13}
            alt="A professional handshake representing trusted hiring outcomes."
            priority
            sizes="(max-width: 1368px) 100vw, 782px"
            className="h-auto w-full object-cover"
          />
        </div>
        <GradientCtaButton href="#book-demo" className="px-14" text="Book a Demo" />
      </div>
    </section>
  );
}

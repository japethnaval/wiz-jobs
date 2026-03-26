"use client";

import Image from "next/image";
import { Graphics13 } from "@/assets/images";
import { FadeInScale, FadeUp } from "@/shared-ui";
import { GradientCtaButton } from "@/shared-ui/GradientCtaButton";

export function EmployerHeroSection() {
  return (
    <section
      aria-labelledby="employer-hero-heading"
      className="relative isolate overflow-x-clip md:-mx-6 lg:-mx-8 pb-[80px]"
    >
      <div className="relative z-10 mx-auto w-full max-w-[min(100%,96rem)] px-6 pt-12 sm:pt-16 lg:px-8 lg:pt-[124px]">
        
        <FadeUp className="relative mx-auto max-w-4xl text-center">
          <h1 id="about-us-heading" className="text-balance font-bold text-black leading-[1.1] text-[clamp(2.75rem,1.25rem+5.5vw,5.0625rem)]">
          Hire Verified Talent <br /> in Hours, Not Weeks
          </h1>
          <h3 className="relative z-10 text-[clamp(1.5rem,0.65rem+2.6vw,2.5rem)] font-bold text-[#455FF6] mt-4 sm:mt-8 mx-auto max-w-[650px] leading-[1.30]">
            Stop wasting time on unqualified candidates. 
          </h3>
        </FadeUp>

        <FadeInScale delay={0.08} className="mx-auto mt-[50px] flex w-full max-w-[1370px] flex-col items-center sm:mt-[82px]">
            <div className="w-full max-w-[782px] min-w-0 overflow-hidden rounded-[2rem] sm:rounded-[2.25rem]">
              <Image
                src={Graphics13}
                alt="A professional handshake representing trusted hiring outcomes."
                priority
                sizes="(max-width: 1368px) 100vw, 782px"
                className="h-auto w-full object-cover"
              />
            </div>
        </FadeInScale>

        <FadeUp delay={0.12} className="mt-8 flex justify-center sm:mt-12">
          <GradientCtaButton
            href="#book-demo"
            className="px-14"
            text="Book a Demo"
          />
        </FadeUp>
      </div>
    </section>
  );
}

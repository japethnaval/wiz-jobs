"use client";

import Image from "next/image";
import { Graphics1, Graphics2 } from "@/assets/images";
import { FadeInScale, FadeUp } from "@/shared-ui";

export function AboutHeroSection() {
  return (
    <section
      aria-labelledby="about-us-heading"
      className="relative isolate overflow-x-clip md:-mx-6 lg:-mx-8 pb-[80px]"
    >
      <div className="relative z-10 mx-auto w-full max-w-[min(100%,96rem)] px-6 pt-12 sm:pt-16 lg:px-8 lg:pt-[124px]">
        
        <FadeUp className="relative mx-auto max-w-4xl text-center">
          <h1 id="about-us-heading" className="text-balance font-black text-black leading-[1.1] text-[clamp(2.75rem,1.25rem+5.5vw,5.0625rem)]">
            About WizJobs
          </h1>
          <h3 className="relative z-10 text-[clamp(1.5rem,0.65rem+2.6vw,2.5rem)] font-black text-[#455FF6] mt-4 sm:mt-8 mx-auto max-w-[650px] leading-[1.30]">
            We&apos;re building the world&apos;s most trusted recruitment platform
          </h3>
          <p className="mx-auto mt-[15px] max-w-[630px] text-[clamp(1.125rem,0.35rem+2.1vw,1.5625rem)] font-semibold leading-[1.2] font-area-normal-medium">
            where qualifications matter more than keywords, and verification
            matters more than volume.
          </p>
        </FadeUp>

        <FadeInScale delay={0.08} className="mx-auto mt-[50px] w-full max-w-[1370px] sm:mt-[82px]">
          <div className="flex w-full flex-col items-center gap-[34px] min-[1369px]:flex-row min-[1369px]:justify-center min-[1369px]:items-center">
            <div className="w-full max-w-[782px] min-w-0 min-[1369px]:w-[782px] min-[1369px]:max-w-none min-[1369px]:shrink-0 overflow-hidden rounded-[2rem] sm:rounded-[2.25rem]">
              <Image
                src={Graphics1}
                alt="A professional handshake representing trusted hiring outcomes."
                priority
                sizes="(max-width: 1368px) 100vw, 782px"
                className="h-auto w-full object-cover"
              />
            </div>

            <div className="w-full max-w-[553px] min-w-0 min-[1369px]:w-[553px] min-[1369px]:max-w-none min-[1369px]:shrink-0 overflow-hidden rounded-[2rem] sm:rounded-[2.25rem]">
              <Image
                src={Graphics2}
                alt="A candidate profile interview image showing confidence and trust."
                sizes="(max-width: 1368px) 100vw, 553px"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </FadeInScale>
      </div>
    </section>
  );
}

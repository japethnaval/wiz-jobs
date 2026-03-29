"use client";

import { EmployerJobSeekerSection } from "@/app/(homepage)/sections/EmployerJobSeekerSection";
import { TheSolutionSection } from "@/app/(homepage)/sections/TheSolutionSection";
import { WeAreDifferentSection } from "@/app/(homepage)/sections/WeAreDifferentSection";
import { CircularGradient } from "./components/CicularGradient";
import { FadeUp } from "@/shared-ui";

/** Below-the-fold homepage blocks in one lazy chunk (Swiper, heavy motion, tables). */
export function HomepageDeferredSections() {
  return (
    <>
      <FadeUp
        className="relative z-10 w-full py-6 md:py-8 lg:py-12"
        delay={0.08}
        amount={0.15}
      >
        <EmployerJobSeekerSection />
      </FadeUp>
      <FadeUp className="relative z-0 w-full" delay={0.12} amount={0.15}>
        <CircularGradient className="-mx-4 md:-mx-6 lg:-mx-8">
          <TheSolutionSection />
          <div className="bg-[#eceef8] pt-12 md:bg-transparent md:pt-16 lg:pt-24">
            <WeAreDifferentSection />
          </div>
        </CircularGradient>
      </FadeUp>
    </>
  );
}

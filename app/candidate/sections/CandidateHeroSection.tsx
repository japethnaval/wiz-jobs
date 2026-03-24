"use client";

import { FadeInScale, FadeUp } from "@/shared-ui";
import { GradientCtaButton } from "@/shared-ui/GradientCtaButton";

export function CandidateHeroSection() {
  return (
    <section aria-labelledby="candidate-hero-heading" className="relative">
      <div className="mx-auto w-full max-w-[70rem] px-4 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
        <FadeUp className="text-center">
          <h1
            id="candidate-hero-heading"
            className="mx-auto max-w-3xl text-balance text-4xl font-extrabold leading-tight text-black sm:text-5xl"
          >
            Get Hired for Your Skills, Not Your Luck
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm font-semibold text-zinc-700 sm:text-base">
            Build your verified profile once. Then let WizJobs match you with roles
            where your real capabilities are recognized.
          </p>
        </FadeUp>

        <FadeInScale delay={0.08} className="mt-8 sm:mt-10">
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-[#455ff6]/20 bg-white/75 p-8 shadow-lg backdrop-blur">
            <div className="rounded-[1.5rem] bg-[radial-gradient(circle_at_30%_20%,#c7d2fe_0%,#e0f2fe_45%,#dbeafe_100%)] p-8">
              <div className="mx-auto max-w-lg rounded-2xl bg-white/90 p-5 text-center shadow-md">
                <p className="text-xs font-extrabold uppercase tracking-wide text-[#455ff6]">
                  Candidate Verification
                </p>
                <p className="mt-2 text-sm font-semibold text-zinc-700">
                  A clearer signal for employers and more control for job seekers.
                </p>
              </div>
            </div>
          </div>
        </FadeInScale>

        <FadeUp delay={0.12} className="mt-8 flex justify-center">
          <GradientCtaButton href="#create-profile" text="Create Your Verified Profile" />
        </FadeUp>
      </div>
    </section>
  );
}

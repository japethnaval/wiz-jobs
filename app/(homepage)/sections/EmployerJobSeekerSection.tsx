"use client";

import { CircularTornadoCard } from "@/app/(homepage)/components/CircularTornadoCard";

export function EmployerJobSeekerSection() {
  return (
    <section
      aria-labelledby="employer-job-seeker-heading"
      className="relative z-30 isolate overflow-x-hidden"
    >
      <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6 overflow-hidden">
          <h2
            id="employer-job-seeker-heading"
            className="mx-auto max-w-4xl text-pretty text-center text-[clamp(1.5rem,0.85rem+2.8vw,3.5rem)] font-bold leading-[1.1] text-black sm:mb-16"
          >
            Stop Hiring the Wrong People Start Hiring Verified Talent.
          </h2>
        <div className="flex flex-col items-center justify-center gap-10 pt-8 sm:gap-16 sm:pt-12 lg:flex-row lg:flex-nowrap">
            <CircularTornadoCard
              eyebrow="If you're an"
              title="Employer"
              tornadoSide="leading"
              size={400}
            >
              <p className="font-regular leading-snug text-black sm:text-xs sm:leading-relaxed">
                You&apos;re drowning in applications. Two hundred resumes for one role,
                and maybe thirty are actually qualified. You spend hours screening CVs
                only to uncover fabricated experience, inflated skills, and unverifiable
                credentials.
              </p>
              <p className="font-bold text-sm text-black sm:text-lg">
                <strong className="font-extrabold text-black">The result?</strong>
              </p>
              <p className="font-regular leading-snug text-black sm:text-xs sm:leading-relaxed">
                Bad hires that cost you $6,000 each. Wasted interviews. Lost
                productivity and missed opportunities. Then the cycle starts again.
              </p>
            </CircularTornadoCard>

            <CircularTornadoCard
              eyebrow="If you're a"
              title="Job Seeker"
              tornadoSide="trailing"
              size={400}
            >
              <div className="space-y-2 pt-3 sm:space-y-3 sm:pt-0">
                <p className="font-regular leading-snug text-black sm:text-xs sm:leading-relaxed">
                  You&apos;ve sent 100+ applications into the void. No responses. No
                  feedback. Just automated rejections, or worse, silence. You&apos;re
                  competing against algorithms that screen you out for the wrong keywords.
                </p>
                <p className="font-bold text-sm text-black sm:text-lg">
                  <strong className="font-extrabold text-black">The result?</strong>
                </p>
                <p className="font-regular leading-snug text-black sm:text-xs sm:leading-relaxed">
                  Longer job searches, missed opportunities, and no clear way for
                  employers to see what you&apos;re truly capable of.
                </p>
              </div>
            </CircularTornadoCard>
        </div>
      </div>
    </section>
  );
}

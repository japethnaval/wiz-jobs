"use client";

import { CircularTornadoCard } from "@/app/(homepage)/components/CircularTornadoCard";

export function EmployerJobSeekerSection() {
  return (
    <section
      aria-labelledby="employer-job-seeker-heading"
    >
      <div className="mx-auto w-full max-w-[1100px]">
          <h2
            id="employer-job-seeker-heading"
            className="font-bold text-pretty mx-auto max-w-4xl text-center text-[clamp(1.75rem,1rem+3vw,3.5rem)] leading-[1.1] text-black sm:mb-16"
          >
            Stop Hiring the Wrong People Start Hiring Verified Talent.
          </h2>
        <div className="flex flex-col items-center justify-center gap-16 pt-12 lg:flex-row lg:flex-nowrap">
          
            <CircularTornadoCard
              eyebrow="If you're an"
              title="Employer"
              tornadoSide="leading"
              size={400}
            >
              <p className="font-regular text-black text-xs">
                You&apos;re drowning in applications. Two hundred resumes for one role,
                and maybe thirty are actually qualified. You spend hours screening CVs
                only to uncover fabricated experience, inflated skills, and unverifiable
                credentials.
              </p>
              <p className="font-bold text-black text-lg">
                <strong className="font-extrabold text-black">The result?</strong>
              </p>
              <p className="font-regular text-black text-xs">
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
              <p className="font-regular text-black text-xs">
                You&apos;ve sent 100+ applications into the void. No responses. No
                feedback. Just automated rejections, or worse, silence. You&apos;re
                competing against algorithms that screen you out for the wrong keywords.
              </p>
              <p className="font-bold text-black text-lg">
                <strong className="font-extrabold text-black">The result?</strong>
              </p>
              <p className="font-regular text-black text-xs">
                Longer job searches, missed opportunities, and no clear way for
                employers to see what you&apos;re truly capable of.
              </p>
            </CircularTornadoCard>
        </div>
      </div>
    </section>
  );
}

"use client";

import { CircularTornadoCard } from "@/app/(homepage)/components/CircularTornadoCard";
import { FadeUp, StaggerContainer, StaggerItem } from "@/shared-ui";

export function EmployerJobSeekerSection() {
  return (
    <section
      aria-labelledby="employer-job-seeker-heading"
    >
      <div className="mx-auto w-full max-w-[1100px] px-4">
        <FadeUp>
          <h2
            id="employer-job-seeker-heading"
            className="font-extrabold text-pretty mx-auto max-w-4xl text-center text-2xl leading-[1.1] text-black sm:mb-16 sm:text-3xl lg:text-5xl"
          >
            Stop Hiring the Wrong People <br /> Start Hiring Verified Talent.
          </h2>
        </FadeUp>
        <StaggerContainer className="flex flex-col items-center justify-center gap-16 pt-12 lg:flex-row lg:flex-nowrap">
          <StaggerItem>
            <CircularTornadoCard
              eyebrow="If you're an"
              title="Employer"
              tornadoSide="leading"
              size={400}
            >
              <p className="font-semibold text-black text-xs">
                You&apos;re drowning in applications, but most candidates exaggerate
                skills. Traditional screening can&apos;t catch it fast enough.
              </p>
              <p className="font-semibold text-black text-xs">
                <strong className="font-bold text-neutral-900">The result?</strong>
              </p>
              <p className="font-semibold text-black text-xs">
                Bad hires that cost you time and money—often thousands per failed
                role—while your team stays stuck in manual review.
              </p>
            </CircularTornadoCard>
          </StaggerItem>

          <StaggerItem>
            <CircularTornadoCard
              eyebrow="If you're a"
              title="Job Seeker"
              tornadoSide="trailing"
              size={400}
            >
              <p className="font-semibold text-black text-xs">
                You send résumés into the void. ATS filters and keyword games make
                it hard for real skills to stand out, even when you&apos;re a strong
                fit.
              </p>
              <p className="font-semibold text-black text-xs">
                <strong className="font-bold text-neutral-900">The result?</strong>
              </p>
              <p className="font-semibold text-black text-xs">
                Longer searches and missed opportunities while employers still can&apos;t
                tell who to trust.
              </p>
            </CircularTornadoCard>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}

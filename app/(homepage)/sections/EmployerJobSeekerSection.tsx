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
            className="mx-auto max-w-4xl text-balance text-center text-3xl font-black leading-tight tracking-tight text-neutral-900 sm:mb-16 sm:text-4xl lg:text-5xl"
          >
            <span className="block">Stop Hiring the Wrong People.</span>
            <span className="block">Start Hiring Verified Talent.</span>
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
              <p>
                You&apos;re drowning in applications, but most candidates exaggerate
                skills. Traditional screening can&apos;t catch it fast enough.
              </p>
              <p>
                <strong className="text-neutral-900">The result?</strong>
              </p>
              <p>
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
              <p>
                You send résumés into the void. ATS filters and keyword games make
                it hard for real skills to stand out, even when you&apos;re a strong
                fit.
              </p>
              <p>
                <strong className="text-neutral-900">The result?</strong>
              </p>
              <p>
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

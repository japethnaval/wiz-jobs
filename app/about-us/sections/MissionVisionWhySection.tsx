"use client";

import { FadeUp } from "@/shared-ui";

const reasons = [
  {
    title: "Employers",
    body: "Employers were overwhelmed by unqualified candidates.",
  },
  {
    title: "Candidates",
    body: "Job seekers were buried under untrustworthy opportunities.",
  },
  {
    title: "Trust",
    body: "Resumes had no signal because claims were rarely verified.",
  },
  {
    title: "Matching",
    body: "Recruitment platforms prioritized profile volume, not quality fit.",
  },
] as const;

export function MissionVisionWhySection() {
  return (
    <section aria-labelledby="mission-vision-why" className="mt-14 sm:mt-20">
      <div className="mx-auto w-full max-w-[70rem] px-4 sm:px-6 lg:px-8">
        <FadeUp className="grid gap-6 md:grid-cols-2">
          <article className="rounded-[1.75rem] border border-[#455ff6]/20 bg-white/80 p-6 shadow-sm">
            <h2 className="text-3xl font-extrabold text-black">Our Mission</h2>
            <p className="mt-4 text-sm font-semibold leading-relaxed text-zinc-700">
              To build the world&apos;s first trusted recruitment platform where
              qualification claims are verified, candidates are matched on real fit,
              and hiring decisions are accountable.
            </p>
          </article>
          <article className="rounded-[1.75rem] border border-[#455ff6]/20 bg-white/80 p-6 shadow-sm">
            <h2 className="text-3xl font-extrabold text-black">Our Vision</h2>
            <p className="mt-4 text-sm font-semibold leading-relaxed text-zinc-700">
              A world where hiring is faster and fairer for everyone. Every worker
              gets seen for verified skills, and every employer can trust who they
              hire.
            </p>
          </article>
        </FadeUp>

        <FadeUp delay={0.08} className="mt-12 text-center sm:mt-16">
          <h3 id="mission-vision-why" className="text-5xl font-extrabold text-black">
            WHY
          </h3>
          <p className="mt-2 text-sm font-semibold text-zinc-700">We built WizJobs</p>
          <p className="mx-auto mt-5 max-w-2xl text-balance text-2xl font-extrabold leading-tight text-[#455ff6]">
            We saw a recruitment system in crisis. We knew there had to be a better
            way.
          </p>
        </FadeUp>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {reasons.map((reason, index) => (
            <FadeUp
              key={reason.title}
              delay={0.08 + index * 0.04}
              className="rounded-2xl border border-[#455ff6]/15 bg-white/85 p-5 shadow-sm"
            >
              <h4 className="text-lg font-extrabold text-[#455ff6]">{reason.title}</h4>
              <p className="mt-2 text-sm font-semibold text-zinc-700">{reason.body}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

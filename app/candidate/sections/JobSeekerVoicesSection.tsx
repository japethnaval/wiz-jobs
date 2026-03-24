"use client";

import { FadeUp } from "@/shared-ui";

const testimonials = [
  {
    quote:
      "I finally got shortlisted based on what I can actually do, not just keywords on a resume.",
    author: "Product Designer",
  },
  {
    quote:
      "Verification made conversations with employers faster and way more serious.",
    author: "Data Analyst",
  },
  {
    quote:
      "The profile score helped me improve how I present my real strengths.",
    author: "Frontend Engineer",
  },
] as const;

export function JobSeekerVoicesSection() {
  return (
    <section aria-labelledby="job-seeker-voices" className="mt-16 pb-12 sm:mt-24 sm:pb-16">
      <div className="mx-auto w-full max-w-[70rem] px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_50%_10%,#1d4ed8_0%,#0b102f_65%,#050816_100%)] px-6 py-10 sm:px-8">
          <FadeUp>
            <h2
              id="job-seeker-voices"
              className="text-center text-3xl font-extrabold text-white sm:text-4xl"
            >
              What Job Seekers Say
            </h2>
          </FadeUp>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <FadeUp
                key={item.author}
                delay={0.08 + index * 0.05}
                className="rounded-2xl border border-white/25 bg-white/15 p-5 backdrop-blur"
              >
                <p className="text-sm font-semibold text-white/95">&quot;{item.quote}&quot;</p>
                <p className="mt-3 text-xs font-extrabold uppercase tracking-wide text-[#49fbdf]">
                  {item.author}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

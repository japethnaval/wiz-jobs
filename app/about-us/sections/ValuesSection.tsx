"use client";

import { FadeInScale, FadeUp } from "@/shared-ui";

const values = [
  "Verification Over Volume",
  "Transparency Always",
  "Human-Led AI Matches",
  "Fairness By Design",
] as const;

export function ValuesSection() {
  return (
    <section aria-labelledby="our-values" className="mt-16 pb-12 sm:mt-24 sm:pb-16">
      <div className="mx-auto w-full max-w-[70rem] px-4 sm:px-6 lg:px-8">
        <FadeInScale>
          <div className="overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_15%_20%,#455ff6_0%,#0b0f66_55%,#050835_100%)] p-6 sm:p-8">
            <FadeUp>
              <h2
                id="our-values"
                className="text-center text-4xl font-extrabold text-white sm:text-5xl"
              >
                Our Values
              </h2>
            </FadeUp>
            <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <FadeUp
                  key={value}
                  delay={0.06 + index * 0.04}
                  className="rounded-2xl border border-white/30 bg-white/15 p-4 backdrop-blur"
                >
                  <p className="text-center text-sm font-extrabold text-white">{value}</p>
                </FadeUp>
              ))}
            </div>
          </div>
        </FadeInScale>
      </div>
    </section>
  );
}

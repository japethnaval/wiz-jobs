"use client";

import { FadeUp } from "@/shared-ui";

const steps = [
  {
    title: "Create Your Profile",
    body: "Add your experience, projects, certifications, and work preferences in one place.",
  },
  {
    title: "Verify Your Credentials",
    body: "WizJobs validates your claims so employers can trust what you bring.",
  },
  {
    title: "See Your Score",
    body: "Understand how your profile aligns with each role before you apply.",
  },
  {
    title: "Get Matched",
    body: "Be discovered by employers searching for verified, qualified talent.",
  },
] as const;

export function HowItWorksSection() {
  return (
    <section aria-labelledby="how-it-works" className="mt-16 sm:mt-24">
      <div className="mx-auto w-full max-w-[70rem] px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <h2
            id="how-it-works"
            className="text-center text-4xl font-extrabold text-black sm:text-5xl"
          >
            How It Works
          </h2>
        </FadeUp>
        <div className="mx-auto mt-10 grid max-w-4xl gap-4">
          {steps.map((step, index) => (
            <FadeUp
              key={step.title}
              delay={index * 0.05}
              className="grid items-start gap-4 rounded-2xl border border-[#455ff6]/20 bg-white/80 p-5 shadow-sm sm:grid-cols-[auto_1fr]"
            >
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#455ff6] text-sm font-extrabold text-white">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-[#455ff6]">{step.title}</h3>
                <p className="mt-2 text-sm font-semibold text-zinc-700">{step.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

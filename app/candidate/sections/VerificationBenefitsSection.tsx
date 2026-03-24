"use client";

import { FadeUp } from "@/shared-ui";

const benefits = [
  {
    title: "Get Noticed Faster",
    body: "Verified profiles rise above resume noise and help employers trust your fit quickly.",
  },
  {
    title: "Build Trust Instantly",
    body: "Your claims are validated, so hiring teams can move from doubt to decision with confidence.",
  },
  {
    title: "Focus on Real Opportunity",
    body: "Less time applying blindly and more time with roles aligned to your actual strengths.",
  },
] as const;

export function VerificationBenefitsSection() {
  return (
    <section aria-labelledby="verification-benefits" className="mt-16 sm:mt-24">
      <div className="mx-auto w-full max-w-[70rem] px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <h2
            id="verification-benefits"
            className="text-center text-4xl font-extrabold text-black sm:text-5xl"
          >
            Why Verification Matters for You
          </h2>
        </FadeUp>
        <div className="mx-auto mt-10 grid max-w-4xl gap-4">
          {benefits.map((benefit, index) => (
            <FadeUp
              key={benefit.title}
              delay={0.06 + index * 0.05}
              className="rounded-full border border-[#455ff6]/20 bg-white/85 px-6 py-4 shadow-sm"
            >
              <h3 className="text-base font-extrabold text-[#455ff6]">{benefit.title}</h3>
              <p className="mt-1 text-sm font-semibold text-zinc-700">{benefit.body}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

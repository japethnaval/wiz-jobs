"use client";

import Image from "next/image";
import { Graphics9 } from "@/assets/images";
import { FadeUp } from "@/shared-ui";

const benefits = [
  {
    title: "Get Noticed Faster",
    body: "Verified profiles rank higher in employer searches. You’re not competing with fake credentials.",
  },
  {
    title: "Build Trust Instantly",
    body: "Employers see your verification status before they even read your CV. Credibility = interviews.",
  },
  {
    title: "Future‑Proof Your Career",
    body: "Your verified profile is portable. Use it for the next 10 job searches. One verification, lifetime value.",
  },
] as const;

export function VerificationBenefitsSection() {
  return (
    <section
      aria-labelledby="verification-benefits"
      className="bg-[#E9EBF6] py-12 md:py-16 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[70rem] px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <h2
            id="verification-benefits"
            className="mx-auto max-w-4xl text-balance text-center leading-[1.15] font-bold text-black text-[clamp(1.875rem,1rem+3.2vw,3.25rem)]"
          >
            Why Verification <br /> Matters for You
          </h2>
        </FadeUp>

        <div className="mx-auto mt-16 grid w-full max-w-[815px] gap-8">
          {benefits.map((benefit, index) => (
            <FadeUp
              key={benefit.title}
              delay={0.06 + index * 0.05}
              className={[
                "w-full max-w-[815px] min-h-[92px] content-center",
                "rounded-[58px]",
                "bg-[linear-gradient(271.6deg,#455FF6_-49.43%,#FFFFFF_39.97%)]",
                "px-6 sm:px-8",
                "py-6 sm:py-8",
              ].join(" ")}
            >
              <div className="flex flex-col items-center gap-[30px] md:flex-row md:items-center">
                <div className="h-[41px] w-[41px] shrink-0">
                  <Image
                    src={Graphics9}
                    alt=""
                    aria-hidden
                    placeholder="blur"
                    sizes="41px"
                    className="h-[41px] w-[41px]"
                  />
                </div>

                <div className="flex w-full min-w-0 flex-1 flex-col items-center gap-3 md:flex-row md:items-center md:gap-[0px]">
                  <h3 className="w-full text-center md:max-w-[270px] md:text-left font-extrabold text-[#455FF6] text-[clamp(1.25rem,1.1rem+0.4vw,1.5rem)] leading-[33px]">
                    {benefit.title}
                  </h3>

                  <p className="w-full min-w-0 flex-1 text-center md:text-left text-black font-normal text-[clamp(0.9375rem,0.9rem+0.2vw,1rem)] leading-[23px]">
                    {benefit.body}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

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
      className="bg-[#E9EBF6] py-[50px] sm:pt-[103px] sm:pb-[93px]"
    >
      <div className="mx-auto w-full max-w-[70rem] px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <h2
            id="verification-benefits"
            className="text-center font-black text-black text-[clamp(50px,3.2rem+1.1vw,62px)] leading-[1.1] max-w-[550px] mx-auto"
          >
            Why Verification Matters for You
          </h2>
        </FadeUp>

        <div className="mx-auto mt-[30px] grid w-full max-w-[815px] gap-9 sm:mt-[58px]">
          {benefits.map((benefit, index) => (
            <FadeUp
              key={benefit.title}
              delay={0.06 + index * 0.05}
              className={[
                "w-full max-w-[815px] min-h-[92px] content-center",
                "rounded-[58px]",
                "bg-[linear-gradient(271.6deg,#455FF6_-49.43%,#FFFFFF_39.97%)]",
                "px-8 py-7 sm:px-5 sm:py-[13px]",
              ].join(" ")}
            >
              <div className="flex flex-col items-center gap-[30px] md:flex-row md:items-center">
                <div className="h-[41px] w-[41px] shrink-0">
                  <Image
                    src={Graphics9}
                    alt=""
                    aria-hidden
                    className="h-[41px] w-[41px]"
                  />
                </div>

                <div className="flex w-full min-w-0 flex-1 flex-col items-center gap-3 md:flex-row md:items-center md:gap-[40px]">
                  <h3 className="w-full text-center md:max-w-[270px] md:text-left font-extrabold text-[#455FF6] text-[clamp(1.25rem,1.1rem+0.4vw,1.5625rem)] leading-[33px]">
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

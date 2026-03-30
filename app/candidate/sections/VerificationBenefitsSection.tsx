"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
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

const easeReveal = [0.16, 1, 0.3, 1] as const;

export function VerificationBenefitsSection() {
  const reduceMotion = useReducedMotion();

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
          {benefits.map((benefit, index) => {
            const staggerDelay = 0.06 + index * 0.05;
            return (
              <motion.div
                key={benefit.title}
                initial={
                  reduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, x: -52 }
                }
                whileInView={
                  reduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }
                }
                whileHover={reduceMotion ? undefined : { y: -6 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: staggerDelay,
                  duration: 0.55,
                  ease: easeReveal,
                }}
                className={[
                  "verification-benefit-card-bg",
                  "w-full max-w-[815px] min-h-[92px] content-center",
                  "rounded-[58px]",
                  "px-6 sm:px-8",
                  "py-6 sm:py-8",
                  "shadow-md will-change-transform",
                  "transition-shadow duration-300 ease-out hover:shadow-xl",
                ].join(" ")}
              >
                <div className="flex flex-col items-center gap-[30px] md:flex-row md:items-center">
                  <motion.div
                    className="h-[41px] w-[41px] shrink-0"
                    initial={{ scale: 1 }}
                    whileInView={
                      reduceMotion
                        ? { scale: 1 }
                        : { scale: [1, 1.14, 1] }
                    }
                    transition={{
                      duration: 0.55,
                      delay: staggerDelay + 0.28,
                      ease: easeReveal,
                      times: [0, 0.42, 1],
                    }}
                    viewport={{ once: true, amount: 0.35 }}
                  >
                    <Image
                      src={Graphics9}
                      alt=""
                      aria-hidden
                      placeholder="blur"
                      sizes="41px"
                      className="h-[41px] w-[41px]"
                    />
                  </motion.div>

                  <div className="flex w-full min-w-0 flex-1 flex-col items-center gap-3 md:flex-row md:items-center md:gap-0">
                    <h3 className="w-full text-center font-extrabold leading-[33px] text-[#455FF6] text-[clamp(1.25rem,1.1rem+0.4vw,1.5rem)] md:max-w-[270px] md:text-left">
                      {benefit.title}
                    </h3>

                    <p className="w-full min-w-0 flex-1 text-center font-normal leading-[23px] text-black text-[clamp(0.9375rem,0.9rem+0.2vw,1rem)] md:text-left">
                      {benefit.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

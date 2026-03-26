"use client";

import { Background1 } from "@/assets/images";
import { FadeInScale, FadeUp } from "@/shared-ui";

const valueCards = [
  {
    number: "01",
    title: "Verification Over Volume",
    body: "We don’t measure success by application numbers. We measure it by match quality.",
  },
  {
    number: "02",
    title: "Transparency Always",
    body: "Candidates see their scores. Employers see verification status. No black boxes.",
  },
  {
    number: "03",
    title: "Merit-Based Matching",
    body: "Your profile ranks based on verified qualifications, not who pays more.",
  },
  {
    number: "04",
    title: "Fairness by Design",
    body: "AI reduces bias. Standardization ensures consistency. Everyone gets evaluated the same way.",
  },
] as const;

export function ValuesSection() {
  return (
    <section
      aria-labelledby="our-values"
      className="relative isolate overflow-hidden py-12 md:py-16 lg:py-24 bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.40) 0%, rgba(0,0,0,0.18) 55%, rgba(0,0,0,0.40) 100%), url(${Background1.src})`,
      }}
    >
      <div
        className="section-inner w-full max-w-[1920px] overflow-hidden bg-cover bg-top-center bg-no-repeat px-6 md:px-8 lg:px-12"
      >
        <div className="relative z-10 mx-auto w-full max-w-[1731px]">
          <FadeUp className="py-6 md:py-8">
            <h2
              id="our-values"
              className="font-black text-white text-center text-[clamp(3.25rem,1.5rem+6.5vw,6.375rem)] leading-[1.1]"
            >
              Our Values
            </h2>
          </FadeUp>
          <FadeInScale className="grid gap-8 lg:gap-12 py-6 md:py-8 grid-cols-2 xl:grid-cols-4">
            {valueCards.map((card, index) => (
              <FadeUp
                key={card.number}
                delay={0.06 + index * 0.04}
                className={[
                  "rounded-[54px] border border-white",
                  "bg-white/25 backdrop-blur-[30px]",
                  "py-6 md:py-8",
                  "px-6 md:px-8 lg:px-12", 
                  "sm:min-h-[392px]",
                ].join(" ")}
              >
                <div className="flex h-full w-full flex-col">
                  <p className="font-extrabold leading-[1.1] text-white text-right text-[clamp(2.75rem,2.1rem+2.4vw,4.6875rem)]">
                    {card.number}
                  </p>

                  <p className="mt-[25px] max-w-[220px] font-extrabold leading-[1.22] text-white text-[clamp(1.375rem,1.05rem+1vw,2.0625rem)]">
                    {card.title}
                  </p>

                  <p className="mt-[28px] max-w-[305px] font-bold leading-[23px] text-white text-[clamp(0.95rem,0.9rem+0.25vw,1rem)]">
                    {card.body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </FadeInScale>
        </div>
      </div>
      
    </section>
  );
}

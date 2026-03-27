"use client";

import { Background1 } from "@/assets/images";
import { FadeInScale, FadeUp } from "@/shared-ui";
import { SpotlightCard } from "@/shared-ui/ReactBits";

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
      className="relative isolate overflow-x-clip overflow-y-visible py-12 md:py-16 lg:py-24 bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.40) 0%, rgba(0,0,0,0.18) 55%, rgba(0,0,0,0.40) 100%), url(${Background1.src})`,
      }}
    >
      <div
        className="section-inner w-full max-w-[1920px] overflow-x-clip overflow-y-visible bg-cover bg-top-center bg-no-repeat px-6 md:px-8 lg:px-12"
      >
        <div className="relative z-10 mx-auto w-full max-w-[1731px]">
          <FadeUp className="pb-6 md:pb-24">
            <h2
              id="our-values"
              className="font-black text-white text-center text-[clamp(3rem,1.5rem+4vw,4.5rem)] leading-[1.1]"
            >
              Our Values
            </h2>
          </FadeUp>
          <FadeInScale className="grid grid-cols-1 gap-6 overflow-x-clip overflow-y-visible md:grid-cols-2 xl:grid-cols-4 lg:gap-9">
          {valueCards.map((card, index) => (
            <FadeUp
              key={card.number}
              delay={0.06 + index * 0.04}
              className="h-full min-h-[392px] p-1 sm:p-1.5"
            >
              <SpotlightCard
                className="h-full min-h-[392px] rounded-[54px] border border-white bg-white/25 px-8 pb-12 pt-8 backdrop-blur-[30px] md:px-12 md:pb-16 md:pt-12 lg:px-14 lg:pb-20 lg:pt-14"
                spotlightColor="rgba(255, 255, 255, 0.32)"
              >
                <div className="flex h-full w-full flex-col">
                  <p className="text-right font-extrabold leading-[1.1] text-white text-[clamp(2.75rem,2.1rem+2.4vw,4.6875rem)]">
                    {card.number}
                  </p>

                  <p className="mt-[25px] font-extrabold leading-[1.22] text-white text-[clamp(1.375rem,1.05rem+1vw,2.0625rem)]">
                    {card.title}
                  </p>

                  <p className="mt-[28px] font-bold leading-[23px] text-white text-[clamp(0.95rem,0.9rem+0.25vw,1rem)]">
                    {card.body}
                  </p>
                </div>
              </SpotlightCard>
            </FadeUp>
          ))}
        </FadeInScale>
        </div>
      </div>
      
    </section>
  );
}

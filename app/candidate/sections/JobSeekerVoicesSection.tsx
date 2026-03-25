"use client";

import Image from "next/image";
import { CandidateVoicesBackground, Graphics10 } from "@/assets/images";
import { FadeUp } from "@/shared-ui";

const testimonials = [
  {
    name: "Sarah M.,",
    title: "Software Engineer",
    quote: "I got 3 interview requests in my first week. All for jobs I was actually qualified for. After 6 months of random applying, this was life-changing.",
  },
  {
    name: "James K.,",
    title: "Marketing Manager",
    quote: "The qualification scoring is brilliant. I finally understand why I’m not getting certain roles—and what skills I need to develop.",
  },
  {
    name: "Priya S.,",
    title: "Data Analyst",
    quote: "I verified my profile once and now employers come to me. It’s the reverse of every other job platform.",
  },
] as const;

export function JobSeekerVoicesSection() {
  return (
    <section aria-labelledby="job-seeker-voices" className="relative isolate overflow-hidden">
      <div
        className="section-inner w-full max-w-[1920px] overflow-hidden bg-cover bg-center bg-no-repeat py-[70px] sm:py-[96px]"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.25) 100%), url(${CandidateVoicesBackground.src})`,
        }}
      >
        <div className="relative z-10 mx-auto w-full max-w-[1731px] px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2
              id="job-seeker-voices"
              className="mx-auto text-center font-black text-white text-[clamp(50px,3.2rem+1.1vw,62px)] leading-[83px]"
            >
              What Job Seekers Say
            </h2>
          </FadeUp>

          <div className="mx-auto mt-[40px] lg:mt-[86px] grid w-full max-w-[1345px] gap-[58px] md:grid-cols-3">
            {testimonials.map((item, index) => (
              <FadeUp
                key={`${item.name}-${item.title}`}
                delay={0.08 + index * 0.05}
                className={[
                  "rounded-[54px] border border-white min-h-[none] sm:min-h-[415px]",
                  "bg-white/25 backdrop-blur-[30px]",
                  "px-8 py-12 sm:px-10 sm:pt-[82px] sm:pb-[40px]",
                ].join(" ")}
              >
                <div className="flex flex-col">
                  <div className="h-[18px] w-[86px]">
                    <Image
                      src={Graphics10}
                      alt=""
                      aria-hidden
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <h3 className="mt-[40px] font-extrabold text-[#222222] text-[clamp(1.25rem,1.1rem+0.4vw,1.5625rem)] leading-[33px]">
                    {item.name}
                    <br />
                    {item.title}
                  </h3>

                  <p className="mt-[12px] font-medium text-[#222222] text-[clamp(0.9375rem,0.9rem+0.2vw,1rem)] leading-[23px]">
                    {item.quote}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { Background2, Graphics10 } from "@/assets/images";
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
        className="section-inner w-full max-w-[1920px] overflow-hidden bg-cover bg-center bg-no-repeat py-12 md:py-16 lg:py-24"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.25) 100%), url(${Background2.src})`,
        }}
      >
        <div className="relative z-10 mx-auto w-full max-w-[1731px] px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2
              id="job-seeker-voices"
              className="mx-auto max-w-4xl text-balance text-center leading-[1.15] font-bold text-white text-[clamp(1.875rem,1rem+3.2vw,3.25rem)]"
            >
              What Job Seekers Say
            </h2>
          </FadeUp>

          <div className="mx-auto mt-[40px] grid w-full max-w-[1345px] gap-[58px] min-[1240px]:mt-[86px] min-[1240px]:grid-cols-3">
            {testimonials.map((item, index) => (
              <FadeUp
                key={`${item.name}-${item.title}`}
                delay={0.08 + index * 0.05}
                className={[
                  "rounded-[54px] border border-white min-h-[none]",
                  "bg-white/25 backdrop-blur-[30px]",
                  "py-10 px-5 sm:px-7 min-[1240px]:py-16 min-[1240px]:px-10",
                ].join(" ")}
              >
                <div className="flex flex-col">
                  <div className="h-[18px] w-[86px]">
                    <Image
                      src={Graphics10}
                      alt=""
                      aria-hidden
                      placeholder="blur"
                      sizes="86px"
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <h3 className="mt-4 md:mt-4 lg:mt-8 font-bold text-white text-[clamp(1.25rem,1.1rem+0.4vw,1.5625rem)] leading-[33px]">
                    {item.name}
                    <br />
                    {item.title}
                  </h3>

                  <p className="mt-[12px] font-medium text-white text-[clamp(0.9375rem,0.9rem+0.2vw,1rem)] leading-[23px]">
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

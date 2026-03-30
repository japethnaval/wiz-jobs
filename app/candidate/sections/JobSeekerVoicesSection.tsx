"use client";

import clsx from "clsx";

import { Background2 } from "@/assets/images";
import {
  BackdropStaggerContainer,
  BackdropStaggerItem,
  DeviceScreen,
  FadeUp,
} from "@/shared-ui";
import MobileSwiper from "@/shared-ui/MobileSwiper";
import { SpotlightCard } from "@/shared-ui/ReactBits";

const testimonials = [
  {
    name: "Sarah M.,",
    title: "Software Engineer",
    quote:
      "I got 3 interview requests in my first week. All for jobs I was actually qualified for. After 6 months of random applying, this was life-changing.",
  },
  {
    name: "James K.,",
    title: "Marketing Manager",
    quote:
      "The qualification scoring is brilliant. I finally understand why I’m not getting certain roles—and what skills I need to develop.",
  },
  {
    name: "Priya S.,",
    title: "Data Analyst",
    quote:
      "I verified my profile once and now employers come to me. It’s the reverse of every other job platform.",
  },
] as const;

type Testimonial = (typeof testimonials)[number];

const testimonialCardClassName =
  "flex h-full min-h-0 flex-1 flex-col p-0! rounded-[54px] border border-white bg-white/25 px-5! py-10! backdrop-blur-[30px] sm:px-7! 1240:px-10! 1240:py-16!";

const swiperCardStretchClassName = "h-full min-h-0";

function TestimonialCardContent({
  item,
  layout,
}: {
  item: Testimonial;
  layout: "grid" | "swiper";
}) {
  const isSwiper = layout === "swiper";

  return (
    <SpotlightCard
      className={clsx(
        testimonialCardClassName,
        isSwiper && swiperCardStretchClassName,
      )}
      spotlightColor="rgba(255, 255, 255, 0.32)"
    >
      <div className="flex min-h-0 flex-1 flex-col">
        <div className="h-[18px] w-[86px] shrink-0">
          <span
            className="job-seeker-stars-shimmer text-[17px] leading-none tracking-[-0.02em]"
            aria-hidden
          >
            ★★★★★
          </span>
        </div>

        <h3 className="mt-4 shrink-0 font-bold leading-[33px] text-white md:mt-4 lg:mt-8 text-[clamp(1.25rem,1.1rem+0.4vw,1.5625rem)]">
          {item.name}
          <br />
          {item.title}
        </h3>

        <p
          className={clsx(
            "mt-[12px] min-h-0 font-medium leading-[23px] text-white text-[clamp(0.9375rem,0.9rem+0.2vw,1rem)]",
            isSwiper && "flex-1",
          )}
        >
          {item.quote}
        </p>
      </div>
    </SpotlightCard>
  );
}

function TestimonialGridItem({ item }: { item: Testimonial }) {
  return (
    <BackdropStaggerItem className="flex h-full min-h-0 flex-col">
      <TestimonialCardContent layout="grid" item={item} />
    </BackdropStaggerItem>
  );
}

function TestimonialSlide({ item }: { item: Testimonial }) {
  return (
    <div className="box-border flex h-full min-h-0 w-full flex-col px-1 py-2 sm:px-1.5 sm:py-2">
      <TestimonialCardContent layout="swiper" item={item} />
    </div>
  );
}

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

          <DeviceScreen md lg>
            <BackdropStaggerContainer className="mx-auto mt-[40px] grid w-full max-w-[1345px] items-stretch gap-[58px] 1240:mt-[86px] 1240:grid-cols-3">
              {testimonials.map((item) => (
                <TestimonialGridItem key={`${item.name}-${item.title}`} item={item} />
              ))}
            </BackdropStaggerContainer>
          </DeviceScreen>

          <DeviceScreen sm>
            <MobileSwiper
              autoHeight={false}
              slideMinHeightClassName="min-h-[min(18rem,55dvh)]"
              className="mt-[40px] [&_.swiper-slide>div]:py-3! [&_.swiper]:pb-8!"
            >
              {testimonials.map((item) => (
                <TestimonialSlide key={`${item.name}-${item.title}`} item={item} />
              ))}
            </MobileSwiper>
          </DeviceScreen>
        </div>
      </div>
    </section>
  );
}

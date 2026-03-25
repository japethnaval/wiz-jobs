"use client";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./index.module.css";

import "swiper/css";
import "swiper/css/navigation";

const bg = "#455FF6";
const accent = "#4FE3F2";

/** All string fields treat `\n` as a line break when rendered. */
export type CustomSlide = {
  problemLabel: string;
  problemSubheading: string;
  problemDescription: string;
  solutionLabel: string;
  solutionSubheading: string;
  solutionDescription: string;
  resultPillText: string;
};

export type CustomSwiperProps = {
  slides: CustomSlide[];
  className?: string;
  /** Use `\n` for line breaks. */
  problemSectionTitle?: string;
  /** Use `\n` for line breaks. */
  solutionSectionTitle?: string;
  /** Use `\n` for line breaks. */
  resultQuestion?: string;
  loop?: boolean;
};

function SlideContent({
  slide,
  problemSectionTitle,
  solutionSectionTitle,
  resultQuestion,
}: {
  slide: CustomSlide;
  problemSectionTitle: string;
  solutionSectionTitle: string;
  resultQuestion: string;
}) {
  return (
    <div
      className="flex min-h-[min(32rem,85vh)] flex-col text-left px-4"
      style={{ backgroundColor: bg }}
    >
      <div className="flex min-h-0 flex-1 flex-col justify-center sm:px-[5%] md:px-[8%] lg:px-[10%] xl:px-[12%]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto_1fr] md:items-stretch md:gap-0 md:gap-x-[3%] lg:gap-x-[6%] xl:gap-x-[8%]">
        <section className="mx-auto flex w-full max-w-[min(100%,22rem)] min-w-0 flex-col gap-0 whitespace-pre-line md:mx-0 md:max-w-[20rem] md:justify-self-end md:pr-2 lg:max-w-88">
          <h2 className="mb-16 font-area-normal-black text-2xl leading-tight text-white sm:text-3xl md:text-[1.75rem] lg:text-4xl">
            {problemSectionTitle}
          </h2>
          <div className="w-full lg:w-[280px]">
            <p className="mb-4 text-sm font-extrabold tracking-wide" style={{ color: accent }}>
              {slide.problemLabel}
            </p>
            <h3 className="mb-6 font-area-normal-black text-xl leading-snug text-white sm:text-2xl lg:text-[1.65rem]">
              {slide.problemSubheading}
            </h3>
            <p className="max-w-prose text-sm leading-relaxed text-white/95 sm:text-base lg:max-w-none">
              {slide.problemDescription}
            </p>
          </div>
        </section>

        <div
          className="hidden h-full min-h-48 items-center justify-center md:flex"
          aria-hidden
        >
          <div className="h-full w-px shrink-0 bg-white/90" />
        </div>

        <section className="mx-auto flex w-full max-w-[min(100%,22rem)] min-w-0 flex-col gap-0 whitespace-pre-line md:mx-0 md:max-w-[20rem] md:justify-self-start md:pl-2 lg:max-w-88">
          <h2 className="mb-16 font-area-normal-black text-2xl leading-tight text-white sm:text-3xl md:text-[1.75rem] lg:text-4xl">
            {solutionSectionTitle}
          </h2>
          <div className="w-full lg:w-[280px]">
            <p className="mb-4 text-sm font-extrabold tracking-wide" style={{ color: accent }}>
              {slide.solutionLabel}
            </p>
            <h3 className="mb-6 font-area-normal-black text-xl leading-snug text-white sm:text-2xl lg:text-[1.65rem]">
              {slide.solutionSubheading}
            </h3>
            <p className="max-w-prose text-[clamp(0.875rem,0.45rem+1.125vw,1.4rem)] leading-relaxed text-white/95 sm:text-base lg:max-w-none">
              {slide.solutionDescription}
            </p>
          </div>
        </section>
        </div>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-sm shrink-0 flex-col items-center gap-4 whitespace-pre-line sm:mt-12 sm:max-w-md">
        <p
          className="w-full text-center font-extrabold text-[clamp(1.5rem,0.65rem+2.6vw,50px)]"
          style={{ color: accent }}
        >
          {resultQuestion}
        </p>
        <div
          className="font-area-normal-black w-full rounded-full px-6 py-3.5 text-center text-sm text-white shadow-sm sm:px-8 sm:text-base md:py-4"
          style={{
            background: "linear-gradient(270deg, #455FF6 -11.13%, #FFFFFF 147.23%)",
          }}
        >
          {slide.resultPillText}
        </div>
      </div>
    </div>
  );
}

export function CustomSwiper({
  slides,
  className,
  problemSectionTitle = "We Know \n What's Broken",
  solutionSectionTitle = "How WizJobs \n Solves This",
  resultQuestion = "Result?",
  loop = true,
}: CustomSwiperProps) {
  return (
    <div className={[styles.root, "relative", className].filter(Boolean).join(" ")}>
      <Swiper
        modules={[Navigation]}
        navigation
        loop={loop && slides.length > 1}
        slidesPerView={1}
        className="overflow-visible!"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="h-auto!">
            <SlideContent
              slide={slide}
              problemSectionTitle={problemSectionTitle}
              solutionSectionTitle={solutionSectionTitle}
              resultQuestion={resultQuestion}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

"use client";

import type { ComponentType, RefObject, SVGProps } from "react";
import { useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { FadeUp, FloatMotion, StaggerContainer, StaggerItem } from "@/shared-ui";
import { Icon1, Icon2, Icon3, Icon4, Icon5 } from "@/assets";
import { Graphics41 } from "@/assets/images";
import Image from "next/image";

import styles from "./MissionVisionWhySection.module.css";

const problemPoints = [
  {
    id: "employers-screening",
    text: "Employers waste thousands of hours screening unqualified candidates.",
    Icon: Icon1,
  },
  {
    id: "job-seekers-void",
    text: "Job seekers send hundreds of applications into the void.",
    Icon: Icon2,
  },
  {
    id: "resume-fraud",
    text: "Resume fraud is rampant (studies show 40% of resumes contain fabrications).",
    Icon: Icon3,
  },
  {
    id: "volume-profits",
    text: "Recruitment platforms profit from volume, not quality.",
    Icon: Icon4,
  },
] as const;

type SvgIcon = ComponentType<SVGProps<SVGSVGElement>>;

function CircleIconSlot({
  icon: Icon,
  className,
}: {
  icon: SvgIcon;
  className?: string;
}) {
  return (
    <FloatMotion>
    <div
      className={[
        styles.circleIconGradient,
        "flex h-[148px] w-[148px] shrink-0 items-center justify-center rounded-full sm:h-[164px] sm:w-[164px]",
        className ?? "",
      ].join(" ")}
    >
      <Icon className="max-h-[55%] max-w-[60%] select-none" aria-hidden />
    </div>
    </FloatMotion>
  );
}

const PROBLEM_CLUSTER_W = 164 + 20 + 360;

const CONNECTOR_Y = [98.5, 313.5, 528.5, 743.5] as const;
const CONNECTOR_VIEW_W = 1180;
const CONNECTOR_VIEW_H = 860;
const ICON_STAGGER_LEFT = 653;
const L2_GUIDE_ENTRY_GAP = 20;
const L2_GUIDE_ENTRY_X = ICON_STAGGER_LEFT - L2_GUIDE_ENTRY_GAP;
const ICON_LEFT_EDGE = 80;
const ICON_R = 98.5;
const ICON2_CX = ICON_STAGGER_LEFT + ICON_R;
const ICON3_CX = ICON_LEFT_EDGE + ICON_R;
const L3_GUIDE_CENTER_X = ICON3_CX - 98;
const LEVEL1_TEXT_EXIT_X = 533;
const GUIDE_ABOVE_ICON_GAP = 18;
const L3_GUIDE_ENTRY_GAP = 20;
const L3L4_VERTICAL_DROP = 120;

const PROBLEM_GUIDE_DASH_LEN = 4000;

const L1_PATH_LEN_APPROX = 318;

const problemGuidePathStroke = {
  stroke: "#4DECEB",
  strokeWidth: 3,
  strokeLinecap: "butt" as const,
  strokeLinejoin: "miter" as const,
  strokeMiterlimit: 2.5,
  fill: "none" as const,
};


function WhyProblemsConnectorScaffold({
  trackRef,
  leg1RowRef,
}: {
  trackRef: RefObject<HTMLElement | null>;
  leg1RowRef: RefObject<HTMLElement | null>;
}) {
  const [y1, y2, y3] = CONNECTOR_Y;
  const reduceMotion = useReducedMotion() === true;
  const { scrollYProgress: trackScrollProgress } = useScroll({
    target: trackRef,
    offset: ["start end", "end start"],
  });

  const l1PathRef = useRef<SVGPathElement | null>(null);
  const [l1PathLen, setL1PathLen] = useState(0);
  const [l1Progress, setL1Progress] = useState(() => (reduceMotion ? 1 : 0));
  const [l1DotOpacity, setL1DotOpacity] = useState(reduceMotion ? 1 : 0.35);

  const l1LenDraw = l1PathLen > 0 ? l1PathLen : L1_PATH_LEN_APPROX;

  useLayoutEffect(() => {
    const path = l1PathRef.current;
    if (path) {
      setL1PathLen(path.getTotalLength());
    }

    const applyL1 = () => {
      if (reduceMotion) {
        setL1Progress(1);
        setL1DotOpacity(1);
        return;
      }
      const el = leg1RowRef.current;
      if (!el) {
        setL1Progress(0);
        setL1DotOpacity(0.35);
        return;
      }
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const bandTop = vh * 0.92;
      const bandBottom = vh * 0.35;
      const p = Math.min(1, Math.max(0, (bandTop - rect.top) / (bandTop - bandBottom)));
      setL1Progress(p);
      const dotP = Math.min(1, Math.max(0, p / 0.12));
      setL1DotOpacity(0.35 + dotP * 0.65);
    };

    applyL1();
    queueMicrotask(applyL1);

    let raf = 0;
    const onScrollOrResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(applyL1);
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    const trackEl = trackRef.current;
    let ro: ResizeObserver | undefined;
    if (trackEl && typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(onScrollOrResize);
      ro.observe(trackEl);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      ro?.disconnect();
    };
  }, [reduceMotion, leg1RowRef, trackRef]);

  const leg2PathLength = useTransform(trackScrollProgress, [0.22, 0.52], [0, 1], { clamp: true });
  const leg3PathLength = useTransform(trackScrollProgress, [0.42, 0.82], [0, 1], { clamp: true });

  const leg2Dash = useTransform(leg2PathLength, [0, 1], [PROBLEM_GUIDE_DASH_LEN, 0]);
  const leg3Dash = useTransform(leg3PathLength, [0, 1], [PROBLEM_GUIDE_DASH_LEN, 0]);

  const dot2Opacity = useTransform(leg2PathLength, [0, 0.12], [0.35, 1], { clamp: true });
  const dot3Opacity = useTransform(leg3PathLength, [0, 0.12], [0.35, 1], { clamp: true });

  const yL2DropEnd = y2 - ICON_R - GUIDE_ABOVE_ICON_GAP;
  const yL3DropEnd = y3 - ICON_R - GUIDE_ABOVE_ICON_GAP;
  const yL3ExitY = y3 + ICON_R + L3_GUIDE_ENTRY_GAP;
  const yL3L4ElbowY = yL3ExitY + L3L4_VERTICAL_DROP;
  const L4_GUIDE_H_STOP_X = ICON_STAGGER_LEFT - GUIDE_ABOVE_ICON_GAP;

  const pathLevel1To2 = [
    `M ${LEVEL1_TEXT_EXIT_X} ${y1}`,
    `L ${ICON2_CX} ${y1}`,
    `L ${ICON2_CX} ${yL2DropEnd}`,
  ].join(" ");

  const pathLevel2To3 = [
    `M ${L2_GUIDE_ENTRY_X} ${y2}`,
    `L ${L3_GUIDE_CENTER_X} ${y2}`,
    `L ${L3_GUIDE_CENTER_X} ${yL3DropEnd}`,
  ].join(" ");

  const pathLevel3To4 = [
    `M ${L3_GUIDE_CENTER_X} ${yL3ExitY}`,
    `L ${L3_GUIDE_CENTER_X} ${yL3L4ElbowY}`,
    `L ${L4_GUIDE_H_STOP_X} ${yL3L4ElbowY}`,
  ].join(" ");

  return (
    <svg
      className="pointer-events-none absolute inset-0 z-0 hidden h-full min-h-[52rem] w-full overflow-visible min-[1420px]:block"
      viewBox={`0 0 ${CONNECTOR_VIEW_W} ${CONNECTOR_VIEW_H}`}
      fill="none"
      aria-hidden
      preserveAspectRatio="none"
    >
      <g id="about-problem-guide-l1-l2">
        <path
          ref={l1PathRef}
          d={pathLevel1To2}
          {...problemGuidePathStroke}
          strokeDasharray={`${l1LenDraw} ${l1LenDraw}`}
          strokeDashoffset={reduceMotion ? 0 : l1LenDraw * (1 - l1Progress)}
        />
      </g>
      <g id="about-problem-guide-l2-l3">
        <motion.path
          d={pathLevel2To3}
          {...problemGuidePathStroke}
          strokeDasharray={PROBLEM_GUIDE_DASH_LEN}
          style={{
            strokeDashoffset: reduceMotion ? 0 : leg2Dash,
          }}
        />
      </g>
      <g id="about-problem-guide-l3-l4">
        <motion.path
          d={pathLevel3To4}
          {...problemGuidePathStroke}
          strokeDasharray={PROBLEM_GUIDE_DASH_LEN}
          style={{
            strokeDashoffset: reduceMotion ? 0 : leg3Dash,
          }}
        />
      </g>
      <circle
        cx={LEVEL1_TEXT_EXIT_X}
        cy={y1}
        r={6}
        fill="#4FE3F2"
        opacity={reduceMotion ? 1 : l1DotOpacity}
      />
      <motion.circle
        cx={L2_GUIDE_ENTRY_X}
        cy={y2}
        r={6}
        fill="#4FE3F2"
        style={{ opacity: reduceMotion ? 1 : dot2Opacity }}
      />
      <motion.circle
        cx={L3_GUIDE_CENTER_X}
        cy={yL3ExitY}
        r={6}
        fill="#4FE3F2"
        style={{ opacity: reduceMotion ? 1 : dot3Opacity }}
      />
    </svg>
  );
}

function MobileConnectorStem() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion() === true;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.4"],
  });

  const stemScaleY = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const dotOpacity = useTransform(scrollYProgress, [0.5, 1], [0.35, 1]);

  return (
    <div
      ref={ref}
      className="relative mx-auto mt-4 flex flex-col items-center pb-4 min-[1420px]:hidden"
      aria-hidden
    >
      <motion.div
        className="mb-0.5 size-[10px] shrink-0 rounded-full bg-[#4FE3F2]"
        style={{ opacity: reduceMotion ? 1 : dotOpacity }}
      />
      <motion.div
        className="h-10 w-[3px] shrink-0 bg-[#4DECEB]"
        style={{
          transformOrigin: "top center",
          scaleY: reduceMotion ? 1 : stemScaleY,
        }}
      />
    </div>
  );
}

function MissionVisionWhyIntroTrack() {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion() === true;

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.88", "end 0.28"],
  });

  const upperStemScaleY = useTransform(scrollYProgress, [0.05, 0.48], [0, 1]);
  const upperDotOpacity = useTransform(scrollYProgress, [0, 0.1], [0.35, 1]);
  const lowerStemScaleY = useTransform(scrollYProgress, [0.4, 0.68], [0, 1]);
  const lowerDotOpacity = useTransform(scrollYProgress, [0.36, 0.52], [0.35, 1]);

  return (
    <div ref={trackRef} className="relative">
      <FadeUp>
        <div className="relative z-10 pb-8">
          <div
            className="pointer-events-none absolute left-1/2 top-2 bottom-0 z-1 hidden -translate-x-1/2 flex-col items-center md:flex"
            aria-hidden
          >
            <motion.div
              className="size-[14px] shrink-0 rounded-full bg-[#4FE3F2]"
              style={{ opacity: reduceMotion ? 1 : upperDotOpacity }}
            />
            <motion.div
              className="mt-1 min-h-0 w-[3px] flex-1 shrink-0 bg-[#4DECEB]"
              style={{
                transformOrigin: "top center",
                scaleY: reduceMotion ? 1 : upperStemScaleY,
              }}
            />
          </div>
          <div className="relative z-10 grid gap-6 md:grid-cols-2 md:gap-0">
            <article className="px-6 text-center md:px-8 md:text-left lg:px-12">
              <h2 className="mx-auto max-w-4xl text-balance leading-[1.15] font-bold text-black text-[clamp(1.875rem,1rem+3.2vw,3.25rem)]">
                Our Mission
              </h2>
              <p className="relative py-6 md:py-8 font-bold leading-[1.30] text-black text-[clamp(0.875rem,0.65rem+0.8vw,1.125rem)]">
                To build the world&apos;s most trusted recruitment platform—where qualifications
                matter more than keywords, and verification matters more than volume.
              </p>
            </article>

            <article className="px-6 text-center md:px-8 md:text-left lg:px-12">
              <h2 className="mx-auto max-w-4xl text-balance leading-[1.15] font-bold text-black text-[clamp(1.875rem,1rem+3.2vw,3.25rem)]">
                Our Vision
              </h2>
              <p className="relative py-6 md:py-8 font-bold leading-[1.30] text-black text-[clamp(0.875rem,0.65rem+0.8vw,1.125rem)]">
                A world where hiring is fast, fair, and based on verified truth. Where job seekers
                are valued for their skills, and employers never waste time on unqualified
                candidates.
              </p>
            </article>
          </div>
        </div>
      </FadeUp>

      <FadeUp
        delay={0.06}
        className="relative z-10 flex flex-col items-center gap-8 py-6 text-center md:py-8"
      >
       <div className="flex flex-col items-center gap-4">
        <h4 className="flex items-center justify-center gap-2 font-normal leading-[1.1] text-black text-[clamp(1.25rem,0.65rem+2.2vw,2rem)] md:gap-0">
          <span className="px-0 md:px-2 font-extrabold">Why We Built</span>          
          </h4>
        <Image src={Graphics41} alt="Why We Built" width={128} height={128} className="shrink-0" />
       </div>
      </FadeUp>
      <div
        className="pointer-events-none mt-3 hidden flex-col items-center md:flex"
        aria-hidden
      >
        <motion.div
          className="mb-1 size-[14px] shrink-0 rounded-full bg-[#4FE3F2]"
          style={{ opacity: reduceMotion ? 1 : lowerDotOpacity }}
        />
        <motion.div
          className="h-10 w-[3px] shrink-0 bg-[#4DECEB] sm:h-12"
          style={{
            transformOrigin: "top center",
            scaleY: reduceMotion ? 1 : lowerStemScaleY,
          }}
        />
      </div>

      <FadeUp delay={0.06} className="relative z-10 text-center">
        <p className="mx-auto max-w-[570px] font-normal leading-[1.30] text-black text-[clamp(0.875rem,0.65rem+0.8vw,1.125rem)] py-4 md:py-6">
          We&apos;ve spent a combined 50+ years in <br/> software, recruitment, and talent analytics.
        </p>
        <h3 className="mx-auto max-w-[650px] leading-6 md:leading-8 font-bold text-[#4f46e5] text-pretty text-[clamp(1rem,0.8rem+1.2vw,1.8rem)] pb-6 md:pb-8">
          And we&apos;ve seen the same <br/> problems over and over.
        </h3>
      </FadeUp>
    </div>
  );
}

export function MissionVisionWhySection() {
  const problemGuideTrackRef = useRef<HTMLDivElement>(null);
  const problemGuideLeg1RowRef = useRef<HTMLDivElement>(null);

  return (
    <section
      aria-labelledby="why-wizjobs-heading"
      className="bg-[linear-gradient(178.76deg,rgba(69,95,246,0.411765)_0.98%,rgba(255,255,255,0)_28.13%)] bg-[#ECEEF7] py-12 md:py-16 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[min(100%,1430px)] px-4 sm:px-6 lg:px-8">
        <MissionVisionWhyIntroTrack />

        <div
          ref={problemGuideTrackRef}
          className="relative mx-auto w-full max-w-[min(100%,1310px)] py-6 md:py-8"
        >
          <WhyProblemsConnectorScaffold
            trackRef={problemGuideTrackRef}
            leg1RowRef={problemGuideLeg1RowRef}
          />
          <StaggerContainer className="relative z-10">
            {problemPoints.map((item, index) => {
              const staggerRight = index % 2 === 1;
              return (
                <StaggerItem key={item.id}>
                  <FadeUp
                    once={false}
                    amount={0.3}
                    className="flex flex-col items-center min-[1420px]:hidden"
                  >
                    <CircleIconSlot icon={item.Icon} className="problem-icon h-[164px] w-[164px]" />
                    <p className="mt-4 w-full max-w-[320px] text-pretty text-center font-area-normal-medium text-[20px] leading-[28px] text-black">
                      {item.text}
                    </p>
                    {index < problemPoints.length - 1 && (
                      <MobileConnectorStem />
                    )}
                  </FadeUp>

                  <div
                    ref={index === 0 ? problemGuideLeg1RowRef : undefined}
                    className={[
                      "hidden w-full min-[1420px]:flex",
                      staggerRight ? "min-[1420px]:justify-end" : "min-[1420px]:justify-start",
                    ].join(" ")}
                  >
                    <div
                      className="flex w-full min-h-[197px] items-center gap-5"
                      style={{ maxWidth: PROBLEM_CLUSTER_W }}
                    >
                      <CircleIconSlot icon={item.Icon} className="problem-icon" />
                      <p className="problem-copy w-full max-w-[370px] shrink-0 text-pretty text-left font-area-normal-medium text-[25px] leading-[33px] text-black">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

        <FadeUp delay={0.06} className="relative z-10 text-center py-6 md:py-8">
          <h2 className="w-full max-w-[750px] mx-auto font-bold text-[clamp(1.875rem,1rem+3.2vw,3.25rem)] leading-[1.1] text-[#455FF6]">We knew there had to be a better way. So we built it.</h2>
        </FadeUp>

      </div>
    </section>
  );
}

"use client";

import type { ComponentType, RefObject, SVGProps } from "react";
import { useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { FadeUp, StaggerContainer, StaggerItem } from "@/shared-ui";
import { Icon1, Icon2, Icon3, Icon4 } from "@/assets";

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
    <div
      className={[
        "flex h-[197px] w-[197px] shrink-0 items-center justify-center rounded-full bg-[#455FF6]",
        className ?? "",
      ].join(" ")}
    >
      <Icon className="max-h-[55%] max-w-[60%] select-none" aria-hidden />
    </div>
  );
}

/** Row/cluster width: 197 + 20 + 360 */
const PROBLEM_CLUSTER_W = 197 + 20 + 360;

/**
 * Connector (md+): one SVG, separate paths per leg so spacing/viewBox and scroll-draw can be tuned per level.
 * Narrow viewBox width scales the guide wider in CSS pixels (preserveAspectRatio="none").
 */
const CONNECTOR_Y = [98.5, 313.5, 528.5, 743.5] as const;
const CONNECTOR_VIEW_W = 1180;
const CONNECTOR_VIEW_H = 860;
const ICON_STAGGER_LEFT = 653;
/** Space between L2→L3 entry dot and L2 circle (viewBox units ≈ px at scale). */
const L2_GUIDE_ENTRY_GAP = 20;
const L2_GUIDE_ENTRY_X = ICON_STAGGER_LEFT - L2_GUIDE_ENTRY_GAP;
const ICON_LEFT_EDGE = 80;
const ICON_R = 98.5;
const ICON2_CX = ICON_STAGGER_LEFT + ICON_R;
const ICON3_CX = ICON_LEFT_EDGE + ICON_R;
/** L2→L3 / L3→4 vertical stem x; extend H leg left of ICON3_CX to match DOM circle under `preserveAspectRatio="none"`. */
const L3_GUIDE_CENTER_X = ICON3_CX - 98;
const LEVEL1_TEXT_EXIT_X = 533;
const GUIDE_ABOVE_ICON_GAP = 18;
/** Space below L3 circle before L3→L4 entry dot (viewBox units ≈ px). */
const L3_GUIDE_ENTRY_GAP = 20;
/** L3→L4: vertical leg length before elbow (viewBox units ≈ px). */
const L3L4_VERTICAL_DROP = 120;

/**
 * Motion legs 2–3: generous dash length in viewBox units (each polyline is shorter than this).
 * L1 uses getTotalLength() — a huge dash vs ~317u path makes offset changes invisible (pattern never aligns).
 */
const PROBLEM_GUIDE_DASH_LEN = 4000;

/** `d` for L1→L2 until `path.getTotalLength()` runs (same geometry as pathLevel1To2). */
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
  const [y1, y2, y3, y4] = CONNECTOR_Y;
  const reduceMotion = useReducedMotion() === true;
  const { scrollYProgress: trackScrollProgress } = useScroll({
    target: trackRef,
    offset: ["start end", "end start"],
  });

  /**
   * L1: plain SVG + React state. Stroke draw must use strokeDasharray ≈ path length (see
   * path.getTotalLength()); huge dash (4000) on ~318u path breaks dashoffset visibility.
   */
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
      className="pointer-events-none absolute inset-0 z-0 hidden h-full min-h-[52rem] w-full overflow-visible md:block"
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

/** Mission → WHY block: two-part center guide (gap over WHY / subtitle), scroll-revealed stems. */
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
      {/* Mission & Vision */}
      <FadeUp>
        <div className="relative z-10 pb-8]">
          {/* Upper guide: clipped to this block so stem never stacks with lower guide */}
          <div
            className="pointer-events-none absolute left-1/2 top-2 bottom-0 z-[1] hidden -translate-x-1/2 flex flex-col items-center md:flex"
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
          <div className="relative z-10 grid gap-10 md:grid-cols-2 md:gap-0">
            <article className="px-6 md:px-8 lg:px-12">
              <h2 className="mx-auto max-w-4xl text-balance leading-[1.15] font-bold text-black text-[clamp(1.875rem,1rem+3.2vw,3.25rem)]">
                Our Mission
              </h2>
              <p className="relative py-6 md:py-8 font-normal leading-[1.30] text-black text-[clamp(0.875rem,0.65rem+0.8vw,1.125rem)]">
                To build the world&apos;s most trusted recruitment platform—where qualifications
                matter more than keywords, and verification matters more than volume.
              </p>
            </article>

            <article className="px-6 md:px-8 lg:px-12">
              <h2 className="mx-auto max-w-4xl text-balance leading-[1.15] font-bold text-black text-[clamp(1.875rem,1rem+3.2vw,3.25rem)]">
                Our Vision
              </h2>
              <p className="relative py-6 md:py-8 font-normal leading-[1.30] text-black text-[clamp(0.875rem,0.65rem+0.8vw,1.125rem)]">
                A world where hiring is fast, fair, and based on verified truth. Where job seekers
                are valued for their skills, and employers never waste time on unqualified
                candidates.
              </p>
            </article>
          </div>
        </div>
      </FadeUp>

      {/* WHY header + intro */}
      <FadeUp delay={0.06} className="relative z-10 text-center py-6 md:py-8">
        <h2
          id="why-wizjobs-heading"
          className="mx-auto max-w-4xl text-balance leading-[1.15] font-bold text-black text-[clamp(1.875rem,1rem+3.2vw,3.25rem)]"
        >
          WHY
        </h2>
        <h4 
          className="font-normal text-black text-[clamp(1.25rem,0.65rem+2.2vw,2rem)] leading-[1.1]">
          We Built WizJobs
        </h4>
      </FadeUp>
      
      {/* Lower guide: stem + dot, ends just above the 50+ years paragraph */}
      <div
        className="pointer-events-none mt-3 hidden flex flex-col items-center md:flex"
        aria-hidden
      >
        <motion.div
          className="h-10 w-[3px] shrink-0 bg-[#4DECEB] sm:h-12"
          style={{
            transformOrigin: "top center",
            scaleY: reduceMotion ? 1 : lowerStemScaleY,
          }}
        />
        <motion.div
          className="mt-1 size-[14px] shrink-0 rounded-full bg-[#4FE3F2]"
          style={{ opacity: reduceMotion ? 1 : lowerDotOpacity }}
        />
      </div>

      <FadeUp delay={0.06} className="relative z-10 text-center">
        <p className="mx-auto max-w-[570px] text-[clamp(1.125rem,0.35rem+2.1vw,1.5625rem)] font-normal leading-[1.30] text-black text-[clamp(0.875rem,0.65rem+0.8vw,1.125rem)] py-6 md:py-8">
          We&apos;ve spent a combined 50+ years in software, recruitment, and talent analytics.{" "}
        </p>
        <h3 className="mx-auto max-w-[650px] font-bold text-[#4f46e5] text-base font-extrabold sm:text-xl md:text-2xl lg:text-[2.5rem] py-6 md:py-8">
          And we&apos;ve seen the same problems over and over.
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
      className="bg-[linear-gradient(178.76deg,rgba(69,95,246,0.411765)_0.98%,rgba(255,255,255,0)_28.13%)] bg-[#ECEEF7] -mt-12 py-12 md:py-16 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[min(100%,1430px)] px-4 sm:px-6 lg:px-8">
        <MissionVisionWhyIntroTrack />

        {/* Problem points: icon always left of copy (20px gap); rows stagger L/R; connector (md+) */}
        <div
          ref={problemGuideTrackRef}
          className="relative mx-auto w-full max-w-[min(100%,1310px)] py-6 md:py-8"
        >
          <WhyProblemsConnectorScaffold
            trackRef={problemGuideTrackRef}
            leg1RowRef={problemGuideLeg1RowRef}
          />
          <StaggerContainer className="relative z-10 space-y-8">
            {problemPoints.map((item, index) => {
              const staggerRight = index % 2 === 1;
              return (
                <StaggerItem key={item.id}>
                  <div
                    ref={index === 0 ? problemGuideLeg1RowRef : undefined}
                    className={[
                      "flex w-full",
                      staggerRight ? "md:justify-end" : "md:justify-start",
                    ].join(" ")}
                  >
                    <div
                      className="flex w-full min-h-[197px] flex-col items-center gap-5 md:flex-row md:items-center"
                      style={{ maxWidth: PROBLEM_CLUSTER_W }}
                    >
                      <CircleIconSlot icon={item.Icon} className="problem-icon" />
                      <p className="problem-copy w-full max-w-[370px] shrink-0 text-pretty text-center font-area-normal-medium text-[22px] leading-[29px] text-black sm:text-[24px] sm:leading-[32px] md:text-left md:text-[25px] md:leading-[33px]">
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

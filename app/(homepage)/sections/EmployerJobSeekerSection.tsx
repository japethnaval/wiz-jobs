"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { CircularTornadoCard } from "@/app/(homepage)/components/CircularTornadoCard";
import { DeviceScreen } from "@/shared-ui";
import MobileSwiper from "@/shared-ui/MobileSwiper";

const CARD_PX = 400;

const enterSpring = { type: "spring" as const, stiffness: 280, damping: 34, mass: 0.9 };

function TornadoCardWithGlow({
  children,
  sweepDelay = 0.35,
  enterFrom,
  instantReveal = false,
}: {
  children: ReactNode;
  sweepDelay?: number;
  enterFrom: "left" | "right";
  instantReveal?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const enterX = reduceMotion ? 0 : enterFrom === "left" ? -88 : 88;

  const scrollReveal =
    instantReveal || reduceMotion
      ? {
          initial: { opacity: 1, x: 0 } as const,
          whileInView: undefined,
          viewport: undefined,
        }
      : {
          initial: { x: enterX, opacity: 0 } as const,
          whileInView: { x: 0, opacity: 1 } as const,
          viewport: { once: true, amount: 0.22 } as const,
        };

  return (
    <motion.div
      className="relative mx-auto w-full max-w-[min(400px,100%)]"
      {...scrollReveal}
      transition={{ ...enterSpring, delay: enterFrom === "left" ? 0 : 0.06 }}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 z-0 aspect-square max-w-full -translate-x-1/2"
        style={{ width: `min(${CARD_PX}px, 100%)` }}
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
        >
          <motion.div
            initial={reduceMotion ? { y: "130%" } : { y: "-115%" }}
            whileInView={{ y: "130%" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: reduceMotion ? 0 : 1.15,
              ease: [0.45, 0, 0.55, 1],
              delay: reduceMotion ? 0 : sweepDelay,
            }}
            className="absolute inset-x-0 h-[22%] bg-[linear-gradient(to_bottom,transparent_0%,rgba(73,251,223,0.55)_35%,rgba(255,255,255,0.5)_50%,rgba(73,251,223,0.45)_65%,transparent_100%)]"
          />
        </motion.div>
      </div>
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

function EmployerCard({ instantReveal = false }: { instantReveal?: boolean }) {
  return (
    <TornadoCardWithGlow enterFrom="left" sweepDelay={0.42} instantReveal={instantReveal}>
      <CircularTornadoCard
        eyebrow="If you're an"
        title="Employer"
        tornadoSide="leading"
        size={CARD_PX}
      >
        <p className="font-normal leading-snug text-black">
          You&apos;re drowning in applications. Two hundred resumes for one role, and maybe thirty are actually
          qualified. You spend hours screening CVs only to uncover fabricated experience, inflated skills, and
          unverifiable credentials.
        </p>
        <p className="font-bold text-[1.1em] leading-snug text-black">
          <strong className="font-extrabold text-black">The result?</strong>
        </p>
        <p className="font-normal leading-snug text-black">
          Bad hires that cost you $6,000 each. Wasted interviews. Lost productivity and missed opportunities.
          Then the cycle starts again.
        </p>
      </CircularTornadoCard>
    </TornadoCardWithGlow>
  );
}

function JobSeekerCard({ instantReveal = false }: { instantReveal?: boolean }) {
  return (
    <TornadoCardWithGlow enterFrom="right" sweepDelay={0.58} instantReveal={instantReveal}>
      <CircularTornadoCard eyebrow="If you're a" title="Job Seeker" tornadoSide="trailing" size={CARD_PX}>
        <div className="space-y-2 sm:space-y-2.5">
          <p className="font-normal leading-snug text-black">
            You&apos;ve sent 100+ applications into the void. No responses. No feedback. Just automated
            rejections, or worse, silence. You&apos;re competing against algorithms that screen you out for the
            wrong keywords.
          </p>
          <p className="font-bold text-[1.1em] leading-snug text-black">
            <strong className="font-extrabold text-black">The result?</strong>
          </p>
          <p className="font-normal leading-snug text-black">
            Longer job searches, missed opportunities, and no clear way for employers to see what you&apos;re
            truly capable of.
          </p>
        </div>
      </CircularTornadoCard>
    </TornadoCardWithGlow>
  );
}

const swiperPaginationLight =
  "[&_.swiper-pagination-bullet]:bg-black/25 [&_.swiper-pagination-bullet-active]:bg-black/70";

export function EmployerJobSeekerSection() {
  return (
    <section aria-labelledby="employer-job-seeker-heading" className="relative z-30 isolate">
      {/* md+: same constrained column as before */}
      <div className="mx-auto w-full max-w-[80%] px-4 sm:px-6">
        <h2
          id="employer-job-seeker-heading"
          className="mx-auto max-w-4xl text-pretty text-center text-[clamp(1rem,0.85rem+2.8vw,3.5rem)] font-bold leading-[1.1] text-black sm:mb-16"
        >
          Stop Hiring the Wrong People Start Hiring Verified Talent.
        </h2>

        <DeviceScreen md lg>
          <div className="flex flex-col items-center justify-center gap-10 pt-8 sm:gap-16 sm:pt-12 lg:flex-row lg:flex-nowrap lg:gap-12">
            <EmployerCard />
            <JobSeekerCard />
          </div>
        </DeviceScreen>
      </div>

      {/* Mobile: full section width (not limited by max-w-[80%]); edge padding matches page rhythm */}
      <DeviceScreen sm>
        <div className="w-full pt-4">
          <MobileSwiper className={swiperPaginationLight}>
            <EmployerCard instantReveal />
            <JobSeekerCard instantReveal />
          </MobileSwiper>
        </div>
      </DeviceScreen>
    </section>
  );
}

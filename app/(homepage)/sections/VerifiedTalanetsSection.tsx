"use client";

import Image from "next/image";

import {
  Graphics14,
  Graphics15,
  Graphics16,
  Graphics21,
  Graphics32,
} from "@/assets/images";
import { Icon11, Icon16, Icon17, Icon18, Icon19 } from "@/assets";
import { DeviceScreen, FadeInScale, FadeUp, HeroOrbitBackdrop } from "@/shared-ui";
import ImageSwiper from "@/shared-ui/Carousel/ImageSwiper";
import { GradientCtaButton } from "../../../shared-ui/GradientCtaButton";
import { ShinyText } from "@/shared-ui/ReactBits";
import { motion } from "motion/react";
import DiagonalCarouselLoop from "@/shared-ui/Carousel";

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
    </svg>
  );
}

export function VerifiedTalanetsSection() {
  return (
    <section
      className="relative isolate -mx-4 overflow-x-clip overflow-y-visible md:-mx-6 lg:-mx-8"
      aria-labelledby="hero-heading"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[min(100%,96rem)] flex-col items-center px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-4xl text-center sm:mb-12 lg:mb-16">
          <h1
            id="hero-heading"
            className="text-balance font-bold leading-[1.1] text-black text-[clamp(2.75rem,1.25rem+5.5vw,5.0625rem)]"
          >
            <span className="block">
              <ShinyText
                text="Verified Talents"
                disabled={false}
                speed={3}
                className="mx-0! inline-block! cursor-default! rounded-none! p-0!"
                color="#000000"
                shineColor="#435FF6"
                spread={120}
                yoyo={false}
                pauseOnHover={false}
                direction="left"
                delay={0}
              />
            </span>
            <span className="block">
              <span className="relative inline-block">
                <ShinyText
                  text="at the Speed of AI"
                  disabled={false}
                  speed={3}
                  className="mx-0! inline-block! cursor-default! rounded-none! p-0!"
                  color="#000000"
                  shineColor="#435FF6"
                  spread={120}
                  yoyo={false}
                  pauseOnHover={false}
                  direction="left"
                  delay={0}
                />
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute -right-5 -top-1 inline-flex sm:-right-6 sm:-top-1.5"
                  animate={{ scale: [1, 1.12, 1], rotate: [0, 8, 0], opacity: [0.85, 1, 0.85] }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatType: "loop",
                  }}
                >
                  <SparkleIcon className="h-4 w-4 text-black sm:h-5 sm:w-5" />
                </motion.span>
              </span>
            </span>
          </h1>
          <h3 className="pt-8 relative z-10 text-[clamp(1.5rem,0.65rem+2.6vw,2.5rem)] font-bold text-[#455FF6] mx-auto max-w-[650px] leading-[1.30]">
            The first recruitment platform built on truth, not volume.
          </h3>
        </div>
        <FadeInScale delay={0.08} className="w-full">
          <DeviceScreen sm>
            <div className="relative w-full">
              <div
                className="pointer-events-none absolute inset-0 z-0 flex items-end justify-center overflow-visible"
                aria-hidden
              >
                <Image
                  src={Graphics21}
                  alt=""
                  width={920}
                  height={400}
                  className="h-auto w-full max-w-[min(100%,26rem)] -translate-y-[38%] object-contain object-bottom select-none"
                  sizes="100vw"
                />
              </div>
              <div className="relative z-10 mx-auto w-full max-w-sm">
                <ImageSwiper
                  images={[Graphics14, Graphics15, Graphics16, Graphics32]}
                  alts={[
                    "Recruitment screening workflow",
                    "Hiring and collaboration",
                    "Verified candidate matching",
                  ]}
                  slideBadges={[
                    [
                      {
                        node: <Icon16 />,
                        position: "bottom-right",
                      },
                    ],
                    [
                      {
                        node: <Icon17 />,
                        position: "top-left",
                      },
                    ],
                    [
                      {
                        node: <Icon18 />,
                        position: "top-right",
                      },
                    ],
                    [
                      {
                        node: <Icon19 />,
                        position: "bottom-left",
                      },
                    ],
                  ]}
                  badgeSize={168}
                  badgesOutside
                  navigation={false}
                  autoplay
                  loop
                  sizes="100vw"
                  slideFrameClassName="relative aspect-square w-full rounded-3xl"
                />
              </div>
            </div>
          </DeviceScreen>
          <DeviceScreen md lg>
            <HeroOrbitBackdrop>
              <div className="relative z-10 w-full">
                <DiagonalCarouselLoop />
              </div>
            </HeroOrbitBackdrop>
          </DeviceScreen>
        </FadeInScale>
      </div>
      <FadeUp
        delay={0.12}
        className="relative z-10 mx-auto mt-8 flex w-full max-w-[min(100%,96rem)] flex-col items-center justify-center gap-3 px-4 sm:mt-12 sm:flex-row sm:gap-3 sm:px-6 lg:px-8"
      >
        <GradientCtaButton
          className="w-full max-w-[320px] px-6 py-3 sm:w-auto sm:max-w-none sm:px-14"
          text="Start Hiring Smarter"
          href="/employer"
        />
        <GradientCtaButton
          href="/candidate"
          className="w-full max-w-[320px] px-6 py-3 sm:w-auto sm:max-w-none sm:px-14"
          text="Get Verified & Hired"
        />
      </FadeUp>
    </section>
  );
}

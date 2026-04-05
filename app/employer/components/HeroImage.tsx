"use client";

import Image, { StaticImageData } from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import {
  Graphics13,
  Graphics34,
  Graphics35,
  Graphics36,
  Graphics37,
  Graphics38,
  Graphics39,
  Graphics40,
} from "@/assets/images";
import { DeviceScreen, FloatMotion, HeartbeatMotion } from "@/shared-ui";
import clsx from "clsx";

const MOBILE_BADGE_PX = 108;

function HeroCornerBadge({
  src,
  alt = "",
  className,
  size = MOBILE_BADGE_PX,
}: {
  src: StaticImageData;
  alt?: string;
  className: string;
  size: number;
}) {
  return (
    <HeartbeatMotion className={`pointer-events-none ${className}`}>
    <div className={clsx("pointer-events-none inline-flex shrink-0", className)}>
      <div className="flex items-center justify-center">
        <span
          className="relative block overflow-hidden"
          style={{ width: size, height: size, minWidth: size, minHeight: size }}
        >
          <Image
            src={src}
            alt={alt}
            width={size}
            height={size}
            className="h-full w-full object-contain"
            placeholder="blur"
            sizes={`${size}px`}
          />
        </span>
      </div>
    </div>
    </HeartbeatMotion>
  );
}

export function HeroImage() {
  const reduceMotion = useReducedMotion();

  /** Mobile hero: Graphics 37–40, inset so badges stay inside the photo. */
  const mobileHeroBadges: Array<{
    src: StaticImageData;
    alt: string;
    fromLeft: boolean;
    positionClass: string;
    size: number;
  }> = [
    {
      src: Graphics37,
      alt: "Employer hero highlight, top left",
      fromLeft: true,
      positionClass: "left-2 top-2 sm:left-3 sm:top-3",
      size: MOBILE_BADGE_PX,
    },
    {
      src: Graphics39,
      alt: "Employer hero highlight, top right",
      fromLeft: false,
      positionClass: "right-15 -top-6 sm:right-3 sm:top-3",
      size: MOBILE_BADGE_PX,
    },
    {
      src: Graphics38,
      alt: "Employer hero highlight, bottom left",
      fromLeft: true,
      positionClass: "left-30 bottom-2 sm:left-15 sm:bottom-3",
      size: MOBILE_BADGE_PX,
    },
    {
      src: Graphics40,
      alt: "Employer hero highlight, bottom right",
      fromLeft: false,
      positionClass: "right-2 bottom-20 sm:right-3 sm:bottom-3",
      size: MOBILE_BADGE_PX,
    },
  ];

  /** Same assets and corner offsets as `DiagonalCarouselLoop` badge ring. */
  const DESKTOP_HERO_BADGE_PX = 208;
  const desktopHeroBadges: Array<{
    src: StaticImageData;
    alt: string;
    fromLeft: boolean;
    positionClass: string;
  }> = [
    {
      src: Graphics34,
      alt: "Verified candidate",
      fromLeft: true,
      positionClass:
        "left-0 top-30 -translate-x-[32%] -translate-y-[38%] sm:-translate-x-[36%] sm:-translate-y-[44%]",
    },
    {
      src: Graphics36,
      alt: "ROI",
      fromLeft: false,
      positionClass:
        "right-0 top-40 translate-x-[32%] -translate-y-[38%] sm:translate-x-[36%] sm:-translate-y-[44%]",
    },
    {
      src: Graphics35,
      alt: "Less screening",
      fromLeft: true,
      positionClass:
        "left-10 bottom-30 -translate-x-[34%] translate-y-[34%] sm:-translate-x-[40%] sm:translate-y-[40%]",
    },
    {
      src: Graphics40,
      alt: "Match accuracy",
      fromLeft: false,
      positionClass:
        "right-15 bottom-50 translate-x-[34%] translate-y-[34%] sm:translate-x-[40%] sm:translate-y-[40%]",
    },
  ];

  return (
    <>
      <DeviceScreen sm>
        <FloatMotion deferUntilLoad>
            <div className="mx-auto w-full max-w-[min(100%,960px)] min-w-0 py-6">
              <div className="relative w-full overflow-hidden rounded-4xl sm:rounded-[2.25rem]">
                <Image
                  src={Graphics13}
                  alt="A professional handshake representing trusted hiring outcomes."
                  priority
                  placeholder="blur"
                  sizes="100vw"
                  className="mx-auto block h-auto w-full object-cover object-center"
                />
                {mobileHeroBadges.map((badge, idx) => {
                  const fromX = badge.fromLeft ? -10 : 10;
                  const delay = reduceMotion ? 0 : idx * 0.9;

                  return (
                    <motion.div
                      key={`mobile-hero-badge-${idx}`}
                      className={`absolute z-20 ${badge.positionClass}`}
                      initial={reduceMotion ? false : { opacity: 0, x: fromX }}
                      animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                      transition={
                        reduceMotion
                          ? undefined
                          : { duration: 0.38, delay, ease: [0.16, 1, 0.3, 1] }
                      }
                    >
                      <HeroCornerBadge
                        size={badge.size}
                        src={badge.src}
                        alt={badge.alt}
                        className=""
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
        </FloatMotion>
      </DeviceScreen>
      <DeviceScreen md lg>
        <FloatMotion deferUntilLoad>
          <div className="mx-auto w-full max-w-[min(100%,960px)] min-w-0 py-8">
            <div className="relative w-full overflow-visible">
              <div className="overflow-hidden rounded-4xl sm:rounded-[2.25rem]">
                <Image
                  src={Graphics13}
                  alt="A professional handshake representing trusted hiring outcomes."
                  priority
                  placeholder="blur"
                  sizes="(max-width: 1368px) 100vw, 782px"
                  className="mx-auto block h-auto w-full object-cover object-center"
                />
              </div>
              {desktopHeroBadges.map((badge, idx) => {
                const fromX = badge.fromLeft ? -10 : 10;
                const delay = reduceMotion ? 0 : idx * 0.9;

                return (
                  <motion.div
                    key={badge.alt}
                    className={`absolute z-20 ${badge.positionClass}`}
                    initial={reduceMotion ? false : { opacity: 0, x: fromX }}
                    animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                    transition={
                      reduceMotion
                        ? undefined
                        : { duration: 0.38, delay, ease: [0.16, 1, 0.3, 1] }
                    }
                  >
                    <HeroCornerBadge
                      size={DESKTOP_HERO_BADGE_PX}
                      src={badge.src}
                      alt={badge.alt}
                      className=""
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </FloatMotion>
      </DeviceScreen>
    </>
  );
}

"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

import {
  Graphics13,
  Graphics22,
} from "@/assets/images";
import { Icon16, Icon17, Icon18, Icon19 } from "@/assets";
import { DeviceScreen, FloatMotion, HeartbeatMotion } from "@/shared-ui";

const MOBILE_BADGE_PX = 178;

type BadgePosition = "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";

function badgePositionClass(position: BadgePosition) {
  switch (position) {
    case "top-left":
      return "left-0 top-[14%] -translate-x-2 -translate-y-14";
    case "top-right":
      return "right-0 top-[14%] translate-x-2 -translate-y-14";
    case "bottom-left":
      return "left-10 bottom-[-28%] -translate-x-10 translate-y-12";
    case "bottom-right":
      return "right-[-10%] bottom-[-28%] -translate-x-10 translate-y-12";
  }
}

function HeroCornerBadge({
  node,
  alt = "",
  className,
  size = MOBILE_BADGE_PX,
}: {
  node: ReactNode;
  alt?: string;
  className: string;
  size: number;
}) {
  return (
    <HeartbeatMotion className={`pointer-events-none ${className}`}>
      <div aria-hidden={alt === "" ? true : undefined}>
        <div
          className=""
          style={{ width: size, height: size }}
        >
          <div className={`p-3 [&_svg]:h-[${size}px] [&_svg]:w-[${size}px]`}>
            {node}
          </div>
        </div>
      </div>
    </HeartbeatMotion>
  );
}

export function HeroImage() {
  const reduceMotion = useReducedMotion();
  const badges: Array<{
    node: ReactNode;
    alt?: string;
    position: BadgePosition;
    size: number;
  }> = [
    { node: <Icon16 />, position: "top-left", size: 148 },
    { node: <Icon17 />, position: "top-right", size: MOBILE_BADGE_PX },
    { node: <Icon18 />, position: "bottom-left", size: MOBILE_BADGE_PX },
    { node: <Icon19 />, position: "bottom-right", size: MOBILE_BADGE_PX },
  ];

  return (
    <>
      <DeviceScreen sm>
        <FloatMotion deferUntilLoad>
            <div className="mx-auto w-full max-w-[min(100%,960px)] min-w-0 py-6">
              <div className="relative w-full overflow-visible">
                <div className="overflow-hidden rounded-4xl sm:rounded-[2.25rem]">
                  <Image
                    src={Graphics22}
                    alt="A professional handshake representing trusted hiring outcomes."
                    priority
                    placeholder="blur"
                    sizes="100vw"
                    className="mx-auto block h-auto w-full object-cover object-center"
                  />
                </div>
                {badges.map((badge, idx) => {
                  const fromX =
                    badge.position === "top-left" || badge.position === "bottom-left"
                      ? -10
                      : 10;
                  const delay = reduceMotion ? 0 : idx * 0.9;

                  return (
                    <motion.div
                      key={badge.position}
                      className={`absolute z-20 ${badgePositionClass(badge.position)}`}
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
                        node={badge.node}
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
          <div className="mx-auto w-full max-w-[min(100%,960px)] min-w-0 overflow-hidden rounded-4xl py-8 sm:rounded-[2.25rem]">
            <Image
              src={Graphics13}
              alt="A professional handshake representing trusted hiring outcomes."
              priority
              placeholder="blur"
              sizes="(max-width: 1368px) 100vw, 782px"
              className="mx-auto block h-auto w-full object-cover object-center"
            />
          </div>
        </FloatMotion>
      </DeviceScreen>
    </>
  );
}

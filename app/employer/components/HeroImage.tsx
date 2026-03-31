"use client";

import Image from "next/image";
import type { ReactNode } from "react";

import {
  Graphics13,
  Graphics22,
} from "@/assets/images";
import { Icon16, Icon17, Icon18, Icon19 } from "@/assets";
import { DeviceScreen, FloatMotion, HeartbeatMotion } from "@/shared-ui";

const MOBILE_BADGE_PX = 128;

type BadgePosition = "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";

function badgePositionClass(position: BadgePosition) {
  switch (position) {
    case "top-left":
      return "left-0 top-[0%] -translate-x-2 -translate-y-14";
    case "top-right":
      return "right-0 top-[0%] translate-x-2 -translate-y-14";
    case "bottom-left":
      return "left-10 bottom-0 -translate-x-10 translate-y-12";
    case "bottom-right":
      return "right-0 bottom-0 -translate-x-10 translate-y-12";
  }
}

function HeroCornerBadge({
  node,
  alt = "",
  className,
}: {
  node: ReactNode;
  alt?: string;
  className: string;
}) {
  return (
    <HeartbeatMotion className={`pointer-events-none absolute ${className}`}>
      <div aria-hidden={alt === "" ? true : undefined}>
        <div
          className=""
          style={{ width: MOBILE_BADGE_PX, height: MOBILE_BADGE_PX }}
        >
          <div className="h-[168px] w-[128px] p-3 [&_svg]:h-[128px] [&_svg]:w-[128px]">
            {node}
          </div>
        </div>
      </div>
    </HeartbeatMotion>
  );
}

export function HeroImage() {
  const badges: Array<{
    node: ReactNode;
    alt?: string;
    position: BadgePosition;
  }> = [
    { node: <Icon16 />, position: "top-left" },
    { node: <Icon17 />, position: "top-right" },
    { node: <Icon18 />, position: "bottom-left" },
    { node: <Icon19 />, position: "bottom-right" },
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
                {badges.map((badge) => (
                  <HeroCornerBadge
                    key={badge.position}
                    node={badge.node}
                    alt={badge.alt}
                    className={`z-20 ${badgePositionClass(badge.position)}`}
                  />
                ))}
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

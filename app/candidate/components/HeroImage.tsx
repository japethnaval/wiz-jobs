"use client";

import Image from "next/image";

import {
  Graphics3,
  Graphics27,
} from "@/assets/images";
import { DeviceScreen, FloatMotion, HeartbeatMotion } from "@/shared-ui";
import { ReactNode } from "react";
import { Icon25, Icon26, Icon27, Icon28 } from "@/assets";

const CANDIDATE_HERO_ALT =
  "A candidate profile preview with verification and scoring indicators.";

function HeroBadge({
  node,
  size,
  className,
  alt = "",
}: {
  node: ReactNode;
  size: number;
  className: string;
  alt?: string;
}) {
  return (
    <HeartbeatMotion className={`pointer-events-none absolute ${className}`}>
      <div aria-hidden={alt === "" ? true : undefined}>
        <div
          className="h-full w-full [&_svg]:h-full [&_svg]:w-full"
          style={{ width: size, height: size }}
        >
          {node}
        </div>
      </div>
    </HeartbeatMotion>
  );
}

export function HeroImage() {
  return (
    <>
      <DeviceScreen sm>
        <FloatMotion deferUntilLoad>
          <div className="mx-auto w-full max-w-[min(100%,960px)] min-w-0 py-6">
            <div className="relative w-full overflow-visible">
              <div className="overflow-hidden rounded-4xl sm:rounded-[2.25rem]">
                <Image
                  src={Graphics27}
                  alt={CANDIDATE_HERO_ALT}
                  priority
                  placeholder="blur"
                  sizes="100vw"
                  className="mx-auto block h-auto w-full object-cover object-center"
                />
              </div>
              <HeroBadge
                node={<Icon27 />}
                size={160}
                className="left-0 top-[-5%] z-20 -translate-x-[5%] translate-y-[0%]"
              />
              <HeroBadge
                node={<Icon26 />}
                size={80}
                className="right-2 top-60 z-20 translate-x-2 -translate-y-1"
              />
              <HeroBadge
                node={<Icon25 />}
                size={80}
                className="left-5 bottom-0 z-20 translate-x-[0%] translate-y-[-190%]"
              />
              <HeroBadge
                node={<Icon28 />}
                size={80}
                className="right-0 top-0 z-20"
              />
            </div>
          </div>
        </FloatMotion>
      </DeviceScreen>
      <DeviceScreen md lg>
        <FloatMotion deferUntilLoad>
          <div className="mx-auto w-full max-w-[min(100%,960px)] min-w-0 overflow-hidden rounded-4xl py-8 sm:rounded-[2.25rem]">
            <Image
              src={Graphics3}
              alt={CANDIDATE_HERO_ALT}
              priority
              placeholder="blur"
              sizes="(max-width: 1040px) 100vw, 1040px"
              className="mx-auto block h-auto w-full object-cover object-center"
            />
          </div>
        </FloatMotion>
      </DeviceScreen>
    </>
  );
}

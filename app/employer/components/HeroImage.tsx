"use client";

import Image, { type StaticImageData } from "next/image";

import {
  Graphics13,
  Graphics22,
  Graphics23,
  Graphics24,
  Graphics25,
  Graphics26,
} from "@/assets/images";
import { DeviceScreen, FloatMotion, HeartbeatMotion } from "@/shared-ui";

const MOBILE_BADGE_PX = 108;

function HeroCornerBadge({
  image,
  alt,
  className,
}: {
  image: StaticImageData;
  alt: string;
  className: string;
}) {
  const blur =
    typeof image === "object" && image !== null && "blurDataURL" in image;
  return (
    <HeartbeatMotion className={`pointer-events-none absolute ${className}`}>
      <div
        aria-hidden={alt === "" ? true : undefined}
      >
        <Image
          src={image}
          alt={alt}
          width={MOBILE_BADGE_PX}
          height={MOBILE_BADGE_PX}
          className="rounded-full object-cover shadow-md"
          sizes={`${MOBILE_BADGE_PX}px`}
          placeholder={blur ? "blur" : "empty"}
        />
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
                    src={Graphics22}
                    alt="A professional handshake representing trusted hiring outcomes."
                    priority
                    placeholder="blur"
                    sizes="100vw"
                    className="mx-auto block h-auto w-full object-cover object-center"
                  />
                </div>
                  <HeroCornerBadge
                  image={Graphics23}
                  alt="Graphics 23"
                  className="left-0 top-5 z-20 -translate-x-2 -translate-y-2"
                />
                <HeroCornerBadge
                  image={Graphics24}
                  alt="Graphics 24"
                  className="right-0 top-15 z-20 translate-x-2 -translate-y-1"
                />
                <HeroCornerBadge
                  image={Graphics25}
                  alt="Graphics 25"
                  className="left-0 bottom-0 z-20 -translate-x-3 translate-y-[-50%]"
                />
                <HeroCornerBadge
                  image={Graphics26}
                  alt="Graphics 26"
                  className="right-0 bottom-0 z-20 translate-x-3 translate-y-3"
              />
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

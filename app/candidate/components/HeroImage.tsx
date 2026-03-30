"use client";

import Image, { type StaticImageData } from "next/image";

import {
  Graphics3,
  Graphics27,
  Graphics28,
  Graphics29,
  Graphics30,
  Graphics31,
} from "@/assets/images";
import { DeviceScreen, FloatMotion, HeartbeatMotion } from "@/shared-ui";

const BADGE_SIZE_DEFAULT = 72;

function HeroCornerBadge({
  image,
  alt,
  className,
  size = BADGE_SIZE_DEFAULT,
}: {
  image: StaticImageData;
  alt: string;
  className: string;
  size?: number;
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
          width={size}
          height={size}
          className="object-cover"
          sizes={`${size}px`}
          placeholder={blur ? "blur" : "empty"}
        />
      </div>
    </HeartbeatMotion>
  );
}

const CANDIDATE_HERO_ALT =
  "A candidate profile preview with verification and scoring indicators.";

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
              <HeroCornerBadge
                image={Graphics28}
                size={80}
                alt="Graphics 28"
                className="left-0 top-5 z-20 -translate-x-[-50%] -translate-y-[-50%]"
              />
              <HeroCornerBadge
                image={Graphics29}
                size={80}
                alt="Graphics 29"
                className="right-0 top-15 z-20 translate-x-2 -translate-y-1"
              />
              <HeroCornerBadge
                image={Graphics31}
                size={80}
                alt="Graphics 31"
                className="left-0 bottom-0 z-20 translate-x-[0%] translate-y-[-190%]"
              />
              <HeroCornerBadge
                image={Graphics30}
                size={160}
                alt="Graphics 30"
                className="right-0 bottom-0 z-20 translate-x-[50%] translate-y-[-50%]"
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

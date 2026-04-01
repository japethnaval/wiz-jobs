"use client";

import type { StaticImageData } from "next/image";
import Image from "next/image";
import { type ReactNode } from "react";
import clsx from "clsx";

import { Graphics21 } from "@/assets/images";
import { FloatMotion } from "./Motion";

export type HeroOrbitBackdropOrbitPreset = "default" | "mobile";

export type HeroOrbitBackdropProps = {
  children: ReactNode;
  className?: string;
  /** Mobile: tighter orbit and stronger upward shift (verified talents swiper). */
  orbitPreset?: HeroOrbitBackdropOrbitPreset;
  orbitImage?: StaticImageData;
  orbitAlt?: string;
  orbitLayerClassName?: string;
  orbitImageClassName?: string;
  width?: number;
  height?: number;
  sizes?: string;
  contentClassName?: string;
};

const ORBIT_IMAGE_PRESET_CLASS: Record<HeroOrbitBackdropOrbitPreset, string> = {
  default:
    "h-auto w-full max-w-4xl shrink-0 -translate-y-[20%] object-contain object-bottom select-none lg:translate-y-0",
  mobile:
    "h-auto w-full max-w-[min(100%,26rem)] shrink-0 -translate-y-[-30%] object-contain object-bottom select-none",
};

export function HeroOrbitBackdrop({
  children,
  className,
  orbitPreset = "default",
  orbitImage = Graphics21,
  orbitAlt = "",
  orbitLayerClassName,
  orbitImageClassName,
  width = 920,
  height = 400,
  sizes = "(min-width:768px) 56rem",
  contentClassName,
}: HeroOrbitBackdropProps) {
  return (
    <FloatMotion deferUntilLoad>  
      <div className={clsx("relative w-full", className)}>
        <div
          className={clsx(
            "pointer-events-none absolute inset-0 z-0 flex items-end justify-center overflow-visible",
            orbitLayerClassName,
          )}
          aria-hidden={orbitAlt === "" ? true : undefined}
        >
          <Image
            src={orbitImage}
            alt={orbitAlt}
            width={width}
            height={height}
            className={clsx(ORBIT_IMAGE_PRESET_CLASS[orbitPreset], orbitImageClassName)}
            sizes={sizes}
          />
        </div>
        <div className={clsx("relative z-10 w-full", contentClassName)}>
          {children}
        </div>
      </div>
    </FloatMotion>
  );
}

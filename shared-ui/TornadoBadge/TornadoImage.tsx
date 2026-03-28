"use client";

import type { StaticImageData } from "next/image";
import Image from "next/image";
import { motion, useTime, useTransform } from "motion/react";

type TornadoImageProps = {
  image: string | StaticImageData;
  /** Passed to `next/image` (default tuned for small badge) */
  sizes?: string;
  /** Classes on the `<Image>` (layout / width) */
  imageClassName?: string;
};

/** Degrees per ms of timeline — tuned so one full turn takes ~11s */
const ROTATE_DEG_PER_MS = 360 / 11_000;

const defaultImageClass =
  "pointer-events-none h-auto w-full select-none";

export function TornadoImage({
  image,
  sizes = "128px",
  imageClassName,
}: TornadoImageProps) {
  const time = useTime();

  // Spiral = steady in-place rotation only (no x/y orbit). Origin stays center of the badge stack.
  const rotate = useTransform(time, (t) => t * ROTATE_DEG_PER_MS);

  return (
    <motion.div
      className="relative flex w-full origin-center justify-center will-change-transform"
      style={{ rotate }}
    >
      <Image
        src={image}
        alt=""
        sizes={sizes}
        placeholder="blur"
        className={[defaultImageClass, imageClassName].filter(Boolean).join(" ")}
      />
    </motion.div>
  );
}

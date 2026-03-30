"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import type { StaticImageData } from "next/image";

import {
  Graphics14,
  Graphics15,
  Graphics16,
  Graphics17,
  Graphics18,
  Graphics19,
  Graphics20,
} from "@/assets/images";
import { HeartbeatMotion } from "../Motion";

function CarouselBadgeImage({
  image,
  alt,
  className,
}: {
  image: StaticImageData;
  alt: string;
  className?: string;
}) {
  return (
    <div className={clsx("pointer-events-none inline-flex shrink-0", className)}>
      <div className="flex items-center justify-center">
        <Image
          src={image}
          alt={alt}
          width={168}
          height={168}
          className="rounded-full object-cover"
          sizes="168px"
          placeholder="blur"
        />
      </div>
    </div>
  );
}

type Card = {
  id: number;
  image: StaticImageData;
};

const cards: Card[] = [
  {
    id: 1,
    image: Graphics14,
  },
  {
    id: 2,
    image: Graphics15,
  },
  {
    id: 3,
    image: Graphics16,
  },
];

const LOOP_RANGE = 2;

const CARD_ACTIVE = 400;
const CARD_INACTIVE = 280;

export default function DiagonalCarouselLoop() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => prev + 1);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const getWrappedIndex = (index: number) => {
    return ((index % cards.length) + cards.length) % cards.length;
  };

  return (
    <div className="relative flex w-full justify-center overflow-x-clip overflow-y-visible py-2 md:py-0">
      <div className="relative flex h-[min(640px,85vh)] w-full max-w-[min(100%,56rem)] origin-center scale-[0.52] items-center justify-center sm:scale-[0.72] md:h-[640px] md:max-w-none md:scale-100">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 z-60 -translate-x-1/2 -translate-y-1/2"
          aria-hidden
        >
          <div className="relative h-72 w-72 sm:h-80 sm:w-80 md:h-88 md:w-88">
            <div className="absolute left-0 top-0 -translate-x-[32%] -translate-y-[38%] sm:-translate-x-[36%] sm:-translate-y-[44%]">
                <CarouselBadgeImage image={Graphics18} alt="Verified candidate" />
            </div>
            <div className="absolute right-0 top-0 translate-x-[32%] -translate-y-[38%] sm:translate-x-[36%] sm:-translate-y-[44%]">
                <CarouselBadgeImage image={Graphics19} alt="ROI" />
            </div>
            <div className="absolute left-0 bottom-0 -translate-x-[34%] translate-y-[34%] sm:-translate-x-[40%] sm:translate-y-[40%]">
                <CarouselBadgeImage image={Graphics17} alt="Less screening" />
            </div>
            <div className="absolute right-0 bottom-0 translate-x-[34%] translate-y-[34%] sm:translate-x-[40%] sm:translate-y-[40%]">
                <CarouselBadgeImage image={Graphics20} alt="Match accuracy" />
            </div>
          </div>
        </div>
        {Array.from({ length: cards.length }).map((_, i) => {
          const index = getWrappedIndex(i);
          const offsetRaw = i - (active % cards.length);

          let offset = offsetRaw;
          if (offset > cards.length / 2) offset -= cards.length;
          if (offset < -cards.length / 2) offset += cards.length;

          if (Math.abs(offset) > LOOP_RANGE) return null;

          const card = cards[index];
          const isActive = offset === 0;

          const xStep = 280;
          const yStep = 80;
          const x = offset * xStep;
          const y = offset * yStep;

          const cardSize = isActive ? CARD_ACTIVE : CARD_INACTIVE;

          return (
            <motion.div
              key={card.id + "-" + i}
              className="absolute cursor-pointer overflow-visible rounded-3xl"
              onClick={() => setActive(active + offset)}
              animate={{
                x,
                y,
                scale: isActive ? 1.12 : 0.85,
                rotate: 0,
                zIndex: isActive ? 30 : 20 - Math.abs(offset),
                opacity: 1,
                filter: isActive ? "blur(0px)" : "blur(1px)",
              }}
              transition={{
                type: "spring",
                stiffness: 110,
                damping: 18,
              }}
              style={{
                width: cardSize,
                height: cardSize,
              }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-3xl bg-transparent shadow-2xl">
                <Image
                  src={card.image}
                  alt=""
                  fill
                  placeholder="blur"
                  className="object-cover"
                  sizes="(max-width:768px) 85vw, 400px"
                  priority={isActive}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

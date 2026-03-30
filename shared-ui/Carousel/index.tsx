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

type CardBadge = {
  image: StaticImageData;
  alt: string;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
};

type Card = {
  id: number;
  image: StaticImageData;
  badges?: CardBadge[];
};

const cards: Card[] = [
  {
    id: 1,
    image: Graphics14,
    badges: [
      {
        image: Graphics17,
        alt: "Less screening",
        position: "bottom-left",
      },
      {
        image: Graphics18,
        alt: "Verified candidate",
        position: "top-left",
      },
    ],
  },
  {
    id: 2,
    image: Graphics15,
    badges: [
      {
        image: Graphics19,
        alt: "ROI",
        position: "top-right",
      },
    ],
  },
  {
    id: 3,
    image: Graphics16,
    badges: [
      {
        image: Graphics20,
        alt: "Match accuracy",
        position: "bottom-right",
      },
    ],
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

              {card.badges?.map((badge, idx) => {
                const positions: Record<CardBadge["position"], string> = {
                  "top-left":
                    "left-0 top-0 z-20 -translate-x-3 -translate-y-3",
                  "top-right":
                    "right-0 top-0 z-20 translate-x-3 -translate-y-1",
                  "bottom-left":
                    "left-0 bottom-0 z-20 -translate-x-5 translate-y-5",
                  "bottom-right":
                    "right-0 bottom-0 z-20 translate-x-5 translate-y-5",
                  center:
                    "left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-[58%]",
                };

                return (
                  <div
                    key={idx}
                    className={clsx("absolute", positions[badge.position])}
                  >
                    <CarouselBadgeImage image={badge.image} alt={badge.alt} />
                  </div>
                );
              })}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

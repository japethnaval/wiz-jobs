"use client";

import clsx from "clsx";
import Image from "next/image";
import type { ReactNode } from "react";
import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { HeartbeatMotion } from "../Motion";
import {
  FloatingOverlayLayer,
  FloatingOverlayProvider,
  getBadgePositionStyles,
} from "../FloatingOverlay";

export type ImageSwiperBadgePosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "center";

export type ImageSwiperBadge = {
  /** Decorative by default; pass text only if the badge needs to be announced. */
  alt?: string;
  position: ImageSwiperBadgePosition;
  node: ReactNode;
};

const BADGE_POSITION_CLASSES: Record<ImageSwiperBadgePosition, string> = {
  "top-left":
    "left-2 top-2 z-50 -translate-x-0 -translate-y-0 sm:left-3 sm:top-3",
  "top-right":
    "right-2 top-2 z-50 translate-x-0 -translate-y-0 sm:right-3 sm:top-3",
  "bottom-left":
    "left-2 bottom-2 z-50 -translate-x-0 translate-y-0 sm:left-3 sm:bottom-3",
  "bottom-right":
    "right-2 bottom-2 z-50 translate-x-0 translate-y-0 sm:right-3 sm:bottom-3",
  center:
    "left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-[58%]",
};

/** Extra nudge so badges sit slightly off the image edges. */
const BADGE_EDGE_NUDGE_CLASSES: Record<ImageSwiperBadgePosition, string> = {
  "top-left": "-translate-x-3 -translate-y-3",
  "top-right": "translate-x-3 -translate-y-3",
  "bottom-left": "-translate-x-3 translate-y-3",
  "bottom-right": "translate-x-3 translate-y-3",
  center: "",
};

function SwiperBadgeImage({
  node,
  alt = "",
  size,
  className,
}: {
  node: ReactNode;
  alt?: string;
  size: number;
  className?: string;
}) {
  return (
    <div className={clsx("pointer-events-none inline-flex shrink-0", className)}>
      <div className="flex items-center justify-center">
        <span
          className="block"
          style={{ width: size, height: size, minWidth: size, minHeight: size }}
          aria-hidden={alt === "" ? true : undefined}
        >
          <span className="block h-full w-full [&_svg]:h-full [&_svg]:w-full">
            {node}
          </span>
        </span>
      </div>
    </div>
  );
}

type Props = {
  images: (string | import("next/image").StaticImageData)[];
  alts?: string[];
  className?: string;
  slideFrameClassName?: string;
  sizes?: string;
  navigation?: boolean;
  autoplay?: boolean;
  loop?: boolean;
  slideBadges?: (ImageSwiperBadge[] | undefined)[];
  badgeSize?: number;
  /** When true, render badges in a layer outside Swiper DOM (avoids transform/overflow clipping). */
  badgesOutside?: boolean;
};

export default function ImageSwiper({
  images,
  alts,
  className,
  slideFrameClassName,
  sizes = "100vw",
  navigation = true,
  autoplay = true,
  loop: loopProp,
  slideBadges,
  badgeSize = 208,
  badgesOutside = false,
}: Props) {
  const loopEnabled =
    images.length > 1 && (loopProp !== undefined ? loopProp : true);

  const [activeIndex, setActiveIndex] = useState(0);

  const modules = [Pagination];
  if (navigation) modules.push(Navigation);
  if (autoplay) modules.push(Autoplay);

  const paginationOutsideClassName = [
    "[&_.swiper]:flex [&_.swiper]:flex-col",
    "[&_.swiper-pagination]:static! [&_.swiper-pagination]:mt-3 [&_.swiper-pagination]:w-full",
    "[&_.swiper-pagination]:translate-y-0!",
    "[&_.swiper-pagination]:bottom-auto! [&_.swiper-pagination]:top-auto!",
  ].join(" ");

  const activeBadges = slideBadges?.[activeIndex];

  const swiperEl = (
    <Swiper
        modules={modules}
        spaceBetween={16}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={navigation}
        autoplay={
          autoplay
            ? { delay: 3000, disableOnInteraction: false }
            : false
        }
        loop={loopEnabled}
        onSwiper={(swiper: SwiperType) => setActiveIndex(swiper.realIndex ?? 0)}
        onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.realIndex ?? 0)}
        className={clsx(
          paginationOutsideClassName,
          slideBadges &&
            "overflow-visible [&_.swiper-wrapper]:overflow-visible [&_.swiper-slide]:overflow-visible",
          className ?? "rounded-xl",
        )}
      >
        {images.map((src, index) => {
          const blur =
            typeof src === "object" && src !== null && "blurDataURL" in src;
          const frameClasses =
            slideFrameClassName ?? "relative aspect-video w-full";
          const badges = slideBadges?.[index];

          const imageInner = (
            <Image
              src={src}
              alt={alts?.[index] ?? `Slide ${index + 1}`}
              fill
              className="object-cover"
              sizes={sizes}
              priority={index === 0}
              placeholder={blur ? "blur" : "empty"}
            />
          );

          return (
            <SwiperSlide key={index}>
              {slideBadges && !badgesOutside ? (
                <div className="relative w-full overflow-visible">
                  <div className={clsx(frameClasses, "overflow-hidden")}>
                    {imageInner}
                  </div>
                  {badges?.map((badge, idx) => (
                    <div
                      key={idx}
                      className={clsx(
                        "absolute",
                        BADGE_POSITION_CLASSES[badge.position],
                        BADGE_EDGE_NUDGE_CLASSES[badge.position],
                      )}
                    >
                      <HeartbeatMotion>
                      <SwiperBadgeImage
                        node={badge.node}
                        alt={badge.alt}
                        size={badgeSize}
                      />
                      </HeartbeatMotion>
                    </div>
                  ))}
                </div>
              ) : (
                <div className={frameClasses}>{imageInner}</div>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
  );

  if (!slideBadges || !badgesOutside) {
    return <div className="w-full">{swiperEl}</div>;
  }

  return (
    <FloatingOverlayProvider>
      <div className="w-full">{swiperEl}</div>
      <FloatingOverlayLayer>
        {(rect) =>
          activeBadges?.map((badge, idx) => (
            <div
              key={idx}
              style={getBadgePositionStyles(badge.position, rect)}
            >
              <HeartbeatMotion>
                <SwiperBadgeImage
                  node={badge.node}
                  alt={badge.alt}
                  size={badgeSize}
                />
              </HeartbeatMotion>
            </div>
          )) ?? null
        }
      </FloatingOverlayLayer>
    </FloatingOverlayProvider>
  );
}

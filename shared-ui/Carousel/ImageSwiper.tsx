"use client";

import clsx from "clsx";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { useRef, useState, type CSSProperties } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FradeRight, HeartbeatMotion } from "../Motion";

export type ImageSwiperBadgePosition =
  | "first-badge"
  | "second-badge"
  | "third-badge"
  | "fourth-badge";

export type ImageSwiperBadge = {
  /** Decorative by default; pass text only if the badge needs to be announced. */
  alt?: string;
  position: ImageSwiperBadgePosition;
  src: StaticImageData;
};

const BADGE_POSITION_CLASSES: Record<ImageSwiperBadgePosition, string> = {
  "first-badge":
    "left-8 top-25 z-50 -translate-x-0 -translate-y-0 sm:left-3 sm:top-3",
  "second-badge":
    "left-9 top-30 z-50 -translate-x-0 -translate-y-0 sm:left-9 sm:top-3",
  "fourth-badge":
    "right-8 top-25 z-50 -translate-x-0 -translate-y-0 sm:right-3 sm:top-3",
  "third-badge":
    "left-10 bottom-35 z-50 -translate-x-0 -translate-y-0 sm:left-10 sm:bottom-3",
};

function SwiperBadgeImage({
  src,
  alt = "",
  size,
  className,
}: {
  src: StaticImageData;
  alt?: string;
  size: number;
  className?: string;
}) {
  return (
    <div className={clsx("pointer-events-none inline-flex shrink-0", className)}>
      <div className="flex items-center justify-center">
        <span
          className="relative block overflow-hidden"
          style={{ width: size, height: size, minWidth: size, minHeight: size }}
        >
          <Image
            src={src}
            alt={alt}
            width={size}
            height={size}
            className="h-full w-full object-contain"
            placeholder="blur"
            sizes={`${size}px`}
          />
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
  onActiveIndexChange?: (index: number) => void;
  paginationActiveColor?: string;
  paginationInactiveColor?: string;
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
  badgeSize = 128,
  onActiveIndexChange,
  paginationActiveColor = "#455FF6",
  paginationInactiveColor = "rgba(69, 95, 246, 0.35)",
}: Props) {
  const loopEnabled =
    images.length > 1 && (loopProp !== undefined ? loopProp : true);

  const [activeIndex, setActiveIndex] = useState(0);
  const [badgeAnimEpoch, setBadgeAnimEpoch] = useState(0);
  const prevIndexRef = useRef(0);

  const setIndex = (idx: number, fromSlideChange: boolean) => {
    setActiveIndex(idx);
    onActiveIndexChange?.(idx);
    if (
      fromSlideChange &&
      slideBadges &&
      prevIndexRef.current !== idx
    ) {
      setBadgeAnimEpoch((n) => n + 1);
    }
    prevIndexRef.current = idx;
  };

  const modules = [Pagination];
  if (navigation) modules.push(Navigation);
  if (autoplay) modules.push(Autoplay);

  const paginationOutsideClassName = [
    "[&_.swiper]:flex [&_.swiper]:flex-col",
    "[&_.swiper-pagination]:static! [&_.swiper-pagination]:mt-3 [&_.swiper-pagination]:w-full",
    "[&_.swiper-pagination]:translate-y-0!",
    "[&_.swiper-pagination]:bottom-auto! [&_.swiper-pagination]:top-auto!",
  ].join(" ");

  const swiperPaginationVars = {
    "--swiper-pagination-color": paginationActiveColor,
    "--swiper-pagination-bullet-inactive-color": paginationInactiveColor,
    "--swiper-pagination-bullet-inactive-opacity": 1,
  } as CSSProperties;

  const swiperEl = (
    <Swiper
        style={swiperPaginationVars}
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
        onSwiper={(swiper: SwiperType) =>
          setIndex(swiper.realIndex ?? 0, false)
        }
        onSlideChange={(swiper: SwiperType) =>
          setIndex(swiper.realIndex ?? 0, true)
        }
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
              {slideBadges ? (
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
                      )}
                    >
                      {index === activeIndex ? (
                        <FradeRight
                          key={badgeAnimEpoch}
                          delay={0.3}
                          duration={0.9}
                        >
                          <HeartbeatMotion>
                            <SwiperBadgeImage
                              src={badge.src}
                              alt={badge.alt}
                              size={badgeSize}
                            />
                          </HeartbeatMotion>
                        </FradeRight>
                      ) : (
                        <HeartbeatMotion>
                          <SwiperBadgeImage
                            src={badge.src}
                            alt={badge.alt}
                            size={badgeSize}
                          />
                        </HeartbeatMotion>
                      )}
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

  return <div className="w-full">{swiperEl}</div>;
}

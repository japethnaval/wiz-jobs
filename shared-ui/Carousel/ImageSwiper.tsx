"use client";

import clsx from "clsx";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { HeartbeatMotion } from "../Motion";

export type ImageSwiperBadgePosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "center";

export type ImageSwiperBadge = {
  image: StaticImageData;
  alt: string;
  position: ImageSwiperBadgePosition;
};

const BADGE_POSITION_CLASSES: Record<ImageSwiperBadgePosition, string> = {
  "top-left":
    "left-2 top-2 z-20 -translate-x-0 -translate-y-0 sm:left-3 sm:top-3",
  "top-right":
    "right-2 top-2 z-20 translate-x-0 -translate-y-0 sm:right-3 sm:top-3",
  "bottom-left":
    "left-2 bottom-2 z-20 -translate-x-0 translate-y-0 sm:left-3 sm:bottom-3",
  "bottom-right":
    "right-2 bottom-2 z-20 translate-x-0 translate-y-0 sm:right-3 sm:bottom-3",
  center:
    "left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-[58%]",
};

function SwiperBadgeImage({
  image,
  alt,
  size,
  className,
}: {
  image: StaticImageData;
  alt: string;
  size: number;
  className?: string;
}) {
  const blur =
    typeof image === "object" && image !== null && "blurDataURL" in image;
  return (
    <div className={clsx("pointer-events-none inline-flex shrink-0", className)}>
      <div className="flex items-center justify-center">
        <Image
          src={image}
          alt={alt}
          width={size}
          height={size}
          className="rounded-full object-cover"
          sizes={`${size}px`}
          placeholder={blur ? "blur" : "empty"}
        />
      </div>
    </div>
  );
}

type Props = {
  images: (string | StaticImageData)[];
  alts?: string[];
  className?: string;
  slideFrameClassName?: string;
  sizes?: string;
  navigation?: boolean;
  autoplay?: boolean;
  loop?: boolean;
  slideBadges?: (ImageSwiperBadge[] | undefined)[];
  badgeSize?: number;
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
  badgeSize = 140,
}: Props) {
  const loopEnabled =
    images.length > 1 && (loopProp !== undefined ? loopProp : true);

  const modules = [Pagination];
  if (navigation) modules.push(Navigation);
  if (autoplay) modules.push(Autoplay);

  const paginationOutsideClassName = [
    "[&_.swiper]:flex [&_.swiper]:flex-col",
    "[&_.swiper-pagination]:static! [&_.swiper-pagination]:mt-3 [&_.swiper-pagination]:w-full",
    "[&_.swiper-pagination]:translate-y-0!",
    "[&_.swiper-pagination]:bottom-auto! [&_.swiper-pagination]:top-auto!",
  ].join(" ");

  return (
    <div className="w-full">
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
        className={clsx(paginationOutsideClassName, className ?? "rounded-xl")}
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
                      <HeartbeatMotion>
                        <SwiperBadgeImage
                          image={badge.image}
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
    </div>
  );
}

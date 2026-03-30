"use client";

import { Children, type ReactNode } from "react";
import clsx from "clsx";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

type MobileSwiperProps = {
  children: ReactNode;
  className?: string;
  autoHeight?: boolean;
  slideMinHeightClassName?: string;
};
export default function MobileSwiper({
  children,
  className,
  autoHeight = true,
  slideMinHeightClassName,
}: MobileSwiperProps) {
  const slides = Children.toArray(children);

  return (
    <div
      className={clsx(
        "w-full md:hidden",
        "[&_.swiper-pagination-bullet]:bg-white/45 [&_.swiper-pagination-bullet-active]:bg-white",
        className,
      )}
    >
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        autoHeight={autoHeight}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className={clsx(
          "pb-10! [&_.swiper-wrapper]:items-stretch",
          !autoHeight && "[&_.swiper]:h-auto!",
        )}
      >
        {slides.map((child, index) => (
          <SwiperSlide key={index} className={!autoHeight ? "h-auto!" : undefined}>
            <div
              className={clsx(
                "box-border flex min-h-0 w-full flex-col py-6",
                !autoHeight && slideMinHeightClassName,
              )}
            >
              {child}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

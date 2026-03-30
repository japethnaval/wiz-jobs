"use client";

import { useState } from "react";
import clsx from "clsx";

import { Graphics1, Graphics2 } from "@/assets/images";
import Image from "next/image";
import ImageSwiper from "@/shared-ui/Carousel/ImageSwiper";
import { DeviceScreen, FloatMotion } from "@/shared-ui";

const colShell =
  "w-full min-w-0 overflow-hidden rounded-4xl sm:rounded-[2.25rem] min-[960px]:transition-[flex-basis] min-[960px]:duration-300 min-[960px]:ease-out motion-reduce:transition-none";

const heroSlideAlts = [
  "A professional handshake representing trusted hiring outcomes.",
  "A candidate profile interview image showing confidence and trust.",
] as const;

export function HeroImage() {
  const [secondHovered, setSecondHovered] = useState(false);

  return (
    <>
      <DeviceScreen md lg>
        <FloatMotion deferUntilLoad>
          <div className="mx-auto flex w-full max-w-[min(100%,960px)] flex-col items-center gap-[34px] pt-8 min-[960px]:flex-row min-[960px]:items-stretch">
            <div
              className={`${colShell} ${
                secondHovered ? "min-[960px]:basis-[42%]" : "min-[960px]:basis-[58%]"
              }`}
            >
              <Image
                src={Graphics1}
                priority
                alt={heroSlideAlts[0]}
                placeholder="blur"
                sizes="(max-width: 959px) 100vw, 58vw"
                className="h-auto w-full object-cover"
              />
            </div>

            <div
              className={`${colShell} ${
                secondHovered ? "min-[960px]:basis-[58%]" : "min-[960px]:basis-[42%]"
              }`}
              onMouseEnter={() => setSecondHovered(true)}
              onMouseLeave={() => setSecondHovered(false)}
            >
              <Image
                src={Graphics2}
                priority
                alt={heroSlideAlts[1]}
                placeholder="blur"
                sizes="(max-width: 959px) 100vw, 42vw"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </FloatMotion>
      </DeviceScreen>

      <DeviceScreen sm>
        <div className="mx-auto w-full min-w-0 max-w-[min(100%,375px)] pt-8">
          <ImageSwiper
            images={[Graphics1, Graphics2]}
            alts={[...heroSlideAlts]}
            navigation={false}
            autoplay
            loop
            sizes="(max-width: 767px) min(100vw, 475px), 50vw"
            slideFrameClassName="relative aspect-4/3 w-full overflow-hidden rounded-4xl sm:rounded-[2.25rem]"
            className={clsx(
              "overflow-visible",
              "[&_.swiper-pagination-bullet]:bg-black/20 [&_.swiper-pagination-bullet-active]:bg-[#455ff6]",
            )}
          />
        </div>
      </DeviceScreen>
    </>
  );
}

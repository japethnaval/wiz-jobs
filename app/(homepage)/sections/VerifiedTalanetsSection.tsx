"use client";

import {
  Graphics14,
  Graphics15,
  Graphics16,
  Graphics32,
  Graphics37,
  Graphics38,
  Graphics39,
  Graphics40,
} from "@/assets/images";
import { DeviceScreen, FadeInScale, FadeUp, HeroOrbitBackdrop } from "@/shared-ui";
import ImageSwiper from "@/shared-ui/Carousel/ImageSwiper";
import { GradientCtaButton } from "../../../shared-ui/GradientCtaButton";
import { ShinyText } from "@/shared-ui/ReactBits";
import DiagonalCarouselLoop from "@/shared-ui/Carousel";


export function VerifiedTalanetsSection() {
  const badgeSize = 128;

  return (
    <section
      className="relative isolate -mx-4 overflow-x-clip overflow-y-visible md:-mx-6 lg:-mx-8"
      aria-labelledby="hero-heading"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[min(100%,96rem)] flex-col items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-center mb-6 sm:mb-0">
          <h1
            id="hero-heading"
            className="text-balance font-bold leading-[1.1] text-black text-[clamp(2.75rem,1.25rem+5.5vw,5.0625rem)]"
          >
            <span className="block">
              <ShinyText
                text="Verified Talents at the Speed of AI"
                disabled={false}
                speed={3}
                className="mx-0! inline-block! cursor-default! rounded-none! p-0!"
                color="#000000"
                shineColor="#435FF6"
                spread={120}
                yoyo={false}
                pauseOnHover={false}
                direction="left"
                delay={0}
              />
            </span>
          </h1>
          <h3 className="pt-6 md:pt-8 relative z-10 text-[clamp(0.875rem,0.525rem+2.6vw,2.375rem)] font-bold text-[#455FF6] mx-auto max-w-[650px] leading-[1.30]">
            The first recruitment platform built on truth, not volume.
          </h3>
        </div>
        <FadeInScale delay={0.08} className="w-full">
          <DeviceScreen sm>
            <HeroOrbitBackdrop
              orbitPreset="mobile"
              sizes="100vw"
              contentClassName="mx-auto w-full max-w-sm"
            >
              <ImageSwiper
                images={[Graphics14, Graphics15, Graphics16, Graphics32]}
                alts={[
                  "Recruitment screening workflow",
                  "Hiring and collaboration",
                  "Verified candidate matching",
                  "Verified candidate matching 2",
                ]}
                navigation={false}
                badgeSize={badgeSize}
                paginationActiveColor="#4ceee9"
                paginationInactiveColor="#e1e4ed"
                autoplay
                loop
                sizes="100vw"
                slideFrameClassName="relative aspect-square w-full rounded-3xl"
                slideBadges={[
                  [{ src: Graphics40, position: "first-badge" }],
                  [{ src: Graphics37, position: "second-badge" }],
                  [{ src: Graphics38, position: "fourth-badge" }],
                  [{ src: Graphics39, position: "third-badge" }],
                ]}
              />
            </HeroOrbitBackdrop>
          </DeviceScreen>
          <DeviceScreen md lg>
            <HeroOrbitBackdrop>
              <div className="relative z-10 w-full">
                <DiagonalCarouselLoop />
              </div>
            </HeroOrbitBackdrop>
          </DeviceScreen>
        </FadeInScale>
      </div>
      <FadeUp
        delay={0.12}
        className="relative z-10 mx-auto mt-8 flex w-full max-w-[min(100%,96rem)] flex-col items-center justify-center gap-3 px-4 sm:mt-12 sm:flex-row sm:gap-3 sm:px-6 lg:px-8"
      >
        <GradientCtaButton
          className="w-full max-w-[320px] px-6 py-3 sm:w-auto sm:max-w-none sm:px-14"
          text="Start Hiring Smarter"
          href="/employer"
        />
        <GradientCtaButton
          href="/candidate"
          className="w-full max-w-[320px] px-6 py-3 sm:w-auto sm:max-w-none sm:px-14"
          text="Get Verified & Hired"
        />
      </FadeUp>
    </section>
  );
}

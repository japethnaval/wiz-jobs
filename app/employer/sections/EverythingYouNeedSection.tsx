"use client";

import type { ReactNode } from "react";
import clsx from "clsx";
import Image from "next/image";

import { Background3 } from "@/assets/images";
import {
  BackdropStaggerContainer,
  BackdropStaggerItem,
  DeviceScreen,
  PulseMotion,
} from "@/shared-ui";
import MobileSwiper from "@/shared-ui/MobileSwiper";
import { SpotlightCard } from "@/shared-ui/ReactBits";
import { Icon11, Icon10, Icon9, Icon8 } from "@/assets";

const featureIconClassName = "block size-20 max-h-20 max-w-20 shrink-0";

const staggerItemClassName = [
  "flex h-full min-h-0 min-w-0 flex-col",
  "will-change-transform",
  "transition-shadow duration-300 ease-out",
  "hover:shadow-[0_16px_48px_rgba(15,23,42,0.14)]",
].join(" ");

const spotlightCardClassName =
  "h-full min-h-0 rounded-[54px] border-white bg-white/70 p-6 shadow-[0_8px_32px_rgba(15,23,42,0.08)] backdrop-blur-[30px] sm:p-8 lg:max-w-[409px] lg:mx-auto";

type NeedCard = {
  id: string;
  icon: ReactNode;
  title: string;
  body: ReactNode;
};

const needCards: NeedCard[] = [
  {
    id: "match-accuracy",
    icon: <Icon10 aria-hidden className={featureIconClassName} />,
    title: "90% Match Accuracy. Every Single Job Post.",
    body: (
      <>
        <p className="mb-4 font-bold text-black">
          The Industry Standard is 30%. We Deliver 90%. That means 9 out of 10 candidates you review are
          actually qualified, not 3 out of 10.
        </p>
        <p className="mb-3 font-bold text-black">
          <span className="font-bold text-[#455FF6]">How? </span>
          <br />
          AI qualification scoring + blockchain verification + multi-source credential checks.
        </p>
        <p className="font-bold text-black">
          <span className="font-bold text-[#455FF6]">Result? </span>
          <br />
          Stop wasting 70% of your time on unqualified applicants. Interview the right people. Hire faster.
        </p>
      </>
    ),
  },
  {
    id: "headhunting",
    icon: <Icon9 aria-hidden className={featureIconClassName} />,
    title: "See More Candidates. Headhunting Mode.",
    body: (
      <p className="font-bold text-black">
        Headhunting Mode gives you access to additional qualified candidates beyond your initial
        matches-candidates who may have slightly lower scores but bring strong cultural fit or unique value
        to your organization.
      </p>
    ),
  },
  {
    id: "verification-reports",
    icon: <Icon8 aria-hidden className={featureIconClassName} />,
    title: "Verification Reports",
    body: (
      <p className="font-bold text-black">
        Standardized format showing LinkedIn profile match, employment history verification, skill assessment
        results, and certificate validation.
      </p>
    ),
  },
  {
    id: "analytics",
    icon: <Icon11 aria-hidden className={featureIconClassName} />,
    title: "Analytics Dashboard",
    body: (
      <p className="font-bold text-black">
        Track applications vs. qualified candidates ratio, average time-to-hire, cost-per-quality-hire, and
        hiring manager performance.
      </p>
    ),
  },
];

function EmployerNeedCardInner({
  icon,
  title,
  body,
  fillHeight,
}: {
  icon: ReactNode;
  title: string;
  body: ReactNode;
  fillHeight?: boolean;
}) {
  return (
    <SpotlightCard
      className={clsx(spotlightCardClassName, fillHeight && "flex h-full min-h-0 flex-col")}
      spotlightColor="rgba(69, 95, 246, 0.22)"
    >
      <article
        className={clsx(
          "flex min-h-0 flex-col gap-4 sm:gap-5",
          fillHeight ? "h-full min-h-0 flex-1" : "h-full",
        )}
      >
        <div className="flex shrink-0 text-[#455FF6]" aria-hidden>
          <PulseMotion>{icon}</PulseMotion>
        </div>
        <h3 className="shrink-0 text-xl font-bold leading-tight text-black sm:text-2xl">{title}</h3>
        <div className="min-h-0 flex-1 text-sm font-normal leading-relaxed text-black/90 sm:text-base">
          {body}
        </div>
      </article>
    </SpotlightCard>
  );
}

function EmployerNeedGridItem({ card }: { card: NeedCard }) {
  return (
    <BackdropStaggerItem
      className={staggerItemClassName}
      whileHover={{
        y: -6,
        transition: { type: "spring", stiffness: 420, damping: 30 },
      }}
    >
      <EmployerNeedCardInner icon={card.icon} title={card.title} body={card.body} />
    </BackdropStaggerItem>
  );
}

function EmployerNeedSlide({ card }: { card: NeedCard }) {
  return (
    <div className="flex h-full min-h-0 w-full flex-1 flex-col">
      <EmployerNeedCardInner fillHeight icon={card.icon} title={card.title} body={card.body} />
    </div>
  );
}

export function EverythingYouNeedSection() {
  return (
    <section aria-labelledby="everything-you-need-heading" className="overflow-x-clip">
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0 -z-10" aria-hidden>
          <Image
            src={Background3}
            alt=""
            fill
            placeholder="blur"
            sizes="100vw"
            className="scale-110 object-cover blur-md"
          />
          <div className="absolute inset-0 bg-white/40" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[min(100%,96rem)] px-4 py-12 md:px-8 md:py-16 lg:px-12 lg:py-24">
          <h2
            id="everything-you-need-heading"
            className="mx-auto max-w-4xl text-balance text-center text-[clamp(1.875rem,1rem+3.2vw,3.25rem)] font-bold leading-[1.15] text-black"
          >
            Everything You Need to Hire Better
          </h2>

          <DeviceScreen md lg>
            <BackdropStaggerContainer
              className="mx-auto mt-12 grid max-w-6xl grid-cols-1 items-stretch justify-center gap-4 sm:mt-14 sm:gap-6 md:grid-cols-2 md:gap-8 lg:mt-16 lg:max-w-fit lg:grid-cols-[409px_409px] lg:gap-[60px]"
              amount={0.12}
              staggerChildren={0.14}
              delayChildren={0.08}
            >
              {needCards.map((card) => (
                <EmployerNeedGridItem key={card.id} card={card} />
              ))}
            </BackdropStaggerContainer>
          </DeviceScreen>

          <DeviceScreen sm>
            <MobileSwiper
              autoHeight={false}
              slideMinHeightClassName="h-full min-h-0 flex-1"
              className={clsx(
                "mt-12 sm:mt-14",
                "[&_.swiper]:min-h-[min(32rem,85dvh)]",
                "[&_.swiper-slide]:flex [&_.swiper-slide]:h-full [&_.swiper-slide]:min-h-0",
                "[&_.swiper-pagination-bullet]:bg-black/20 [&_.swiper-pagination-bullet-active]:bg-[#455ff6]",
              )}
            >
              {needCards.map((card) => (
                <EmployerNeedSlide key={card.id} card={card} />
              ))}
            </MobileSwiper>
          </DeviceScreen>
        </div>
      </div>
    </section>
  );
}

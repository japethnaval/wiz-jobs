"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { Icon12, Icon15, Icon13, Icon14 } from "@/assets";
import { DeviceScreen, FadeUp, PulseMotion } from "@/shared-ui";
import MobileSwiper from "@/shared-ui/MobileSwiper";

type Feature = {
  title: string;
  body: string;
  highlight: string;
  icon: StaticImageData | React.ReactNode;
};

function isStaticImageData(icon: Feature["icon"]): icon is StaticImageData {
  return typeof icon === "object" && icon !== null && "src" in icon;
}

function FeatureIcon({ icon }: { icon: Feature["icon"] }) {
  if (isStaticImageData(icon)) {
    return (
      <Image
        src={icon}
        alt=""
        aria-hidden
        placeholder="blur"
        sizes="48px"
        className="h-12 w-12 shrink-0 object-contain"
      />
    );
  }

  return (
    <div
      className="h-12 w-12 shrink-0 [&_svg]:h-full [&_svg]:w-full"
      aria-hidden
    >
      {icon}
    </div>
  );
}

const features: Feature[] = [
  {
    title: "Blockchain-Verified \n Credentials",
    body: "Every work experience, skill, and certificate is verified through multiple sources, layers and secured on blockchain. No more resume fiction.",
    highlight: "Just verified truth.",
    icon: <Icon12 />,
  },
  {
    title: "AI-Powered \n Qualification Matching",
    body: "Our AI doesn’t just match keywords—it understands context, evaluates true skill levels, and scores candidates on actual job fit.",
    highlight: "90% accuracy vs. \n the industry’s 30%.",
    icon: <Icon15 />,
  },
  {
    title: "Complete \n Transparency",
    body: "Candidates see their qualification scores. Employers see verification status on every claim. No black boxes.",
    highlight: "No bias. Just data-\ndriven decisions.",
    icon: <Icon13 />,
  },
  {
    title: "Pay for Results, \n Not Resume Volume",
    body: "At WizJobs, our pricing is built around what actually matters: verified, qualified candidates who match your requirements. You’re investing in precision, not spam.",
    highlight: "That’s recruiting \n done right.",
    icon: <Icon14 />,
  },
];

const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

function FeatureCardBody({ item }: { item: Feature }) {
  return (
    <>
      <div className="mb-4">
        <PulseMotion>
          <FeatureIcon icon={item.icon} />
        </PulseMotion>
      </div>
      <h3 className="mb-3 whitespace-pre-line text-lg font-bold leading-snug text-black sm:text-xl">
        {item.title}
      </h3>
      <p className="text-pretty whitespace-pre-line text-[15px] leading-relaxed font-semibold text-black sm:text-[0.9375rem]">
        {item.body}
      </p>
      <p className="mt-auto whitespace-pre-line pt-4 text-pretty text-sm font-bold text-[#455ff6] sm:text-base">
        {item.highlight}
      </p>
    </>
  );
}

function FeatureGridItem({ item }: { item: Feature }) {
  return (
    <motion.li
      className="flex h-full flex-col items-start text-left"
      variants={itemVariants}
    >
      <FeatureCardBody item={item} />
    </motion.li>
  );
}

function FeatureSlide({ item }: { item: Feature }) {
  return (
    <div className="flex h-full flex-col items-start text-left">
      <FeatureCardBody item={item} />
    </div>
  );
}

export function TheSolutionSection() {
  return (
      <section aria-labelledby="solution-heading">
        <div className="mx-auto w-full max-w-[min(100%,96rem)] bg-[#DEE2F7] px-4 py-12 sm:px-6 sm:pb-12 sm:py-12 md:bg-transparent md:py-12 lg:px-8">
          <FadeUp>
            <h2
              id="solution-heading"
              className="mt-4 mb-4 text-center text-2xl font-extrabold leading-[1.1] text-black sm:mb-16 sm:text-3xl lg:text-5xl md:text-white lg:text-white"
            >
              The solution?
            </h2>
          </FadeUp>
          <DeviceScreen md lg>
            <motion.ul
              className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-x-12 md:gap-y-14 lg:grid-cols-4 lg:gap-y-10 lg:gap-x-14 xl:gap-x-20"
              variants={listVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
            >
              {features.map((item) => (
                <FeatureGridItem key={item.title} item={item} />
              ))}
            </motion.ul>
          </DeviceScreen>

          <DeviceScreen sm>
            <MobileSwiper
              autoHeight={false}
              slideMinHeightClassName="min-h-[min(20rem,60dvh)]"
              className="[&_.swiper-pagination-bullet]:bg-black/20 [&_.swiper-pagination-bullet-active]:bg-[#455ff6]"
            >
              {features.map((item) => (
                <FeatureSlide key={item.title} item={item} />
              ))}
            </MobileSwiper>
          </DeviceScreen>
        </div>
      </section>
  );
}

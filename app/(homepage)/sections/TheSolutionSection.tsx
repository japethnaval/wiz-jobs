"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";

import { BarChartIcon, AtomicIcon, PeopleIcon, ShieldIcon } from "@/assets/images";
import { FadeUp } from "@/shared-ui";

type Feature = {
  title: string;
  body: string;
  highlight: string;
  icon: StaticImageData;
};

const features: Feature[] = [
  {
    title: "Blockchain-Verified \n Credentials",
    body: "Every work experience, skill, and certificate is verified through multiple sources, layers and secured on blockchain. No more resume fiction.",
    highlight: "Just verified truth.",
    icon: ShieldIcon,
  },
  {
    title: "AI-Powered \n Qualification Matching",
    body: "Our AI doesn’t just match keywords—it understands context, evaluates true skill levels, and scores candidates on actual job fit.",
    highlight: "90% accuracy vs. \n the industry’s 30%.",
    icon: AtomicIcon,
  },
  {
    title: "Complete \n Transparency",
    body: "Candidates see their qualification scores. Employers see verification status on every claim. No black boxes.",
    highlight: "No bias. Just data-\ndriven decisions.",
    icon: PeopleIcon,
  },
  {
    title: "Pay for Results, \n Not Resume Volume",
    body: "At WizJobs, our pricing is built around what actually matters: verified, qualified candidates who match your requirements. You’re investing in precision, not spam.",
    highlight: "That’s recruiting \n done right.",
    icon: BarChartIcon,
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

export function TheSolutionSection() {
  return (
      <section aria-labelledby="solution-heading">
        <div className="mx-auto w-full max-w-[min(100%,96rem)] px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2
              id="solution-heading"
              className="font-extrabold text-pretty mb-12 text-center text-2xl leading-[1.1] text-white sm:mb-16 sm:text-3xl lg:text-5xl"
            >
              The solution?
            </h2>
          </FadeUp>
          <motion.ul
            className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-14 lg:grid-cols-4 lg:gap-8"
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {features.map((item) => (
              <motion.li
                key={item.title}
                className="flex h-full flex-col items-start text-left"
                variants={itemVariants}
              >
                <div className="mb-4">
                  <Image
                    src={item.icon}
                    alt=""
                    aria-hidden
                    className="h-12 w-12 shrink-0 object-contain"
                  />
                </div>
                <h3 className="mb-3 whitespace-pre-line text-lg font-extrabold leading-snug text-black sm:text-xl">
                  {item.title}
                </h3>
                <p className="text-pretty whitespace-pre-line text-[15px] leading-relaxed text-black sm:text-[0.9375rem] font-semibold">
                  {item.body}
                </p>
                <p className="mt-auto whitespace-pre-line pt-4 text-pretty text-sm font-extrabold text-[#455ff6] sm:text-base">
                  {item.highlight}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>
  );
}

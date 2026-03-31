"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { ComponentPropsWithoutRef } from "react";

import { DeviceScreen } from "./DeviceScreen";

export type FloatingRegisterPillProps = {
  href?: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "children">;

const enterTransition = { duration: 0.6, ease: "easeOut" as const };
const floatTransition = {
  duration: 6,
  ease: "easeInOut" as const,
  repeat: Infinity,
  times: [0, 0.4, 0.6, 0.75, 0.85, 1],
};
const starTransition = {
  duration: 2.5,
  repeat: Infinity,
  ease: "easeInOut" as const,
};

function StarGlyph({ className }: { className?: string }) {
  return (
    <motion.span
      aria-hidden
      className={className}
      animate={{
        scale: [1, 1.3, 1],
        rotate: [0, 10, -10, 0],
        opacity: [0.8, 1, 0.8],
      }}
      transition={starTransition}
    >
      ✦
    </motion.span>
  );
}

export function FloatingRegisterPill({
  href = "/candidate",
  className,
  ...rest
}: FloatingRegisterPillProps) {
  return (
    <>
    <DeviceScreen sm>
    <motion.div
          className={[
            "fixed right-[24px] top-1/3 z-50 -translate-y-1/2 -rotate-90 origin-right",
            className,
          ]
            .filter(Boolean)
            .join(" ")}
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={enterTransition}
        >
          <motion.div
            animate={{
              scale: [1, 1.03, 1, 1, 1.06, 1],
              y: [0,0, 0],
            }}
            transition={floatTransition}
          >
            <Link
              href={href}
              className="group flex h-[48px] w-[182px] origin-right flex-row items-center justify-center rounded-full border-2 border-[#1e2533] bg-white text-center shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition duration-300 ease-out hover:bg-[#455ef6]"
              {...rest}
            >
              <span className="mt-0.5 whitespace-pre-line text-[18px] font-extrabold leading-[1.02] text-[#111827] transition-colors group-hover:text-white">
                {"Register Now!"}
              </span>
              <StarGlyph className="text-[22px] leading-none text-[#49FBDF]" />
            </Link>
          </motion.div>
        </motion.div>
    </DeviceScreen>

      <DeviceScreen md lg>
        <motion.div
          className={[
            "fixed right-[-44px] top-1/3 z-50 -translate-y-1/2",
            className,
          ]
            .filter(Boolean)
            .join(" ")}
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={enterTransition}
        >
          <motion.div
            animate={{
              scale: [1, 1.03, 1, 1, 1.06, 1],
              y: [0, -3, 0],
            }}
            transition={floatTransition}
          >
            <Link
              href={href}
              className="group flex h-[80px] w-[182px] origin-right flex-col items-center justify-center rounded-full border-2 border-[#1e2533] bg-white text-center shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition duration-300 ease-out hover:bg-[#455ef6]"
              {...rest}
            >
              <StarGlyph className="text-[22px] leading-none text-[#49FBDF]" />
              <span className="mt-0.5 whitespace-pre-line text-[18px] font-extrabold leading-[1.02] text-[#111827] transition-colors group-hover:text-white">
                {"Register\nNow!"}
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </DeviceScreen>
    </>
  );
}

"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { ComponentPropsWithoutRef } from "react";

export type FloatingRegisterPillProps = {
  href?: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "children">;

export function FloatingRegisterPill({
  href = "/candidate",
  className,
  ...rest
}: FloatingRegisterPillProps) {
  return (
    <motion.div
      className={[
        "fixed right-[-24px] top-1/3 z-50 -translate-y-1/2 sm:right-[-44px]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      initial={{ x: 60, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      <motion.div
        animate={{
          scale: [1, 1.03, 1, 1, 1.06, 1],
          y: [0, -3, 0],
        }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
          times: [0, 0.4, 0.6, 0.75, 0.85, 1],
        }}
      >
        <Link
          href={href}
          className="group flex h-[48px] w-[100px] origin-right flex-col items-center justify-center rounded-full border-2 border-[#1e2533] bg-white text-center shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition duration-300 ease-out hover:bg-[#455ef6] sm:h-[80px] sm:w-[182px]"
          {...rest}
        >
          <motion.span
            aria-hidden
            className="text-[12px] leading-none text-[#49FBDF] sm:text-[22px]"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 10, -10, 0],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ✦
          </motion.span>

          {/* text */}
          <span className="mt-0.5 whitespace-pre-line text-[10px] font-extrabold leading-[1.02] text-[#111827] transition-colors group-hover:text-white sm:text-[18px]">
            {"Register\nNow!"}
          </span>
        </Link>
      </motion.div>
    </motion.div>
  );
}
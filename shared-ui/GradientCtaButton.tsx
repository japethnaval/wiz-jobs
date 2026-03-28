"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

const pillClass =
  "inline-flex items-center justify-center whitespace-pre-line rounded-full px-6 py-3 text-center font-black text-white shadow-md";

const defaultTextSizeClass = "text-[15px] sm:text-base";

export type GradientCtaButtonProps = {
  href: string;
  text: ReactNode;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "children">;

export function GradientCtaButton({
  href,
  text,
  className,
  style,
  ...rest
}: GradientCtaButtonProps) {
  const hasTextSizeOverride =
    /\b(?:[a-z]+:)?text-(?:xs|sm|base|lg|xl|[2-9]xl|\[[^\]]+\])!?/.test(
      className ?? "",
    );

  return (
    <motion.div
      whileHover={{ scale: 1.06, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className="inline-block"
    >
      <Link
        href={href}
        className={[
          pillClass,
          hasTextSizeOverride ? undefined : defaultTextSizeClass,
          "relative overflow-hidden transition",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        style={{
          background:
            "linear-gradient(120deg, #49fbdf, #4fe3f2, #6a8cff, #49fbdf)",
          backgroundSize: "200% 200%",
          ...style,
        }}
        {...rest}
      >
        {/* Animated gradient layer */}
        <motion.span
          aria-hidden
          className="absolute inset-0 z-0"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            background:
              "linear-gradient(120deg, #49fbdf, #4fe3f2, #6a8cff, #49fbdf)",
            backgroundSize: "200% 200%",
          }}
        />

        {/* Content */}
        <span className="relative z-10">{text}</span>
      </Link>
    </motion.div>
  );
}
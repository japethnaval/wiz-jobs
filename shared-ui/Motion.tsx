"use client";

import { motion, type HTMLMotionProps, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children: ReactNode;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
};

type SlideRevealProps = RevealProps & {
  distance?: number;
};

const easeOut = [0.16, 1, 0.3, 1] as const;

function buildRevealTransition(delay = 0, duration = 0.6) {
  return {
    duration,
    delay,
    ease: easeOut,
  };
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.2,
  ...rest
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once, amount }}
      transition={buildRevealTransition(delay, duration)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function FadeUp({
  children,
  delay = 0,
  duration = 0.6,
  distance = 24,
  once = true,
  amount = 0.2,
  ...rest
}: SlideRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={buildRevealTransition(delay, duration)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function FadeInScale({
  children,
  delay = 0,
  duration = 0.55,
  once = true,
  amount = 0.2,
  ...rest
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once, amount }}
      transition={buildRevealTransition(delay, duration)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

const staggerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

export function StaggerContainer({
  children,
  once = true,
  amount = 0.15,
  ...rest
}: RevealProps) {
  return (
    <motion.div
      variants={staggerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  ...rest
}: Omit<HTMLMotionProps<"div">, "children"> & { children: ReactNode }) {
  return (
    <motion.div variants={staggerItemVariants} {...rest}>
      {children}
    </motion.div>
  );
}

export function FloatMotion({
  children,
  duration = 5.5,
}: { children: ReactNode, duration?: number }) {
  return (
    <motion.div
    animate={{ y: [0, -18, 0], rotate: [0, -0.9, 0.9, 0] }}
    transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
  >
      {children}
    </motion.div>
  );
}

export function PulseMotion({
  children,
  duration = 4.2,
}: { children: ReactNode, duration?: number }) {
  return (
    <motion.div
      animate={{ rotate: [0, 4, -4, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export function HeartbeatMotion({
  children,
  duration = 1.6,
  intensity = 0.06,
  className,
}: {
  children: ReactNode;
  duration?: number;
  intensity?: number;
  /** Classes for the motion wrapper (e.g. `w-full` so scale doesn’t collapse width). */
  className?: string;
}) {
  return (
    <motion.div
      className={["origin-center will-change-transform", className]
        .filter(Boolean)
        .join(" ")}
      animate={{
        scale: [
          1,
          1 + intensity,
          1,
          1 + intensity * 0.6,
          1,
        ],
      }}
      transition={{
        duration,
        ease: "easeInOut",
        repeat: Infinity,
        times: [0, 0.15, 0.3, 0.45, 1], // creates the heartbeat rhythm
      }}
    >
      {children}
    </motion.div>
  );
}

export const ScaleHoverMotion = ({
  children,
  duration = 0.5,
}: { children: ReactNode, duration?: number }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration }}
    >
      {children}
    </motion.div>
  );
}
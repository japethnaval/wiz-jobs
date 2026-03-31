"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import { useEffect, useMemo, useState, type ReactNode } from "react";

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

export const featureCardStaggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 28, x: -20 },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.52,
      ease: easeOut,
    },
  },
};

export const backdropStaggerListVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.06,
    },
  },
};

export const backdropStaggerItemVariants: Variants = {
  hidden: { y: 28, visibility: "hidden" },
  visible: {
    y: 0,
    visibility: "visible",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 34,
      mass: 0.9,
    },
  },
};

export type BackdropStaggerContainerProps = Omit<
  HTMLMotionProps<"div">,
  "initial" | "whileInView" | "variants" | "viewport"
> & {
  children: ReactNode;
  staggerChildren?: number;
  delayChildren?: number;
  once?: boolean;
  amount?: number;
};

export function BackdropStaggerContainer({
  children,
  className,
  staggerChildren = 0.14,
  delayChildren = 0.06,
  once = true,
  amount = 0.12,
  ...rest
}: BackdropStaggerContainerProps) {
  const reduceMotion = useReducedMotion();

  const variants = useMemo(() => {
    if (reduceMotion) {
      return {
        hidden: {},
        visible: { transition: { staggerChildren: 0, delayChildren: 0 } },
      } satisfies Variants;
    }
    return {
      hidden: {},
      visible: {
        transition: { staggerChildren, delayChildren },
      },
    } satisfies Variants;
  }, [reduceMotion, staggerChildren, delayChildren]);

  return (
    <motion.div
      className={className}
      variants={variants}
      initial={reduceMotion ? "visible" : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once, amount }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function BackdropStaggerItem({
  children,
  className,
  ...rest
}: Omit<HTMLMotionProps<"div">, "variants"> & { children: ReactNode }) {
  const reduceMotion = useReducedMotion();

  const variants = useMemo(() => {
    if (reduceMotion) {
      return {
        hidden: { y: 0, visibility: "visible" as const },
        visible: { y: 0, visibility: "visible" as const },
      } satisfies Variants;
    }
    return backdropStaggerItemVariants;
  }, [reduceMotion]);

  return (
    <motion.div className={className} variants={variants} {...rest}>
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  once = true,
  amount = 0.15,
  staggerChildren = 0.12,
  delayChildren = 0.06,
  ...rest
}: RevealProps & {
  staggerChildren?: number;
  delayChildren?: number;
}) {
  const variants = useMemo(
    () =>
      ({
        hidden: {},
        show: {
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }) satisfies Variants,
    [staggerChildren, delayChildren],
  );

  return (
    <motion.div
      variants={variants}
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
  variants,
  ...rest
}: Omit<HTMLMotionProps<"div">, "children"> & {
  children: ReactNode;
  variants?: Variants;
}) {
  return (
    <motion.div variants={variants ?? staggerItemVariants} {...rest}>
      {children}
    </motion.div>
  );
}

export function FloatMotion({
  children,
  duration = 5.5,
  deferUntilLoad = false,
}: {
  children: ReactNode;
  duration?: number;
  deferUntilLoad?: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();
  const [loadReady, setLoadReady] = useState(!deferUntilLoad);

  useEffect(() => {
    if (!deferUntilLoad) return;
    if (prefersReducedMotion) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLoadReady(true);
      return;
    }
    const start = () => setLoadReady(true);
    if (document.readyState === "complete") {
      requestAnimationFrame(start);
    } else {
      window.addEventListener("load", () => requestAnimationFrame(start), { once: true });
    }
  }, [deferUntilLoad, prefersReducedMotion]);

  const shouldFloat = loadReady && !prefersReducedMotion;

  return (
    <motion.div
      animate={
        shouldFloat
          ? { y: [0, -18, 0], rotate: [0, -0.9, 0.9, 0] }
          : false
      }
      transition={
        shouldFloat
          ? { duration, repeat: Infinity, ease: "easeInOut" }
          : undefined
      }
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
        times: [0, 0.15, 0.3, 0.45, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export const ScaleHoverMotion = ({
  children,
  duration = 0.5,
  className,
  ...rest
}: {
  children: ReactNode;
  duration?: number;
} & Omit<HTMLMotionProps<"div">, "children">) => {
  return (
    <motion.div
      className={["origin-center will-change-transform", className]
        .filter(Boolean)
        .join(" ")}
      whileHover={{ scale: 1.05 }}
      transition={{ duration }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export function FadeSwap({
  swapKey,
  children,
  duration = 0.8,
  ...rest
}: Omit<HTMLMotionProps<"div">, "children"> & {
  swapKey: string | number;
  children: ReactNode | null;
  duration?: number;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return children ? <div {...rest as any}>{children}</div> : null;
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      {children ? (
        <motion.div
          key={swapKey}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration, ease: easeOut }}
          {...rest}
        >
          {children}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
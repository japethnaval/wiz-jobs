"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FabIcon } from "@/assets/images";
import Link from "next/link";
import { useClickOutside } from "@/hooks";

const floatTransition = {
  duration: 6,
  ease: "easeInOut" as const,
  repeat: Infinity,
  times: [0, 0.4, 0.6, 0.75, 0.85, 1],
};

const EXPANDED_W = 180;
const COLLAPSED = 56;

/** Same gradient on collapsed FAB and expanded pill */
const fabGradientSurface =
  "rounded-full bg-linear-to-r from-[#49FBDF] to-[#4FE3F2]";

export default function FabButton({ href, ...rest }: { href: string }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  useClickOutside(ref as unknown as React.RefObject<HTMLDivElement>, () => setExpanded(false));

  return (
    <motion.button
      type="button"
      onClick={() => setExpanded((prev) => !prev)}
      initial={false}
      animate={{ width: expanded ? EXPANDED_W : COLLAPSED }}
      transition={{ type: "spring", stiffness: 360, damping: 28 }}
      className="flex items-center justify-center overflow-hidden rounded-full border-0 p-0 shadow-none outline-none ring-0 focus-visible:ring-2 focus-visible:ring-[#4FE3F2] focus-visible:ring-offset-2"
      style={{
        height: COLLAPSED,
      }}
    >
      <AnimatePresence mode="wait">
        {expanded ? (
          <motion.div
            key="expanded"
            layout={false}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="flex h-full w-full items-center justify-center"
          >
            <motion.div
              ref={ref as unknown as React.RefObject<HTMLDivElement>}
              layout={false}
              animate={{
                scale: [1, 1.03, 1, 1, 1.06, 1],
                y: [0, 0, 0],
              }}
              transition={floatTransition}
              className="h-full w-full min-w-0"
            >
              <Link
                href={href}
                onClick={(e) => e.stopPropagation()}
                className={`font-extrabold flex h-full w-full min-w-0 items-center justify-center px-5 text-center text-[16px] leading-tight text-white sm:px-6 sm:text-lg ${fabGradientSurface}`}
                {...rest}
              >
                Register Now!
              </Link>
            </motion.div>
          </motion.div>
        ) : (
          <motion.span
            key="icon"
            layout={false}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            className={`relative flex h-full w-full items-center justify-center p-3 ${fabGradientSurface}`}
          >
            <motion.span
              aria-hidden
              layout={false}
              className="relative block h-7 w-7 will-change-transform"
              animate={{
                scale: [1, 1.15, 0.95, 1.12, 1],
                y: [0, -6, 2, -4, 0],
                rotate: [0, -12, 10, -18, 6, 0],
              }}
              transition={floatTransition}
            >
              <Image
                src={FabIcon}
                alt=""
                width={28}
                height={28}
                className="h-7 w-7 object-contain select-none"
              />
            </motion.span>
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

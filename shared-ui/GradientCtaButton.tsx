"use client";

import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

/** Extra stops so background-position animation reads clearly. */
const gradient =
  "linear-gradient(191deg, rgb(73, 251, 223) 0%, rgb(79, 227, 242) 35%, rgb(90, 240, 235) 50%, rgb(79, 227, 242) 65%, rgb(73, 251, 223) 100%)";

const pillClass =
  "gradient-cta-button inline-flex items-center justify-center whitespace-pre-line rounded-full px-6 py-3 text-center font-black text-white shadow-md transition-[transform,filter] duration-300 ease-out will-change-transform motion-safe:hover:scale-[1.03] motion-safe:active:scale-[0.99] hover:brightness-105";
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
  const hasTextSizeOverride = /\b(?:[a-z]+:)?text-(?:xs|sm|base|lg|xl|[2-9]xl|\[[^\]]+\])!?/.test(
    className ?? "",
  );

  return (
    <Link
      href={href}
      className={[pillClass, hasTextSizeOverride ? undefined : defaultTextSizeClass, className]
        .filter(Boolean)
        .join(" ")}
      style={{ backgroundImage: gradient, ...style }}
      {...rest}
    >
      {text}
    </Link>
  );
}

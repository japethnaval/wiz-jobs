"use client";

import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

const gradient =
  "linear-gradient(191deg, rgb(73, 251, 223) 0%, rgb(79, 227, 242) 100%)";

const pillClass =
  "inline-flex items-center justify-center whitespace-pre-line rounded-full px-6 py-3 text-center font-black text-white shadow-md transition hover:brightness-105";
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

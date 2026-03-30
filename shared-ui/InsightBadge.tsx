"use client";

import { ReactNode } from "react";
import clsx from "clsx";

type BadgeProps = {
  highlightText: string;
  subText: string;
  icon?: ReactNode;
  iconPosition?: "top-left" | "top-right";
  className?: string;
};

export function InsightBadge({
  highlightText,
  subText,
  icon,
  iconPosition = "top-right",
  className,
}: BadgeProps) {
  return (
    <div className={clsx("relative inline-block", className)}>
      <div
        className="
          flex items-center gap-3
          rounded-full px-4 py-2
          bg-white/70 backdrop-blur-md
          shadow-[0_4px_20px_rgba(0,0,0,0.08)]
          border border-white/40
        "
      >
        <span className="font-extrabold text-[#4560F6] text-lg leading-none">
          {highlightText}
        </span>

        <span className="font-normal text-sm leading-tight">
          {subText}
        </span>
      </div>

      {icon && (
        <div
          className={clsx(
            "absolute -top-3",
            iconPosition === "top-left" && "-left-3",
            iconPosition === "top-right" && "-right-3"
          )}
        >
          <div
            className="
              flex items-center justify-center
              w-7 h-7 rounded-full
              bg-white shadow-md
            "
          >
            {icon}
          </div>
        </div>
      )}
    </div>
  );
}
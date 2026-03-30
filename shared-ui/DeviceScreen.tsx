"use client";

import { ReactNode } from "react";
import clsx from "clsx";

type DeviceProps = {
  children: ReactNode;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  className?: string;
};

export function DeviceScreen({ children, sm, md, lg, className }: DeviceProps) {
  const classes = clsx(
    {
      "block md:hidden": sm,
    },
    md && lg && "hidden md:block",
    md && !lg && "hidden md:block lg:hidden",
    !md && lg && "hidden lg:block",
    className
  );

  return <div className={classes}>{children}</div>;
}

import type { ReactNode } from "react";

type BackgroundGradientProps = {
  children: ReactNode;
  className?: string;
};

export function BackgroundGradient({ children, className }: BackgroundGradientProps) {
  return (
    <div className={["relative isolate min-h-full", className].filter(Boolean).join(" ")}>
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(90deg,#6F82FF_0%,#DBDEF0_50%,#FFFFFF_100%)]"
        aria-hidden
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

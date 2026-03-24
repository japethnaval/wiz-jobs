import type { ReactNode } from "react";

type CircularGradientProps = {
  children: ReactNode;
  /** Classes on the outer wrapper (e.g. padding, max-width, background). */
  className?: string;
};

/**
 * Section layout with a large centered circular gradient behind the content.
 * Use as the outer wrapper around a `<section>` (or any block) that needs this backdrop.
 */
export function CircularGradient({ children, className }: CircularGradientProps) {
  return (
    <div
      className={["relative overflow-x-clip overflow-y-visible", className]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[min(180vw,130rem)] w-[min(200vw,140rem)] max-w-none -translate-x-1/2 -translate-y-1/2 rounded-full bg-[linear-gradient(90deg,#6f82ff_0%,rgba(255,255,255,0)_100%)] opacity-65 mix-blend-multiply"
        aria-hidden
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

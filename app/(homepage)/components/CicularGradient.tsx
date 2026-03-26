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
        className="pointer-events-none absolute left-1/2 top-[80%] z-0 hidden aspect-square w-[min(160vw,95rem)] max-w-none -translate-x-1/2 -translate-y-1/2 rounded-full bg-[linear-gradient(180deg,#455FF6_-5.59%,#E6E8F5_18%,#EAEBF6_100%)] opacity-[0.8117] mix-blend-multiply lg:block lg:aspect-auto lg:h-[min(180vw,180rem)] lg:w-[min(240vw,180rem)]"
        aria-hidden
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

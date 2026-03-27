import type { CSSProperties, ReactNode } from "react";

import { Graphics12 } from "@/assets/images";
import Image from "next/image";

export type CircularTornadoCardTornadoSide = "leading" | "trailing";

export type CircularTornadoCardProps = {
  eyebrow: string;
  title: string;
  tornadoSide?: CircularTornadoCardTornadoSide;
  children: ReactNode;
  size?: number;
  className?: string;
};

function mergeClass(...parts: Array<string | undefined>) {
  return parts.filter(Boolean).join(" ");
}

/**
 * Circular story card with a teal ring and `Tornado.svg` behind it.
 * Use `tornadoSide="trailing"` to mirror the decoration (job seeker vs employer layouts).
 *
 * Note: the SVG uses internal `id`s; if you render many cards and masks look wrong,
 * render cards in separate sections or switch the art to an `<img>` of the same file.
 */
export function CircularTornadoCard({
  eyebrow,
  title,
  tornadoSide = "leading",
  children,
  size = 500,
  className,
}: CircularTornadoCardProps) {
  const trailing = tornadoSide === "trailing";
  /** Use % of the padded parent — not 100vw — so cards don’t overflow narrow layouts. */
  const boxStyle = {
    width: `min(${size}px, 100%)`,
  } satisfies CSSProperties;

  return (
    <article
      className={mergeClass("relative mx-auto aspect-square max-w-full shrink-0", className)}
      style={boxStyle}
    >
      <div className="relative flex h-full w-full items-center justify-center">
        <div
          className={mergeClass(
            "pointer-events-none absolute top-1/2 z-0 w-[118%] max-w-none -translate-y-1/2 sm:w-[135%]",
            trailing
              ? "right-0 translate-x-[8%] sm:translate-x-[20%] -scale-x-100"
              : "left-0 -translate-x-[8%] sm:-translate-x-[20%]",
          )}
          aria-hidden
        >
          <Image
            src={Graphics12}
            alt="Tornado"
            placeholder="blur"
            sizes="(max-width: 640px) 135vw, min(680px, 90vw)"
            className="mx-auto h-auto w-[90%]"
          />
        </div>

        <div
          className={mergeClass(
            "relative z-10 h-full w-full overflow-hidden rounded-full border-[5px] border-[#49FBDF] shadow-sm sm:border-[6px]",
          )}
        >
          <div className="absolute inset-1.5 flex flex-col items-center justify-center rounded-full bg-white px-4 text-center sm:inset-2 sm:px-4 lg:py-4">
            <p className="text-pretty text-[14px] font-bold leading-tight text-[#455FF6] sm:text-sm sm:leading-normal md:text-base">
              {eyebrow}
            </p>
            <h2 className="mt-0.5 text-pretty text-lg font-bold tracking-tight text-[#455ff6] sm:text-2xl md:text-3xl">
              {title}
            </h2>
            <div className="mt-2 max-w-[min(100%,15.5rem)] space-y-2 text-pretty text-sm leading-snug text-black max-[450px]:text-[0.425rem] sm:mt-4 sm:max-w-[18rem] sm:space-y-3 sm:leading-relaxed md:text-sm">
              {children}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

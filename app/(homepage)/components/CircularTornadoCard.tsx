import type { CSSProperties, ReactNode } from "react";

import TornadoArt from "@/assets/images/Tornado.png";
import Image from "next/image";

export type CircularTornadoCardTornadoSide = "leading" | "trailing";

export type CircularTornadoCardProps = {
  /** Small line above the title, e.g. “If you're an”. */
  eyebrow: string;
  /** Main heading, e.g. “Employer”. */
  title: string;
  /**
   * `leading` — tornado sits on the left (default SVG orientation).
   * `trailing` — horizontally flipped so the swirl reads on the right.
   */
  tornadoSide?: CircularTornadoCardTornadoSide;
  /** Body copy: paragraphs, `<strong>` for “The result?” lines, etc. */
  children: ReactNode;
  /** Square card edge length in px (default 500). Scales down on narrow viewports. */
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
  const boxStyle = {
    width: `min(${size}px, calc(100vw - 2rem))`,
    height: `min(${size}px, calc(100vw - 2rem))`,
  } satisfies CSSProperties;

  return (
    <article
      className={mergeClass("relative shrink-0", className)}
      style={boxStyle}
    >
      <div className="relative flex h-full w-full items-center justify-center">
        <div
          className={mergeClass(
            "pointer-events-none absolute top-1/2 z-0 w-[135%] max-w-none -translate-y-1/2",
            trailing
              ? "right-0 translate-x-[16%] sm:translate-x-[20%] -scale-x-100"
              : "left-0 -translate-x-[16%] sm:-translate-x-[20%]",
          )}
          aria-hidden
        >
          <Image src={TornadoArt} alt="Tornado" className="mx-auto h-auto w-[90%]" />
        </div>

        <div
          className={mergeClass(
            "relative z-10 h-full w-full overflow-hidden rounded-full border-[5px] border-[#49FBDF] shadow-sm sm:border-[6px]",
          )}
        >
          <div className="absolute inset-2 flex flex-col items-center justify-center overflow-y-auto rounded-full bg-white px-5 py-8 text-center sm:px-7 sm:py-10">
            <p className="text-pretty text-sm font-medium text-[#455ff6] sm:text-base">
              {eyebrow}
            </p>
            <h2 className="mt-0.5 text-pretty text-2xl font-bold tracking-tight text-indigo-600 sm:text-3xl">
              {title}
            </h2>
            <div className="mt-4 max-w-[min(100%,16rem)] space-y-3 text-pretty text-xs leading-relaxed text-neutral-600 sm:mt-5 sm:max-w-[18rem] sm:space-y-3.5 sm:text-sm">
              {children}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

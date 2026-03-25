import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

export type FloatingRegisterPillProps = {
  href?: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "children">;

export function FloatingRegisterPill({
  href = "/candidate",
  className,
  ...rest
}: FloatingRegisterPillProps) {
  return (
    <div className={["fixed right-[-24px] top-1/3 z-50 -translate-y-1/2 sm:right-[-44px]", className].filter(Boolean).join(" ")}>
      <Link
        href={href}
        className="flex h-[48px] w-[100px] flex-col items-center justify-center rounded-full border-2 border-[#1e2533] bg-white text-center shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition sm:h-[80px] sm:w-[182px]"
        {...rest}
      >
        <span className="text-[12px] leading-none text-[#49FBDF] sm:text-[22px]" aria-hidden>
          ✦
        </span>
        <span className="mt-0.5 whitespace-pre-line text-[10px] font-extrabold leading-[1.02] text-[#111827] sm:text-[18px]">
          {"Register\nNow!"}
        </span>
      </Link>
    </div>
  );
}

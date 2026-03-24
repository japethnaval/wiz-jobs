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
    <div className={["fixed right-[-44px] top-1/2 z-50 -translate-y-1/2", className].filter(Boolean).join(" ")}>
      <Link
        href={href}
        className="flex h-[96px] w-[182px] flex-col items-center justify-center rounded-full border-2 border-[#1e2533] bg-white text-center shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition hover:scale-[1.01] sm:h-[88px]"
        {...rest}
      >
        <span className="text-[22px] leading-none text-[#49FBDF]" aria-hidden>
          ✦
        </span>
        <span className="mt-0.5 whitespace-pre-line text-[18px] font-extrabold leading-[1.02] text-[#111827]">
          {"Register\nNow!"}
        </span>
      </Link>
    </div>
  );
}

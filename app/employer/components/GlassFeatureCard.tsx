import type { ReactNode } from "react";

export type GlassFeatureCardProps = {
  icon: ReactNode;
  title: ReactNode;
  children: ReactNode;
  className?: string;
};

export function GlassFeatureCard({ icon, title, children, className }: GlassFeatureCardProps) {
  return (
    <article
      className={[
        "flex w-full min-h-0 flex-col gap-4 rounded-[54px] border border-white bg-[color-mix(in_oklab,var(--color-white)_25%,transparent)] p-6 opacity-[0.6944] shadow-[0_8px_32px_rgba(15,23,42,0.08)] backdrop-blur-[30px] sm:gap-5 sm:p-8 lg:max-w-[409px] lg:mx-auto",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex shrink-0 text-[#455FF6]" aria-hidden>
        {icon}
      </div>
      <h3 className="font-area-normal-black text-xl font-black leading-tight text-black sm:text-2xl">
        {title}
      </h3>
      <div className="min-h-0 flex-1 text-sm font-normal leading-relaxed text-black/90 sm:text-base">
        {children}
      </div>
    </article>
  );
}

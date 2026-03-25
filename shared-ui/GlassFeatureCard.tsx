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
        "w-full flex min-h-0 flex-col gap-4 rounded-[16px] border border-white/55 bg-white/72 p-6 shadow-[0_8px_32px_rgba(15,23,42,0.08)] backdrop-blur-md sm:gap-5 sm:p-8 md:max-w-[360px] md:mx-auto lg:max-w-[409px] lg:mx-auto",
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

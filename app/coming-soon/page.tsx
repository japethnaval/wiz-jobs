"use client";

import { Grainient } from "@/shared-ui/ReactBits";

export default function ComingSoonPage() {
  return (
    <div className="relative flex h-dvh max-h-dvh min-h-0 w-full flex-col overflow-hidden overscroll-none">
      <div className="absolute inset-0 z-0 min-h-0">
        <Grainient
          grainAmount={0}
          warpSpeed={1}
          color1="#455FF6"
          color2="#8A9AF7"
          color3="#49FBDF"
          timeSpeed={1}
          className="h-full w-full"
        />
      </div>
      <div className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center overflow-hidden px-4 py-8">
        <h1 className="max-w-[20ch] text-balance text-center font-black uppercase tracking-[0.06em] text-white text-[clamp(2.75rem,12vw,7.5rem)] leading-[1.05] drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
          Coming Soon
        </h1>
      </div>
    </div>
  );
}

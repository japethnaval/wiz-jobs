"use client";

import Image from "next/image";
import { Graphics11 } from "@/assets/images";
import { FloatMotion } from "@/shared-ui/Motion";

export function HeroImageCollage() {
  return (
    <FloatMotion> 
      <div className="mx-auto w-full max-w-[960px]">
        <Image
          src={Graphics11}
          priority
          alt="Hiring platform hero: verified candidates, hiring ROI, less screening time, and match accuracy."
          placeholder="blur"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 960px"
          className="h-auto w-full"
        />
      </div>
    </FloatMotion>
  );
}

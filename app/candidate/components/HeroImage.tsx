"use client";
import Image from "next/image";
import { Graphics3 } from "@/assets/images";
import { FloatMotion } from "@/shared-ui";

export function HeroImage() {
  return (
    <FloatMotion>
      <div className="mx-auto w-full max-w-[min(100%,960px)] min-w-0 overflow-hidden rounded-4xl py-8 sm:rounded-[2.25rem]">
          <Image
          src={Graphics3}
          alt="A candidate profile preview with verification and scoring indicators."
          placeholder="blur"
          sizes="(max-width: 1040px) 100vw, 1040px"
          className="h-auto w-full object-cover"
          />
    </div>
  </FloatMotion>
  );
}
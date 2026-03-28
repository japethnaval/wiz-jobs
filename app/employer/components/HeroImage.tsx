"use client";
import Image from "next/image";
import { Graphics13 } from "@/assets/images";
import { FloatMotion } from "@/shared-ui";

export function HeroImage() {
  return (
    <FloatMotion>
        <div className="mx-auto w-full max-w-[min(100%,960px)] min-w-0 overflow-hidden rounded-4xl py-8 sm:rounded-[2.25rem]">
        <Image
        src={Graphics13}
        alt="A professional handshake representing trusted hiring outcomes."
        priority
        placeholder="blur"
        sizes="(max-width: 1368px) 100vw, 782px"
        className="mx-auto block h-auto w-full object-cover object-center"
        />
    </div>
  </FloatMotion>
  );
}
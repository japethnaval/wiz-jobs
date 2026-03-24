import Image from "next/image";
import { HomeHero } from "@/assets/images";

export function HeroImageCollage() {
  return (
    <div className="mx-auto w-full max-w-[min(100%,960px)]">
      <Image
        src={HomeHero}
        alt="Hiring platform hero: verified candidates, hiring ROI, less screening time, and match accuracy."
        priority
        sizes="(max-width: 768px) 100vw, 960px"
        className="h-auto w-full"
      />
    </div>
  );
}

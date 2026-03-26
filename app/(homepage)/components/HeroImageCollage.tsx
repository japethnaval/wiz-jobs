import Image from "next/image";
import { Graphics11 } from "@/assets/images";

export function HeroImageCollage() {
  return (
    <div className="mx-auto w-full max-w-[min(100%,960px)]">
      <Image
        src={Graphics11}
        alt="Hiring platform hero: verified candidates, hiring ROI, less screening time, and match accuracy."
        priority
        sizes="(max-width: 768px) 100vw, 960px"
        className="h-auto w-full"
      />
    </div>
  );
}

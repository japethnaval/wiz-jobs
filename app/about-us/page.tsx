import { Metadata } from "next";
import { FadeUp, Spacer } from "@/shared-ui";
import { AboutHeroSection } from "@/app/about-us/sections/AboutHeroSection";
import { MissionVisionWhySection } from "@/app/about-us/sections/MissionVisionWhySection";
import { ValuesSection } from "@/app/about-us/sections/ValuesSection";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about WizJobs mission, vision, and values.",
};

export default function AboutUsPage() {
  return (
    <div className="flex w-full flex-1 flex-col">
      <FadeUp className="w-full py-6 md:py-8 lg:py-12 px-4" amount={0.15}>
        <Spacer className="h-6 md:h-8 lg:h-12" />     
          <AboutHeroSection />
        <Spacer className="h-6 md:h-8 lg:h-12" />
      </FadeUp>
      <FadeUp className="w-full py-6 md:py-8 lg:py-12 bg-[#ECEEF7]" amount={0.15}>
        <MissionVisionWhySection />
      </FadeUp>
      <FadeUp className="w-full py-6 md:py-8 lg:py-12 bg-[#ECEEF7]" amount={0.15}>
        <ValuesSection />
      </FadeUp>
    </div>
  );
}
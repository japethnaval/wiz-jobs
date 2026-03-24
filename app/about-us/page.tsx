import { Metadata } from "next";
import { Spacer } from "@/shared-ui";
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
      <AboutHeroSection />
      <Spacer className="h-8 sm:h-10" />
      <MissionVisionWhySection />
      <Spacer className="h-8 sm:h-10" />
      <ValuesSection />
    </div>
  );
}
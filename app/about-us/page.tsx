import { FadeUp } from "@/shared-ui";
import { AboutHeroSection } from "@/app/about-us/sections/AboutHeroSection";
import { MissionVisionWhySection } from "@/app/about-us/sections/MissionVisionWhySection";
import { ValuesSection } from "@/app/about-us/sections/ValuesSection";
import { createPageMetadata } from "@/config/metadata";

export const metadata = createPageMetadata({
  title: "About Us",
  description: "Learn about WizJobs mission, vision, and values.",
  canonicalPath: "/about-us",
});
  
export default function AboutUsPage() {
  return (
    <div className="flex w-full flex-1 flex-col">
      <FadeUp className="w-full px-4 py-12 md:py-16 lg:py-24" amount={0.15}>
        <AboutHeroSection />
      </FadeUp>
      <FadeUp className="w-full" amount={0.15}>
        <MissionVisionWhySection />
      </FadeUp>
      <FadeUp className="w-full" amount={0.15}>
        <ValuesSection />
      </FadeUp>
    </div>
  );
}
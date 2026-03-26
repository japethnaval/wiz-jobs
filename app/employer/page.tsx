import { Metadata } from "next";
import { EmployerHeroSection } from "./sections/EmployerHeroSection";
import { EverythingYouNeedSection } from "./sections/EverythingYouNeedSection";
import { SwiperSection } from "./sections/SwiperSection";
import { FadeUp, Spacer } from "@/shared-ui";

export const metadata: Metadata = {
  title: "Employer",
  description: "Hire Verified Talent in Hours, Not Weeks",
};

export default function EmployerPage() {
  return (
    <div className="flex w-full flex-1 flex-col">
      <Spacer className="h-6 md:h-8 lg:h-12" />
      <FadeUp className="w-full py-6 md:py-8 lg:py-12 px-4" amount={0.15}>
        <EmployerHeroSection />
        <Spacer className="h-6 md:h-8 lg:h-12" />
      </FadeUp>
      <FadeUp className="w-full" amount={0.15}>
        <SwiperSection />
      </FadeUp>
      <FadeUp className="w-full" delay={0.08} amount={0.15}>
        <EverythingYouNeedSection />
      </FadeUp>
    </div>
  );
}
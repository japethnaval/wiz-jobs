import { Metadata } from "next";
import { EmployerHeroSection } from "./sections/EmployerHeroSection";
import { EverythingYouNeedSection } from "./sections/EverythingYouNeedSection";
import { SwiperSection } from "./sections/SwiperSection";
import { FadeUp } from "@/shared-ui";

export const metadata: Metadata = {
  title: "Employer",
  description: "Hire Verified Talent in Hours, Not Weeks",
};

export default function EmployerPage() {
  return (
    <div className="flex w-full flex-1 flex-col">
      <EmployerHeroSection />
      <FadeUp className="w-full" amount={0.15}>
        <SwiperSection />
      </FadeUp>
      <FadeUp className="w-full" delay={0.08} amount={0.15}>
        <EverythingYouNeedSection />
      </FadeUp>
    </div>
  );
}
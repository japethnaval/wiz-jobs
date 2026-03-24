import { Metadata } from "next";
import { Spacer } from "@/shared-ui";
import { CandidateHeroSection } from "@/app/candidate/sections/CandidateHeroSection";
import { HowItWorksSection } from "@/app/candidate/sections/HowItWorksSection";
import { JobSeekerVoicesSection } from "@/app/candidate/sections/JobSeekerVoicesSection";
import { VerificationBenefitsSection } from "@/app/candidate/sections/VerificationBenefitsSection";

export const metadata: Metadata = {
  title: "Candidate",
  description: "Get hired through verified qualifications and AI-powered matching.",
};

export default function CandidatePage() {
  return (
    <div className="flex w-full flex-1 flex-col">
      <CandidateHeroSection />
      <Spacer className="h-8 sm:h-10" />
      <HowItWorksSection />
      <Spacer className="h-8 sm:h-10" />
      <VerificationBenefitsSection />
      <Spacer className="h-8 sm:h-10" />
      <JobSeekerVoicesSection />
    </div>
  );
}
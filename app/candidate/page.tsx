import { FadeUp, Spacer } from "@/shared-ui";
import { CandidateHeroSection } from "@/app/candidate/sections/CandidateHeroSection";
import { HowItWorksSection } from "@/app/candidate/sections/HowItWorksSection";
import { JobSeekerVoicesSection } from "@/app/candidate/sections/JobSeekerVoicesSection";
import { VerificationBenefitsSection } from "@/app/candidate/sections/VerificationBenefitsSection";
import { createPageMetadata } from "@/config/metadata";

export const metadata = createPageMetadata({
  title: "Candidate",
  description: "Get hired through verified qualifications and AI-powered matching.",
  canonicalPath: "/candidate",
});

export default function CandidatePage() {
  return (
    <div className="flex w-full flex-1 flex-col">
      <Spacer className="h-6 md:h-8 lg:h-12" />
      <FadeUp className="w-full py-6 md:py-8 lg:py-12" amount={0.15}>
        <CandidateHeroSection />
      </FadeUp>
      <FadeUp className="w-full" amount={0.15}>
        <HowItWorksSection />
      </FadeUp>
      <FadeUp className="w-full" delay={0.08} amount={0.15}>
        <VerificationBenefitsSection />
      </FadeUp>
      <FadeUp className="w-full" delay={0.12} amount={0.15}>
        <JobSeekerVoicesSection />
      </FadeUp>
    </div>
  );
}
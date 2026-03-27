import { EmployerJobSeekerSection } from "@/app/(homepage)/sections/EmployerJobSeekerSection";
import { TheSolutionSection } from "@/app/(homepage)/sections/TheSolutionSection";
import { VerifiedTalanetsSection } from "@/app/(homepage)/sections/VerifiedTalanetsSection";
import { WeAreDifferentSection } from "@/app/(homepage)/sections/WeAreDifferentSection";
import { CircularGradient } from "./components/CicularGradient";
import { FadeUp, Spacer } from "@/shared-ui";
import { createPageMetadata } from "@/config/metadata";


export const metadata = createPageMetadata({
  title: "WizJobs",
  description: "WizJobs is a platform for finding and hiring verified talents.",
  canonicalPath: "/",
});

export default function Home() {
  return (
    <div className="flex w-full flex-1 flex-col">
      <Spacer className="h-6 md:h-8 lg:h-12" />
      <FadeUp className="w-full py-6 md:py-8 lg:py-12" amount={0.15}>
        <VerifiedTalanetsSection />
      </FadeUp>
      <FadeUp className="w-full py-6 md:py-8 lg:py-12" delay={0.08} amount={0.15}>
        <EmployerJobSeekerSection />
      </FadeUp>
      <FadeUp className="w-full" delay={0.12} amount={0.15}>
        <CircularGradient className="-mx-4 md:-mx-6 lg:-mx-8">
          <TheSolutionSection />
          <div className="bg-[#eceef8] pt-12 md:pt-16 lg:pt-24">
            <WeAreDifferentSection /> 
          </div>
        </CircularGradient>
      </FadeUp>
    </div>
  );
}

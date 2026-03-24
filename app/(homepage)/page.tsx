import { EmployerJobSeekerSection } from "@/app/(homepage)/sections/EmployerJobSeekerSection";
import { TheSolutionSection } from "@/app/(homepage)/sections/TheSolutionSection";
import { VerifiedTalanetsSection } from "@/app/(homepage)/sections/VerifiedTalanetsSection";
import { WeAreDifferentSection } from "@/app/(homepage)/sections/WeAreDifferentSection";
import { CircularGradient } from "./components/CicularGradient";
import { Spacer } from "@/shared-ui";

export default function Home() {
  return (
    <div className="flex w-full flex-1 flex-col">
      <Spacer className="h-24" />
      <VerifiedTalanetsSection />
      <Spacer className="h-24" />
      <EmployerJobSeekerSection />
      <Spacer className="h-24" />
      <CircularGradient>
      <TheSolutionSection />
      <Spacer className="h-24" />
      <WeAreDifferentSection />
      <Spacer className="h-24" />
      </CircularGradient>
    </div>
  );
}

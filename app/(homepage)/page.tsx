import dynamic from "next/dynamic";
import { VerifiedTalanetsSection } from "@/app/(homepage)/sections/VerifiedTalanetsSection";
import { FadeUp, Spacer } from "@/shared-ui";
import { createPageMetadata } from "@/config/metadata";

const HomepageDeferredSections = dynamic(
  () =>
    import("./HomepageDeferredSections").then((m) => m.HomepageDeferredSections)
);


export const metadata = createPageMetadata({
  title: "WizJobs",
  description: "WizJobs is a platform for finding and hiring verified talents.",
  canonicalPath: "/",
});

export default function Home() {
  return (
    <div className="flex w-full flex-1 flex-col">
      <Spacer className="h-6 md:h-8 lg:h-12" />
      <FadeUp
        className="relative z-10 w-full py-6 md:py-8 lg:py-12"
        amount={0.15}
      >
        <VerifiedTalanetsSection />
      </FadeUp>
      <HomepageDeferredSections />
    </div>
  );
}

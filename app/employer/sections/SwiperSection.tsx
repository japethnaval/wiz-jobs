import { CustomSwiper } from "@/shared-ui";

const slides = [
    {
      problemLabel: "Problem 01",
      problemSubheading: "Drowning in Applications",
      problemDescription: "You post a job. You get 200 applications. Maybe 60 are actually qualified. You spend 10+ hours manually screening. This is not a hiring process—it’s torture.",
      solutionLabel: "Solution 01",
      solutionSubheading: "Only See Qualified Candidates",
      solutionDescription: "Our AI pre-screens every application against your job requirements and ranks candidates by qualification score. You only review the top 10-15%, all verified.",
      resultPillText: "80% reduction in \nscreening time.",
    },
    {
        problemLabel: "Problem 02",
        problemSubheading: "Resume Fiction",
        problemDescription: "“Expert in Python.” Really? Can they code FizzBuzz? You won’t know until the interview—and by then you’ve already wasted an hour.",
        solutionLabel: "Solution 02",
        solutionSubheading: "Every Credential is Verified",
        solutionDescription: "Work experience verified with previous employers and LinkedIn. Skills tested and scored by AI. Certificates cross-checked with issuing authorities.",
        resultPillText: "Zero resume fraud. \n Zero surprises.",
      },
      {
        problemLabel: "Problem 03",
        problemSubheading: "No ROI Visibility",
        problemDescription: "You’re spending $5,000+ per hire between platform fees, recruiter time, and interviewing. But you have no idea if you’re getting value.",
        solutionLabel: "Solution 03",
        solutionSubheading: "Clear ROI Trackings",
        solutionDescription: "See exactly how many qualified candidates you’re getting per dollar spent. Track time-to-hire, cost-per-hire, and quality-of-hire in real-time.",
        resultPillText: "Data-driven\n hiring decisions.",
      },
  ];

export function SwiperSection() {
  return (
    <section className="bg-[#455FF6] relative isolate overflow-x-clip md:-mx-6 lg:-mx-8 py-12 md:py-16 lg:py-24">
      <CustomSwiper slides={slides} />
    </section>
  );
}


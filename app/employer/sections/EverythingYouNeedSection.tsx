import Image from "next/image";

import { Background3 } from "@/assets/images";
import { StaggerContainer, StaggerItem } from "@/shared-ui";
import { Icon11, Icon10, Icon9, Icon8 } from "@/assets";
import { GlassFeatureCard } from "../components/GlassFeatureCard";

const featureIconClassName = "block size-20 max-h-20 max-w-20 shrink-0";

export function EverythingYouNeedSection() {
  return (
    <section
      aria-labelledby="everything-you-need-heading"
      className="md:-mx-6 lg:-mx-8"
    >
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0 -z-10" aria-hidden>
          <Image
            src={Background3}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover blur-md scale-110"
          />
          <div className="absolute inset-0 bg-white/40" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[min(100%,96rem)] py-12 md:py-16 lg:py-24 px-4">
          <h2
            id="everything-you-need-heading"
            className="mx-auto max-w-4xl text-balance text-center leading-[1.15] font-bold text-black text-[clamp(1.875rem,1rem+3.2vw,3.25rem)]"
          >
            Everything You Need to Hire Better
          </h2>

          <StaggerContainer
            className="mx-auto mt-12 grid max-w-6xl grid-cols-1 items-stretch justify-center gap-4 sm:mt-14 sm:gap-6 md:grid-cols-2 md:gap-8 lg:mt-16 lg:max-w-fit lg:grid-cols-[409px_409px] lg:gap-[60px]"
            amount={0.12}
          >
            <StaggerItem className="flex min-h-0 min-w-0 h-full flex-col">
              <GlassFeatureCard
                className="h-full min-h-0"
                icon={<Icon10 aria-hidden className={featureIconClassName} />}
                title="90% Match Accuracy. Every Single Job Post."
              >
                <p className="mb-4">
                  The Industry Standard is 30%. We Deliver 90%. That means 9 out of 10 candidates you
                  review are actually qualified, not 3 out of 10.
                </p>
                <p className="mb-3 text-black font-bold">
                  <span className="font-bold text-[#455FF6]">How? </span>
                  <br />
                  AI qualification scoring + blockchain verification + multi-source credential checks.
                </p>
                <p className="text-black font-bold">
                  <span className="font-bold text-[#455FF6]">Result? </span>
                  <br />
                  Stop wasting 70% of your time on unqualified applicants. Interview the right people. Hire
                  faster.
                </p>
              </GlassFeatureCard>
            </StaggerItem>

            <StaggerItem className="flex min-h-0 min-w-0 h-full flex-col">
              <GlassFeatureCard
                className="h-full min-h-0"
                icon={<Icon9 aria-hidden className={featureIconClassName} />}
                title="See More Candidates. Headhunting Mode."
              >
                <p className="text-black font-bold">
                  Headhunting Mode gives you access to additional qualified candidates beyond your initial
                  matches—candidates who may have slightly lower scores but bring strong cultural fit or
                  unique value to your organization.
                </p>
              </GlassFeatureCard>
            </StaggerItem>

            <StaggerItem className="flex min-h-0 min-w-0 h-full flex-col">
              <GlassFeatureCard
                className="h-full min-h-0"
                icon={<Icon8 aria-hidden className={featureIconClassName} />}
                title="Verification Reports"
              >
                <p className="text-black font-bold">
                  Standardized format showing LinkedIn profile match, employment history verification, skill
                  assessment results, and certificate validation.
                </p>
              </GlassFeatureCard>
            </StaggerItem>

            <StaggerItem className="flex min-h-0 min-w-0 h-full flex-col">
              <GlassFeatureCard
                className="h-full min-h-0"
                icon={<Icon11 aria-hidden className={featureIconClassName} />}
                title="Analytics Dashboard"
              >
                <p className="text-black font-bold">
                  Track applications vs. qualified candidates ratio, average time-to-hire,
                  cost-per-quality-hire, and hiring manager performance.
                </p>
              </GlassFeatureCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

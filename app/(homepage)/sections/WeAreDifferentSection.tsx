"use client";

import WizLogo from "@/assets/WizLogo.svg";
import { FadeInScale, FadeUp } from "@/shared-ui";

const rows = [
  {
    feature: "Match Accuracy",
    traditional: "30–35%",
    ours: "90%",
  },
  {
    feature: "CV Screening",
    traditional: "Manual (hours)",
    ours: "AI (minutes)",
  },
  {
    feature: "Credential Verification",
    traditional: "Unverified",
    ours: "Blockchain-verified",
  },
  {
    feature: "Candidate Visibility",
    traditional: "Pay to be seen",
    ours: "Free verification",
  },
  {
    feature: "Hiring ROI",
    traditional: "Standard",
    ours: "6× better",
  },
  {
    feature: "Employer & Candidate",
    traditional: "Not applicable",
    ours: "Job application status & report",
  },
  {
    feature: "Job Recommendations",
    traditional: "Generic",
    ours: "Precision matching with scores",
  },
] as const;

function WMark() {
  return (
    <div
      className="relative mx-auto h-14 w-[3.25rem] overflow-hidden sm:h-16 sm:w-[3.75rem]"
      aria-hidden
    >
      <WizLogo className="absolute left-0 top-1/2 h-[4.5rem] w-auto min-w-[11rem] -translate-y-1/2 text-[#455ff6] sm:h-[5rem]" />
    </div>
  );
}

export function WeAreDifferentSection() {
  return (
      <section aria-labelledby="we-are-different-heading">
        <div className="mx-auto w-full max-w-[min(100%,56rem)] px-4 sm:px-6 bg-[#EAEBF6">
          <FadeInScale>
            <div className="rounded-[1.75rem] bg-[linear-gradient(90deg,#4FE3F2_-0.04%,#49FBDF_0.04%)] p-[3px] shadow-sm sm:rounded-[2rem] sm:p-1">
              <div className="rounded-[calc(1.75rem-3px)] bg-white px-4 py-8 sm:rounded-[calc(2rem-4px)] sm:px-8 sm:py-8 lg:px-8 lg:py-12">
                <FadeUp>
                <h2
                id="we-are-different-heading"
                className="mb-8 text-balance text-center text-2xl font-bold leading-tight text-neutral-900 sm:mb-12 sm:text-3xl lg:text-[2rem]"
              >
                <span className="block text-black font-extrabold text-3xl sm:text-4xl lg:text-5xl">Why We’re Different</span>
                <span className="mt-1 block text-xl font-extrabold text-black sm:text-2xl lg:text-3xl">
                  (And Why That Matters)
                </span>
              </h2>
                </FadeUp>

              <div className="overflow-x-auto [-webkit-overflow-scrolling:touch]">
              <table className="w-full min-w-[36rem] table-fixed border-separate border-spacing-0 text-sm sm:min-w-0 sm:text-base">
                <caption className="sr-only">
                  Comparison of traditional hiring platforms and WizJobs
                </caption>
                <colgroup>
                  <col className="w-1/3" />
                  <col className="w-1/3" />
                  <col className="w-1/3 bg-[linear-gradient(0deg,#DAE0FC_33%,rgba(218,224,252,0.5)_49%,rgba(255,255,255,0)_100%)]" />
                </colgroup>
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="w-1/3 px-4 pb-4 text-center text-[0.9375rem] font-semibold text-[#455ff6]"
                    >
                      Feature
                    </th>
                    <th
                      scope="col"
                      className="w-1/3 px-4 pb-4 text-center text-[0.9375rem] font-semibold text-[#455ff6]"
                    >
                      Traditional Platforms
                    </th>
                    <th
                      scope="col"
                      className="w-1/3 rounded-t-3xl px-4 pb-4 pt-2"
                    >
                      <div className="flex flex-col items-center gap-3">
                        <WMark />
                        <span className="sr-only">WizJobs</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => {
                    const isLast = index === rows.length - 1;
                    return (
                      <tr key={row.feature}>
                        <td
                          className={
                            "px-4 py-4 text-center align-middle font-medium text-[#455ff6]"
                          }
                        >
                          {row.feature}
                        </td>
                        <td
                          className={
                            "px-4 py-4 text-center align-middle text-[#455ff6]"
                          }
                        >
                          {row.traditional}
                        </td>
                        <td
                          className={[
                            "px-4 py-4 text-center align-middle text-base font-bold italic text-[#455ff6]",
                            isLast ? "rounded-b-3xl shadow-[inset_0_-1px_0_0_rgba(69,95,246,0.06)]" : "",
                          ].join(" ")}
                        >
                          {row.ours}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              </div>
              </div>
            </div>
          </FadeInScale>
        </div>
      </section>
  );
}

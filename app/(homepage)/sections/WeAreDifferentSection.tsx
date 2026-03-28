"use client";

import { useLayoutEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { Icon5 } from "@/assets";
import { FadeInScale, FadeUp } from "@/shared-ui";
import { ShinyText } from "@/shared-ui/ReactBits";

const oursCellStagger = 0.065;

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

/** Align horizontal scroll to the WizJobs column on narrow viewports (< sm). */
function useTableScrollToRightWhenNarrow() {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isNarrow = () =>
      typeof window !== "undefined" && window.matchMedia("(max-width: 639px)").matches;

    const sync = () => {
      if (!isNarrow()) {
        el.scrollLeft = 0;
        return;
      }
      el.scrollLeft = Math.max(0, el.scrollWidth - el.clientWidth);
    };

    sync();
    requestAnimationFrame(() => {
      requestAnimationFrame(sync);
    });

    const mq = window.matchMedia("(max-width: 639px)");
    mq.addEventListener("change", sync);

    const ro = new ResizeObserver(sync);
    ro.observe(el);

    window.addEventListener("resize", sync);

    return () => {
      mq.removeEventListener("change", sync);
      ro.disconnect();
      window.removeEventListener("resize", sync);
    };
  }, []);

  return ref;
}

function WMark({ shineDisabled }: { shineDisabled: boolean }) {
  return (
    <div
      className="relative mx-auto h-14 w-[3.25rem] overflow-hidden sm:h-16 sm:w-[3.75rem]"
      aria-hidden
    >
      <Icon5 className="absolute left-0 top-1/2 z-0 h-[4.5rem] w-auto min-w-[11rem] -translate-y-1/2 text-[#455ff6] sm:h-[5rem]" />
      {!shineDisabled && (
        <motion.div
          className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-[42%] max-w-[5rem] bg-[linear-gradient(90deg,transparent_0%,rgba(73,251,223,0.85)_45%,rgba(255,255,255,0.55)_52%,rgba(73,251,223,0.75)_58%,transparent_100%)] mix-blend-screen"
          initial={false}
          animate={{ left: ["-40%", "140%"] }}
          transition={{
            duration: 2.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            repeatDelay: 1,
          }}
        />
      )}
    </div>
  );
}

export function WeAreDifferentSection() {
  const reduceMotion = useReducedMotion();
  const tableScrollRef = useTableScrollToRightWhenNarrow();

  return (
      <section
        aria-labelledby="we-are-different-heading"
        className="pb-10 md:pb-14 lg:pb-20"
      >
        <div className="mx-auto w-full max-w-[min(100%,70rem)] bg-[#EAEBF6] px-4 sm:px-6 md:px-0">
            <FadeInScale>
              <div className="rounded-[1.75rem] bg-[linear-gradient(90deg,#4FE3F2_-0.04%,#49FBDF_0.04%)] p-[3px] shadow-sm sm:rounded-[2rem] sm:p-1">
                <div className="min-w-0 rounded-[calc(1.75rem-3px)] bg-white px-4 py-8 sm:rounded-[calc(2rem-4px)] sm:px-8 sm:py-8 lg:px-8 lg:py-12">
                  <FadeUp>
                  <h2
                  id="we-are-different-heading"
                  className="mb-8 text-balance text-center text-2xl font-bold leading-tight text-black sm:mb-12 sm:text-3xl lg:text-[2rem]"
                >
                  <span className="block text-black font-extrabold text-3xl sm:text-4xl lg:text-5xl">Why We’re Different</span>
                  <span className="mt-1 block text-xl font-extrabold text-black sm:text-2xl lg:text-3xl">
                    (And Why That Matters)
                  </span>
                </h2>
                  </FadeUp>

                <div
                  ref={tableScrollRef}
                  className="min-w-0 max-w-full overflow-x-auto overflow-y-hidden [-webkit-overflow-scrolling:touch]"
                >
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
                        className="w-1/3 px-4 pb-4 text-center text-[0.9375rem] font-extrabold italic text-[#455ff6]"
                      >
                        Feature
                      </th>
                      <th
                        scope="col"
                        className="w-1/3 px-4 pb-4 text-center text-[0.9375rem] font-medium italic text-[#455ff6]"
                      >
                        Traditional Platforms
                      </th>
                      <th
                        scope="col"
                        className="w-1/3 rounded-t-3xl px-4 pb-4 pt-2"
                      >
                        <div className="flex flex-col items-center gap-3">
                          <WMark shineDisabled={reduceMotion ?? false} />
                          <span className="sr-only">WizJobs</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, index) => {
                      const isLast = index === rows.length - 1;
                      const oursCellClass = [
                        "px-4 py-4 text-center align-middle text-base font-extrabold text-[#455ff6]",
                        isLast
                          ? "rounded-b-3xl shadow-[inset_0_-1px_0_0_rgba(69,95,246,0.06)]"
                          : "",
                      ].join(" ");
                      return (
                        <tr key={row.feature}>
                          <td
                            className={
                              "px-4 py-4 text-center align-middle font-extrabold italic text-[#455ff6]"
                            }
                          >
                            {row.feature}
                          </td>
                          <td
                            className={
                              "px-4 py-4 text-center align-middle font-medium italic text-[#455ff6]"
                            }
                          >
                            {row.traditional}
                          </td>
                          {reduceMotion ? (
                            <td className={oursCellClass}>
                              <ShinyText
                                text={row.ours}
                                disabled
                                speed={2.8}
                                className="max-w-full text-balance font-extrabold"
                                color="#455ff6"
                                shineColor="#49FBDF"
                                spread={130}
                              />
                            </td>
                          ) : (
                            <motion.td
                              className={oursCellClass}
                              initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                              viewport={{ once: true, amount: 0.35 }}
                              transition={{
                                type: "spring",
                                stiffness: 420,
                                damping: 34,
                                mass: 0.85,
                                delay: index * oursCellStagger,
                              }}
                            >
                              <ShinyText
                                text={row.ours}
                                speed={2.8}
                                className="max-w-full text-balance font-extrabold"
                                color="#455ff6"
                                shineColor="#49FBDF"
                                spread={130}
                                delay={index * 0.14}
                              />
                            </motion.td>
                          )}
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

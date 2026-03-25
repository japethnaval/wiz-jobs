import type { ReactNode } from "react";

import Image from "next/image";
import TornadoArt from "@/assets/images/Tornado.png";
import { motion } from "framer-motion";

export type NumberedTornadoStepProps = {
  step: number;
  title: string;
  children: ReactNode;
  className?: string;
  showConnector?: boolean;
  connectorSide?: "left" | "right";
};

function mergeClass(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}
function NumberedTornadoBadge({
  step,
  showConnector,
  connectorSide = "right",
}: {
  step: number;
  showConnector?: boolean;
  connectorSide?: "left" | "right";
}) {
  const isRight = connectorSide === "right";

  return (
    <div className="relative shrink-0" aria-hidden>
      {/* Badge */}
      <div className="relative z-10 grid h-14 w-14 place-items-center rounded-full bg-[linear-gradient(to_bottom,#455ff6_0%,#455ff6_10%,#ffffff_100%)] text-sm font-extrabold tracking-wide text-white sm:h-16 sm:w-16 sm:text-base">
        {String(step).padStart(2, "0")}
      </div>

      {/* Tornado */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 w-[108px] -translate-x-1/2 -translate-y-[54%] opacity-95 sm:w-[128px]">
        <Image src={TornadoArt} alt="" className="h-auto w-full" />
      </div>

      {/* CONNECTOR */}
      {showConnector && (
        <svg
          className={[
            "pointer-events-none absolute top-[50%] hidden w-[160px] -translate-y-1/2 lg:block",
            isRight
              ? "left-[calc(100%+1rem)]"
              : "right-[calc(100%+1rem)] -scale-x-100",
          ].join(" ")}
          viewBox="0 0 140 80"
        >
          <motion.polyline
            points="0,40 90,40 130,75"
            fill="none"
            stroke="#455ff6"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </svg>
      )}
    </div>
  );
}
export function NumberedTornadoStep({
  step,
  title,
  children,
  className,
  showConnector = false,
  connectorSide = "right",
}: NumberedTornadoStepProps) {
  return (
    <div className="relative inline-flex w-fit">
      
      {/* STEP CONTENT */}
      <div
        className={mergeClass(
          "flex w-fit flex-col items-center justify-center text-center lg:max-w-[290px]",
          className,
        )}
      >
        <NumberedTornadoBadge step={step} showConnector={showConnector} connectorSide={connectorSide} />
        <div className="mt-4 min-w-0 pt-4">
          <h3 className="text-pretty text-lg font-extrabold text-[#455ff6] sm:text-xl">
            {title}
          </h3>
          <div className="mt-2 text-pretty text-sm font-semibold leading-relaxed text-zinc-700 sm:text-[15px]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
} 
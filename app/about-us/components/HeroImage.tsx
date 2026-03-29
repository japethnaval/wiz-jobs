"use client";

import { useState } from "react";
import { Graphics1, Graphics2 } from "@/assets/images";
import Image from "next/image";
import { FloatMotion } from "@/shared-ui";

const colShell =
  "w-full min-w-0 overflow-hidden rounded-4xl sm:rounded-[2.25rem] min-[960px]:transition-[flex-basis] min-[960px]:duration-300 min-[960px]:ease-out motion-reduce:transition-none";

export function HeroImage() {
  const [secondHovered, setSecondHovered] = useState(false);

  return (
    <FloatMotion deferUntilLoad>
      <div className="mx-auto flex w-full max-w-[min(100%,960px)] flex-col items-center gap-[34px] pt-8 min-[960px]:flex-row min-[960px]:items-stretch">
        <div
          className={`${colShell} ${
            secondHovered ? "min-[960px]:basis-[42%]" : "min-[960px]:basis-[58%]"
          }`}
        >
          <Image
            src={Graphics1}
            priority
            alt="A professional handshake representing trusted hiring outcomes."
            placeholder="blur"
            sizes="(max-width: 959px) 100vw, 58vw"
            className="h-auto w-full object-cover"
          />
        </div>

        <div
          className={`${colShell} ${
            secondHovered ? "min-[960px]:basis-[58%]" : "min-[960px]:basis-[42%]"
          }`}
          onMouseEnter={() => setSecondHovered(true)}
          onMouseLeave={() => setSecondHovered(false)}
        >
          <Image
            src={Graphics2}
            priority
            alt="A candidate profile interview image showing confidence and trust."
            placeholder="blur"
            sizes="(max-width: 959px) 100vw, 42vw"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </FloatMotion>
  );
}

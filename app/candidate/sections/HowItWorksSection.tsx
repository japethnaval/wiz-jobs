"use client";

import Image, { type StaticImageData } from "next/image";
import { FadeUp, NumberedTornadoStep } from "@/shared-ui";
import { FamilyBg } from "@/assets/images";

type VerificationImageContainerProps = {
  image: StaticImageData | string;
  imageAlt: string;
};

function VerificationImageContainer({
  image,
  imageAlt,
}: VerificationImageContainerProps) {
  return (
    <div className="relative inline-block w-full max-w-[410px] lg:h-[270px]">
      <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[28px] border-b-2 border-r-2 border-[#455ff6]" />
      <div className="relative overflow-hidden rounded-[28px] border border-[#455ff6]/25 bg-white">
        <Image src={image} alt={imageAlt} className="h-auto w-full object-cover lg:h-[270px] lg:w-[410px]" />
      </div>
    </div>
  );
}

type StepWithImageProps = {
  step: number;
  title: string;
  body: React.ReactNode;
  image: StaticImageData | string;
  imageAlt: string;
  imageSide?: "left" | "right";
};

function StepWithImage({
  step,
  title,
  body,
  image,
  imageAlt,
  imageSide = "right",
}: StepWithImageProps) {
  const imageOnLeft = imageSide === "left";

  return (
    <div className="flex flex-col items-center gap-8 lg:grid lg:grid-cols-[410px_290px_410px] lg:justify-center lg:items-center lg:gap-x-8 xl:gap-x-12">
      <div
        className={
          imageOnLeft
            ? "order-2 lg:col-start-1 lg:row-start-1 lg:justify-self-end"
            : "order-2 lg:col-start-3 lg:row-start-1 lg:justify-self-start"
        }
      >
        <VerificationImageContainer image={image} imageAlt={imageAlt} />
      </div>

      <div className="order-1 lg:col-start-2 lg:row-start-1 lg:justify-self-center">
        <NumberedTornadoStep
          step={step}
          title={title}
          showConnector
          connectorSide={imageOnLeft ? "left" : "right"}
        >
          {body}
        </NumberedTornadoStep>
      </div>
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <section aria-labelledby="how-it-works" className="mt-16 sm:mt-24">
      <div className="mx-auto w-full max-w-280 px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <h2
            id="how-it-works"
            className="text-center text-4xl font-extrabold text-black sm:text-5xl"
          >
            How It Works
          </h2>
        </FadeUp>
        <div className="mx-auto mt-14 max-w-6xl">

            <div className="space-y-12 lg:space-y-16">
              <StepWithImage
                step={1}
                title="Verify Your Credentials"
                image={FamilyBg}
                imageAlt="Verification preview"
                imageSide="right"
                body={
                  <p>
                    Connect LinkedIn, upload certificates, confirm work history.
                    <br />
                    Get blockchain verification.
                  </p>
                }
              />
              <StepWithImage
                step={1}
                title="Verify Your Credentials"
                image={FamilyBg}
                imageAlt="Verification preview"
                imageSide="left"
                body={
                  <p>
                    Connect LinkedIn, upload certificates, confirm work history.
                    <br />
                    Get blockchain verification.
                  </p>
                }
              />
            </div>
        </div>
      </div>
    </section>
  );
}

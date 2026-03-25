"use client";

import Image, { type StaticImageData } from "next/image";
import { FadeUp, NumberedTornadoStep } from "@/shared-ui";
import { Graphics5 } from "@/assets/images";
import { Graphics6 } from "@/assets/images";
import { Graphics7 } from "@/assets/images";
import { Graphics8 } from "@/assets/images";

type VerificationImageContainerProps = {
  image: StaticImageData | string;
  imageAlt: string;
};

function VerificationImageContainer({
  image,
  imageAlt,
}: VerificationImageContainerProps) {
  return (
    <div className="relative inline-block w-full max-w-[480px] lg:h-[270px]">
      <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[28px] border-b border-r border-[#455ff6]" />
      <div className="relative overflow-hidden rounded-[28px] border border-[#455ff6]/25 bg-white">
        <Image src={image} alt={imageAlt} className="h-auto w-full object-cover lg:h-[270px] lg:w-[480px]" />
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
    <section 
      aria-labelledby="how-it-works" 
      className="bg-[linear-gradient(178.76deg,rgba(69,95,246,0.411765)_0.98%,rgba(255,255,255,0)_28.13%)] bg-[#FFFFFF] pt-[69px] pb-[103px]"
    >
      <div className="mx-auto w-full max-w-[1487px] px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <h2
            id="how-it-works"
            className="text-center text-black font-black text-[clamp(50px,62px+(100vw-768px)*0.02,62px)] leading-[1.1]"
          >
            How It Works
          </h2>
        </FadeUp>
        <div className="mx-auto mt-14">
            <div className="space-y-12 lg:space-y-16">
              <StepWithImage
                step={1} 
                title="Create Your Profile"
                image={Graphics5}
                imageAlt="Create Your Profile"
                imageSide="left"
                body={
                  <p>
                    Upload your CV. Our AI automatically extracts your experience, skills, and education.
                  </p>
                }
              />
              <StepWithImage
                step={2}
                title="Verify Your Credentials"
                image={Graphics6}
                imageAlt="Verification preview"
                imageSide="right"
                body={
                  <p>
                    Connect LinkedIn, upload certificates, confirm work history. Get blockchain verification.
                  </p>
                }
              />

              <StepWithImage
                step={3}
                title="See Your Score"
                image={Graphics7}
                imageAlt="See Your Score"
                imageSide="left"
                body={
                  <p>
                    For every job, see exactly how you match—skill by skill, requirement by requirement.
                  </p>
                }
              />

              <StepWithImage
                step={4}
                title="Get Matched"
                image={Graphics8}
                imageAlt="Get Matched"
                imageSide="right"
                body={
                  <p>
                    When a job fits your verified qualifications, you’re automatically surfaced to employers.
                  </p>
                }
              />
            </div>
        </div>
      </div>
    </section>
  );
}

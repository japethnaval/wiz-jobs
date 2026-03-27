import type { ReactNode } from "react";

const dataCollectionItems = [
  "Information establishing your identity (for example, name, address, email address, date of birth, passport, or ID).",
  "Financial information (for example, credit card details).",
  "Information relating to your use of this platform (for example, domain name, IP address, and cookies).",
  "Information relating to your attendance at events (such as records of attendance, feedback provided and attributable to you, images, selfies, audio and video captured, and security data such as video recording and video conferencing).",
  "Where you are an exhibitor, business partner, or visitor, we may collect information relating to your staff or agents (such as name, contact details, and proof of identity).",
  "Any information you independently choose to provide to us (for example, if you send us an email or call us).",
] as const;

const useBasisItems = [
  "For legitimate interests purposes to operate, improve, and minimize disruption to our services.",
  "Because the information is necessary for the performance of the event you are attending and/or organizing and to improve the customer journey.",
  "Because you have given your consent (where applicable).",
  "To comply with legal and regulatory obligations.",
] as const;

const sharingItems = [
  "Third-party service providers and sub-contractors (marketing, IT, data processing, etc.).",
  "Event partners for registration and attendance purposes.",
  "Competent authorities when legally required.",
] as const;

const rightsItems = [
  "Access your data",
  "Rectify your data",
  "Erase your data",
  "Restrict processing",
  "Object to processing",
  "Data portability",
  "Object to automated decision-making",
  "Withdraw consent",
] as const;

type PolicySectionProps = {
  title: string;
  children: ReactNode;
};

function PolicySection({ title, children }: PolicySectionProps) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-bold leading-tight text-black sm:text-2xl">
        {title}
      </h2>
      <div className="space-y-3 text-sm font-normal leading-relaxed text-black sm:text-base">
        {children}
      </div>
    </section>
  );
}

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function PrivacyPolicyView() {
  return (
    <section className="w-full px-4 py-12 md:px-8 md:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto w-full max-w-[min(100%,96rem)]">
        <div className="mx-auto w-full max-w-4xl space-y-10">
          <header className="space-y-4 text-left">
            <h1 className="py-6 md:py-8 py:h-12 text-balance font-bold leading-[1.1] text-black text-[clamp(2rem,1.3rem+3.2vw,3.5rem)]">
              Privacy Policy
            </h1>
            <p className="text-sm font-normal leading-relaxed text-black sm:text-base">
              WIZJOBS respects your privacy and is committed to protecting it.
              This Privacy Notice explains what information we collect, how we
              obtain it, and how we use it.
            </p>
            <p className="text-sm font-normal leading-relaxed text-black sm:text-base">
              For the purposes of this Privacy Notice, &quot;we&quot;,
              &quot;our&quot;, and &quot;us&quot; refer to WIZJOBS.
              &quot;This platform&quot; and &quot;mobile application&quot;
              collectively refer to WIZJOBS, its sub-domains, and all other
              platforms owned by WIZJOBS. &quot;You&quot; and
              &quot;your&quot; refer to any
              individual or company accessing our platform, desktop application,
              and/or mobile application, as well as any visitor and/or organizer
              to events or exhibitions taking place on our platform.
            </p>
          </header>

          <PolicySection title="Data Collection and Use">
            <p>The information we may collect from you includes:</p>
            <BulletList items={dataCollectionItems} />
          </PolicySection>

          <PolicySection title="How Do We Obtain Your Information">
            <p>
              We may collect your information during the course of our
              relationship with you and will only use your personal information
              in accordance with applicable international data protection law.
            </p>
          </PolicySection>

          <PolicySection title="On What Basis We Use Your Information">
            <p>We use your personal information on the following bases:</p>
            <BulletList items={useBasisItems} />
          </PolicySection>

          <PolicySection title="With Whom Do We Share Your Information">
            <p>
              We will only disclose or transfer your personal information for
              the purposes set out in this notice to:
            </p>
            <BulletList items={sharingItems} />
          </PolicySection>

          <PolicySection title="Countries to Which We Transfer Your Information">
            <p>
              The information you submit may be transferred, stored, or hosted
              outside your country and in jurisdictions with different data
              protection laws. We implement appropriate safeguards to protect
              your data.
            </p>
          </PolicySection>

          <PolicySection title="Cookies">
            <p>
              Cookies are small pieces of information stored on your browser. We
              may use cookies to improve your experience, personalize content,
              and support platform functionality. You can control cookie
              preferences through your browser settings.
            </p>
          </PolicySection>

          <PolicySection title="Data Retention">
            <p>
              We retain your data only as long as necessary to fulfill purposes
              outlined in this notice or to comply with legal obligations.
            </p>
          </PolicySection>

          <PolicySection title="Your Rights">
            <p>You have the right to:</p>
            <BulletList items={rightsItems} />
            <p>For any of the above, please email us at info@wizjobs.com.</p>
          </PolicySection>

          <PolicySection title="Location Services">
            <p>
              We may collect location-based data (such as Wi-Fi and cell tower
              information) to provide location-based services, personalized
              content, and navigation features.
            </p>
          </PolicySection>

          <PolicySection title="Children">
            <p>
              We do not knowingly collect data from children and do not target
              our platform to children.
            </p>
          </PolicySection>

          <PolicySection title="Severability">
            <p>
              If any provision of this Privacy Policy is deemed invalid, the
              remaining provisions remain enforceable.
            </p>
          </PolicySection>

          <PolicySection title="Notification of Changes">
            <p>
              We reserve the right to update this Privacy Policy at any time.
              Continued use of our platform indicates acceptance of those
              changes.
            </p>
          </PolicySection>

          <PolicySection title="Security">
            <p>
              We implement appropriate technical and organizational measures,
              including SSL encryption, to protect your personal data. However,
              no transmission over the internet is completely secure.
            </p>
          </PolicySection>

          <PolicySection title="Information Collection and Use">
            <p>
              We may collect personal data such as contacts, gallery, email,
              phone number, name, and camera access to improve your experience.
            </p>
          </PolicySection>

          <PolicySection title="Privacy Compliance">
            <p>
              We are committed to maintaining compliance with evolving data
              privacy laws and standards.
            </p>
          </PolicySection>

          <PolicySection title="Whistle Blowing">
            <p>
              We encourage reporting of misconduct or unethical behavior. Please
              contact us at info@wiz-jobs.com.
            </p>
          </PolicySection>

          <PolicySection title="Hyperlinks">
            <p>
              Our platform may contain links to third-party platforms. We are
              not responsible for their privacy practices.
            </p>
          </PolicySection>

          <PolicySection title="Contacting Us">
            <p>
              If you have any questions regarding this Privacy Policy, please
              contact us at info@wiz-jobs.com.
            </p>
          </PolicySection>
        </div>
      </div>
    </section>
  );
}
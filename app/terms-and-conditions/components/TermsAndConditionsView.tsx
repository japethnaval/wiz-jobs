import type { ReactNode } from "react";

const acceptableUseItems = [
  "Use this website in accordance with these Terms and Conditions.",
  "Use this website only for lawful and proper purposes.",
  "Comply with all applicable laws, regulations, and codes of practice within the Emirate of Dubai in the United Arab Emirates and the applicable federal laws of the United Arab Emirates, and any other jurisdiction from which you are accessing this website.",
] as const;

type TermsSectionProps = {
  title: string;
  children: ReactNode;
};

function TermsSection({ title, children }: TermsSectionProps) {
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

export function TermsAndConditionsView() {
  return (
    <section className="w-full px-4 py-12 md:px-8 md:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto w-full max-w-[min(100%,96rem)]">
        <div className="mx-auto w-full max-w-4xl space-y-10">
          <header className="space-y-4 text-left">
            <h1 className="py-6 md:py-8 py:h-12 text-balance font-bold leading-[1.1] text-black text-[clamp(2rem,1.3rem+3.2vw,3.5rem)]">
              Terms and Conditions
            </h1>
            <p className="text-sm font-normal leading-relaxed text-black sm:text-base">
              WizJobs provides these Terms and Conditions to inform you of our
              legal policy and practices. Please carefully review these Terms
              and Conditions before using this website. Your use of this website
              indicates your irrevocable agreement to be bound by these Terms
              and Conditions.
            </p>
            <p className="text-sm font-normal leading-relaxed text-black sm:text-base">
              The website, application, and its sub-domains are owned by
              WizJobs, trading as WizJobs, a limited liability company
              incorporated in Dubai, United Arab Emirates, and having its head
              office at Concord Tower, Dubai Media City, Office 808, P.O. Box
              37487, Dubai, UAE. Telephone: +971-4-3388834 with a registered
              brand worldwide.
            </p>
            <p className="text-sm font-normal leading-relaxed text-black sm:text-base">
              For the purposes of these Terms and Conditions, &quot;we&quot;,
              &quot;our&quot;, and &quot;us&quot; refer to WizJobs.
              &quot;This website&quot; collectively refers to the website and
              its sub-domains, and &quot;you&quot; and &quot;your&quot; refer to
              a specific individual or program accessing this website.
            </p>
          </header>

          <TermsSection title="Governance">
            <p>
              This website is governed in accordance with the laws of the
              Emirate of Dubai and the applicable federal laws of the United
              Arab Emirates. The courts of the Emirate of Dubai in the United
              Arab Emirates have exclusive jurisdiction over any dispute arising
              out of your use of this website.
            </p>
          </TermsSection>

          <TermsSection title="Data Protection">
            <p>
              Any personal information you supply to us when you use this
              website will be used in accordance with our Privacy Policy.
            </p>
          </TermsSection>

          <TermsSection title="Proprietary Rights">
            <p>
              All information and other materials provided on this website,
              together with the underlying software code, are owned either
              directly by us or by our licensors.
            </p>
            <p>
              You may not copy, modify, alter, publish, broadcast, distribute,
              sell, or transfer any material on this website or the underlying
              software code, whether in whole or in part, without our explicit
              permission. However, the contents of this website may be
              downloaded, printed, or copied for your personal non-commercial
              use.
            </p>
            <p>
              Any unauthorized use of this website may result in a violation of
              copyright laws, trademark laws, the laws of privacy and
              publication, and communication regulations and statutes. Nothing in
              this website should be construed to be a grant of a license,
              ownership, or any other proprietary right in this website, its
              contents, or the underlying software code.
            </p>
          </TermsSection>

          <TermsSection title="Acceptable Use">
            <BulletList items={acceptableUseItems} />
          </TermsSection>

          <TermsSection title="Disclaimer of Warranty">
            <p>
              We provide this website on an &quot;as is&quot; and &quot;as
              available&quot; basis and without any warranty or condition,
              express, implied, or otherwise. We specifically disclaim all
              implied warranties of title, merchantability, fitness for a
              particular purpose, and non-infringement, to the maximum extent
              that such disclaimers are held to be valid.
            </p>
          </TermsSection>

          <TermsSection title="Indemnification">
            <p>
              You agree to indemnify and keep us indemnified from and against
              all costs, claims, demands, liabilities, expenses, damages, or
              losses (including without limitation consequential losses, loss of
              profit and loss of reputation, and all interest, penalties, and
              legal and other professional costs and expenses) arising out of or
              in connection with your breach of these Terms and Conditions.
            </p>
          </TermsSection>

          <TermsSection title="Hyperlinks">
            <p>
              Our websites may provide links to third-party websites for your
              convenience. If you access those links, you will leave our
              website.
            </p>
            <p>
              We do not control those websites or their legal practices, which
              may differ from ours. We do not endorse or make any representations
              about third-party websites.
            </p>
            <p>
              These Terms and Conditions do not cover your interaction with
              third-party websites, and we encourage you to review the terms and
              conditions of any third-party website before accessing the same.
            </p>
          </TermsSection>

          <TermsSection title="Waiver">
            <p>
              Our failure or delay to enforce at any time one or more of these
              Terms and Conditions will not constitute a waiver of such Terms
              and Conditions or of our right at any time subsequently to enforce
              all these Terms and Conditions.
            </p>
          </TermsSection>

          <TermsSection title="Severability">
            <p>
              If any provision (or part thereof) of these Terms and Conditions
              is deemed unlawful, void, or for any reason unenforceable, then
              that provision is deemed severable and does not affect the
              validity and enforceability of any remaining provisions.
            </p>
          </TermsSection>

          <TermsSection title="Notification of Changes">
            <p>
              We reserve the right to change our Terms and Conditions at any
              time without prior notice. Your continued access or use of this
              website after such changes indicates your acceptance of the Terms
              and Conditions as modified.
            </p>
            <p>
              It is your responsibility to review the Terms and Conditions
              regularly. These Terms and Conditions were last updated on 1st
              December 2019.
            </p>
          </TermsSection>

          <TermsSection title="Contacting Us">
            <p>
              The terms and conditions are set out in broad points. If you have
              any questions relating to our Terms and Conditions, please send
              postal mail to the following address:
            </p>
            <p>WizJobs P.O. Box 37487, Dubai, UAE</p>
          </TermsSection>
        </div>
      </div>
    </section>
  );
}
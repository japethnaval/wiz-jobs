import { TermsAndConditionsView } from "@/app/terms-and-conditions/components/TermsAndConditionsView";
import { createPageMetadata } from "@/config/metadata";

export const metadata = createPageMetadata({
  title: "Terms and Conditions",
  description:
    "Read the WizJobs terms and conditions governing access and use of our website and services.",
  canonicalPath: "/terms-and-conditions",
});

export default function TermsAndConditionsPage() {
  return <TermsAndConditionsView />;
}

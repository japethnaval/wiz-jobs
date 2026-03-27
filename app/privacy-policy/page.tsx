import { PrivacyPolicyView } from "@/app/privacy-policy/components/PrivacyPolicyView";
import { createPageMetadata } from "@/config/metadata";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Read how WizJobs collects, uses, protects, and shares your personal data.",
  canonicalPath: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyView />;
}
import { FloatingRegisterPill } from "@/shared-ui";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FloatingRegisterPill />
      <div className="px-4 md:px-6 lg:px-8">{children}</div>
    </>
  );
}
export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-0 md:px-0 lg:px-0">
        {children}
      </div>
  );
}
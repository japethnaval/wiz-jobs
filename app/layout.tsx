import type { Metadata } from "next";
import localFont from "next/font/local";
import { WizJobGreyBackDrop } from "@/shared-ui";
import { AppChrome } from "./AppChrome";
import "./globals.css";

const areaNormal = localFont({
  src: [
    { path: "../public/fonts/Area_Normal_Regular.otf", weight: "300", style: "normal" },
    { path: "../public/fonts/Area_Normal_Regular.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/Area_Normal_SemiBold.otf", weight: "500", style: "normal" },
    { path: "../public/fonts/Area_Normal_SemiBold_Italic.otf", weight: "500", style: "italic" },
    { path: "../public/fonts/Area_Normal_SemiBold.otf", weight: "600", style: "normal" },
    { path: "../public/fonts/Area_Normal_Bold.otf", weight: "700", style: "normal" },
    { path: "../public/fonts/Area_Normal_ExtraBold.otf", weight: "800", style: "normal" },
    { path: "../public/fonts/Area_Normal_ExtraBold_Italic.otf", weight: "800", style: "italic" },
    { path: "../public/fonts/Area_Normal_Black.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-area-normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WizJobs",
  description: "WizJobs is a platform for finding and hiring verified talents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full overflow-x-clip antialiased">
      <body
        suppressHydrationWarning
        className={`${areaNormal.className} ${areaNormal.variable} relative flex min-h-full flex-col overflow-x-clip bg-white text-zinc-900`}
      >
        <WizJobGreyBackDrop />
        <AppChrome>{children}</AppChrome>
      </body>
    </html>
  );
}

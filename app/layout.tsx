import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "@/shared-ui/Footer";
import { FooterHeading } from "@/shared-ui/FooterHeading";
import { Navigation } from "@/shared-ui/Navigation";
import { WizJobGreyBackDrop } from "@/shared-ui";
import { FloatingRegisterPill } from "@/shared-ui/FloatingRegisterPill";
import FloatingLines from "@/shared-ui/ReactBits/FloatingLines";
import "./globals.css";

const areaNormal = localFont({
  src: [
    { path: "../public/fonts/Area_Normal_Thin.otf", weight: "100", style: "normal" },
    { path: "../public/fonts/Area_Normal_Thin_Italic.otf", weight: "100", style: "italic" },
    { path: "../public/fonts/Area_Normal_Regular.otf", weight: "300", style: "normal" },
    { path: "../public/fonts/Area_Normal_Regular_Italic.otf", weight: "300", style: "italic" },
    { path: "../public/fonts/Area_Normal_Regular.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/Area_Normal_Regular_Italic.otf", weight: "400", style: "italic" },
    { path: "../public/fonts/Area_Normal_SemiBold.otf", weight: "500", style: "normal" },
    { path: "../public/fonts/Area_Normal_SemiBold_Italic.otf", weight: "500", style: "italic" },
    { path: "../public/fonts/Area_Normal_SemiBold.otf", weight: "600", style: "normal" },
    { path: "../public/fonts/Area_Normal_SemiBold_Italic.otf", weight: "600", style: "italic" },
    { path: "../public/fonts/Area_Normal_Bold.otf", weight: "700", style: "normal" },
    { path: "../public/fonts/Area_Normal_Bold_Italic.otf", weight: "700", style: "italic" },
    { path: "../public/fonts/Area_Normal_ExtraBold.otf", weight: "800", style: "normal" },
    { path: "../public/fonts/Area_Normal_ExtraBold_Italic.otf", weight: "800", style: "italic" },
    { path: "../public/fonts/Area_Normal_Black.otf", weight: "900", style: "normal" },
    { path: "../public/fonts/Area_Normal_Black_Italic.otf", weight: "900", style: "italic" },
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
        <div className="pointer-events-none fixed inset-0 z-0 opacity-35">
          <FloatingLines
            linesGradient={["#2f4ba2", "#455ff6", "#fff"]}
            enabledWaves={["top", "middle", "bottom"]}
            lineCount={[4, 4, 4]}
            lineDistance={[7, 7, 7]}
            topWavePosition={{ x: -0.2, y: 0.85, rotate: -0.03 }}
            middleWavePosition={{ x: 0, y: 0, rotate: 0 }}
            animationSpeed={1}
            bendRadius={4}
            bendStrength={-0.35}
            interactive={false}
            parallax
            parallaxStrength={0.15}
            mixBlendMode="multiply"
          />
        </div>
        <WizJobGreyBackDrop />
        <Navigation />
        <FloatingRegisterPill />
        <div className="relative z-10 flex flex-1 flex-col overflow-clip">
          <main className="flex-1">{children}</main>
          <FooterHeading />
          <Footer />
        </div>
      </body>
    </html>
  );
}

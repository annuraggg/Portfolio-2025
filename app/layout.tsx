import "./globals.css";
import type { Metadata } from "next";
import {
  polyNeutral,
  polySlim,
  polyMedian,
  neueRegular,
  neueBold,
  neueLight,
  neueMedium,
  neueItalic,
  gloock,
} from "@/lib/fonts";
import LogRocket from "logrocket";
import Scripts from "next/script";
import ReactLenis from "lenis/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Anurag Sawant - Full Stack Developer",
  description:
    "Hello, I'm Anurag Sawant, a Full Stack Developer. I craft digital experiences that people love.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  LogRocket.init(process.env.NEXT_PUBLIC_LOGROCKET_ID as string);
  LogRocket.identify(
    Math.random().toString(36).substring(2) + Date.now().toString(36)
  );

  return (
    <html
      lang="en"
      className={`${polyNeutral.variable} ${polySlim.variable} ${polyMedian.variable} ${neueRegular.variable} ${neueBold.variable} ${neueLight.variable} ${neueMedium.variable} ${neueItalic.variable} ${gloock.variable}`}
    >
      <link rel="icon" type="image/png" href="/logoicon.png" />
      <body>
        <ReactLenis root>{children}</ReactLenis>
        <SpeedInsights />
        <Analytics />
      </body>
      <Scripts />
    </html>
  );
}

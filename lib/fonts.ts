import localFont from "next/font/local";
import { Gloock } from "next/font/google";

export const polySlim = localFont({
  src: "/../public/fonts/polysans/slim.woff2",
  variable: "--font-polyslim",
});

export const polyNeutral = localFont({
  src: "../public/fonts/polysans/neutral.woff2",
  variable: "--font-polyneutral",
});

export const polyMedian = localFont({
  src: "../public/fonts/polysans/median.woff2",
  variable: "--font-polymedian",
});

export const neueRegular = localFont({
  src: "../public/fonts/neue/NeueMontreal-Regular.otf",
  variable: "--font-neueregu",
});

export const neueBold = localFont({
  src: "../public/fonts/neue/NeueMontreal-Bold.otf",
  variable: "--font-neuebold",
});

export const neueLight = localFont({
  src: "../public/fonts/neue/NeueMontreal-Light.otf",
  variable: "--font-neuelight",
});

export const neueMedium = localFont({
  src: "../public/fonts/neue/NeueMontreal-Medium.otf",
  variable: "--font-neuemedium",
});

export const neueItalic = localFont({
  src: "../public/fonts/neue/NeueMontreal-Italic.otf",
  variable: "--font-neueitalic",
});

export const gloock = Gloock({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gloock",
});

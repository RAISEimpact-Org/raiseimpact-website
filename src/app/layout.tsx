import type { Metadata } from "next";
import { Source_Serif_4, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
  weight: ["400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "RAISEimpact — People Infrastructure for AI Safety Organizations",
  description:
    "79% of AI safety organizations have no dedicated people leadership. We embed inside teams, build the systems they're missing, and measure what changes. Six organizations across Europe.",
  openGraph: {
    title: "RAISEimpact — People Infrastructure for AI Safety Organizations",
    description:
      "79% of AI safety organizations have no dedicated people leadership. We embed inside teams, build the systems they're missing, and measure what changes.",
    type: "website",
    locale: "en_US",
    siteName: "RAISEimpact",
  },
  twitter: {
    card: "summary_large_image",
    title: "RAISEimpact — People Infrastructure for AI Safety Organizations",
    description:
      "We embed inside AI safety teams, build the systems they're missing, and measure what changes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sourceSerif.variable} ${inter.variable} ${ibmPlexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

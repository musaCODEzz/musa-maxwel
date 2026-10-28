import type { Metadata, Viewport } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Musa Maxwel - Fullstack Engineer & Systems Builder",
  description:
    "Musa Maxwel (@musaCODEzz) is a fullstack software engineer building anti-fraud vehicle verification engines (AutoLog KE), developer platforms (StackPulse), and distributed web systems based in Nairobi, Kenya.",
  authors: [{ name: "Musa Maxwel", url: "https://github.com/musaCODEzz" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/musaCODEzz",
    title: "Musa Maxwel - Fullstack Engineer",
    description: "Building resilient web applications, anti-fraud systems, and scalable APIs in Nairobi, Kenya.",
    siteName: "Musa Maxwel Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Musa Maxwel - Fullstack Engineer",
    description: "Building resilient web applications, anti-fraud systems, and scalable APIs in Nairobi, Kenya.",
    creator: "@musaCODEzz",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}

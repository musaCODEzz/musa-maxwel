import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Musa Maxwell | Full-Stack Software Engineer (@musaCODEzz)",
  description:
    "Official portfolio of Musa Maxwell (@musaCODEzz). Full-Stack Software Engineer building anti-fraud vehicle platforms (AutoLog KE), developer publishing engines (StackPulse), payment microservices (M-Pesa DARAJA), and scalable web applications.",
  keywords: [
    "Musa Maxwell",
    "musaCODEzz",
    "Full-Stack Software Engineer",
    "TypeScript",
    "Next.js",
    "React",
    "Node.js",
    "Express",
    "AutoLog KE",
    "StackPulse",
    "Nairobi Software Engineer",
    "Kenya Software Engineer",
    "REST API",
    "OpenAPI"
  ],
  authors: [{ name: "Musa Maxwell", url: "https://github.com/musaCODEzz" }],
  creator: "Musa Maxwell",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/musaCODEzz",
    title: "Musa Maxwell | Full-Stack Software Engineer",
    description:
      "Talk less — Show me the code. Engineering resilient web systems, scalable APIs, and automotive anti-fraud platforms.",
    siteName: "Musa Maxwell Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Musa Maxwell | Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer building resilient web systems and APIs. Explore live projects and interactive terminal.",
    creator: "@musaCODEzz",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#07090e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navigation } from "@/components/Navigation";
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
  title: "Idderf Salem - Full Stack & Web3 Developer",
  description:
    "Full Stack Developer with production experience building Web3 MVPs and traditional web applications. Specialized in Solana/Algorand smart contracts.",
  keywords: [
    "Full Stack Developer",
    "Web3 Developer",
    "Blockchain Developer",
    "Solana",
    "Algorand",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Idderf Salem" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Idderf Salem - Full Stack & Web3 Developer",
    description:
      "Full Stack Developer with production experience building Web3 MVPs and traditional web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Libre_Caslon_Text, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const serif = Libre_Caslon_Text({
  weight: ["400", "700"],
  variable: "--font-serif",
  subsets: ["latin"],
});

const sans = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  weight: ["400", "500"],
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emmanuel Mathew | .NET Developer",
  description:
    "Portfolio of Emmanuel Mathew, a result-driven .NET Developer with experience in .NET and Azure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Libre_Caslon_Text, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/lib/theme-provider";
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
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                var dark;
                var t = localStorage.getItem('theme');
                if (t === 'dark') {
                  dark = true;
                } else if (t === 'light') {
                  dark = false;
                } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                  dark = true;
                } else {
                  dark = false;
                }
                document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
                document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
              } catch(e) {}
            })();
          `,
        }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

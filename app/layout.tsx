import type { Metadata } from "next";
import { JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";

const outfitSans = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zain Ul Hassan - Software Engineer",
  description: "Portfolio of Zain Ul Hassan, a software engineer specializing in web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfitSans.variable} ${jetbrainsMono.variable} text-foreground antialiased`}
      >
        <div className="relative container mx-auto min-h-screen max-w-screen-xl p-4 md:p-8">
          {/* Background grid pattern */}
          <GridPattern
            className={cn(
              "pointer-events-none h-screen w-full",
              "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            )}
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(75%_60%_at_50%_0%,rgba(16,185,129,0.10),rgba(16,185,129,0)_60%)]"
          />

          <Header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky inset-0 top-0 right-0 left-0 z-50 w-full border-b backdrop-blur" />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

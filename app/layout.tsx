import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";

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
        className={`${outfitSans.variable} ${jetbrainsMono.variable} bg-background text-foreground antialiased`}
      >
        <div className="relative container mx-auto min-h-screen max-w-screen-xl p-4 md:p-8">
          <Header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur" />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

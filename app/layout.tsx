import type { Metadata } from "next";
import { JetBrains_Mono, Lora, Playfair_Display } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
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
        className={`${lora.variable} ${playfairDisplay.variable} ${jetbrainsMono.variable} text-foreground antialiased`}
      >
        <div className="relative container mx-auto min-h-screen max-w-screen-xl px-4 md:px-8">
          <Header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky inset-0 z-50 backdrop-blur" />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

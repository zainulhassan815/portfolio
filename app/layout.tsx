import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body
        className={`${outfitSans.variable} ${jetbrainsMono.variable} bg-background text-foreground antialiased`}
      >
        <div className="relative container mx-auto min-h-screen max-w-screen-xl p-4 antialiased md:p-8">
          {children}
        </div>
      </body>
    </html>
  );
}

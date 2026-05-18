import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/NavBar/NavBarComponent";
import { BackgroundBeams } from "@/components/ui/background-beams";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Mangrulkar | Portfolio",
  description:
    "Dev Mangrulkar portfolio — federal software engineering, analytics, and AI-driven systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
    <body className="relative min-h-full flex min-h-screen flex-col bg-background text-foreground">
      <div className="relative">
        <BackgroundBeams className="absolute inset-0 z-0" />
        <div className="relative z-10 w-full">
          <Navigation />
          <main className="relative z-0">{children}</main>
        </div>
      </div>
    </body>
    </html>
  );
}

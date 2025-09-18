import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/AppShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rajdeep Sah - AI/ML Engineer | Researcher | Developer",
  description: "AI/ML Engineer, AI Researcher, Mathematical Researcher, Developer, and Manager. Passionate about solving complex problems through artificial intelligence and machine learning.",
  keywords: ["AI", "Machine Learning", "Research", "Developer", "Mathematical Research", "Artificial Intelligence"],
  authors: [{ name: "Rajdeep Sah" }],
  openGraph: {
    title: "Rajdeep Sah - AI/ML Engineer | Researcher | Developer",
    description: "AI/ML Engineer, AI Researcher, Mathematical Researcher, Developer, and Manager. Passionate about solving complex problems through artificial intelligence and machine learning.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajdeep Sah - AI/ML Engineer | Researcher | Developer",
    description: "AI/ML Engineer, AI Researcher, Mathematical Researcher, Developer, and Manager.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300`}
      >
        <AppShell>
          {children}
        </AppShell>
      </body>
    </html>
  );
}

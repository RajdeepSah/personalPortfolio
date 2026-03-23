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
  metadataBase: new URL("https://rajdeep.officialework.com"),
  title: {
    default: "Rajdeep Sah - AI/ML Engineer | Researcher | Developer",
    template: "%s | Rajdeep Sah",
  },
  description:
    "AI/ML Engineer, AI Researcher, Mathematical Researcher, Developer, and Manager. Passionate about solving complex problems through artificial intelligence and machine learning.",
  keywords: [
    "Rajdeep Sah",
    "AI",
    "Machine Learning",
    "web development",
    "game development",
    "software development",
    "database systems",
    "Research",
    "Developer",
    "Mathematical Research",
    "Artificial Intelligence",
  ],
  authors: [{ name: "Rajdeep Sah" }],
  creator: "Rajdeep Sah",
  openGraph: {
    title: "Rajdeep Sah - AI/ML Engineer | Researcher | Developer",
    description:
      "AI/ML Engineer, AI Researcher, Mathematical Researcher, Developer, and Manager. Passionate about solving complex problems through artificial intelligence and machine learning.",
    type: "website",
    locale: "en_US",
    url: "https://rajdeep.officialework.com",
    siteName: "Rajdeep Sah Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 900,
        alt: "Rajdeep Sah - AI/ML Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajdeep Sah - AI/ML Engineer | Researcher | Developer",
    description:
      "AI/ML Engineer, AI Researcher, Mathematical Researcher, Developer, and Manager.",
    images: ["/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://rajdeep.officialework.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300`}
        suppressHydrationWarning
      >
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}

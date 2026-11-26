import type { Metadata } from "next";
import Hero from "@/components/Hero";
import HomeHighlights from "@/components/HomeHighlights";
import JsonLd from "@/components/JsonLd";
import { profilePageSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: siteConfig.url },
};

export default function Home() {
  return (
    <>
      <JsonLd data={profilePageSchema("/")} />
      <Hero />
      <HomeHighlights />
    </>
  );
}

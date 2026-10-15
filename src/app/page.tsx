import type { Metadata } from "next";
import Hero from "@/components/Hero";
import HomeHighlights from "@/components/HomeHighlights";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: siteConfig.url },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  image: `${siteConfig.url}/profile.jpg`,
  jobTitle: siteConfig.role,
  description: siteConfig.description,
  email: `mailto:${siteConfig.email}`,
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Washburn University",
    sameAs: "https://www.washburn.edu",
  },
  sameAs: [
    siteConfig.socials.github,
    siteConfig.socials.linkedin,
    siteConfig.socials.x,
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Generative AI",
    "Web Development",
    "Game Development",
    "Database Systems",
    "Mathematics",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${siteConfig.name} Portfolio`,
  url: siteConfig.url,
  description: siteConfig.description,
  author: {
    "@type": "Person",
    name: siteConfig.name,
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Hero />
      <HomeHighlights />
    </>
  );
}

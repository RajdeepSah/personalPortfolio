import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "https://rajdeep.officialework.com" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rajdeep Sah",
  url: "https://rajdeep.officialework.com",
  image: "https://rajdeep.officialework.com/profile.jpg",
  jobTitle: "AI/ML Engineer",
  description:
    "AI/ML Engineer, AI Researcher, Mathematical Researcher, Developer, and Manager.",
  sameAs: [
    "https://github.com/rajdeepsah",
    "https://linkedin.com/in/rajdeepsah",
    "https://twitter.com/rajdeepsah",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Web Development",
    "Game Development",
    "Software Development",
    "Database Systems",
    "Mathematics",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Rajdeep Sah Portfolio",
  url: "https://rajdeep.officialework.com",
  description:
    "Portfolio of Rajdeep Sah — AI/ML Engineer, Researcher, and Developer.",
  author: {
    "@type": "Person",
    name: "Rajdeep Sah",
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
      <div>
        <Hero />
        <Footer />
      </div>
    </>
  );
}

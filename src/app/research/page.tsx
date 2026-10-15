import type { Metadata } from "next";
import Research from "@/components/Research";
import { publications } from "@/content/research";
import { siteConfig } from "@/lib/site";

const articleSchemas = publications.map((publication) => ({
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  headline: publication.title,
  name: publication.title,
  author: publication.authors.split(",").map((name) => ({
    "@type": "Person",
    name: name.trim(),
  })),
  datePublished: publication.year,
  publisher: { "@type": "Organization", name: publication.venue },
  keywords: publication.keywords.join(", "),
  abstract: publication.description,
  sameAs: `https://doi.org/${publication.doi}`,
  url: publication.link,
  isPartOf: { "@type": "WebSite", url: siteConfig.url },
}));

export const metadata: Metadata = {
  title: "Research",
  description:
    "Rajdeep Sah's academic and AI research work, including publications, generative AI studies, and mathematical research.",
  alternates: { canonical: "https://rajdeep.officialework.com/research" },
};

export default function Page() {
  return (
    <div className="pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchemas) }}
      />
      <Research />
    </div>
  );
}

import type { Metadata } from "next";
import Research from "@/components/Research";
import { publications } from "@/content/research";
import { siteConfig } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, pageMetadata, schemaIds } from "@/lib/seo";

const articleSchemas = publications.map((publication) => ({
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  headline: publication.title,
  name: publication.title,
  author: publication.authors.split(",").map((name) =>
    name.trim() === siteConfig.name
      ? { "@id": schemaIds.person }
      : { "@type": "Person", name: name.trim() },
  ),
  datePublished: publication.year,
  publisher: { "@type": "Organization", name: publication.venue },
  keywords: publication.keywords.join(", "),
  abstract: publication.description,
  sameAs: `https://doi.org/${publication.doi}`,
  url: publication.link,
}));

export const metadata: Metadata = pageMetadata({
  title: "Research",
  description:
    "Rajdeep Sah's AI research, including the IACIS 2025 paper on generative AI in higher education: student and faculty perspectives on use, ethics, and impact.",
  path: "/research",
});

export default function Page() {
  return (
    <div className="pt-16">
      <JsonLd data={breadcrumbSchema("Research", "/research")} />
      <JsonLd data={articleSchemas} />
      <Research />
    </div>
  );
}

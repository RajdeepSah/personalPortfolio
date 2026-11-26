import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

/**
 * SEO helpers: page metadata and schema.org structured data (JSON-LD).
 * Google uses the Person / ProfilePage / WebSite entities below to connect
 * searches for the name to this site, its profile photo and social profiles.
 */

const url = siteConfig.url;

/** Stable @id values so entities on different pages refer to each other. */
export const schemaIds = {
  person: `${url}/#person`,
  website: `${url}/#website`,
  image: `${url}/#profile-image`,
};

export const profileImage = {
  url: `${url}/profile.jpg`,
  width: 5568,
  height: 3712,
  alt: "Rajdeep Sah, Computer Information Science student and AI/ML researcher",
};

/** The 1200x630 social card at src/app/opengraph-image.jpg. */
const shareImage = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "Rajdeep Sah, Computer Information Science Student and AI/ML Researcher at Washburn University",
};

export const keywords = [
  "Rajdeep Sah",
  "Rajdeep Shah",
  "Rajdeep Sah portfolio",
  "Rajdeep Sah Washburn University",
  "Computer Information Science student",
  "AI/ML researcher",
  "Machine learning",
  "Generative AI research",
  "Software developer",
  "Full-stack developer",
  "Quality engineering",
  "QA automation",
  "Next.js developer",
  "React developer",
  "Python developer",
  "Game developer",
  "Mathematics",
  "Topeka Kansas developer",
  "IACIS 2025",
];

const sameAs = Object.values(siteConfig.socials);

export const personSchema = {
  "@type": "Person",
  "@id": schemaIds.person,
  name: siteConfig.name,
  givenName: "Rajdeep",
  familyName: "Sah",
  alternateName: "Rajdeep Shah",
  url,
  image: {
    "@type": "ImageObject",
    "@id": schemaIds.image,
    url: profileImage.url,
    contentUrl: profileImage.url,
    width: profileImage.width,
    height: profileImage.height,
    caption: siteConfig.name,
  },
  jobTitle: siteConfig.role,
  description: siteConfig.description,
  email: `mailto:${siteConfig.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Topeka",
    addressRegion: "KS",
    addressCountry: "US",
  },
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "Washburn University",
    sameAs: "https://www.washburn.edu",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Washburn University",
      sameAs: "https://www.washburn.edu",
    },
    {
      "@type": "EducationalOrganization",
      name: "Liverpool International College",
    },
  ],
  worksFor: {
    "@type": "Organization",
    name: "Nyalia Software Solutions",
  },
  hasOccupation: [
    {
      "@type": "Occupation",
      name: "Software Developer & AI Research Intern",
    },
    { "@type": "Occupation", name: "Quality Engineering Intern" },
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Generative AI",
    "Large Language Models",
    "Natural Language Processing",
    "Computer Vision",
    "QA Automation",
    "Software Engineering",
    "Web Development",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "Java",
    "SQL",
    "Database Systems",
    "Game Development",
    "Cybersecurity",
    "Mathematics",
  ],
  sameAs,
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": schemaIds.website,
  name: siteConfig.name,
  alternateName: [`${siteConfig.name} Portfolio`, "Rajdeep Sah"],
  url,
  description: siteConfig.description,
  inLanguage: "en-US",
  publisher: { "@id": schemaIds.person },
  author: { "@id": schemaIds.person },
};

/** Site-wide graph: the person and the website, rendered on every page. */
export const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [personSchema, websiteSchema],
};

/** ProfilePage markup: tells Google the page is about the person. */
export const profilePageSchema = (path = "/") => ({
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${url}${path === "/" ? "" : path}#profilepage`,
  url: `${url}${path === "/" ? "" : path}`,
  name: `${siteConfig.name} · ${siteConfig.role}`,
  isPartOf: { "@id": schemaIds.website },
  mainEntity: { "@id": schemaIds.person },
  about: { "@id": schemaIds.person },
  primaryImageOfPage: { "@id": schemaIds.image },
  inLanguage: "en-US",
});

export const breadcrumbSchema = (name: string, path: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: url },
    { "@type": "ListItem", position: 2, name, item: `${url}${path}` },
  ],
});

/**
 * Metadata for an inner page. Repeats Open Graph fields and the share image
 * because Next replaces (not merges) the root `openGraph`/`twitter` objects,
 * including the file-based image, when a page defines its own.
 */
export const pageMetadata = ({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata => {
  const pageUrl = `${url}${path}`;
  const fullTitle = `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: fullTitle,
      description,
      url: pageUrl,
      siteName: siteConfig.name,
      type: "profile",
      firstName: "Rajdeep",
      lastName: "Sah",
      locale: "en_US",
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: "@RajdeepShah_",
      images: [shareImage],
    },
  };
};

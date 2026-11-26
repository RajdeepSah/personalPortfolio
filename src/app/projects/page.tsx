import type { Metadata } from "next";
import Projects from "@/components/Projects";
import JsonLd from "@/components/JsonLd";
import { projects } from "@/content/projects";
import { breadcrumbSchema, pageMetadata, schemaIds } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const projectsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `Projects by ${siteConfig.name}`,
  url: `${siteConfig.url}/projects`,
  itemListElement: projects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "SoftwareSourceCode",
      name: project.title,
      description: project.description,
      codeRepository: project.github,
      ...(project.demo.startsWith("http") ? { url: project.demo } : {}),
      programmingLanguage: project.techStack,
      creativeWorkStatus: project.status,
      creator: { "@id": schemaIds.person },
    },
  })),
};

export const metadata: Metadata = pageMetadata({
  title: "Projects",
  description:
    "Software projects by Rajdeep Sah: AI systems, a Kalshi trading bot, 3D web games like Dragon Groove, database tools, and full-stack web apps built with Next.js, React, Python, and Java.",
  path: "/projects",
});

export default function Page() {
  return (
    <div className="pt-16">
      <JsonLd data={breadcrumbSchema("Projects", "/projects")} />
      <JsonLd data={projectsSchema} />
      <Projects />
    </div>
  );
}

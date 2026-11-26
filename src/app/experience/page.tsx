import type { Metadata } from "next";
import Experience from "@/components/Experience";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Experience",
  description:
    "Rajdeep Sah's experience: Quality Engineering Intern at FireMon, Software Developer & AI Research Intern at Nyalia Software Solutions, plus internships, tutoring, and campus roles.",
  path: "/experience",
});

export default function Page() {
  return (
    <div className="pt-16">
      <JsonLd data={breadcrumbSchema("Experience", "/experience")} />
      <Experience />
    </div>
  );
}

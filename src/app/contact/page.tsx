import type { Metadata } from "next";
import Contact from "@/components/Contact";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact Rajdeep Sah for software engineering, AI/ML research, QA automation, and internship or collaboration opportunities.",
  path: "/contact",
});

export default function Page() {
  return (
    <div className="pt-16">
      <JsonLd data={breadcrumbSchema("Contact", "/contact")} />
      <Contact />
    </div>
  );
}

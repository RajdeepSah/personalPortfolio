import type { Metadata } from "next";
import About from "@/components/About";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, pageMetadata, profilePageSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "About Rajdeep Sah: Computer Information Science student at Washburn University with a Mathematics minor and Cybersecurity Certificate, AI/ML researcher, and software developer.",
  path: "/about",
});

export default function Page() {
  return (
    <div className="pt-16">
      <JsonLd data={breadcrumbSchema("About", "/about")} />
      <JsonLd data={profilePageSchema("/about")} />
      <About />
    </div>
  );
}

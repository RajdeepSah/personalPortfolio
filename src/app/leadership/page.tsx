import type { Metadata } from "next";
import Leadership from "@/components/Leadership";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Leadership",
  description:
    "Rajdeep Sah's leadership: President of Club Mathematica and ByteBods, Hack Midwest hackathon, research symposium presenter, and tech community involvement.",
  path: "/leadership",
});

export default function Page() {
  return (
    <div className="pt-16">
      <JsonLd data={breadcrumbSchema("Leadership", "/leadership")} />
      <Leadership />
    </div>
  );
}

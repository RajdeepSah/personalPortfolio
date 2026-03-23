import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Rajdeep Sah — reach out for collaboration, research opportunities, or software development inquiries.",
  alternates: { canonical: "https://rajdeep.officialework.com/contact" },
};

export default function Page() {
  return (
    <div className="pt-16">
      <Contact />
    </div>
  );
}

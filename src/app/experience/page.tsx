import type { Metadata } from "next";
import Experience from "@/components/Experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Rajdeep Sah's professional work experience in software development, AI research, and technical roles.",
  alternates: { canonical: "https://rajdeep.officialework.com/experience" },
};

export default function Page() {
  return (
    <div className="pt-16">
      <Experience />
    </div>
  );
}

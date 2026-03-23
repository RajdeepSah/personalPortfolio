import type { Metadata } from "next";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Rajdeep Sah's portfolio of software and game development projects — including AI systems, 3D games, database tools, and web applications.",
  alternates: { canonical: "https://rajdeep.officialework.com/projects" },
};

export default function Page() {
  return (
    <div className="pt-16">
      <Projects />
    </div>
  );
}

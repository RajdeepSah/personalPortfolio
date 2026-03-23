import type { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Rajdeep Sah — a Computer Science and Mathematics student, AI/ML researcher, software developer, and entrepreneur dedicated to solving complex problems through innovative technology.",
  alternates: { canonical: "https://rajdeep.officialework.com/about" },
};

export default function Page() {
  return (
    <div className="pt-16">
      <About />
    </div>
  );
}

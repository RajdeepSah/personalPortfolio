import type { Metadata } from "next";
import Research from "@/components/Research";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Rajdeep Sah's academic and AI research work, including publications, generative AI studies, and mathematical research.",
  alternates: { canonical: "https://rajdeep.officialework.com/research" },
};

export default function Page() {
  return (
    <div className="pt-16">
      <Research />
    </div>
  );
}

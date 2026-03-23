import type { Metadata } from "next";
import Leadership from "@/components/Leadership";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Rajdeep Sah's leadership roles including club president and organizational positions, demonstrating management and team-building skills.",
  alternates: { canonical: "https://rajdeep.officialework.com/leadership" },
};

export default function Page() {
  return (
    <div className="pt-16">
      <Leadership />
    </div>
  );
}

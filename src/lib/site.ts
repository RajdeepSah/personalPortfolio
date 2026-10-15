/**
 * Single source of truth for identity, contact details and profile links.
 * Import from here instead of hardcoding URLs or emails in components.
 */
export const siteConfig = {
  name: "Rajdeep Sah",
  role: "Computer Information Science Student & AI/ML Researcher",
  description:
    "Rajdeep Sah is a Computer Information Science student at Washburn University with a Mathematics minor, an AI/ML researcher published at IACIS 2025, and a developer building data-driven software.",
  url: "https://rajdeep.officialework.com",
  resume: "/resume.pdf",
  email: "rajdeepofficialework@gmail.com",
  universityEmail: "Rajdeep.sah@washburn.edu",
  phone: {
    display: "+1 (785) 730-1643",
    href: "tel:+17857301643",
  },
  location: "Topeka, Kansas, USA",
  socials: {
    github: "https://github.com/RajdeepSah",
    linkedin: "https://www.linkedin.com/in/rajdeepsah/",
    x: "https://x.com/RajdeepShah_",
    facebook: "https://www.facebook.com/rajdeeptherd",
    instagram: "https://www.instagram.com/rajdeepshah_/",
  },
} as const;

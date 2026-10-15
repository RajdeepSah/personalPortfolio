import {
  Code2,
  Crown,
  Mic,
  Sigma,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react";

export type LeadershipRole = {
  title: string;
  org: string;
  location: string;
  period: string;
  icon: LucideIcon;
  highlights: string[];
};

/** Newest first. */
export const leadershipRoles: LeadershipRole[] = [
  {
    title: "President, Club Mathematica",
    org: "Mathematics and Statistics Department",
    location: "Washburn University",
    period: "2025 – 2026",
    icon: Crown,
    highlights: [
      "Directed club operations and fostered student research through math workshops, faculty-led talks, and academic conference participation.",
    ],
  },
  {
    title: "Hack Midwest Hackathon",
    org: "Hack Midwest",
    location: "Kansas City, MO",
    period: "Oct 2025",
    icon: Code2,
    highlights: [
      "Built Listify AI, a campus marketplace for buying and selling new or second-hand items",
      "Developed with MongoDB, AWS, React, Python, stablecoin integration, and the Brale API",
      "Competed head-to-head with professional developers and graduate student teams",
    ],
  },
  {
    title: "Member, Shawnee County Tech Guild",
    org: "Shawnee County Tech Guild",
    location: "Kansas, USA",
    period: "2025 – Present",
    icon: Users,
    highlights: [
      "Won the solo tech trivia competition",
      "Contributed to community outreach through idea presentations and active collaboration",
    ],
  },
  {
    title: "Presenter, Apeiron Research Symposium",
    org: "Computer Information Science Department, Washburn University",
    location: "Topeka, KS",
    period: "May 2025",
    icon: Mic,
    highlights: [
      "Presented research on the impact of generative AI in higher education at Washburn University's annual symposium.",
    ],
  },
  {
    title: "Programming Competition",
    org: "CCSC Central Plains",
    location: "Central Plains Region, USA",
    period: "Apr 2025",
    icon: Trophy,
    highlights: [
      "Placed top 4 of 21 teams at the 31st Annual CCSC Central Plains Conference",
    ],
  },
  {
    title: "President, ByteBods",
    org: "Computer Science Club",
    location: "Washburn University",
    period: "2024 – 2025",
    icon: Crown,
    highlights: [
      "Led hackathons, coding competitions, industry speaker events, and professional development workshops.",
    ],
  },
  {
    title: "Sports Event Coordinator",
    org: "Ichabod Cricket Club (ICC)",
    location: "Topeka, KS",
    period: "Oct 2024",
    icon: Users,
    highlights: [
      "Organized a multi-university cricket tournament, overseeing logistics, scheduling, sponsorship, and promotion.",
    ],
  },
  {
    title: "Mathematics Competition",
    org: "Kansas Section of the Mathematical Association of America (KSMAA)",
    location: "Washburn University",
    period: "Mar 2024",
    icon: Sigma,
    highlights: [
      "Represented Washburn University at the KSMAA Mathematics Competition",
    ],
  },
];

import { Award, BookOpen, Microscope, type LucideIcon } from "lucide-react";

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  type: string;
  status: "Published" | "Under Review";
  description: string;
  keywords: string[];
  doi: string;
  link: string;
};

export const publications: Publication[] = [
  {
    title:
      "Generative AI in higher education: student and faculty perspectives on use, ethics, and impact",
    authors:
      "Rajdeep Sah, Dr. Sun, Cameron Hagemaster, Arpan Adhikari, Ari Lee",
    venue:
      "International Association for Computer Information Systems (IACIS) Conference",
    year: "2025",
    type: "Conference Paper",
    status: "Published",
    description:
      "This study examines how generative AI is affecting college students and faculty, using survey data from 114 students and interviews with 18 professors to compare perceptions, usage patterns, and concerns. Students view AI as a helpful academic tool, especially for managing workload, while faculty remain more cautious, highlighting ethical issues and the need for clearer institutional guidelines.",
    keywords: [
      "Generative AI",
      "Student perception",
      "Faculty perspective",
      "Higher education",
      "Ethical AI use",
      "AI policy",
    ],
    doi: "10.48009/2_iis_129",
    link: "https://iacis.org/conference/openconf2025/modules/request.php?module=oc_program&action=summary.php&id=110",
  },
];

export type ResearchArea = {
  title: string;
  icon: LucideIcon;
  description: string;
  focus: string[];
};

export const researchAreas: ResearchArea[] = [
  {
    title: "Artificial Intelligence & Machine Learning",
    icon: Microscope,
    description:
      "Advanced AI algorithms, deep learning architectures, and machine learning optimization.",
    focus: [
      "Neural Networks",
      "Deep Learning",
      "Computer Vision",
      "Natural Language Processing",
    ],
  },
  {
    title: "Mathematical Research",
    icon: BookOpen,
    description:
      "Mathematical modeling, optimization theory, and statistical analysis for real-world problems.",
    focus: [
      "Mathematical Modeling",
      "Optimization Theory",
      "Statistical Analysis",
      "Applied Mathematics",
    ],
  },
  {
    title: "Educational Technology",
    icon: Award,
    description:
      "The intersection of technology and education, focusing on AI-driven learning.",
    focus: [
      "Educational AI",
      "Learning Analytics",
      "Adaptive Learning",
      "Digital Pedagogy",
    ],
  },
];

export const upcomingResearch = [
  {
    title: "Turtle Temperature Data Mining & Environmental Modeling",
    status: "In Progress",
    expectedCompletion: "2027",
    description:
      "Analyzing long-term temperature sensor data from aquatic turtles to build predictive models of environmental patterns, habitat conditions, and climate-driven behavior, using data mining, statistical modeling, and machine learning on irregular time-series data.",
  },
  {
    title: "Blockchain-Ready Secure Voting System (BlockBallot)",
    status: "Planning",
    expectedCompletion: "2027",
    description:
      "A scalable, secure digital voting platform with a modular architecture ready for blockchain-based audit trails, focused on cryptographic security, verifiable logs, and user authentication for transparent, tamper-resistant elections.",
  },
];

export const featuredArticles = [
  {
    title: "Coding, Math & Cybersecurity: Rajdeep Sah's Unexpected Path",
    source: "Washburn Review",
    description:
      "Profile feature on my journey from Nepal to Washburn University and my passion for technology and mathematics.",
    link: "https://washburnreview.org/54229/features/profile/coding-math-cybersecurity-rajdeep-sahs-unexpected-path/",
  },
  {
    title: "Washburn CIS Students Present Research at National Conference",
    source: "Washburn Review",
    description:
      "Coverage of our research presentation at the national IACIS conference.",
    link: "https://washburnreview.org/56044/news/washburn-cis-students-present-research-at-national-conference/",
  },
];

export const researchStats = [
  { label: "Published paper", value: "1" },
  { label: "Research presentations", value: "2" },
  { label: "Research areas", value: "3" },
  { label: "Ongoing projects", value: "2" },
];

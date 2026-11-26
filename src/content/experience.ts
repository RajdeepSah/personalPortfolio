export type ExperienceType = "internship" | "teaching" | "campus";

export type Experience = {
  type: ExperienceType;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
  /** Headline roles get a full card; the rest render in a compact list. */
  highlight?: boolean;
};

export const experienceTypeLabels: Record<ExperienceType, string> = {
  internship: "Internship",
  teaching: "Teaching & Mentoring",
  campus: "Campus Role",
};

export const experiences: Experience[] = [
  {
    type: "internship",
    title: "Quality Engineering Intern",
    company: "FireMon",
    location: "Overland Park, KS",
    period: "May 2026 – Aug 2026",
    description:
      "Built an internal AI pilot that connects Jira Cloud to an LLM to automate QA ticket analysis and testing workflows, scoped from needs raised in an internal staff survey.",
    achievements: [
      "Built a Python tool linking the Jira Cloud REST API to an LLM API to automate QA ticket analysis",
      "Implemented three output modes and Atlassian Document Format (ADF) handling for Jira Cloud v3",
      "Designed a ticket-cleanup prompt that rewrites tickets into a structured Summary/Description format",
      "Researched agentic AI and regression-automation use cases for network security QA to build team buy-in",
    ],
    skills: [
      "Python",
      "Jira Cloud REST API",
      "LLM APIs",
      "Prompt Engineering",
      "QA Automation",
      "Agentic AI",
    ],
    highlight: true,
  },
  {
    type: "internship",
    title: "Software Developer & AI Research Intern",
    company: "Nyalia Software Solutions",
    location: "Remote",
    period: "Feb 2024 – Present",
    description:
      "Develop web, AI, and game features across the studio's products, working closely with the team to test, iterate, and ship.",
    achievements: [
      "Developed web and AI features for Dragon Groove, testing and refining them with the team",
      "Contributed to development of Kaiju the Big Monster, a mobile game",
      "Researched and prototyped AI features to bring into production products",
    ],
    skills: [
      "Web Development",
      "AI Integration",
      "Mobile Game Development",
      "Testing & QA",
      "Research",
      "Collaboration",
    ],
    highlight: true,
  },
  {
    type: "internship",
    title: "Community Management Intern",
    company: "Walgreens",
    location: "Topeka, KS",
    period: "May 2025 – May 2026",
    description:
      "Supported store operations and community wellness outreach, coordinating associates and improving scheduling and loss prevention.",
    achievements: [
      "Streamlined operations for 20+ associates",
      "Optimized scheduling, cutting labor costs by 10%",
      "Reduced shrink by 66%",
      "Delivered service across 250+ weekly customer interactions",
      "Boosted community engagement through wellness initiatives",
    ],
    skills: [
      "Strategic Planning",
      "Leadership & Teamwork",
      "Problem Solving",
      "Organization",
      "Detail-Oriented",
      "Adaptability",
    ],
    highlight: true,
  },
  {
    type: "internship",
    title: "NCD Research Intern",
    company: "Great Plains Annual Conference, UMC",
    location: "Topeka, KS",
    period: "May 2024 – Aug 2024",
    description:
      "New Church Development summer internship: analyzed development data to guide strategic planning and built the program's website.",
    achievements: [
      "Analyzed church development data in BrickRiver for strategic planning",
      "Built financial models and budget forecasts to optimize resources",
      "Developed the NCD website with content workflows and donation integration",
    ],
    skills: [
      "Research",
      "Data Analysis",
      "BrickRiver",
      "Web Development",
      "Academic Writing",
      "LaTeX",
    ],
    highlight: true,
  },
  {
    type: "teaching",
    title: "Computer Information Science Tutor",
    company: "Washburn University",
    location: "Topeka, KS",
    period: "Dec 2024 – Present",
    description:
      "Tutor students in programming (C, Java, Python), data structures, algorithms, operating systems, networking, cybersecurity, and databases, and guide them through CS projects from design to debugging.",
    achievements: [
      "Simplified complex CS concepts and supported students through programming, debugging, and project work",
    ],
    skills: [
      "C",
      "Java",
      "Python",
      "Data Structures",
      "Algorithms",
      "Operating Systems",
      "Networking",
      "Databases",
    ],
    highlight: true,
  },
  {
    type: "teaching",
    title: "Peer Educator",
    company: "Washburn University",
    location: "Topeka, KS",
    period: "Aug 2024 – Present",
    description:
      "Mentor students through academic support, peer counseling, and career workshops while working with faculty to improve student success.",
    achievements: [
      "Led academic workshops and mentored students to build confidence and engagement",
    ],
    skills: ["Mentoring", "Leadership", "Counseling", "Communication"],
  },
  {
    type: "teaching",
    title: "Mathematics & Statistics Tutor",
    company: "Washburn University",
    location: "Topeka, KS",
    period: "Sep 2023 – Aug 2026",
    description:
      "Tutored Statistics, Logic, Functions, Vectors, Trigonometry, Advanced Algebra, Calculus, and Real Analysis.",
    achievements: [
      "Improved student performance through clear explanations and guided practice",
    ],
    skills: [
      "Statistics",
      "Logic",
      "Trigonometry",
      "Advanced Algebra",
      "Calculus",
      "Real Analysis",
    ],
  },
  {
    type: "teaching",
    title: "Tutor & Mentor, Upper Bound (TRIO)",
    company: "Washburn University",
    location: "Topeka, KS",
    period: "Dec 2024 – May 2026",
    description:
      "Tutored high school students in math, science, and writing, and helped lead workshops on study skills, time management, financial aid, and college readiness.",
    achievements: [
      "Mentored students in study skills, goal-setting, and academic confidence",
    ],
    skills: ["Mentoring", "Leadership", "Counseling", "Communication"],
  },
  {
    type: "campus",
    title: "Student Ambassador",
    company: "Washburn University",
    location: "Topeka, KS",
    period: "May 2025 – May 2026",
    description:
      "Guided new and prospective students through campus tours, academic tools, and registration while connecting them to university resources.",
    achievements: [
      "Guided new students through campus tours, academic tools, and orientation",
    ],
    skills: ["Outreach", "Leadership", "Networking", "Communication"],
  },
  {
    type: "campus",
    title: "Content Story Writer",
    company: "Washburn University",
    location: "Topeka, KS",
    period: "Sep 2023 – Aug 2024",
    description:
      "Produced campus stories under tight deadlines, strengthening communication and storytelling skills.",
    achievements: [
      "Produced campus stories under strict deadlines with clear, engaging writing",
    ],
    skills: ["Writing", "Research", "Storytelling"],
  },
  {
    type: "campus",
    title: "Office Assistant",
    company: "Mathematics & Statistics Department, Washburn University",
    location: "Topeka, KS",
    period: "Nov 2023 – Dec 2024",
    description:
      "Provided administrative support, event coordination, and inventory management for the department.",
    achievements: [
      "Improved departmental operations by managing administrative tasks",
    ],
    skills: ["Administration", "Coordination", "Scheduling"],
  },
];

export const experienceStats = [
  { stat: "3+", label: "Years of experience" },
  { stat: "9", label: "Projects built" },
  { stat: "1", label: "Peer-reviewed publication" },
  { stat: "8", label: "Leadership roles & events" },
];

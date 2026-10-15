import {
  Banknote,
  Bot,
  Database,
  Dog,
  FileText,
  Grid3x3,
  MessagesSquare,
  Ship,
  Swords,
  type LucideIcon,
} from "lucide-react";

export type Project = {
  title: string;
  description: string;
  icon: LucideIcon;
  techStack: string[];
  features: string[];
  status: "Completed" | "In Progress";
  github: string;
  demo: string;
  /** Shown on the home page. */
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Dragon Groove",
    description:
      "A 3D fighting game prototype with physics-based combat, character actions, and interactive debug controls, built on a modern web 3D stack.",
    icon: Swords,
    techStack: ["Next.js", "React Three Fiber", "Rapier Physics", "TypeScript"],
    features: [
      "3D physics-based combat",
      "Character action system",
      "Real-time HP & debug UI",
      "Automated testing (Jest + Cypress)",
    ],
    status: "In Progress",
    github: "https://github.com/NyaliaLui/dg-proto",
    demo: "https://dg-proto.vercel.app/",
    featured: true,
  },
  {
    title: "Kalshi Trading Bot",
    description:
      "An automated trading bot for Kalshi prediction markets that analyzes market data and executes trades through the Kalshi API, with a web dashboard for monitoring.",
    icon: Bot,
    techStack: ["JavaScript", "Node.js", "Kalshi API", "REST API"],
    features: [
      "Automated trade execution",
      "Market data analysis",
      "Prediction market integration",
      "Web dashboard",
    ],
    status: "In Progress",
    github: "https://github.com/RajdeepSah/Kalshi_Bot",
    demo: "https://KalshiBot.officialework.com",
  },
  {
    title: "Model Mayhem",
    description:
      "A multi-AI chat arena where one prompt triggers three bots at once, producing real-time debates and unpredictable interactions between competing AI models.",
    icon: MessagesSquare,
    techStack: ["Next.js", "TypeScript", "AI APIs", "React"],
    features: [
      "Multi-model real-time chat",
      "One prompt, multiple responses",
      "AI-to-AI interaction engine",
      "Dynamic conversation flow",
    ],
    status: "Completed",
    github: "https://github.com/RajdeepSah/ProjectMayhem",
    demo: "#",
    featured: true,
  },
  {
    title: "Champions League DBMS",
    description:
      "A database management system for tracking Champions League statistics, player performance, and team analytics with advanced querying.",
    icon: Database,
    techStack: ["PostgreSQL", "Python", "Flask", "HTML/CSS"],
    features: [
      "Player statistics tracking",
      "Team performance analytics",
      "Advanced query interface",
      "Data visualization",
    ],
    status: "Completed",
    github: "https://github.com/RajdeepSah/dataBaseFinalProject",
    demo: "#",
  },
  {
    title: "RunMickyRun",
    description:
      "A 2D endless runner starring Micky the dog, with dynamic obstacles, scoring, and smooth Canvas-rendered gameplay.",
    icon: Dog,
    techStack: ["JavaScript", "Canvas API", "Web Audio API", "HTML/CSS"],
    features: [
      "Endless runner mechanics",
      "Dynamic obstacles",
      "Score system",
      "Responsive controls",
    ],
    status: "Completed",
    github: "https://github.com/RajdeepSah/RunMickyRunWeb",
    demo: "https://runmicky-web.vercel.app/",
    featured: true,
  },
  {
    title: "AI-Powered Tic-Tac-Toe",
    description:
      "Tic-Tac-Toe against an AI opponent driven by the minimax algorithm, with multiple difficulty levels.",
    icon: Grid3x3,
    techStack: ["Python", "Minimax", "Game AI"],
    features: [
      "AI opponent",
      "Multiple difficulty levels",
      "Game statistics",
      "Intuitive UI",
    ],
    status: "Completed",
    github: "https://github.com/rajdeepsah/ai-tic-tac-toe",
    demo: "#",
  },
  {
    title: "Battleship Game",
    description:
      "A strategic naval combat game with single-player and networked multiplayer modes and an AI opponent.",
    icon: Ship,
    techStack: ["Java", "Swing", "Networking", "Game AI"],
    features: [
      "Multiplayer support",
      "AI opponent",
      "Strategic gameplay",
      "Network communication",
    ],
    status: "Completed",
    github: "https://github.com/rajdeepsah/battleship-game",
    demo: "#",
  },
  {
    title: "Banking Application",
    description:
      "A banking application with user authentication, transaction management, and a financial analytics dashboard.",
    icon: Banknote,
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    features: [
      "User authentication",
      "Transaction management",
      "Financial analytics",
      "Secure API",
    ],
    status: "Completed",
    github: "https://github.com/rajdeepsah/banking-app",
    demo: "#",
  },
  {
    title: "Marks Evaluation System",
    description:
      "An automated grading system for schools with analytics, report generation, and student performance tracking.",
    icon: FileText,
    techStack: ["Python", "Django", "PostgreSQL", "Chart.js"],
    features: [
      "Automated grading",
      "Performance analytics",
      "Report generation",
      "Student dashboard",
    ],
    status: "Completed",
    github: "https://github.com/rajdeepsah/marks-evaluation",
    demo: "#",
  },
];

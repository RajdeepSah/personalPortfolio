'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, Gamepad2, Calculator, Ship, Banknote, FileText } from 'lucide-react';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const projects = [
    {
      title: "Champions League DBMS",
      description: "A comprehensive database management system for tracking Champions League statistics, player performance, and team analytics with advanced querying capabilities.",
      icon: Database,
      techStack: ["SQL", "Python", "MySQL", "Flask", "HTML/CSS"],
      features: ["Player Statistics Tracking", "Team Performance Analytics", "Advanced Query Interface", "Data Visualization"],
      status: "Completed",
      github: "https://github.com/rajdeepsah/champions-league-dbms",
      demo: "#"
    },
    {
      title: "RunMickyRun Game",
      description: "An engaging 2D endless runner game featuring Mickey Mouse with dynamic obstacles, scoring system, and smooth gameplay mechanics.",
      icon: Gamepad2,
      techStack: ["JavaScript", "HTML5 Canvas", "CSS3", "Game Development"],
      features: ["Endless Runner Mechanics", "Dynamic Obstacles", "Score System", "Responsive Controls"],
      status: "Completed",
      github: "https://github.com/rajdeepsah/runmickyrun",
      demo: "#"
    },
    {
      title: "AI-Powered Tic-Tac-Toe",
      description: "An intelligent Tic-Tac-Toe game with AI opponent using minimax algorithm, featuring different difficulty levels and beautiful UI.",
      icon: Calculator,
      techStack: ["Python", "Tkinter", "AI Algorithms", "Minimax"],
      features: ["AI Opponent", "Multiple Difficulty Levels", "Game Statistics", "Intuitive UI"],
      status: "Completed",
      github: "https://github.com/rajdeepsah/ai-tic-tac-toe",
      demo: "#"
    },
    {
      title: "Battleship Game",
      description: "A strategic naval combat game with both single-player and multiplayer modes, featuring advanced AI and network capabilities.",
      icon: Ship,
      techStack: ["Java", "Swing", "Networking", "AI"],
      features: ["Multiplayer Support", "AI Opponent", "Strategic Gameplay", "Network Communication"],
      status: "Completed",
      github: "https://github.com/rajdeepsah/battleship-game",
      demo: "#"
    },
    {
      title: "Banking Application",
      description: "A secure banking application with user authentication, transaction management, and financial analytics dashboard.",
      icon: Banknote,
      techStack: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      features: ["User Authentication", "Transaction Management", "Financial Analytics", "Secure API"],
      status: "Completed",
      github: "https://github.com/rajdeepsah/banking-app",
      demo: "#"
    },
    {
      title: "Marks Evaluation System",
      description: "An automated grading system for educational institutions with analytics, report generation, and student performance tracking.",
      icon: FileText,
      techStack: ["Python", "Django", "PostgreSQL", "Chart.js"],
      features: ["Automated Grading", "Performance Analytics", "Report Generation", "Student Dashboard"],
      status: "Completed",
      github: "https://github.com/rajdeepsah/marks-evaluation",
      demo: "#"
    }
  ];

  return (
    <section className="py-20 bg-app">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              A collection of my technical projects showcasing expertise in AI/ML, web development, 
              game development, and database management systems.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group card-premium p-6"
                >
                  {/* Project Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 icon-chip rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
                      <Icon className="w-6 h-6 text-[var(--accent)]" />
                    </div>
                    <span className={`badge-premium text-xs ${
                      project.status === 'Completed' 
                        ? 'badge-success'
                        : 'badge-warning'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-[var(--accent)] transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-secondary mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-secondary mb-2">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-xs text-muted flex items-start">
                          <span className="w-1 h-1 bg-[var(--accent-muted)] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-secondary mb-2">
                      Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-surface-muted text-secondary rounded text-xs font-medium border border-soft"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center px-4 py-2 btn-outline-premium text-sm font-medium gap-2"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center px-4 py-2 btn-premium text-sm font-medium gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </motion.a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.a
              href="https://github.com/rajdeepsah"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 btn-premium font-medium gap-2"
            >
              <Github size={20} />
              View All Projects on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

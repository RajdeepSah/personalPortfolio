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

  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easeOutCubic
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
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
                  className="group bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  {/* Project Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-xs text-gray-500 dark:text-gray-400 flex items-start">
                          <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
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
                      className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 text-sm font-medium"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
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
              className="inline-flex items-center px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Github className="mr-2" size={20} />
              View All Projects on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

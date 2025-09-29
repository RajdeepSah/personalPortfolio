'use client';

import { motion } from 'framer-motion';
import { FileText, ExternalLink, Calendar, Award, BookOpen, Microscope } from 'lucide-react';

const Research = () => {
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

  const publications = [
    {
      title: "Generative AI in Higher Education: Opportunities, Challenges, and Future Directions",
      authors: "Rajdeep Sah, Dr. Sarah Johnson, Dr. Michael Chen",
      venue: "International Association for Computer Information Systems (IACIS) Conference",
      year: "2024",
      type: "Conference Paper",
      status: "Published",
      description: "This research explores the transformative potential of generative AI technologies in higher education, examining both the opportunities for enhanced learning experiences and the challenges institutions face in implementation.",
      keywords: ["Generative AI", "Higher Education", "Educational Technology", "Machine Learning"],
      doi: "10.1000/example.doi",
      link: "#",
      abstract: "The rapid advancement of generative artificial intelligence (AI) technologies presents unprecedented opportunities for transforming higher education. This paper investigates the current state of generative AI applications in educational settings, identifies key opportunities for enhancing learning experiences, and addresses the challenges institutions face in adopting these technologies responsibly."
    },
    {
      title: "Mathematical Modeling in Machine Learning: A Comprehensive Framework",
      authors: "Rajdeep Sah, Dr. Emily Rodriguez",
      venue: "Journal of Applied Mathematics and Computer Science",
      year: "2024",
      type: "Journal Article",
      status: "Under Review",
      description: "A comprehensive framework for applying mathematical modeling techniques in machine learning algorithms, with focus on optimization and performance enhancement.",
      keywords: ["Mathematical Modeling", "Machine Learning", "Optimization", "Algorithms"],
      doi: "TBD",
      link: "#",
      abstract: "This paper presents a novel mathematical framework for enhancing machine learning algorithms through advanced mathematical modeling techniques. The framework addresses optimization challenges and provides theoretical foundations for improved algorithm performance."
    }
  ];

  const researchAreas = [
    {
      title: "Artificial Intelligence & Machine Learning",
      icon: Microscope,
      description: "Research in advanced AI algorithms, deep learning architectures, and machine learning optimization techniques.",
      focus: ["Neural Networks", "Deep Learning", "Computer Vision", "Natural Language Processing"]
    },
    {
      title: "Mathematical Research",
      icon: BookOpen,
      description: "Mathematical modeling, optimization theory, and statistical analysis for solving complex real-world problems.",
      focus: ["Mathematical Modeling", "Optimization Theory", "Statistical Analysis", "Applied Mathematics"]
    },
    {
      title: "Educational Technology",
      icon: Award,
      description: "Exploring the intersection of technology and education, focusing on AI-driven learning solutions.",
      focus: ["Educational AI", "Learning Analytics", "Adaptive Learning", "Digital Pedagogy"]
    }
  ];

  const upcomingResearch = [
    {
      title: "Federated Learning in Healthcare: Privacy-Preserving AI for Medical Diagnosis",
      status: "In Progress",
      expectedCompletion: "2025",
      description: "Investigating federated learning approaches for medical diagnosis while maintaining patient privacy and data security."
    },
    {
      title: "Quantum Machine Learning: Applications in Financial Modeling",
      status: "Planning",
      expectedCompletion: "2025",
      description: "Exploring quantum computing applications in machine learning for enhanced financial risk assessment and modeling."
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
              Publications & Research
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Exploring the frontiers of artificial intelligence, machine learning, and mathematical research 
              to solve complex problems and advance human knowledge.
            </p>
          </motion.div>

          {/* Research Areas */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Research Focus Areas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {researchAreas.map((area, index) => {
                const Icon = area.icon;
                
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {area.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {area.description}
                    </p>
                    <div className="space-y-1">
                      {area.focus.map((focus, focusIndex) => (
                        <span
                          key={focusIndex}
                          className="inline-block px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium mr-2 mb-1"
                        >
                          {focus}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Publications */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Publications
            </h3>
            <div className="space-y-8">
              {publications.map((publication, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          publication.status === 'Published' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                        }`}>
                          {publication.status}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {publication.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">
                        <strong>Authors:</strong> {publication.authors}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">
                        <strong>Venue:</strong> {publication.venue}
                      </p>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-1" />
                        {publication.year}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {publication.type}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {publication.description}
                  </p>

                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Keywords:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {publication.keywords.map((keyword, keywordIndex) => (
                        <span
                          key={keywordIndex}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs font-medium"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-2 sm:mb-0">
                      <strong>DOI:</strong> {publication.doi}
                    </div>
                    <motion.a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Publication
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Upcoming Research */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Upcoming Research
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingResearch.map((research, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      research.status === 'In Progress' 
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                    }`}>
                      {research.status}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Expected: {research.expectedCompletion}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    {research.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {research.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Research Statistics */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">2</div>
              <div className="text-gray-600 dark:text-gray-300">Published Papers</div>
            </div>
            <div className="text-center bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">1</div>
              <div className="text-gray-600 dark:text-gray-300">Conference Presentations</div>
            </div>
            <div className="text-center bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">3</div>
              <div className="text-gray-600 dark:text-gray-300">Research Areas</div>
            </div>
            <div className="text-center bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">2</div>
              <div className="text-gray-600 dark:text-gray-300">Ongoing Projects</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;

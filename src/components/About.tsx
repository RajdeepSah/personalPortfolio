'use client';

import { motion } from 'framer-motion';
import { Download, GraduationCap, Briefcase, Award } from 'lucide-react';

const About = () => {
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

  const timelineData = [
    {
      type: 'education',
      icon: GraduationCap,
      title: 'Master of Science in Computer Science',
      institution: 'Washburn University',
      period: '2023 - 2025',
      description: 'Specializing in Artificial Intelligence and Machine Learning',
      details: [
        'Advanced Machine Learning Algorithms',
        'Deep Learning and Neural Networks',
        'Computer Vision and Natural Language Processing',
        'Research in Generative AI Applications'
      ]
    },
    {
      type: 'education',
      icon: GraduationCap,
      title: 'Bachelor of Science in Mathematics',
      institution: 'Previous University',
      period: '2019 - 2023',
      description: 'Strong foundation in mathematical theory and applications',
      details: [
        'Advanced Calculus and Linear Algebra',
        'Statistics and Probability Theory',
        'Mathematical Modeling',
        'Research in Mathematical Applications'
      ]
    },
    {
      type: 'experience',
      icon: Briefcase,
      title: 'AI/ML Engineer',
      company: 'Current Position',
      period: '2024 - Present',
      description: 'Developing cutting-edge AI solutions and machine learning models',
      details: [
        'Design and implement ML algorithms',
        'Research and development in AI technologies',
        'Team leadership and project management',
        'Cross-functional collaboration'
      ]
    },
    {
      type: 'experience',
      icon: Briefcase,
      title: 'Research Assistant',
      company: 'Washburn University',
      period: '2023 - 2024',
      description: 'Conducted research in Generative AI applications in higher education',
      details: [
        'Published research paper on Generative AI',
        'Presented at IACIS conference',
        'Collaborated with faculty on research projects',
        'Mentored undergraduate students'
      ]
    },
    {
      type: 'certification',
      icon: Award,
      title: 'Professional Certifications',
      company: 'Various Institutions',
      period: '2022 - 2024',
      description: 'Continuous learning and professional development',
      details: [
        'AWS Machine Learning Specialty',
        'Google Cloud AI/ML Professional',
        'Microsoft Azure AI Engineer',
        'Deep Learning Specialization (Coursera)'
      ]
    }
  ];

  return (
    <section className="py-20 bg-app">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              About Me
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              A passionate AI/ML Engineer and researcher with a strong foundation in mathematics 
              and computer science, dedicated to solving complex problems through innovative technology.
            </p>
          </motion.div>

          {/* Download Resume Button */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 btn-premium font-medium"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Timeline */}
          <motion.div variants={itemVariants} className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[var(--accent-muted)] transform md:-translate-x-0.5"></div>

            <div className="space-y-12">
              {timelineData.map((item, index) => {
                const Icon = item.icon;
                const isLeft = index % 2 === 0;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className={`relative flex items-center ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline Icon */}
                    <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10">
                      <div className="icon-ring">
                        <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-[var(--accent)]">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className={`ml-16 md:ml-0 md:w-1/2 ${
                      isLeft ? 'md:pr-8' : 'md:pl-8'
                    }`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="card-premium p-6"
                      >
                        <div className="flex items-center mb-2">
                          <div className={`w-3 h-3 rounded-full mr-3 ${
                            item.type === 'education'
                              ? 'bg-[var(--accent-strong)]'
                              : item.type === 'experience'
                              ? 'bg-[var(--accent)]'
                              : 'bg-amber-400'
                          }`}></div>
                          <span className="text-sm font-medium text-muted">
                            {item.period}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-primary mb-1">
                          {item.title}
                        </h3>
                        
                        <p className="text-lg font-semibold text-[var(--accent)] mb-2">
                          {item.institution || item.company}
                        </p>
                        
                        <p className="text-secondary mb-4">
                          {item.description}
                        </p>
                        
                        <ul className="space-y-1">
                          {item.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="text-sm text-muted flex items-start">
                              <span className="w-1.5 h-1.5 bg-[var(--accent-muted)] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Skills Summary */}
          <motion.div variants={itemVariants} className="card-premium p-8">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              Core Competencies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-[var(--accent)] mb-3">
                  AI/ML & Research
                </h4>
                <ul className="text-sm text-secondary space-y-1">
                  <li>Machine Learning Algorithms</li>
                  <li>Deep Learning & Neural Networks</li>
                  <li>Computer Vision</li>
                  <li>Natural Language Processing</li>
                  <li>Generative AI Research</li>
                </ul>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-[var(--accent-strong)] mb-3">
                  Development
                </h4>
                <ul className="text-sm text-secondary space-y-1">
                  <li>Python, R, JavaScript</li>
                  <li>TensorFlow, PyTorch</li>
                  <li>React, Next.js</li>
                  <li>Cloud Platforms (AWS, GCP)</li>
                  <li>Database Management</li>
                </ul>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-[var(--accent)] mb-3">
                  Leadership & Management
                </h4>
                <ul className="text-sm text-secondary space-y-1">
                  <li>Team Leadership</li>
                  <li>Project Management</li>
                  <li>Research Collaboration</li>
                  <li>Mentoring & Training</li>
                  <li>Cross-functional Communication</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

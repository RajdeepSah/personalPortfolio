'use client';

import { motion } from 'framer-motion';
import { Briefcase, Users, Trophy, Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
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

  const experiences = [
    {
      type: 'professional',
      title: 'AI/ML Engineer',
      company: 'Current Position',
      location: 'Remote',
      period: '2024 - Present',
      description: 'Leading AI/ML initiatives and developing cutting-edge machine learning solutions for various industries.',
      achievements: [
        'Developed and deployed ML models with 95%+ accuracy',
        'Led cross-functional teams of 5+ engineers',
        'Implemented AI solutions reducing operational costs by 30%',
        'Mentored junior developers and data scientists'
      ],
      skills: ['Python', 'TensorFlow', 'PyTorch', 'AWS', 'Docker', 'Kubernetes']
    },
    {
      type: 'internship',
      title: 'Research Assistant',
      company: 'Washburn University',
      location: 'Topeka, KS',
      period: '2023 - 2024',
      description: 'Conducted research in Generative AI applications in higher education and contributed to academic publications.',
      achievements: [
        'Published research paper on Generative AI in Higher Education',
        'Presented findings at IACIS conference',
        'Collaborated with faculty on multiple research projects',
        'Mentored undergraduate students in AI/ML concepts'
      ],
      skills: ['Research', 'Academic Writing', 'Data Analysis', 'Python', 'R', 'LaTeX']
    },
    {
      type: 'leadership',
      title: 'Event Organizer & Hackathon Coordinator',
      company: 'University Tech Events',
      location: 'Campus',
      period: '2022 - 2024',
      description: 'Organized and coordinated multiple technology events, hackathons, and workshops for the university community.',
      achievements: [
        'Organized 10+ successful hackathons with 200+ participants',
        'Coordinated tech workshops and seminars',
        'Managed event logistics and vendor relationships',
        'Increased event participation by 150%'
      ],
      skills: ['Event Management', 'Leadership', 'Public Speaking', 'Project Management']
    },
    {
      type: 'leadership',
      title: 'Student Organization President',
      company: 'Computer Science Society',
      location: 'University',
      period: '2021 - 2023',
      description: 'Led the Computer Science Society, organizing events, workshops, and fostering a community of tech enthusiasts.',
      achievements: [
        'Grew membership from 50 to 200+ students',
        'Organized coding competitions and tech talks',
        'Established partnerships with local tech companies',
        'Created mentorship program for new students'
      ],
      skills: ['Leadership', 'Community Building', 'Strategic Planning', 'Team Management']
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'professional':
        return Briefcase;
      case 'internship':
        return Building;
      case 'leadership':
        return Users;
      default:
        return Briefcase;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'professional':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'internship':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'leadership':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Experience
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A journey through my professional experiences, internships, and leadership roles 
              that have shaped my expertise in AI/ML, research, and team management.
            </p>
          </motion.div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((experience, index) => {
              const Icon = getTypeIcon(experience.type);
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                          <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {experience.title}
                          </h3>
                          <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                            {experience.company}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {experience.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {experience.location}
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(experience.type)}`}>
                          {experience.type.charAt(0).toUpperCase() + experience.type.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {experience.description}
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Key Achievements */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills Used */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Skills & Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Statistics Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">3+</div>
              <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
            </div>
            <div className="text-center bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">15+</div>
              <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">5+</div>
              <div className="text-gray-600 dark:text-gray-300">Research Papers</div>
            </div>
            <div className="text-center bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">10+</div>
              <div className="text-gray-600 dark:text-gray-300">Events Organized</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

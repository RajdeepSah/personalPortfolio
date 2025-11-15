'use client';

import { motion, type Variants } from 'framer-motion';
import { Briefcase, Users, Trophy, Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const experiences = [
    {
      type: 'professional',
      title: 'Community Management Intern',
      company: 'Walgreens',
      location: 'Topeka, KS',
      period: 'May 2025 - Present',
      description: 'Leading AI/ML initiatives and developing cutting-edge machine learning solutions for various industries.',
      achievements: [
        ' Streamlined operations for 20+ associates,',
        'optimized scheduling',
        'cut labor costs by 10%',
        ' reduced shrink by 66%',
        ' delivered exceptional service across 250+ weekly customer interactions',
        ' boosting community engagement through wellness initiatives'
      ],
      skills: [ 'Adaptable', 'Organized', 'Detail-Oriented', 'Strategic Planner', 'Leadership & Teamwork', 'Problem Solver']
    },
    {
      type: 'New Church Development Summer Internship',
      title: 'NCD Research Intern',
      company: 'Great Plains Annual Conference, UMC',
      location: 'Topeka, KS',
      period: 'May 2024 - Aug 2024',
      description: 'Conducted research in Generative AI applications in higher education and contributed to academic publications.',
      achievements: [
        'Utilized BrickRiver software to analyze church development data for strategic planning,',
        ' conducted financial modeling and budget forecasting to optimize resources',
        'developed the NCD website with content workflows, donation integration, and a seamless user experience',
      ],
      skills: ['Research', 'BrickRiver','Web development','Academic Writing', 'Data Analysis', 'LaTeX']
    },
    {
      type: 'Academic Professional Experience',
      title: ' Mathematics and Statistics Tutor',
      company: 'Washburn University',
      location: 'Topeka, KS',
      period: 'Sept 2023 - Present',
      description: 'Provided tutoring in Statistics, Logic, Functions, Vectors, Trigonometry, Advanced Algebra, and Calculus, helping students develop problem-solving skills and achieve academic success.',
      achievements: [
        'Improved student performance through clear explanations and guided practice'
      ],
      skills: ['Statistics', 'Logic', 'Functions', 'Vectors', 'Trigonometry', 'Advanced Algebra', 'Calculus','Problem-Solving', 'Real Analysis']
    },
    {
      type: 'Academic Professional Experience',
      title: 'Computer Information Science Tutor',
      company: 'Washburn University',
      location: 'Topeka, KS',  
      period: 'Dec 2024 - Present',
      description: 'Tutored students in programming (C, Java, Python), data structures, algorithms, operating systems, networking, cybersecurity, and databases, while supporting learning in software engineering, AI/ML, and discrete mathematics, and guiding them through high-level CS projects with design, implementation, and debugging support.',
      achievements: [
        'Simplified complex CS concepts and supported students in programming, debugging, and project development.'
      ],
      skills: ['Programming lang(C, Java, Python)', 'data structures', 'algorithms', 'operating systems', 'networking', 'cybersecurity',  'databases']
    },


    {
      type: 'Academic Professional Experience',
      title: 'Peer Educator',
      company: 'Washburn University',
      location: 'Topeka, KS',  
      period: 'Aug 2024 - Present',
      description: 'Mentored students through academic support, peer counseling, and career guidance workshops while promoting campus engagement and collaborating with faculty to enhance student success and the overall university experience.',
      achievements: [
        'Led academic workshops and mentored students to boost confidence and engagement.'
      ],
      skills: ['Mentoring', 'Leadership', 'Counseling', 'Communication', 'Engagement', 'Support',  'Networking']
    },

    {
      type: 'Academic Professional Experience',
      title: 'Student Ambassador',
      company: 'Washburn University',
      location: 'Topeka, KS',  
      period: '| May 2025 – Present',
      description: 'Tutored students in programming (C, Java, Python), data structures, algorithms, operating systems, networking, cybersecurity, and databases, while supporting learning in software engineering, AI/ML, and discrete mathematics, and guiding them through high-level CS projects with design, implementation, and debugging support.',
      achievements: [
        'Guided new students through campus tours, academic tools, and orientation support.'
      ],
      skills: ['Programming lang(C, Java, Python)', 'data structures', 'algorithms', 'operating systems', 'networking', 'cybersecurity',  'databases']
    },
    /*
    {
      type: 'Academic Professional Experience',
      title: 'Student Ambassador',
      company: 'Washburn University',
      location: 'Topeka, KS',  
      period: '| May 2025 – Present',
      description: 'Guided new and prospective students through campus tours, academic tools, and registration support while fostering an inclusive community through mentorship, event assistance, and connecting students to essential university resources.',
      achievements: [
        'Improved student performance through clear explanations and guided practice'
      ],
      skills: ['Leadership', 'Outreach', 'Networking', 'Engagement', 'Communication', 'Communication']
    },*/
    {
      type: 'Academic Professional Experience',
      title: 'Tutor/ Mentor – Upper Bound (TRIO Program)',
      company: 'Washburn University',
      location: 'Topeka, KS',  
      period: 'Dec 2024 - Present',
      description: 'Tutored high school students in math, science, and writing while mentoring them on college readiness, personal development, and academic confidence, and helping lead workshops on study skills, time management, financial aid, and cultural awareness.',
      achievements: [
        'Mentored students in study skills, goal-setting, and academic confidence'
      ],
      skills: ['Mentoring', 'Leadership', 'Counseling', 'Communication', 'Engagement', 'Support',  'Networking']
    },
    {
      type: 'Academic Professional Experience',
      title: 'Content Story Writer',
      company: 'Washburn University',
      location: 'Topeka, KS',  
      period: 'Sep 2023 - Aug 2024',
      description: '●	Produced campus stories under tight deadlines, strengthening communication and storytelling skills.',
      achievements: [
        'Produced campus stories under strict deadlines with clear, engaging writing.'
      ],
      skills: ['Writing', 'Research', 'Storytelling', 'Communication']
    },
    {
      type: 'Academic Professional Experience',
      title: 'Office Assistant',
      company: 'Mathematics & Statistics Department, Washburn University',
      location: 'Topeka, KS',  
      period: 'Nov 2023 - Dec 2024',
      description: 'Provided administrative support, event coordination, and inventory management.',
      achievements: [
        'Improved departmental operations by managing administrative tasks.'
      ],
      skills: ['Administration', 'Coordination', 'Scheduling', 'Management', 'Multitasking', 'Organization']
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
        return 'badge-premium badge-success';
      case 'internship':
        return 'badge-premium';
      case 'leadership':
        return 'badge-premium badge-warning';
      default:
        return 'badge-premium';
    }
  };

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
              Professional Experience
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
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
                  className="card-premium p-8"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 icon-chip rounded-2xl flex items-center justify-center mr-4">
                          <Icon className="w-6 h-6 text-[var(--accent)]" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-primary">
                            {experience.title}
                          </h3>
                          <p className="text-lg font-semibold text-[var(--accent)]">
                            {experience.company}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {experience.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {experience.location}
                        </div>
                        <span className={`text-xs font-medium ${getTypeColor(experience.type)}`}>
                          {experience.type.charAt(0).toUpperCase() + experience.type.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-secondary mb-6 leading-relaxed">
                    {experience.description}
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Key Achievements */}
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-3 flex items-center">
                        <Trophy className="w-5 h-5 mr-2 text-yellow-400" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-sm text-muted flex items-start">
                            <span className="w-1.5 h-1.5 bg-[var(--accent-muted)] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills Used */}
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-3">
                        Skills & Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-surface-muted text-secondary rounded-full text-sm font-medium border border-soft"
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
            {[
              { stat: '3+', label: 'Years Experience' },
              { stat: '15+', label: 'Projects Completed' },
              { stat: '5+', label: 'Research Papers' },
              { stat: '10+', label: 'Events Organized' },
            ].map((item, idx) => (
              <div key={idx} className="text-center card-premium p-6">
                <div className="text-3xl font-bold text-[var(--accent)] mb-2">{item.stat}</div>
                <div className="text-muted">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

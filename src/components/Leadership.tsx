'use client';

import { motion } from 'framer-motion';
import { Users, Trophy, Calendar, MapPin } from 'lucide-react';

const Leadership = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 16, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const roles = [
    {
      title: 'Student Organization President',
      org: 'Computer Science Society',
      location: 'University',
      period: '2021 - 2023',
      highlights: [
        'Grew membership from 50 to 200+ students',
        'Organized coding competitions and tech talks',
        'Established partnerships with local tech companies'
      ]
    },
    {
      title: 'Hackathon Coordinator',
      org: 'University Tech Events',
      location: 'Campus',
      period: '2022 - 2024',
      highlights: [
        'Organized 10+ successful hackathons',
        'Managed 200+ participants events',
        'Secured sponsorships and speakers'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-12">
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Leadership & Events</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Highlights from leadership roles, event organization, and community building.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roles.map((role, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{role.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{role.org}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mt-1">
                      <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" />{role.period}</span>
                      <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" />{role.location}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                    <Trophy className="w-4 h-4 mr-2 text-yellow-500" /> Key Highlights
                  </h4>
                  <ul className="space-y-1">
                    {role.highlights.map((h, i) => (
                      <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;



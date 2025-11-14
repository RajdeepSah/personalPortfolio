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
    <section className="py-20 bg-app">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-12">
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Leadership & Events</h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Highlights from leadership roles, event organization, and community building.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roles.map((role, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="card-premium p-6"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 rounded-2xl icon-chip flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-[var(--accent)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">{role.title}</h3>
                    <p className="text-[var(--accent)] font-medium">{role.org}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted mt-1">
                      <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" />{role.period}</span>
                      <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" />{role.location}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-secondary mb-2 flex items-center">
                    <Trophy className="w-4 h-4 mr-2 text-yellow-400" /> Key Highlights
                  </h4>
                  <ul className="space-y-1">
                    {role.highlights.map((h, i) => (
                      <li key={i} className="text-sm text-muted flex items-start">
                        <span className="w-1.5 h-1.5 bg-[var(--accent-muted)] rounded-full mt-2 mr-3 flex-shrink-0"></span>
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



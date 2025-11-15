'use client';

import { motion, type Variants } from 'framer-motion';
import { Users, Trophy, Calendar, MapPin } from 'lucide-react';

const Leadership = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 16, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
  };

  const roles = [
    {
      title: 'President of Club Mathematica',
      org: 'Mathematics and Statistics Department',
      location: 'Washburn University',
      period: '2025 - 2026',
      highlights: [
        'Directed club operations and fostered student research by organizing math-focused workshops, faculty-led talks, and academic conference participation.'
      ]
    },

    {
      title: 'ByteBods President',
      org: 'Computer Science Club',
      location: 'Washburn University',
      period: '2024 - 2025',
      highlights: [
        'Led initiatives in technology and coding, including hackathons, coding competitions, industry speaker events, and professional development workshops.'
      ]
    },
    {
      title: 'Programming Competition Participant',
      org: 'CCSC Central Plains',
      location: 'Central Plain Region, USA',
      period: 'April 2025',
      highlights: [
        'Competed at the 31st Annual CCSC Central Plains Conference',
        'secured top 4 position out of 21 teams'
      ]
    },
    {
      title: 'Mathematics Competition Participant',
      org: 'Kansas Section of the Mathematical Association of America (KSMAA)',
      location: 'Washburn University',
      period: 'March 2024',
      highlights: [
        'Represented Washburn University at the KSMAA Mathematics Competition'
      ]
    },
        {
      title: 'Hack Midwest Hackathon',
      org: 'Hack Midwest',
      location: 'Kansas City, MO ',
      period: 'Oct 2025',
      highlights: [
        'Built Listify AI, a campus marketplace for buying and selling new or second-hand items',
        'Developed using MongoDB, AWS, React, Python, stablecoin integration, and the Brale API',
        'Competed head-to-head with professional software developers and graduate student teams'
      ]
    },
    {
      title: ' Sports Event Coordinator',
      org: 'Ichabod Cricket Club (ICC)',
      location: 'Topeka, KS, USA',
      period: 'Oct 2024',
      highlights: [
        'Organized and executed a multi-university cricket tournament, overseeing logistics, scheduling, sponsorship, and large-scale event promotion.'
      ]
    },
    {
      title: 'Shawnee County Tech Guild Member',
      org: 'Shawnee County Tech Guild',
      location: 'Kansas, USA',
      period: '2025 - Present',
      highlights: [
        ' Contributed to community outreach and guild engagement through idea presentations, active collaboration, and winning the solo tech trivia competition.'
      ]
    },
    
    {
      title: 'Presenter - Apeiron Research Symposium ',
      org: 'Computer Information Science Department, Washburn University',
      location: 'Kansas, USA',
      period: 'May 2025',
      highlights: [
        ' ●	Delivered a research presentation on the impact of generative AI in higher education at Washburn University’s annual symposium.'
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



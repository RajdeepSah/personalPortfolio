'use client';

import { motion } from 'framer-motion';
import { FileText, ExternalLink, Award, BookOpen, Microscope } from 'lucide-react';

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

  const publications = [
    {
      title: "Generative AI in higher education: student and faculty perspectives on use, ethics, and impact",
      authors: "Rajdeep Sah, Dr. Sun, Cameron Hagemaster, Arpan Adhikari, Ari Lee",
      venue: "International Association for Computer Information Systems (IACIS) Conference",
      year: "2025",
      type: "Conference Paper",
      status: "Published",
      description: "This study examines how generative AI is impacting college students and faculty, using survey data from 114 students and interviews with 18 professors to compare their perceptions, usage patterns, and concerns. Results show that students view AI as a helpful academic tool, especially for managing workload while faculty remain more cautious, highlighting ethical issues and the need for clearer institutional guidelines.",
      keywords: ["Generative AI", "student perception", "faculty perspective", "higher education", "ethical AI use", "AI policy"],
      doi: "https://doi.org/10.48009/2_iis_129 ",
      link: "https://iacis.org/conference/openconf2025/modules/request.php?module=oc_program&action=summary.php&id=110",
      abstract: "The rapid advancement of generative artificial intelligence (AI) technologies presents unprecedented opportunities for transforming higher education. This paper investigates the current state of generative AI applications in educational settings, identifies key opportunities for enhancing learning experiences, and addresses the challenges institutions face in adopting these technologies responsibly."
    },
    /*
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
  ]
    
  */
   ] ;

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
      title: "Turtle Temperature Data Mining & Environmental Modeling",
      status: "In Progress",
      expectedCompletion: "2025",
      description: "Analyzing long-term temperature sensor data from aquatic turtles to develop predictive models for environmental patterns, habitat conditions, and climate-driven behavioral changes. This project uses data mining, statistical modeling, and machine learning to interpret irregular time-series data and forecast ecological trends."
    },
    {
      title: "Blockchain-Ready Secure Voting System (BlockBallot)",
      status: "Planning",
      expectedCompletion: "2025",
      description: "Designing a scalable, secure digital voting platform with a modular architecture that can integrate blockchain-based audit trails in future versions. The system focuses on cryptographic security, verifiable logs, and user authentication to support transparent and tamper-resistant elections."
    }
  ];

  

  const featuredArticles = [
  {
    title: "Coding, Math & Cybersecurity: Rajdeep Sah's Unexpected Path",
    description:
      "Profile feature in Washburn Review highlighting my journey from Nepal to Washburn University and passion for technology and mathematics.",
    link: "https://washburnreview.org/54229/features/profile/coding-math-cybersecurity-rajdeep-sahs-unexpected-path/"
  },
  {
    title: "Washburn CIS Students Present Research at National Conference",
    description:
      "Coverage of our research presentation at the national IACIS conference, showcasing Washburn students' contributions to AI research.",
    link: "https://washburnreview.org/56044/news/washburn-cis-students-present-research-at-national-conference/"
  }
];



  const stats = [
    { label: 'Published Papers', value: '2' },
    { label: 'Conference Presentations', value: '1' },
    { label: 'Research Areas', value: '3' },
    { label: 'Ongoing Projects', value: '2' }
  ];

  return (
    <section className="py-20 bg-app">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-16">
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Publications & Research</h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Exploring the frontiers of artificial intelligence, machine learning, and mathematical research to solve complex problems and advance human knowledge.
            </p>
          </motion.div>


          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">Publications</h3>
            <div className="space-y-8">
              {publications.map((publication, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="card-premium p-8"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <FileText className="w-6 h-6 text-[var(--accent)] mr-3" />
                        <span className={`text-xs font-medium ${publication.status === 'Published' ? 'badge-premium badge-success' : 'badge-premium badge-warning'}`}>
                          {publication.status}
                        </span>
                      </div>
                      <h4 className="text-2xl font-bold text-primary mb-2">{publication.title}</h4>
                      <p className="text-secondary mb-2">{publication.authors}</p>
                      <p className="text-muted text-sm">
                        {publication.venue} • {publication.year} • {publication.type}
                      </p>
                    </div>
                  </div>

                  <p className="text-secondary mb-4 leading-relaxed">{publication.description}</p>

                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-secondary mb-2">Keywords:</h5>
                    <div className="flex flex-wrap gap-2">
                      {publication.keywords.map((keyword, keywordIndex) => (
                        <span key={keywordIndex} className="px-2 py-1 bg-surface-muted text-secondary rounded text-xs font-medium border border-soft">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-sm text-muted mb-2 sm:mb-0">
                      <strong>DOI:</strong> {publication.doi}
                    </div>
                    <motion.a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-4 py-2 btn-premium text-sm font-medium gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Publication
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">Upcoming Research</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingResearch.map((research, index) => (
                <motion.div key={index} whileHover={{ scale: 1.02 }} className="card-premium p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-medium ${research.status === 'In Progress' ? 'badge-premium badge-success' : 'badge-premium'}`}>
                      {research.status}
                    </span>
                    <span className="text-sm text-muted">Expected: {research.expectedCompletion}</span>
                  </div>
                  <h4 className="text-lg font-bold text-primary mb-3">{research.title}</h4>
                  <p className="text-secondary text-sm">{research.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>



          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">Research Focus Areas</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {researchAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.div key={index} whileHover={{ scale: 1.05 }} className="card-premium p-6">
                    <div className="w-12 h-12 rounded-2xl icon-chip flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[var(--accent)]" />
                    </div>
                    <h4 className="text-xl font-bold text-primary mb-3">{area.title}</h4>
                    <p className="text-secondary mb-4">{area.description}</p>
                    <div className="space-y-1">
                      {area.focus.map((focus, focusIndex) => (
                        <span
                          key={focusIndex}
                          className="inline-block px-2 py-1 bg-surface-muted text-secondary rounded text-xs font-medium mr-2 mb-1 border border-soft"
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



{/* Featured Articles */}
<motion.div variants={itemVariants}>
  <h3 className="text-2xl font-bold text-primary mb-8 text-center">Featured Articles</h3>
  
  <div className="space-y-8">
    {featuredArticles.map((article, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.02 }}
        className="card-premium p-6"
      >
        <h4 className="text-xl font-bold text-primary mb-2">{article.title}</h4>
        <p className="text-secondary mb-4">{article.description}</p>

        <motion.a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-4 py-2 btn-premium text-sm font-medium gap-2"
        >
          <ExternalLink className="w-4 h-4" />
          Read Article
        </motion.a>
      </motion.div>
    ))}
  </div>
</motion.div>






          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center card-premium p-6">
                <div className="text-3xl font-bold text-[var(--accent)] mb-2">{stat.value}</div>
                <div className="text-muted">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;

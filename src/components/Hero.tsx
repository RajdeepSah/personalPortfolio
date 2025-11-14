'use client';

import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
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

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-app text-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-primary"
          >
            Rajdeep Sah
          </motion.h1>

          {/* Title */}
          <motion.div
            variants={itemVariants}
            className="text-xl md:text-2xl text-secondary space-y-2"
          >
            <p>AI/ML Engineer | AI Researcher | Mathematical Researcher</p>
            <p>Developer | Manager</p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about solving complex problems through artificial intelligence, 
            machine learning, and mathematical research. Building the future with code and algorithms.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="/resume.pdf"
              download
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="inline-flex items-center px-8 py-3 btn-premium font-medium"
            >
              <Download className="mr-2" size={20} />
              View Resume
            </motion.a>

            <motion.a
              href="/projects"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="inline-flex items-center px-8 py-3 btn-outline-premium font-medium"
            >
              <Mail className="mr-2" size={20} />
              Explore Projects
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6 pt-8"
          >
            <motion.a
              href="https://github.com/rajdeepsah"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-muted hover:text-primary transition-colors duration-200 drop-shadow"
            >
              <Github size={24} />
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/rajdeepsah"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-muted hover:text-primary transition-colors duration-200 drop-shadow"
            >
              <Linkedin size={24} />
            </motion.a>
            
            <motion.a
              href="https://twitter.com/rajdeepsah"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-muted hover:text-primary transition-colors duration-200 drop-shadow"
            >
              <Twitter size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-soft rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-surface-muted rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

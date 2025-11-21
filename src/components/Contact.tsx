'use client';

import { cubicBezier, motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
  MessageCircle,
  Facebook,
  Instagram
} from 'lucide-react';
import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

type ContactResponse = {
  success: boolean;
  error?: string;
};

const initialFormState: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormState);
  const [formErrors, setFormErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState<string>('');

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
        ease: cubicBezier(0.25, 0.1, 0.25, 1)
      }
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const fieldName = name as keyof ContactFormData;
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
    setFormErrors(prev => {
      if (!prev[fieldName]) {
        return prev;
      }
      const next = { ...prev };
      delete next[fieldName];
      return next;
    });
  };

  const validateForm = (values: ContactFormData): ContactFormErrors => {
    const errors: ContactFormErrors = {};

    if (!values.name.trim()) {
      errors.name = 'Name is required.';
    }

    if (!values.email.trim()) {
      errors.email = 'Email is required.';
    } else if (!emailPattern.test(values.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }

    if (!values.subject.trim()) {
      errors.subject = 'Subject is required.';
    }

    if (!values.message.trim()) {
      errors.message = 'Message is required.';
    }

    return errors;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitStatus('idle');
    setFeedbackMessage('');

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setFormErrors(validationErrors);
      setSubmitStatus('error');
      setFeedbackMessage('Please correct the highlighted fields before resubmitting.');
      return;
    }

    setIsSubmitting(true);
    setFormErrors({});

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      let data: ContactResponse | null = null;

      try {
        data = await response.json();
      } catch {
        // ignore JSON parsing errors and fall back to status handling below
      }

      if (!response.ok || !data?.success) {
        throw new Error(data?.error ?? 'Something went wrong, please try again.');
      }

      setSubmitStatus('success');
      setFeedbackMessage("Thank you! Your message has been sent successfully. I'll get back to you soon.");
      setFormData(initialFormState);
    } catch (error) {
      setSubmitStatus('error');
      setFeedbackMessage(
        error instanceof Error
          ? error.message
          : 'Sorry, there was an error sending your message. Please try again later.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rajdeepofficialework@gmail.com',
      link: 'mailto:rajdeepofficialework@gmail.com'
    },
    {
      icon: Mail,
      label: 'University Email',
      value: 'Rajdeep.sah@washburn.edu',
      link: 'mailto:Rajdeep.sah@washburn.edu'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 785 730 1643',
      link: 'tel:+17857301643'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Topeka, Kansas, USA',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com/RajdeepSah',
      color: 'hover:text-[var(--accent)]'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/rajdeep-sah-0a5363204/',
      color: 'hover:text-[var(--accent-strong)]'
    },
    {
      icon: Twitter,
      label: 'X (Twitter)',
      link: 'https://x.com/RajdeepShah_',
      color: 'hover:text-[var(--accent-strong)]'
    },
    {
      icon: Facebook,
      label: 'Facebook',
      link: 'https://www.facebook.com/rajdeeptherd',
      color: 'hover:text-blue-400'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      link: 'https://www.instagram.com/rajdeepshah_/',
      color: 'hover:text-pink-400'
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
              Get In Touch
            </h2>
              <p className="text-xl text-secondary max-w-3xl mx-auto">
                I&rsquo;m always interested in discussing new opportunities, collaborations, 
                and innovative projects. Let&rsquo;s connect and explore how we can work together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    
                    return (
                      <motion.a
                        key={index}
                        href={info.link}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center p-4 card-premium"
                      >
                        <div className="w-12 h-12 icon-chip rounded-2xl flex items-center justify-center mr-4">
                          <Icon className="w-6 h-6 text-[var(--accent)]" />
                        </div>
                        <div>
                          <p className="text-sm text-muted">{info.label}</p>
                          <p className="text-primary font-medium">{info.value}</p>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-xl font-bold text-primary mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    
                    return (
                      <motion.a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-12 h-12 icon-chip rounded-2xl flex items-center justify-center transition-all duration-300 text-primary ${social.color}`}
                      >
                        <Icon size={20} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Availability Status */}
              <div className="card-premium p-6">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-[var(--accent-strong)] rounded-full mr-3 animate-pulse"></div>
                  <h4 className="text-lg font-bold text-primary">
                    Currently Available
                  </h4>
                </div>
                  <p className="text-secondary text-sm">
                    I&rsquo;m currently open to new opportunities, collaborations, and interesting projects. 
                  Feel free to reach out!
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="card-premium p-8">
                <div className="flex items-center mb-6">
                  <MessageCircle className="w-6 h-6 text-[var(--accent)] mr-3" />
                  <h3 className="text-2xl font-bold text-primary">
                    Send a Message
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-muted mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                          name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                          aria-invalid={Boolean(formErrors.name)}
                          aria-describedby="name-error"
                          className="w-full px-4 py-3 border border-soft rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent bg-surface text-primary placeholder:text-muted transition-colors duration-200"
                        placeholder="Your name"
                      />
                        {formErrors.name && (
                          <p id="name-error" className="mt-2 text-sm text-red-400">
                            {formErrors.name}
                          </p>
                        )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-muted mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                          value={formData.email}
                        onChange={handleInputChange}
                        required
                          aria-invalid={Boolean(formErrors.email)}
                          aria-describedby="email-error"
                          className="w-full px-4 py-3 border border-soft rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent bg-surface text-primary placeholder:text-muted transition-colors duration-200"
                        placeholder="your.email@example.com"
                      />
                        {formErrors.email && (
                          <p id="email-error" className="mt-2 text-sm text-red-400">
                            {formErrors.email}
                          </p>
                        )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-muted mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                        name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                        aria-invalid={Boolean(formErrors.subject)}
                        aria-describedby="subject-error"
                        className="w-full px-4 py-3 border border-soft rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent bg-surface text-primary placeholder:text-muted transition-colors duration-200"
                      placeholder="What's this about?"
                    />
                      {formErrors.subject && (
                        <p id="subject-error" className="mt-2 text-sm text-red-400">
                          {formErrors.subject}
                        </p>
                      )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-muted mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                        value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                        aria-invalid={Boolean(formErrors.message)}
                        aria-describedby="message-error"
                        className="w-full px-4 py-3 border border-soft rounded-lg focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent bg-surface text-primary placeholder:text-muted transition-colors duration-200 resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                      {formErrors.message && (
                        <p id="message-error" className="mt-2 text-sm text-red-400">
                          {formErrors.message}
                        </p>
                      )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center px-6 py-3 btn-premium font-medium gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>

                    {submitStatus === 'success' && feedbackMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-lg text-sm bg-emerald-500/10 text-emerald-400"
                    >
                        {feedbackMessage}
                    </motion.div>
                  )}

                    {submitStatus === 'error' && feedbackMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-lg text-sm bg-red-500/10 text-red-400"
                    >
                        {feedbackMessage}
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

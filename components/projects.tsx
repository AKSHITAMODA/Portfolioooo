'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'

export function Projects() {
  const projects = [
    {
      title: 'CineAdvisor',
      category: 'AI/ML',
      description: 'Movie recommendation engine achieving 95%+ accuracy using hybrid filtering, neural networks, and TMDb API integration for 500,000+ titles.',
      image: '/projects/cineadvisor.png',
      tech: ['Python', 'TensorFlow', 'Neural Networks', 'Kaggle', 'TMDb API'],
      github: 'https://github.com/AKSHITAMODA/CINEADVISOR-Movie-Recommendation-',
    },
    {
      title: 'ThreatTamer',
      category: 'Cybersecurity + AI',
      description: 'AI-powered security alert management system using Random Forest and SHAP explainability for intelligent alert classification and prioritization.',
      image: '/projects/threattamer.png',
      tech: ['Python', 'Random Forest', 'SHAP', 'ML', 'Security Analytics'],
      github: 'https://github.com/AKSHITAMODA/ThreatTamer-Alert-management-system',
    },
    {
      title: 'IntelliSecureBank',
      category: 'AI Security',
      description: 'Advanced banking authentication system with Aadhaar OCR, facial verification, OTP, AES encryption, and ML-based anomaly detection.',
      image: '/projects/intellisecurebank.png',
      tech: ['Python', 'Flask', 'OpenCV', 'OCR', 'AES Encryption', 'ML'],
      github: 'https://github.com/AKSHITAMODA/IntellisecureBank',
    },
    {
      title: 'VoyageVista',
      category: 'Web Development',
      description: 'International hotel booking platform with responsive design, advanced search filters, and comprehensive booking workflow for seamless user experience.',
      image: '/projects/voyagevista.png',
      tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Manual Testing'],
      github: 'https://github.com/AKSHITAMODA/International-Hotel-Booking-Website-VoyageVista',
    },
    {
      title: 'Mailchemy',
      category: 'Python Development',
      description: 'Transform emails into usable Excel data. Tkinter GUI with Gmail integration, intelligent parsing, and SQLite database for managing 20,000+ records.',
      image: '/projects/cineadvisor.png',
      tech: ['Python', 'Tkinter', 'IMAP', 'openpyxl', 'SQLite', 'Regex'],
      github: 'https://github.com/AKSHITAMODA/Mailchemy-Transform-Emails-into-Usable-Excel-Magic',
    },
    {
      title: 'Wireshark Masterclass',
      category: 'Cybersecurity',
      description: 'Network packet analysis project. Analyzed 1,500+ packets via Wireshark, created tutorial and visual guide reducing analysis time by 45%.',
      image: '/projects/threattamer.png',
      tech: ['Wireshark', 'Metasploitable', 'Splunk', 'Network Analysis'],
      github: 'https://drive.google.com/drive/u/1/folders/1EyF_nPRoKnjjn9K48xS12nKj-ty9_7kd',
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="projects" className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="glow-blob w-96 h-96 bg-primary"
          style={{ bottom: '10%', right: '5%' }}
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
        />
      </div>

      <div className="relative container-wide mx-auto">
        <motion.div
          className="space-y-20"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
        >
          <motion.div variants={item} className="space-y-4">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle max-w-2xl">Showcasing my best work across AI/ML, Cybersecurity, Backend Development, and Web</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="glass-card overflow-hidden group cursor-pointer card-hover"
                whileHover={{ y: -12 }}
              >
                {/* Image */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-secondary uppercase tracking-wider">{project.category}</p>
                    <h3 className="text-2xl font-bold text-foreground mt-2">{project.title}</h3>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full border border-primary/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-white/10">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors px-3 py-1.5 rounded-md hover:bg-primary/10"
                      whileHover={{ x: 5 }}
                    >
                      <FaGithub className="w-4 h-4" />
                      View on GitHub
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { FaTrophy, FaAward, FaStar, FaGraduationCap, FaExternalLinkAlt } from 'react-icons/fa'

export function Achievements() {
  const achievements = [
    {
      icon: FaTrophy,
      title: 'IBM Cybersecurity Certification',
      description: 'IBM CyberSecurity - Advanced security analysis and SIEM expertise',
    },
    {
      icon: FaAward,
      title: 'AI-ML Professional Certification',
      description: 'Specialized certification in AI and Machine Learning technologies',
    },
    {
      icon: FaStar,
      title: 'Deloitte Cyber Job Simulation',
      description: 'Deloitte Australia: Cyber Security Job Simulation - Industry-ready training',
    },
    {
      icon: FaGraduationCap,
      title: 'Flipkart Grid 7.0',
      description: 'Participated in Flipkart&apos;s premier competitive programming challenge',
    },
    {
      icon: FaTrophy,
      title: 'AI-ML Workshop - NTU',
      description: '40-hour intensive workshop achieving 92.3% accuracy on image classification',
    },
    {
      icon: FaAward,
      title: 'Switch Conference Singapore',
      description: 'Attended global conference exploring AI-driven cybersecurity solutions',
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="glow-blob w-96 h-96 bg-accent"
          style={{ top: '10%', right: '5%' }}
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
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
          <motion.div variants={item} className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="section-title">Achievements & Recognition</h2>
                <p className="section-subtitle max-w-2xl mt-4">Certifications, awards, and key accomplishments</p>
              </div>
              <motion.a
                href="https://drive.google.com/drive/u/1/folders/1P7VVEFPn7eVfzlQKN-otkzCEze1NSaUS"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 glass-sm text-secondary font-semibold hover:bg-secondary/20 transition-all w-fit"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
                View Certifications
              </motion.a>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, idx) => {
              const IconComponent = achievement.icon
              return (
                <motion.div
                  key={idx}
                  variants={item}
                  className="glass-card p-8 space-y-6 text-center card-hover group"
                  whileHover={{ y: -8 }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl group-hover:from-primary/40 group-hover:to-accent/40 transition-all mx-auto"
                    whileHover={{ rotate: 12, scale: 1.12 }}
                  >
                    <IconComponent className="w-10 h-10 text-primary" />
                  </motion.div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground">{achievement.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-3">{achievement.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

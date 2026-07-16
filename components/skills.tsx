'use client'

import { motion } from 'framer-motion'

export function Skills() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['Java', 'Python', 'C/C++', 'R', 'MATLAB', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      category: 'Software Development & DevOps',
      skills: ['Git', 'GitHub', 'DevOps', 'AWS', 'Docker', 'Prometheus', 'Grafana', 'NGINX', 'CI/CD', 'GitHub Actions'],
    },
    {
      category: 'Cybersecurity & Networking',
      skills: ['Splunk', 'Wireshark', 'Nmap', 'Kali Linux', 'Metasploitable', 'IBM QRadar', 'Network Security'],
    },
    {
      category: 'AI, ML & Data Science',
      skills: ['TensorFlow', 'Keras', 'Scikit-learn', 'Machine Learning', 'Neural Networks', 'OpenAI API'],
    },
    {
      category: 'Databases & APIs',
      skills: ['MySQL', 'MongoDB', 'Flask', 'APIs', 'openpyxl', 'SQLite', 'IMAP'],
    },
    {
      category: 'Core Concepts',
      skills: ['Data Structures & Algorithms', 'Operating Systems', 'DBMS', 'Computer Networks', 'OOP'],
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="glow-blob w-96 h-96 bg-secondary"
          style={{ top: '50%', left: '-5%' }}
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
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
            <h2 className="section-title">Skills & Expertise</h2>
            <p className="section-subtitle max-w-2xl">Technologies and tools I&apos;ve mastered across multiple domains</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((cat, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="glass-card p-8 space-y-6 card-hover"
              >
                <h3 className="text-xl font-bold text-foreground">{cat.category}</h3>

                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-primary/10 to-accent/10 text-foreground rounded-full border border-primary/20 hover:border-primary/50 transition-all"
                      whileHover={{ scale: 1.08, y: -2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

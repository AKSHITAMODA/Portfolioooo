'use client'

import { motion } from 'framer-motion'

export function About() {
  const education = {
    school: 'Vellore Institute of Technology, Vellore',
    degree: 'B-Tech Computer Science Engineering',
    specialization: 'Information Security Specialization',
    cgpa: '9.41',
    graduation: 'July 2027',
    period: 'Aug 2023 – Present',
  }

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
    <section id="about" className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="glow-blob w-96 h-96 bg-secondary"
          style={{ top: '-5%', right: '-10%' }}
          animate={{ x: [0, 40, 0] }}
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
          <motion.div variants={item} className="space-y-4">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle max-w-2xl">Get to know me, my background, and what drives my passion for technology</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div variants={item} className="glass-card p-10 space-y-8 card-hover">
              <h3 className="text-2xl font-bold text-foreground">Education</h3>

              <div className="space-y-4">
                <div>
                  <p className="text-lg font-semibold text-primary">{education.school}</p>
                  <p className="text-foreground font-medium pt-2">{education.degree}</p>
                  <p className="text-secondary pt-1">{education.specialization}</p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Period</span>
                    <span className="text-foreground font-bold text-sm">{education.period}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">CGPA</span>
                    <span className="text-foreground font-bold">{education.cgpa}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Graduation</span>
                    <span className="text-foreground font-bold">{education.graduation}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={item} className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-6">About Me</h3>
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m a computer science student at VIT Vellore with a specialization in Information Security. I&apos;m passionate about backend development, cybersecurity, and AI technologies, with hands-on experience at IBM and Tranquil Labs.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Through my internships, I&apos;ve worked on security analysis, CI/CD optimization, and system monitoring. I specialize in building secure, scalable solutions and have a strong foundation in DevOps, cloud technologies, and network security.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                I&apos;m seeking opportunities to leverage my cybersecurity expertise and development skills to build impactful products that prioritize security and efficiency at scale.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

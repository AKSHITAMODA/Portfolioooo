'use client'

import { motion } from 'framer-motion'

export function Experience() {
  const experiences = [
    {
      company: 'IBM',
      position: 'Cyber Security Analyst',
      period: 'May 2025 – June 2025',
      link: 'https://www.ibm.com',
      responsibilities: [
        'Analyzed 5,000+ security events daily using Splunk, Wireshark, and IBM QRadar to identify anomalies and threats',
        'Strengthened perimeter security and reduced detection-to-response time by 45%',
        'Optimized firewall rules and SIEM tuning, reducing false positives by 15%',
        'Automated security workflows, saving 10+ analyst hours weekly',
      ],
      tech: ['Splunk', 'IBM QRadar', 'Wireshark', 'Kali Linux', 'Network Security', 'SIEM'],
    },
    {
      company: 'Tranquil Labs Pvt. Limited',
      position: 'SDE Intern',
      period: 'May 2025 – July 2025',
      link: 'https://www.tranquillabs.com',
      responsibilities: [
        'Optimized CI/CD pipelines and automated deployments using Docker, GitHub Actions, and AWS',
        'Improved system reliability and monitoring with Prometheus, Grafana, and NGINX integration',
        'Implemented infrastructure as code and containerization best practices',
        'Enhanced deployment efficiency and system observability',
      ],
      tech: ['Docker', 'GitHub Actions', 'AWS', 'Prometheus', 'Grafana', 'NGINX', 'CI/CD'],
    },
    {
      company: 'BharatPe',
      position: 'Tech Intern',
      period: 'May 2026 – July 2026',
      link: 'https://www.bharatpe.com',
      responsibilities: [
        'Developed backend services using Java and Spring Boot with high performance standards',
        'Built REST APIs and integrated PostgreSQL and MongoDB for data persistence',
        'Worked with Redis caching and implemented Kafka-based messaging system',
        'Optimized SQL queries for better performance and improved API efficiency within Agile teams',
      ],
      tech: ['Java', 'Spring Boot', 'Kafka', 'Redis', 'PostgreSQL', 'MongoDB', 'Docker', 'Git'],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="experience" className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="glow-blob w-96 h-96 bg-accent"
          style={{ top: '50%', left: '-10%' }}
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      <div className="relative container-wide mx-auto">
        <motion.div
          className="space-y-20"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={item} className="space-y-4">
            <h2 className="section-title">Professional Experience</h2>
            <p className="section-subtitle max-w-2xl">Internships and roles that shaped my journey in tech</p>
          </motion.div>

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="glass-card p-10 border-l-4 border-primary/50 hover:border-primary card-hover"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{exp.position}</h3>
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary font-semibold mt-2 hover:text-primary transition-colors inline-block"
                    >
                      {exp.company}
                    </a>
                    <p className="text-muted-foreground text-sm mt-1">{exp.period}</p>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Key Responsibilities</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground">
                        <span className="text-primary font-bold mt-1">›</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full border border-primary/30"
                    >
                      {t}
                    </span>
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

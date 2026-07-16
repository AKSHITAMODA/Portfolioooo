'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'
import { useEffect, useState } from 'react'

export function Hero() {
  const roles = ['Software Engineer', 'Backend Developer', 'Cybersecurity Enthusiast', 'AI Developer', 'Full Stack Developer']
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="home" className="min-h-screen relative flex items-center overflow-hidden pt-20">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="glow-blob w-96 h-96 bg-primary rounded-full blur-3xl"
          style={{ top: '10%', left: '-10%' }}
          animate={{ x: [0, 50, 0], y: [0, 100, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="glow-blob w-96 h-96 bg-accent rounded-full blur-3xl"
          style={{ bottom: '10%', right: '-10%' }}
          animate={{ x: [0, -50, 0], y: [0, -100, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            className="space-y-8 z-10"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={item} className="space-y-6">
              <motion.p className="text-secondary text-lg font-medium tracking-wide uppercase">
                Welcome to my portfolio
              </motion.p>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight tracking-tight">
                Hi, I&apos;m <span className="gradient-text block">Akshita Moda</span>
              </h1>
            </motion.div>

            <motion.div variants={item} className="h-14 md:h-16">
              <p className="text-2xl md:text-3xl font-semibold text-secondary">
                {roles[roleIndex]}
              </p>
            </motion.div>

            <motion.p
              variants={item}
              className="text-lg text-muted-foreground max-w-xl leading-relaxed font-light"
            >
              Computer Science student at VIT Vellore specializing in Information Security (CGPA 9.41). Building scalable backend systems, AI-powered applications, and secure cybersecurity solutions.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4 pt-6">
              <motion.a
                href="https://drive.google.com/file/d/1V_3OmFrE9RUyuznSJhh8BMYnJudw3YaI/view?usp=sharing"
                download="Akshita_Moda_Resume.pdf"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg transition-all"
              >
                Download Resume
                <HiArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-primary/30 text-foreground rounded-xl font-semibold hover:border-primary hover:bg-primary/5 transition-all"
              >
                View Projects
              </motion.a>
            </motion.div>

            <motion.div variants={item} className="flex gap-8 pt-8">
              <motion.a
                href="https://github.com/AKSHITAMODA"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
              >
                <FaGithub className="text-lg" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/akshita-moda-a4997a28a/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                className="w-12 h-12 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary hover:bg-secondary/20 transition-colors"
              >
                <FaLinkedin className="text-lg" />
              </motion.a>
              <motion.a
                href="mailto:akshitamoda@gmail.com"
                whileHover={{ scale: 1.15, y: -3 }}
                className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent hover:bg-accent/20 transition-colors"
              >
                <span className="text-lg">✉</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - Floating icons */}
          <motion.div
            className="relative h-96 hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="absolute inset-0">
              {[
                { icon: '☕', delay: 0, x: 20, y: 40 },
                { icon: '🐍', delay: 0.2, x: 200, y: 60 },
                { icon: '⚙️', delay: 0.4, x: 80, y: 200 },
                { icon: '⚛️', delay: 0.6, x: 220, y: 180 },
                { icon: '🐳', delay: 0.8, x: 40, y: 300 },
                { icon: '🛢️', delay: 1, x: 180, y: 280 },
                { icon: '🟢', delay: 1.2, x: 120, y: 100 },
                { icon: '🔐', delay: 1.4, x: 240, y: 320 },
                { icon: '🤖', delay: 1.6, x: 60, y: 350 },
                { icon: '🔴', delay: 1.8, x: 200, y: 20 },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="absolute w-12 h-12 glass-card rounded-lg flex items-center justify-center text-xl md:text-2xl font-bold"
                  style={{ left: item.x, top: item.y }}
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4 + item.delay, repeat: Infinity, delay: item.delay }}
                >
                  {item.icon}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-muted-foreground text-sm">Scroll to explore</div>
      </motion.div>
    </section>
  )
}

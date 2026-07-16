'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FaDownload } from 'react-icons/fa'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'glass backdrop-blur-xl'
          : 'bg-background/40 backdrop-blur-md'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-wide mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <motion.div
            className="text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            AM
          </motion.div>

          <div className="hidden md:flex gap-12">
            {navItems.map((item, index) => (
              <motion.div 
                key={item.label} 
                initial={{ opacity: 0, y: -5 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: index * 0.08 }}
              >
                <Link
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-all text-sm font-medium hover:scale-105"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="hidden md:flex gap-4 items-center">
            <motion.a
              href="https://drive.google.com/file/d/1V_3OmFrE9RUyuznSJhh8BMYnJudw3YaI/view?usp=sharing"
              download="Akshita_Moda_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 py-2.5 glass-sm text-secondary font-medium text-sm hover:bg-secondary/20 transition-all"
            >
              <FaDownload className="w-3.5 h-3.5" />
              Resume
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-primary/30 transition-all"
            >
              Contact
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

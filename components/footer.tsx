'use client'

import { motion } from 'framer-motion'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 bg-background/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2 text-center md:text-left">
            <p className="text-foreground font-semibold">
              Designed and Developed by Akshita Moda
            </p>
            <p className="text-muted-foreground text-sm">
              Built using Next.js 15, TypeScript, and Tailwind CSS
            </p>
          </div>

          <div className="text-muted-foreground text-sm">
            © {currentYear} All rights reserved
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

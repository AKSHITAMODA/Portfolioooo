'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload } from 'react-icons/fa'
import { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const res = await fetch("https://formspree.io/f/mykrnznj", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (res.ok) {
    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  } else {
    alert("Failed to send message.");
  }
};

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

  const contactLinks = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'akshitamoda@gmail.com',
      href: 'mailto:akshitamoda@gmail.com',
      color: 'text-primary',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 9350510579',
      href: 'tel:+919350510579',
      color: 'text-secondary',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Akshita Moda',
      href: 'https://www.linkedin.com/in/akshita-moda-a4997a28a/',
      color: 'text-blue-400',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'AKSHITAMODA',
      href: 'https://github.com/AKSHITAMODA',
      color: 'text-accent',
    },
  ]

  return (
    <section id="contact" className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="glow-blob w-96 h-96 bg-primary"
          style={{ bottom: '-10%', left: '5%' }}
          animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 container-wide mx-auto">
        <motion.div
          className="space-y-20"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
        >
          <motion.div variants={item} className="space-y-6 text-center">
            <h2 className="section-title">Let&apos;s Connect</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Open to opportunities and collaborations. Reach out to discuss projects, ideas, or just to chat!
            </p>
            <motion.a
              href="https://drive.google.com/file/d/1lsRIoXe-aX_nxEUYLsVyoi6WthKc8e9_/view"
              download="Akshita_Moda_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:from-primary/90 hover:to-accent/90 transition-all mt-6"
            >
              <FaDownload className="w-4 h-4" />
              Download Resume
            </motion.a>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact cards */}
            <motion.div variants={item} className="lg:col-span-1 space-y-6">
              {contactLinks.map((link, idx) => {
                const IconComponent = link.icon
                return (
                  <motion.a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:border-accent transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <div className={`text-3xl ${link.color} mt-2`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground font-medium">{link.label}</p>
                      <p className="text-foreground font-semibold mt-1 group-hover:text-primary transition-colors">{link.value}</p>
                    </div>
                  </motion.a>
                )
              })}
            </motion.div>

            {/* Contact form */}
            <motion.div variants={item} className="lg:col-span-2 glass-card p-8 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background/50 border border-white/10 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background/50 border border-white/10 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background/50 border border-white/10 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:from-primary/90 hover:to-accent/90 transition-all"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

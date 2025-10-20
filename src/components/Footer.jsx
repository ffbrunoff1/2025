import React from 'react'
import { motion } from 'framer-motion'
import { Heart, BookOpen, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navigation = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Works', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ]

  const bookCategories = [
    'Contemporary Romance',
    'Historical Romance',
    'Fantasy Romance',
    'Romantic Comedy',
    'Paranormal Romance'
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden pb-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 left-0 w-80 h-80 bg-accent-500 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <Heart className="w-8 h-8 text-primary-400" />
                <BookOpen className="w-4 h-4 absolute -bottom-1 -right-1 text-accent-400" />
              </div>
              <span className="text-xl font-bold font-serif">Romance Stories</span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Crafting passionate love stories that capture hearts and souls. 
              Creating worlds where love conquers all and dreams come true.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-primary-400" />
                <span className="text-sm">hello@romanceauthor.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-primary-400" />
                <span className="text-sm">Bangkok, Thailand</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <motion.button
                    onClick={() => scrollToSection(item.href)}
                    whileHover={{ x: 5 }}
                    className="text-gray-300 hover:text-primary-400 transition-all duration-300 text-sm"
                  >
                    {item.name}
                  </motion.button>
                </li>
              ))}
              <li>
                <motion.a
                  href="https://klik-movies.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="text-gray-300 hover:text-primary-400 transition-all duration-300 text-sm"
                >
                  Browse Books
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Book Categories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6 text-white">Romance Genres</h3>
            <ul className="space-y-3">
              {bookCategories.map((category) => (
                <li key={category}>
                  <motion.a
                    href="https://klik-movies.site/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="text-gray-300 hover:text-primary-400 transition-all duration-300 text-sm flex items-center"
                  >
                    <Heart className="w-3 h-3 mr-2 text-primary-400" />
                    {category}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6 text-white">Stay Connected</h3>
            
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Get notified about new releases, exclusive content, and behind-the-scenes insights into my writing process.
            </p>
            
            <div className="mb-8">
              <motion.a
                href="https://klik-movies.site/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Latest Releases
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary-500 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8 pb-4"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 เต็มเรื่องเต็มเรื่องเต็มเรื่องเต็มเรื่องเต็มเรื่องเต็มเรื่อง2025. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Criado com <em><a href="https://papum.ai" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors">Papum</a></em>
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-primary-500 hover:bg-primary-600 rounded-lg flex items-center justify-center text-white transition-all duration-300 hover:shadow-lg"
                aria-label="Back to top"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
              
              <div className="hidden md:flex items-center space-x-4 text-xs text-gray-400">
                <motion.a 
                  href="#" 
                  whileHover={{ scale: 1.05 }}
                  className="hover:text-primary-400 transition-colors"
                >
                  Privacy Policy
                </motion.a>
                <span>•</span>
                <motion.a 
                  href="#" 
                  whileHover={{ scale: 1.05 }}
                  className="hover:text-primary-400 transition-colors"
                >
                  Terms of Service
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
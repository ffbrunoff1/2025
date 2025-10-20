import React from 'react'
import { motion } from 'framer-motion'
import { Star, BookOpen, Heart, Download, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <Star className="w-4 h-4 text-accent-300 mr-2" />
              <span className="text-white text-sm font-medium">Bestselling Romance Author</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 font-serif"
            >
              เต็มเรื่องเต็มเรื่อง
              <br />
              <span className="gradient-text bg-gradient-to-r from-accent-300 to-white bg-clip-text text-transparent">
                เต็มเรื่องเต็มเรื่อง2025
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
            >
              Crafting passionate love stories that capture hearts and souls. 
              Specializing in <span className="text-accent-300 font-semibold">เต็มเรื่องเต็มเรื่องเต็มเรื่องเต็มเรื่องเต็มเรื่องเต็มเรื่องเต็มเรื่องเต็มเรื่องเต็มเรื่อง</span> 
              that transport readers to worlds of romance and adventure.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-6 mb-8"
            >
              <div className="flex items-center text-white">
                <BookOpen className="w-5 h-5 text-accent-300 mr-2" />
                <span className="font-semibold">15+ Published Books</span>
              </div>
              <div className="flex items-center text-white">
                <Heart className="w-5 h-5 text-accent-300 mr-2" />
                <span className="font-semibold">500K+ Happy Readers</span>
              </div>
              <div className="flex items-center text-white">
                <Star className="w-5 h-5 text-accent-300 mr-2" />
                <span className="font-semibold">4.8 Average Rating</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="https://klik-movies.site/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-xl"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Read Latest Novel
              </motion.a>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:bg-white/20"
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="w-5 h-5 mr-2" />
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              {/* Book Cover Mockup */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                className="relative mx-auto w-64 h-96 bg-gradient-to-br from-white to-gray-100 rounded-lg shadow-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-white font-serif text-2xl font-bold mb-2">Latest Romance</h3>
                    <p className="text-white/80 text-sm">A passionate tale of love and destiny</p>
                  </div>
                  
                  <div className="text-center">
                    <Heart className="w-16 h-16 text-white/30 mx-auto mb-4" />
                    <p className="text-white font-bold text-lg">เต็มเรื่องเต็มเรื่อง2025</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-accent-300 fill-current" />
                      ))}
                    </div>
                    <p className="text-white/80 text-xs text-center">Bestseller • Romance</p>
                  </div>
                </div>
                
                {/* Shine Effect */}
                <motion.div
                  animate={{
                    x: [-100, 300],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 bg-accent-400 text-white p-3 rounded-full shadow-lg"
              >
                <Heart className="w-6 h-6" />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -left-4 bg-white text-primary-600 p-3 rounded-full shadow-lg"
              >
                <BookOpen className="w-6 h-6" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
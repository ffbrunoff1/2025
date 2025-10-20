import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Heart, Award, Users, Quote, Star, Pen, Coffee } from 'lucide-react'

export default function About() {
  const achievements = [
    {
      icon: BookOpen,
      number: "15+",
      label: "Published Novels",
      description: "Captivating romance stories that have touched millions"
    },
    {
      icon: Users,
      number: "500K+",
      label: "Devoted Readers",
      description: "A growing community of romance enthusiasts worldwide"
    },
    {
      icon: Award,
      number: "12",
      label: "Literary Awards",
      description: "Recognition for outstanding contribution to romance literature"
    },
    {
      icon: Star,
      number: "4.8",
      label: "Average Rating",
      description: "Consistently high ratings across all published works"
    }
  ]

  const timeline = [
    {
      year: "2018",
      title: "Literary Journey Begins",
      description: "Published first romance novel 'Hearts Entwined' to critical acclaim"
    },
    {
      year: "2020",
      title: "Breakthrough Success",
      description: "Third novel becomes international bestseller, translated into 8 languages"
    },
    {
      year: "2022",
      title: "Award Recognition",
      description: "Received Romance Writers Association's Excellence Award"
    },
    {
      year: "2024",
      title: "Global Impact",
      description: "Established romance writing mentorship program for aspiring authors"
    }
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500 to-accent-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center bg-primary-100 text-primary-600 px-4 py-2 rounded-full mb-4"
          >
            <Heart className="w-4 h-4 mr-2" />
            <span className="font-medium">About the Author</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Crafting Love Stories That 
            <span className="gradient-text"> Touch Hearts</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With a passion for storytelling and a deep understanding of human emotions, 
            I create romance novels that resonate with readers across the globe.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Author Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Quote */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 mb-8"
              >
                <Quote className="w-12 h-12 text-primary-300 mb-4" />
                <blockquote className="text-lg text-gray-700 leading-relaxed mb-4 italic">
                  "Every love story deserves to be told with passion, authenticity, and the magic 
                  that makes hearts flutter. My mission is to create worlds where love conquers all 
                  and dreams come true."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mr-4">
                    <Pen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">เต็มเรื่องเต็มเรื่องเต็มเรื่องเต็มเรื่องเต็มเรื่องเต็มเรื่อง2025</p>
                    <p className="text-sm text-gray-500">Romance Author</p>
                  </div>
                </div>
              </motion.div>

              {/* Bio */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="space-y-4 text-gray-600 leading-relaxed"
              >
                <p>
                  Born in Bangkok with a heart full of stories, I discovered my passion for writing 
                  at an early age. What started as journaling about everyday emotions evolved into 
                  crafting intricate tales of love, passion, and human connection.
                </p>
                
                <p>
                  My specialty lies in <strong className="text-primary-600">เต็มเรื่องเต็มเรื่องเต็มเรื่องเต็มเรื่องเต็มเรื่องเต็มเรื่องเต็มเรื่องเต็มเรื่องเต็มเรื่อง</strong>, 
                  where I blend contemporary romance with timeless themes of love, growth, and self-discovery. 
                  Each story is carefully crafted to not just entertain, but to touch the deepest parts of the heart.
                </p>

                <p>
                  When I'm not writing, you'll find me exploring new coffee shops, reading classic literature, 
                  or traveling to gather inspiration for my next novel. I believe that the best love stories 
                  come from real experiences and genuine emotions.
                </p>
              </motion.div>

              {/* Personal Touches */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-wrap gap-4 mt-8"
              >
                <div className="flex items-center bg-primary-50 text-primary-700 px-4 py-2 rounded-lg">
                  <Coffee className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Coffee Enthusiast</span>
                </div>
                <div className="flex items-center bg-accent-50 text-accent-700 px-4 py-2 rounded-lg">
                  <BookOpen className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Literature Lover</span>
                </div>
                <div className="flex items-center bg-secondary-50 text-secondary-700 px-4 py-2 rounded-lg">
                  <Heart className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Hopeless Romantic</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full mb-4">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</h3>
                    <h4 className="font-semibold text-gray-700 mb-2">{achievement.label}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{achievement.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 font-serif">My Literary Journey</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From debut novel to international recognition, here are the milestones that shaped my career
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-300 to-accent-300 rounded-full"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                      <span className="inline-block bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                        {item.year}
                      </span>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 flex items-center justify-center w-4 h-4 bg-white border-4 border-primary-500 rounded-full"></div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
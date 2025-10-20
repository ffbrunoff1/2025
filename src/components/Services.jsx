import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Heart, Star, Download, ArrowRight, Clock, Globe, Award } from 'lucide-react'

export default function Services() {
  const genres = [
    {
      title: "Contemporary Romance",
      description: "Modern love stories set in today's world, exploring relationships in the digital age",
      icon: Heart,
      features: ["Modern settings", "Relatable characters", "Current themes", "Emotional depth"]
    },
    {
      title: "Historical Romance",
      description: "Passionate tales set in bygone eras, where love transcends time and social barriers",
      icon: BookOpen,
      features: ["Period accuracy", "Rich settings", "Complex plots", "Timeless themes"]
    },
    {
      title: "Fantasy Romance",
      description: "Magical worlds where love conquers all, blending romance with supernatural elements",
      icon: Star,
      features: ["Mythical creatures", "Magic systems", "World building", "Epic adventures"]
    }
  ]

  const featuredBooks = [
    {
      title: "Hearts Entwined",
      category: "Contemporary Romance",
      rating: 4.9,
      readers: "125K",
      description: "A passionate story of second chances and finding love when you least expect it",
      tags: ["Bestseller", "Award Winner", "Fan Favorite"]
    },
    {
      title: "Whispers of Yesterday",
      category: "Historical Romance",
      rating: 4.8,
      readers: "98K",
      description: "Set in 19th century Paris, a tale of forbidden love that defies social conventions",
      tags: ["Historical Fiction", "Drama", "Romance"]
    },
    {
      title: "Moonlight Serenade",
      category: "Fantasy Romance",
      rating: 4.7,
      readers: "87K",
      description: "When a mortal falls for an immortal guardian, their love threatens both worlds",
      tags: ["Fantasy", "Supernatural", "Adventure"]
    }
  ]

  const services = [
    {
      title: "Custom Romance Novels",
      description: "Personalized love stories crafted to your specifications and preferences",
      icon: BookOpen,
      price: "Starting at $2,999",
      features: ["Personalized plot", "Character development", "Professional editing", "Cover design"]
    },
    {
      title: "Writing Workshops",
      description: "Learn the art of romance writing from an experienced bestselling author",
      icon: Award,
      price: "From $299/session",
      features: ["One-on-one mentoring", "Group workshops", "Manuscript review", "Publishing guidance"]
    },
    {
      title: "Book Consultations",
      description: "Get expert advice on your romance manuscript and publishing strategy",
      icon: Globe,
      price: "$199/hour",
      features: ["Manuscript critique", "Plot development", "Character analysis", "Market insights"]
    }
  ]

  return (
    <section id="services" className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.02, 0.05, 0.02],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-0 left-0 w-80 h-80 bg-accent-500 rounded-full blur-3xl"
        />
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
            className="inline-flex items-center bg-primary-100 text-primary-600 px-4 py-2 rounded-full mb-6"
          >
            <BookOpen className="w-4 h-4 mr-2" />
            <span className="font-medium">Literary Works & Services</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Immerse Yourself in 
            <span className="gradient-text"> Romance</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my collection of romance novels and discover the services that bring love stories to life
          </p>
        </motion.div>

        {/* Genre Categories */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-900 text-center mb-12 font-serif"
          >
            Romance Genres I Specialize In
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {genres.map((genre, index) => {
              const IconComponent = genre.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full mb-6">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">{genre.title}</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">{genre.description}</p>
                  
                  <ul className="space-y-2">
                    {genre.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                        <Heart className="w-3 h-3 text-primary-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Featured Books */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-900 text-center mb-12 font-serif"
          >
            Featured Romance Novels
          </motion.h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredBooks.map((book, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="h-48 bg-gradient-to-br from-primary-500 to-accent-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-white/70" />
                  </div>
                  
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {book.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-primary-600 font-medium">{book.category}</span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      {book.rating}
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{book.title}</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">{book.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Globe className="w-4 h-4 mr-1" />
                      {book.readers} readers
                    </div>
                    
                    <motion.a
                      href="https://klik-movies.site/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300"
                    >
                      Read Now
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-900 text-center mb-12 font-serif"
          >
            Professional Writing Services
          </motion.h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gradient-to-br from-white to-primary-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full mb-6">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-2xl font-bold text-primary-600">{service.price}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <Heart className="w-4 h-4 text-primary-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full btn-primary"
                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Learn More
                  </motion.button>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
              Ready to Dive Into Romance?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Discover passionate love stories that will captivate your heart and transport you to worlds of romance
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://klik-movies.site/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-lg"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Start Reading Now
              </motion.a>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:bg-white/20"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Heart className="w-5 h-5 mr-2" />
                Get in Touch
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
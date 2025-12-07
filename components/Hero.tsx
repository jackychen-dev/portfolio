'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 sm:pt-20 pb-8 sm:pb-10 px-4 sm:px-6 section-level-1 hero-shadow relative z-0">
      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 sm:mb-8 relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 animate-pulse"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-black shadow-xl">
             {/* Placeholder for the image you uploaded. Ensure 'profile.jpg' is in the public folder */}
            <Image 
              src="/profile.jpg" 
              alt="Jacky Chen"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 pb-2 leading-tight">
            Jacky Chen
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-gray-200 mb-4 sm:mb-6 px-2">
            Technical Program Manager & Engineer
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto px-4 leading-relaxed"
        >
          Mechanical engineer turned TPM leading hardware, systems, and product programs from concept through delivery.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 px-4"
        >
          <a 
            href="#experience"
            className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 text-base sm:text-lg"
          >
            View Work Experience
          </a>
          <a 
            href="#contact"
            className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-gray-300 dark:border-gray-700 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-900 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 hover:-translate-y-0.5 text-base sm:text-lg"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  )
}



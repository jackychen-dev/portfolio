'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

  return (
    <section className="h-screen flex items-center justify-center pt-16 sm:pt-20 pb-4 sm:pb-6 px-4 sm:px-6 section-level-1 hero-shadow relative z-0 overflow-hidden">
      {/* Gradient fade at bottom to hint at more content */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white/80 dark:from-black/80 via-white/40 dark:via-black/40 to-transparent pointer-events-none z-10"></div>
      <div className="container mx-auto max-w-5xl text-center relative z-10 flex flex-col items-center justify-center h-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-3 sm:mb-4 md:mb-5 relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-56 lg:h-56 xl:w-60 xl:h-60 mx-auto flex-shrink-0"
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
          className="flex-shrink-0"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-6xl font-bold mb-2 sm:mb-2 md:mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 pb-1 leading-tight">
            Jacky Chen
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-3xl xl:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-2 sm:mb-2 md:mb-3 px-2">
            Technical Program Manager & Engineer
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 md:mb-6 max-w-3xl mx-auto px-4 leading-relaxed flex-shrink-0"
        >
          Mechanical engineer turned TPM leading hardware, systems, and product programs from concept through delivery.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 px-4 flex-shrink-0"
        >
          <a 
            href="#experience"
            className="w-full sm:w-auto px-5 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-2.5 md:py-3 lg:py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 text-sm sm:text-base md:text-lg lg:text-lg"
          >
            View Work Experience
          </a>
          <a 
            href="#contact"
            className="w-full sm:w-auto px-5 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-2.5 md:py-3 lg:py-3.5 border-2 border-gray-300 dark:border-gray-700 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-900 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base md:text-lg lg:text-lg"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  )
}



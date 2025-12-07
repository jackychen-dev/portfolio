'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function ScrollArrow() {
  const { scrollYProgress } = useScroll()
  
  // Transform scroll progress to arrow position (moves down as you scroll)
  // Maps scroll progress (0-1) to pixel movement (0-150px)
  const arrowY = useTransform(scrollYProgress, [0, 0.4], [0, 150])
  
  // Fade out as user scrolls past the hero section (after 30% scroll)
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  return (
    <motion.a
      href="#experience"
      initial={{ opacity: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      style={{ 
        y: arrowY,
        opacity: opacity
      }}
      className="fixed bottom-8 right-8 flex flex-col items-center gap-2 z-30 group"
    >
      <motion.div
        animate={{ y: [0, 4, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="flex flex-col items-center gap-1.5"
      >
        <span className="text-xs font-medium tracking-wider uppercase text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          Explore
        </span>
        <ChevronDown 
          size={24} 
          className="text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" 
        />
      </motion.div>
    </motion.a>
  )
}


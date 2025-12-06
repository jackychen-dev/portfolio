'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-neutral-900">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8"
        >
          Get In Touch
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-start gap-8 mx-auto"
        >
          <a href="mailto:jackychen273@gmail.com" className="flex flex-col items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group">
            <div className="p-4 bg-white dark:bg-neutral-800 rounded-full shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
              <Mail size={32} />
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="font-medium">Email Me</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">jackychen273@gmail.com</span>
            </div>
          </a>
          
          <a href="tel:+15102299668" className="flex flex-col items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group">
            <div className="p-4 bg-white dark:bg-neutral-800 rounded-full shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
              <Phone size={32} />
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="font-medium">Call Me</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">(510) 229-9668</span>
            </div>
          </a>
          
          <a href="https://www.linkedin.com/in/jchenl/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group">
            <div className="p-4 bg-white dark:bg-neutral-800 rounded-full shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
              <Linkedin size={32} />
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="font-medium">LinkedIn</span>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

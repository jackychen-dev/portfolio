'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    id: 'eclipse-automation', // Added ID for potential future deep dive
    title: 'Tesla Model-Y Automation Line',
    category: 'Professional Program Management',
    description: 'Managed a $10M automation program for door-hinge assembly. Orchestrated system architecture, mechanical integration, and vendor coordination under tight deadlines.',
    tags: ['Project Management', 'Automation', 'Risk Management'],
    link: '/experience/eclipse' // Linking to Eclipse placeholder
  },
  {
    id: 'cellfe-device',
    title: 'High-Throughput Transfection Device',
    category: 'Professional Engineering Design',
    description: 'Led end-to-end design of a microfluidic device increasing cell processing by 100x. Integrated complex fluid dynamics with injection-molded components.',
    tags: ['SolidWorks', 'Microfluidics', 'Injection Molding', 'FEA'],
    link: '/experience/cellfe' // Linking to the detailed CellFE deep dive
  },
  {
    id: 'lithos-battery',
    title: 'Battery Pack Optimization',
    category: 'R&D Engineering',
    description: 'Developed custom fixtures to evaluate sealing adhesives for marine battery packs. Reduced capacitor plate failures by 45% through rigorous testing.',
    tags: ['Testing', 'Data Analysis', 'Battery Tech'],
    link: '/experience/lithos' // Linking to Lithos placeholder
  },
  {
    id: 'envest-chair',
    title: 'Automated Smart Chair Drivetrain',
    category: 'Mechatronics Development',
    description: 'Prototyped drivetrain for an automated chair. Optimized gear geometry for efficiency and durability using iterative design analysis.',
    tags: ['Mechatronics', 'Prototyping', 'Gear Design'],
    link: '/experience/envest' // Linking to Envest placeholder
  }
]

export default function Initiatives() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-neutral-900">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Key Technical Initiatives
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto"
        >
          Select highlights of professional engineering and program management deliverables driven from concept to production.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Link href={project.link} key={index} className="block group h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-black border border-gray-100 dark:border-neutral-800 rounded-2xl p-8 hover:border-blue-500 transition-colors h-full flex flex-col shadow-sm hover:shadow-lg"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">{project.category}</span>
                    <h3 className="text-2xl font-bold mt-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                  </div>
                  <ArrowRight className="text-gray-300 group-hover:text-blue-500 transition-colors opacity-0 group-hover:opacity-100" size={24} />
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-neutral-800 text-sm rounded-full text-gray-700 dark:text-gray-300">
                      <CheckCircle2 size={12} className="text-blue-500" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="mt-6 text-blue-600 text-sm font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  View Project Details <ArrowRight size={14} className="ml-1" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

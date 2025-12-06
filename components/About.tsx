'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: "Mechanical Engineering",
    skills: ["System Design", "Rapid Prototyping", "3D Printing", "SolidWorks", "Inventor", "Creo", "Iterative Design", "FEA", "CFD (COMSOL)", "Injection Molding", "In-house Molding", "DFM/DFA", "GD&T", "Microfluidics", "Mechatronics"]
  },
  {
    title: "Technical Program Management",
    skills: ["Strategic Planning", "End-to-End Execution", "Cross-functional Leadership", "Risk Mitigation", "Agile & Scrum", "Stakeholder Alignment", "Vendor Management", "Resource Allocation", "KPI Tracking", "Jira", "Smartsheet", "MS Project", "Custom Tool Development"]
  },
  {
    title: "Software & Analysis",
    skills: ["Python", "MATLAB", "C/C++", "VBA", "Data Analysis"]
  }
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-neutral-900">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Technical Capabilities</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A hybrid skillset shaped by hands-on engineering, systems thinking, and full-lifecycle program execution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-black p-8 rounded-2xl border-2 border-gray-200 dark:border-neutral-800 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Subtle gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <h3 className="text-xl font-bold mb-6 text-blue-600 dark:text-blue-400 relative z-10">{category.title}</h3>
              <div className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-gray-100 dark:bg-neutral-800 rounded-lg text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 border border-transparent hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-200">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

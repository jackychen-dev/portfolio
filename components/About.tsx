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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Technical Skills</h2>
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
              className="bg-white dark:bg-black p-8 rounded-2xl border-2 border-gray-300 dark:border-neutral-700 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-6 text-blue-600">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-gray-100 dark:bg-neutral-800 rounded-lg text-sm font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200 cursor-default">
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

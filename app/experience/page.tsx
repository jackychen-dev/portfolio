'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

const experiences = [
  {
    company: "Eclipse Automation",
    role: "Technical Program Manager",
    period: "Jan 2025 - Present",
    location: "Canada",
    description: [
      "Drove cross-functional execution for the Tesla Model-Y door-hinge automation line, managing system architecture, mechanical integration, and vendor coordination on a $10M program under tight timelines.",
      "Resolved a critical project bottleneck by creating a regression-based machining offset model, correcting tolerancing issues, reducing machining range by 25%, and ensuring contractual compliance.",
      "Built a custom coded framework with weighted task tracking and velocity charts, enabling clear definition of new work and accurate week-over-week progress tracking during system integration.",
      "Negotiated scope changes with the customer through data-backed trade-offs, protecting cost and schedule while saving $500K in costs.",
      "Reported directly to Eclipse's CEO and executive leadership team, escalating risks and delivering concise, data-driven updates on cycle-time, quality, and program status."
    ]
  },
  {
    company: "Cell Fluidics Engineering",
    role: "Mechanical Engineer",
    period: "Mar 2023 - Feb 2025",
    location: "San Francisco Bay Area",
    description: [
      "Led the end-to-end mechanical design of a high-throughput transfection device, successfully scaling technology from 1M cells/chip to high-volume processing by stacking 206-channel microfluidic chips.",
      "Solved critical failure modes (silicon chip cracking and gasket blowout) by transitioning from off-the-shelf 2D gaskets to custom 3D injection-molded gaskets with optimized ridge geometry and 0.4mm corner fillets.",
      "Conducted rigorous regression testing on gasket compression (target 19%) and shore hardness (60A vs 70A), achieving a 0% leakage failure rate across 5-stack chip assemblies.",
      "Optimized fluid dynamics by designing a custom diffuser to eliminate air spikes/splashing and a lofted bottom funnel to minimize dead volume, verified via water flow testing and CFD.",
      "Directed electromechanical integration, resolving initial biocompatibility issues (switching from ethanol-soaked 3D prints to machined/autoclaved parts) to achieve transfection parity with legacy devices."
    ],
    images: [
      { src: '/cellfe-chip.jpg', alt: 'High Volume Microfluidic Chip Design' },
      { src: '/cellfe-gasket.jpg', alt: 'Custom 3D Injection Molded Gaskets' },
      { src: '/cellfe-testing.jpg', alt: 'Pressure Testing Fixture & Results' }
    ]
  },
  {
    company: "Lithos Energy",
    role: "Mechanical Design Engineer",
    period: "Sept 2022 - Mar 2023",
    location: "San Francisco Bay Area",
    description: [
      "Designed and tested battery packs for low-voltage marine applications; developed custom fixtures and experiments to evaluate sealing adhesives under mechanical stresses (3-point bending, shear, 90° peel), reducing capacitor plate failures by 45%.",
      "Identified critical failure points during burst testing and applied FEA to design a controlled weak point, enhancing safety and performance in high-stress environments.",
      "Collaborated with suppliers to review DFM reports and perform first article inspections, ensuring compliance with manufacturing specifications.",
      "Developed standardized manufacturing instructions and processes for in-house battery pack production, ensuring consistent assembly, process efficiency, and high-volume manufacturability."
    ]
  },
  {
    company: "Envest Product Development",
    role: "Product Development Engineer Internship",
    period: "Summer 2021",
    location: "Canada",
    description: [
      "Developed and prototyped the drivetrain for a fully automated smart chair, applying FEA and iterative design analysis to refine gear geometry for optimal efficiency, strength, and durability.",
      "Designed snap-fit, injection-molded sensor enclosures for client companies to enable reliable, high-volume assembly with secure mounting and multi-surface adhesive compatibility."
    ]
  }
]

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navbar />
      <div className="container mx-auto px-6 py-32">
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:underline mb-6">
            <ArrowLeft size={16} className="mr-2" /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Work Experience Deep Dive</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Detailed breakdown of engineering challenges, program management achievements, and technical deliverables.
          </p>
        </div>

        <div className="space-y-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 dark:bg-neutral-900 rounded-3xl p-8 md:p-12 shadow-sm"
            >
              <div className="md:flex justify-between items-start mb-8 border-b border-gray-200 dark:border-neutral-800 pb-8">
                <div>
                  <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{exp.company}</h2>
                  <h3 className="text-2xl font-semibold">{exp.role}</h3>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <div className="flex items-center justify-end gap-2 text-gray-600 dark:text-gray-400 mb-1">
                    <Calendar size={18} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center justify-end gap-2 text-gray-600 dark:text-gray-400">
                    <MapPin size={18} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-12 gap-12">
                <div className="md:col-span-8">
                  <h4 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-500">Key Achievements</h4>
                  <ul className="space-y-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start group">
                        <span className="mr-4 mt-2 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform"></span>
                        <span className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {exp.images && (
                  <div className="md:col-span-4 space-y-4">
                    <h4 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-500">Gallery</h4>
                    {exp.images.map((img, i) => (
                      <div key={i} className="relative h-48 w-full rounded-xl overflow-hidden border border-gray-200 dark:border-neutral-800 shadow-md hover:shadow-xl transition-all cursor-pointer group">
                        <Image 
                          src={img.src} 
                          alt={img.alt}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                           <span className="text-white text-sm font-medium">{img.alt}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}


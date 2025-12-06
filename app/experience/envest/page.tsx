'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, MapPin, ArrowLeft, Settings, Component, Armchair, Wifi, Wrench, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function EnvestPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const smartChairImages = [
    { src: "/en_1.jpg", alt: "Smart Chair Prototype" },
    { src: "/en_2.jpg", alt: "Mechanism Detail" },
    { src: "/en_3.jpg", alt: "Assembly View" }
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % smartChairImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + smartChairImages.length) % smartChairImages.length)
  }

  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navbar />
      
      {/* Header */}
      <div className="relative pt-32 pb-20 bg-gray-50 dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <Link href="/#experience" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-6 transition-colors">
                <ArrowLeft size={16} className="mr-2" /> Back to Experience
              </Link>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Envest Product Development</h1>
                <div className="flex flex-wrap items-center gap-6 text-lg text-gray-600 dark:text-gray-400">
                  <span className="font-semibold text-blue-600 dark:text-blue-400">Product Development Engineer</span>
                  <span className="flex items-center gap-2"><Calendar size={18} /> May 2021 - Aug 2021</span>
                  <span className="flex items-center gap-2"><MapPin size={18} /> Toronto, ON</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 space-y-24">
        
        {/* 1. Background */}
        <section className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Settings className="text-gray-600" /> Engineering Consulting & Autonomy
          </h2>
          <div className="prose dark:prose-invert text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            <p>
              Envest is an engineering consulting firm specializing in product development and supply chain sourcing for a diverse range of clients, from single-person startups to large multinational corporations.
            </p>
            <p>
              My time here was defined by high autonomy and responsibility. As part of a lean engineering team, I personally managed several projects with tight deadlines. While the environment was high-pressure, it accelerated my learning curve significantly, offering my first deep exposure to industrial-level assembly and client management.
            </p>
          </div>
        </section>

        {/* 2. Smart Chair Project */}
        <section className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-7">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Armchair className="text-blue-600" /> The Smart Chair Project
            </h2>
            <div className="prose dark:prose-invert text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>
                My primary initiative was the design of an ergonomic "Smart Chair" that automatically adjusted to the user's optimal sitting posture. This was a complex electromechanical assembly requiring extensive cross-disciplinary engineering.
              </p>
              <div className="bg-gray-50 dark:bg-neutral-900 p-6 rounded-xl border border-gray-200 dark:border-neutral-800">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Component size={20} className="text-blue-500" /> Key Engineering Contributions
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span><strong>Drivetrain Design:</strong> Designed and iteratively prototyped the electromechanical drivetrain to achieve smooth, automated adjustment. The system utilized a single motor to drive five independent actuations through a ball bearing locking mechanism, which required extensive iterative prototyping to optimize the geometry for reliable engagement and disengagement.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span><strong>FEA Analysis:</strong> Conducted structural analysis on critical load-bearing components to validate safety factors and prevent failure.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span><strong>Tolerance Analysis:</strong> Performed detailed tolerance stack-ups for the entire assembly to ensure proper fit and function.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span><strong>Supply Chain:</strong> Managed sourcing for mass manufacturing, bridging the gap between prototype and production.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Image Carousel */}
          <div className="md:col-span-5">
             <div className="relative w-full aspect-[4/3] bg-gray-100 dark:bg-neutral-900 rounded-2xl border border-gray-200 dark:border-neutral-800 overflow-hidden shadow-lg group">
               <AnimatePresence mode="wait">
                 <motion.div
                   key={currentImageIndex}
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   transition={{ duration: 0.3 }}
                   className="absolute inset-0 bg-white dark:bg-neutral-800"
                 >
                   <Image 
                     src={smartChairImages[currentImageIndex].src} 
                     alt={smartChairImages[currentImageIndex].alt}
                     fill
                     className="object-contain"
                   />
                   {/* Placeholder overlay if image missing */}
                   <div className="absolute inset-0 flex items-center justify-center -z-10 bg-gray-200 dark:bg-neutral-800">
                      <p className="text-gray-400 italic">Image {currentImageIndex + 1}</p>
                   </div>
                 </motion.div>
               </AnimatePresence>
               
               {/* Navigation Buttons */}
               <button 
                 onClick={prevImage}
                 className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 dark:bg-black/50 rounded-full hover:bg-white dark:hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100 z-10"
                 aria-label="Previous image"
               >
                 <ChevronLeft size={24} />
               </button>
               <button 
                 onClick={nextImage}
                 className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 dark:bg-black/50 rounded-full hover:bg-white dark:hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100 z-10"
                 aria-label="Next image"
               >
                 <ChevronRight size={24} />
               </button>

               {/* Dots Indicator */}
               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                 {smartChairImages.map((_, idx) => (
                   <div 
                     key={idx}
                     className={`w-2 h-2 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'}`}
                   />
                  ))}
               </div>
             </div>
          </div>
        </section>

        {/* 3. Sheet Metal & Materials */}
        <section className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5 relative bg-gray-100 dark:bg-neutral-900 rounded-2xl aspect-[4/3] overflow-hidden border border-gray-200 dark:border-neutral-800 shadow-lg self-start -mt-4">
             <Image 
               src="/en_4.jpg" 
               alt="Sheet Metal Bracket"
               fill
               className="object-contain p-4"
             />
          </div>
          <div className="md:col-span-7">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Wrench className="text-orange-500" /> Sheet Metal & Material Science
            </h2>
            <div className="prose dark:prose-invert text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>
                Beyond plastic enclosures, I designed structural brackets which introduced me to the nuances of <strong>sheet metal fabrication</strong>.
              </p>
              <p>
                <strong>The Challenge:</strong> One critical bracket was experiencing plastic deformation after repeated cycling in the field.
              </p>
              <p>
                <strong>The Solution:</strong> I performed a root cause analysis and redesigned the bracket geometry to better distribute stress. Additionally, I researched and specified higher-grade steels and strain hardening methods. By leveraging material properties (work hardening) alongside geometric improvements, I eliminated the deformation issue and extended the component's fatigue life.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Sensor Housing & Manufacturing */}
        <section className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Wifi className="text-purple-600" /> Sensor Housing Design
          </h2>
          <div className="prose dark:prose-invert text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
            <p>
              I led the design of sensor enclosures for hardware clients like <strong>Mero Technologies</strong>. This process followed a rigorous development cycle:
            </p>
            <ol className="list-decimal pl-5 space-y-2 marker:text-purple-600 marker:font-bold">
              <li><strong>Rapid Prototyping:</strong> Initial design and 3D printing (FDM/SLA) to verify form, fit, and function.</li>
              <li><strong>Client Validation:</strong> Shipping physical prototypes to clients for field testing and feedback.</li>
              <li><strong>Design for Manufacturing (DFM):</strong> Converting the validated prototype into an injection-moldable design, including draft angles, wall thickness optimization, and boss design.</li>
              <li><strong>Sourcing:</strong> Establishing supply chain channels for mass production.</li>
            </ol>
          </div>
        </section>

      </div>
    </main>
  )
}

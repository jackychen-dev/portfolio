'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, MapPin, ArrowLeft, Brain, TrendingUp, Users, AlertTriangle, ClipboardCheck, PlayCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function EclipsePage() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  
  // Slideshow images provided by user
  const projectVideos = [
    { id: 1, src: "/tpm_1.jpeg" },
    { id: 2, src: "/tpm_2.jpeg" }
  ]

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % projectVideos.length)
  }

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + projectVideos.length) % projectVideos.length)
  }

  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navbar />
      
      {/* Header */}
      <div className="relative pt-32 pb-20 bg-gray-50 dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <Link href="/#experience" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-6 transition-colors">
              <ArrowLeft size={16} className="mr-2" /> Back to Experience
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-2xl md:text-4xl font-bold mb-4">Tesla Model-Y Automation Line</h1>
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                <span className="font-semibold text-blue-600 dark:text-blue-400">Technical Program Manager</span>
                <span className="flex items-center gap-2"><Calendar size={18} /> Feb 2025 - Present</span>
                <span className="flex items-center gap-2"><MapPin size={18} /> Canada</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 space-y-16 max-w-4xl">
        
        {/* Overview */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-xl font-bold flex items-center gap-3">
              <Brain className="text-blue-600" /> Program Overview
            </h2>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full">
              Ongoing Role - More to Come
            </span>
          </div>
          <div className="prose prose-sm dark:prose-invert text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              I drove cross-functional execution for the <strong>Tesla Model-Y door-hinge automation line</strong>, a $10M program with critical strategic importance. My role involved managing system architecture, mechanical integration, and vendor coordination under extremely tight timelines to ensure successful delivery from design through onsite integration.
            </p>
          </div>
        </section>

        {/* Project Media Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <PlayCircle className="text-red-600" /> Project Media
          </h2>
          
          {/* Main Video Player */}
          <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
            <video 
              controls 
              className="w-full h-full object-contain"
              poster="/tpm_m_poster.jpg" 
            >
              <source src="/tpm_m.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Image Slideshow (Lithos Style) */}
          <div className="relative">
            <div className="relative w-full aspect-video bg-gray-100 dark:bg-neutral-900 rounded-2xl border border-gray-200 dark:border-neutral-800 overflow-hidden shadow-lg group">
               <AnimatePresence mode="wait">
                 <motion.div
                   key={currentVideoIndex}
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   transition={{ duration: 0.3 }}
                   className="absolute inset-0 bg-white dark:bg-neutral-800"
                 >
                   <Image 
                     src={projectVideos[currentVideoIndex].src}
                     alt={`Eclipse Project Image ${currentVideoIndex + 1}`}
                     fill
                     className="object-contain p-4"
                   />
                 </motion.div>
               </AnimatePresence>
               
               {/* Navigation Buttons */}
               <button 
                 onClick={prevVideo}
                 className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 dark:bg-black/50 rounded-full hover:bg-white dark:hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100 z-10 shadow-md"
               >
                 <ChevronLeft size={24} />
               </button>
               <button 
                 onClick={nextVideo}
                 className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 dark:bg-black/50 rounded-full hover:bg-white dark:hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100 z-10 shadow-md"
               >
                 <ChevronRight size={24} />
               </button>

               {/* Dots Indicator */}
               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                 {projectVideos.map((_, idx) => (
                   <div 
                     key={idx}
                     className={`w-2 h-2 rounded-full transition-colors ${idx === currentVideoIndex ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'}`}
                   />
                 ))}
               </div>
            </div>
          </div>
        </section>

        {/* Key Initiatives */}
        <section className="flex flex-col gap-12">
          <div>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
              <TrendingUp className="text-blue-600" /> Bottleneck Resolution
            </h2>
            <div className="prose dark:prose-invert text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>
                Resolved a critical project bottleneck where final assembly parts were failing tolerance checks, specifically at the dowel locations in the Y direction. Due to significant part variation, consistent clamping was impossible, leading to machining errors.
              </p>
              <p>
                I developed a <strong>regression-based machining offset model</strong> using airgap sensors to analyze the part's tilt and seating position. This allowed for intelligent, dynamic adjustment of machining parameters, correcting systemic tolerancing issues and reducing the machining range by 25% while ensuring we complied with our contract.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
              <ClipboardCheck className="text-emerald-600" /> Custom Tracking Framework
            </h2>
            <div className="prose dark:prose-invert text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>
                Architected and built a custom project management framework using weighted task tracking and automated velocity charts. This tool provided granular visibility into the system integration phase, enabling the team to clearly define new work packages, accurately track week-over-week progress, and predict schedule slips before they impacted the critical path.
              </p>
              <p>
                The framework became the single source of truth for cross-functional alignment, facilitating better resource allocation and risk mitigation during the high-pressure ramp-up phase.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
              <Users className="text-purple-600" /> Strategic Negotiation
            </h2>
            <div className="prose prose-sm dark:prose-invert text-gray-700 dark:text-gray-300 leading-relaxed">
              <p className="mb-4">
                Negotiated scope changes with the customer through data-backed trade-offs, protecting cost and schedule while saving <strong>$500K in costs</strong>.
              </p>
              <p>
                Example: The initial plan relied on an LMI laser scanner to measure the forged body relative to a fiducial representing the door leaf. However, this proved unreliable because the part would "walk" or shift at each station when engaged by the toggle clamps. I validated an alternative approach using airgap sensors, proving that parts seated within specific thresholds (based on airgap data and surface flatness) would guarantee machining accuracy, securing customer buy-in for this robust solution.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
              <AlertTriangle className="text-orange-600" /> Executive Reporting
            </h2>
            <div className="prose prose-sm dark:prose-invert text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Reported directly to Eclipse’s CEO and executive leadership team, escalating risks and delivering concise, data-driven updates on cycle-time, quality, and program status.
              </p>
            </div>
          </div>
        </section>

        {/* More to Come */}
        <section className="text-center pt-12 border-t border-gray-200 dark:border-neutral-800">
          <p className="text-2xl font-semibold text-gray-400 italic">
            More to come...
          </p>
        </section>

      </div>
    </main>
  )
}

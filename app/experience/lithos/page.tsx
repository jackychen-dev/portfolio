'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, ArrowLeft, Battery, ShieldCheck, PenTool, FileSpreadsheet, Zap } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function LithosPage() {
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
                <h1 className="text-3xl md:text-5xl font-bold mb-4">Lithos Energy</h1>
                <div className="flex flex-wrap items-center gap-6 text-base text-gray-600 dark:text-gray-400">
                  <span className="font-semibold text-blue-600 dark:text-blue-400">Mechanical Design Engineer</span>
                  <span className="flex items-center gap-2"><Calendar size={18} /> Sep 2022 - Feb 2023</span>
                  <span className="flex items-center gap-2"><MapPin size={18} /> San Francisco Bay Area</span>
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
            <Battery className="text-green-600" /> Marine Battery R&D
          </h2>
          <div className="prose prose-sm dark:prose-invert text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Lithos Energy designs and manufactures high-performance lithium-ion battery packs for demanding applications. My role focused on the R&D of Low Voltage (LV) battery systems specifically for marine environments, where sealing, durability, and safety are critical.
            </p>
          </div>
        </section>

        {/* 2. Adhesive Qualification */}
        <section className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-7">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <FileSpreadsheet className="text-blue-600" /> Adhesive Validation & Testing
            </h2>
            <div className="prose prose-sm dark:prose-invert text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>
                To ensure the long-term watertight integrity of marine battery packs, I led a comprehensive evaluation of sealing adhesives. This involved designing and fabricating custom test fixtures to isolate specific failure modes.
              </p>
              <p>
                I conducted a rigorous battery of mechanical tests to validate adhesive performance under real-world stress conditions:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0 mt-4">
                <li className="flex items-center gap-2 bg-gray-50 dark:bg-neutral-900 p-3 rounded-lg border border-gray-200 dark:border-neutral-800">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div> 3-Point Bending
                </li>
                <li className="flex items-center gap-2 bg-gray-50 dark:bg-neutral-900 p-3 rounded-lg border border-gray-200 dark:border-neutral-800">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div> Shear Strength
                </li>
                <li className="flex items-center gap-2 bg-gray-50 dark:bg-neutral-900 p-3 rounded-lg border border-gray-200 dark:border-neutral-800">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div> 90-Degree Peel
                </li>
                <li className="flex items-center gap-2 bg-gray-50 dark:bg-neutral-900 p-3 rounded-lg border border-gray-200 dark:border-neutral-800">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div> Drop & Impact
                </li>
              </ul>
              <p className="mt-4">
                The data gathered from these experiments drove the final adhesive selection, optimizing the bond strength vs. flexibility required for thermal expansion and shock absorption.
              </p>
            </div>
          </div>
          <div className="md:col-span-5 bg-gray-100 dark:bg-neutral-900 rounded-2xl aspect-square flex items-center justify-center border border-gray-200 dark:border-neutral-800 overflow-hidden relative shadow-lg">
            <Image 
              src="/LT-1.jpg" 
              alt="Adhesive Testing Fixture"
              fill
              className="object-contain p-4 hover:scale-105 transition-transform duration-500"
            />
          </div>
        </section>

        {/* 3. FEA & Structural Integrity */}
        <section className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5 order-2 md:order-1 bg-gray-100 dark:bg-neutral-900 rounded-2xl aspect-square flex items-center justify-center border border-gray-200 dark:border-neutral-800 overflow-hidden relative shadow-lg">
             <Image 
              src="/LT-2.jpg" 
              alt="FEA Simulation of Battery Enclosure"
              fill
              className="object-contain p-4 hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="md:col-span-7 order-1 md:order-2">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <ShieldCheck className="text-purple-600" /> Structural Optimization (FEA)
            </h2>
            <div className="prose prose-sm dark:prose-invert text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>
                During initial destructive burst testing, the battery pack enclosures failed catastrophically, shattering into dangerous plastic shards. This uncontrolled failure mode posed a significant safety risk.
              </p>
              <p>
                I implemented <strong>Finite Element Analysis (FEA)</strong> to model the internal pressure dynamics and structural response of the enclosure. The objective was not just to strengthen the pack, but to engineer a safe failure mode.
              </p>
              <p className="border-l-4 border-purple-500 pl-4 italic bg-purple-50 dark:bg-purple-900/20 p-4 rounded-r-lg">
                <strong>Solution:</strong> Using FEA, I designed an intentional "weak point" (pressure relief geometry) into the enclosure. This ensured that in an over-pressure event, the pack would vent predictably and safely rather than exploding.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Manufacturing & Rapid Design */}
        <section className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <PenTool className="text-orange-500" /> Manufacturing & Rapid Turnaround
          </h2>
          <div className="prose dark:prose-invert text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
            <p>
              Bridging the gap between design and production, I authored detailed <strong>Manufacturing Instructions (MIs)</strong> and Standard Operating Procedures (SOPs) for assembly associates, ensuring consistent build quality.
            </p>
            <p>
              I also acted as the first line of defense for production issues. When non-conforming parts arrived from vendors or assembly issues arose, I performed <strong>rapid design adjustments</strong>—modifying CAD geometry and tolerance schemes on the fly to keep the production line moving without compromising product performance.
            </p>
          </div>
        </section>

      </div>
    </main>
  )
}

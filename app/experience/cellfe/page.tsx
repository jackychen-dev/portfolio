'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, ArrowLeft, Layers, Activity, AlertTriangle, CheckCircle2, TrendingUp, ImageIcon, FileText, Download, Info, Table as TableIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function CellFEPage() {
  const galleryImages = [
    { src: "/cf_1.jpg", caption: "Scaling Concept" },
    { src: "/cf_3.jpg", caption: "High-Volume Chip Stack" },
    { src: "/cd_4.jpg", caption: "Validation Data" },
    { src: "/cf_6.jpg", caption: "Failure Modes" },
    { src: "/cd_8.jpg", caption: "3D Gasket Design" },
    { src: "/cd_9.jpg", caption: "Optimized Geometry" },
    { src: "/cd_12.jpg", caption: "Final Production" }
  ]

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
                <h1 className="text-4xl md:text-6xl font-bold mb-4">High-Throughput Mechanoporation</h1>
                <div className="flex flex-wrap items-center gap-6 text-lg text-gray-600 dark:text-gray-400">
                  <span className="font-semibold text-blue-600 dark:text-blue-400">Cell Fluidics Engineering</span>
                  <span className="flex items-center gap-2"><Calendar size={18} /> Mar 2023 - Feb 2025</span>
                  <span className="flex items-center gap-2"><MapPin size={18} /> San Francisco Bay Area</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a 
                href="/HV Device.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all hover:scale-105 shadow-lg hover:shadow-blue-500/25 group"
              >
                <FileText size={20} />
                <span>Download Full Report</span>
                <Download size={16} className="opacity-70 group-hover:translate-y-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 space-y-32">
        
        {/* 1. Background & Scaling Challenge (cf_1) */}
        <section className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Info className="text-purple-600" /> Mechanoporation & The Scaling Challenge
            </h2>
            <div className="prose dark:prose-invert text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>
                Mechanoporation is a microfluidic method that uses precise mechanical deformation to deliver material into cells. Cells are pushed through micro-scale constrictions at high velocity, which creates temporary openings in the cell membrane through controlled shear forces. This mechanical approach maintains high cell viability while allowing payloads such as mRNA, CRISPR systems, or proteins to enter the cytoplasm efficiently.
              </p>
              <p>
                <strong>Scaling Constraint:</strong>
              </p>
              <p>
                The legacy device used a two-channel silicon chip. Under biological load, debris and shear events caused rapid clogging, which limited throughput to approximately one million cells per run and made meaningful scale-up impossible.
              </p>
              <p>
                <strong>Engineering Objective:</strong>
              </p>
              <p>
                I led the redesign of the consumable architecture to support more than one hundred million cells per run. This required creating a new <strong>206-channel microfluidic chip</strong> and a scalable sealing and flow distribution system that maintained uniform shear conditions while also providing channel-level redundancy for improved robustness.
              </p>
            </div>
          </div>
          <div className="md:col-span-6">
             <div className="relative aspect-[4/3] bg-gray-100 dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-neutral-800 group">
                <Image 
                  src="/cf_1.jpg" 
                  alt="Legacy vs High Volume Architecture"
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-500"
                />
             </div>
             <p className="text-sm text-center text-gray-500 mt-3 italic max-w-md mx-auto">The architecture evolved from a single 2-channel flow path to a 206-channel parallelized array, demanding precise control of hydraulic resistance and manifold geometry.</p>
          </div>
        </section>

        {/* 2. High-Volume Consumable Chip (cf_3) */}
        <section className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 order-2 md:order-1">
             <div className="relative aspect-[4/3] bg-gray-100 dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-neutral-800 group">
                <Image 
                  src="/cf_3.jpg" 
                  alt="High Volume Consumable Components"
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-500"
                />
             </div>
             <div className="text-sm text-gray-500 mt-3 space-y-1 italic max-w-md mx-auto">
                <p>High Volume Microfluidic Chip, Fluid Flow Path</p>
             </div>
          </div>
          <div className="md:col-span-6 order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Layers className="text-blue-600" /> High-Volume Consumable Chip
            </h2>
            <div className="prose dark:prose-invert text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>
                The high-volume chip includes 206 interconnected through-holes that serve as vertical inlets and outlets for fluid flow. The size of the chip was limited by <strong>photolithography constraints</strong>, since increasing the active area caused the features to drift and lose accuracy. Because of this, scaling the system required a vertical stacking approach that spreads flow across several silicon layers instead of enlarging a single chip.
              </p>
              <p>
                This stacked design created strict requirements for the gasket system. Each gasket had to provide a reliable seal between layers while also directing fluid through a controlled sequence of vertical and horizontal pathways. The final architecture met these needs by pairing high-density through-hole structures with a multilayer gasket design that preserved alignment, maintained uniform flow distribution, and kept the entire stack mechanically stable.
              </p>
            </div>
          </div>
        </section>

        {/* 3. High-Volume Consumable Architecture (cd_4) */}
        <section className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Activity className="text-emerald-600" /> High-Volume Consumable Architecture
            </h2>
            <div className="prose dark:prose-invert text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Component Breakdown</h3>
                <p>
                  The consumable uses a modular polycarbonate housing that integrates the pressure, fill, and pneumatic interfaces. Upstream, an inlet reservoir with a built-in diffuser stabilizes incoming flow and ensures the chip stack receives uniform hydraulic loading across the full processing volume.
                </p>
                <p className="mt-2">
                  At the center, a stack of silicon microfluidic chips is sealed with custom injection-molded gaskets and constrained with precision spacers to maintain consistent channel geometry and sealing pressure.
                </p>
                <p className="mt-2">
                  Downstream, a shaped outlet reservoir with a flow-sensor port manages effluent and reduces dead volume to improve run-to-run measurement stability.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Prototyping & Validation</h3>
                <p>
                  Prototyping involved an extensive cycle of SLA/FDM 3D-printed components for rapid fit, tolerance, and flow testing. However, surface absorption and biocompatibility issues with printed materials ultimately drove a transition to machined polycarbonate for validation units.
                </p>
                <p className="mt-2">
                  I designed a multi-port diagnostic pressure fixture to isolate failures across manifold interfaces, gasket ridges, and chip-to-chip joints, enabling systematic leak debugging across the vertical stack.
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-6">
             <div className="relative aspect-video bg-gray-100 dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-neutral-800 group">
                <Image 
                  src="/cd_4.jpg" 
                  alt="Validation Data Table"
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-500"
                />
             </div>
             <p className="text-sm text-center text-gray-500 mt-3 italic">High-Volume Consumable Architecture</p>
          </div>
        </section>

        {/* 4. The Fracture & Leakage Mechanics Problem (cf_6) */}
        <section className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 order-2 md:order-1">
             <div className="relative aspect-[4/3] bg-gray-100 dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-neutral-800 group">
                <Image 
                  src="/cf_6.jpg" 
                  alt="Early Prototype Failures"
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-500"
                />
             </div>
             <div className="text-sm text-gray-500 mt-3 space-y-1 italic max-w-md mx-auto text-center">
               <p>Custom pressure-diagnostic fixture with a push-to-connect manifold</p>
             </div>
          </div>
          <div className="md:col-span-6 order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <AlertTriangle className="text-orange-500" /> The Fracture & Leakage Mechanics Problem
            </h2>
            <div className="prose dark:prose-invert text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>
                The silicon microfluidic chips were fabricated using DRIE, which produces very high-aspect-ratio channels but also creates a brittle substrate with low fracture toughness. When multiple chips were stacked, the assembly became highly sensitive to uneven clamping, torsion, surface flatness variation, and bending forces from the gasket. Any of these factors could cause cracking.
              </p>

              <p>
                This created a very tight mechanical window. Too little compression resulted in leakage and too much compression caused chip fracture. The usable range between these two failure modes was only a few percent of total gasket deflection, which is much smaller than what standard sealing methods can reliably control.
              </p>

              <p>
                To understand this relationship, I built a custom diagnostic fixture that measured sealing force against both leakage and breakage. The push-to-connect manifold allowed rapid and repeatable testing across a wide range of loading conditions and made it possible to characterize how sealing pressure interacted with chip stress.
              </p>
              
              <div>
                <p className="font-semibold text-gray-900 dark:text-white mb-2">Solution</p>
                <p>
                  Preventing substrate failure required rethinking both structural reinforcement and how the sealing force was applied. The final design introduced reinforced silicon bridge structures and a 3D gasket geometry that concentrated compression only around the fluid paths. This configuration preserved the required sealing pressure while significantly reducing the mechanical load transmitted into the chips. By isolating the chips from bending and torsional forces and lowering the net substrate stress, the multi-chip assembly became far more robust and reliable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. 3D Gasket Innovation (cd_8 & cd_7 combined context) */}
        <section className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <TrendingUp className="text-indigo-600" /> Innovation: 3D Gasket Topology
            </h2>
            <div className="prose dark:prose-invert text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>
                I developed a <strong>3D microstructured gasket</strong> featuring raised sealing ridges that localize compression forces only around fluid paths. This dramatically reduces total contact area - and therefore total required clamp force - while enabling the gasket to conform to micron-scale surface variations.
              </p>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white mb-2">Technical advantages:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Minimizes bending forces transmitted to silicon</li>
                  <li>Maintains seal integrity under high differential pressures</li>
                  <li>Compensates for micro-scale surface unevenness and manufacturing tolerances</li>
                  <li><strong>Optimized Pressure-to-Force Ratio:</strong> By reducing the contact area, we achieved high localized sealing pressure (psi) with significantly lower global clamping force (lbf), effectively decoupling the sealing requirement from the fracture risk.</li>
                </ul>
              </div>
              <p>
                I utilized <strong>FEA (Finite Element Analysis)</strong> to iterate on the fine features of the gasket geometry, optimizing the ridge profile and bridge structures to ensure uniform compression and prevent blowout without creating stress risers.
              </p>
            </div>
          </div>
          <div className="md:col-span-6">
             <div className="relative aspect-[4/3] bg-gray-100 dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-neutral-800 group">
                <Image 
                  src="/cd_8.jpg" 
                  alt="3D Gasket Design"
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-500"
                />
             </div>
             <p className="text-sm text-center text-gray-500 mt-3 italic">3D gasket ridges concentrating sealing force only where needed.</p>
          </div>
        </section>

        {/* 6. Solving Blowout (cd_9) */}
        <section className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 order-2 md:order-1">
             <div className="relative aspect-[4/3] bg-gray-100 dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-neutral-800 group">
                <Image 
                  src="/cd_9.jpg" 
                  alt="Optimized Gasket Geometry"
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-500"
                />
             </div>
             <p className="text-sm text-center text-gray-500 mt-3 italic">Reinforced gasket geometry with locator holes and thicker ridges.</p>
          </div>
          <div className="md:col-span-6 order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <CheckCircle2 className="text-emerald-600" /> Optimizing the 3D Gasket Geometry
            </h2>
            <div className="prose dark:prose-invert text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>
                Early iterations of the 3D gasket experienced ridge "blowout" under high pressure. Through iterative topology refinement, I resolved these issues by:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Increasing ridge thickness to improve flexural rigidity</li>
                <li>Adding structural bridges for lateral reinforcement</li>
                <li>Reducing corner fillet radii to 0.4 mm to eliminate stress risers</li>
                <li>Relocating locator holes horizontally to provide material backing during pressurization</li>
              </ul>
              <p>
                These changes produced a gasket capable of sustaining the required operational pressure envelope.
              </p>
            </div>
          </div>
        </section>

        {/* 7. Validation Data Table */}
        <section className="w-full overflow-x-auto">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <TableIcon className="text-blue-600" /> Validation Data: Sealing Performance
          </h2>
          <div className="prose dark:prose-invert text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 mb-8 max-w-4xl">
            <p>
              I performed a broad set of material characterization tests to determine a safe and reliable sealing window. This included evaluating different silicone rubber formulations and comparing Shore 60A and Shore 70A materials across a range of compression levels. Through this testing, I identified that Shore 70A at approximately 19 percent compression provided reliable sealing without causing chip fracture.
            </p>
            <p>
              After defining these material and compression targets, I worked closely with an external injection molding vendor to refine the gasket design for manufacturability. I adjusted the geometry with their tooling engineers to ensure that the complex ridge features could be molded consistently at production scale while preserving the required sealing performance.
            </p>
          </div>
          <div className="min-w-[800px] bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 overflow-hidden shadow-sm">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300">
                <tr>
                  <th className="p-4 font-semibold">Stack Config</th>
                  <th className="p-4 font-semibold">Nominal Gasket Dimension</th>
                  <th className="p-4 font-semibold">Nominal Chip Thickness</th>
                  <th className="p-4 font-semibold">Nominal Spacer Size</th>
                  <th className="p-4 font-semibold">Actual Spacer Size</th>
                  <th className="p-4 font-semibold">Actual Compression %</th>
                  <th className="p-4 font-semibold text-gray-900 dark:text-white">Shore 60A Results</th>
                  <th className="p-4 font-semibold text-gray-900 dark:text-white">Shore 70A Results</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-800 text-gray-600 dark:text-gray-400">
                <tr className="hover:bg-gray-50 dark:hover:bg-neutral-800/50 transition-colors">
                  <td className="p-4 font-medium text-blue-600 dark:text-blue-400">1 Stack</td>
                  <td className="p-4">1.75 mm (2 Gaskets)</td>
                  <td className="p-4">1.39 mm (1 Chip)</td>
                  <td className="p-4">4.05 mm</td>
                  <td className="p-4">[4.00, 4.05]</td>
                  <td className="p-4">[19.9%, 18.4%]</td>
                  <td className="p-4 text-blue-600 font-medium">Similar to 70A</td>
                  <td className="p-4 text-emerald-600 font-medium">0.020 psi leakage</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-neutral-800/50 transition-colors">
                  <td className="p-4 font-medium text-blue-600 dark:text-blue-400">2 Stack</td>
                  <td className="p-4">1.75 mm (3 Gaskets)</td>
                  <td className="p-4">1.39 mm (2 Chip)</td>
                  <td className="p-4">6.70 mm</td>
                  <td className="p-4">[6.67, 6.73]</td>
                  <td className="p-4">[20.0%, 19.4%]</td>
                  <td className="p-4 text-blue-600 font-medium">0.0226 psi leakage</td>
                  <td className="p-4 text-blue-600 font-medium">0.0284 psi leakage</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-neutral-800/50 transition-colors">
                  <td className="p-4 font-medium text-blue-600 dark:text-blue-400">3 Stack</td>
                  <td className="p-4">1.75 mm (4 Gaskets)</td>
                  <td className="p-4">1.39 mm (3 Chip)</td>
                  <td className="p-4">9.45 mm</td>
                  <td className="p-4">[9.45, 9.50]</td>
                  <td className="p-4">[19.0%, 18.25%]</td>
                  <td className="p-4 text-red-600 font-bold">0.1106 psi leakage</td>
                  <td className="p-4 text-emerald-600 font-medium">0.0677 psi leakage</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-neutral-800/50 transition-colors">
                  <td className="p-4 font-medium text-blue-600 dark:text-blue-400">4 Stack</td>
                  <td className="p-4">1.75 mm (5 Gaskets)</td>
                  <td className="p-4">1.39 mm (4 Chip)</td>
                  <td className="p-4">12.16 mm</td>
                  <td className="p-4">[12.24, 12.30]</td>
                  <td className="p-4">[19.5%, 19.0%]</td>
                  <td className="p-4 text-red-600 font-bold">2.382 psi leakage</td>
                  <td className="p-4 text-emerald-600 font-bold">0.0390 psi leakage</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 8. Final Production Architecture (cd_12) */}
        <section className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <ImageIcon className="text-blue-600" /> Final Production Architecture
            </h2>
            <div className="prose dark:prose-invert text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>
                The final production solution used a three-part injection-molded gasket set (Top, Middle, Bottom) that reliably sealed a five-chip silicon stack without mechanical failure. This architecture provided stable compression, predictable flow distribution, and strong manufacturability at scale.
              </p>
              <p>
                I validated the final geometry using <strong>COMSOL multiphysics simulations</strong>. This included analyzing inlet-to-outlet pressure drop, lateral uniformity across the 206 channels, and overall flow symmetry through the stack.
              </p>
              <p>
                The simulation results confirmed that the scaled architecture maintained the precise flow and shear conditions required for effective mechanoporation. I then verified this performance in live cell processing trials, which demonstrated that the high-volume system achieved biological outcomes comparable to the legacy low-throughput benchmark.
              </p>
            </div>
          </div>
          <div className="md:col-span-6">
             <div className="relative aspect-[4/3] bg-gray-100 dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-neutral-800 group">
                <Image 
                  src="/cd_12.jpg" 
                  alt="Final Injection Molded Design"
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-500"
                />
             </div>
             <p className="text-sm text-center text-gray-500 mt-3 italic">Assembled consumable for high-volume biological test</p>
          </div>
        </section>

        {/* 9. Gallery */}
        <section className="pb-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <ImageIcon className="text-gray-600" /> Engineering Artifacts Gallery
          </h2>
          <div className="w-full overflow-x-auto pb-8 scrollbar-hide cursor-grab active:cursor-grabbing">
            <div className="flex gap-6 w-max px-6">
              {galleryImages.map((img, index) => (
                <motion.div 
                  key={index}
                  className="relative w-[400px] aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-gray-100 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 flex-shrink-0 group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image 
                    src={img.src} 
                    alt={img.caption}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-medium text-lg">{img.caption}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}

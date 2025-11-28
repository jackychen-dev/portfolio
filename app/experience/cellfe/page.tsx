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
                Mechanoporation is a microfluidic technology that engineers precise cellular deformation to enable intracellular delivery. By driving cells through micro-scale constrictions at high velocity, the process induces transient pores in the cell membrane via controlled shear forces. This purely mechanical approach maintains high cell viability while allowing payloads—such as mRNA, CRISPR-Cas9, or proteins—to diffuse into the cytoplasm efficiently.
              </p>
              <p>
                <strong>Scaling Constraint:</strong> The legacy device used a 2-channel silicon chip. Under biological load, debris and shear events caused rapid clogging, limiting throughput to ~1M cells per run and preventing meaningful scale-up.
              </p>
              <p>
                <strong>Engineering Objective:</strong> I led the redesign of the consumable architecture to support &gt;100M cells per run. This required developing a new <strong>206-channel microfluidic chip</strong> and a scalable sealing + distribution system that preserved uniform shear conditions while providing channel-level redundancy.
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
                The high-volume chip features 206 interconnected through-holes acting as vertical inlets and outlets. The chip footprint was constrained by <strong>photolithographic manufacturing limitations</strong> - expanding the active area further introduced unacceptable feature drift, necessitating a vertical stacking approach for scale. The gasket structure is therefore critical for both sealing and guiding fluid flow through this multi-layer assembly.
              </p>
              <p>
                To debug the physical assembly, I designed a custom multi-port diagnostic fixture. This allowed us to isolate layer-by-layer failures (gasket interface vs. manifold) and verify the seal integrity of the intricate fluid paths.
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
                  The consumable consists of a polycarbonate lid with integrated pressure-sensor, fill, and pneumatic ports; an inlet reservoir that stabilizes upstream flow; and a polycarbonate top plate with tapered funnel features for uniform hydraulic distribution.
                </p>
                <p className="mt-2">
                  The core is a multi-chip silicon stack sealed using custom injection-molded 3D gaskets. This stack is constrained by precision spacers and clamped against a polycarbonate bottom plate, terminating in an outlet reservoir with a flow-sensor port and a lofted outlet funnel that reduces dead volume and mitigates air-entrainment artifacts.
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
                The silicon microfluidic chips are fabricated via DRIE, producing high-aspect-ratio channels but resulting in an inherently brittle substrate with low fracture toughness. When multiple chips are stacked, the assembly becomes extremely sensitive to non-uniform clamping, torsional loading, surface flatness deviations, and gasket-induced bending moments - all of which can trigger catastrophic fracture.
              </p>
              
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">A fundamental constraint defined the problem space:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Too little compression → leakage.</li>
                  <li>Too much compression → chip fracture.</li>
                </ul>
              </div>

              <p>
                The allowable process window between these two failure modes was only a few percent of gasket deflection, far narrower than standard sealing strategies could maintain. To diagnose and characterize these coupled failure modes, I designed a custom pressure-diagnostic fixture with a push-to-connect manifold architecture.
              </p>
              
              <p>
                <strong>The Solution:</strong> Preventing substrate failure required rethinking both structural reinforcement and sealing mechanics to decouple sealing force from chip-level mechanical load. This drove the development of reinforced silicon bridge structures and a 3D gasket topology that localized compression only around fluid paths while offloading bending and torsional forces away from the chips.
              </p>
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
              Extensive material characterization was conducted to define the process window. We tested various silicone rubber formulations, comparing <strong>Shore 60A vs. Shore 70A</strong> hardness at different compression percentages.
            </p>
            <p>
              Once the optimal material properties (Shore 70A at ~19% compression) were validated to seal without fracturing the chips, I collaborated closely with an external injection molding vendor. We refined the geometry for manufacturability (DFM), ensuring the complex ridge features could be molded consistently at production scale.
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
                The validated production solution used a three-part injection-molded gasket set (Top, Middle, Bottom) that consistently sealed a 5-chip silicon stack without mechanical failure. This architecture ensured stable compression, predictable flow distribution, and robust manufacturability.
              </p>
              <p>
                I validated the final geometry with <strong>COMSOL multiphysics simulations</strong>, analyzing inlet-to-outlet pressure drop distribution, lateral uniformity across 206 channels, and flow symmetry.
              </p>
              <p>
                The results confirmed that the scaled architecture preserved the precise flow and shear regimes required for successful mechanoporation. This was further validated in real-world trials with live cell processing, confirming that the high-volume system achieved biological parity with the legacy low-throughput benchmark.
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

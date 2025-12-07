'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Calendar, MapPin, ArrowRight, Brain, Cpu, Battery, PenTool, GraduationCap, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'

// Timeline Dot Component
function TimelineDot({ 
  dotColor 
}: { 
  dotColor: string
}) {
  return (
    <div className="absolute left-[-5px] md:left-1/2 md:-ml-1.5 mt-1.5 md:mt-0 flex items-center justify-center">
      <div className={`w-3 h-3 rounded-full ${dotColor}`}></div>
    </div>
  )
}

const experiences = [
  {
    id: "eclipse",
    company: "Eclipse Automation",
    role: "Technical Program Manager",
    period: "Feb 2025 - Present",
    location: "Canada",
    type: "TPM",
    theme: "blue",
    icon: <Brain size={20} />,
    summary: "Drove cross-functional execution for the Tesla Model-Y door-hinge automation line, managing system architecture, mechanical integration, and vendor coordination on a $10M program under tight timelines.",
    description: [
      "Resolved a critical project bottleneck by creating a regression-based machining offset model, correcting tolerancing issues, reducing machining range by 25%, and ensuring contractual compliance.",
      "Built a custom coded framework with weighted task tracking and velocity charts, enabling clear definition of new work and accurate week-over-week progress tracking during system integration.",
      "Negotiated scope changes with the customer through data-backed trade-offs, protecting cost and schedule while saving $500K in costs.",
      "Reported directly to Eclipse’s CEO and executive leadership team, escalating risks and delivering concise, data-driven updates on cycle-time, quality, and program status.",
      "More to come..."
    ]
  },
  {
    id: "cellfe",
    company: "Cell Fluidics Engineering",
    role: "Mechanical Engineer",
    period: "Mar 2023 - Feb 2025",
    location: "San Francisco Bay Area",
    type: "Engineering",
    theme: "emerald",
    icon: <Cpu size={20} />,
    summary: "Led end-to-end development of CellFE’s high-throughput mechanoporation consumable and instrument, scaling the system from prototype to full operational throughput.",
    description: [
      "Scaled technology from 1M cells to high-volume processing (206-channel chips).",
      "Solved chip cracking and gasket failures with custom 3D injection-molded gaskets.",
      "Achieved 0% leakage failure rate through rigorous regression testing."
    ]
  },
  {
    id: "lithos",
    company: "Lithos Energy",
    role: "Mechanical Design Engineer",
    period: "Sept 2022 - Mar 2023",
    location: "San Francisco Bay Area",
    type: "Engineering",
    theme: "emerald",
    icon: <Battery size={20} />,
    summary: "Designed and validated battery packs for marine applications.",
    description: [
      "Reduced capacitor plate failures by 45% through custom fixture testing.",
      "Designed controlled weak points using FEA for high-stress safety."
    ]
  },
  {
    id: "envest",
    company: "Envest Product Development",
    role: "Product Development Engineer Internship",
    period: "Summer 2021",
    location: "Toronto, ON",
    type: "Engineering",
    theme: "emerald",
    icon: <PenTool size={20} />,
    summary: "Prototyped automated smart chair drivetrains.",
    description: [
      "Developed drivetrain prototypes using FEA and iterative design.",
      "Designed snap-fit sensor enclosures for high-volume assembly."
    ]
  },
  {
    id: "graduation",
    company: "University of Waterloo",
    role: "BASc in Mechatronics Engineering",
    period: "June 2022",
    location: "Waterloo, ON",
    type: "Education",
    theme: "purple",
    icon: <GraduationCap size={20} />,
    summary: "Graduated with Honors, specializing in Mechanical Design and Automation.",
    description: [],
    isEducation: true
  }
]

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  
  // Arrow position leads the way - positioned at the bottom edge of the blue progress bar
  const arrowTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  
  // Calculate which circle should have outline based on scroll progress
  const getCircleOutlineOpacity = (index: number) => {
    const totalCircles = experiences.length
    const progressPerCircle = 1 / totalCircles
    const circleStart = index * progressPerCircle
    const circleEnd = (index + 1) * progressPerCircle
    
    return useTransform(scrollYProgress, 
      [circleStart - 0.1, circleStart, circleEnd, circleEnd + 0.1],
      [0, 1, 1, 0]
    )
  }

  return (
    <section ref={sectionRef} id="experience" className="py-20 section-level-2 relative z-0">
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Work Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-12 relative">
          {/* Single timeline line with progress fill */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gray-400 dark:bg-neutral-600 shadow-sm">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-600 via-purple-600 to-blue-600 origin-top z-10"
              style={{ height: progressHeight }}
            />
            
            {/* Scroll Arrow Indicator - Leads the way at bottom of blue progress */}
            <motion.div
              style={{ 
                top: arrowTop,
                left: '50%',
                transform: 'translate(-50%, 0%)'
              }}
              className="absolute flex items-center justify-center z-30"
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-30 flex items-center justify-center"
              >
                <ChevronDown 
                  size={24} 
                  strokeWidth={3}
                  className="text-blue-600 dark:text-blue-400 drop-shadow-lg"
                />
              </motion.div>
            </motion.div>
          </div>
          {experiences.map((exp, index) => {
            const isTPM = exp.type === 'TPM';
            const isEducation = exp.type === 'Education';
            
            let accentColor = 'text-emerald-600 dark:text-emerald-400';
            let bgColor = 'bg-emerald-50 dark:bg-emerald-900/10';
            let borderColor = 'hover:border-emerald-200 dark:hover:border-emerald-800';
            let dotColor = 'bg-emerald-500';

            if (isTPM) {
              accentColor = 'text-blue-600 dark:text-blue-400';
              bgColor = 'bg-blue-50 dark:bg-blue-900/10';
              borderColor = 'hover:border-blue-200 dark:hover:border-blue-800';
              dotColor = 'bg-blue-600';
            } else if (isEducation) {
              accentColor = 'text-purple-600 dark:text-purple-400';
              bgColor = 'bg-purple-50 dark:bg-purple-900/10';
              borderColor = 'hover:border-purple-200 dark:hover:border-purple-800';
              dotColor = 'bg-purple-600';
            }

            const CardContent = (
              <div className={`relative p-6 rounded-2xl transition-all duration-300 border-2 ${isTPM ? 'border-blue-200 dark:border-blue-800/50' : isEducation ? 'border-purple-200 dark:border-purple-800/50' : 'border-emerald-200 dark:border-emerald-800/50'} group-hover:shadow-2xl group-hover:-translate-y-2 group-hover:scale-[1.02] ${bgColor} ${borderColor} card-subtle-shadow`}>
                
                {/* Role Badge */}
                <div className={`absolute -top-3 right-6 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md bg-white dark:bg-neutral-800 ${accentColor} border border-gray-200 dark:border-neutral-700`}>
                  {exp.type}
                </div>

                <div className="flex justify-between items-start mb-1">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-lg bg-white dark:bg-black shadow-md ${accentColor} group-hover:scale-110 transition-transform duration-300`}>
                      {exp.icon}
                    </div>
                    <h3 className={`text-xl font-bold ${accentColor}`}>{exp.company}</h3>
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold mt-3 mb-2">{exp.role}</h4>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 italic">
                  {exp.summary}
                </p>
                
                {!isEducation && (
                  <div className={`flex items-center text-sm font-medium ${accentColor} mt-4 pt-4 border-t border-gray-200 dark:border-gray-700`}>
                    <span>Click here for a deep dive</span>
                    <ArrowRight size={16} className="ml-2" />
                  </div>
                )}
              </div>
            );

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 md:pl-0"
              >
                <div className={`md:flex items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-5/12 mb-4 md:mb-0"></div>
                  
                  {/* Timeline dot */}
                  <TimelineDot 
                    dotColor={dotColor}
                  />

                  <div className="md:w-5/12">
                    {isEducation ? (
                      <div className="block group cursor-default">
                        {CardContent}
                      </div>
                    ) : (
                      <Link href={`/experience/${exp.id}`} className="block group">
                        {CardContent}
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

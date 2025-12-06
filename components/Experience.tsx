'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, ArrowRight, Brain, Cpu, Battery, PenTool, GraduationCap } from 'lucide-react'
import Link from 'next/link'

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
  return (
    <section id="experience" className="py-20 bg-white dark:bg-black border-t border-gray-100 dark:border-neutral-900">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Work Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-12">
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

            // If it's education, we might not want a deep dive link, so we conditionally render the link wrapper
            const CardContent = (
              <div className={`relative p-6 rounded-2xl transition-all duration-300 border-2 ${isTPM ? 'border-blue-200 dark:border-blue-800' : isEducation ? 'border-purple-200 dark:border-purple-800' : 'border-emerald-200 dark:border-emerald-800'} hover:shadow-xl hover:-translate-y-1 ${bgColor} ${borderColor} group`}>
                
                {/* Gradient accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${isTPM ? 'bg-gradient-to-r from-blue-600 to-blue-400' : isEducation ? 'bg-gradient-to-r from-purple-600 to-purple-400' : 'bg-gradient-to-r from-emerald-600 to-emerald-400'} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Role Badge */}
                <div className={`absolute -top-3 right-6 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md bg-white dark:bg-neutral-800 border-2 ${isTPM ? 'border-blue-300 dark:border-blue-700' : isEducation ? 'border-purple-300 dark:border-purple-700' : 'border-emerald-300 dark:border-emerald-700'} ${accentColor}`}>
                  {exp.type}
                </div>

                <div className="flex justify-between items-start mb-1">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-xl bg-white dark:bg-black shadow-md border-2 ${isTPM ? 'border-blue-200 dark:border-blue-800' : isEducation ? 'border-purple-200 dark:border-purple-800' : 'border-emerald-200 dark:border-emerald-800'} ${accentColor} group-hover:scale-110 transition-transform duration-300`}>
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

                {/* Display detailed description bullet points if available (mainly for this expanded view request) */}
                {/* Actually, the current design only shows summary and links to deep dive. 
                    The user asked to "incorporate this into the eclipse tpm section emphasize more to come".
                    Since there is no deep dive page for Eclipse yet (it's a placeholder), 
                    I should probably display these bullets here or update the placeholder page?
                    
                    The query says "incorporate this into the eclipse tpm section".
                    In the snippet above, I updated the 'summary' and 'description' data fields.
                    However, the current rendering only shows {exp.summary}.
                    
                    If the user wants these details visible on the main page, I need to render {exp.description}.
                    But the design pattern so far has been Summary -> Deep Dive.
                    
                    Wait, the user said "emphasize more to come".
                    If I put it in the description data, it won't show up unless I change the rendering logic below.
                    The previous code did NOT render `description` in the card.
                    
                    I will stick to the pattern: Summary is visible. Deep dive has details.
                    BUT, Eclipse is a "current" role and maybe they want the details visible immediately?
                    Or maybe they want me to populate the deep dive page?
                    
                    "incorporate this into the eclipse tpm section" usually refers to the resume/content.
                    "emphasize more to come" implies future updates.
                    
                    If I only update the `description` array, it won't be seen on the main page.
                    However, fitting all those bullets into the card summary on the main page would make it huge.
                    
                    The prompt implies "incorporate this into the eclipse tpm section".
                    I will put the main "Drove cross-functional execution..." in the summary.
                    I will put the bullet points in the `description` field.
                    AND I will create/update the Eclipse deep dive page (`app/experience/eclipse/page.tsx`) to actually show this content, 
                    OR I will modify the card to show a bit more if that's what's implied.
                    
                    Given "More to come", maybe I should just update the Summary to be the first paragraph, 
                    and then ensuring the "Deep Dive" link works and shows the bullets.
                    
                    Let's check if `app/experience/eclipse/page.tsx` exists.
                    Yes, it was created as a placeholder in a previous step ("Create placeholder pages for other roles").
                    
                    I will update the `components/Experience.tsx` data as requested (which I did in the write call content).
                    And I will ALSO update `app/experience/eclipse/page.tsx` to display this content, so the "Deep Dive" link is functional and meaningful.
                */}
                
                {!isEducation && (
                  <div className={`flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity ${accentColor}`}>
                    Deep Dive <ArrowRight size={16} className="ml-1" />
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
                {/* Timeline line for desktop */}
                <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-neutral-800 -ml-6 md:ml-0 md:left-1/2 transform md:-translate-x-1/2"></div>
                
                <div className={`md:flex items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-5/12 mb-4 md:mb-0"></div>
                  
                  {/* Timeline dot */}
                  <div className={`absolute left-[-5px] md:left-1/2 md:-ml-1.5 w-3 h-3 rounded-full mt-1.5 md:mt-0 ring-4 ring-white dark:ring-black ${dotColor}`}></div>

                  <div className="md:w-5/12">
                    {isEducation ? (
                      // Non-clickable div for education
                      <div className="block group cursor-default">
                        {CardContent}
                      </div>
                    ) : (
                      // Link for work experience
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

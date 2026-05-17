import { motion } from 'framer-motion'
import GlassCard from './GlassCard'

const DraftingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 shrink-0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v18" /><path d="M5 8l7-5 7 5" /><path d="M5 16l7 5 7-5" />
    <circle cx="12" cy="12" r="2" /><path d="M3 12h2" /><path d="M19 12h2" />
  </svg>
)

const CogIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 shrink-0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
)

const BlueprintIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 shrink-0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 3v18" /><path d="M3 9h18" /><path d="M3 15h18" /><path d="M15 3v18" />
    <path d="M7 7h2" /><path d="M15 7h2" /><path d="M7 17h2" /><path d="M15 17h2" />
  </svg>
)

const ClipCheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 shrink-0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" />
    <path d="m9 14 2 2 4-4" />
  </svg>
)

const RulerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 shrink-0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" x2="12" y1="22.08" y2="12" />
  </svg>
)

const LayersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 shrink-0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 22 8.5 12 15 2 8.5" />
    <polyline points="2 15.5 12 22 22 15.5" /><polyline points="2 11.5 12 18 22 11.5" />
  </svg>
)

const skillGroups = [
  {
    title: 'CAD Software',
    icon: <DraftingIcon />,
    skills: [
      'CATIA', 'SolidWorks', 'AutoCAD', 'CREO',
    ],
  },
  {
    title: 'Manufacturing & Production',
    icon: <CogIcon />,
    skills: [
      '3D Printing / Rapid Prototyping', 'Injection Molding', 'CNC Machining',
      'VMC Machine', 'Mold Design & Development', 'Surface Finishing',
      'Material Selection', 'Production Workflow Planning',
    ],
  },
  {
    title: 'Engineering & Design',
    icon: <BlueprintIcon />,
    skills: [
      'Product Design & Development (NPD)', 'Reverse Engineering',
      'Quality Control (QC)', 'BOM & Technical Documentation',
      '2D to 3D Visualization', '1st & 3rd Angle Projection',
      'Electronics Integration (Batteries, Motors, PCBs)',
    ],
  },
  {
    title: 'Operations & Management',
    icon: <ClipCheckIcon />,
    skills: [
      'Quotation & Invoice Management', 'Inventory & Stock Management',
      'Procurement & Purchase Orders', 'Vendor Coordination',
      'Supply Chain Management', 'Customer Service & Problem Solving',
      'Equipment Repair & Troubleshooting', 'Team Leadership',
    ],
  },
]

const categoryColorMap = {
  'CAD Software': 'from-amber-500 to-orange-500',
  'Manufacturing & Production': 'from-blue-500 to-cyan-500',
  'Engineering & Design': 'from-emerald-500 to-teal-500',
  'Operations & Management': 'from-violet-500 to-purple-500',
}

export default function Skills() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-header text-2xl md:text-3xl font-bold text-navy dark:text-portfolio-gold mb-12">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => (
            <GlassCard key={gi}>
              <div className="flex items-center gap-3 mb-5">
                <div className="text-portfolio-laser dark:text-portfolio-accent">
                  {group.icon}
                </div>
                <h3 className="text-navy dark:text-portfolio-gold font-semibold text-lg">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={si}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: si * 0.05 }}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium
                      dark:bg-portfolio-accent/10 dark:text-portfolio-accent
                      bg-portfolio-laser/15 text-portfolio-laser
                      border border-transparent
                      hover:border-portfolio-laser/30 dark:hover:border-portfolio-accent/30
                      transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}

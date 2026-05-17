import { motion } from 'framer-motion'
import GlassCard from './GlassCard'

const experiences = [
  {
    role: 'Operations Coordinator (Technical Equipment)',
    company: 'Shriram Manufacturers and Suppliers, Pune',
    period: 'Jun 2025 - Present',
    highlights: [
      'Oversee day-to-day operations, ensuring projects delivered on time',
      'Coordinate with suppliers and clients for seamless order processing',
      'Troubleshoot and resolve customer issues promptly',
      'Lead efforts for improving efficiency in service delivery',
    ],
  },
  {
    role: 'Production & Manufacturing Trainee',
    company: 'Neodes Design, Pune',
    period: 'Jun 2024 - Nov 2024',
    highlights: [
      'Hands-on exposure to manufacturing operations in medical equipment',
      'New Product Development (NPD) and Mold Design',
      'Quality Control (QC) and Surface Finishing',
      'Production Workflow Planning and Vendor Coordination',
    ],
  },
  {
    role: 'Product Design Engineer',
    company: 'Mirana Innovation Pvt. Ltd, Pune',
    period: 'Aug 2022 - May 2024',
    highlights: [
      'Developed CAD models using CATIA, SolidWorks, and AutoCAD',
      'Created prototypes using 3D printing for design validation',
      'Prepared BOM, engineering drawings, and technical specifications',
      'R&D on molding parts, troubleshooting design issues',
      'Electronics integration (batteries, motors, PCBs) in product design',
    ],
  },
]

const internship = {
  role: 'Design Intern',
  company: 'Mirana Innovation Pvt. Ltd, Pune',
  period: 'Feb 2022 - Jul 2022',
  highlights: [
    'Assisted in CAD modeling and design documentation',
    'Participated in prototype development and testing',
  ],
}

function TimelineItem({ exp, index, isLast }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.15 }}
      className="relative pl-8 pb-8"
    >
      {!isLast && (
        <div className="absolute left-[7px] top-3 bottom-0 w-px bg-gradient-to-b from-portfolio-gold to-portfolio-blue/50" />
      )}
      <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-portfolio-gold bg-portfolio-dark" />

      <GlassCard>
        <span className="text-xs text-portfolio-gold font-medium tracking-wider">{exp.period}</span>
        <h3 className="text-lg font-semibold text-portfolio-gold mt-1">{exp.role}</h3>
        <p className="text-sm text-portfolio-gold/60 mb-3">{exp.company}</p>
        <ul className="space-y-1.5">
          {exp.highlights.map((h, i) => (
            <li key={i} className="text-sm text-portfolio-gold/70 flex items-start gap-2">
              <span className="text-portfolio-gold mt-1 shrink-0">&#8226;</span>
              {h}
            </li>
          ))}
        </ul>
      </GlassCard>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-header text-2xl md:text-3xl font-bold text-portfolio-gold mb-12">
          Experience
        </h2>

        {experiences.map((exp, i) => (
          <TimelineItem key={i} exp={exp} index={i} isLast={i === experiences.length - 1} />
        ))}

        <h3 className="text-xl font-semibold text-portfolio-gold mt-12 mb-6 section-header">
          Internship
        </h3>
        <TimelineItem exp={internship} index={0} isLast={true} />
      </div>
    </section>
  )
}

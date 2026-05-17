import { motion } from 'framer-motion'
import GlassCard from './GlassCard'

const experiences = [
  {
    role: 'Operations Coordinator (Technical Equipment)',
    company: 'Shriram Manufacturers and Suppliers, Pune',
    period: 'Jun 2025 - Present',
    highlights: [
      'Oversee day-to-day operations, ensuring projects and services are delivered on time and within budget',
      'Manage quotations, proforma invoices, stock maintenance, and procurement for painting equipment',
      'Coordinate with suppliers and clients for seamless order processing and equipment availability',
      'Troubleshoot and repair equipment on the floor, resolving customer issues promptly',
      'Lead efforts for improving efficiency in service delivery and inventory control',
      'Maintain detailed records of inventory, purchases, and customer interactions',
    ],
  },
  {
    role: 'Production & Manufacturing Trainee',
    company: 'Neodes Design, Pune',
    period: 'Jun 2024 - Nov 2024',
    highlights: [
      'Gained hands-on exposure to manufacturing operations for high-quality medical equipment enclosures',
      'Participated in New Product Development (NPD) and Mold Design & Development',
      'Performed Quality Control (QC) inspections and surface finishing on production components',
      'Planned production workflows and coordinated with vendors to ensure timely material availability',
      'Understood the complete manufacturing cycle from design concepts to final quality-checked products',
      'Collaborated with senior engineers on supply chain management and process optimization',
    ],
  },
  {
    role: 'Product Design Engineer',
    company: 'Mirana Innovation Pvt. Ltd, Pune',
    period: 'Aug 2022 - May 2024',
    highlights: [
      'Developed and modified CAD models, assemblies, and design drawings using CATIA, SolidWorks, and AutoCAD',
      'Created prototypes using 3D printing to validate design concepts and functionality',
      'Performed R&D on molding parts, troubleshooting and resolving design issues iteratively',
      'Prepared and maintained detailed BOM, engineering drawings, and technical specifications',
      'Collaborated with production, quality, and vendor teams to refine product specifications and material selection',
      'Integrated electronics — batteries, motors, speakers, PCBs — into product designs with proper spatial arrangement',
      'Provided 2D drawings to Quality and Purchase departments for inspection and procurement',
      'Modified legacy 3D designs for vendor handoff and manufacturing feasibility',
      'Occasionally took responsibility for production and quality department operations',
    ],
  },
]

const internship = {
  role: 'Design Intern',
  company: 'Mirana Innovation Pvt. Ltd, Pune',
  period: 'Feb 2022 - Jul 2022',
  highlights: [
    'Assisted senior designers in CAD modeling and design documentation',
    'Participated in prototype development, testing, and project review meetings',
    'Gained foundational understanding of the product design process and manufacturing workflows',
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
        <div className="absolute left-[7px] top-3 bottom-0 w-px bg-gradient-to-b from-portfolio-laser dark:from-portfolio-accent to-portfolio-blue/50" />
      )}
      <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-portfolio-laser dark:border-portfolio-accent bg-cream dark:bg-portfolio-dark" />

      <GlassCard>
        <span className="text-xs text-portfolio-laser dark:text-portfolio-accent font-medium tracking-wider">{exp.period}</span>
        <h3 className="text-lg font-semibold text-navy dark:text-portfolio-gold mt-1">{exp.role}</h3>
        <p className="text-sm text-navy/60 dark:text-portfolio-gold/60 mb-3">{exp.company}</p>
        <ul className="space-y-1.5">
          {exp.highlights.map((h, i) => (
            <li key={i} className="text-sm text-navy/70 dark:text-portfolio-gold/70 flex items-start gap-2">
              <span className="text-portfolio-laser dark:text-portfolio-accent mt-1 shrink-0">&#8226;</span>
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
        <h2 className="section-header text-2xl md:text-3xl font-bold text-navy dark:text-portfolio-gold mb-12">
          Experience
        </h2>

        {experiences.map((exp, i) => (
          <TimelineItem key={i} exp={exp} index={i} isLast={i === experiences.length - 1} />
        ))}

        <h3 className="text-xl font-semibold text-navy dark:text-portfolio-gold mt-12 mb-6 section-header">
          Internship
        </h3>
        <TimelineItem exp={internship} index={0} isLast={true} />
      </div>
    </section>
  )
}

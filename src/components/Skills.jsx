import { motion } from 'framer-motion'
import GlassCard from './GlassCard'

const skillGroups = [
  {
    title: 'CAD Software',
    skills: [
      { name: 'CATIA', level: 95 },
      { name: 'SolidWorks', level: 80 },
      { name: 'AutoCAD', level: 85 },
      { name: 'CREO', level: 60 },
    ],
  },
  {
    title: 'Manufacturing',
    skills: [
      { name: '3D Printing / Rapid Prototyping', level: 90 },
      { name: 'Injection Molding', level: 75 },
      { name: 'CNC Machining', level: 70 },
      { name: 'Material Selection', level: 80 },
    ],
  },
  {
    title: 'Engineering',
    skills: [
      { name: 'Product Design & Development', level: 90 },
      { name: 'Reverse Engineering', level: 85 },
      { name: 'Quality Control (QC)', level: 80 },
      { name: 'BOM & Technical Documentation', level: 85 },
    ],
  },
]

function SkillBar({ name, level, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="mb-4"
    >
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-portfolio-gold/70">{name}</span>
        <span className="text-portfolio-gold font-medium">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-portfolio-blue/30 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.8, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-portfolio-gold to-portfolio-blue-light"
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-header text-2xl md:text-3xl font-bold text-portfolio-gold mb-12">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <GlassCard key={gi}>
              <h3 className="text-portfolio-gold font-semibold text-lg mb-5">{group.title}</h3>
              {group.skills.map((skill, si) => (
                <SkillBar key={si} name={skill.name} level={skill.level} index={si} />
              ))}
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}

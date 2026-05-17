import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import GlassCard from './GlassCard'

const projects = [
  {
    id: 1,
    title: 'Medical Equipment Enclosure',
    company: 'Neodes Design',
    role: 'Production & Manufacturing Trainee',
    period: 'Jun 2024 - Nov 2024',
    tags: ['Mold Design', 'QC', 'Surface Finishing', 'Production Planning'],
    description: 'Worked on the design and production of high-quality medical equipment enclosures. Involved in New Product Development (NPD), mold design, quality control inspections, and surface finishing. Coordinated with vendors and planned production workflows to ensure timely delivery.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
    outcome: 'Completed full manufacturing cycle from design to quality-checked product.',
  },
  {
    id: 2,
    title: 'Consumer Product Development',
    company: 'Mirana Innovation Pvt. Ltd',
    role: 'Product Design Engineer',
    period: 'Aug 2022 - May 2024',
    tags: ['CATIA', 'SolidWorks', '3D Printing', 'Electronics Integration'],
    description: 'Developed and modified CAD models, assemblies, and design drawings. Created prototypes via 3D printing for design validation. Integrated electronics (batteries, motors, speakers, PCBs) into product designs. Collaborated with production, quality, and vendor teams to refine specifications.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
    outcome: 'Successfully delivered multiple production-ready designs with optimized manufacturability.',
  },
  {
    id: 3,
    title: 'Mold Design & R&D',
    company: 'Mirana Innovation Pvt. Ltd',
    role: 'Product Design Engineer',
    period: 'Aug 2022 - May 2024',
    tags: ['R&D', 'Injection Molding', 'Core & Cavity', 'VMC'],
    description: 'Performed research and development on molding parts, troubleshooting and resolving design issues iteratively. Worked with injection molding processes, core and cavity design, and VMC machine operations. Modified legacy 3D designs for vendor handoff.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop',
    outcome: 'Reduced design-to-production cycle time through iterative prototyping and vendor collaboration.',
  },
]

export default function Projects() {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (selected) {
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
    return () => {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
  }, [selected])

  return (
    <section className="py-16 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-header text-2xl md:text-3xl font-bold text-navy dark:text-portfolio-gold mb-4">
          Projects
        </h2>
        <p className="text-navy/60 dark:text-portfolio-gold/60 mb-12 max-w-2xl">
          A selection of engineering projects I've contributed to — from concept through production.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard
                className="cursor-pointer group relative overflow-hidden"
                onClick={() => setSelected(p)}
              >
                <div className="w-full h-40 rounded-xl mb-4 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs text-portfolio-laser dark:text-portfolio-accent font-medium">{p.company}</span>
                <h3 className="text-navy dark:text-portfolio-gold font-semibold mt-1 mb-2 group-hover:text-portfolio-laser dark:group-hover:text-portfolio-accent transition-colors">
                  {p.title}
                </h3>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.tags.slice(0, 3).map((t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded dark:bg-portfolio-accent/10 dark:text-portfolio-accent/80 bg-portfolio-laser/15 text-portfolio-laser/80">
                      {t}
                    </span>
                  ))}
                  {p.tags.length > 3 && (
                    <span className="text-[10px] text-navy/40 dark:text-portfolio-gold/40">+{p.tags.length - 3}</span>
                  )}
                </div>
                <p className="text-sm text-navy/60 dark:text-portfolio-gold/60 line-clamp-2">{p.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[90]"
              onClick={() => setSelected(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              className="fixed left-0 right-0 top-0 bottom-0 z-[91] flex items-start justify-center pt-20 pb-4 px-4 md:px-8 pointer-events-none"
            >
              <div className="w-full max-w-6xl max-h-full md:max-h-none overflow-y-auto md:overflow-y-visible overscroll-contain rounded-2xl pointer-events-auto">
              <GlassCard className="relative">
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-portfolio-dark/90 backdrop-blur-sm border border-portfolio-accent/30 text-portfolio-accent hover:bg-portfolio-accent hover:text-portfolio-dark transition-all shadow-lg"
                >
                  <X size={18} />
                </button>

                <div className="w-full h-48 md:h-40 rounded-xl mb-4 md:mb-6 overflow-hidden">
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <span className="text-xs text-portfolio-laser dark:text-portfolio-accent font-medium tracking-wider">{selected.period}</span>
                <h3 className="text-xl font-bold text-navy dark:text-portfolio-gold mt-1">{selected.title}</h3>
                <p className="text-sm text-navy/60 dark:text-portfolio-gold/60 mb-2">{selected.company} &mdash; {selected.role}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {selected.tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-lg dark:bg-portfolio-accent/10 dark:text-portfolio-accent bg-portfolio-laser/15 text-portfolio-laser font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-navy/70 dark:text-portfolio-gold/70 leading-relaxed mb-4">
                  {selected.description}
                </p>

                <div className="p-4 rounded-xl bg-portfolio-laser/10 dark:bg-portfolio-accent/10 border border-portfolio-laser/20 dark:border-portfolio-accent/20">
                  <p className="text-xs font-medium text-navy dark:text-portfolio-gold mb-1">Outcome</p>
                  <p className="text-sm text-navy/70 dark:text-portfolio-gold/70">{selected.outcome}</p>
                </div>
              </GlassCard>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}

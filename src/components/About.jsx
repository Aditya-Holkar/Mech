import GlassCard from './GlassCard'
import { MapPin, Mail, Globe } from 'lucide-react'

export default function About () {
  return (
    <section className='py-20 md:py-32 px-4 md:px-8'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='section-header text-2xl md:text-3xl font-bold text-navy dark:text-portfolio-gold mb-12'>
          About Me
        </h2>

        <div className='grid md:grid-cols-5 gap-6 md:gap-8'>
          <GlassCard className='md:col-span-3'>
            <p className='text-navy/70 dark:text-portfolio-gold/70 leading-relaxed mb-4'>
              Mechanical Product Design Engineer with over three years of hands-on experience spanning
              product development, manufacturing operations, and technical equipment management.
              My career began at <strong className='text-navy dark:text-portfolio-gold'>Mirana Innovation Pvt. Ltd</strong>,
              where I spent two years as a Product Design Engineer developing CAD models, creating
              prototypes via 3D printing, and driving new product development from concept through production.
              I collaborated across production, quality, and vendor teams to refine specifications,
              select materials, and optimize designs for manufacturability.
            </p>
            <p className='text-navy/70 dark:text-portfolio-gold/70 leading-relaxed mb-4'>
              At <strong className='text-navy dark:text-portfolio-gold'>Neodes Design</strong>, I gained specialised
              exposure to medical equipment manufacturing as a Production & Manufacturing Trainee,
              working hands-on with mold design, quality control, surface finishing, and production
              workflow planning. This role rounded my understanding of the full manufacturing cycle — from
              design concepts to final quality-checked products.
            </p>
            <p className='text-navy/70 dark:text-portfolio-gold/70 leading-relaxed mb-4'>
              Currently, as <strong className='text-navy dark:text-portfolio-gold'>Operations Coordinator</strong> at
              Shriram Manufacturers and Suppliers, I oversee day-to-day technical equipment operations —
              managing quotations, inventory, procurements, and customer relations while troubleshooting
              and repairing equipment on the floor. This role has sharpened my leadership, communication,
              and problem-solving abilities in a fast-paced industrial environment.
            </p>
            <p className='text-navy/70 dark:text-portfolio-gold/70 leading-relaxed'>
              Across every role, I bring strong CAD proficiency (CATIA, SolidWorks, AutoCAD, CREO), a
              deep understanding of manufacturing processes — injection molding, CNC, VMC, 3D printing —
              and a commitment to delivering precise, production-ready designs that bridge the gap between engineering
              intent and practical manufacturing.
            </p>
            <div className='flex flex-wrap gap-3 mt-6'>
              <span className='px-3 py-1.5 rounded-lg dark:bg-portfolio-accent/10 dark:text-portfolio-accent bg-portfolio-laser/20 text-portfolio-laser text-sm font-medium'>
                CATIA
              </span>
              <span className='px-3 py-1.5 rounded-lg dark:bg-portfolio-accent/10 dark:text-portfolio-accent bg-portfolio-laser/20 text-portfolio-laser text-sm font-medium'>
                SolidWorks
              </span>
              <span className='px-3 py-1.5 rounded-lg dark:bg-portfolio-accent/10 dark:text-portfolio-accent bg-portfolio-laser/20 text-portfolio-laser text-sm font-medium'>
                AutoCAD
              </span>
              <span className='px-3 py-1.5 rounded-lg dark:bg-portfolio-accent/10 dark:text-portfolio-accent bg-portfolio-laser/20 text-portfolio-laser text-sm font-medium'>
                3D Printing
              </span>
              <span className='px-3 py-1.5 rounded-lg dark:bg-portfolio-accent/10 dark:text-portfolio-accent bg-portfolio-laser/20 text-portfolio-laser text-sm font-medium'>
                Injection Molding
              </span>
              <span className='px-3 py-1.5 rounded-lg dark:bg-portfolio-accent/10 dark:text-portfolio-accent bg-portfolio-laser/20 text-portfolio-laser text-sm font-medium'>
                CNC Machining
              </span>
            </div>
          </GlassCard>

          <GlassCard className='md:col-span-2'>
            <h3 className='text-navy dark:text-portfolio-gold font-semibold mb-4'>
              Quick Info
            </h3>
            <div className='space-y-4'>
              <div className='flex items-center gap-3 text-navy/70 dark:text-portfolio-gold/70'>
                <MapPin
                  size={16}
                  className='text-portfolio-laser dark:text-portfolio-accent shrink-0'
                />
                <span className='text-sm'>Pune, Maharashtra</span>
              </div>
              <div className='flex items-center gap-3 text-navy/70 dark:text-portfolio-gold/70'>
                <Mail
                  size={16}
                  className='text-portfolio-laser dark:text-portfolio-accent shrink-0'
                />
                <a
                  href='mailto:niranjanholkar4545@gmail.com'
                  className='text-sm dark:hover:text-portfolio-accent hover:text-portfolio-laser transition-colors'
                >
                  niranjanholkar4545@gmail.com
                </a>
              </div>
              <div className='flex items-center gap-3 text-navy/70 dark:text-portfolio-gold/70'>
                <Globe
                  size={16}
                  className='text-portfolio-laser dark:text-portfolio-accent shrink-0'
                />
                <span className='text-sm'>English, Marathi, Hindi</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}

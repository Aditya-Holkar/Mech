import GlassCard from './GlassCard'
import { MapPin, Mail, Globe } from 'lucide-react'

export default function About() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-header text-2xl md:text-3xl font-bold text-portfolio-gold mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-5 gap-6 md:gap-8">
          <GlassCard className="md:col-span-3">
            <p className="text-portfolio-gold/70 leading-relaxed mb-6">
              Dedicated and innovative Mechanical Product Designer with two years of work
              experience in designing, drafting, and 3D modeling. Involved in Product Design
              Process, Rapid Prototyping, and Development of new products. Committed to
              continuous learning and professional growth in the ever-evolving field of
              engineering design.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1.5 rounded-lg bg-portfolio-gold/10 text-portfolio-gold text-sm font-medium">
                CATIA
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-portfolio-blue/20 text-portfolio-blue-light text-sm font-medium">
                SolidWorks
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-portfolio-gold/10 text-portfolio-gold text-sm font-medium">
                AutoCAD
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-portfolio-blue/20 text-portfolio-blue-light text-sm font-medium">
                3D Printing
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-portfolio-gold/10 text-portfolio-gold text-sm font-medium">
                Injection Molding
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-portfolio-blue/20 text-portfolio-blue-light text-sm font-medium">
                CNC Machining
              </span>
            </div>
          </GlassCard>

          <GlassCard className="md:col-span-2">
            <h3 className="text-portfolio-gold font-semibold mb-4">Quick Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-portfolio-gold/70">
                <MapPin size={16} className="text-portfolio-gold shrink-0" />
                <span className="text-sm">Pune, Maharashtra</span>
              </div>
              <div className="flex items-center gap-3 text-portfolio-gold/70">
                <Mail size={16} className="text-portfolio-gold shrink-0" />
                <a href="mailto:niranjanholkar4545@gmail.com" className="text-sm hover:text-portfolio-gold-light transition-colors">
                  niranjanholkar4545@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-portfolio-gold/70">
                <Globe size={16} className="text-portfolio-gold shrink-0" />
                <span className="text-sm">English, Marathi, Hindi</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, MapPin, Mail, Phone } from 'lucide-react'
import { mailtoHref } from '../utils/contact'
import WhatsAppIcon from './WhatsAppIcon'
import GlassCard from './GlassCard'

const skillsMatrix = [
  { category: 'CAD Software', items: ['CATIA', 'SolidWorks', 'AutoCAD', 'CREO'], level: 5 },
  { category: 'Manufacturing', items: ['3D Printing', 'Injection Molding', 'CNC', 'VMC'], level: 4 },
  { category: 'Engineering', items: ['NPD', 'Reverse Engineering', 'QC', 'Mold Design'], level: 4 },
  { category: 'Operations', items: ['Inventory Mgmt', 'Procurement', 'Vendor Coordination', 'Supply Chain'], level: 3 },
]

const timeline = [
  { year: '2022', role: 'Design Intern', company: 'Mirana Innovation', duration: '6 mo' },
  { year: '2022–2024', role: 'Product Design Engineer', company: 'Mirana Innovation', duration: '1 yr 10 mo' },
  { year: '2024', role: 'Production & Mfg Trainee', company: 'Neodes Design', duration: '6 mo' },
  { year: '2025–Present', role: 'Operations Coordinator', company: 'Shriram Manufacturers', duration: 'Ongoing' },
]

export default function InteractiveResume({ onClose }) {
  const overlayRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    overlayRef.current?.scrollTo(0, 0)
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        ref={overlayRef}
        data-lenis-prevent
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[80] overflow-y-auto overscroll-contain"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.97 }}
          transition={{ duration: 0.3 }}
          className="pt-24 pb-16 px-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Niranjan Holkar</h2>
              <div className="flex gap-3">
                <a
                  href="/2026-NIRANJAN%20ANIL%20HOLKAR.pdf.pdf"
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-portfolio-accent text-portfolio-dark text-sm font-semibold hover:bg-gold-light transition-colors"
                >
                  <Download size={16} /> PDF
                </a>
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <GlassCard className="!bg-portfolio-dark/90 !backdrop-blur-xl border-portfolio-accent/20">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-portfolio-gold">Product Design Engineer</h3>
                    <p className="text-portfolio-gold/60 text-sm mt-1">Mechanical Engineering professional with 3+ years of experience</p>
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs text-portfolio-gold/60">
                    <span className="flex items-center gap-1"><MapPin size={12} /> Pune, Maharashtra</span>
                    <a href={mailtoHref} className="flex items-center gap-1 hover:text-portfolio-accent transition-colors"><Mail size={12} /> Email</a>
                    <span className="flex items-center gap-1"><Phone size={12} /> +91 9527706993</span>
                  </div>
                </div>

                <p className="text-sm text-portfolio-gold/70 leading-relaxed">
                  Mechanical Product Design Engineer with hands-on experience spanning product development, manufacturing operations, and technical equipment management. Proficient in CATIA, SolidWorks, AutoCAD, and CREO with strong knowledge of manufacturing processes including injection molding, CNC, VMC, and 3D printing.
                </p>
              </GlassCard>

              <GlassCard className="!bg-portfolio-dark/90 !backdrop-blur-xl border-portfolio-accent/20">
                <h3 className="text-portfolio-gold font-semibold mb-6">Experience Timeline</h3>
                <div className="relative">
                  <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-portfolio-accent to-portfolio-accent/20" />
                  {timeline.map((t, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="relative pl-10 pb-6 last:pb-0"
                    >
                      <div className="absolute left-0 top-1.5 w-[23px] h-[23px] rounded-full border-2 border-portfolio-accent bg-portfolio-dark flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-portfolio-accent" />
                      </div>
                      <span className="text-[11px] text-portfolio-accent font-medium">{t.year}</span>
                      <h4 className="text-sm font-semibold text-portfolio-gold mt-0.5">{t.role}</h4>
                      <p className="text-xs text-portfolio-gold/50">{t.company} &middot; {t.duration}</p>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>

              <GlassCard className="!bg-portfolio-dark/90 !backdrop-blur-xl border-portfolio-accent/20">
                <h3 className="text-portfolio-gold font-semibold mb-6">Skills Matrix</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {skillsMatrix.map((group, gi) => (
                    <div key={gi}>
                      <h4 className="text-xs font-medium text-portfolio-accent mb-3 uppercase tracking-wider">{group.category}</h4>
                      <div className="space-y-2">
                        {group.items.map((skill, si) => (
                          <div key={si} className="flex items-center gap-2">
                            <span className="text-sm text-portfolio-gold/80 w-28 shrink-0">{skill}</span>
                            <div className="flex gap-1">
                              {[1, 2, 3, 4, 5].map((dot) => (
                                <div
                                  key={dot}
                                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                                    dot <= group.level
                                      ? 'bg-portfolio-accent'
                                      : 'bg-portfolio-gold/15'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>

              <GlassCard className="!bg-portfolio-dark/90 !backdrop-blur-xl border-portfolio-accent/20">
                <h3 className="text-portfolio-gold font-semibold mb-4">Education</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-semibold text-portfolio-gold">B.E. Mechanical Engineering</p>
                      <p className="text-xs text-portfolio-gold/50">KJ College of Engineering, Pune</p>
                    </div>
                    <span className="text-xs text-portfolio-accent font-medium shrink-0 ml-4">2021 &middot; 7.78 CGPA</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-semibold text-portfolio-gold">HSC (Science)</p>
                      <p className="text-xs text-portfolio-gold/50">Laxmanrao Apte Junior College, Pune</p>
                    </div>
                    <span className="text-xs text-portfolio-accent font-medium shrink-0 ml-4">2015 &middot; 54.77%</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-semibold text-portfolio-gold">SSC</p>
                      <p className="text-xs text-portfolio-gold/50">Laxmanrao Apte Prashala, Pune</p>
                    </div>
                    <span className="text-xs text-portfolio-accent font-medium shrink-0 ml-4">2013 &middot; 72.60%</span>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

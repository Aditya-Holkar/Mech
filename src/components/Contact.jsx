import GlassCard from './GlassCard'
import { Mail, MapPin, User } from 'lucide-react'

const references = [
  { name: 'Somen Roy', role: 'Operation Manager', company: 'Mirana Innovation', phone: '+91-9595258549' },
  { name: 'Saurabh Umbaraje', role: 'Product Designer', company: 'Mirana Innovation', phone: '+91-9272109259' },
  { name: 'Shubham Kalokhe', role: 'Sr. Design Engineer', company: 'Neodes Design', phone: '+91-9518320993' },
  { name: 'Karthik Moolya', role: 'Plant Manager', company: 'Shriram Manufacturers', phone: '+91-9665779378' },
  { name: 'Randhir Kumar', role: 'Production Manager', company: 'Neodes Design', phone: '+91-9877665988' },
]

export default function Contact() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-header text-2xl md:text-3xl font-bold text-portfolio-gold mb-12">
          Contact & References
        </h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <GlassCard>
            <h3 className="text-portfolio-gold font-semibold text-lg mb-5">Get in Touch</h3>
            <div className="space-y-4">
              <a
                href="mailto:niranjanholkar4545@gmail.com"
                className="flex items-center gap-3 text-portfolio-gold/70 hover:text-portfolio-gold transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-portfolio-gold/10 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-portfolio-gold" />
                </div>
                <div>
                  <p className="text-sm font-medium text-portfolio-gold">Email</p>
                  <p className="text-sm text-portfolio-gold/60">niranjanholkar4545@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-3 text-portfolio-gold/70">
                <div className="w-10 h-10 rounded-lg bg-portfolio-blue/20 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-portfolio-blue-light" />
                </div>
                <div>
                  <p className="text-sm font-medium text-portfolio-gold">Location</p>
                  <p className="text-sm text-portfolio-gold/60">Fursungi, Pune - 412308</p>
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <h3 className="text-portfolio-gold font-semibold text-lg mb-5">Professional References</h3>
            <div className="space-y-3">
              {references.map((ref, i) => (
                <div key={i} className="flex items-start gap-3 pb-3 border-b border-portfolio-gold/10 last:border-0 last:pb-0">
                  <div className="w-8 h-8 rounded-full bg-portfolio-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                    <User size={14} className="text-portfolio-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-portfolio-gold">{ref.name}</p>
                    <p className="text-xs text-portfolio-gold/60">{ref.role} &mdash; {ref.company}</p>
                    <a href={`tel:${ref.phone.replace(/[^+\d]/g, '')}`} className="text-xs text-portfolio-blue-light hover:text-portfolio-gold transition-colors">
                      {ref.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}

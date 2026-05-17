import GlassCard from './GlassCard'
import { Mail, MapPin, User } from 'lucide-react'
import { mailtoHref, waHref, PHONE } from '../utils/contact'
import WhatsAppIcon from './WhatsAppIcon'

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
        <h2 className="section-header text-2xl md:text-3xl font-bold text-navy dark:text-portfolio-gold mb-12">
          Contact & References
        </h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <GlassCard>
            <h3 className="text-navy dark:text-portfolio-gold font-semibold text-lg mb-5">Get in Touch</h3>
            <div className="space-y-4">
              <a
                href={mailtoHref}
                className="flex items-center gap-3 text-navy/70 dark:text-portfolio-gold/70 hover:text-navy dark:hover:text-portfolio-gold transition-colors"
              >
                <div className="w-10 h-10 rounded-lg dark:bg-portfolio-accent/10 bg-portfolio-laser/20 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-portfolio-laser dark:text-portfolio-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-navy dark:text-portfolio-gold">Email</p>
                  <p className="text-sm text-navy/60 dark:text-portfolio-gold/60">niranjanholkar4545@gmail.com</p>
                </div>
              </a>

              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-navy/70 dark:text-portfolio-gold/70 hover:text-navy dark:hover:text-portfolio-gold transition-colors"
              >
                <div className="w-10 h-10 rounded-lg dark:bg-green-500/10 bg-green-500/20 flex items-center justify-center shrink-0">
                  <WhatsAppIcon size={18} className="text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-navy dark:text-portfolio-gold">WhatsApp</p>
                  <p className="text-sm text-navy/60 dark:text-portfolio-gold/60">+91 {PHONE}</p>
                </div>
              </a>

              <div className="flex items-center gap-3 text-navy/70 dark:text-portfolio-gold/70">
                <div className="w-10 h-10 rounded-lg bg-portfolio-blue/20 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-portfolio-laser" />
                </div>
                <div>
                  <p className="text-sm font-medium text-navy dark:text-portfolio-gold">Location</p>
                  <p className="text-sm text-navy/60 dark:text-portfolio-gold/60">Fursungi, Pune - 412308</p>
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <h3 className="text-navy dark:text-portfolio-gold font-semibold text-lg mb-5">Professional References</h3>
            <div className="space-y-3">
              {references.map((ref, i) => (
                <div key={i} className="flex items-start gap-3 pb-3 border-b border-navy/10 dark:border-portfolio-gold/10 last:border-0 last:pb-0">
                  <div className="w-8 h-8 rounded-full dark:bg-portfolio-accent/10 bg-portfolio-laser/20 flex items-center justify-center shrink-0 mt-0.5">
                    <User size={14} className="text-portfolio-laser dark:text-portfolio-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy dark:text-portfolio-gold">{ref.name}</p>
                    <p className="text-xs text-navy/60 dark:text-portfolio-gold/60">{ref.role} &mdash; {ref.company}</p>
                    <a href={`tel:${ref.phone.replace(/[^+\d]/g, '')}`} className="text-xs text-portfolio-laser dark:hover:text-portfolio-accent hover:text-portfolio-laser transition-colors">
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

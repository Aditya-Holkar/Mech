import { motion } from 'framer-motion'
import GlassCard from './GlassCard'

const education = [
  {
    degree: "Bachelor's in Mechanical Engineering",
    institution: 'KJ College of Engineering and Management Research, Pune',
    year: '2021',
    score: '7.78 CGPA',
  },
  {
    degree: 'Higher Secondary Education (HSC)',
    institution: 'Laxmanrao Apte Junior College, Pune',
    year: '2015',
    score: '54.77%',
  },
  {
    degree: 'Secondary Education (SSC)',
    institution: 'Laxmanrao Apte Prashala, Pune',
    year: '2013',
    score: '72.60%',
  },
]

export default function Education() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-header text-2xl md:text-3xl font-bold text-portfolio-gold mb-12">
          Education
        </h2>

        <div className="space-y-4">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-portfolio-gold font-semibold">{edu.degree}</h3>
                  <p className="text-sm text-portfolio-gold/60 mt-1">{edu.institution}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-portfolio-gold font-medium">{edu.score}</span>
                  <p className="text-xs text-portfolio-gold/50">{edu.year}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

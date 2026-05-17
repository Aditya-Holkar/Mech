import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import GearBackground from './GearBackground'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="gear-gradient absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full pt-24 pb-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-portfolio-gold font-medium text-sm md:text-base tracking-widest uppercase mb-4"
            >
              Product Design Engineer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-portfolio-gold leading-tight mb-6"
            >
              Niranjan{' '}
              <span className="text-portfolio-blue-light">Holkar</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-portfolio-gold/70 max-w-xl mb-8 leading-relaxed"
            >
              Dedicated mechanical product designer with expertise in CAD modeling,
              rapid prototyping, and design for manufacturing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/experience"
                className="px-6 py-3 bg-portfolio-gold text-portfolio-blue-dark font-semibold rounded-xl hover:bg-portfolio-gold-light transition-all inline-flex items-center gap-2"
              >
                View My Work <ArrowDown size={18} />
              </Link>
              <a
                href="/2026-NIRANJAN%20ANIL%20HOLKAR.pdf.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card px-6 py-3 text-portfolio-gold font-medium rounded-xl inline-flex items-center gap-2 hover:border-portfolio-gold/50 transition-all"
              >
                Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right — gears */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden md:block relative h-[400px] lg:h-[500px]"
          >
            <GearBackground />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown size={20} className="text-portfolio-gold/40" />
        </motion.div>
      </motion.div>
    </section>
  )
}

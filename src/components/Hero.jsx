import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import InteractiveResume from './InteractiveResume'

export default function Hero () {
  const [showResume, setShowResume] = useState(false)

  return (
    <>
      <section className='relative min-h-screen flex items-center overflow-hidden'>
        <div className='relative z-10 max-w-3xl mx-auto px-4 md:px-8 w-full pt-24 pb-12'>
          <div className='text-center'>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className='text-navy/70 dark:text-portfolio-gold/70  font-medium text-sm md:text-base tracking-widest uppercase mb-4'
              >
                Project Engineer
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className='text-4xl md:text-6xl lg:text-7xl font-bold text-navy dark:text-portfolio-gold  leading-tight mb-6'
              >
                <span className="shimmer-text">Niranjan Holkar</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className='text-lg md:text-xl text-navy/70 dark:text-portfolio-gold/70 max-w-2xl mx-auto mb-8 leading-relaxed'
              >
                Dedicated mechanical product designer with expertise in CAD
                modeling, rapid prototyping, and design for manufacturing.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className='flex flex-wrap gap-4 justify-center'
              >
                <Link
                  to='/projects'
                  className='px-6 py-3 bg-portfolio-accent text-navy font-semibold rounded-xl hover:bg-gold-light transition-all inline-flex items-center gap-2'
                >
                  View My Work <ArrowDown size={18} />
                </Link>
                <button
                  onClick={() => setShowResume(true)}
                  className='glass-card px-6 py-3 dark:bg-portfolio-accent/10 dark:text-portfolio-accent bg-portfolio-laser/20 text-portfolio-laser text-sm font-medium transition-all gap-2 inline-flex items-center font-medium rounded-xl cursor-pointer'
                >
                  <FileText size={16} /> Resume
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className='absolute bottom-8 left-1/2 -translate-x-1/2'
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <ArrowDown
              size={20}
              className='text-navy/40 dark:text-portfolio-gold/40'
            />
          </motion.div>
        </motion.div>
      </section>

      {showResume && <InteractiveResume onClose={() => setShowResume(false)} />}
    </>
  )
}

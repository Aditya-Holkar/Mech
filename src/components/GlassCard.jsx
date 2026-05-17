import { motion } from 'framer-motion'

export default function GlassCard({ children, className = '', ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`glass-card p-6 md:p-8 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}

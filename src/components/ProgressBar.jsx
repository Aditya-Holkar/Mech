import { motion } from 'framer-motion'

export default function ProgressBar({ progress }) {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-portfolio-blue to-portfolio-accent"
      style={{ scaleX: progress }}
    />
  )
}

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useStore from '../store/useStore'

const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']

const stats = [
  { label: 'CAD Models Designed', value: '47', suffix: '' },
  { label: 'Prototypes 3D Printed', value: '23', suffix: '' },
  { label: 'Coffee Consumed', value: '812', suffix: 'L' },
  { label: 'Design Iterations', value: '189', suffix: '' },
  { label: 'Technical Drawings', value: '14,200', suffix: '+ lines' },
  { label: 'Mold Projects Delivered', value: '12', suffix: '' },
  { label: 'Happy Clients', value: '8', suffix: '' },
  { label: 'Bugs Squashed', value: '∞', suffix: '' },
]

const bootLines = [
  '> SYSTEM DIAGNOSTIC v2.0',
  '> NIRANJAN HOLKAR — PROFILE LOADED',
  '> Initializing engineering subroutines...',
  '> CAD modules: ONLINE',
  '> Manufacturing stack: OPERATIONAL',
  '> Ready.',
  '',
]

export default function EasterEgg() {
  const [active, setActive] = useState(false)
  const [bootStep, setBootStep] = useState(0)
  const [showStats, setShowStats] = useState(false)
  const eggUnlocked = useStore((s) => s.eggUnlocked)
  const unlockEgg = useStore((s) => s.unlockEgg)

  const sequence = useCallback(() => {
    if (bootStep < bootLines.length) {
      const t = setTimeout(() => setBootStep((s) => s + 1), 200)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setShowStats(true), 400)
    return () => clearTimeout(t)
  }, [bootStep])

  useEffect(() => {
    if (active) sequence()
  }, [active, bootStep, sequence])

  useEffect(() => {
    const handler = () => {
      if (eggUnlocked) {
        setActive(true)
        unlockEgg()
        return
      }
    }
    if (eggUnlocked) handler()
  }, [eggUnlocked, unlockEgg])

  useEffect(() => {
    if (eggUnlocked) return
    let buffer = []
    function onKey(e) {
      buffer.push(e.key === 'b' ? 'b' : e.key === 'a' ? 'a' : e.key)
      if (buffer.length > KONAMI.length) buffer.shift()
      if (buffer.join(',') === KONAMI.join(',')) {
        unlockEgg()
        setActive(true)
        buffer = []
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [eggUnlocked, unlockEgg])

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[300] bg-black font-mono flex flex-col"
          onClick={() => setActive(false)}
        >
          <div
            className="flex-1 p-6 md:p-12 overflow-y-auto max-w-3xl mx-auto w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-green-400 text-xs md:text-sm leading-relaxed whitespace-pre-wrap">
              {bootLines.slice(0, bootStep).map((line, i) => (
                <div key={i} className="mb-1">{line}</div>
              ))}
              {bootStep >= bootLines.length && (
                <div className="mt-2">
                  <div className="text-green-300 font-bold text-base md:text-lg mb-4">
                    ┌─────────────────────────────────────┐
                    {'\n'}│  NIRANJAN HOLKAR — ENGINEER PROFILE  │
                    {'\n'}└─────────────────────────────────────┘
                  </div>

                  {showStats && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="grid grid-cols-2 gap-3 mt-4"
                    >
                      {stats.map((s, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="border border-green-500/30 rounded p-3 bg-green-950/30"
                        >
                          <div className="text-green-500/70 text-[10px] md:text-xs">{s.label}</div>
                          <div className="text-green-300 font-bold text-sm md:text-lg">
                            {s.value}<span className="text-green-500/50 text-xs">{s.suffix}</span>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}

                  <div className="mt-6 text-green-500/50 text-xs animate-pulse">
                    {eggUnlocked ? 'Welcome back, Engineer.' : 'First boot detected. Systems calibrated.'}
                    {'\n'}Press ESC or click anywhere to exit.
                  </div>
                </div>
              )}
              {bootStep < bootLines.length && (
                <span className="animate-pulse text-green-400">█</span>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

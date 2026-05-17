import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useMotionValue } from 'framer-motion'
import Lenis from 'lenis'
import useStore from '../store/useStore'
import Navbar from './Navbar'
import Footer from './Footer'
import ProgressBar from './ProgressBar'
import Chatbot from './Chatbot'
import CustomCursor from './CustomCursor'
import ParticleBackground from './ParticleBackground'
import EasterEgg from './EasterEgg'


export default function Layout() {
  const theme = useStore((s) => s.theme)
  const setLenis = useStore((s) => s.setLenis)
  const { pathname } = useLocation()
  const lenisRef = useRef(null)
  const scrollProgress = useMotionValue(0)

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
      syncTouch: true,
      syncTouchLerp: 0.08,
    })
    lenisRef.current = lenis
    setLenis(lenis)
    lenis.on('scroll', (e) => scrollProgress.set(e.progress))

    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    function onVisibility() {
      if (document.hidden && rafId) {
        cancelAnimationFrame(rafId)
        rafId = null
      } else if (!document.hidden && !rafId) {
        rafId = requestAnimationFrame(raf)
      }
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      document.removeEventListener('visibilitychange', onVisibility)
      setLenis(null)
      lenis.destroy()
    }
  }, [scrollProgress])

  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true })
  }, [pathname])

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  const isDark = theme === 'dark'

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? 'bg-portfolio-dark text-portfolio-gold' : 'bg-cream text-navy'
      }`}
    >
      <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
        <ParticleBackground />
      </div>

      <ProgressBar progress={scrollProgress} />
      <Navbar />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
      <Chatbot />
      <CustomCursor />
      <EasterEgg />
    </div>
  )
}

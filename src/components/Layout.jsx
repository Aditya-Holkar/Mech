import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useMotionValue } from 'framer-motion'
import Lenis from 'lenis'
import useStore from '../store/useStore'
import Navbar from './Navbar'
import Footer from './Footer'
import ProgressBar from './ProgressBar'

export default function Layout() {
  const theme = useStore((s) => s.theme)
  const { pathname } = useLocation()
  const lenisRef = useRef(null)
  const scrollProgress = useMotionValue(0)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.2,
    })
    lenisRef.current = lenis
    lenis.on('scroll', (e) => scrollProgress.set(e.progress))

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

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

  return (
    <div className="min-h-screen bg-portfolio-dark text-portfolio-gold dark:bg-portfolio-dark dark:text-portfolio-gold transition-colors duration-300">
      <ProgressBar progress={scrollProgress} />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

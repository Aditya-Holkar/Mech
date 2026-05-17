import { useRef, useEffect } from 'react'
import useStore from '../store/useStore'

export default function ParticleBackground() {
  const canvasRef = useRef(null)
  const theme = useStore((s) => s.theme)
  const isDark = theme === 'dark'

  useEffect(() => {
    const c = canvasRef.current
    if (!c) return
    const ctx = c.getContext('2d')
    let rafId
    let ticking = true
    let hidden = false
    const mouse = { x: -1000, y: -1000 }

    // FIXED: Use a ref object so the resize handler always sees latest value
    const mouseRef = { x: -1000, y: -1000 }

    const obs = new IntersectionObserver(([e]) => { ticking = e.isIntersecting })
    obs.observe(c)

    document.addEventListener('visibilitychange', () => { hidden = document.hidden })

    const COUNT = 140
    const particles = []

    function init(w, h) {
      particles.length = 0
      for (let i = 0; i < COUNT; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          r: Math.random() * 2 + 1,
        })
      }
    }

    function resize() {
      const parent = c.parentElement
      const w = parent.clientWidth
      const h = parent.clientHeight
      c.width = w
      c.height = h
      init(w, h)
    }

    function frame() {
      if (!ticking || hidden) {
        rafId = requestAnimationFrame(frame)
        return
      }

      const w = c.width, h = c.height
      ctx.clearRect(0, 0, w, h)

      const col = isDark ? '255,209,65' : '0,75,141'
      const DIST = 120

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        const dx = mouseRef.x - p.x
        const dy = mouseRef.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 150) {
          const force = (150 - dist) / 150 * 0.5
          p.vx -= (dx / dist) * force
          p.vy -= (dy / dist) * force
        }

        p.vx *= 0.99
        p.vy *= 0.99
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${col},0.3)`
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const ddx = p.x - q.x
          const ddy = p.y - q.y
          const dd = Math.sqrt(ddx * ddx + ddy * ddy)
          if (dd < DIST) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(${col},${(1 - dd / DIST) * 0.2})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      rafId = requestAnimationFrame(frame)
    }

    const ro = new ResizeObserver(resize)
    ro.observe(c.parentElement)
    resize()
    rafId = requestAnimationFrame(frame)

    function onMouse(e) {
      const rect = c.getBoundingClientRect()
      mouseRef.x = e.clientX - rect.left
      mouseRef.y = e.clientY - rect.top
    }
    window.addEventListener('mousemove', onMouse)

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      ro.disconnect()
      obs.disconnect()
      window.removeEventListener('mousemove', onMouse)
    }
  }, [isDark])

  return <canvas ref={canvasRef} className="w-full h-full" />
}

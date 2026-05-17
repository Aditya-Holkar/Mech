import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const trailRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const isTouch = 'ontouchstart' in window
    if (isTouch) return

    const cursor = cursorRef.current
    const trail = trailRef.current
    if (!cursor) return

    document.body.style.cursor = 'none'

    const onMouse = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      cursor.style.transform = `translate(${e.clientX - 12}px, ${e.clientY - 12}px)`
    }

    const magneticEls = document.querySelectorAll('a, button, [role="button"], input, textarea')

    const onEnter = (e) => {
      const el = e.currentTarget
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = mouse.current.x - cx
      const dy = mouse.current.y - cy
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist > 100) return
      cursor.classList.add('scale-150', 'opacity-80')
      el.style.transition = 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
      el.style.transform = `translate(${dx * 0.15}px, ${dy * 0.15}px)`
    }

    const onLeave = (e) => {
      const el = e.currentTarget
      cursor.classList.remove('scale-150', 'opacity-80')
      el.style.transform = ''
    }

    magneticEls.forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    function trailAnim() {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.08
      pos.current.y += (mouse.current.y - pos.current.y) * 0.08
      if (trail) trail.style.transform = `translate(${pos.current.x - 6}px, ${pos.current.y - 6}px)`
      requestAnimationFrame(trailAnim)
    }
    requestAnimationFrame(trailAnim)

    window.addEventListener('mousemove', onMouse)

    return () => {
      document.body.style.cursor = ''
      window.removeEventListener('mousemove', onMouse)
      magneticEls.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[200] pointer-events-none transition-[width,height] duration-150 hidden md:block"
        style={{
          width: 24, height: 24, borderRadius: '50%',
          border: '2px solid',
          borderColor: 'var(--color-portfolio-accent, #FFD141)',
          mixBlendMode: 'difference',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        ref={trailRef}
        className="fixed top-0 left-0 z-[199] pointer-events-none rounded-full hidden md:block"
        style={{
          width: 12, height: 12,
          background: 'var(--color-portfolio-accent, #FFD141)',
          opacity: 0.3,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  )
}

import { useRef, useEffect } from 'react'
import useStore from '../store/useStore'

const GEARS = [
  { n: 22, pr: 44, clk: -1, ix: 0 },
  { n: 16, pr: 32, clk: 44 / 32, ix: Math.PI / 16 },
  { n: 12, pr: 24, clk: -44 / 24, ix: Math.PI / 12 },
]

const dAB = GEARS[0].pr + GEARS[1].pr
const dAC = GEARS[0].pr + GEARS[2].pr
const dBC = GEARS[1].pr + GEARS[2].pr
const cos2theta = ((dAB + dAC) * (dAB + dAC) - dBC * dBC) / ((dAB + dAC) * (dAB + dAC) - (dAB - dAC) * (dAB - dAC))
const theta = Math.acos(Math.sqrt(Math.max(0, Math.min(1, cos2theta))))
GEARS[0].x = 0; GEARS[0].y = 0
GEARS[1].x = Math.cos(Math.PI / 2 + theta) * dAB; GEARS[1].y = Math.sin(Math.PI / 2 + theta) * dAB
GEARS[2].x = Math.cos(Math.PI / 2 - theta) * dAC; GEARS[2].y = Math.sin(Math.PI / 2 - theta) * dAC

export default function GearBackground() {
  const canvasRef = useRef(null)
  const initA = 0
  const initB = Math.PI / 16
  const initC = Math.PI / 12 + 0.04
  const state = useRef({ W: 0, H: 0, SF: 1, angles: [initA, initB, initC], raf: null })
  const theme = useStore((s) => s.theme)
  const isDark = theme === 'dark'

  useEffect(() => {
    const c = canvasRef.current
    if (!c) return
    const ctx = c.getContext('2d')
    const s = state.current
    let ticking = true

    const obs = new IntersectionObserver(([e]) => { ticking = e.isIntersecting })
    obs.observe(c)

    function drawGear(g, angle) {
      const { n, pr } = g
      const m = 2 * pr / n
      const add = m
      const ded = m * 1.25
      const OR = pr + add
      const RR = pr - ded
      const step = 2 * Math.PI / n

      const hwR = step * 0.32
      const hwT = step * 0.20

      const col = isDark ? '255,209,65' : '0,75,141'

      ctx.save()
      ctx.translate(g.x * s.SF, g.y * s.SF)
      ctx.rotate(angle)

      // Gear body
      ctx.beginPath()
      ctx.arc(0, 0, RR, 0, 2 * Math.PI)
      ctx.fillStyle = `rgba(${col},0.04)`
      ctx.fill()
      ctx.strokeStyle = `rgba(${col},0.5)`
      ctx.lineWidth = 2.5
      ctx.stroke()

      // Teeth
      ctx.lineWidth = 2.5
      for (let i = 0; i < n; i++) {
        const a = i * step

        const rLx = Math.cos(a - hwR) * RR
        const rLy = Math.sin(a - hwR) * RR
        const rRx = Math.cos(a + hwR) * RR
        const rRy = Math.sin(a + hwR) * RR
        const tLx = Math.cos(a - hwT) * OR
        const tLy = Math.sin(a - hwT) * OR
        const tRx = Math.cos(a + hwT) * OR
        const tRy = Math.sin(a + hwT) * OR

        // Mid-flank control points for involute curve
        const midA = a - (hwR + hwT) / 2
        const midR = (RR + OR) / 2
        const bulge = 3.5
        const ox = -Math.sin(midA)
        const oy = Math.cos(midA)
        const cpLx = Math.cos(midA) * midR + ox * bulge
        const cpLy = Math.sin(midA) * midR + oy * bulge

        const midA2 = a + (hwR + hwT) / 2
        const cpRx = Math.cos(midA2) * midR - ox * bulge
        const cpRy = Math.sin(midA2) * midR - oy * bulge

        ctx.beginPath()
        ctx.moveTo(rLx, rLy)
        ctx.quadraticCurveTo(cpLx, cpLy, tLx, tLy)
        ctx.arc(0, 0, OR, a - hwT, a + hwT)
        ctx.quadraticCurveTo(cpRx, cpRy, rRx, rRy)
        ctx.arc(0, 0, RR, a + hwR, a + step - hwR)
        ctx.closePath()
        ctx.strokeStyle = `rgba(${col},0.5)`
        ctx.stroke()
        ctx.fillStyle = `rgba(${col},0.04)`
        ctx.fill()
      }

      // Bore
      ctx.beginPath()
      ctx.arc(0, 0, m * 0.6, 0, 2 * Math.PI)
      ctx.fillStyle = `rgba(${col},0.15)`
      ctx.fill()
      ctx.strokeStyle = `rgba(${col},0.3)`
      ctx.lineWidth = 1
      ctx.stroke()

      // Axle
      ctx.beginPath()
      ctx.arc(0, 0, 1.2, 0, 2 * Math.PI)
      ctx.fillStyle = `rgba(${col},0.5)`
      ctx.fill()

      ctx.restore()
    }

    function render() {
      const w = s.W, h = s.H
      ctx.clearRect(0, 0, w, h)
      ctx.save()
      ctx.translate(w / 2, h / 2 + h * 0.04)
      GEARS.forEach((g, i) => drawGear(g, s.angles[i]))
      ctx.restore()
    }

    function tick() {
      if (ticking) {
        for (let i = 0; i < 3; i++) s.angles[i] += 0.008 * GEARS[i].clk
        render()
      }
      s.raf = requestAnimationFrame(tick)
    }

    function resize() {
      const parent = c.parentElement
      s.W = parent.clientWidth
      s.H = parent.clientHeight
      c.width = s.W
      c.height = s.H

      let maxD = 0
      for (const g of GEARS) { const d = Math.sqrt(g.x * g.x + g.y * g.y) + g.pr + 8; if (d > maxD) maxD = d }
      s.SF = Math.min(s.W, s.H) * 0.52 / maxD
      render()
    }

    const ro = new ResizeObserver(resize)
    ro.observe(c.parentElement)
    resize()
    tick()

    return () => { ro.disconnect(); obs.disconnect(); if (s.raf) cancelAnimationFrame(s.raf) }
  }, [isDark])

  return <canvas ref={canvasRef} className="w-full h-full" />
}

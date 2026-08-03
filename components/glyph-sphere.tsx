'use client'

import { useEffect, useRef } from 'react'

// Monospace glyphs reminiscent of the Y2K / system aesthetic
const GLYPHS = ['+', 'T', '⌐', '¬', '⌊', '⌋', '·', '/', '\\', '=', '□', '◦', '×', 'L', '7', '[', ']', '{', '}', '*', '#', '@']

type Point = {
  x: number
  y: number
  z: number
  glyph: string
}

// Distribute N points evenly on a unit sphere (Fibonacci sphere)
function buildSphere(count: number): Point[] {
  const points: Point[] = []
  const golden = Math.PI * (3 - Math.sqrt(5))
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2 // 1 -> -1
    const radius = Math.sqrt(1 - y * y)
    const theta = golden * i
    points.push({
      x: Math.cos(theta) * radius,
      y,
      z: Math.sin(theta) * radius,
      glyph: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
    })
  }
  return points
}

export function GlyphSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const points = buildSphere(620)

    let width = 0
    let height = 0
    let dpr = 1

    function resize() {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    let raf = 0
    let angle = 0

    function frame() {
      ctx.clearRect(0, 0, width, height)

      const cx = width / 2
      const cy = height / 2
      const radius = Math.min(width, height) * 0.5
      const cosA = Math.cos(angle)
      const sinA = Math.sin(angle)

      // gentle tilt so the poles are visible
      const tilt = 0.5
      const cosT = Math.cos(tilt)
      const sinT = Math.sin(tilt)

      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'

      // Sort points by depth (back to front)
      const depthSorted = points.map((p) => {
        const rx = p.x * cosA - p.z * sinA
        const rz = p.x * sinA + p.z * cosA
        const ry = p.y * cosT - rz * sinT
        const rzz = p.y * sinT + rz * cosT
        return { p, rx, ry, rzz }
      }).sort((a, b) => a.rzz - b.rzz)

      for (const { p, rx, ry, rzz } of depthSorted) {
        const depth = (rzz + 1) / 2 // 0 (back) -> 1 (front)
        const screenX = cx + rx * radius
        const screenY = cy + ry * radius

        const size = 8 + depth * 12
        const opacity = 0.15 + depth * 0.65

        // Cyan-to-slate gradient based on depth for Optimus-like pop
        const hue = 180 + depth * 20 // cyan to blue-ish
        const sat = 70 + depth * 10
        const light = 45 + depth * 15
        const color = `hsl(${hue}, ${sat}%, ${light}%)`

        ctx.font = `${Math.round(size)}px var(--font-mono, monospace)`
        ctx.fillStyle = color
        ctx.globalAlpha = opacity
        ctx.fillText(p.glyph, screenX, screenY)
        ctx.globalAlpha = 1
      }

      if (!reduceMotion) angle += 0.0018
      raf = requestAnimationFrame(frame)
    }

    frame()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute top-1/2 left-1/2 h-[48rem] w-[48rem] -translate-x-1/2 -translate-y-1/2 opacity-80"
    />
  )
}

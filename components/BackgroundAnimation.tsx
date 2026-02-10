"use client"

import { useEffect, useRef } from 'react'

export default function BackgroundAnimation() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let rafId: number | null = null
    let lastY = 0

    function onScroll() {
      const y = window.scrollY || window.pageYOffset
      const diff = y - lastY
      lastY = y
      // subtle parallax effect by shifting background layers based on scroll
      const layers = el.querySelectorAll<HTMLElement>('.bg-layer')
      layers.forEach((layer, idx) => {
        const speed = (idx + 1) * 0.03
        const translate = Math.round(y * speed)
        layer.style.transform = `translate3d(0, ${-translate}px, 0) scale(1.05)`
      })
    }

    function loop() {
      onScroll()
      rafId = requestAnimationFrame(loop)
    }

    loop()

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {/* Layered animated gradients to create a locomotive-like moving background */}
      <div
        className="bg-layer"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(800px 400px at 10% 10%, rgba(255,45,149,0.12), transparent), linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.85))',
          animation: 'move1 20s linear infinite',
          filter: 'blur(40px) brightness(0.95)'
        }}
      />

      <div
        className="bg-layer"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(600px 300px at 90% 80%, rgba(255,45,149,0.08), transparent), radial-gradient(500px 250px at 40% 60%, rgba(0,0,0,0.16), transparent)',
          animation: 'move2 30s linear infinite',
          filter: 'blur(60px)'
        }}
      />

      <style>{`\n        @keyframes move1 {\n          0% { transform: translate3d(-6%,0,0) }\n          50% { transform: translate3d(6%, -4%,0) }\n          100% { transform: translate3d(-6%,0,0) }\n        }\n        @keyframes move2 {\n          0% { transform: translate3d(0, -3%,0) }\n          50% { transform: translate3d(-4%, 5%,0) }\n          100% { transform: translate3d(0, -3%,0) }\n        }\n      `}</style>
    </div>
  )
}

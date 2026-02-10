"use client"

import { useEffect, useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'

export default function LocomotiveProvider({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const loco = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      multiplier: 0.8,
      smartphone: { smooth: true },
      tablet: { smooth: true }
    })

    return () => loco.destroy()
  }, [])

  return (
    <div data-scroll-container ref={containerRef}>
      {children}
    </div>
  )
}

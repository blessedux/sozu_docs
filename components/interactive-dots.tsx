"use client"

import { useEffect, useRef } from "react"

interface InteractiveDotsProps {
  dotColor?: string
  dotSize?: number
  className?: string
}

export function InteractiveDots({
  dotColor = "#F44336",
  dotSize = 14,
  className = "",
}: InteractiveDotsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const frameCountRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Constants
    const CIRCLE_W = dotSize
    const ACTUAL_W = CIRCLE_W * 0.5
    const MIN_W = 1.5
    const CIRCLE_DIST = CIRCLE_W / 2
    const COLS = Math.ceil(canvas.width / CIRCLE_DIST) + 1
    const ROWS = Math.ceil(canvas.height / CIRCLE_DIST) + 1
    const GREATER = Math.max(canvas.width, canvas.height)
    const MAX_DISTANCE = GREATER * 0.3 // Tighter spread area for more subtle effect

    // Simple noise function for organic motion
    const noise = (x: number, y: number, z: number) => {
      const n = Math.sin(x * 12.9898 + y * 78.233 + z * 45.164) * 43758.5453
      return n - Math.floor(n)
    }

    // Convert hex color to rgba
    const hexToRgba = (hex: string, alpha: number): string => {
      const r = parseInt(hex.slice(1, 3), 16)
      const g = parseInt(hex.slice(3, 5), 16)
      const b = parseInt(hex.slice(5, 7), 16)
      return `rgba(${r}, ${g}, ${b}, ${alpha})`
    }

    // Dot class
    class Dot {
      position: { x: number; y: number }

      constructor(posX: number, posY: number) {
        this.position = { x: posX, y: posY }
      }

      calcWidth(): number {
        const dx = mousePos.current.x - this.position.x
        const dy = mousePos.current.y - this.position.y
        let delta = Math.sqrt(dx * dx + dy * dy)

        // Add noise variation (reduced intensity for subtlety)
        const noiseVal = noise(this.position.x, this.position.y, frameCountRef.current)
        const noiseMap = 0.85 + noiseVal * 0.2
        delta *= noiseMap

        // Use reduced max distance for tighter gradient
        if (delta > MAX_DISTANCE) {
          delta = MAX_DISTANCE
        }

        // Smoother gradient with easing (cubic for even smoother falloff)
        const normalizedDelta = delta / MAX_DISTANCE
        const easedDelta = normalizedDelta * normalizedDelta * normalizedDelta // Cubic easing for smoother, more subtle falloff
        
        return ACTUAL_W - easedDelta * (ACTUAL_W - MIN_W)
      }

      render() {
        const w = this.calcWidth()
        if (w <= 0) return
        
        // Add opacity based on size for more subtle intensity
        const opacity = Math.min(0.35, 0.15 + (w / ACTUAL_W) * 0.2)
        const colorWithOpacity = hexToRgba(dotColor, opacity)
        
        ctx!.fillStyle = colorWithOpacity
        ctx!.beginPath()
        ctx!.arc(this.position.x, this.position.y, w / 2, 0, Math.PI * 2)
        ctx!.fill()
      }
    }

    // Create dots grid
    const dots: Dot[] = []
    for (let ci = 0; ci < COLS; ci++) {
      for (let ri = 0; ri < ROWS; ri++) {
        dots.push(new Dot(ci * CIRCLE_DIST, ri * CIRCLE_DIST))
      }
    }

    // Mouse and touch tracking
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mousePos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("touchmove", handleTouchMove)

    // Animation loop
    const animate = () => {
      // Transparent background
      ctx!.clearRect(0, 0, canvas.width, canvas.height)

      dots.forEach((dot) => dot.render())

      frameCountRef.current++
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove)
    }
  }, [dotColor, dotSize])

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 w-full h-full pointer-events-none z-0 block ${className}`}
    />
  )
}


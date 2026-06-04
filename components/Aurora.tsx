"use client"

import { useEffect, useRef } from "react"

interface AuroraProps {
  colorStops?: string[]
  blend?: number
  amplitude?: number
  speed?: number
  className?: string
}

export default function Aurora({
  colorStops = ["#ff0080", "#7928ca", "#0070f3"],
  blend = 0.3,
  amplitude = 0.8,
  speed = 0.5,
  className = "",
}: AuroraProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
    }

    const createGradient = (x: number, y: number, width: number, height: number) => {
      const gradient = ctx.createLinearGradient(x, y, x + width, y + height)
      colorStops.forEach((color, index) => {
        gradient.addColorStop(index / (colorStops.length - 1), color)
      })
      return gradient
    }

    const drawAurora = () => {
      const { width, height } = canvas
      ctx.clearRect(0, 0, width, height)

      // Create multiple layers of waves
      for (let i = 0; i < 3; i++) {
        const layerAmplitude = amplitude * (i + 1) * 0.5
        const layerSpeed = speed * (i + 1) * 0.2

        ctx.beginPath()

        // Draw a wavy path
        for (let x = 0; x <= width; x += 5) {
          const y = Math.sin((x * 0.01 + time * layerSpeed) * Math.PI) * layerAmplitude * 50 + height * 0.5
          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }

        // Complete the path to fill the bottom of the canvas
        ctx.lineTo(width, height)
        ctx.lineTo(0, height)
        ctx.closePath()

        // Fill with gradient
        const gradient = createGradient(0, 0, width, height)
        ctx.fillStyle = gradient
        ctx.globalAlpha = blend / (i + 1)
        ctx.fill()
      }

      time += 0.01
      animationFrameId = requestAnimationFrame(drawAurora)
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    drawAurora()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [colorStops, blend, amplitude, speed])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ mixBlendMode: "screen" }}
    />
  )
}

"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const ServicesHero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Blueprint animation effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Blueprint grid parameters
    const gridSize = 20
    const primaryLineWidth = 0.5
    const secondaryLineWidth = 0.2
    const primaryColor = "rgba(74, 40, 128, 0.3)"
    const secondaryColor = "rgba(74, 40, 128, 0.1)"

    // Animation variables
    let animationFrame: number
    let progress = 0
    const animationSpeed = 0.005

    // Draw blueprint grid
    const drawGrid = (progress: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const visibleWidth = canvas.width * progress
      const visibleHeight = canvas.height * progress

      // Draw horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        if (y > visibleHeight) continue

        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(visibleWidth, y)

        if (y % (gridSize * 5) === 0) {
          ctx.lineWidth = primaryLineWidth
          ctx.strokeStyle = primaryColor
        } else {
          ctx.lineWidth = secondaryLineWidth
          ctx.strokeStyle = secondaryColor
        }

        ctx.stroke()
      }

      // Draw vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        if (x > visibleWidth) continue

        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, visibleHeight)

        if (x % (gridSize * 5) === 0) {
          ctx.lineWidth = primaryLineWidth
          ctx.strokeStyle = primaryColor
        } else {
          ctx.lineWidth = secondaryLineWidth
          ctx.strokeStyle = secondaryColor
        }

        ctx.stroke()
      }
    }

    // Animation loop
    const animate = () => {
      if (progress < 1) {
        progress += animationSpeed
        drawGrid(progress)
        animationFrame = requestAnimationFrame(animate)
      } else {
        progress = 1
        drawGrid(progress)
      }
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-r from-ca-darkBlue to-[#2A2A4A]">
      {/* Blueprint background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-30" aria-hidden="true" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="inline-block px-3 py-1 bg-ca-purple/20 rounded-full text-ca-orange text-sm font-medium mb-6">
              Comprehensive Business Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Expert Services <span className="text-ca-orange">Tailored</span> to Your Business Needs
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl">
              From financial advisory to strategic planning, our comprehensive suite of services is designed to help
              your business thrive in today's competitive landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-ca-orange hover:bg-ca-lightOrange text-white px-6 py-6 rounded-md flex items-center justify-center">
                Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-6 py-6 rounded-md flex items-center justify-center"
                asChild
              >
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
            </div>

            <div className="mt-12 flex items-center space-x-4">
              <div className="flex -space-x-4">
                <div className="w-10 h-10 rounded-full bg-ca-purple flex items-center justify-center text-white font-bold text-sm border-2 border-white">
                  CA
                </div>
                <div className="w-10 h-10 rounded-full bg-ca-orange flex items-center justify-center text-white font-bold text-sm border-2 border-white">
                  KV
                </div>
                <div className="w-10 h-10 rounded-full bg-ca-purple flex items-center justify-center text-white font-bold text-sm border-2 border-white">
                  R
                </div>
              </div>
              <p className="text-sm text-white/80">
                Trusted by <span className="font-bold text-white">750+</span> businesses across India
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative h-[500px] w-full">
              <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-gradient-to-br from-ca-purple/20 to-ca-purple/5 backdrop-blur-sm rounded-lg border border-white/10 shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Business Advisory Services"
                    width={400}
                    height={400}
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-gradient-to-br from-ca-orange/20 to-ca-orange/5 backdrop-blur-sm rounded-lg border border-white/10 shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Strategic Solutions</h3>
                    <p className="text-sm text-white/80">
                      Customized approaches to meet your unique business challenges
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute top-[20%] left-[10%] w-16 h-16 bg-ca-purple/30 backdrop-blur-sm rounded-lg flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
              >
                <div className="text-white text-2xl font-bold">$</div>
              </motion.div>

              <motion.div
                className="absolute bottom-[30%] right-[15%] w-16 h-16 bg-ca-orange/30 backdrop-blur-sm rounded-lg flex items-center justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.5, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="text-white text-2xl font-bold">%</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ServicesHero

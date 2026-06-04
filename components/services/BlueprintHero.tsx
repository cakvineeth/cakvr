"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const BlueprintHero = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const blueprintRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Initial animation - logo glow
      gsap.fromTo(
        logoRef.current,
        {
          opacity: 0.3,
          scale: 0.9,
          filter: "brightness(0.7) drop-shadow(0 0 5px rgba(74, 40, 128, 0.3))",
        },
        {
          opacity: 1,
          scale: 1,
          filter: "brightness(1) drop-shadow(0 0 15px rgba(74, 40, 128, 0.7))",
          duration: 2,
          ease: "power2.out",
          repeat: -1,
          yoyo: true,
        },
      )

      // Blueprint unfold animation
      gsap.fromTo(
        blueprintRef.current,
        {
          opacity: 0,
          scale: 0.5,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          },
        },
      )

      // Text animations
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "top 40%",
            scrub: 1,
          },
        },
      )

      gsap.fromTo(
        textRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 50%",
            end: "top 30%",
            scrub: 1,
          },
        },
      )

      // Parallax effect on blueprint
      gsap.to(blueprintRef.current, {
        y: 100,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert() // Cleanup animations on unmount
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100vh] flex items-center justify-center bg-gradient-to-b from-ca-darkBlue via-[#1E2A4A] to-[#2A2A4A] overflow-hidden"
    >
      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        <div className="particles-container">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                animationDuration: `${Math.random() * 10 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Logo glow effect */}
      <div
        ref={logoRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-32 h-32 md:w-40 md:h-40 flex items-center justify-center"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 bg-ca-purple/20 rounded-full filter blur-xl animate-pulse-slow"></div>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GTVFpVz7tamx9sHzTKtYRUnpRowMmt.png"
            alt="K Vineeth Reddy & Co Logo"
            width={160}
            height={160}
            className="object-contain z-10 relative"
          />
        </div>
      </div>

      {/* Blueprint animation */}
      <div ref={blueprintRef} className="absolute inset-0 z-0 opacity-0">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" className="blueprint-grid">
          {/* Grid lines */}
          <g className="grid-lines" stroke="rgba(74, 40, 128, 0.3)" strokeWidth="1">
            {/* Horizontal grid lines */}
            {Array.from({ length: 50 }).map((_, i) => (
              <line
                key={`h-${i}`}
                x1="0"
                y1={i * 20}
                x2="1000"
                y2={i * 20}
                strokeDasharray={i % 5 === 0 ? "none" : "5,5"}
                strokeWidth={i % 5 === 0 ? 1.5 : 0.5}
              />
            ))}

            {/* Vertical grid lines */}
            {Array.from({ length: 50 }).map((_, i) => (
              <line
                key={`v-${i}`}
                x1={i * 20}
                y1="0"
                x2={i * 20}
                y2="1000"
                strokeDasharray={i % 5 === 0 ? "none" : "5,5"}
                strokeWidth={i % 5 === 0 ? 1.5 : 0.5}
              />
            ))}
          </g>

          {/* Foundation outline - centered at 500,500 */}
          <g className="foundation-outline" stroke="rgba(255, 140, 56, 0.8)" strokeWidth="3" fill="none">
            <path d="M400,400 L600,400 L600,600 L400,600 Z" className="foundation-path" />
            <path d="M425,425 L575,425 L575,575 L425,575 Z" className="foundation-inner" />
            <line x1="400" y1="400" x2="425" y2="425" />
            <line x1="600" y1="400" x2="575" y2="425" />
            <line x1="600" y1="600" x2="575" y2="575" />
            <line x1="400" y1="600" x2="425" y2="575" />
          </g>

          {/* Measurement lines - properly centered */}
          <g className="measurements" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1" strokeDasharray="5,5">
            <line x1="350" y1="400" x2="350" y2="600" />
            <line x1="650" y1="400" x2="650" y2="600" />
            <line x1="350" y1="400" x2="400" y2="400" />
            <line x1="350" y1="600" x2="400" y2="600" />
            <line x1="650" y1="400" x2="600" y2="400" />
            <line x1="650" y1="600" x2="600" y2="600" />

            <text x="340" y="500" fill="rgba(255, 255, 255, 0.8)" textAnchor="end" fontSize="12">
              200 units
            </text>
            <text x="660" y="500" fill="rgba(255, 255, 255, 0.8)" textAnchor="start" fontSize="12">
              200 units
            </text>
            <text x="500" y="390" fill="rgba(255, 255, 255, 0.8)" textAnchor="middle" fontSize="12">
              200 units
            </text>
            <text x="500" y="620" fill="rgba(255, 255, 255, 0.8)" textAnchor="middle" fontSize="12">
              200 units
            </text>
          </g>

          {/* Center point marker */}
          <circle cx="500" cy="500" r="3" fill="rgba(255, 140, 56, 0.8)" />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 mt-32">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 text-gradient">
            The Blueprint of Your Vision
          </h1>

          <p ref={textRef} className="text-lg md:text-xl text-white/80 mb-8 opacity-0">
            At K Vineeth Reddy & Co, we transform your business vision into a solid financial reality. Our comprehensive
            accounting and advisory services create the foundation for sustainable growth.
          </p>

          <div className="mt-12 inline-block">
            <div className="px-6 py-3 bg-gradient-to-r from-ca-purple to-ca-orange rounded-full shadow-glow animate-pulse-slow">
              <span className="text-white font-medium">Begin Your Journey</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrow-scroll">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlueprintHero

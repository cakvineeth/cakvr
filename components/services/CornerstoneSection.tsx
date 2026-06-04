"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { BarChart3, Shield, FileText, TrendingUp } from "lucide-react"

const CornerstoneSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const foundationRef = useRef<HTMLDivElement>(null)
  const cornerstonesRef = useRef<HTMLDivElement>(null)
  const graphRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Title and text animation
      gsap.fromTo(
        [titleRef.current, textRef.current],
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "top 40%",
            scrub: 1,
          },
        },
      )

      // Foundation animation
      gsap.fromTo(
        foundationRef.current,
        {
          opacity: 0,
          scale: 0.9,
        },
        {
          opacity: 1,
          scale: 1,
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

      // Cornerstones animation
      const cornerstones = cornerstonesRef.current?.querySelectorAll(".cornerstone")

      cornerstones?.forEach((cornerstone, index) => {
        gsap.fromTo(
          cornerstone,
          {
            opacity: 0,
            y: 100,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: `top ${40 - index * 5}%`,
              end: `top ${20 - index * 5}%`,
              scrub: 1,
            },
          },
        )
      })

      // Graph animation - make it sticky and animate height
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        pin: graphRef.current,
        pinSpacing: false,
      })

      const bars = graphRef.current?.querySelectorAll(".graph-bar")

      bars?.forEach((bar, index) => {
        gsap.fromTo(
          bar,
          { height: "0%" },
          {
            height: `${20 + index * 20}%`,
            duration: 1,
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: `top ${50 - index * 10}%`,
              end: `top ${30 - index * 10}%`,
              scrub: 1,
            },
          },
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-[100vh] py-20 bg-gradient-to-b from-[#2A2A4A] to-[#1A1F35]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold text-white mb-6">
              Building the Cornerstones: <br />
              <span className="text-gradient-orange">The Essential Need for Accounting</span>
            </h2>

            <p ref={textRef} className="text-lg text-white/80 mb-8">
              Just as a building needs a solid foundation and strong cornerstones, your business requires robust
              financial systems to support growth. Our accounting services provide the essential structure that allows
              your business to thrive in today's complex economic landscape.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-ca-orange/20 flex items-center justify-center mr-4">
                  <Shield className="h-5 w-5 text-ca-orange" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Financial Protection</h3>
                  <p className="text-white/70">
                    Safeguard your business with proper financial controls and risk management
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-ca-orange/20 flex items-center justify-center mr-4">
                  <TrendingUp className="h-5 w-5 text-ca-orange" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Strategic Growth</h3>
                  <p className="text-white/70">Make informed decisions based on accurate financial data and analysis</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[500px]">
            {/* Foundation */}
            <div
              ref={foundationRef}
              className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-r from-ca-purple/30 to-ca-purple/50 border-2 border-ca-purple rounded-md shadow-glow-purple"
            ></div>

            {/* Cornerstones */}
            <div
              ref={cornerstonesRef}
              className="absolute bottom-20 left-0 right-0 h-[300px] flex items-end justify-between"
            >
              <div className="cornerstone w-20 h-20 bg-gradient-to-br from-ca-orange to-ca-orange/80 flex items-center justify-center rounded-md shadow-glow-orange">
                <BarChart3 className="text-white" size={32} />
              </div>

              <div className="cornerstone w-20 h-20 bg-gradient-to-br from-ca-orange to-ca-orange/80 flex items-center justify-center rounded-md shadow-glow-orange">
                <Shield className="text-white" size={32} />
              </div>

              <div className="cornerstone w-20 h-20 bg-gradient-to-br from-ca-orange to-ca-orange/80 flex items-center justify-center rounded-md shadow-glow-orange">
                <FileText className="text-white" size={32} />
              </div>

              <div className="cornerstone w-20 h-20 bg-gradient-to-br from-ca-orange to-ca-orange/80 flex items-center justify-center rounded-md shadow-glow-orange">
                <TrendingUp className="text-white" size={32} />
              </div>
            </div>
          </div>
        </div>

        {/* Growth Graph */}
        <div
          ref={graphRef}
          className="mt-20 bg-white/5 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-white/10 h-[300px] w-full max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-bold text-white mb-4">Business Growth with Solid Accounting</h3>

          <div className="relative h-[200px] mt-6 flex items-end justify-around">
            {/* Y-axis */}
            <div className="absolute left-0 top-0 bottom-0 w-10 border-r border-white/20 flex flex-col justify-between">
              <span className="text-xs text-white/60">100%</span>
              <span className="text-xs text-white/60">75%</span>
              <span className="text-xs text-white/60">50%</span>
              <span className="text-xs text-white/60">25%</span>
              <span className="text-xs text-white/60">0%</span>
            </div>

            {/* Bars */}
            <div className="graph-bar w-12 bg-gradient-to-t from-ca-purple/50 to-ca-purple ml-10 rounded-t-sm"></div>
            <div className="graph-bar w-12 bg-gradient-to-t from-ca-purple/50 to-ca-purple rounded-t-sm"></div>
            <div className="graph-bar w-12 bg-gradient-to-t from-ca-purple/50 to-ca-purple rounded-t-sm"></div>
            <div className="graph-bar w-12 bg-gradient-to-t from-ca-purple/50 to-ca-purple rounded-t-sm"></div>
            <div className="graph-bar w-12 bg-gradient-to-t from-ca-purple/50 to-ca-purple rounded-t-sm"></div>

            {/* X-axis */}
            <div className="absolute left-10 right-0 bottom-0 h-6 border-t border-white/20 flex justify-around">
              <span className="text-xs text-white/60 mt-1">Year 1</span>
              <span className="text-xs text-white/60 mt-1">Year 2</span>
              <span className="text-xs text-white/60 mt-1">Year 3</span>
              <span className="text-xs text-white/60 mt-1">Year 4</span>
              <span className="text-xs text-white/60 mt-1">Year 5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CornerstoneSection

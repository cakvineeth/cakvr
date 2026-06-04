"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CheckCircle, XCircle } from "lucide-react"

const OutsourceSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const chaosRef = useRef<HTMLDivElement>(null)
  const organizedRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Title and text animation
      gsap.fromTo(
        [titleRef.current, textRef.current],
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
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

      // Split screen animation
      const splitScreenTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          end: "center center",
          scrub: 1,
        },
      })

      splitScreenTl
        .fromTo(chaosRef.current, { x: 0 }, { x: "-100%", duration: 1.5, ease: "power2.inOut" })
        .fromTo(organizedRef.current, { x: "100%" }, { x: 0, duration: 1.5, ease: "power2.inOut" }, "<")

      // Cursor animation
      gsap.fromTo(
        cursorRef.current,
        {
          left: "25%",
          opacity: 0,
        },
        {
          left: "75%",
          opacity: 1,
          duration: 2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 40%",
            end: "center center",
            scrub: 1,
          },
        },
      )

      // Chaos items animation
      const chaosItems = chaosRef.current?.querySelectorAll(".chaos-item")

      chaosItems?.forEach((item, index) => {
        gsap.fromTo(
          item,
          {
            opacity: 1,
            scale: 1,
            rotation: gsap.utils.random(-5, 5),
          },
          {
            opacity: 0,
            scale: 0.8,
            rotation: gsap.utils.random(-10, 10),
            duration: 0.5,
            ease: "power1.in",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: `top ${40 - index * 2}%`,
              end: `top ${30 - index * 2}%`,
              scrub: 1,
            },
          },
        )
      })

      // Organized items animation
      const organizedItems = organizedRef.current?.querySelectorAll(".organized-item")

      organizedItems?.forEach((item, index) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power1.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: `top ${30 - index * 3}%`,
              end: `top ${20 - index * 3}%`,
              scrub: 1,
            },
          },
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100vh] py-20 bg-gradient-to-b from-[#1A1F35] to-[#2A2A4A] overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold text-white mb-6">
          The Guiding Hand: <span className="text-gradient-orange">Why Outsource to Us?</span>
        </h2>

        <p ref={textRef} className="text-lg text-white/80 max-w-3xl mx-auto">
          Transform your financial operations from complex and time-consuming to streamlined and efficient with our
          expert accounting services.
        </p>
      </div>

      {/* Split screen comparison */}
      <div className="relative h-[600px] overflow-hidden">
        {/* Chaotic side */}
        <div
          ref={chaosRef}
          className="absolute inset-0 bg-gradient-to-br from-gray-800 to-red-900/30 flex items-center justify-center"
        >
          <div className="relative w-full h-full max-w-2xl mx-auto">
            <div className="chaos-item absolute top-[10%] left-[20%] w-32 h-40 bg-red-900/40 backdrop-blur-sm rounded-md shadow-md p-4 rotate-[-5deg] border border-red-500/30">
              <div className="text-red-400 font-bold mb-2">Overdue Invoice</div>
              <div className="text-sm text-white/70">Payment 45 days late</div>
            </div>

            <div className="chaos-item absolute top-[15%] right-[25%] w-36 h-32 bg-yellow-900/40 backdrop-blur-sm rounded-md shadow-md p-4 rotate-[3deg] border border-yellow-500/30">
              <div className="text-yellow-400 font-bold mb-2">Tax Deadline</div>
              <div className="text-sm text-white/70">Due tomorrow!</div>
            </div>

            <div className="chaos-item absolute top-[40%] left-[30%] w-40 h-36 bg-blue-900/40 backdrop-blur-sm rounded-md shadow-md p-4 rotate-[7deg] border border-blue-500/30">
              <div className="text-blue-400 font-bold mb-2">Software Costs</div>
              <div className="text-sm text-white/70">3 different subscriptions</div>
            </div>

            <div className="chaos-item absolute bottom-[20%] right-[20%] w-44 h-40 bg-purple-900/40 backdrop-blur-sm rounded-md shadow-md p-4 rotate-[-8deg] border border-purple-500/30">
              <div className="text-purple-400 font-bold mb-2">Compliance Issues</div>
              <div className="text-sm text-white/70">Multiple regulatory concerns</div>
            </div>

            <div className="chaos-item absolute bottom-[30%] left-[15%] w-36 h-32 bg-green-900/40 backdrop-blur-sm rounded-md shadow-md p-4 rotate-[4deg] border border-green-500/30">
              <div className="text-green-400 font-bold mb-2">Staff Costs</div>
              <div className="text-sm text-white/70">High turnover expenses</div>
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-red-500 text-shadow">
              IN-HOUSE CHALLENGES
            </div>
          </div>
        </div>

        {/* Organized side */}
        <div
          ref={organizedRef}
          className="absolute inset-0 bg-gradient-to-br from-ca-purple/20 to-ca-purple/40 backdrop-blur-sm flex items-center justify-center"
        >
          <div className="relative w-full h-full max-w-2xl mx-auto">
            <div className="organized-item absolute top-[10%] left-[20%] w-64 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-white/20">
              <h3 className="text-ca-orange font-bold text-lg mb-2 flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Cost Efficiency
              </h3>
              <p className="text-white/80 text-sm">Save up to 40% compared to in-house accounting departments</p>
            </div>

            <div className="organized-item absolute top-[35%] right-[15%] w-64 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-white/20">
              <h3 className="text-ca-orange font-bold text-lg mb-2 flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Expert Knowledge
              </h3>
              <p className="text-white/80 text-sm">Access to specialized expertise across various accounting domains</p>
            </div>

            <div className="organized-item absolute bottom-[35%] left-[15%] w-64 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-white/20">
              <h3 className="text-ca-orange font-bold text-lg mb-2 flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Compliance Assurance
              </h3>
              <p className="text-white/80 text-sm">
                Stay compliant with changing regulations and reporting requirements
              </p>
            </div>

            <div className="organized-item absolute bottom-[10%] right-[20%] w-64 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-white/20">
              <h3 className="text-ca-orange font-bold text-lg mb-2 flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Focus on Core Business
              </h3>
              <p className="text-white/80 text-sm">
                Dedicate your time and resources to growing your business while we handle the financial details
              </p>
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-ca-orange text-shadow">
              OUTSOURCING BENEFITS
            </div>
          </div>
        </div>

        {/* Animated cursor */}
        <div ref={cursorRef} className="absolute top-1/2 transform -translate-y-1/2 w-12 h-12 z-10 pointer-events-none">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-white rounded-full shadow-glow flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-ca-purple to-ca-orange flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs font-medium text-white">
              Transition to Efficiency
            </div>
          </div>
        </div>
      </div>

      {/* Comparison table */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden border border-white/10">
          <div className="grid grid-cols-2">
            <div className="bg-red-900/20 p-6 border-r border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <XCircle className="text-red-500 mr-2" size={24} />
                In-house Challenges
              </h3>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <XCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-white/80">High costs for qualified staff</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-white/80">Expensive accounting software</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-white/80">Time-consuming management</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-white/80">Risk of errors and compliance issues</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-white/80">Limited expertise in specialized areas</span>
                </li>
              </ul>
            </div>

            <div className="bg-ca-purple/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={24} />
                Outsourcing Benefits
              </h3>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-white/80">Cost-effective access to expert accountants</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-white/80">Focus on your core business activities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-white/80">Improved accuracy and compliance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-white/80">Access to specialized knowledge</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-white/80">Scalable services that grow with your business</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OutsourceSection

"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { BookOpen, FileText, Shield, FileCheck, BarChart3, Calculator, Building, Briefcase, X } from "lucide-react"

interface ServiceData {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  details: string[]
  color: string
  bgColor: string
  animation: string
}

const ServicesToolkit = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const toolkitRef = useRef<HTMLDivElement>(null)
  const detailsRef = useRef<HTMLDivElement>(null)

  const [activeService, setActiveService] = useState<ServiceData | null>(null)

  const services: ServiceData[] = [
    {
      id: "setup",
      icon: <BookOpen className="h-8 w-8 text-white" />,
      title: "Set-up Accounting",
      description: "Establish a solid financial structure for your business",
      details: [
        "Chart of accounts setup tailored to your industry",
        "Accounting software implementation and configuration",
        "Initial balance sheet preparation",
        "Financial controls and procedures development",
        "Staff training on accounting processes",
      ],
      color: "bg-gradient-to-br from-ca-purple to-purple-700",
      bgColor: "from-ca-purple/20 to-purple-700/20",
      animation: "structure",
    },
    {
      id: "reports",
      icon: <FileText className="h-8 w-8 text-white" />,
      title: "Essential Reports",
      description: "Gain insights through comprehensive financial reporting",
      details: [
        "Monthly/quarterly financial statements",
        "Cash flow analysis and forecasting",
        "Budget vs. actual performance reports",
        "Key performance indicator (KPI) tracking",
        "Customized management reports",
      ],
      color: "bg-gradient-to-br from-ca-orange to-orange-700",
      bgColor: "from-ca-orange/20 to-orange-700/20",
      animation: "charts",
    },
    {
      id: "compliance",
      icon: <Shield className="h-8 w-8 text-white" />,
      title: "Compliances",
      description: "Stay compliant with all regulatory requirements",
      details: [
        "Tax filing and compliance management",
        "Statutory audit preparation",
        "Regulatory reporting",
        "Compliance calendar maintenance",
        "Liaison with regulatory authorities",
      ],
      color: "bg-gradient-to-br from-green-600 to-green-800",
      bgColor: "from-green-600/20 to-green-800/20",
      animation: "shield",
    },
    {
      id: "policies",
      icon: <FileCheck className="h-8 w-8 text-white" />,
      title: "Accounting Policies",
      description: "Develop robust accounting policies and procedures",
      details: [
        "Accounting policy manual development",
        "GAAP/IFRS compliance framework",
        "Internal control documentation",
        "Accounting process standardization",
        "Policy implementation and training",
      ],
      color: "bg-gradient-to-br from-blue-600 to-blue-800",
      bgColor: "from-blue-600/20 to-blue-800/20",
      animation: "book",
    },
    {
      id: "analysis",
      icon: <BarChart3 className="h-8 w-8 text-white" />,
      title: "Financial Analysis",
      description: "In-depth analysis to drive strategic decision-making",
      details: [
        "Profitability and margin analysis",
        "Financial ratio analysis",
        "Trend analysis and benchmarking",
        "Working capital optimization",
        "Financial health assessment",
      ],
      color: "bg-gradient-to-br from-purple-600 to-purple-800",
      bgColor: "from-purple-600/20 to-purple-800/20",
      animation: "charts",
    },
    {
      id: "tax",
      icon: <Calculator className="h-8 w-8 text-white" />,
      title: "Tax Planning",
      description: "Strategic tax planning to minimize liabilities",
      details: [
        "Tax optimization strategies",
        "Year-end tax planning",
        "Tax compliance review",
        "Tax credit and incentive identification",
        "Cross-border tax considerations",
      ],
      color: "bg-gradient-to-br from-red-600 to-red-800",
      bgColor: "from-red-600/20 to-red-800/20",
      animation: "calculator",
    },
    {
      id: "advisory",
      icon: <Building className="h-8 w-8 text-white" />,
      title: "Business Advisory",
      description: "Expert guidance for business growth and optimization",
      details: [
        "Business performance review",
        "Growth strategy development",
        "Cost optimization recommendations",
        "Business process improvement",
        "Risk assessment and management",
      ],
      color: "bg-gradient-to-br from-teal-600 to-teal-800",
      bgColor: "from-teal-600/20 to-teal-800/20",
      animation: "growth",
    },
    {
      id: "cfo",
      icon: <Briefcase className="h-8 w-8 text-white" />,
      title: "CFO Services",
      description: "Virtual CFO services for strategic financial leadership",
      details: [
        "Executive financial oversight",
        "Strategic financial planning",
        "Investor relations management",
        "Financial risk assessment",
        "Board and stakeholder reporting",
      ],
      color: "bg-gradient-to-br from-indigo-600 to-indigo-800",
      bgColor: "from-indigo-600/20 to-indigo-800/20",
      animation: "briefcase",
    },
  ]

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

      // Toolkit slide-in animation
      gsap.fromTo(
        toolkitRef.current,
        {
          x: "100%",
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 50%",
            end: "top 20%",
            scrub: 1,
          },
        },
      )

      // Service items staggered animation
      const serviceItems = toolkitRef.current?.querySelectorAll(".service-item")

      gsap.fromTo(
        serviceItems,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: toolkitRef.current,
            start: "top 70%",
            end: "top 20%",
            scrub: 1,
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Animation for service details
  useEffect(() => {
    if (activeService) {
      gsap.fromTo(
        detailsRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        },
      )

      // Specific animations based on service type
      const animationContainer = document.getElementById("animation-container")

      if (animationContainer) {
        gsap.set(animationContainer, { clearProps: "all" })

        switch (activeService.animation) {
          case "structure":
            // Building structure animation
            const blocks = animationContainer.querySelectorAll(".structure-block")
            gsap.fromTo(
              blocks,
              { y: 100, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 0.8,
                ease: "back.out(1.7)",
              },
            )
            break

          case "charts":
            // Charts animation
            const bars = animationContainer.querySelectorAll(".chart-bar")
            gsap.fromTo(
              bars,
              { scaleY: 0 },
              {
                scaleY: 1,
                stagger: 0.1,
                duration: 0.8,
                ease: "power2.out",
                transformOrigin: "bottom",
              },
            )
            break

          case "shield":
            // Shield animation
            gsap.fromTo(
              animationContainer.querySelector(".shield"),
              { scale: 0, rotation: -30 },
              {
                scale: 1,
                rotation: 0,
                duration: 1,
                ease: "elastic.out(1, 0.5)",
              },
            )
            break

          case "book":
            // Book animation
            const pages = animationContainer.querySelectorAll(".book-page")
            gsap.fromTo(
              pages,
              { rotationY: -90, opacity: 0 },
              {
                rotationY: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 0.8,
                ease: "power2.out",
                transformOrigin: "left center",
              },
            )
            break

          case "calculator":
            // Calculator animation
            const buttons = animationContainer.querySelectorAll(".calc-button")
            gsap.fromTo(
              buttons,
              { scale: 0 },
              {
                scale: 1,
                stagger: 0.05,
                duration: 0.5,
                ease: "back.out(1.7)",
              },
            )
            break

          case "growth":
            // Growth animation
            const growthBars = animationContainer.querySelectorAll(".growth-bar")
            gsap.fromTo(
              growthBars,
              { height: 0 },
              {
                height: "100%",
                stagger: 0.2,
                duration: 1,
                ease: "power2.out",
              },
            )
            break

          case "briefcase":
            // Briefcase animation
            gsap.fromTo(
              animationContainer.querySelector(".briefcase"),
              { y: -50, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "bounce.out",
              },
            )

            gsap.fromTo(
              animationContainer.querySelectorAll(".document"),
              { y: -20, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 0.5,
                ease: "power2.out",
                delay: 0.8,
              },
            )
            break
        }
      }
    }
  }, [activeService])

  const handleServiceClick = (service: ServiceData) => {
    setActiveService(service)
  }

  const closeDetails = () => {
    setActiveService(null)
  }

  // Render animation based on service type
  const renderAnimation = () => {
    if (!activeService) return null

    switch (activeService.animation) {
      case "structure":
        return (
          <div className="h-64 flex flex-col-reverse items-center justify-end">
            <div className="structure-block w-64 h-16 bg-gradient-to-r from-ca-purple to-purple-700 rounded-md mb-2 shadow-glow-purple"></div>
            <div className="structure-block w-56 h-16 bg-gradient-to-r from-ca-purple/80 to-purple-700/80 rounded-md mb-2 shadow-md"></div>
            <div className="structure-block w-48 h-16 bg-gradient-to-r from-ca-purple/60 to-purple-700/60 rounded-md mb-2 shadow-md"></div>
            <div className="structure-block w-40 h-16 bg-gradient-to-r from-ca-purple/40 to-purple-700/40 rounded-md shadow-md"></div>
          </div>
        )

      case "charts":
        return (
          <div className="h-64 flex items-end justify-center space-x-4">
            <div className="chart-bar w-12 h-40 bg-gradient-to-t from-ca-orange to-ca-purple rounded-t-md shadow-glow"></div>
            <div className="chart-bar w-12 h-56 bg-gradient-to-t from-ca-orange to-ca-purple rounded-t-md shadow-glow"></div>
            <div className="chart-bar w-12 h-32 bg-gradient-to-t from-ca-orange to-ca-purple rounded-t-md shadow-glow"></div>
            <div className="chart-bar w-12 h-48 bg-gradient-to-t from-ca-orange to-ca-purple rounded-t-md shadow-glow"></div>
            <div className="chart-bar w-12 h-36 bg-gradient-to-t from-ca-orange to-ca-purple rounded-t-md shadow-glow"></div>
          </div>
        )

      case "shield":
        return (
          <div className="h-64 flex items-center justify-center">
            <div className="shield w-40 h-48 bg-gradient-to-b from-green-500 to-green-700 rounded-t-full relative shadow-glow-green">
              <div className="absolute inset-4 bg-white/20 rounded-t-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
                ✓
              </div>
            </div>
          </div>
        )

      case "book":
        return (
          <div className="h-64 flex items-center justify-center perspective-500">
            <div className="book-container w-48 h-64 relative">
              <div className="book-cover absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-r-md shadow-glow-blue"></div>
              <div className="book-page absolute inset-2 bg-white/90 rounded-r-sm"></div>
              <div className="book-page absolute inset-4 bg-white/80 rounded-r-sm"></div>
              <div className="book-page absolute inset-6 bg-white/70 rounded-r-sm"></div>
              <div className="book-page absolute inset-8 bg-white/60 rounded-r-sm"></div>
              <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-blue-300 rounded"></div>
              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-blue-300 rounded"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-blue-300 rounded"></div>
              <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-blue-300 rounded"></div>
            </div>
          </div>
        )

      case "calculator":
        return (
          <div className="h-64 flex items-center justify-center">
            <div className="calculator w-48 h-64 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-4 shadow-glow">
              <div className="bg-gradient-to-r from-gray-200 to-gray-300 h-12 w-full rounded mb-4 shadow-inner"></div>
              <div className="grid grid-cols-4 gap-2">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i}
                    className={`calc-button h-8 rounded flex items-center justify-center text-white font-bold ${
                      i === 15
                        ? "bg-gradient-to-br from-red-500 to-red-700"
                        : i % 4 === 3
                          ? "bg-gradient-to-br from-ca-orange to-orange-700"
                          : "bg-gradient-to-br from-gray-600 to-gray-700"
                    } shadow-md`}
                  >
                    {i === 15
                      ? "="
                      : i === 14
                        ? "0"
                        : i === 13
                          ? "."
                          : i === 12
                            ? "+"
                            : i === 11
                              ? "-"
                              : i === 10
                                ? "×"
                                : i === 9
                                  ? "÷"
                                  : i + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case "growth":
        return (
          <div className="h-64 flex items-end justify-center space-x-8">
            <div className="relative h-full flex items-end">
              <div className="growth-bar w-16 bg-gradient-to-t from-teal-600/30 to-teal-600/70 rounded-t-md shadow-glow-teal"></div>
              <div className="absolute -top-8 left-0 right-0 text-center text-teal-400 font-bold">Start</div>
            </div>
            <div className="relative h-full flex items-end">
              <div className="growth-bar w-16 bg-gradient-to-t from-teal-600/50 to-teal-600/90 rounded-t-md shadow-glow-teal"></div>
              <div className="absolute -top-8 left-0 right-0 text-center text-teal-400 font-bold">Grow</div>
            </div>
            <div className="relative h-full flex items-end">
              <div className="growth-bar w-16 bg-gradient-to-t from-teal-600/70 to-teal-500 rounded-t-md shadow-glow-teal"></div>
              <div className="absolute -top-8 left-0 right-0 text-center text-teal-400 font-bold">Scale</div>
            </div>
            <div className="relative h-full flex items-end">
              <div className="growth-bar w-16 bg-gradient-to-t from-teal-600 to-teal-400 rounded-t-md shadow-glow-teal"></div>
              <div className="absolute -top-8 left-0 right-0 text-center text-teal-400 font-bold">Optimize</div>
            </div>
          </div>
        )

      case "briefcase":
        return (
          <div className="h-64 flex items-center justify-center">
            <div className="relative">
              <div className="briefcase w-48 h-36 bg-gradient-to-b from-indigo-600 to-indigo-800 rounded-lg relative shadow-glow-indigo">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-6 bg-indigo-700 rounded-t-md"></div>
                <div className="absolute inset-4 bg-white/10 rounded"></div>
              </div>
              <div className="document absolute top-0 -right-8 w-16 h-20 bg-white rounded-sm transform rotate-12 shadow-md"></div>
              <div className="document absolute top-4 -left-8 w-16 h-20 bg-white rounded-sm transform -rotate-12 shadow-md"></div>
              <div className="document absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-20 bg-white rounded-sm shadow-md"></div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <section ref={sectionRef} className="relative min-h-[100vh] py-20 bg-gradient-to-b from-[#2A2A4A] to-[#1A1F35]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold text-white mb-6">
            Your Toolkit for Success: <span className="text-gradient-orange">Featured Services</span>
          </h2>

          <p ref={textRef} className="text-lg text-white/80 max-w-3xl mx-auto">
            Explore our comprehensive range of services designed to build and strengthen your financial foundation.
            Click on any service to learn more.
          </p>
        </div>

        {/* Services toolkit */}
        <div ref={toolkitRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-item cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => handleServiceClick(service)}
            >
              <div
                className={`rounded-lg shadow-xl overflow-hidden ${activeService?.id === service.id ? "ring-4 ring-offset-2 ring-ca-orange" : ""}`}
              >
                <div className={`${service.color} p-4 flex items-center justify-center`}>{service.icon}</div>
                <div className={`bg-gradient-to-br ${service.bgColor} backdrop-blur-sm p-4 border-t border-white/10`}>
                  <h3 className="font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-white/80">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service details modal */}
        {activeService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <div
              ref={detailsRef}
              className="bg-gradient-to-br from-[#2A2A4A] to-[#1A1F35] rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto border border-white/10"
            >
              <div className={`${activeService.color} p-6 relative`}>
                <button
                  onClick={closeDetails}
                  className="absolute top-4 right-4 text-white hover:text-white/80 focus:outline-none"
                  aria-label="Close details"
                >
                  <X size={24} />
                </button>

                <div className="flex items-center">
                  <div className="bg-white/20 p-3 rounded-full mr-4">{activeService.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{activeService.title}</h3>
                    <p className="text-white/90">{activeService.description}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-4">What We Provide</h4>
                    <ul className="space-y-3">
                      {activeService.details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-ca-orange mr-2">•</span>
                          <span className="text-white/80">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div id="animation-container" className="flex items-center justify-center">
                    {renderAnimation()}
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <button
                    onClick={closeDetails}
                    className={`px-6 py-2 rounded-md text-white ${activeService.color} hover:opacity-90 transition-opacity shadow-glow`}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default ServicesToolkit

"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowDown, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import Aurora from "./Aurora"
import TalkToExpert from "./TalkToExpert"

// Key benefits
const keyBenefits = [
  "Expert financial guidance tailored to your business",
  "Comprehensive tax planning and compliance",
  "Strategic business advisory services",
  "Dedicated support from experienced professionals",
]

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef(null)

  useEffect(() => {
    // Add intersection observer for animation
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current)
      }
    }
  }, [])

  // Scroll to services section
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section ref={heroRef} className="relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-ca-darkBlue via-ca-purple to-ca-darkBlue z-0">
        <div className="absolute inset-0 opacity-30">
          <Aurora colorStops={["#4A2880", "#6B40B0", "#0A0F25"]} blend={0.3} amplitude={0.8} speed={0.8} />
        </div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=800')] bg-repeat opacity-5"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-ca-purple/20 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-ca-orange/10 blur-3xl"></div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 xl:px-8">
        <div className="pt-20 pb-16 md:pt-24 md:pb-20 xl:pt-32 xl:pb-28">
          {/* Hero content */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12 items-center">
            {/* Left column - Main content */}
            <div className="xl:col-span-7 space-y-7 xl:space-y-8">
              <div
                className={`transition-all duration-1000 transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium mb-6 border border-white/20">
                  <span className="flex h-2 w-2 rounded-full bg-ca-orange mr-2"></span>
                  Chartered Accountants Since 2020
                </div>

                <h1 className="text-[clamp(2.5rem,4.2vw,4.5rem)] font-bold text-white leading-tight tracking-tight drop-shadow-md">
                  Elevate Your Business with <span className="text-ca-orange">Expert Financial</span> Solutions
                </h1>

                <p className="mt-6 text-lg xl:text-xl text-white/90 max-w-2xl leading-relaxed drop-shadow-sm">
                  K VINEETH REDDY & CO LLP provides comprehensive accounting, audit, tax, and advisory services tailored
                  to help your business thrive in today's complex financial landscape.
                </p>

                {/* Key benefits */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
                  {keyBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-ca-orange mr-2 mt-1 flex-shrink-0" />
                      <span className="text-white/90">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Button
                    className="bg-ca-orange hover:bg-ca-lightOrange text-white px-6 xl:px-8 py-5 xl:py-6 rounded-md flex items-center group shadow-lg text-base xl:text-lg"
                    asChild
                  >
                    <Link href="/contact">
                      Schedule a Consultation{" "}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 xl:px-8 py-5 xl:py-6 rounded-md flex items-center group shadow-md text-base xl:text-lg"
                    onClick={scrollToServices}
                  >
                    Explore Services{" "}
                    <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                  </Button>
                </div>
              </div>

              {/* Client trust indicator */}
              <div
                className={`transition-all duration-1000 delay-300 transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <div className="flex items-center gap-4 mt-8 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-ca-purple to-ca-orange flex items-center justify-center text-white text-xs font-bold border-2 border-white shadow-md"
                      >
                        {i === 1 ? "CA" : i === 2 ? "KV" : i === 3 ? "R" : "C"}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-white text-sm drop-shadow-sm">
                      Trusted by <span className="font-bold text-ca-orange">750+</span> clients across India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - Talk to Expert component (replacing testimonials) */}
            <div
              className={`xl:col-span-5 transition-all duration-1000 delay-500 transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 rounded-lg bg-ca-orange/20 blur-lg"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-lg bg-ca-purple/20 blur-lg"></div>

                {/* Talk to Expert component */}
                <TalkToExpert />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce transition-all duration-1000 delay-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/70 flex items-center justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

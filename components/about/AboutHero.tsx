"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle, ArrowRight } from "lucide-react"

const AboutHero = () => {
  const sectionRef = useRef<HTMLElement>(null)

  // Particle animation
  useEffect(() => {
    if (!sectionRef.current) return

    const particles = sectionRef.current.querySelectorAll(".particle")

    particles.forEach((particle) => {
      const speed = Math.random() * 2 + 1
      const angle = Math.random() * 360
      const radius = Math.random() * 100 + 50
      const centerX = Math.random() * window.innerWidth
      const centerY = Math.random() * window.innerHeight

      let time = 0

      const animate = () => {
        time += 0.01 * speed

        const x = centerX + radius * Math.cos(angle + time)
        const y = centerY + radius * Math.sin(angle + time)
        ;(particle as HTMLElement).style.transform = `translate(${x}px, ${y}px)`

        requestAnimationFrame(animate)
      }

      animate()
    })
  }, [])

  const scrollToApproach = () => {
    const approachSection = document.getElementById("our-approach")
    if (approachSection) {
      approachSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section ref={sectionRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with gradient and overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-ca-darkBlue via-[#2A2A4A] to-[#1F1F3A] z-0">
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_30%,rgba(120,80,200,0.4),transparent_70%),radial-gradient(circle_at_80%_70%,rgba(255,140,50,0.4),transparent_70%)]"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-ca-purple/10 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-ca-orange/10 blur-3xl"></div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 rounded-full bg-white opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-ca-purple/20 to-ca-orange/20 rounded-full text-white text-sm font-medium mb-6 backdrop-blur-sm border border-white/10">
              <span className="bg-gradient-to-r from-ca-purple to-ca-orange bg-clip-text text-transparent">
                About Our Company
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Experienced{" "}
              <span className="text-transparent bg-gradient-to-r from-ca-orange to-ca-purple bg-clip-text">
                Financial
              </span>{" "}
              Advisory Firm
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
              K VINEETH REDDY & CO LLP is a sector-agnostic financial advising business servicing Mid-Market Corporates,
              Financial Institutions, and Private Equity funds across India, with headquarters in Bengaluru and
              expansion plans for Hyderabad and other southern Indian cities.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Expert team with diverse industry experience",
                "Tailored solutions for complex financial challenges",
                "Proven track record of client success",
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-ca-orange mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-white/90">{item}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="/services"
                className="px-6 py-3 bg-gradient-to-r from-ca-purple to-ca-orange rounded-lg text-white font-medium hover:shadow-lg hover:shadow-ca-orange/20 transition-all duration-300 flex items-center"
              >
                Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="/contact"
                className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-medium hover:bg-white/20 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-ca-purple/5 group">
                <div className="text-3xl font-bold bg-gradient-to-r from-ca-orange to-ca-purple bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  12+
                </div>
                <div className="text-white/80">Professional Tie-Ups</div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-ca-purple/5 group">
                <div className="text-3xl font-bold bg-gradient-to-r from-ca-orange to-ca-purple bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  7+
                </div>
                <div className="text-white/80">Expert Team Members</div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-ca-purple/5 group">
                <div className="text-3xl font-bold bg-gradient-to-r from-ca-orange to-ca-purple bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  750+
                </div>
                <div className="text-white/80">Satisfied Clients</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative h-[600px] w-full">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-ca-purple/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-ca-orange/10 rounded-full blur-xl"></div>

              {/* Main image */}
              <div className="absolute top-10 right-0 w-[85%] h-[70%] rounded-2xl overflow-hidden border border-white/20 shadow-2xl shadow-ca-purple/20 z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-ca-purple/30 to-ca-purple/10 backdrop-blur-sm z-10"></div>
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Financial Advisory Services"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Mission statement card */}
              <div className="absolute bottom-0 left-0 w-[70%] rounded-2xl overflow-hidden border border-white/20 shadow-xl shadow-ca-orange/20 z-20">
                <div className="bg-gradient-to-br from-ca-darkBlue/90 to-[#2A2A4A]/90 backdrop-blur-md p-8">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    Our Mission
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    To provide exceptional financial advisory services with integrity, expertise, and a commitment to
                    client success. We strive to be the trusted partner that helps businesses navigate complex financial
                    landscapes and achieve sustainable growth.
                  </p>
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <button
                      onClick={scrollToApproach}
                      className="text-ca-orange hover:text-white transition-colors duration-300 flex items-center cursor-pointer"
                    >
                      Learn more about our approach
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero

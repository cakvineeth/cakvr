"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const services = [
  {
    id: "financial-planning",
    title: "Financial Planning & Analysis",
    description:
      "Comprehensive financial planning and analysis to drive strategic decision-making and optimize performance.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    benefits: [
      "Data-driven financial forecasting",
      "Budget development and management",
      "Cash flow optimization",
      "Investment strategy and planning",
      "Financial risk assessment",
    ],
    color: "from-blue-600 to-blue-800",
  },
  {
    id: "tax-advisory",
    title: "Tax Advisory & Compliance",
    description:
      "Strategic tax planning and compliance services to minimize liabilities and ensure regulatory adherence.",
    image:
      "https://images.unsplash.com/photo-1586486855514-8c633cc6fd29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    benefits: [
      "Tax optimization strategies",
      "Regulatory compliance management",
      "Tax credit identification",
      "Audit support and representation",
      "Cross-border tax considerations",
    ],
    color: "from-green-600 to-green-800",
  },
  {
    id: "business-strategy",
    title: "Business Strategy & Growth",
    description:
      "Actionable business strategies to achieve long-term objectives and sustainable competitive advantage.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    benefits: [
      "Market opportunity assessment",
      "Competitive positioning strategy",
      "Growth and expansion planning",
      "Business model optimization",
      "Strategic partnership development",
    ],
    color: "from-purple-600 to-purple-800",
  },
  {
    id: "operations-consulting",
    title: "Operations Consulting",
    description: "Optimize business operations to increase efficiency, reduce costs, and improve overall performance.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    benefits: [
      "Process optimization and redesign",
      "Cost reduction strategies",
      "Supply chain management",
      "Quality improvement initiatives",
      "Operational risk management",
    ],
    color: "from-orange-600 to-orange-800",
  },
]

const ServiceShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  const currentService = services[currentIndex]

  const handlePrevious = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? services.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex === services.length - 1 ? 0 : prevIndex + 1))
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section className="py-20 bg-ca-lightGray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ca-darkBlue mb-4">Featured Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our premium service offerings designed to help your business thrive in today's competitive
            landscape.
          </p>
        </div>

        <div className="relative" ref={sliderRef}>
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentService.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween", duration: 0.5 }}
              className="w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div
                    className={`inline-block px-3 py-1 bg-gradient-to-r ${currentService.color} rounded-full text-white text-sm font-medium mb-4`}
                  >
                    Premium Service
                  </div>
                  <h3 className="text-3xl font-bold text-ca-darkBlue mb-4">{currentService.title}</h3>
                  <p className="text-gray-600 mb-6">{currentService.description}</p>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-ca-darkBlue mb-4">Key Benefits</h4>
                    <ul className="space-y-3">
                      {currentService.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-ca-purple mr-2 flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="bg-ca-purple hover:bg-ca-lightPurple text-white">Learn More</Button>
                </div>

                <div className="order-1 lg:order-2">
                  <div className={`bg-gradient-to-br ${currentService.color} rounded-lg p-1 shadow-xl`}>
                    <div className="bg-white rounded-lg overflow-hidden">
                      <Image
                        src={currentService.image || "/placeholder.svg"}
                        alt={currentService.title}
                        width={800}
                        height={600}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-12 space-x-4">
            <button
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-ca-darkBlue hover:bg-ca-purple hover:text-white transition-colors"
              aria-label="Previous service"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="flex items-center space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-ca-purple" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to service ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-ca-darkBlue hover:bg-ca-purple hover:text-white transition-colors"
              aria-label="Next service"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceShowcase

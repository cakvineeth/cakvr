"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const ServicesContact = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 })

  return (
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/services/pattern-bg.svg')] opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#272151] to-[#4A2880] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Contact us today to discuss how our services can help your business improve efficiency, reduce costs, and
            enhance overall performance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <Link href="/contact">
            <button className="bg-gradient-to-r from-[#272151] to-[#4A2880] hover:from-[#4A2880] hover:to-[#272151] text-white px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 hover:shadow-lg flex items-center">
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesContact

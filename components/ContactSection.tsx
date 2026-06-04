"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function ContactSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? Our team is here to help you with all your financial needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div whileHover={{ y: -10 }} className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-ca-purple/10 text-ca-purple mb-4">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">We're available during business hours</p>
            <div className="space-y-1">
              <a href="tel:+918884449446" className="block text-ca-purple hover:underline">
                +91 88844 49446
              </a>
              <a href="tel:+917026278880" className="block text-ca-purple hover:underline">
                +91 70262 78880
              </a>
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -10 }} className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-ca-purple/10 text-ca-purple mb-4">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">Send us an email anytime</p>
            <div className="space-y-1">
              <a href="mailto:office@cakvr.com" className="block text-ca-purple hover:underline">
                office@cakvr.com
              </a>
              <a href="mailto:cavineeth@cakvr.com" className="block text-ca-purple hover:underline">
                cavineeth@cakvr.com
              </a>
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -10 }} className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-ca-purple/10 text-ca-purple mb-4">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-600 mb-4">Our office location</p>
            <p className="text-gray-700 text-sm">
              3RD FLOOR, ASK TOWERS, NO 74/3, ITPL Main Rd, Bengaluru, Karnataka 560037
            </p>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="inline-block"
          >
            <Link
              href="/contact"
              className={`inline-flex items-center px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 ${
                isHovered ? "bg-ca-orange shadow-lg shadow-ca-orange/30" : "bg-ca-purple shadow-md shadow-ca-purple/20"
              }`}
            >
              Contact Us Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ml-2 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

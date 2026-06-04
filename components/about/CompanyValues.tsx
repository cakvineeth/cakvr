"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Shield, Users, TrendingUp, Clock, Award, Briefcase } from "lucide-react"

const values = [
  {
    icon: <Shield className="h-8 w-8 text-white" />,
    title: "Integrity",
    description: "We uphold the highest ethical standards in all our client engagements and business practices.",
  },
  {
    icon: <Award className="h-8 w-8 text-white" />,
    title: "Excellence",
    description: "We strive for excellence in every aspect of our work, delivering high-quality services consistently.",
  },
  {
    icon: <Users className="h-8 w-8 text-white" />,
    title: "Client Focus",
    description: "Our clients' success is our priority. We build long-term relationships based on trust and results.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-white" />,
    title: "Innovation",
    description: "We embrace innovative approaches to solve complex financial and business challenges.",
  },
  {
    icon: <Clock className="h-8 w-8 text-white" />,
    title: "Timeliness",
    description: "We understand the importance of time in business and commit to meeting deadlines consistently.",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-white" />,
    title: "Expertise",
    description: "We maintain deep domain knowledge and continuously enhance our professional capabilities.",
  },
]

const CompanyValues = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-ca-darkBlue to-[#2A2A4A] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            These principles guide our approach to business and define our corporate culture
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-ca-purple to-ca-orange flex items-center justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
              <p className="text-white/80">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <p className="text-lg font-medium">
              Our values are not just words on a page — they're the foundation of everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyValues

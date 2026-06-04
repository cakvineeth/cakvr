"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, Users, Clock, TrendingUp, Shield, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"

const reasons = [
  {
    icon: <Award className="h-8 w-8 text-ca-orange" />,
    title: "Expertise & Experience",
    description: "Our team brings decades of combined experience across various industries and financial disciplines.",
  },
  {
    icon: <Users className="h-8 w-8 text-ca-orange" />,
    title: "Client-Centric Approach",
    description: "We place your business needs at the center of everything we do, delivering tailored solutions.",
  },
  {
    icon: <Clock className="h-8 w-8 text-ca-orange" />,
    title: "Timely Delivery",
    description: "We understand the importance of time in business and commit to meeting deadlines consistently.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-ca-orange" />,
    title: "Results-Driven",
    description: "Our focus is on delivering measurable results that contribute to your business growth and success.",
  },
  {
    icon: <Shield className="h-8 w-8 text-ca-orange" />,
    title: "Confidentiality & Trust",
    description: "We maintain the highest standards of confidentiality and build relationships based on trust.",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-ca-orange" />,
    title: "Comprehensive Solutions",
    description: "From strategy to implementation, we provide end-to-end solutions for all your business needs.",
  },
]

const WhyChooseUs = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose K Vineeth Reddy & Co</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our business strategy services can help your organization achieve its goals
            across India. With our headquarters in Bengaluru and expansion plans for Hyderabad and other southern Indian
            cities, we're positioned to serve your business needs wherever you are.
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            We're committed to delivering exceptional value and results for our clients. Here's what sets us apart:
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-white/80">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4">
            <p className="text-lg font-medium">Ready to experience the difference?</p>
          </div>
          <div>
            <Button className="bg-ca-orange hover:bg-ca-lightOrange text-white" asChild>
              <a href="/contact">Contact Us Today</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs

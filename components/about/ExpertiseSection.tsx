"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { BarChart3, FileText, Shield, Briefcase, Building, TrendingUp, Users, Settings } from "lucide-react"

const expertiseAreas = [
  {
    icon: <FileText className="h-8 w-8 text-ca-purple" />,
    title: "Corporate Law",
    description: "Expert guidance on corporate governance, compliance, and regulatory matters.",
  },
  {
    icon: <Shield className="h-8 w-8 text-ca-purple" />,
    title: "Secretarial Compliances",
    description: "Comprehensive secretarial services to ensure regulatory compliance.",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-ca-purple" />,
    title: "Tax Advisory",
    description: "Strategic tax planning and compliance services for businesses and individuals.",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-ca-purple" />,
    title: "Audit & Assurance",
    description: "Thorough audit services to enhance transparency and stakeholder confidence.",
  },
  {
    icon: <Building className="h-8 w-8 text-ca-purple" />,
    title: "Financial Advisory",
    description: "Expert financial guidance for businesses at every stage of growth.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-ca-purple" />,
    title: "Business Strategy",
    description: "Strategic planning and advisory services to drive sustainable growth.",
  },
  {
    icon: <Users className="h-8 w-8 text-ca-purple" />,
    title: "Mergers & Acquisitions",
    description: "Comprehensive support for M&A transactions from planning to integration.",
  },
  {
    icon: <Settings className="h-8 w-8 text-ca-purple" />,
    title: "Risk Management",
    description: "Identification and mitigation of financial and operational risks.",
  },
]

const ExpertiseSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

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
    <section ref={sectionRef} className="py-20 bg-ca-lightGray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ca-darkBlue mb-4">Our Areas of Expertise</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of services to address all aspects of your financial and business needs
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-ca-lightGray flex items-center justify-center mb-4">
                {area.icon}
              </div>
              <h3 className="text-xl font-bold text-ca-darkBlue mb-2">{area.title}</h3>
              <p className="text-gray-600">{area.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div
          id="our-approach"
          className="mt-16 bg-gradient-to-r from-ca-purple to-ca-darkBlue rounded-xl overflow-hidden shadow-xl scroll-mt-24"
        >
          <div className="p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
                <p className="text-white/80 mb-6">
                  The firm is engaged in activities in the line of Corporate Law, Secretarial Compliances, Tax Matter,
                  audit and accountancy covering a wide range of sub-activities related to the profession across India,
                  with a focus on Bengaluru and expanding to Hyderabad and other southern Indian cities.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-ca-orange/20 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-ca-orange font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Understand</h4>
                      <p className="text-sm text-white/80">
                        We begin by thoroughly understanding your business and specific needs
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-ca-orange/20 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-ca-orange font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Analyze</h4>
                      <p className="text-sm text-white/80">
                        Our experts analyze your situation and identify opportunities and challenges
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-ca-orange/20 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-ca-orange font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Implement</h4>
                      <p className="text-sm text-white/80">
                        We develop and implement tailored solutions to address your specific needs
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-ca-orange/20 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-ca-orange font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Support</h4>
                      <p className="text-sm text-white/80">
                        We provide ongoing support and guidance to ensure long-term success
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square max-w-md mx-auto relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 rounded-full border-4 border-dashed border-white/30 animate-spin-slow"></div>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1/2 h-1/2 rounded-full border-4 border-dashed border-white/50 animate-spin-slow-reverse"></div>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white">12+</div>
                        <div className="text-sm text-white/80">Professional Tie-Ups in India</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-1/4 right-0 transform translate-x-1/2">
                    <div className="w-20 h-20 rounded-full bg-ca-orange/20 backdrop-blur-sm flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-xl font-bold text-white">7+</div>
                        <div className="text-xs text-white/80">Expert Team</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-1/4 left-0 transform -translate-x-1/2">
                    <div className="w-20 h-20 rounded-full bg-ca-purple/20 backdrop-blur-sm flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-xl font-bold text-white">750+</div>
                        <div className="text-xs text-white/80">Clients</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExpertiseSection

"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { BookOpen, FileText, Shield, FileCheck, BarChart3, Calculator, Building, Briefcase } from "lucide-react"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  details: string[]
  color: string
}

const ServiceCard = ({ icon, title, description, details, color }: ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      layout
      className={`bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer ${
        isExpanded ? "md:col-span-2 md:row-span-2" : ""
      }`}
      onClick={() => setIsExpanded(!isExpanded)}
      whileHover={{ y: -5 }}
      transition={{ layout: { duration: 0.3, type: "spring" } }}
    >
      <motion.div layout="position" className={`p-6 border-t-4 ${color}`}>
        <div className="flex items-start">
          <div className="mr-4">{icon}</div>
          <div>
            <motion.h3 layout="position" className="text-xl font-bold text-ca-darkBlue mb-2">
              {title}
            </motion.h3>
            <motion.p layout="position" className="text-gray-600">
              {description}
            </motion.p>
          </div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-4 border-t border-gray-100"
            >
              <h4 className="font-semibold text-ca-purple mb-2">What we provide:</h4>
              <ul className="space-y-2">
                {details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-ca-orange mr-2">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

const FeaturedServices = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  const services: ServiceCardProps[] = [
    {
      icon: <BookOpen className="h-8 w-8 text-ca-purple" />,
      title: "Set-up Accounting",
      description: "Establish a solid financial structure for your business",
      details: [
        "Chart of accounts setup tailored to your industry",
        "Accounting software implementation and configuration",
        "Initial balance sheet preparation",
        "Financial controls and procedures development",
        "Staff training on accounting processes",
      ],
      color: "border-ca-purple",
    },
    {
      icon: <FileText className="h-8 w-8 text-ca-orange" />,
      title: "Essential Reports",
      description: "Gain insights through comprehensive financial reporting",
      details: [
        "Monthly/quarterly financial statements",
        "Cash flow analysis and forecasting",
        "Budget vs. actual performance reports",
        "Key performance indicator (KPI) tracking",
        "Customized management reports",
      ],
      color: "border-ca-orange",
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Compliances",
      description: "Stay compliant with all regulatory requirements",
      details: [
        "Tax filing and compliance management",
        "Statutory audit preparation",
        "Regulatory reporting",
        "Compliance calendar maintenance",
        "Liaison with regulatory authorities",
      ],
      color: "border-green-600",
    },
    {
      icon: <FileCheck className="h-8 w-8 text-blue-600" />,
      title: "Accounting Policies",
      description: "Develop robust accounting policies and procedures",
      details: [
        "Accounting policy manual development",
        "GAAP/IFRS compliance framework",
        "Internal control documentation",
        "Accounting process standardization",
        "Policy implementation and training",
      ],
      color: "border-blue-600",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-purple-600" />,
      title: "Financial Analysis",
      description: "In-depth analysis to drive strategic decision-making",
      details: [
        "Profitability and margin analysis",
        "Financial ratio analysis",
        "Trend analysis and benchmarking",
        "Working capital optimization",
        "Financial health assessment",
      ],
      color: "border-purple-600",
    },
    {
      icon: <Calculator className="h-8 w-8 text-red-600" />,
      title: "Tax Planning",
      description: "Strategic tax planning to minimize liabilities",
      details: [
        "Tax optimization strategies",
        "Year-end tax planning",
        "Tax compliance review",
        "Tax credit and incentive identification",
        "Cross-border tax considerations",
      ],
      color: "border-red-600",
    },
    {
      icon: <Building className="h-8 w-8 text-teal-600" />,
      title: "Business Advisory",
      description: "Expert guidance for business growth and optimization",
      details: [
        "Business performance review",
        "Growth strategy development",
        "Cost optimization recommendations",
        "Business process improvement",
        "Risk assessment and management",
      ],
      color: "border-teal-600",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-indigo-600" />,
      title: "CFO Services",
      description: "Virtual CFO services for strategic financial leadership",
      details: [
        "Executive financial oversight",
        "Strategic financial planning",
        "Investor relations management",
        "Financial risk assessment",
        "Board and stakeholder reporting",
      ],
      color: "border-indigo-600",
    },
  ]

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ca-darkBlue mb-4">Featured Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of services designed to build and strengthen your financial foundation.
            Click on any service to learn more.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedServices

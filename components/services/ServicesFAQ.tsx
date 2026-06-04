"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What industries do you specialize in?",
    answer:
      "We have expertise across a wide range of industries including technology, healthcare, manufacturing, retail, financial services, and non-profit organizations. Our team has specialized knowledge in each sector, allowing us to provide tailored solutions that address industry-specific challenges and opportunities.",
  },
  {
    question: "How do you typically structure your service engagements?",
    answer:
      "Our service engagements are structured based on your specific needs. We offer project-based services for specific initiatives, retainer-based arrangements for ongoing support, and advisory services for strategic guidance. Each engagement begins with a thorough assessment of your requirements, followed by a customized proposal outlining scope, deliverables, timeline, and investment.",
  },
  {
    question: "What is your approach to client confidentiality?",
    answer:
      "We maintain the highest standards of confidentiality. All client information is protected through strict confidentiality agreements, secure data management systems, and regular staff training on privacy protocols. We only share information internally on a need-to-know basis and never disclose client details to third parties without explicit permission.",
  },
  {
    question: "How do you measure the success of your services?",
    answer:
      "Success measurement is tailored to each engagement's objectives. We establish clear, measurable KPIs at the outset, which may include financial metrics (ROI, cost savings, revenue growth), operational improvements, compliance achievements, or strategic milestones. We provide regular progress reports and conduct formal reviews to ensure we're delivering tangible value.",
  },
  {
    question: "Can you work with our existing advisors and team members?",
    answer:
      "Absolutely. We excel at collaborative engagements and often work alongside your existing team members, accountants, lawyers, and other advisors. Our approach is to complement and enhance your current capabilities, not replace them. We're experienced in establishing effective communication protocols to ensure seamless collaboration with all stakeholders.",
  },
  {
    question: "What makes your firm different from other advisory services?",
    answer:
      "Our differentiation comes from our combination of deep technical expertise and practical business acumen. We don't just provide theoretical advice – we deliver actionable solutions with clear implementation pathways. Our client-centric approach, industry specialization, and commitment to measurable results set us apart from traditional advisory firms.",
  },
]

const ServicesFAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-ca-lightGray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ca-darkBlue mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our services and approach.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleExpand(index)}
                className={`w-full text-left p-6 rounded-lg flex justify-between items-center transition-colors ${
                  expandedIndex === index ? "bg-ca-purple text-white" : "bg-white hover:bg-gray-50 text-ca-darkBlue"
                }`}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${expandedIndex === index ? "transform rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white px-6 pb-6 rounded-b-lg shadow-inner"
                  >
                    <p className="text-gray-700 pt-4">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesFAQ

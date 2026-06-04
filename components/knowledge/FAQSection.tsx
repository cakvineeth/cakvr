"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react"

// FAQ data - India-specific tax and finance questions
const FAQS = [
  {
    question: "What is the due date for filing Income Tax Returns in India?",
    answer:
      "For individuals (non-audit cases), the due date is typically July 31 following the end of the financial year. For businesses and individuals requiring tax audit, it's October 31. For companies, it's usually October 31 or November 30, depending on transfer pricing applicability.",
  },
  {
    question: "What are the different forms for filing Income Tax Returns?",
    answer:
      "ITR-1 (Sahaj): For individuals with income from salary, one house property, and other sources.\nITR-2: For individuals and HUFs with income from salary, house property, capital gains, and other sources.\nITR-3: For individuals and HUFs having income from business or profession.\nITR-4 (Sugam): For presumptive income from business or profession.\nITR-5: For firms, LLPs, AOPs, and BOIs.\nITR-6: For companies other than those claiming exemption under section 11.\nITR-7: For persons including companies required to furnish return under sections 139(4A) or 139(4B) or 139(4C) or 139(4D).",
  },
  {
    question: "What is the difference between the old and new tax regimes in India?",
    answer:
      "The old tax regime allows for various deductions and exemptions (like HRA, LTA, 80C investments) but has higher tax rates. The new tax regime has lower tax rates but eliminates most deductions and exemptions. Individuals can choose which regime to opt for based on their financial situation.",
  },
  {
    question: "How is GST implemented in India?",
    answer:
      "GST in India is implemented as a dual system with Central GST (CGST) and State GST (SGST) for intra-state transactions, and Integrated GST (IGST) for inter-state transactions. Different goods and services are taxed at different rates: 0%, 5%, 12%, 18%, and 28%. Businesses with turnover exceeding ₹40 lakhs (₹20 lakhs for some states) must register for GST.",
  },
  {
    question: "What are the key compliance requirements for companies in India?",
    answer:
      "Key compliance requirements include:\n1. Annual filing of financial statements and returns with ROC\n2. Regular GST returns filing\n3. TDS/TCS deposit and returns\n4. Income Tax return filing\n5. Maintenance of statutory registers\n6. Board meetings and Annual General Meeting\n7. CSR compliance (if applicable)\n8. Compliance with labor laws like PF, ESI, etc.",
  },
  {
    question: "What are the tax benefits available for startups in India?",
    answer:
      "Startups recognized by DPIIT can avail tax benefits like:\n1. 100% tax exemption on profits for 3 consecutive years out of the first 10 years\n2. Exemption from Angel Tax under section 56(2)(viib)\n3. Tax exemption for investors on investments above fair market value\n4. Carry forward of losses even after change in shareholding pattern\n5. Tax exemption on investments in eligible startups under section 54GB",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold text-ca-darkBlue flex items-center">
          <HelpCircle className="mr-2 h-6 w-6" />
          Frequently Asked Questions
        </h2>
      </div>

      <div className="p-4">
        <div className="space-y-2">
          {FAQS.map((faq, index) => (
            <motion.div
              key={index}
              className="border rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
              >
                <span className="font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 pt-0 bg-gray-50 text-gray-600 whitespace-pre-line">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

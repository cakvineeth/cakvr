"use client"

import { motion } from "framer-motion"
import { ExternalLink, FileText, Building, Calculator, Book, Globe } from "lucide-react"

// Resource links data - India-specific government and financial resources
const RESOURCE_LINKS = [
  {
    category: "Government",
    links: [
      {
        title: "Income Tax Department",
        url: "https://www.incometaxindia.gov.in/",
        description: "Official website of the Income Tax Department, Government of India",
      },
      {
        title: "GST Portal",
        url: "https://www.gst.gov.in/",
        description: "Goods and Services Tax Portal for registration, returns, and payments",
      },
      {
        title: "Ministry of Corporate Affairs",
        url: "https://www.mca.gov.in/",
        description: "Official portal for company registrations and filings in India",
      },
      {
        title: "CBIC",
        url: "https://www.cbic.gov.in/",
        description: "Central Board of Indirect Taxes and Customs for customs and excise duties",
      },
    ],
  },
  {
    category: "Financial",
    links: [
      {
        title: "RBI",
        url: "https://www.rbi.org.in/",
        description: "Reserve Bank of India - India's central banking institution",
      },
      {
        title: "SEBI",
        url: "https://www.sebi.gov.in/",
        description: "Securities and Exchange Board of India for capital markets regulation",
      },
      {
        title: "NSDL",
        url: "https://www.nsdl.co.in/",
        description: "National Securities Depository Limited for demat accounts",
      },
    ],
  },
  {
    category: "Professional",
    links: [
      {
        title: "ICAI",
        url: "https://www.icai.org/",
        description: "The Institute of Chartered Accountants of India",
      },
      {
        title: "ICSI",
        url: "https://www.icsi.edu/",
        description: "The Institute of Company Secretaries of India",
      },
      {
        title: "ICMAI",
        url: "https://icmai.in/",
        description: "The Institute of Cost Accountants of India",
      },
    ],
  },
]

export function ResourceLinks() {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold text-ca-darkBlue flex items-center">
          <Globe className="mr-2 h-5 w-5" />
          Important Resources
        </h2>
      </div>

      <div className="p-4">
        <div className="space-y-6">
          {RESOURCE_LINKS.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="font-medium text-gray-700 mb-2 flex items-center">
                {category.category === "Government" ? (
                  <Building className="h-4 w-4 mr-1 text-gray-500" />
                ) : category.category === "Financial" ? (
                  <Calculator className="h-4 w-4 mr-1 text-gray-500" />
                ) : (
                  <Book className="h-4 w-4 mr-1 text-gray-500" />
                )}
                {category.category}
              </h3>
              <div className="space-y-2">
                {category.links.map((link) => (
                  <a
                    key={link.title}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start">
                      <FileText className="h-5 w-5 mr-2 text-ca-darkBlue flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-ca-darkBlue flex items-center">
                          {link.title}
                          <ExternalLink className="h-3 w-3 ml-1 text-gray-400" />
                        </div>
                        <p className="text-sm text-gray-600">{link.description}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

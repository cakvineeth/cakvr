"use client"

import { ExternalLink, FileText, Building, Calculator, Book, Globe, Search } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

// Resource links data - India-specific government and financial resources
const RESOURCE_LINKS = [
  {
    category: "Government",
    icon: <Building className="h-5 w-5 text-gray-500" />,
    links: [
      {
        title: "Income Tax Department",
        url: "https://www.incometaxindia.gov.in/",
        description: "Official website of the Income Tax Department, Government of India",
        tags: ["tax", "itr", "tds"],
      },
      {
        title: "GST Portal",
        url: "https://www.gst.gov.in/",
        description: "Goods and Services Tax Portal for registration, returns, and payments",
        tags: ["gst", "tax"],
      },
      {
        title: "Ministry of Corporate Affairs",
        url: "https://www.mca.gov.in/",
        description: "Official portal for company registrations and filings in India",
        tags: ["company", "roc"],
      },
      {
        title: "CBIC",
        url: "https://www.cbic.gov.in/",
        description: "Central Board of Indirect Taxes and Customs for customs and excise duties",
        tags: ["tax", "customs", "excise"],
      },
      {
        title: "EPFO",
        url: "https://www.epfindia.gov.in/",
        description: "Employees' Provident Fund Organisation for PF-related services",
        tags: ["pf", "compliance"],
      },
      {
        title: "ESIC",
        url: "https://www.esic.nic.in/",
        description: "Employees' State Insurance Corporation for ESI-related services",
        tags: ["esi", "compliance"],
      },
    ],
  },
  {
    category: "Financial",
    icon: <Calculator className="h-5 w-5 text-gray-500" />,
    links: [
      {
        title: "RBI",
        url: "https://www.rbi.org.in/",
        description: "Reserve Bank of India - India's central banking institution",
        tags: ["banking", "finance"],
      },
      {
        title: "SEBI",
        url: "https://www.sebi.gov.in/",
        description: "Securities and Exchange Board of India for capital markets regulation",
        tags: ["stocks", "markets", "investments"],
      },
      {
        title: "NSDL",
        url: "https://www.nsdl.co.in/",
        description: "National Securities Depository Limited for demat accounts",
        tags: ["demat", "investments"],
      },
      {
        title: "CDSL",
        url: "https://www.cdslindia.com/",
        description: "Central Depository Services Limited for demat accounts",
        tags: ["demat", "investments"],
      },
      {
        title: "NPCI",
        url: "https://www.npci.org.in/",
        description: "National Payments Corporation of India for digital payments",
        tags: ["payments", "upi", "banking"],
      },
    ],
  },
  {
    category: "Professional",
    icon: <Book className="h-5 w-5 text-gray-500" />,
    links: [
      {
        title: "ICAI",
        url: "https://www.icai.org/",
        description: "The Institute of Chartered Accountants of India",
        tags: ["ca", "accounting", "audit"],
      },
      {
        title: "ICSI",
        url: "https://www.icsi.edu/",
        description: "The Institute of Company Secretaries of India",
        tags: ["cs", "company", "secretarial"],
      },
      {
        title: "ICMAI",
        url: "https://icmai.in/",
        description: "The Institute of Cost Accountants of India",
        tags: ["cma", "cost", "accounting"],
      },
      {
        title: "IBBI",
        url: "https://ibbi.gov.in/",
        description: "Insolvency and Bankruptcy Board of India",
        tags: ["insolvency", "bankruptcy", "resolution"],
      },
      {
        title: "ITAT",
        url: "https://www.itat.gov.in/",
        description: "Income Tax Appellate Tribunal",
        tags: ["tax", "appeals", "litigation"],
      },
    ],
  },
  {
    category: "Tax Resources",
    icon: <FileText className="h-5 w-5 text-gray-500" />,
    links: [
      {
        title: "Tax Information Network",
        url: "https://www.tin-nsdl.com/",
        description: "For TDS/TCS returns, challan status, and PAN verification",
        tags: ["tds", "tax", "pan"],
      },
      {
        title: "e-Filing Portal",
        url: "https://www.incometax.gov.in/iec/foportal/",
        description: "Income Tax e-Filing portal for ITR filing and tax payments",
        tags: ["itr", "tax", "filing"],
      },
      {
        title: "GST Knowledge Portal",
        url: "https://cbic-gst.gov.in/",
        description: "Resources, guides, and notifications related to GST",
        tags: ["gst", "tax"],
      },
      {
        title: "Taxmann",
        url: "https://www.taxmann.com/",
        description: "Tax and corporate laws research platform",
        tags: ["tax", "research", "laws"],
      },
      {
        title: "Clear Tax",
        url: "https://cleartax.in/",
        description: "Tax filing, GST compliance, and investment platform",
        tags: ["tax", "gst", "investments"],
      },
    ],
  },
]

export default function ImportantLinksPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  // Filter links based on search term and active category
  const filteredCategories = RESOURCE_LINKS.filter((category) => {
    if (activeCategory && category.category !== activeCategory) return false

    if (!searchTerm) return true

    return category.links.some(
      (link) =>
        link.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        link.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        link.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
    )
  })

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Important Links for CA Professionals</h1>
        <p className="text-gray-600">Essential resources and websites for Chartered Accountants in India</p>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold text-ca-darkBlue flex items-center">
            <Globe className="mr-2 h-5 w-5" />
            Resource Directory
          </h2>
        </div>

        <div className="p-6">
          {/* Search and Filter */}
          <div className="mb-6 space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search resources..."
                className="pl-10 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-ca-darkBlue"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-3 py-1 text-sm rounded-md ${
                  activeCategory === null ? "bg-ca-darkBlue text-white" : "bg-white-100 text-black hover:bg-gray-200"
                }`}
              >
                All Categories
              </button>
              {RESOURCE_LINKS.map((category) => (
                <button
                  key={category.category}
                  onClick={() => setActiveCategory(activeCategory === category.category ? null : category.category)}
                  className={`px-3 py-1 text-sm rounded-md flex items-center ${
                    activeCategory === category.category
                      ? "bg-ca-darkBlue text-white"
                      : "bg-white-100 text-black hover:bg-gray-200"
                  }`}
                >
                  {category.icon}
                  <span className="ml-1">{category.category}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Resource Links */}
          <div className="space-y-8">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="font-medium text-gray-700 mb-3 flex items-center">
                    {category.icon}
                    <span className="ml-1">{category.category}</span>
                  </h3>
                  <div className="space-y-3">
                    {category.links.map((link) => (
                      <a
                        key={link.title}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-start">
                          <FileText className="h-5 w-5 mr-3 text-ca-darkBlue flex-shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <div className="font-medium text-ca-darkBlue flex items-center">
                              {link.title}
                              <ExternalLink className="h-3 w-3 ml-1 text-gray-400" />
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{link.description}</p>
                            <div className="flex flex-wrap gap-1">
                              {link.tags.map((tag) => (
                                <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500">No resources found matching your search criteria.</p>
                <button
                  onClick={() => {
                    setSearchTerm("")
                    setActiveCategory(null)
                  }}
                  className="mt-2 text-ca-darkBlue hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

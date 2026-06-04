"use client"

import { useState } from "react"
import { Database, Search, Filter, Download, ChevronDown, ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Sample CA data - rates, limits, and other important information
const CA_DATA = [
  {
    category: "Income Tax",
    items: [
      {
        title: "Basic Exemption Limit",
        description: "Minimum income threshold below which no tax is payable",
        data: [
          { key: "General Category (Below 60 years)", value: "₹2,50,000" },
          { key: "Senior Citizens (60-80 years)", value: "₹3,00,000" },
          { key: "Super Senior Citizens (Above 80 years)", value: "₹5,00,000" },
          { key: "New Tax Regime", value: "₹3,00,000" },
        ],
      },
      {
        title: "Section 80C Deduction Limit",
        description: "Maximum deduction available under Section 80C for specified investments",
        data: [{ key: "Maximum Limit", value: "₹1,50,000" }],
      },
      {
        title: "Section 80D Deduction Limits",
        description: "Deduction for medical insurance premium",
        data: [
          { key: "Self & Family (Below 60 years)", value: "₹25,000" },
          { key: "Self & Family (Above 60 years)", value: "₹50,000" },
          { key: "Parents (Below 60 years)", value: "₹25,000" },
          { key: "Parents (Above 60 years)", value: "₹50,000" },
        ],
      },
      {
        title: "Standard Deduction",
        description: "Fixed deduction available to salaried individuals",
        data: [{ key: "For Salaried Individuals", value: "₹50,000" }],
      },
      {
        title: "Interest on Housing Loan",
        description: "Deduction for interest paid on housing loan",
        data: [
          { key: "Self-occupied Property", value: "₹2,00,000" },
          { key: "Let-out Property", value: "No Limit (Full interest allowed)" },
        ],
      },
    ],
  },
  {
    category: "GST",
    items: [
      {
        title: "GST Registration Threshold",
        description: "Turnover limit beyond which GST registration is mandatory",
        data: [
          { key: "For Supply of Goods", value: "₹40,00,000 (₹20,00,000 for Special Category States)" },
          { key: "For Supply of Services", value: "₹20,00,000 (₹10,00,000 for Special Category States)" },
        ],
      },
      {
        title: "GST Rates",
        description: "Current GST rates for different categories of goods and services",
        data: [
          { key: "Nil Rate", value: "0%" },
          { key: "Reduced Rate", value: "5%" },
          { key: "Standard Rate 1", value: "12%" },
          { key: "Standard Rate 2", value: "18%" },
          { key: "Higher Rate", value: "28%" },
        ],
      },
      {
        title: "Composition Scheme Limits",
        description: "Turnover limits for opting for composition scheme",
        data: [
          { key: "For Manufacturers & Traders", value: "₹1.5 Crore" },
          { key: "For Service Providers", value: "₹50 Lakh" },
        ],
      },
      {
        title: "E-Invoicing Threshold",
        description: "Turnover limit beyond which e-invoicing is mandatory",
        data: [{ key: "Current Threshold", value: "₹10 Crore" }],
      },
    ],
  },
  {
    category: "TDS Rates",
    items: [
      {
        title: "TDS on Salary (Section 192)",
        description: "Tax deducted at source on salary payments",
        data: [{ key: "Rate", value: "As per slab rates applicable to the employee" }],
      },
      {
        title: "TDS on Interest (Section 194A)",
        description: "Tax deducted at source on interest payments",
        data: [
          { key: "Rate", value: "10%" },
          { key: "Threshold for Banks", value: "₹40,000 (₹50,000 for senior citizens)" },
          { key: "Threshold for Others", value: "₹5,000" },
        ],
      },
      {
        title: "TDS on Rent (Section 194I)",
        description: "Tax deducted at source on rent payments",
        data: [
          { key: "For Plant & Machinery", value: "2%" },
          { key: "For Land, Building, Furniture", value: "10%" },
          { key: "Threshold", value: "₹2,40,000 per financial year" },
        ],
      },
      {
        title: "TDS on Professional Fees (Section 194J)",
        description: "Tax deducted at source on professional or technical services",
        data: [
          { key: "General Rate", value: "10%" },
          { key: "For Technical Services", value: "2%" },
          { key: "Threshold", value: "₹30,000 per financial year" },
        ],
      },
    ],
  },
  {
    category: "Company Law",
    items: [
      {
        title: "Company Types",
        description: "Different types of companies under Companies Act, 2013",
        data: [
          {
            key: "Private Limited Company",
            value: "Minimum 2 directors, Minimum 2 shareholders, Maximum 200 shareholders",
          },
          { key: "Public Limited Company", value: "Minimum 3 directors, Minimum 7 shareholders, No maximum limit" },
          { key: "One Person Company", value: "1 director, 1 member" },
          { key: "Limited Liability Partnership", value: "Minimum 2 partners, No maximum limit" },
        ],
      },
      {
        title: "Minimum Capital Requirements",
        description: "Minimum capital required for incorporation",
        data: [
          { key: "Private Limited Company", value: "No minimum requirement" },
          { key: "Public Limited Company", value: "No minimum requirement" },
          { key: "One Person Company", value: "No minimum requirement" },
          { key: "Limited Liability Partnership", value: "No minimum requirement" },
        ],
      },
      {
        title: "Annual Compliance Requirements",
        description: "Mandatory annual filings for companies",
        data: [
          { key: "Annual Return (MGT-7)", value: "Within 60 days of AGM" },
          { key: "Financial Statements (AOC-4)", value: "Within 30 days of AGM" },
          { key: "Annual General Meeting (AGM)", value: "Within 6 months from the end of financial year" },
        ],
      },
    ],
  },
]

export default function CADataPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({})

  // Toggle item expansion
  const toggleItem = (itemTitle: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemTitle]: !prev[itemTitle],
    }))
  }

  // Filter data based on search term and active category
  const filteredData = CA_DATA.filter((category) => {
    if (activeCategory && category.category !== activeCategory) return false

    if (!searchTerm) return true

    return category.items.some(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.data.some(
          (d) =>
            d.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
            d.value.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
    )
  })

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Important Information</h1>
        <p className="text-gray-600">
          Comprehensive reference for tax rates, limits, and other important information for CA professionals in India
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold text-ca-darkBlue flex items-center">
            <Database className="mr-2 h-5 w-5" />
            Information Reference
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
                placeholder="Search information..."
                className="pl-10 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-ca-darkBlue"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-3 py-1 text-sm rounded-md flex items-center ${
                  activeCategory === null ? "bg-ca-darkBlue text-white" : "bg-white-100 text-black hover:bg-gray-200"
                }`}
              >
                <Filter className="h-4 w-4 mr-1" />
                All Categories
              </button>
              {CA_DATA.map((category) => (
                <button
                  key={category.category}
                  onClick={() => setActiveCategory(activeCategory === category.category ? null : category.category)}
                  className={`px-3 py-1 text-sm rounded-md ${
                    activeCategory === category.category
                      ? "bg-ca-darkBlue text-white"
                      : "bg-white-100 text-black hover:bg-gray-200"
                  }`}
                >
                  {category.category}
                </button>
              ))}
            </div>
          </div>

          {/* Data Display */}
          <div className="space-y-8">
            {filteredData.length > 0 ? (
              filteredData.map((category) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <h3 className="font-semibold text-lg text-gray-800 border-b pb-2">{category.category}</h3>

                  {category.items.map((item) => (
                    <div key={item.title} className="border rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleItem(item.title)}
                        className="w-full flex justify-between items-center p-4 text-left focus:outline-none hover:bg-gray-50"
                      >
                        <div>
                          <h4 className="font-medium text-gray-900">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                        {expandedItems[item.title] ? (
                          <ChevronUp className="h-5 w-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        )}
                      </button>

                      <AnimatePresence>
                        {expandedItems[item.title] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="p-4 pt-0 bg-gray-50">
                              <table className="min-w-full divide-y divide-gray-200 mt-2">
                                <tbody className="divide-y divide-gray-200">
                                  {item.data.map((data, index) => (
                                    <tr key={index}>
                                      <td className="px-4 py-3 text-sm text-gray-700 w-1/2">{data.key}</td>
                                      <td className="px-4 py-3 text-sm font-medium text-gray-900 w-1/2">
                                        {data.value}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </motion.div>
              ))
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500">No information found matching your search criteria.</p>
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

          <div className="mt-8 text-center">
            <button className="inline-flex items-center px-4 py-2 border border-ca-darkBlue text-ca-darkBlue rounded-md hover:bg-ca-darkBlue hover:text-white transition-colors">
              <Download className="h-4 w-4 mr-2" />
              Download Complete Reference
            </button>
            <p className="mt-2 text-xs text-gray-500">
              Last updated: April 1, 2023. Information is provided for reference only and may change based on government
              notifications.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

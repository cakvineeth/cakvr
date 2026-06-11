"use client"

import { useState } from "react"
import { Database, Search, Filter, ChevronDown, ChevronUp, Layers, Sparkles } from "lucide-react"
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
    <div className="max-w-7xl mx-auto">
      <div className="relative mb-8 overflow-hidden rounded-3xl bg-[#0A0F25] p-8 text-white shadow-2xl md:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,140,56,0.35),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(74,40,128,0.55),_transparent_38%)]" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_380px] lg:items-center">
          <div>
            <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
              <Sparkles className="mr-2 h-4 w-4 text-ca-orange" />
              Quick reference desk
            </div>
            <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">Important Information</h1>
            <p className="mt-4 max-w-2xl text-white/80">
              A compact knowledge board for tax limits, GST thresholds, TDS rates, and company law compliance points.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
              <p className="text-sm text-white/65">Categories</p>
              <p className="mt-1 text-3xl font-bold">{CA_DATA.length}</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
              <p className="text-sm text-white/65">References</p>
              <p className="mt-1 text-3xl font-bold">{CA_DATA.reduce((total, category) => total + category.items.length, 0)}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8 grid gap-4 rounded-3xl border border-gray-200 bg-white p-4 shadow-lg lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search limits, rates, sections, or compliance terms..."
            className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-3 pl-12 pr-4 text-black outline-none transition focus:border-ca-purple focus:bg-white focus:ring-4 focus:ring-ca-purple/10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory(null)}
            className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition ${
              activeCategory === null ? "bg-ca-darkBlue text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <Filter className="mr-2 h-4 w-4" />
            All
          </button>
          {CA_DATA.map((category) => (
            <button
              key={category.category}
              onClick={() => setActiveCategory(activeCategory === category.category ? null : category.category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeCategory === category.category
                  ? "bg-ca-purple text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {filteredData.length > 0 ? (
          filteredData.map((category, categoryIndex) => (
            <motion.section
              key={category.category}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.08 }}
              className="rounded-3xl border border-gray-200 bg-white p-5 shadow-md"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="mr-3 rounded-2xl bg-gradient-to-br from-ca-purple to-ca-orange p-3 text-white">
                    <Layers className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{category.category}</h2>
                    <p className="text-sm text-gray-500">{category.items.length} reference cards</p>
                  </div>
                </div>
                <Database className="h-8 w-8 text-gray-100" />
              </div>

              <div className="space-y-3">
                {category.items
                  .filter(
                    (item) =>
                      !searchTerm ||
                      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      item.data.some(
                        (data) =>
                          data.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          data.value.toLowerCase().includes(searchTerm.toLowerCase()),
                      ),
                  )
                  .map((item) => (
                    <div key={item.title} className="overflow-hidden rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50">
                      <button
                        onClick={() => toggleItem(item.title)}
                        className="flex w-full items-center justify-between gap-4 p-5 text-left transition hover:bg-ca-purple/5"
                      >
                        <div>
                          <h3 className="font-bold text-ca-darkBlue">{item.title}</h3>
                          <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                        </div>
                        <div className="rounded-full bg-white p-2 shadow-sm">
                          {expandedItems[item.title] ? (
                            <ChevronUp className="h-5 w-5 text-ca-purple" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-ca-purple" />
                          )}
                        </div>
                      </button>

                      <AnimatePresence>
                        {expandedItems[item.title] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="grid gap-3 border-t border-gray-100 bg-white p-4 sm:grid-cols-2">
                              {item.data.map((data) => (
                                <div key={`${item.title}-${data.key}`} className="rounded-xl bg-gray-50 p-4">
                                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">{data.key}</p>
                                  <p className="mt-2 font-bold text-gray-900">{data.value}</p>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
              </div>
            </motion.section>
          ))
        ) : (
          <div className="rounded-3xl border border-dashed border-gray-300 bg-white p-10 text-center lg:col-span-2">
            <p className="text-gray-500">No information found matching your search criteria.</p>
            <button
              onClick={() => {
                setSearchTerm("")
                setActiveCategory(null)
              }}
              className="mt-3 font-medium text-ca-purple hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      <p className="mt-6 text-center text-xs text-gray-500">
        Information is provided for quick reference only and may change based on government notifications.
      </p>
    </div>
  )
}

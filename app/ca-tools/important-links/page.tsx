"use client"

import { ExternalLink, FileText, Building, Calculator, Book, Globe, Search, Sparkles } from "lucide-react"
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
    <div className="max-w-7xl mx-auto">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ca-darkBlue via-ca-purple to-ca-orange p-8 md:p-10 text-white shadow-2xl mb-8">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-ca-orange/30 blur-3xl" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
              <Sparkles className="mr-2 h-4 w-4" />
              Curated professional portals
            </div>
            <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">Important Links</h1>
            <p className="mt-4 max-w-2xl text-white/85">
              A quick-launch board for tax, GST, company law, banking, and professional resources used by CA teams.
            </p>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/15 p-5 backdrop-blur">
            <p className="text-sm text-white/75">Resources indexed</p>
            <p className="mt-1 text-4xl font-bold">{RESOURCE_LINKS.reduce((count, category) => count + category.links.length, 0)}</p>
            <p className="mt-2 text-sm text-white/75">Across {RESOURCE_LINKS.length} focused categories</p>
          </div>
        </div>
      </div>

      <div className="sticky top-20 z-20 mb-8 rounded-2xl border border-gray-200 bg-white/90 p-4 shadow-lg backdrop-blur">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by portal, tag, or purpose..."
              className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-12 pr-4 text-black outline-none transition focus:border-ca-purple focus:bg-white focus:ring-4 focus:ring-ca-purple/10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeCategory === null ? "bg-ca-darkBlue text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All
            </button>
            {RESOURCE_LINKS.map((category) => (
              <button
                key={category.category}
                onClick={() => setActiveCategory(activeCategory === category.category ? null : category.category)}
                className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeCategory === category.category
                    ? "bg-ca-purple text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.category}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category, index) => (
            <motion.section
              key={category.category}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="rounded-3xl border border-gray-200 bg-white p-5 shadow-md"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <div className="flex items-center">
                  <div className="mr-3 rounded-2xl bg-ca-purple/10 p-3">{category.icon}</div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{category.category}</h2>
                    <p className="text-sm text-gray-500">{category.links.length} portals</p>
                  </div>
                </div>
                <Globe className="hidden h-10 w-10 text-gray-100 sm:block" />
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {category.links
                  .filter(
                    (link) =>
                      !searchTerm ||
                      link.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      link.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      link.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
                  )
                  .map((link) => (
                    <a
                      key={link.title}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-ca-purple/30 hover:shadow-xl"
                    >
                      <div className="absolute right-4 top-4 rounded-full bg-ca-purple/10 p-2 text-ca-purple opacity-0 transition group-hover:opacity-100">
                        <ExternalLink className="h-4 w-4" />
                      </div>
                      <FileText className="mb-4 h-7 w-7 text-ca-purple" />
                      <h3 className="pr-10 text-lg font-bold text-ca-darkBlue">{link.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-600">{link.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {link.tags.map((tag) => (
                          <span key={tag} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-600 shadow-sm">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </a>
                  ))}
              </div>
            </motion.section>
          ))
        ) : (
          <div className="rounded-3xl border border-dashed border-gray-300 bg-white p-10 text-center">
            <p className="text-gray-500">No resources found matching your search criteria.</p>
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
    </div>
  )
}

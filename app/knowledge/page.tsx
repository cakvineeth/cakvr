"use client"

import { useState } from "react"
import Logo from "@/components/Logo"
import { Calendar } from "@/components/knowledge/Calendar"
import { BlogSection } from "@/components/knowledge/BlogSection"
import { NewsletterSignup } from "@/components/knowledge/NewsletterSignup"
import { ResourceLinks } from "@/components/knowledge/ResourceLinks"
import { TaxCalculator } from "@/components/knowledge/TaxCalculator"
import { FAQSection } from "@/components/knowledge/FAQSection"
import { motion } from "framer-motion"

export default function Knowledge() {
  const [activeTab, setActiveTab] = useState("all")

  return (
    <div className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center mb-6">
            <Logo size="large" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-ca-darkBlue">
            Knowledge Center
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Access valuable resources, stay updated with the latest tax regulations, and enhance your financial
            knowledge with our comprehensive tools and insights.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {["all", "events", "articles", "resources", "tools"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab ? "bg-ca-darkBlue text-white shadow-lg" : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - 2/3 width on desktop */}
          <div className="lg:col-span-2 space-y-10">
            {/* Events Calendar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: activeTab === "all" || activeTab === "events" ? 1 : 0.5 }}
              className={`${activeTab !== "all" && activeTab !== "events" ? "hidden sm:block" : ""}`}
            >
              <Calendar />
            </motion.div>

            {/* Blog Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: activeTab === "all" || activeTab === "articles" ? 1 : 0.5 }}
              className={`${activeTab !== "all" && activeTab !== "articles" ? "hidden sm:block" : ""}`}
            >
              <BlogSection />
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: activeTab === "all" || activeTab === "resources" ? 1 : 0.5 }}
              className={`${activeTab !== "all" && activeTab !== "resources" ? "hidden sm:block" : ""}`}
            >
              <FAQSection />
            </motion.div>
          </div>

          {/* Right Column - 1/3 width on desktop */}
          <div className="space-y-8">
            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <NewsletterSignup />
            </motion.div>

            {/* Tax Calculator */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: activeTab === "all" || activeTab === "tools" ? 1 : 0.7, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className={`${activeTab !== "all" && activeTab !== "tools" ? "hidden sm:block" : ""}`}
            >
              <TaxCalculator />
            </motion.div>

            {/* Resource Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: activeTab === "all" || activeTab === "resources" ? 1 : 0.7, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className={`${activeTab !== "all" && activeTab !== "resources" ? "hidden sm:block" : ""}`}
            >
              <ResourceLinks />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

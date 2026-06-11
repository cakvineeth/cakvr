"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Calculator } from "lucide-react"

export function TaxCalculator() {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold text-ca-darkBlue flex items-center">
          <Calculator className="mr-2 h-5 w-5" />
          Income Tax Calculator
          <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">AY 2026-27 & 2027-28</span>
        </h2>
      </div>

      <div className="p-6">
        <p className="text-gray-600 mb-5">
          Use the detailed calculator to compare old and new regimes, select the assessment year, and view slab-wise tax
          breakup.
        </p>
        <Link
          href="/ca-tools/tax-calculator"
          className="inline-flex items-center rounded-md bg-ca-darkBlue px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Open Tax Calculator
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  )
}

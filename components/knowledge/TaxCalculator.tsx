"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calculator, ArrowRight, HelpCircle } from "lucide-react"

// Tax slab rates for India FY 2025-26 (AY 2026-27)
const NEW_REGIME = [
  { limit: 400000, rate: 0 },
  { limit: 800000, rate: 5 },
  { limit: 1200000, rate: 10 },
  { limit: 1600000, rate: 15 },
  { limit: 2000000, rate: 20 },
  { limit: 2400000, rate: 25 },
  { limit: Number.POSITIVE_INFINITY, rate: 30 },
]

// Old regime remains for comparison
const OLD_REGIME = [
  { limit: 250000, rate: 0 },
  { limit: 500000, rate: 5 },
  { limit: 750000, rate: 10 },
  { limit: 1000000, rate: 15 },
  { limit: 1250000, rate: 20 },
  { limit: 1500000, rate: 25 },
  { limit: Number.POSITIVE_INFINITY, rate: 30 },
]

export function TaxCalculator() {
  const [income, setIncome] = useState<number | "">("")
  const [regime, setRegime] = useState<"old" | "new">("new")
  const [age, setAge] = useState<"below60" | "60to80" | "above80">("below60")
  const [showResults, setShowResults] = useState(false)

  // Calculate tax based on income, regime and age
  const calculateTax = () => {
    if (income === "") return { tax: 0, cess: 0, total: 0 }

    let taxableIncome = Number(income)
    let tax = 0

    // Apply basic exemption based on age (for old regime)
    if (regime === "old") {
      if (age === "below60") {
        taxableIncome = Math.max(0, taxableIncome - 250000)
      } else if (age === "60to80") {
        taxableIncome = Math.max(0, taxableIncome - 300000)
      } else {
        taxableIncome = Math.max(0, taxableIncome - 500000)
      }
    }

    // Apply tax slabs
    const slabs = regime === "old" ? OLD_REGIME : NEW_REGIME
    let remainingIncome = taxableIncome
    let prevLimit = 0

    for (const slab of slabs) {
      const slabIncome = Math.min(remainingIncome, slab.limit - prevLimit)
      tax += (slabIncome * slab.rate) / 100
      remainingIncome -= slabIncome
      prevLimit = slab.limit
      if (remainingIncome <= 0) break
    }

    // Apply rebate under section 87A (if applicable)
    if (regime === "old" && Number(income) <= 500000) {
      tax = Math.max(0, tax - 12500)
    } else if (regime === "new" && Number(income) <= 700000) {
      tax = Math.max(0, tax - 25000)
    }

    // Calculate health and education cess (4%)
    const cess = tax * 0.04

    return {
      tax: Math.round(tax),
      cess: Math.round(cess),
      total: Math.round(tax + cess),
    }
  }

  const taxDetails = calculateTax()

  const handleCalculate = () => {
    setShowResults(true)
  }

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
          <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">FY 2025-26</span>
        </h2>
      </div>

      <div className="p-4">
        <div className="space-y-4">
          {/* Income Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Annual Income (₹)</label>
            <input
              type="number"
              value={income}
              onChange={(e) => {
                setIncome(e.target.value === "" ? "" : Number(e.target.value))
                setShowResults(false)
              }}
              placeholder="Enter your annual income"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-ca-darkBlue"
            />
          </div>

          {/* Tax Regime Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tax Regime
              <span className="inline-flex items-center ml-1 text-gray-400 hover:text-gray-600 cursor-help">
                <HelpCircle className="h-3 w-3" />
              </span>
            </label>
            <div className="flex space-x-2">
              <button
                type="button"
                onClick={() => {
                  setRegime("old")
                  setShowResults(false)
                }}
                className={`flex-1 py-2 px-3 rounded-md text-sm font-medium ${
                  regime === "old" ? "bg-ca-darkBlue text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Old Regime
              </button>
              <button
                type="button"
                onClick={() => {
                  setRegime("new")
                  setShowResults(false)
                }}
                className={`flex-1 py-2 px-3 rounded-md text-sm font-medium ${
                  regime === "new" ? "bg-ca-darkBlue text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                New Regime
              </button>
            </div>
          </div>

          {/* Calculate Button */}
          <button
            onClick={handleCalculate}
            disabled={income === ""}
            className="w-full bg-ca-darkBlue text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center"
          >
            Calculate Tax
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>

          {/* Results */}
          {showResults && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-4 border-t pt-4"
            >
              <h3 className="font-medium text-gray-700 mb-2">Tax Calculation Results</h3>
              <div className="space-y-2">
                <div className="flex justify-between py-1 border-b">
                  <span className="text-gray-600">Income Tax</span>
                  <span className="font-medium">₹ {taxDetails.tax.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between py-1 border-b">
                  <span className="text-gray-600">Health & Education Cess (4%)</span>
                  <span className="font-medium">₹ {taxDetails.cess.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between py-2 font-bold">
                  <span>Total Tax Liability</span>
                  <span className="text-ca-darkBlue">₹ {taxDetails.total.toLocaleString("en-IN")}</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

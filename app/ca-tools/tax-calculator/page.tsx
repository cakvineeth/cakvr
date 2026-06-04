"use client"

import { useState } from "react"
import { Calculator, ArrowRight, HelpCircle, Plus, Minus } from "lucide-react"
import { motion } from "framer-motion"

export default function TaxCalculatorPage() {
  const [income, setIncome] = useState<number | "">("")
  const [regime, setRegime] = useState<"old" | "new">("old")
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false)

  // Deductions and exemptions for old regime
  const [standardDeduction, setStandardDeduction] = useState<number>(50000)
  const [section80C, setSection80C] = useState<number | "">(0)
  const [section80D, setSection80D] = useState<number | "">(0)
  const [hraExemption, setHraExemption] = useState<number | "">(0)
  const [ltaExemption, setLtaExemption] = useState<number | "">(0)
  const [homeLoanInterest, setHomeLoanInterest] = useState<number | "">(0)
  const [otherExemptions, setOtherExemptions] = useState<number | "">(0)

  const [showResults, setShowResults] = useState(false)

  // Calculate tax based on old regime
  const calculateOldRegimeTax = () => {
    if (income === "") return { tax: 0, cess: 0, total: 0, taxableIncome: 0 }

    // Calculate total deductions
    const totalDeductions = (Number(section80C) || 0) + (Number(section80D) || 0)

    // Calculate taxable income
    const taxableIncome = Math.max(
      Number(income) -
        totalDeductions -
        (Number(hraExemption) || 0) -
        (Number(ltaExemption) || 0) -
        standardDeduction -
        (Number(homeLoanInterest) || 0) -
        (Number(otherExemptions) || 0),
      0,
    )

    let tax = 0

    // Apply tax slabs progressively
    if (taxableIncome <= 250000) {
      tax = 0
    } else if (taxableIncome <= 500000) {
      tax = (taxableIncome - 250000) * 0.05
    } else if (taxableIncome <= 1000000) {
      tax = 12500 + (taxableIncome - 500000) * 0.2
    } else {
      tax = 12500 + 100000 + (taxableIncome - 1000000) * 0.3
    }

    // Apply rebate under section 87A (if applicable)
    if (taxableIncome <= 500000) {
      tax = Math.max(0, tax - 12500)
    }

    // Calculate health and education cess (4%)
    const cess = tax * 0.04

    return {
      tax: Math.round(tax),
      cess: Math.round(cess),
      total: Math.round(tax + cess),
      taxableIncome: Math.round(taxableIncome),
    }
  }

  // Calculate tax based on new regime
  const calculateNewRegimeTax = () => {
    if (income === "") return { tax: 0, cess: 0, total: 0, taxableIncome: 0 }

    // In new regime, only standard deduction is allowed
    const taxableIncome = Math.max(Number(income) - standardDeduction, 0)
    let tax = 0

    // Apply tax slabs progressively
    if (taxableIncome <= 250000) {
      tax = 0
    } else if (taxableIncome <= 500000) {
      tax = (taxableIncome - 250000) * 0.05
    } else if (taxableIncome <= 750000) {
      tax = 12500 + (taxableIncome - 500000) * 0.1
    } else if (taxableIncome <= 1000000) {
      tax = 37500 + (taxableIncome - 750000) * 0.15
    } else if (taxableIncome <= 1250000) {
      tax = 75000 + (taxableIncome - 1000000) * 0.2
    } else if (taxableIncome <= 1500000) {
      tax = 125000 + (taxableIncome - 1250000) * 0.25
    } else {
      tax = 187500 + (taxableIncome - 1500000) * 0.3
    }

    // Apply rebate under section 87A (if applicable)
    if (taxableIncome <= 700000) {
      tax = Math.max(0, tax - 25000)
    }

    // Calculate health and education cess (4%)
    const cess = tax * 0.04

    return {
      tax: Math.round(tax),
      cess: Math.round(cess),
      total: Math.round(tax + cess),
      taxableIncome: Math.round(taxableIncome),
    }
  }

  const taxDetails = regime === "old" ? calculateOldRegimeTax() : calculateNewRegimeTax()

  const handleCalculate = () => {
    setShowResults(true)
  }

  // Common input style with explicit background and text colors
  const inputStyle =
    "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-ca-darkBlue bg-white text-black"

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Income Tax Calculator</h1>
        <p className="text-gray-600">
          Calculate your income tax liability for the Financial Year 2024-25 (Assessment Year 2025-26)
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold text-ca-darkBlue flex items-center">
            <Calculator className="mr-2 h-5 w-5" />
            Income Tax Calculator
            <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">FY 2024-25</span>
          </h2>
        </div>

        <div className="p-6">
          <div className="space-y-6">
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
                className={inputStyle}
                style={{ color: "black", backgroundColor: "white" }}
              />
            </div>

            {/* Tax Regime Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                Tax Regime
                <div className="group relative ml-1">
                  <HelpCircle className="h-4 w-4 text-gray-400 cursor-help" />
                  <div className="absolute left-0 bottom-full mb-2 w-64 bg-black text-white text-xs rounded p-2 hidden group-hover:block z-10">
                    <p>Old Regime: Higher tax rates but allows deductions and exemptions</p>
                    <p className="mt-1">
                      New Regime: Lower tax rates but most deductions and exemptions are not available
                    </p>
                  </div>
                </div>
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

            {/* Advanced Options Toggle */}
            <div>
              <button
                type="button"
                onClick={() => setShowAdvancedOptions(!showAdvancedOptions)}
                className="flex items-center text-ca-darkBlue hover:text-blue-700 text-sm font-medium"
              >
                {showAdvancedOptions ? (
                  <>
                    <Minus className="h-4 w-4 mr-1" />
                    Hide Advanced Options
                  </>
                ) : (
                  <>
                    <Plus className="h-4 w-4 mr-1" />
                    Show Advanced Options
                  </>
                )}
              </button>
            </div>

            {/* Advanced Options */}
            {showAdvancedOptions && (
              <div className="space-y-4 border-t border-b py-4">
                <h3 className="font-medium text-gray-700">Deductions & Exemptions</h3>

                {/* Standard Deduction */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Standard Deduction (₹)
                    <span className="ml-1 text-xs text-gray-500">(Fixed at ₹50,000)</span>
                  </label>
                  <input
                    type="number"
                    value={standardDeduction}
                    disabled
                    className="w-full px-3 py-2 border rounded-md bg-gray-100 text-gray-700"
                    style={{ color: "black" }}
                  />
                </div>

                {regime === "old" && (
                  <>
                    {/* Section 80C */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                        Section 80C Deductions (₹)
                        <div className="group relative ml-1">
                          <HelpCircle className="h-4 w-4 text-gray-400 cursor-help" />
                          <div className="absolute left-0 bottom-full mb-2 w-64 bg-black text-white text-xs rounded p-2 hidden group-hover:block z-10">
                            <p>Includes PPF, ELSS, Life Insurance Premium, etc. (Max: ₹1,50,000)</p>
                          </div>
                        </div>
                      </label>
                      <input
                        type="number"
                        value={section80C}
                        onChange={(e) => {
                          const value = e.target.value === "" ? "" : Number(e.target.value)
                          setSection80C(value === "" ? value : Math.min(value, 150000))
                          setShowResults(false)
                        }}
                        placeholder="Enter amount (max: ₹1,50,000)"
                        className={inputStyle}
                        style={{ color: "black", backgroundColor: "white" }}
                      />
                    </div>

                    {/* Section 80D */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                        Section 80D Deductions (₹)
                        <div className="group relative ml-1">
                          <HelpCircle className="h-4 w-4 text-gray-400 cursor-help" />
                          <div className="absolute left-0 bottom-full mb-2 w-64 bg-black text-white text-xs rounded p-2 hidden group-hover:block z-10">
                            <p>
                              Health Insurance Premium (Max: ₹25,000 for self & family, additional ₹25,000 for parents)
                            </p>
                          </div>
                        </div>
                      </label>
                      <input
                        type="number"
                        value={section80D}
                        onChange={(e) => {
                          const value = e.target.value === "" ? "" : Number(e.target.value)
                          setSection80D(value === "" ? value : Math.min(value, 100000))
                          setShowResults(false)
                        }}
                        placeholder="Enter amount"
                        className={inputStyle}
                        style={{ color: "black", backgroundColor: "white" }}
                      />
                    </div>

                    {/* HRA Exemption */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">HRA Exemption (₹)</label>
                      <input
                        type="number"
                        value={hraExemption}
                        onChange={(e) => {
                          setHraExemption(e.target.value === "" ? "" : Number(e.target.value))
                          setShowResults(false)
                        }}
                        placeholder="Enter amount"
                        className={inputStyle}
                        style={{ color: "black", backgroundColor: "white" }}
                      />
                    </div>

                    {/* LTA Exemption */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">LTA Exemption (₹)</label>
                      <input
                        type="number"
                        value={ltaExemption}
                        onChange={(e) => {
                          setLtaExemption(e.target.value === "" ? "" : Number(e.target.value))
                          setShowResults(false)
                        }}
                        placeholder="Enter amount"
                        className={inputStyle}
                        style={{ color: "black", backgroundColor: "white" }}
                      />
                    </div>

                    {/* Home Loan Interest */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                        Home Loan Interest (₹)
                        <div className="group relative ml-1">
                          <HelpCircle className="h-4 w-4 text-gray-400 cursor-help" />
                          <div className="absolute left-0 bottom-full mb-2 w-64 bg-black text-white text-xs rounded p-2 hidden group-hover:block z-10">
                            <p>Section 24B & 80EEA (Max: ₹2,00,000 for self-occupied property)</p>
                          </div>
                        </div>
                      </label>
                      <input
                        type="number"
                        value={homeLoanInterest}
                        onChange={(e) => {
                          const value = e.target.value === "" ? "" : Number(e.target.value)
                          setHomeLoanInterest(value === "" ? value : Math.min(value, 200000))
                          setShowResults(false)
                        }}
                        placeholder="Enter amount (max: ₹2,00,000)"
                        className={inputStyle}
                        style={{ color: "black", backgroundColor: "white" }}
                      />
                    </div>

                    {/* Other Exemptions */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                        Other Exemptions (₹)
                        <div className="group relative ml-1">
                          <HelpCircle className="h-4 w-4 text-gray-400 cursor-help" />
                          <div className="absolute left-0 bottom-full mb-2 w-64 bg-black text-white text-xs rounded p-2 hidden group-hover:block z-10">
                            <p>Professional Tax, NPS, 80G donations, etc.</p>
                          </div>
                        </div>
                      </label>
                      <input
                        type="number"
                        value={otherExemptions}
                        onChange={(e) => {
                          setOtherExemptions(e.target.value === "" ? "" : Number(e.target.value))
                          setShowResults(false)
                        }}
                        placeholder="Enter amount"
                        className={inputStyle}
                        style={{ color: "black", backgroundColor: "white" }}
                      />
                    </div>
                  </>
                )}
              </div>
            )}

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
                    <span className="text-gray-600">Gross Total Income</span>
                    <span className="font-medium text-black">₹ {Number(income).toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b">
                    <span className="text-gray-600">Taxable Income</span>
                    <span className="font-medium text-black">₹ {taxDetails.taxableIncome.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b">
                    <span className="text-gray-600">Income Tax</span>
                    <span className="font-medium text-black">₹ {taxDetails.tax.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b">
                    <span className="text-gray-600">Health & Education Cess (4%)</span>
                    <span className="font-medium text-black">₹ {taxDetails.cess.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between py-2 font-bold">
                    <span className="text-black">Total Tax Liability</span>
                    <span className="text-ca-darkBlue">₹ {taxDetails.total.toLocaleString("en-IN")}</span>
                  </div>
                </div>

                <div className="mt-4 bg-blue-50 p-3 rounded-md text-xs text-gray-600">
                  <p className="font-medium text-gray-700 mb-1">Note:</p>
                  <p>
                    This is a simplified calculation for illustration purposes only. For accurate tax assessment, please
                    consult with a tax professional.
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold text-ca-darkBlue">Tax Slabs for FY 2024-25</h2>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-3">Old Tax Regime</h3>
              <div className="border rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Income Range
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Tax Rate
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Up to ₹2,50,000</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Nil</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹2,50,001 to ₹5,00,000</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">5%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹5,00,001 to ₹10,00,000</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">20%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Above ₹10,00,000</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">30%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">New Tax Regime</h3>
              <div className="border rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Income Range
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Tax Rate
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Up to ₹2,50,000</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Nil</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹2,50,001 to ₹5,00,000</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">5%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹5,00,001 to ₹7,50,000</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">10%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹7,50,001 to ₹10,00,000</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">15%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹10,00,001 to ₹12,50,000</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">20%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹12,50,001 to ₹15,00,000</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">25%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Above ₹15,00,000</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">30%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

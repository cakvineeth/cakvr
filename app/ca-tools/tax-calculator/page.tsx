"use client"

import { useMemo, useState } from "react"
import { ArrowRight, Calculator, HelpCircle } from "lucide-react"

type AssessmentYear = "2026-27" | "2027-28"
type Regime = "new" | "old"

type Slab = {
  upto: number | null
  rate: number
  label: string
}

type TaxConfig = {
  financialYear: string
  note: string
  regimes: Record<
    Regime,
    {
      label: string
      standardDeduction: number
      rebateLimit: number
      rebateAmount: number
      slabs: Slab[]
    }
  >
}

const TAX_CONFIG: Record<AssessmentYear, TaxConfig> = {
  "2026-27": {
    financialYear: "2025-26",
    note: "AY 2026-27 slabs for non-senior resident individuals.",
    regimes: {
      old: {
        label: "Old Regime",
        standardDeduction: 50000,
        rebateLimit: 500000,
        rebateAmount: 12500,
        slabs: [
          { upto: 250000, rate: 0, label: "Up to ₹2,50,000" },
          { upto: 500000, rate: 0.05, label: "₹2,50,001 to ₹5,00,000" },
          { upto: 1000000, rate: 0.2, label: "₹5,00,001 to ₹10,00,000" },
          { upto: null, rate: 0.3, label: "Above ₹10,00,000" },
        ],
      },
      new: {
        label: "New Regime",
        standardDeduction: 75000,
        rebateLimit: 1200000,
        rebateAmount: 60000,
        slabs: [
          { upto: 400000, rate: 0, label: "Up to ₹4,00,000" },
          { upto: 800000, rate: 0.05, label: "₹4,00,001 to ₹8,00,000" },
          { upto: 1200000, rate: 0.1, label: "₹8,00,001 to ₹12,00,000" },
          { upto: 1600000, rate: 0.15, label: "₹12,00,001 to ₹16,00,000" },
          { upto: 2000000, rate: 0.2, label: "₹16,00,001 to ₹20,00,000" },
          { upto: 2400000, rate: 0.25, label: "₹20,00,001 to ₹24,00,000" },
          { upto: null, rate: 0.3, label: "Above ₹24,00,000" },
        ],
      },
    },
  },
  "2027-28": {
    financialYear: "2026-27",
    note: "FY 2026-27 / AY 2027-28 uses the same slab structure currently applicable after Budget 2026.",
    regimes: {
      old: {
        label: "Old Regime",
        standardDeduction: 50000,
        rebateLimit: 500000,
        rebateAmount: 12500,
        slabs: [
          { upto: 250000, rate: 0, label: "Up to ₹2,50,000" },
          { upto: 500000, rate: 0.05, label: "₹2,50,001 to ₹5,00,000" },
          { upto: 1000000, rate: 0.2, label: "₹5,00,001 to ₹10,00,000" },
          { upto: null, rate: 0.3, label: "Above ₹10,00,000" },
        ],
      },
      new: {
        label: "New Regime",
        standardDeduction: 75000,
        rebateLimit: 1200000,
        rebateAmount: 60000,
        slabs: [
          { upto: 400000, rate: 0, label: "Up to ₹4,00,000" },
          { upto: 800000, rate: 0.05, label: "₹4,00,001 to ₹8,00,000" },
          { upto: 1200000, rate: 0.1, label: "₹8,00,001 to ₹12,00,000" },
          { upto: 1600000, rate: 0.15, label: "₹12,00,001 to ₹16,00,000" },
          { upto: 2000000, rate: 0.2, label: "₹16,00,001 to ₹20,00,000" },
          { upto: 2400000, rate: 0.25, label: "₹20,00,001 to ₹24,00,000" },
          { upto: null, rate: 0.3, label: "Above ₹24,00,000" },
        ],
      },
    },
  },
}

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value)

const calculateSlabTax = (taxableIncome: number, slabs: Slab[]) => {
  let previousLimit = 0
  let tax = 0

  const breakup = slabs.map((slab) => {
    const upperLimit = slab.upto ?? taxableIncome
    const slabAmount = Math.max(Math.min(taxableIncome, upperLimit) - previousLimit, 0)
    const slabTax = slabAmount * slab.rate
    previousLimit = upperLimit
    tax += slabTax

    return {
      label: slab.label,
      rate: slab.rate,
      taxableAmount: Math.round(slabAmount),
      tax: Math.round(slabTax),
    }
  })

  return { tax, breakup }
}

const calculateTax = (
  annualIncome: number,
  assessmentYear: AssessmentYear,
  regime: Regime,
  oldRegimeDeductions: number,
) => {
  const config = TAX_CONFIG[assessmentYear].regimes[regime]
  const deductions = config.standardDeduction + (regime === "old" ? oldRegimeDeductions : 0)
  const taxableIncome = Math.max(annualIncome - deductions, 0)
  const slabResult = calculateSlabTax(taxableIncome, config.slabs)
  const taxBeforeRebate = slabResult.tax
  let rebate = taxableIncome <= config.rebateLimit ? Math.min(taxBeforeRebate, config.rebateAmount) : 0

  let taxAfterRebate = Math.max(taxBeforeRebate - rebate, 0)

  if (regime === "new" && taxableIncome > config.rebateLimit) {
    const marginalReliefCap = taxableIncome - config.rebateLimit
    if (taxAfterRebate > marginalReliefCap) {
      rebate += taxAfterRebate - marginalReliefCap
      taxAfterRebate = marginalReliefCap
    }
  }

  const cess = taxAfterRebate * 0.04

  return {
    taxableIncome: Math.round(taxableIncome),
    deductions: Math.round(deductions),
    taxBeforeRebate: Math.round(taxBeforeRebate),
    rebate: Math.round(rebate),
    taxAfterRebate: Math.round(taxAfterRebate),
    cess: Math.round(cess),
    total: Math.round(taxAfterRebate + cess),
    breakup: slabResult.breakup,
  }
}

export default function TaxCalculatorPage() {
  const [assessmentYear, setAssessmentYear] = useState<AssessmentYear>("2026-27")
  const [regime, setRegime] = useState<Regime>("new")
  const [income, setIncome] = useState<number | "">(1200000)
  const [section80C, setSection80C] = useState<number | "">(0)
  const [section80D, setSection80D] = useState<number | "">(0)
  const [hraExemption, setHraExemption] = useState<number | "">(0)
  const [homeLoanInterest, setHomeLoanInterest] = useState<number | "">(0)
  const [otherDeductions, setOtherDeductions] = useState<number | "">(0)
  const [showResults, setShowResults] = useState(false)

  const annualIncome = Number(income) || 0
  const oldRegimeDeductions =
    (Number(section80C) || 0) +
    (Number(section80D) || 0) +
    (Number(hraExemption) || 0) +
    (Number(homeLoanInterest) || 0) +
    (Number(otherDeductions) || 0)

  const selectedResult = useMemo(
    () => calculateTax(annualIncome, assessmentYear, regime, oldRegimeDeductions),
    [annualIncome, assessmentYear, oldRegimeDeductions, regime],
  )

  const comparison = useMemo(
    () => ({
      new: calculateTax(annualIncome, assessmentYear, "new", oldRegimeDeductions),
      old: calculateTax(annualIncome, assessmentYear, "old", oldRegimeDeductions),
    }),
    [annualIncome, assessmentYear, oldRegimeDeductions],
  )

  const currentConfig = TAX_CONFIG[assessmentYear]
  const selectedRegimeConfig = currentConfig.regimes[regime]
  const inputClass =
    "w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-black focus:border-ca-purple focus:outline-none focus:ring-2 focus:ring-ca-purple/20"

  const setNumericValue =
    (setter: (value: number | "") => void, max?: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.value === "") {
        setter("")
        setShowResults(false)
        return
      }

      const nextValue = Number(event.target.value)
      setter(max ? Math.min(nextValue, max) : nextValue)
      setShowResults(false)
    }

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Income Tax Calculator</h1>
        <p className="text-gray-600">
          Calculate tax for AY 2026-27 and AY 2027-28 under both old and new regimes.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[420px_1fr]">
        <div className="bg-white rounded-xl shadow-md overflow-hidden h-fit">
          <div className="p-6 border-b">
            <h2 className="text-xl font-bold text-ca-darkBlue flex items-center">
              <Calculator className="mr-2 h-5 w-5" />
              Tax Inputs
            </h2>
          </div>

          <div className="p-6 space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Assessment Year</label>
              <select
                value={assessmentYear}
                onChange={(event) => {
                  setAssessmentYear(event.target.value as AssessmentYear)
                  setShowResults(false)
                }}
                className={inputClass}
              >
                <option value="2026-27">AY 2026-27 (FY 2025-26)</option>
                <option value="2027-28">AY 2027-28 (FY 2026-27)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Annual Income (₹)</label>
              <input type="number" min="0" value={income} onChange={setNumericValue(setIncome)} className={inputClass} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                Tax Regime
                <span className="group relative ml-1">
                  <HelpCircle className="h-4 w-4 text-gray-400 cursor-help" />
                  <span className="absolute left-0 bottom-full mb-2 hidden w-72 rounded bg-black p-2 text-xs text-white group-hover:block z-10">
                    New regime is the default regime. Old regime allows more deductions but uses higher slabs.
                  </span>
                </span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(["new", "old"] as Regime[]).map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => {
                      setRegime(option)
                      setShowResults(false)
                    }}
                    className={`rounded-md px-3 py-2 text-sm font-medium ${
                      regime === option ? "bg-ca-darkBlue text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {currentConfig.regimes[option].label}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-lg border bg-gray-50 p-4">
              <p className="text-sm font-medium text-gray-700">Standard Deduction</p>
              <p className="text-lg font-bold text-ca-purple">{formatCurrency(selectedRegimeConfig.standardDeduction)}</p>
              <p className="text-xs text-gray-500 mt-1">Applied automatically for salaried/pension income estimation.</p>
            </div>

            {regime === "old" && (
              <div className="space-y-4 border-t pt-5">
                <h3 className="font-semibold text-gray-800">Old Regime Deductions & Exemptions</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Section 80C (max ₹1,50,000)</label>
                  <input type="number" min="0" value={section80C} onChange={setNumericValue(setSection80C, 150000)} className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Section 80D</label>
                  <input type="number" min="0" value={section80D} onChange={setNumericValue(setSection80D)} className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">HRA Exemption</label>
                  <input type="number" min="0" value={hraExemption} onChange={setNumericValue(setHraExemption)} className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Home Loan Interest (max ₹2,00,000)</label>
                  <input
                    type="number"
                    min="0"
                    value={homeLoanInterest}
                    onChange={setNumericValue(setHomeLoanInterest, 200000)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Other Deductions</label>
                  <input type="number" min="0" value={otherDeductions} onChange={setNumericValue(setOtherDeductions)} className={inputClass} />
                </div>
              </div>
            )}

            <button
              type="button"
              onClick={() => setShowResults(true)}
              disabled={!annualIncome}
              className="w-full bg-ca-darkBlue text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center"
            >
              Calculate Tax
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-xl font-bold text-ca-darkBlue">
                {currentConfig.regimes[regime].label} Result
                <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">FY {currentConfig.financialYear}</span>
              </h2>
            </div>

            {showResults ? (
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  <div className="rounded-lg bg-gray-50 p-4">
                    <p className="text-sm text-gray-500">Taxable Income</p>
                    <p className="text-xl font-bold text-gray-900">{formatCurrency(selectedResult.taxableIncome)}</p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <p className="text-sm text-gray-500">Rebate / Relief</p>
                    <p className="text-xl font-bold text-green-700">{formatCurrency(selectedResult.rebate)}</p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <p className="text-sm text-gray-500">Cess (4%)</p>
                    <p className="text-xl font-bold text-gray-900">{formatCurrency(selectedResult.cess)}</p>
                  </div>
                  <div className="rounded-lg bg-ca-darkBlue p-4 text-white">
                    <p className="text-sm text-white/75">Total Tax</p>
                    <p className="text-xl font-bold">{formatCurrency(selectedResult.total)}</p>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Summary</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between border-b py-2">
                        <span className="text-gray-600">Gross Income</span>
                        <span className="font-medium text-gray-900">{formatCurrency(annualIncome)}</span>
                      </div>
                      <div className="flex justify-between border-b py-2">
                        <span className="text-gray-600">Total Deductions</span>
                        <span className="font-medium text-gray-900">{formatCurrency(selectedResult.deductions)}</span>
                      </div>
                      <div className="flex justify-between border-b py-2">
                        <span className="text-gray-600">Tax Before Rebate</span>
                        <span className="font-medium text-gray-900">{formatCurrency(selectedResult.taxBeforeRebate)}</span>
                      </div>
                      <div className="flex justify-between border-b py-2">
                        <span className="text-gray-600">Tax After Rebate</span>
                        <span className="font-medium text-gray-900">{formatCurrency(selectedResult.taxAfterRebate)}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Regime Comparison</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-lg border p-4">
                        <p className="text-sm text-gray-500">New Regime</p>
                        <p className="text-2xl font-bold text-ca-purple">{formatCurrency(comparison.new.total)}</p>
                      </div>
                      <div className="rounded-lg border p-4">
                        <p className="text-sm text-gray-500">Old Regime</p>
                        <p className="text-2xl font-bold text-ca-orange">{formatCurrency(comparison.old.total)}</p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-gray-600">
                      Lower estimate:{" "}
                      <span className="font-semibold text-gray-900">
                        {comparison.new.total <= comparison.old.total ? "New Regime" : "Old Regime"}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-semibold text-gray-800 mb-3">Slab-wise Breakup</h3>
                  <div className="overflow-x-auto rounded-lg border">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          {["Income Range", "Rate", "Taxable Amount", "Tax"].map((heading) => (
                            <th key={heading} className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                              {heading}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {selectedResult.breakup.map((row) => (
                          <tr key={row.label}>
                            <td className="px-4 py-3 text-sm text-gray-700">{row.label}</td>
                            <td className="px-4 py-3 text-sm text-gray-900">{row.rate * 100}%</td>
                            <td className="px-4 py-3 text-sm text-gray-900">{formatCurrency(row.taxableAmount)}</td>
                            <td className="px-4 py-3 text-sm text-gray-900">{formatCurrency(row.tax)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-6 text-center text-gray-500">Enter income details and click Calculate Tax.</div>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-xl font-bold text-ca-darkBlue">Tax Slabs for AY {assessmentYear}</h2>
              <p className="text-sm text-gray-500 mt-1">{currentConfig.note}</p>
            </div>
            <div className="grid gap-6 p-6 md:grid-cols-2">
              {(["new", "old"] as Regime[]).map((option) => (
                <div key={option}>
                  <h3 className="font-semibold text-lg mb-3">{currentConfig.regimes[option].label}</h3>
                  <div className="overflow-hidden rounded-lg border">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                            Income Range
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                            Tax Rate
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {currentConfig.regimes[option].slabs.map((slab) => (
                          <tr key={slab.label}>
                            <td className="px-4 py-3 text-sm text-gray-600">{slab.label}</td>
                            <td className="px-4 py-3 text-sm text-gray-900">{slab.rate === 0 ? "Nil" : `${slab.rate * 100}%`}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t bg-blue-50 p-4 text-xs text-gray-600">
              <span className="font-semibold text-gray-700">Disclaimer: </span>
              This calculator is an estimate for individual taxpayers below 60 years of age. It excludes surcharge,
              special-rate income, capital gains, agricultural income, and non-salary nuances. For exact tax calculation
              please contact your tax advisor.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useMemo, useState } from "react"
import { CalendarDays, Landmark } from "lucide-react"

type ScheduleRow = {
  month: number
  date: string
  emi: number
  principal: number
  interest: number
  balance: number
}

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value)

const monthDiffInclusive = (start: string, end: string) => {
  const startDate = new Date(start)
  const endDate = new Date(end)

  if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime()) || endDate < startDate) {
    return 0
  }

  return (endDate.getFullYear() - startDate.getFullYear()) * 12 + endDate.getMonth() - startDate.getMonth() + 1
}

export default function EMICalculatorPage() {
  const [loanAmount, setLoanAmount] = useState<number | "">(1000000)
  const [startDate, setStartDate] = useState("2026-01-01")
  const [endDate, setEndDate] = useState("2030-12-01")
  const [interestRate, setInterestRate] = useState<number | "">(8.5)

  const calculation = useMemo(() => {
    const principal = Number(loanAmount) || 0
    const months = monthDiffInclusive(startDate, endDate)
    const annualRate = Number(interestRate) || 0
    const monthlyRate = annualRate / 12 / 100

    if (!principal || !months || annualRate < 0) {
      return { months, emi: 0, totalPayment: 0, totalInterest: 0, schedule: [] as ScheduleRow[] }
    }

    const emi =
      monthlyRate === 0
        ? principal / months
        : (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1)

    let balance = principal
    const schedule: ScheduleRow[] = []

    for (let month = 1; month <= months; month += 1) {
      const interest = balance * monthlyRate
      const principalComponent = month === months ? balance : Math.min(emi - interest, balance)
      balance = Math.max(0, balance - principalComponent)

      const paymentDate = new Date(startDate)
      paymentDate.setMonth(paymentDate.getMonth() + month - 1)

      schedule.push({
        month,
        date: paymentDate.toLocaleDateString("en-IN", { month: "short", year: "numeric" }),
        emi: month === months ? principalComponent + interest : emi,
        principal: principalComponent,
        interest,
        balance,
      })
    }

    const totalPayment = schedule.reduce((sum, row) => sum + row.emi, 0)
    const totalInterest = schedule.reduce((sum, row) => sum + row.interest, 0)

    return { months, emi, totalPayment, totalInterest, schedule }
  }, [endDate, interestRate, loanAmount, startDate])

  const inputClass =
    "w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-black focus:border-ca-purple focus:outline-none focus:ring-2 focus:ring-ca-purple/20"

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center rounded-full bg-green-100 p-3 text-green-700 mb-4">
          <Landmark className="h-7 w-7" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">EMI Calculator</h1>
        <p className="text-gray-600">
          Enter loan amount, start date, end date, and interest rate to calculate EMI with detailed breakup.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[380px_1fr]">
        <div className="bg-white rounded-xl shadow-md p-6 h-fit">
          <h2 className="text-xl font-bold text-ca-darkBlue mb-5 flex items-center">
            <CalendarDays className="mr-2 h-5 w-5" />
            Loan Details
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Loan Amount (₹)</label>
              <input
                type="number"
                min="0"
                value={loanAmount}
                onChange={(event) => setLoanAmount(event.target.value === "" ? "" : Number(event.target.value))}
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Loan Start Date</label>
              <input type="date" value={startDate} onChange={(event) => setStartDate(event.target.value)} className={inputClass} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Loan End Date</label>
              <input type="date" value={endDate} onChange={(event) => setEndDate(event.target.value)} className={inputClass} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Annual Interest Rate (%)</label>
              <input
                type="number"
                min="0"
                step="0.01"
                value={interestRate}
                onChange={(event) => setInterestRate(event.target.value === "" ? "" : Number(event.target.value))}
                className={inputClass}
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl shadow-md p-5">
              <p className="text-sm text-gray-500">Monthly EMI</p>
              <p className="text-2xl font-bold text-ca-purple">{formatCurrency(calculation.emi)}</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-5">
              <p className="text-sm text-gray-500">Tenure</p>
              <p className="text-2xl font-bold text-gray-900">{calculation.months} months</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-5">
              <p className="text-sm text-gray-500">Total Interest</p>
              <p className="text-2xl font-bold text-ca-orange">{formatCurrency(calculation.totalInterest)}</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-5">
              <p className="text-sm text-gray-500">Total Payment</p>
              <p className="text-2xl font-bold text-ca-darkBlue">{formatCurrency(calculation.totalPayment)}</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-5 border-b">
              <h2 className="text-xl font-bold text-ca-darkBlue">Detailed Repayment Schedule</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {["Month", "Date", "EMI", "Principal", "Interest", "Balance"].map((heading) => (
                      <th key={heading} className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {calculation.schedule.map((row) => (
                    <tr key={row.month}>
                      <td className="px-4 py-3 text-sm text-gray-700">{row.month}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{row.date}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{formatCurrency(row.emi)}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{formatCurrency(row.principal)}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{formatCurrency(row.interest)}</td>
                      <td className="px-4 py-3 text-sm text-gray-900">{formatCurrency(row.balance)}</td>
                    </tr>
                  ))}
                  {calculation.schedule.length === 0 && (
                    <tr>
                      <td className="px-4 py-6 text-center text-sm text-gray-500" colSpan={6}>
                        Enter valid loan details to view the repayment schedule.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

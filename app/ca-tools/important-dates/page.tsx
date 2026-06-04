"use client"

import { useState, useEffect } from "react"
import { Calendar, ChevronLeft, ChevronRight, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"
import { ImportantDatesAPI, type ImportantDate } from "@/lib/api"

// Month names for the calendar
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

export default function ImportantDatesPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [filter, setFilter] = useState<string | null>(null)
  const [importantDates, setImportantDates] = useState<ImportantDate[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDates = async () => {
      try {
        setLoading(true)
        const dates = await ImportantDatesAPI.getAll()
        setImportantDates(dates)
        setError(null)
      } catch (err) {
        console.error("Error fetching important dates:", err)
        setError("Failed to load important dates. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchDates()
  }, [])

  // Get events for the selected date and filter
  const filteredDates = importantDates.filter((event) => {
    const matchesDate = !selectedDate || event.date === selectedDate
    const matchesFilter = !filter || event.category === filter
    return matchesDate && matchesFilter
  })

  // Generate calendar days
  const generateCalendarDays = () => {
    const firstDay = new Date(currentYear, currentMonth, 1).getDay()
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

    const days = []
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 w-10 text-black"></div>)
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
      const hasEvent = importantDates.some((event) => event.date === date)

      days.push(
        <button
          key={day}
          onClick={() => setSelectedDate(selectedDate === date ? null : date)}
          className={`h-10 w-10 text-black rounded-full flex items-center justify-center transition-all ${
            selectedDate === date
              ? "bg-black text-white"
              : hasEvent
                ? "bg-blue-100 text-blue-800 hover:bg-blue-200"
                : "hover:bg-gray-100"
          }`}
        >
          {day}
        </button>,
      )
    }

    return days
  }

  // Navigate to previous month
  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
    setSelectedDate(null)
  }

  // Navigate to next month
  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
    setSelectedDate(null)
  }

  // Get category label and color
  const getCategoryInfo = (category: string) => {
    switch (category) {
      case "tax":
        return { label: "Income Tax", color: "bg-blue-100 text-blue-800" }
      case "tds":
        return { label: "TDS", color: "bg-green-100 text-green-800" }
      case "itr":
        return { label: "ITR", color: "bg-purple-100 text-purple-800" }
      case "gst":
        return { label: "GST", color: "bg-amber-100 text-amber-800" }
      case "compliance":
        return { label: "Compliance", color: "bg-red-100 text-red-800" }
      default:
        return { label: category, color: "bg-gray-100 text-gray-800" }
    }
  }

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ca-darkBlue mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading important dates...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto py-12">
        <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-md">
          <p>{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Important Dates for CA Professionals</h1>
        <p className="text-gray-600">Keep track of critical tax and compliance deadlines for the financial year</p>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold text-black flex items-center">
            <Calendar className="mr-2 h-5 w-5" />
            Compliance Calendar
          </h2>
        </div>

        <div className="p-4 bg-gray-50">
          <div className="flex items-center justify-between mb-4">
            <div className="flex space-x-2">
              <button onClick={prevMonth} className="p-2 rounded-full hover:bg-gray-200 transition-colors bg-black ">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <h3 className="text-lg font-medium text-black">
                {MONTHS[currentMonth]} {currentYear}
              </h3>
              <button onClick={nextMonth} className="p-2 rounded-full hover:bg-gray-200 transition-colors bg-black ">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="flex space-x-2">
              <button
                onClick={() => setFilter(null)}
                className={`px-3 py-1 text-xs rounded-full ${!filter ? "bg-black text-white" : "bg-gray-200 hover:bg-gray-300"}`}
              >
                All
              </button>
              <button
                onClick={() => setFilter("tax")}
                className={`px-3 py-1 text-xs rounded-full ${filter === "tax" ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
              >
                Income Tax
              </button>
              <button
                onClick={() => setFilter("gst")}
                className={`px-3 py-1 text-xs rounded-full ${filter === "gst" ? "bg-amber-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
              >
                GST
              </button>
              <button
                onClick={() => setFilter("tds")}
                className={`px-3 py-1 text-xs rounded-full ${filter === "tds" ? "bg-green-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
              >
                TDS
              </button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1 mb-4">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="h-10 flex items-center justify-center font-medium text-black">
                {day}
              </div>
            ))}
            {generateCalendarDays()}
          </div>
        </div>

        {/* Events List */}
        <div className="p-4">
          <h3 className="text-lg font-medium mb-4">
            {selectedDate
              ? `Deadlines on ${new Date(selectedDate).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}`
              : filter
                ? `${getCategoryInfo(filter).label} Deadlines`
                : "Upcoming Deadlines"}
          </h3>

          {filteredDates.length > 0 ? (
            <div className="space-y-4">
              {filteredDates.map((date) => {
                const categoryInfo = getCategoryInfo(date.category)
                return (
                  <motion.div
                    key={date.id}
                    className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start">
                      <div className={`p-3 rounded-lg mr-4 ${categoryInfo.color}`}>
                        <AlertCircle className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-black">{date.title}</h4>
                        <p className="text-black text-sm mb-2">{date.description}</p>
                        <div className="flex flex-wrap gap-y-2">
                          <div className="flex items-center text-sm text-black mr-4">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(date.date).toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </div>
                          <span className={`text-xs px-2 py-1 rounded ${categoryInfo.color}`}>
                            {categoryInfo.label}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-8 text-black">No deadlines found for the selected criteria.</div>
          )}
        </div>
      </div>
    </div>
  )
}

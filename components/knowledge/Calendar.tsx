"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { CalendarIcon, Building, Clock, FileText, ReceiptIndianRupee, Users } from "lucide-react"

type EventType = "gst" | "income-tax" | "tds" | "roc" | "msme"

type ComplianceEvent = {
  id: string
  title: string
  date: string
  time: string
  location: string
  type: EventType
  description: string
}

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

const EVENT_TYPES: Record<EventType, { label: string; color: string; icon: React.ReactNode }> = {
  gst: {
    label: "GST",
    color: "bg-blue-100 text-blue-700 border-blue-200",
    icon: <ReceiptIndianRupee className="h-5 w-5" />,
  },
  "income-tax": {
    label: "Income Tax",
    color: "bg-emerald-100 text-emerald-700 border-emerald-200",
    icon: <FileText className="h-5 w-5" />,
  },
  tds: {
    label: "TDS",
    color: "bg-purple-100 text-purple-700 border-purple-200",
    icon: <Clock className="h-5 w-5" />,
  },
  roc: {
    label: "ROC",
    color: "bg-orange-100 text-orange-700 border-orange-200",
    icon: <Building className="h-5 w-5" />,
  },
  msme: {
    label: "MSME",
    color: "bg-rose-100 text-rose-700 border-rose-200",
    icon: <Users className="h-5 w-5" />,
  },
}

const dateFor = (year: number, monthIndex: number, day: number) =>
  `${year}-${String(monthIndex + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`

const addEvent = (
  events: ComplianceEvent[],
  year: number,
  monthIndex: number,
  day: number,
  type: EventType,
  title: string,
  description: string,
) => {
  events.push({
    id: `${year}-${monthIndex + 1}-${day}-${type}-${title}`,
    title,
    date: dateFor(year, monthIndex, day),
    time: "Due date",
    location: "Compliance filing",
    type,
    description,
  })
}

const buildComplianceEvents = (year: number): ComplianceEvent[] => {
  const events: ComplianceEvent[] = []

  for (let month = 0; month < 12; month += 1) {
    addEvent(events, year, month, 7, "tds", "TDS/TCS Payment", "Monthly TDS/TCS payment due for deductions collected in the previous month.")
    addEvent(events, year, month, 11, "gst", "GSTR-1 Filing", "Monthly outward supplies return due for regular GST taxpayers.")
    addEvent(events, year, month, 20, "gst", "GSTR-3B Filing", "Monthly GST summary return and tax payment due date.")
  }

  addEvent(events, year, 0, 31, "tds", "Quarterly TDS Return", "TDS return for October to December quarter.")
  addEvent(events, year, 4, 31, "tds", "Quarterly TDS Return", "TDS return for January to March quarter.")
  addEvent(events, year, 6, 31, "tds", "Quarterly TDS Return", "TDS return for April to June quarter.")
  addEvent(events, year, 9, 31, "tds", "Quarterly TDS Return", "TDS return for July to September quarter.")

  addEvent(events, year, 2, 15, "income-tax", "Advance Tax - Final Instalment", "Final advance tax instalment for the financial year.")
  addEvent(events, year, 5, 15, "income-tax", "Advance Tax - First Instalment", "First advance tax instalment for the financial year.")
  addEvent(events, year, 6, 31, "income-tax", "ITR Filing - Non Audit", "Income tax return due date for individuals and non-audit taxpayers.")
  addEvent(events, year, 8, 15, "income-tax", "Advance Tax - Second Instalment", "Second advance tax instalment for the financial year.")
  addEvent(events, year, 8, 30, "income-tax", "Tax Audit Report", "Tax audit report filing due date, where applicable.")
  addEvent(events, year, 9, 31, "income-tax", "ITR Filing - Audit Cases", "Income tax return due date for taxpayers requiring audit.")
  addEvent(events, year, 10, 30, "income-tax", "Transfer Pricing Return", "Return due date for cases requiring transfer pricing report.")
  addEvent(events, year, 11, 15, "income-tax", "Advance Tax - Third Instalment", "Third advance tax instalment for the financial year.")

  addEvent(events, year, 8, 30, "roc", "DIR-3 KYC", "Annual KYC due date for DIN holders, as applicable.")
  addEvent(events, year, 9, 29, "roc", "AOC-4 Filing", "Financial statements filing due date for companies after AGM.")
  addEvent(events, year, 10, 29, "roc", "MGT-7 / MGT-7A Filing", "Annual return filing due date for companies after AGM.")

  addEvent(events, year, 3, 30, "msme", "MSME Form 1 - Half Yearly", "MSME outstanding dues return for October to March period.")
  addEvent(events, year, 9, 31, "msme", "MSME Form 1 - Half Yearly", "MSME outstanding dues return for April to September period.")

  return events.sort((a, b) => a.date.localeCompare(b.date))
}

export function Calendar() {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [filter, setFilter] = useState<EventType | null>(null)

  const events = useMemo(() => buildComplianceEvents(currentYear), [currentYear])

  const filteredEvents = events.filter((event) => {
    const matchesDate = !selectedDate || event.date === selectedDate
    const matchesFilter = !filter || event.type === filter
    const eventMonth = new Date(event.date).getMonth()
    return matchesDate && matchesFilter && (selectedDate || eventMonth === currentMonth)
  })

  const generateCalendarDays = () => {
    const firstDay = new Date(currentYear, currentMonth, 1).getDay()
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
    const days = []

    for (let i = 0; i < firstDay; i += 1) {
      days.push(<div key={`empty-${i}`} className="h-10 w-10" />)
    }

    for (let day = 1; day <= daysInMonth; day += 1) {
      const date = dateFor(currentYear, currentMonth, day)
      const dayEvents = events.filter((event) => event.date === date)
      const hasEvent = dayEvents.length > 0
      const hasSelectedType = filter ? dayEvents.some((event) => event.type === filter) : hasEvent

      days.push(
        <button
          key={day}
          onClick={() => setSelectedDate(selectedDate === date ? null : date)}
          className={`relative h-10 w-10 rounded-full flex items-center justify-center transition-all ${
            selectedDate === date
              ? "bg-ca-darkBlue text-white shadow-lg"
              : hasSelectedType
                ? "bg-ca-purple/10 text-ca-purple hover:bg-ca-purple/20"
                : "hover:bg-gray-100"
          }`}
        >
          {day}
          {hasSelectedType && <span className="absolute bottom-1 h-1.5 w-1.5 rounded-full bg-ca-orange" />}
        </button>,
      )
    }

    return days
  }

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
    setSelectedDate(null)
  }

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
    setSelectedDate(null)
  }

  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6 border-b bg-gradient-to-r from-ca-darkBlue to-ca-purple text-white">
        <h2 className="text-2xl font-bold flex items-center">
          <CalendarIcon className="mr-2 h-6 w-6" />
          Upcoming Compliance Due Dates
        </h2>
        <p className="mt-2 text-sm text-white/75">GST, income tax, TDS, ROC, and MSME filing reminders.</p>
      </div>

      <div className="p-4 bg-gray-50">
        <div className="flex flex-col gap-4 mb-4 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex items-center space-x-2">
            <button onClick={prevMonth} className="p-2 rounded-full hover:bg-gray-200 transition-colors" aria-label="Previous month">
              <span className="text-xl leading-none">‹</span>
            </button>
            <h3 className="min-w-44 text-center text-lg font-medium">
              {MONTHS[currentMonth]} {currentYear}
            </h3>
            <button onClick={nextMonth} className="p-2 rounded-full hover:bg-gray-200 transition-colors" aria-label="Next month">
              <span className="text-xl leading-none">›</span>
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter(null)}
              className={`px-3 py-1 text-xs rounded-full ${!filter ? "bg-ca-darkBlue text-white" : "bg-gray-200 hover:bg-gray-300"}`}
            >
              All
            </button>
            {(Object.keys(EVENT_TYPES) as EventType[]).map((type) => (
              <button
                key={type}
                onClick={() => setFilter(filter === type ? null : type)}
                className={`px-3 py-1 text-xs rounded-full ${
                  filter === type ? "bg-ca-purple text-white" : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {EVENT_TYPES[type].label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1 mb-4">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="h-10 flex items-center justify-center font-medium text-gray-500">
              {day}
            </div>
          ))}
          {generateCalendarDays()}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium mb-4">
          {selectedDate
            ? `Due dates on ${new Date(selectedDate).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}`
            : `${MONTHS[currentMonth]} due dates`}
        </h3>

        {filteredEvents.length > 0 ? (
          <div className="space-y-3">
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`rounded-xl border p-3 ${EVENT_TYPES[event.type].color}`}>{EVENT_TYPES[event.type].icon}</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="font-bold text-lg text-gray-900">{event.title}</h4>
                      <span className={`rounded-full border px-2.5 py-1 text-xs font-medium ${EVENT_TYPES[event.type].color}`}>
                        {EVENT_TYPES[event.type].label}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mt-1 mb-3">{event.description}</p>
                    <div className="flex flex-wrap gap-y-2">
                      <div className="flex items-center text-sm text-gray-500 mr-4">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        {new Date(event.date).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mr-4">
                        <Clock className="h-4 w-4 mr-1" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">{event.location}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">No due dates found for the selected criteria.</div>
        )}

        <p className="mt-4 text-xs text-gray-500">
          Due dates are common reference dates and may shift for holidays, state-specific rules, turnover categories, or
          official extensions.
        </p>
      </div>
    </motion.div>
  )
}

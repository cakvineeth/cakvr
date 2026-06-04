"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CalendarIcon, Clock, MapPin, Users, ExternalLink } from "lucide-react"

// Sample events data - in a real application, this would come from an API or database
const EVENTS = [
  {
    id: 1,
    title: "GST Filing Webinar",
    date: "2025-04-15",
    time: "11:00 AM - 12:30 PM",
    location: "Online",
    type: "webinar",
    description: "Learn about the latest GST filing requirements and best practices for businesses in India.",
  },
  {
    id: 2,
    title: "Budget 2025 Impact Analysis",
    date: "2025-04-20",
    time: "3:00 PM - 5:00 PM",
    location: "ASK Towers, Bengaluru",
    type: "seminar",
    description: "In-depth analysis of the Union Budget 2025 and its implications for businesses and individuals.",
  },
  {
    id: 3,
    title: "Tax Planning for Startups",
    date: "2025-05-05",
    time: "2:00 PM - 4:00 PM",
    location: "Online",
    type: "workshop",
    description: "Comprehensive tax planning strategies for Indian startups and entrepreneurs.",
  },
  {
    id: 4,
    title: "ITR Filing Workshop",
    date: "2025-05-15",
    time: "10:00 AM - 12:00 PM",
    location: "ASK Towers, Bengaluru",
    type: "workshop",
    description: "Hands-on workshop to guide individuals through the ITR filing process for AY 2025-26.",
  },
]

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

export function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(3) // April (0-indexed)
  const [currentYear, setCurrentYear] = useState(2025)
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [filter, setFilter] = useState<string | null>(null)

  // Get events for the selected date
  const filteredEvents = EVENTS.filter((event) => {
    const matchesDate = !selectedDate || event.date === selectedDate
    const matchesFilter = !filter || event.type === filter
    return matchesDate && matchesFilter
  })

  // Generate calendar days
  const generateCalendarDays = () => {
    const firstDay = new Date(currentYear, currentMonth, 1).getDay()
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

    const days = []
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 w-10"></div>)
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
      const hasEvent = EVENTS.some((event) => event.date === date)

      days.push(
        <button
          key={day}
          onClick={() => setSelectedDate(selectedDate === date ? null : date)}
          className={`h-10 w-10 rounded-full flex items-center justify-center transition-all ${
            selectedDate === date
              ? "bg-ca-darkBlue text-white"
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

  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold text-ca-darkBlue flex items-center">
          <CalendarIcon className="mr-2 h-6 w-6" />
          Upcoming Events
        </h2>
      </div>

      {/* Calendar Header */}
      <div className="p-4 bg-gray-50">
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-2">
            <button onClick={prevMonth} className="p-2 rounded-full hover:bg-gray-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <h3 className="text-lg font-medium">
              {MONTHS[currentMonth]} {currentYear}
            </h3>
            <button onClick={nextMonth} className="p-2 rounded-full hover:bg-gray-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={() => setFilter(null)}
              className={`px-3 py-1 text-xs rounded-full ${!filter ? "bg-ca-darkBlue text-white" : "bg-gray-200 hover:bg-gray-300"}`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("webinar")}
              className={`px-3 py-1 text-xs rounded-full ${filter === "webinar" ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
            >
              Webinars
            </button>
            <button
              onClick={() => setFilter("seminar")}
              className={`px-3 py-1 text-xs rounded-full ${filter === "seminar" ? "bg-green-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
            >
              Seminars
            </button>
            <button
              onClick={() => setFilter("workshop")}
              className={`px-3 py-1 text-xs rounded-full ${filter === "workshop" ? "bg-purple-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
            >
              Workshops
            </button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1 mb-4">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="h-10 flex items-center justify-center font-medium text-gray-500">
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
            ? `Events on ${new Date(selectedDate).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}`
            : filter
              ? `Upcoming ${filter.charAt(0).toUpperCase() + filter.slice(1)}s`
              : "Upcoming Events"}
        </h3>

        {filteredEvents.length > 0 ? (
          <div className="space-y-4">
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start">
                  <div
                    className={`p-3 rounded-lg mr-4 ${
                      event.type === "webinar"
                        ? "bg-blue-100 text-blue-600"
                        : event.type === "seminar"
                          ? "bg-green-100 text-green-600"
                          : "bg-purple-100 text-purple-600"
                    }`}
                  >
                    {event.type === "webinar" ? (
                      <Users className="h-6 w-6" />
                    ) : event.type === "seminar" ? (
                      <MapPin className="h-6 w-6" />
                    ) : (
                      <Clock className="h-6 w-6" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg">{event.title}</h4>
                    <p className="text-gray-600 text-sm mb-2">{event.description}</p>
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
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        {event.location}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <button className="flex items-center text-ca-darkBlue hover:text-blue-700 text-sm font-medium">
                    Register Now
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">No events found for the selected criteria.</div>
        )}
      </div>
    </motion.div>
  )
}

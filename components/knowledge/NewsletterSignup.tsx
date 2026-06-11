"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Check } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    // Simulate API call
    setTimeout(() => {
      if (email && email.includes("@")) {
        setSubscribed(true)
        setLoading(false)
      } else {
        setError("Please enter a valid email address")
        setLoading(false)
      }
    }, 1000)
  }

  return (
    <motion.div
      className="bg-gradient-to-br from-ca-darkBlue to-purple-800 rounded-xl shadow-md overflow-hidden text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6">
        <h2 className="text-xl font-bold flex items-center mb-2">
          <Mail className="mr-2 h-5 w-5" />
          Tax & Finance Updates
        </h2>
        <p className="text-white/80 text-sm mb-4">
          Subscribe to our newsletter for the latest tax updates, financial insights, and regulatory changes in India.
        </p>

        {subscribed ? (
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="bg-green-500 rounded-full p-1 mr-3">
              <Check className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="font-medium">Thank you for subscribing!</p>
              <p className="text-white/70 text-sm">You'll receive our next newsletter soon.</p>
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="space-y-3">
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-white/50 ${error ? "border border-red-400" : ""}`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error && <p className="text-red-300 text-xs mt-1">{error}</p>}
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="consent"
                  className="h-4 w-4 rounded border-gray-300 text-ca-darkBlue focus:ring-blue-500"
                  required
                />
                <label htmlFor="consent" className="ml-2 block text-sm text-white/80">
                  I agree to receive newsletters and updates
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-ca-darkBlue font-medium py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors flex justify-center items-center"
              >
                {loading ? (
                  <svg
                    className="animate-spin h-5 w-5 text-ca-darkBlue"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  "Subscribe Now"
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </motion.div>
  )
}

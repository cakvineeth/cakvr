"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Send, CheckCircle2 } from "lucide-react"

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const isInView = useInView(formRef, { once: true, amount: 0.3 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.form
          ref={formRef}
          variants={formVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 relative overflow-hidden"
          onSubmit={handleSubmit}
        >
          {/* Background pattern */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-gradient-to-br from-purple-100 to-purple-50 rounded-full opacity-70 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-gradient-to-tr from-indigo-100 to-indigo-50 rounded-full opacity-70 blur-2xl"></div>

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-ca-darkBlue mb-6 text-center">Send Us a Message</h3>

            {isSubmitted ? (
              <div className="py-10 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4"
                >
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </motion.div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Thank You!</h4>
                <p className="text-gray-600 mb-6">
                  Your message has been sent successfully. We'll get back to you shortly.
                </p>
                <Button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="bg-ca-purple hover:bg-ca-lightPurple text-white transition-all duration-300"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ca-purple/20 focus:border-ca-purple transition-all duration-200 bg-white text-gray-900"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ca-purple/20 focus:border-ca-purple transition-all duration-200 bg-white text-gray-900"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ca-purple/20 focus:border-ca-purple transition-all duration-200 bg-white text-gray-900"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ca-purple/20 focus:border-ca-purple transition-all duration-200 bg-white text-gray-900 appearance-none"
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                      backgroundPosition: "right 0.5rem center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "1.5em 1.5em",
                      paddingRight: "2.5rem",
                    }}
                  >
                    <option value="">Select a service</option>
                    <option value="financial-advisory">Financial Advisory</option>
                    <option value="tax-planning">Tax Planning & Compliance</option>
                    <option value="business-strategy">Business Strategy</option>
                    <option value="operations-consulting">Operations Consulting</option>
                    <option value="risk-management">Risk Management</option>
                    <option value="other">Other Services</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ca-purple/20 focus:border-ca-purple transition-all duration-200 bg-white text-gray-900 resize-y"
                    placeholder="Tell us about your requirements..."
                    required
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <input
                    id="privacy"
                    type="checkbox"
                    className="h-4 w-4 mt-1 text-ca-purple focus:ring-ca-purple/20 border-gray-300 rounded transition-all duration-200"
                    required
                  />
                  <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
                    I agree to the{" "}
                    <a
                      href="#"
                      className="text-ca-purple hover:text-ca-darkBlue underline decoration-dotted underline-offset-2"
                    >
                      privacy policy
                    </a>{" "}
                    and consent to being contacted regarding my inquiry.
                  </label>
                </div>

                <div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-ca-darkBlue to-ca-purple hover:from-ca-purple hover:to-ca-darkBlue text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  )
}

export default ContactForm

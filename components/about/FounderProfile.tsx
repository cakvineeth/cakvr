"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Linkedin, Mail, Phone, ChevronDown, ChevronUp } from "lucide-react"

const FounderProfile = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [showFullBio, setShowFullBio] = useState(false)

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-ca-darkBlue mb-6">Leadership</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the visionary behind K Vineeth Reddy & Co, driving excellence in financial advisory
          </p>
        </div>

        {/* Founder Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Profile Image Card - Larger and taller */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative lg:sticky lg:top-10"
          >
            <div className="relative h-[700px] w-full max-w-xl mx-auto">
              {/* Changed from gradient background to white background */}
              <div className="absolute inset-0 bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
                <Image
                  src="/images/founder-vineeth-reddy.png"
                  alt="K Vineeth Reddy - Founder"
                  fill
                  className="object-contain p-8 opacity-100"
                  priority
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8">
                {/* Changed background color and text colors for better contrast on white */}
                <div className="bg-ca-darkBlue/90 backdrop-blur-md rounded-xl p-8 border border-white/20 shadow-lg">
                  <h3 className="text-3xl font-bold text-white mb-2">K Vineeth Reddy</h3>
                  <p className="text-ca-orange font-medium text-lg mb-6">Founder & Managing Partner</p>

                  <div className="flex space-x-4 mb-6">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-ca-purple transition-all duration-300"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href="mailto:vineeth@cakvr.com"
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-ca-purple transition-all duration-300"
                      aria-label="Email Contact"
                    >
                      <Mail size={18} />
                    </a>
                    <a
                      href="tel:+918048541444"
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-ca-purple transition-all duration-300"
                      aria-label="Phone Contact"
                    >
                      <Phone size={18} />
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white font-medium">
                      Chartered Accountant
                    </span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white font-medium">
                      Financial Advisor
                    </span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white font-medium">
                      Business Strategist
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button - Aligned with the image on mobile */}
            <div className="mt-6 text-center lg:hidden">
              <button
                onClick={() => setShowFullBio(!showFullBio)}
                className="flex items-center justify-center mx-auto px-6 py-3 bg-ca-purple text-white rounded-lg font-medium transition-all hover:bg-ca-darkBlue shadow-md"
              >
                {showFullBio ? "Show Less" : "Read Full Bio"}
                {showFullBio ? <ChevronUp className="ml-2" size={18} /> : <ChevronDown className="ml-2" size={18} />}
              </button>
            </div>
          </motion.div>

          {/* Biography Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h3 className="text-3xl font-bold text-ca-darkBlue mb-8">About K Vineeth Reddy</h3>

            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                K Vineeth Reddy leads K Vineeth Reddy & Co LLP, a Chartered Accountancy firm based in Bengaluru. With
                over 8 years of expertise in financial advisory, taxation, and business consulting, he provides
                structured guidance to businesses across sectors, combining technical knowledge with practical
                solutions.
              </p>

              <p className="text-lg leading-relaxed">
                As a Fellow Chartered Accountant (FCA), he established the firm to deliver comprehensive financial
                services to individuals, businesses, and institutions across manufacturing, real estate, IT, and
                professional services sectors.
              </p>

              {/* Conditional content shown based on showFullBio state */}
              <div className={showFullBio ? "block" : "hidden lg:block"}>
                <p className="text-lg leading-relaxed">
                  Vineeth excels in tax litigation and representation, helping clients navigate assessments, appeals,
                  and scrutiny proceedings. His expertise in interpreting tax laws has proven invaluable in resolving
                  disputes efficiently while minimizing financial exposure.
                </p>

                <p className="text-lg leading-relaxed">
                  His extensive knowledge of Indian accounting standards, internal controls, and risk-based auditing
                  practices ensures that financial statements maintain integrity and transparency while business
                  processes remain compliant and efficient.
                </p>

                <div className="pt-2">
                  <h4 className="text-xl font-semibold text-ca-darkBlue mb-4">Areas of Expertise</h4>
                  <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-ca-orange rounded-full mr-2"></span>
                      Direct & Indirect Taxation
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-ca-orange rounded-full mr-2"></span>
                      Tax Litigation
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-ca-orange rounded-full mr-2"></span>
                      Audit & Assurance
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-ca-orange rounded-full mr-2"></span>
                      Financial Reporting
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-ca-orange rounded-full mr-2"></span>
                      Business Structuring
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-ca-orange rounded-full mr-2"></span>
                      Regulatory Compliance
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-ca-orange rounded-full mr-2"></span>
                      Corporate Law
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-ca-orange rounded-full mr-2"></span>
                      Due Diligence
                    </li>
                  </ul>
                </div>

                <p className="text-lg leading-relaxed mt-6">
                  A dedicated knowledge-sharer, Vineeth conducts workshops for professionals and corporate teams on
                  evolving tax laws, accounting standards, and compliance requirements, emphasizing practical
                  application and current industry insights.
                </p>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-ca-lightGray p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="font-semibold text-xl text-ca-darkBlue mb-3">Education & Certifications</div>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-ca-purple rounded-full mr-2"></span>
                        Chartered Accountant (FCA)
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-ca-purple rounded-full mr-2"></span>
                        DISA (Diploma in Information System Audit)
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-ca-purple rounded-full mr-2"></span>
                        FAFD (Forensic Accounting and Fraud Detection)
                      </li>
                    </ul>
                  </div>

                  <div className="bg-ca-lightGray p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="font-semibold text-xl text-ca-darkBlue mb-3">Professional Focus</div>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-ca-purple rounded-full mr-2"></span>
                        Strategic Financial Advisory
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-ca-purple rounded-full mr-2"></span>
                        Tax Planning & Optimization
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-ca-purple rounded-full mr-2"></span>
                        Business Growth Strategies
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-ca-purple rounded-full mr-2"></span>
                        Ethical Professional Standards
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FounderProfile

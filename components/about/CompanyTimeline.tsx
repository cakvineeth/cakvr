"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const timelineEvents = [
  {
    year: "2020",
    title: "Establishment",
    description:
      "K Vineeth Reddy & Co was established with a vision to provide comprehensive financial advisory services.",
    isSpecial: false,
  },
  {
    year: "2021",
    title: "Professional Growth",
    description:
      "Partner completed FAFD (Forensic Audit) Certification, enhancing our expertise in fraud detection and investigation.",
    isSpecial: false,
  },
  {
    year: "2022",
    title: "Vision 2030",
    description:
      "Formulated our Vision 2030 strategic plan to establish branches across India and expand our service footprint.",
    isSpecial: false,
  },
  {
    year: "2024",
    title: "Team Expansion",
    description:
      "Expanded our team to 8 members, bringing in diverse expertise to better serve our growing client base.",
    isSpecial: false,
  },
  {
    year: "2025",
    title: "Milestone Year",
    milestones: [
      {
        subtitle: "5-Year Anniversary",
        description:
          "Celebrated 5 successful years of practice, serving hundreds of clients across various industries.",
      },
      {
        subtitle: "New Partnership",
        description:
          "Welcomed Mrs. Swathi as a new Partner, strengthening our leadership team and expanding our service capabilities.",
      },
      {
        subtitle: "Organizational Evolution",
        description:
          "Converted the firm into a Limited Liability Partnership (LLP), marking a significant step in our organizational growth.",
      },
    ],
    isSpecial: true,
  },
]

const CompanyTimeline = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ca-darkBlue mb-4">Our Journey</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The evolution of K Vineeth Reddy & Co from its founding to the present day
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-ca-purple/20 hidden md:block"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
                  <div className="relative">
                    <div
                      className={`w-24 h-24 rounded-full ${event.isSpecial ? "bg-gradient-to-r from-ca-purple via-ca-orange to-ca-purple" : "bg-gradient-to-br from-ca-purple to-ca-orange"} flex items-center justify-center text-white text-2xl font-bold shadow-lg ${event.isSpecial ? "ring-4 ring-ca-purple/30" : ""}`}
                    >
                      {event.year}
                    </div>
                    <div
                      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 ${event.isSpecial ? "border-ca-purple/40" : "border-ca-purple/20"} ${event.isSpecial ? "animate-pulse" : "animate-pulse-slow"}`}
                    ></div>
                  </div>
                </div>

                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                  <div
                    className={`${event.isSpecial ? "bg-gradient-to-br from-white to-ca-lightGray border border-ca-purple/10" : "bg-ca-lightGray"} p-6 rounded-lg shadow-md inline-block ${event.isSpecial ? "w-full max-w-md" : ""}`}
                  >
                    <h3 className={`text-xl font-bold ${event.isSpecial ? "text-ca-purple" : "text-ca-darkBlue"} mb-2`}>
                      {event.title}
                    </h3>

                    {!event.isSpecial && <p className="text-gray-600">{event.description}</p>}

                    {event.isSpecial && event.milestones && (
                      <div className="space-y-4 mt-4">
                        {event.milestones.map((milestone, idx) => (
                          <div key={idx} className="border-l-4 border-ca-purple/30 pl-4 py-1">
                            <h4 className="text-lg font-semibold text-ca-darkBlue">{milestone.subtitle}</h4>
                            <p className="text-gray-600">{milestone.description}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyTimeline

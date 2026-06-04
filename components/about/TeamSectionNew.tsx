"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Linkedin, Mail, X, Award, Users, BookOpen, BarChart3 } from "lucide-react"

const partners = [
  {
    id: 1,
    name: "Swathi Vaka",
    position: "Partner, Chartered Accountant",
    image: "/images/about/partner-swathi-vaka.png",
    expertise: [
      "Global Audit",
      "US GAAP",
      "SOX Compliance",
      "Financial Analysis",
      "Risk Assessment",
      "Regulatory Compliance",
    ],
    linkedin: "#",
    email: "swathi@cakvr.com",
    bio: "Vaka Swathi is a Chartered Accountant and former PwC professional, bringing four years of global audit experience across diverse industries, including healthcare, manufacturing, retail, and construction.\n\nWith a strong foundation in financial analysis, risk assessment, and regulatory compliance, US GAAP, and SOX Compliance, Swathi has successfully led and contributed to audits of multinational organizations, ensuring accuracy, transparency, and adherence to industry standards while navigating complex financial landscapes and delivering strategic insights.",
    achievements: [
      "Former PwC professional with global audit experience",
      "Expert in US GAAP and SOX Compliance frameworks",
      "Led audits for multinational organizations across diverse industries",
      "Specialized in healthcare, manufacturing, retail, and construction sectors",
      "Member of the Institute of Chartered Accountants of India",
      "Skilled in navigating complex financial landscapes and delivering strategic insights",
    ],
    quote:
      "I believe in bringing global standards and precision to every client engagement, ensuring transparency and strategic value in all financial matters.",
  },
]

const TeamSectionNew = () => {
  const [selectedPartner, setSelectedPartner] = useState<(typeof partners)[0] | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2 },
    },
  }

  return (
    <section ref={sectionRef} className="py-20 bg-ca-lightGray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ca-darkBlue mb-4">Our Leadership Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the partners who lead our firm with expertise, integrity, and a commitment to excellence
          </p>
        </div>

        {/* Redesigned Partner Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Left side - Partner Image */}
              <div className="lg:w-5/12 relative">
                <div className="relative h-full min-h-[400px]">
                  <Image
                    src={partners[0].image || "/placeholder.svg"}
                    alt={partners[0].name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-ca-darkBlue/70 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <div className="flex items-center space-x-3">
                      <a
                        href={partners[0].linkedin}
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-ca-purple hover:text-white transition-colors"
                      >
                        <Linkedin size={18} />
                      </a>
                      <a
                        href={`mailto:${partners[0].email}`}
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-ca-purple hover:text-white transition-colors"
                      >
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Partner Information */}
              <div className="lg:w-7/12 p-8 lg:p-12">
                <motion.div variants={itemVariants}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-ca-darkBlue">{partners[0].name}</h3>
                      <p className="text-ca-orange text-lg">{partners[0].position}</p>
                    </div>
                    <button
                      onClick={() => setSelectedPartner(partners[0])}
                      className="mt-4 md:mt-0 px-6 py-2 bg-ca-darkBlue text-white rounded-md hover:bg-ca-darkBlue/90 transition-colors text-sm font-medium"
                    >
                      View Full Profile
                    </button>
                  </div>

                  <div className="mb-8">
                    <p className="text-gray-600 mb-4">{partners[0].bio.split("\n\n")[0]}</p>
                    <p className="text-gray-600">
                      <span className="font-medium text-ca-darkBlue">Specializations:</span> Global Audit, Financial
                      Analysis, Risk Assessment, Regulatory Compliance
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-ca-lightGray/50 p-5 rounded-lg">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-ca-purple/10 flex items-center justify-center mr-3">
                          <Award className="w-5 h-5 text-ca-purple" />
                        </div>
                        <h4 className="font-semibold text-ca-darkBlue">Credentials</h4>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-ca-purple mr-2">•</span>
                          <span className="text-gray-700 text-sm">
                            Member, Institute of Chartered Accountants of India
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-ca-purple mr-2">•</span>
                          <span className="text-gray-700 text-sm">Former PwC professional</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-ca-lightGray/50 p-5 rounded-lg">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-ca-purple/10 flex items-center justify-center mr-3">
                          <BookOpen className="w-5 h-5 text-ca-purple" />
                        </div>
                        <h4 className="font-semibold text-ca-darkBlue">Expertise</h4>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-ca-purple mr-2">•</span>
                          <span className="text-gray-700 text-sm">US GAAP & SOX Compliance frameworks</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-ca-purple mr-2">•</span>
                          <span className="text-gray-700 text-sm">Multinational organization audits</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <blockquote className="text-ca-darkBlue italic text-sm">"{partners[0].quote}"</blockquote>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Expertise Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-ca-darkBlue mb-4">Our Expert Team</h3>
              <p className="text-gray-600 mb-6">
                Beyond our leadership, we have a dedicated team of professionals who bring specialized expertise to
                every client engagement. Our team includes:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-ca-lightGray/50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-ca-purple text-white flex items-center justify-center mr-3">
                      <Users size={16} />
                    </div>
                    <span className="font-semibold text-ca-darkBlue">Chartered Accountants</span>
                  </div>
                  <p className="text-sm text-gray-600 pl-11">
                    Experts in financial reporting, auditing, and accounting
                  </p>
                </div>

                <div className="bg-ca-lightGray/50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-ca-purple text-white flex items-center justify-center mr-3">
                      <BarChart3 size={16} />
                    </div>
                    <span className="font-semibold text-ca-darkBlue">Tax Specialists</span>
                  </div>
                  <p className="text-sm text-gray-600 pl-11">Professionals focused on tax planning and compliance</p>
                </div>

                <div className="bg-ca-lightGray/50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-ca-purple text-white flex items-center justify-center mr-3">
                      <BookOpen size={16} />
                    </div>
                    <span className="font-semibold text-ca-darkBlue">Corporate Law Advisors</span>
                  </div>
                  <p className="text-sm text-gray-600 pl-11">
                    Experts in regulatory compliance and corporate governance
                  </p>
                </div>

                <div className="bg-ca-lightGray/50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-ca-purple text-white flex items-center justify-center mr-3">
                      <Award size={16} />
                    </div>
                    <span className="font-semibold text-ca-darkBlue">Financial Analysts</span>
                  </div>
                  <p className="text-sm text-gray-600 pl-11">Specialists in financial modeling and analysis</p>
                </div>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Our team collaborating"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ca-purple/50 to-transparent"></div>
              <div className="absolute inset-0 flex items-center p-8">
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg max-w-xs">
                  <p className="text-ca-darkBlue font-medium">
                    "We conduct weekly workshops to keep our team updated on recent amendments and industry best
                    practices."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Detail Modal */}
      <AnimatePresence>
        {selectedPartner && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="relative">
                <div className="h-64 relative">
                  <Image
                    src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt={selectedPartner.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ca-darkBlue to-transparent opacity-70"></div>
                </div>

                <button
                  onClick={() => setSelectedPartner(null)}
                  className="absolute top-4 right-4 bg-white/80 rounded-full p-1 hover:bg-white transition-colors"
                  aria-label="Close"
                >
                  <X size={24} className="text-ca-darkBlue" />
                </button>

                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-end gap-4 -mt-16 mb-6 relative">
                    <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-white flex-shrink-0">
                      <div className="relative w-full h-full">
                        <Image
                          src={selectedPartner.image || "/placeholder.svg"}
                          alt={selectedPartner.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-ca-darkBlue">{selectedPartner.name}</h2>
                      <p className="text-ca-orange text-lg">{selectedPartner.position}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-ca-darkBlue mb-4">Biography</h3>
                      {selectedPartner.bio.split("\n\n").map((paragraph, index) => (
                        <p key={index} className="text-gray-600 mb-4">
                          {paragraph}
                        </p>
                      ))}

                      <div className="flex space-x-3 mt-6">
                        <a
                          href={selectedPartner.linkedin}
                          className="w-10 h-10 rounded-full bg-ca-lightGray flex items-center justify-center text-ca-darkBlue hover:bg-ca-purple hover:text-white transition-colors"
                        >
                          <Linkedin size={20} />
                        </a>
                        <a
                          href={`mailto:${selectedPartner.email}`}
                          className="w-10 h-10 rounded-full bg-ca-lightGray flex items-center justify-center text-ca-darkBlue hover:bg-ca-purple hover:text-white transition-colors"
                        >
                          <Mail size={20} />
                        </a>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-ca-darkBlue mb-4">Achievements & Expertise</h3>
                      <ul className="space-y-3">
                        {selectedPartner.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-6 h-6 rounded-full bg-ca-purple text-white flex items-center justify-center mr-3 mt-0.5">
                              <span className="text-sm font-bold">✓</span>
                            </div>
                            <p className="text-gray-600">{achievement}</p>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 p-4 bg-ca-lightGray rounded-lg">
                        <blockquote className="text-ca-darkBlue italic">"{selectedPartner.quote}"</blockquote>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="text-xl font-semibold text-ca-darkBlue mb-4">Areas of Expertise</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedPartner.expertise.map((skill, index) => (
                        <span key={index} className="px-3 py-1.5 bg-ca-lightGray rounded-full text-sm text-gray-700">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default TeamSectionNew

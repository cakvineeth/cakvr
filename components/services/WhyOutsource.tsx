"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { CheckCircle, XCircle } from "lucide-react"

const WhyOutsource = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ca-darkBlue mb-4">
            Why Outsource to K Vineeth Reddy & Co?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transform your financial operations from complex and time-consuming to streamlined and efficient.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Comparison visualization */}
          <div>
            <div className="bg-ca-lightGray rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-ca-darkBlue mb-4 flex items-center">
                <XCircle className="text-red-500 mr-2" size={24} />
                In-house Accounting Challenges
              </h3>

              <motion.ul
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="space-y-4"
              >
                <motion.li variants={itemVariants} className="flex items-start">
                  <XCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>High costs for qualified staff and accounting software</span>
                </motion.li>
                <motion.li variants={itemVariants} className="flex items-start">
                  <XCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Time-consuming management and oversight</span>
                </motion.li>
                <motion.li variants={itemVariants} className="flex items-start">
                  <XCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Risk of errors and compliance issues</span>
                </motion.li>
                <motion.li variants={itemVariants} className="flex items-start">
                  <XCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Limited expertise in specialized areas</span>
                </motion.li>
                <motion.li variants={itemVariants} className="flex items-start">
                  <XCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Difficulty scaling with business growth</span>
                </motion.li>
              </motion.ul>
            </div>

            <div className="bg-ca-lightGray rounded-lg p-6">
              <h3 className="text-xl font-bold text-ca-darkBlue mb-4 flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={24} />
                Outsourcing Benefits
              </h3>

              <motion.ul
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="space-y-4"
              >
                <motion.li variants={itemVariants} className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Cost-effective access to expert accountants</span>
                </motion.li>
                <motion.li variants={itemVariants} className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Focus on your core business activities</span>
                </motion.li>
                <motion.li variants={itemVariants} className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Improved accuracy and compliance</span>
                </motion.li>
                <motion.li variants={itemVariants} className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Access to specialized knowledge and best practices</span>
                </motion.li>
                <motion.li variants={itemVariants} className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Scalable services that grow with your business</span>
                </motion.li>
              </motion.ul>
            </div>
          </div>

          {/* Team visualization */}
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Professional accounting team"
                width={600}
                height={400}
                className="w-full h-auto"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-ca-darkBlue/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Our Expert Team</h3>
                <p className="text-white/90">
                  Dedicated professionals with specialized expertise in accounting, taxation, and business advisory.
                </p>
              </div>
            </motion.div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.5 }}
                  className="bg-white rounded-lg shadow p-4 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-ca-purple mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white font-bold">{i}</span>
                  </div>
                  <h4 className="font-semibold text-ca-darkBlue">
                    {i === 1 && "Expertise"}
                    {i === 2 && "Efficiency"}
                    {i === 3 && "Excellence"}
                  </h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyOutsource

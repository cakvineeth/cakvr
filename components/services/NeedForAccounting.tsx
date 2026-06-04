"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { BarChart3, TrendingUp, Shield } from "lucide-react"

const NeedForAccounting = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const blockVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  }

  const growthVariants = {
    hidden: { height: "0%" },
    visible: {
      height: "100%",
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.8,
      },
    },
  }

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-ca-lightGray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ca-darkBlue mb-4">The Need for Solid Accounting</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A strong financial foundation is essential for business growth and stability. Our services provide the
            building blocks for your success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Building blocks animation */}
          <div className="relative h-[400px]">
            <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={blockVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="w-24 h-24 bg-ca-purple rounded-lg flex items-center justify-center text-white"
                >
                  {i === 0 && <BarChart3 size={36} />}
                  {i === 1 && <Shield size={36} />}
                  {i === 2 && <TrendingUp size={36} />}
                </motion.div>
              ))}
            </div>

            <div className="absolute bottom-[100px] left-0 right-0 flex justify-center space-x-8">
              {[3, 4].map((i) => (
                <motion.div
                  key={i}
                  custom={i - 1}
                  variants={blockVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="w-24 h-24 bg-ca-lightPurple rounded-lg flex items-center justify-center text-white"
                >
                  {i === 3 && <BarChart3 size={36} />}
                  {i === 4 && <Shield size={36} />}
                </motion.div>
              ))}
            </div>

            <motion.div
              custom={4}
              variants={blockVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="absolute bottom-[200px] left-0 right-0 flex justify-center"
            >
              <div className="w-24 h-24 bg-ca-orange rounded-lg flex items-center justify-center text-white">
                <TrendingUp size={36} />
              </div>
            </motion.div>
          </div>

          {/* Growth visualization */}
          <div>
            <h3 className="text-2xl font-bold text-ca-purple mb-6">From Foundation to Growth</h3>
            <p className="text-gray-600 mb-8">
              Just as a building needs a solid foundation, your business requires robust financial systems to support
              growth. Our accounting services provide the essential structure that allows your business to thrive.
            </p>

            <div className="relative h-64 border border-gray-200 rounded-lg p-4 bg-white">
              <div className="absolute bottom-4 left-4 right-4 h-[calc(100%-32px)] flex items-end">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex-1 mx-1 h-full relative">
                    <motion.div
                      variants={growthVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      custom={i}
                      className={`absolute bottom-0 left-0 right-0 ${
                        i % 2 === 0 ? "bg-ca-purple" : "bg-ca-orange"
                      } rounded-t-sm`}
                      style={{
                        height: "0%",
                        maxHeight: `${60 + i * 10}%`,
                      }}
                    ></motion.div>
                    <div className="absolute -bottom-6 left-0 right-0 text-center text-xs text-gray-500">
                      Year {i + 1}
                    </div>
                  </div>
                ))}

                {/* Y-axis label */}
                <div className="absolute -left-4 top-0 bottom-0 flex items-center">
                  <div className="transform -rotate-90 origin-center whitespace-nowrap text-xs text-gray-500">
                    Business Growth
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NeedForAccounting

"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { MapPin } from "lucide-react"

const OfficeGallery = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ca-darkBlue mb-4">Our Office</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our modern workspace is designed to foster collaboration, innovation, and productivity
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <motion.div variants={itemVariants} className="lg:col-span-2 row-span-2">
            <div className="relative h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/about/office-main.jpg"
                alt="K Vineeth Reddy & Co Office"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ca-darkBlue/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-ca-orange mr-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Bengaluru Office</h3>
                    <p className="text-white/80">
                      No.49, 1st Floor, 1st Cross, Vaikuntam Layout, Lakshminarayanapura, Bengaluru-560037
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/about/office-reception.jpg" alt="Office Reception" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ca-darkBlue/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg font-bold text-white">Reception Area</h3>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/about/office-meeting.jpg" alt="Meeting Room" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ca-darkBlue/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg font-bold text-white">Meeting Room</h3>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/about/office-workspace.jpg" alt="Workspace" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ca-darkBlue/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg font-bold text-white">Collaborative Workspace</h3>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600">
            Our modern workspace is designed to foster collaboration, innovation, and productivity.
          </p>
        </div>
      </div>
    </section>
  )
}

export default OfficeGallery

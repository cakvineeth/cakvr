"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react"

const ContactInformation = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const infoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  const contactItems = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Our Location",
      content:
        "3RD FLOOR, ASK TOWERS, NO 74/3, ITPL Main Rd, above EMPIRE HOTEL, Lakshminarayana Pura, Munnekollal, Bengaluru, Karnataka 560037",
      action: {
        text: "Get Directions",
        url: "https://maps.google.com/?q=K+VINEETH+REDDY+%26+CO+LLP,+CHARTERED+ACCOUNTANTS",
      },
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Numbers",
      content: "+91 88844 49446\n+91 70262 78880",
      action: {
        text: "Call Us",
        url: "tel:+918884449446",
      },
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Addresses",
      content: "office@cakvr.com\ncavineeth@cakvr.com",
      action: {
        text: "Send Email",
        url: "mailto:office@cakvr.com",
      },
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      content: "Monday - Friday: 9:00 AM - 5:00 PM\nSaturday & Sunday: Closed",
      action: null,
    },
  ]

  return (
    <section ref={sectionRef} className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={infoVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative overflow-hidden"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ca-darkBlue mb-4">Contact Information</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're here to help with any questions you might have. Reach out to us through any of the channels below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactItems.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100"
              >
                <div className="p-6">
                  <div className="bg-gradient-to-br from-ca-darkBlue to-ca-purple rounded-full p-3 inline-flex items-center justify-center mb-4">
                    <span className="text-white">{item.icon}</span>
                  </div>
                  <h4 className="font-semibold text-lg mb-2 text-gray-900">{item.title}</h4>
                  <p className="text-gray-600 whitespace-pre-line mb-4">{item.content}</p>
                  {item.action && (
                    <a
                      href={item.action.url}
                      target={item.action.url.startsWith("http") ? "_blank" : "_self"}
                      rel={item.action.url.startsWith("http") ? "noopener noreferrer" : ""}
                      className="inline-flex items-center text-ca-purple hover:text-ca-darkBlue transition-colors font-medium text-sm"
                    >
                      {item.action.text}
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-ca-darkBlue to-ca-purple rounded-xl overflow-hidden shadow-xl">
            <div className="p-8 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0">
                  <h3 className="text-xl font-bold mb-2">Connect on WhatsApp</h3>
                  <p className="text-white/80">Get quick responses to your queries through WhatsApp</p>
                </div>
                <a
                  href="https://wa.me/917026278880?text=Hello!!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-ca-darkBlue hover:bg-green-500 hover:text-white transition-all duration-300 py-3 px-6 rounded-lg font-medium flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-2"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactInformation

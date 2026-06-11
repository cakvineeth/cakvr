"use client"

import { useEffect } from "react"
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import ContactForm from "@/components/contact/ContactForm"
import ContactInformation from "@/components/contact/ContactInformation"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Contact() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const mapVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-0 right-0 bg-purple-100 w-1/3 h-1/3 rounded-full opacity-20 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 bg-indigo-100 w-1/3 h-1/3 rounded-full opacity-20 blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-purple-100 text-ca-purple font-medium text-sm mb-4">
              GET IN TOUCH
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#272151] to-[#4A2880] bg-clip-text text-transparent">
              We're Here to Help
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
              Our team is ready to answer your questions and provide the expertise your business needs to thrive in
              today's competitive landscape.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              {
                icon: <Phone className="h-6 w-6" />,
                title: "Call Us",
                content: "+91 8884449446",
                action: "tel:+918884449446",
              },
              {
                icon: <Mail className="h-6 w-6" />,
                title: "Email Us",
                content: "info@cakvr.com",
                action: "mailto:info@cakvr.com",
              },
              {
                icon: <MapPin className="h-6 w-6" />,
                title: "Visit Us",
                content: "Bengaluru, Karnataka",
                action: "https://maps.google.com/?q=K+VINEETH+REDDY+%26+CO+LLP,+CHARTERED+ACCOUNTANTS",
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.action}
                target={item.action.startsWith("http") ? "_blank" : "_self"}
                rel={item.action.startsWith("http") ? "noopener noreferrer" : ""}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="bg-purple-50 rounded-full p-3 inline-flex items-center justify-center mb-4 group-hover:bg-ca-purple group-hover:text-white transition-all duration-300">
                  <span className="text-ca-purple group-hover:text-white">{item.icon}</span>
                </div>
                <h3 className="font-semibold text-lg mb-1 text-ca-purple">{item.title}</h3>
                <p className="text-gray-600">{item.content}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <ContactInformation />

      {/* Contact Form Section */}
      <ContactForm />

      {/* Map Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={mapVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed/v1/search?q=K+VINEETH+REDDY+%26+CO+LLP,+CHARTERED+ACCOUNTANTS&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              className="w-full h-[400px] md:h-[500px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-ca-darkBlue to-ca-purple rounded-2xl p-8 md:p-12 text-center text-white shadow-xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Explore Our Services</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Discover how our comprehensive range of services can help your business thrive in today's competitive
              landscape.
            </p>
            <Button
              className="bg-white text-ca-darkBlue hover:bg-gray-100 transition-all duration-300 text-base px-8 py-6 h-auto group"
              asChild
            >
              <Link href="/services" className="flex items-center">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

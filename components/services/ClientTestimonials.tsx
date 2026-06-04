"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Manoj Krishna",
    position: "Operations head, TRISTUP LIFESCIENCES PRIVATE LIMITED",
    image: "https://cakvr.com/wp-content/uploads/2020/11/testimonial-01.jpg",
    quote:
      "Great experience working with them. Always available to our queries and provided best guidance whenever we needed them, and beyond their work area 🙂 Thank you! throughout journey..",
    rating: 5,
  },
  {
    id: 2,
    name: "Sujit Nair",
    position: "Founder and Principal Architect, SDEG",
    image: "https://cakvr.com/wp-content/uploads/2020/11/testimonial-02.jpg",
    quote:
      "All my business taxation accounts, fillings etc are handled by Mr Vineet Reddy and his team from the past 3 years. A perfect guider and supporter, which most CAs dont. Mr vineet Has an amazing team working and learning with his organization Thank your playing a major role in bringing up shepherdz business solutions in its throughout journey..",
    rating: 5,
  },
  {
    id: 3,
    name: "Aravind",
    position: "Managing Partner A2Z Home Needs",
    image: "https://cakvr.com/wp-content/uploads/2020/11/testimonial-03.jpg",
    quote:
      "People here are more informative and have lots of patience, these are like your financial calenders, these guys will not forget to remind you things on time. Service is highly professional followed by ethics. I wish them good luck and all the very best, keep on working the same way as you are.",
    rating: 5,
  },
  {
    id: 4,
    name: "Mohammed Adnan",
    position: "Managing Partner Shepherdz Business Solutions",
    image: "/placeholder.svg?height=500&width=500",
    quote:
      "I've been working with Vineeth for over a year and have found him to prompt, professional and polite. Strongly recommend!",
    rating: 5,
  },
]

const ClientTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const previousTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 right-20 text-ca-orange/10">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path
            d="M20 0L25.8779 14.1221L40 20L25.8779 25.8779L20 40L14.1221 25.8779L0 20L14.1221 14.1221L20 0Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="absolute bottom-20 left-10 text-ca-purple/10">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="4" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <span className="text-ca-orange font-medium uppercase tracking-wider">TESTIMONIALS</span>
            <h2 className="text-4xl md:text-5xl font-bold text-ca-darkBlue mt-2">
              What our clients <span className="italic font-serif">said</span>
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={previousTestimonial}
              className="p-2 rounded-full border border-gray-200 hover:border-ca-purple hover:text-ca-purple transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full border border-gray-200 hover:border-ca-purple hover:text-ca-purple transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full"
            >
              {[0, 1, 2].map((offset) => {
                const index = (currentIndex + offset) % testimonials.length
                const testimonial = testimonials[index]
                return (
                  <div
                    key={testimonial.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col"
                  >
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>

                      <div className="relative mb-6 flex-grow">
                        <div className="absolute -top-2 -left-1 text-ca-purple/10 text-5xl font-serif">"</div>
                        <p className="text-gray-700 relative z-10 pt-4 italic text-lg leading-relaxed">
                          {testimonial.quote}
                        </p>
                        <div className="absolute -bottom-2 -right-1 text-ca-purple/10 text-5xl font-serif">"</div>
                      </div>

                      <div className="bg-gradient-to-r from-ca-purple to-ca-orange p-5 rounded-lg mt-auto">
                        <h3 className="font-bold text-white text-lg">{testimonial.name}</h3>
                        <p className="text-white/90 text-sm mt-1">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full mx-1 transition-colors ${
                index === currentIndex ? "bg-ca-purple w-4" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientTestimonials

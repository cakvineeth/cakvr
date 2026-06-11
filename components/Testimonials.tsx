"use client"

import { useState, useEffect, useRef } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Manoj Krishna",
    position: "Operations head, TRISTUP LIFESCIENCES PRIVATE LIMITED",
    quote:
      "People here are more informative and have lots of patience, these are like your financial calenders, these guys will not forget to remind you things on time. Service is highly professional followed by ethics. I wish them good luck and all the very best, keep on working the same way as you are.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sujit Nair",
    position: "Founder and Principal Architect, SDEG",
    quote:
      "I've been working with Vineeth for over a year and have found him to prompt, professional and polite. Strongly recommend!",
    rating: 5,
  },
  {
    id: 3,
    name: "Aravind",
    position: "Managing Partner A2Z Home Needs",
    quote:
      "Great experience working with them. Always available to our queries and provided best guidance whenever we needed them, and beyond their work area 🙂 Thank you! throughout journey..",
    rating: 5,
  },
  {
    id: 4,
    name: "Mohammed Adnan",
    position: "Managing Partner Shepherdz Business Solutions",
    quote:
      "All my business taxation accounts, fillings etc are handled by Mr Vineet Reddy and his team from the past 3 years. A perfect guider and supporter, which most CAs dont. Mr vineet Has an amazing team working and learning with his organization Thank your playing a major role in bringing up shepherdz business solutions in its throughout journey..",
    rating: 5,
  },
  {
    id: 5,
    name: "Harsha Raj",
    position: "Entrepreneur",
    quote:
      "The Approved Accounting team have been superb and we are so glad to have found them. They are friendly and always helpful.",
    rating: 5,
  },
  {
    id: 6,
    name: "Nikhileswar Reddy",
    position: "Managing Partner, Avanika Infra",
    quote:
      "Thank you for your excellent audit services. Your attention to detail, industry expertise, and communication skills were exceptional. We appreciate the insights and recommendations you provided and would highly recommend you to others seeking a knowledgeable and experienced auditor.",
    rating: 5,
  },
  {
    id: 7,
    name: "Bhanuprasad",
    position: "Professional",
    quote:
      "Mr. Vineeth and team does a great job. I love their commitment and professionalism. Very quick in responding and they guide you in the right direction by explaining every aspect.",
    rating: 5,
  },
  {
    id: 8,
    name: "Anil Kumar",
    position: "Professional and Enterprenuer",
    quote:
      "I know personally last 3 years Vineeth taking care our company itr and my personal itr also we never had any issues with the Vineeth and team. I'm extremely impressed on team approach and suggestions. He has very good knowledge on all the parameters.",
    rating: 5,
  },
]

interface TestimonialsProps {
  className?: string
  title?: string
  subtitle?: string
}

const Testimonials = ({
  className = "",
  title = "What Our Clients Say",
  subtitle = "TESTIMONIALS",
}: TestimonialsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const autoplayRef = useRef(null)

  // Setup autoplay
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      nextTestimonial()
    }, 6000)

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [currentIndex])

  const nextTestimonial = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)

    // Reset autoplay
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
    }
    autoplayRef.current = setInterval(() => {
      nextTestimonial()
    }, 6000)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  const previousTestimonial = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))

    // Reset autoplay
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
    }
    autoplayRef.current = setInterval(() => {
      nextTestimonial()
    }, 6000)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  return (
    <section className={`py-20 xl:py-24 relative overflow-hidden ${className}`}>
      {/* Background with more vibrant gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-ca-purple/10 to-ca-orange/10 -z-10"></div>

      {/* More visible decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-ca-purple/15 blur-xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-ca-orange/15 blur-xl -z-10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border-2 border-ca-purple/20 opacity-50 -z-10"></div>

      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 xl:px-8">
        {/* Enhanced section header with more vibrant colors */}
        <div className="text-center max-w-3xl mx-auto mb-12 xl:mb-16">
          <div className="inline-flex items-center px-4 py-1.5 bg-ca-orange/20 rounded-full text-ca-orange font-semibold mb-4">
            <span className="mr-2">✦</span>
            {subtitle}
            <span className="ml-2">✦</span>
          </div>
          <h2 className="text-[clamp(2.25rem,4vw,3.75rem)] font-bold mb-6 tracking-tight bg-gradient-to-r from-ca-purple to-ca-orange bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-lg text-gray-700">Hear directly from our clients about their experience working with us</p>
        </div>

        {/* Testimonial carousel */}
        <div className="relative">
          {/* Large quote icon with more opacity */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-ca-purple/20">
            <Quote className="w-24 h-24" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8">
            {[0, 1, 2].map((offset) => {
              const index = (currentIndex + offset) % testimonials.length
              const testimonial = testimonials[index]
              return (
                <div
                  key={testimonial.id}
                  className={`bg-white rounded-2xl shadow-xl overflow-hidden h-full flex flex-col transition-all duration-500 ${
                    offset === 1
                      ? "xl:scale-110 xl:shadow-2xl z-10 border-t-4 border-ca-purple"
                      : "xl:scale-100 opacity-90 border-t-4 border-ca-orange"
                  }`}
                >
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>

                    <div className="relative mb-6 flex-grow">
                      <p className="text-gray-700 relative z-10 pt-4 italic text-lg leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-ca-purple to-ca-orange p-5 rounded-xl mt-auto">
                      <h3 className="font-bold text-white text-lg">{testimonial.name}</h3>
                      <p className="text-white/90 text-sm mt-1">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Enhanced navigation controls */}
          <div className="flex justify-center items-center mt-12 gap-8">
            <button
              onClick={previousTestimonial}
              disabled={isAnimating}
              className="p-3 rounded-full bg-white shadow-md border border-gray-200 hover:border-ca-purple hover:text-ca-purple transition-colors disabled:opacity-50"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isAnimating) return
                    setIsAnimating(true)
                    setCurrentIndex(index)
                    setTimeout(() => {
                      setIsAnimating(false)
                    }, 500)

                    // Reset autoplay
                    if (autoplayRef.current) {
                      clearInterval(autoplayRef.current)
                    }
                    autoplayRef.current = setInterval(() => {
                      nextTestimonial()
                    }, 6000)
                  }}
                  className={`h-3 rounded-full transition-all ${
                    index === currentIndex ? "bg-gradient-to-r from-ca-purple to-ca-orange w-10" : "bg-gray-300 w-3"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              disabled={isAnimating}
              className="p-3 rounded-full bg-white shadow-md border border-gray-200 hover:border-ca-purple hover:text-ca-purple transition-colors disabled:opacity-50"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

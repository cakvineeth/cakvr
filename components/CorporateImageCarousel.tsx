"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  {
    src: "/images/carousel/corporate-meeting.png",
    alt: "Corporate Meeting",
    caption: "Strategic Business Consultations"
  },
  {
    src: "/images/carousel/financial-analysis.png",
    alt: "Financial Analysis",
    caption: "Comprehensive Financial Analysis"
  },
  {
    src: "/images/carousel/tax-planning.png",
    alt: "Tax Planning",
    caption: "Effective Tax Planning Strategies"
  },
  {
    src: "/images/carousel/audit-services.png",
    alt: "Audit Services",
    caption: "Thorough Audit Services"
  },
]

export default function CorporateImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }, [])

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000) // Change slide every 5 seconds
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isAutoPlaying, nextSlide])

  // Pause auto-play when user interacts with carousel
  const handleInteraction = () => {
    setIsAutoPlaying(false)
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg"
      onMouseEnter={handleInteraction}
      onTouchStart={handleInteraction}
    >
      {/* Image Carousel */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentIndex ? 1 : 0 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl md:text-2xl font-semibold">{image.caption}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => {
          prevSlide()
          handleInteraction()
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 text-white transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={() => {
          nextSlide()
          handleInteraction()
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 text-white transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index)
              handleInteraction()
            }}
            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-white w-4" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </motion.div>
  )
}

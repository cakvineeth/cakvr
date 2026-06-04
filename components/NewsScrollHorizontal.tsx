"use client"

import { useEffect, useState, useRef } from "react"
import { NewsAPI, type NewsItem } from "@/lib/api"
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function NewsScrollHorizontal() {
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    async function fetchNews() {
      try {
        const newsData = await NewsAPI.getAll()
        setNews(newsData) // Get all news items for scrolling
        setLoading(false)
      } catch (error) {
        console.error("Error fetching news:", error)
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  // Function to extract domain from URL
  const extractSource = (url: string | null) => {
    if (!url) return "CA KVR News"
    try {
      const domain = new URL(url).hostname
      return domain
        .replace("www.", "")
        .split(".")
        .slice(0, -1)
        .join(".")
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    } catch (e) {
      return "CA KVR News"
    }
  }

  if (loading) {
    return (
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-center">
            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-ca-purple"></div>
          </div>
        </div>
      </div>
    )
  }

  if (news.length === 0) {
    return (
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">News is temporarily unavailable. Please try again later.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-ca-darkBlue">Industry Insights</h2>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-2">
              <button
                onClick={scrollLeft}
                className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-5 w-5 text-ca-darkBlue" />
              </button>
              <button
                onClick={scrollRight}
                className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="h-5 w-5 text-ca-darkBlue" />
              </button>
            </div>
            <Link href="/news" className="flex items-center text-ca-purple hover:text-ca-lightPurple transition-colors">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {news.map((item) => (
            <a
              key={item.id}
              href={item.sourceUrl || `/news/${item.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-72 bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              <div className="relative h-48 w-full">
                <Image src={item.imageUrl || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium px-2 py-1 bg-ca-lightGray text-ca-darkBlue rounded-full">
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-500">{formatDate(item.publishedAt)}</span>
                </div>
                <h3 className="font-medium text-ca-darkBlue mb-3 line-clamp-2 min-h-[3rem]">{item.title}</h3>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-xs font-medium text-ca-purple flex items-center">
                    {extractSource(item.sourceUrl)}
                  </span>
                  <span className="text-xs text-ca-darkBlue flex items-center">
                    Read More <ExternalLink className="h-3 w-3 ml-1" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

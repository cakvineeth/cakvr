"use client"

import { useEffect, useState, useRef } from "react"
import { NewsAPI, type NewsItem } from "@/lib/api"
import { Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function NewsScroll() {
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    async function fetchNews() {
      try {
        const newsData = await NewsAPI.getAll()
        setNews(newsData.slice(0, 10)) // Limit to 10 items
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
      month: "short",
      day: "numeric",
    })
  }

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-ca-purple"></div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 h-full">
      <h3 className="text-lg font-bold text-ca-darkBlue mb-4 flex items-center justify-between">
        Latest News
        <Link href="/news" className="text-sm text-ca-purple hover:underline">
          View All
        </Link>
      </h3>

      <div
        ref={scrollRef}
        className="overflow-y-auto pr-2 h-[calc(100%-2rem)]"
        style={{ maxHeight: "calc(100vh - 200px)" }}
      >
        {news.length > 0 ? (
          <div className="space-y-4">
            {news.map((item) => (
              <div key={item.id} className="border-b border-gray-100 pb-4 last:border-0">
                <div className="flex items-center text-xs text-gray-500 mb-1">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>{formatDate(item.publishedAt)}</span>
                  <span className="mx-1">•</span>
                  <span className="text-ca-purple">{item.category}</span>
                </div>
                <h4 className="text-sm font-medium line-clamp-2 mb-2">{item.title}</h4>
                {item.imageUrl && (
                  <div className="relative h-24 w-full mb-2 rounded overflow-hidden">
                    <Image src={item.imageUrl || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  </div>
                )}
                <p className="text-xs text-gray-600 line-clamp-2 mb-2">{item.excerpt}</p>
                <div className="text-right">
                  <Link href={`/news/${item.id}`} className="text-xs text-ca-purple hover:underline">
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">No news available</div>
        )}
      </div>
    </div>
  )
}

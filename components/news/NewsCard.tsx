"use client"

import Image from "next/image"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { NewsItem } from "@/lib/api"
import Link from "next/link"

interface NewsCardProps {
  news: NewsItem
}

export default function NewsCard({ news }: NewsCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image src={news.imageUrl || "/placeholder.svg"} alt={news.title} fill className="object-cover" />
        <div className="absolute top-0 right-0 bg-ca-purple text-white px-3 py-1 text-sm font-medium">
          {news.category}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-ca-darkBlue mb-2">{news.title}</h3>

        <div className="flex items-center text-gray-500 text-sm mb-4">
          <div className="flex items-center mr-4">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{formatDate(news.publishedAt)}</span>
          </div>
          <div>Source: {news.source}</div>
        </div>

        <p className="text-gray-600 mb-4">{news.excerpt}</p>

        <div className="flex justify-between items-center">
          <Link href={`/news/${news.id}`}>
            <Button variant="outline" className="text-ca-purple border-ca-purple hover:bg-ca-purple hover:text-white">
              Read More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

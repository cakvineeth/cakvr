"use client"

import { useState, useEffect } from "react"
import { NewsAPI, type NewsItem } from "@/lib/api"
import NewsCard from "./NewsCard"
import NewsFilter from "./NewsFilter"
import { Loader2 } from "lucide-react"

// Add this function at the top of the component (after the imports)
function getMockNewsData() {
  const now = new Date()
  return [
    {
      id: "1",
      title: "New Tax Regulations for Small Businesses in 2025",
      excerpt: "The IRS has announced new tax regulations that will affect small businesses starting January 2025.",
      content:
        "The Internal Revenue Service (IRS) has unveiled a comprehensive set of new tax regulations aimed at small businesses, set to take effect in January 2025.",
      imageUrl: "/financial-growth-chart.png",
      publishedAt: new Date(now.getTime() - 2 * 60 * 60 * 1000).toISOString(),
      category: "Taxation",
      sourceUrl: "#",
    },
    {
      id: "2",
      title: "Federal Reserve Announces Interest Rate Decision",
      excerpt:
        "The Federal Reserve has made its latest decision on interest rates, impacting businesses and consumers.",
      content:
        "In its latest monetary policy meeting, the Federal Reserve announced its decision on interest rates, citing current economic indicators and inflation data.",
      imageUrl: "/global-economic-network.png",
      publishedAt: new Date(now.getTime() - 5 * 60 * 60 * 1000).toISOString(),
      category: "Economy",
      sourceUrl: "#",
    },
    {
      id: "3",
      title: "New Accounting Standards for Public Companies",
      excerpt:
        "The FASB has issued new accounting standards that will affect financial reporting for public companies.",
      content:
        "The Financial Accounting Standards Board (FASB) has issued new standards that will significantly change how public companies report certain financial information.",
      imageUrl: "/financial-balance.png",
      publishedAt: new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      category: "Accounting",
      sourceUrl: "#",
    },
    {
      id: "4",
      title: "Major Merger in the Financial Services Industry",
      excerpt: "Two leading financial services companies have announced a merger, creating a new industry giant.",
      content:
        "In a move that has surprised industry observers, two major financial services companies have announced their intention to merge.",
      imageUrl: "/converging-paths.png",
      publishedAt: new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      category: "Industry",
      sourceUrl: "#",
    },
    {
      id: "5",
      title: "Cybersecurity Concerns for Financial Institutions",
      excerpt: "Recent cyber attacks have raised concerns about security measures in financial institutions.",
      content:
        "A series of sophisticated cyber attacks targeting financial institutions has raised serious concerns about the adequacy of current security measures.",
      imageUrl: "/digital-fortress.png",
      publishedAt: new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      category: "Security",
      sourceUrl: "#",
    },
    {
      id: "6",
      title: "Sustainable Finance Initiatives Gaining Momentum",
      excerpt: "Financial institutions are increasingly adopting sustainable finance practices and ESG criteria.",
      content:
        "Sustainable finance initiatives are gaining significant momentum as more financial institutions integrate Environmental, Social, and Governance (ESG) criteria into their investment decisions.",
      imageUrl: "/placeholder.svg?height=200&width=300&query=sustainability",
      publishedAt: new Date(now.getTime() - 4 * 24 * 60 * 60 * 1000).toISOString(),
      category: "Sustainability",
      sourceUrl: "#",
    },
  ]
}

export default function NewsPageContent() {
  const [news, setNews] = useState<NewsItem[]>([])
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  // Extract unique categories from news items
  const categories = [...new Set(news.map((item) => item.category))].sort()

  // Update the loadNews function with better error handling and fallback data
  useEffect(() => {
    async function loadNews() {
      setLoading(true)
      try {
        const newsData = await NewsAPI.getAll()
        setNews(newsData)
        setFilteredNews(newsData)
        setError(null)
      } catch (err) {
        console.error("Error loading news:", err)
        // Fallback to local mock data when API fails
        const fallbackNews = getMockNewsData()
        setNews(fallbackNews)
        setFilteredNews(fallbackNews)
        setError(null)
      } finally {
        setLoading(false)
      }
    }

    loadNews()
  }, [])

  useEffect(() => {
    if (activeCategory) {
      setFilteredNews(news.filter((item) => item.category === activeCategory))
    } else {
      setFilteredNews(news)
    }
  }, [activeCategory, news])

  const handleFilterChange = (category: string | null) => {
    setActiveCategory(category)
  }

  if (error) {
    return (
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <p className="text-lg text-red-600">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-ca-purple text-white rounded-md hover:bg-ca-lightPurple"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-ca-darkBlue mb-4">Latest Financial News</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news and developments in the financial and business world.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-12 w-12 text-ca-purple animate-spin" />
            <span className="ml-2 text-lg text-ca-purple">Loading news...</span>
          </div>
        ) : (
          <>
            <NewsFilter categories={categories} onFilterChange={handleFilterChange} activeCategory={activeCategory} />

            {filteredNews.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredNews.map((item) => (
                  <NewsCard key={item.id} news={item} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">No news articles found for this category.</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

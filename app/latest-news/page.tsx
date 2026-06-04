"use client"

import { useEffect, useState } from "react"
import { NewsAPI, type NewsItem } from "@/lib/api"
import NewsCard from "@/components/news/NewsCard"

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

export default function LatestNews() {
  const [news, setNews] = useState<NewsItem[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await NewsAPI.getCategories()
        setCategories(categories)
      } catch (error) {
        console.error("Error fetching categories:", error)
        // Fallback to categories from mock data
        const mockNews = getMockNewsData()
        const uniqueCategories = [...new Set(mockNews.map((item) => item.category))]
        setCategories(uniqueCategories)
      }
    }

    fetchCategories()
  }, [])

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true)
      try {
        const newsData = selectedCategory ? await NewsAPI.getByCategory(selectedCategory) : await NewsAPI.getAll()
        setNews(newsData)
      } catch (error) {
        console.error("Error fetching news:", error)
        // Fallback to local mock data when API fails
        const fallbackNews = getMockNewsData()
        // Filter by category if selected
        const filteredNews = selectedCategory
          ? fallbackNews.filter((item) => item.category === selectedCategory)
          : fallbackNews
        setNews(filteredNews)
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [selectedCategory])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Latest News</h1>
      <p className="text-gray-600 mb-8">
        Stay updated with the latest news and developments in the financial and business world.
      </p>

      {/* Category Filter */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Filter by Category</h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === null ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* News Grid */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
        </div>
      ) : news.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-600 py-12">
          No news articles found {selectedCategory && `in ${selectedCategory} category`}.
        </div>
      )}
    </div>
  )
}

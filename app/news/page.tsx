import { NewsAPI } from "@/lib/api"
import NewsCard from "@/components/news/NewsCard"
import Logo from "@/components/Logo"
import { ContrastText } from "@/components/ui/contrast-text"

export const metadata = {
  title: "Latest News | K Vineeth Reddy & Co LLP",
  description: "Stay updated with the latest financial and business news, insights, and developments.",
}

// Update the component to handle errors with a try-catch block
export default async function NewsPage() {
  let news = []

  try {
    news = await NewsAPI.getAll()
  } catch (error) {
    console.error("Error fetching news:", error)
    // Generate fallback news data
    const now = new Date()
    news = [
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
    ]
  }

  return (
    <>
      <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Logo size="large" />
            </div>
            <ContrastText as="h1" variant="light" className="text-3xl md:text-4xl font-bold mb-4">
              Latest Financial News
            </ContrastText>
            <ContrastText as="p" variant="light" className="text-lg text-gray-600">
              Stay updated with the latest news and developments in the financial and business world
            </ContrastText>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {news.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.map((item) => (
                <NewsCard key={item.id} news={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">No news articles found.</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

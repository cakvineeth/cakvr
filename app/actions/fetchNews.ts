"use server"

export type NewsItem = {
  id: string
  title: string
  description: string
  content: string
  source: string
  url: string
  imageUrl: string
  publishedAt: string
  category: string
}

// This function simulates scraping news from various sources
export async function fetchNews(category?: string): Promise<NewsItem[]> {
  try {
    // In a real implementation, this would scrape from actual news sources
    // For now, we'll use a simulated response

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Generate a timestamp for "published at" dates
    const now = new Date()

    // Simulated news data
    const newsItems: NewsItem[] = [
      {
        id: "1",
        title: "New Tax Regulations for Small Businesses in 2025",
        description:
          "The IRS has announced new tax regulations that will affect small businesses starting January 2025.",
        content:
          "The Internal Revenue Service (IRS) has unveiled a comprehensive set of new tax regulations aimed at small businesses, set to take effect in January 2025. These changes include modifications to deduction eligibility, reporting requirements, and tax credit opportunities. Business owners are advised to consult with financial advisors to understand how these changes might impact their operations and tax planning strategies.",
        source: "Financial Times",
        url: "https://example.com/news/1",
        imageUrl:
          "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        publishedAt: new Date(now.getTime() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
        category: "Taxation",
      },
      {
        id: "2",
        title: "Federal Reserve Announces Interest Rate Decision",
        description:
          "The Federal Reserve has made its latest decision on interest rates, impacting businesses and consumers.",
        content:
          "In its latest monetary policy meeting, the Federal Reserve announced its decision on interest rates, citing current economic indicators and inflation data. This decision is expected to have significant implications for businesses across various sectors, particularly those with substantial debt or those planning capital investments. Financial analysts recommend businesses review their debt structures and investment strategies in light of this development.",
        source: "Wall Street Journal",
        url: "https://example.com/news/2",
        imageUrl:
          "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        publishedAt: new Date(now.getTime() - 5 * 60 * 60 * 1000).toISOString(), // 5 hours ago
        category: "Economy",
      },
      {
        id: "3",
        title: "New Accounting Standards for Public Companies",
        description:
          "The FASB has issued new accounting standards that will affect financial reporting for public companies.",
        content:
          "The Financial Accounting Standards Board (FASB) has issued new standards that will significantly change how public companies report certain financial information. These changes aim to improve transparency and comparability in financial reporting. Companies will need to update their accounting practices and potentially their financial systems to comply with these new requirements. The standards will be phased in over the next two years, giving businesses time to prepare for implementation.",
        source: "Accounting Today",
        url: "https://example.com/news/3",
        imageUrl:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        publishedAt: new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
        category: "Accounting",
      },
      {
        id: "4",
        title: "Major Merger in the Financial Services Industry",
        description: "Two leading financial services companies have announced a merger, creating a new industry giant.",
        content:
          "In a move that has surprised industry observers, two major financial services companies have announced their intention to merge. This consolidation is expected to create one of the largest entities in the sector, with potential implications for market competition, service offerings, and client relationships. Regulatory approval is still pending, but if approved, the merger could reshape the competitive landscape of the financial services industry.",
        source: "Bloomberg",
        url: "https://example.com/news/4",
        imageUrl:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        publishedAt: new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
        category: "Industry",
      },
      {
        id: "5",
        title: "Cybersecurity Concerns for Financial Institutions",
        description: "Recent cyber attacks have raised concerns about security measures in financial institutions.",
        content:
          "A series of sophisticated cyber attacks targeting financial institutions has raised serious concerns about the adequacy of current security measures. These incidents have highlighted vulnerabilities in digital infrastructure and the need for enhanced cybersecurity protocols. Financial institutions are being urged to review and strengthen their security systems, implement advanced threat detection technologies, and provide comprehensive training for staff on recognizing and responding to potential security threats.",
        source: "Cybersecurity News",
        url: "https://example.com/news/5",
        imageUrl:
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        publishedAt: new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
        category: "Security",
      },
      {
        id: "6",
        title: "Sustainable Finance Initiatives Gaining Momentum",
        description: "Financial institutions are increasingly adopting sustainable finance practices and ESG criteria.",
        content:
          "Sustainable finance initiatives are gaining significant momentum as more financial institutions integrate Environmental, Social, and Governance (ESG) criteria into their investment decisions and business operations. This shift reflects growing awareness of climate change and social responsibility among investors and consumers. Financial advisors are increasingly helping clients align their investments with their values while still pursuing competitive returns. This trend is expected to continue as regulatory frameworks around sustainable finance evolve and mature.",
        source: "Green Finance Journal",
        url: "https://example.com/news/6",
        imageUrl:
          "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        publishedAt: new Date(now.getTime() - 4 * 24 * 60 * 60 * 1000).toISOString(), // 4 days ago
        category: "Sustainability",
      },
    ]

    // Filter by category if provided
    if (category) {
      return newsItems.filter((item) => item.category.toLowerCase() === category.toLowerCase())
    }

    return newsItems
  } catch (error) {
    console.error("Error fetching news:", error)
    return []
  }
}

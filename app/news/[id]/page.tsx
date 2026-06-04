import { NewsAPI } from "@/lib/api"
import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Logo from "@/components/Logo"

export async function generateMetadata({ params }: { params: { id: string } }) {
  try {
    const news = await NewsAPI.getById(params.id)

    return {
      title: `${news.title} | K Vineeth Reddy & Co LLP News`,
      description: news.excerpt,
    }
  } catch (error) {
    return {
      title: "News | K Vineeth Reddy & Co LLP",
      description: "Latest financial and business news and insights",
    }
  }
}

export default async function NewsDetail({ params }: { params: { id: string } }) {
  const news = await NewsAPI.getById(params.id)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <>
      <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Logo size="large" />
            </div>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" className="mb-8 text-ca-purple" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <div className="relative h-[400px] w-full mb-8 rounded-xl overflow-hidden">
            <Image src={news.imageUrl || "/placeholder.svg"} alt={news.title} fill className="object-cover" />
          </div>

          <div className="mb-8">
            <h1 className="text-4xl font-bold text-ca-darkBlue mb-4">{news.title}</h1>

            <div className="flex flex-wrap items-center text-gray-500 text-sm mb-6">
              <div className="flex items-center mr-6 mb-2">
                <Calendar className="h-4 w-4 mr-1" />
                <span className="text-black">{formatDate(news.publishedAt)}</span>
              </div>
              <div className="flex items-center mb-2">
                <span className="px-3 py-1 bg-ca-purple/10 rounded-full text-ca-purple text-sm">{news.category}</span>
              </div>
              {news.source && (
                <div className="flex items-center ml-6 mb-2">
                  <span className="text-black">Source: {news.source}</span>
                </div>
              )}
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            {news.content.split("\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {news.sourceUrl && (
            <div className="mt-8 p-4 bg-ca-lightGray rounded-lg">
              <p className="text-gray-700">
                Original source:{" "}
                <a
                  href={news.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ca-purple hover:underline"
                >
                  {news.source}
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

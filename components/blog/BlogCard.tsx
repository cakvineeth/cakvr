import Image from "next/image"
import Link from "next/link"
import { Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Blog } from "@/lib/api"

interface BlogCardProps {
  blog: Blog
}

export default function BlogCard({ blog }: BlogCardProps) {
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
        <Image src={blog.coverImage || "/placeholder.svg"} alt={blog.title} fill className="object-cover" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-ca-darkBlue mb-2">{blog.title}</h3>

        <div className="flex items-center text-gray-500 text-sm mb-4">
          <div className="flex items-center mr-4">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{formatDate(blog.publishedAt)}</span>
          </div>
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span>{blog.author}</span>
          </div>
        </div>

        <p className="text-gray-600 mb-4">{blog.excerpt}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {blog.tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-ca-lightGray rounded text-xs text-gray-700">
              {tag}
            </span>
          ))}
        </div>

        <Button className="w-full bg-ca-purple hover:bg-ca-lightPurple text-white" asChild>
          <Link href={`/blog/${blog.slug}`}>Read More</Link>
        </Button>
      </div>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { BlogAPI, type Blog } from "@/lib/api"
import BlogCard from "./BlogCard"
import { Loader2 } from "lucide-react"

export default function BlogPageContent() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadBlogs() {
      setLoading(true)
      try {
        const blogsData = await BlogAPI.getAll()
        setBlogs(blogsData)
        setError(null)
      } catch (err) {
        console.error("Error loading blogs:", err)
        setError("Failed to load blogs. Please try again later.")
        // Set empty blogs array to prevent undefined errors
        setBlogs([])
      } finally {
        setLoading(false)
      }
    }

    loadBlogs()
  }, [])

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
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-ca-darkBlue mb-4">Our Blog</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Insights, articles, and resources on finance, accounting, and business strategy.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-12 w-12 text-ca-purple animate-spin" />
            <span className="ml-2 text-lg text-ca-purple">Loading blogs...</span>
          </div>
        ) : blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No blog posts found.</p>
          </div>
        )}
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BookOpen, Tag, Calendar, ChevronRight } from "lucide-react"
import Link from "next/link"

// Sample blog posts data - in a real application, this would come from an API or database
const BLOG_POSTS = [
  {
    id: 1,
    title: "Understanding the New Income Tax Regime in India",
    excerpt:
      "A comprehensive guide to the new income tax regime introduced in the Union Budget and how it affects different taxpayer categories.",
    date: "April 10, 2025",
    category: "Tax Updates",
    imageUrl: "/placeholder.svg?height=200&width=400",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "GST E-Invoicing: What Indian Businesses Need to Know",
    excerpt:
      "Learn about the mandatory e-invoicing system under GST, its implementation timeline, and how to prepare your business.",
    date: "April 5, 2025",
    category: "GST",
    imageUrl: "/placeholder.svg?height=200&width=400",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "Financial Planning for NRIs: Investment Options in India",
    excerpt:
      "Explore the various investment avenues available to Non-Resident Indians and the tax implications of each option.",
    date: "March 28, 2025",
    category: "Financial Planning",
    imageUrl: "/placeholder.svg?height=200&width=400",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "MSME Compliance: A Checklist for Indian Small Businesses",
    excerpt:
      "A detailed checklist of regulatory compliances that Micro, Small, and Medium Enterprises in India need to follow.",
    date: "March 20, 2025",
    category: "Business Compliance",
    imageUrl: "/placeholder.svg?height=200&width=400",
    readTime: "7 min read",
  },
]

// Categories for filtering
const CATEGORIES = ["All", "Tax Updates", "GST", "Financial Planning", "Business Compliance", "Accounting Standards"]

export function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Filter posts by category
  const filteredPosts =
    selectedCategory === "All" ? BLOG_POSTS : BLOG_POSTS.filter((post) => post.category === selectedCategory)

  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold text-ca-darkBlue flex items-center">
          <BookOpen className="mr-2 h-6 w-6" />
          Latest Articles
        </h2>
      </div>

      {/* Category Filter */}
      <div className="p-4 bg-gray-50 overflow-x-auto">
        <div className="flex space-x-2 min-w-max">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 text-sm rounded-full whitespace-nowrap transition-colors ${
                selectedCategory === category ? "bg-ca-darkBlue text-white" : "bg-white border hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts */}
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <img
                  src={post.imageUrl || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-xs font-medium">
                  {post.readTime}
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded flex items-center">
                    <Tag className="h-3 w-3 mr-1" />
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-xs ml-2 flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {post.date}
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <Link href="#" className="text-ca-darkBlue hover:text-blue-700 font-medium text-sm flex items-center">
                  Read More <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.div>
  )
}

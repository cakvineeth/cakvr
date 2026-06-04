"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

interface BlogPostContentProps {
  post?: {
    id: string
    title: string
    content: string
    author: string
    created_at: string
    image_url?: string
  }
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  const [isMounted, setIsMounted] = useState(false)

  // Define formatDate function directly in the component
  const formatDate = (dateString: string) => {
    if (!dateString) return "No date available"
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    } catch (error) {
      console.error("Error formatting date:", error)
      return "Invalid date"
    }
  }

  useEffect(() => {
    setIsMounted(true)

    // Add blog content styles
    const style = document.createElement("style")
    style.innerHTML = `
      .blog-content-wrapper {
        background-color: white;
        padding: 2rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }
      
      .blog-content {
        color: #333;
        line-height: 1.6;
        font-size: 1.125rem;
        background-color: white;
      }
      
      .blog-content h1 {
        font-size: 2.25rem;
        font-weight: 700;
        margin: 1.5rem 0 1rem;
        color: #111;
      }
      
      .blog-content h2 {
        font-size: 1.875rem;
        font-weight: 700;
        margin: 1.5rem 0 1rem;
        color: #111;
      }
      
      .blog-content h3 {
        font-size: 1.5rem;
        font-weight: 600;
        margin: 1.25rem 0 0.75rem;
        color: #111;
      }
      
      .blog-content p {
        margin-bottom: 1.25rem;
        color: #333;
      }
      
      .blog-content ul, .blog-content ol {
        margin: 1.25rem 0;
        padding-left: 2rem;
        color: #333;
      }
      
      .blog-content ul {
        list-style-type: disc;
      }
      
      .blog-content ol {
        list-style-type: decimal;
      }
      
      .blog-content li {
        margin-bottom: 0.5rem;
        color: #333;
      }
      
      .blog-content a {
        color: #2563eb;
        text-decoration: underline;
        transition: color 0.2s;
      }
      
      .blog-content a:hover {
        color: #1d4ed8;
      }
      
      .blog-content blockquote {
        border-left: 4px solid #e5e7eb;
        padding-left: 1rem;
        margin: 1.5rem 0;
        font-style: italic;
        color: #4b5563;
        background-color: #f9fafb;
        padding: 1rem;
        border-radius: 0.25rem;
      }
      
      .blog-content pre {
        background-color: #f3f4f6;
        padding: 1rem;
        border-radius: 0.375rem;
        overflow-x: auto;
        margin: 1.5rem 0;
        color: #1f2937;
      }
      
      .blog-content code {
        font-family: monospace;
        background-color: #f3f4f6;
        padding: 0.2rem 0.4rem;
        border-radius: 0.25rem;
        font-size: 0.875rem;
        color: #1f2937;
      }
      
      .blog-content img {
        max-width: 100%;
        height: auto;
        border-radius: 0.375rem;
        margin: 1.5rem 0;
      }
      
      .blog-content table {
        width: 100%;
        border-collapse: collapse;
        margin: 1.5rem 0;
        color: #333;
      }
      
      .blog-content th, .blog-content td {
        border: 1px solid #e5e7eb;
        padding: 0.75rem;
        text-align: left;
      }
      
      .blog-content th {
        background-color: #f9fafb;
        font-weight: 600;
        color: #111;
      }
      
      .blog-content hr {
        border: 0;
        border-top: 1px solid #e5e7eb;
        margin: 2rem 0;
      }
      
      /* Fix for any dark mode elements that might be affecting the blog */
      .blog-content * {
        background-color: transparent;
      }
      
      .blog-content h1, 
      .blog-content h2, 
      .blog-content h3, 
      .blog-content h4, 
      .blog-content h5, 
      .blog-content h6, 
      .blog-content p, 
      .blog-content li, 
      .blog-content td, 
      .blog-content th {
        color: inherit;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  if (!isMounted) {
    return (
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Skeleton className="h-10 w-32 mb-4" />
          <Skeleton className="w-full h-[300px] md:h-[400px] mb-6 rounded-lg" />
          <Skeleton className="h-12 w-3/4 mb-4" />
          <div className="flex gap-4 mb-6">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-6 w-32" />
          </div>
        </div>
        <div className="space-y-4">
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-6 w-5/6" />
          <Skeleton className="h-6 w-full" />
        </div>
      </div>
    )
  }

  // Handle case where post is undefined
  if (!post) {
    return (
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <Link href="/blog">
          <Button variant="ghost" className="mb-4 pl-0 hover:bg-transparent">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all blogs
          </Button>
        </Link>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="mb-6">The blog post you're looking for could not be loaded.</p>
          <Button asChild>
            <Link href="/blog">View All Blog Posts</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/blog">
          <Button variant="ghost" className="mb-4 pl-0 hover:bg-transparent">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all blogs
          </Button>
        </Link>

        {post.image_url && (
          <div className="relative w-full h-[300px] md:h-[400px] mb-6 rounded-lg overflow-hidden">
            <Image src={post.image_url || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
          </div>
        )}

        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

        <div className="flex flex-wrap items-center text-gray-500 mb-6 gap-4">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span>{post.author || "Unknown Author"}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{formatDate(post.created_at)}</span>
          </div>
        </div>
      </div>

      <div className="blog-content-wrapper">
        <article
          className="blog-content prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content || "" }}
        />
      </div>
    </div>
  )
}

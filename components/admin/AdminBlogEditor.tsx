"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { BlogAPI, type Blog } from "@/lib/api"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Loader2, Save, ArrowLeft } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import dynamic from "next/dynamic"
import { slugify } from "@/lib/utils"

// Dynamically import the rich text editor to avoid SSR issues
const RichTextEditor = dynamic(() => import("@/components/admin/RichTextEditor"), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center py-20 border rounded-md">
      <Loader2 className="h-8 w-8 text-ca-purple animate-spin" />
      <span className="ml-2 text-ca-purple">Loading editor...</span>
    </div>
  ),
})

interface AdminBlogEditorProps {
  blog: Blog | null
  onSaveComplete: (success: boolean, message: string) => void
}

export default function AdminBlogEditor({ blog, onSaveComplete }: AdminBlogEditorProps) {
  const [title, setTitle] = useState("")
  const [slug, setSlug] = useState("")
  const [content, setContent] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [author, setAuthor] = useState("")
  const [coverImage, setCoverImage] = useState("")
  const [tags, setTags] = useState("")
  const [isPublished, setIsPublished] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [autoSlug, setAutoSlug] = useState(true)
  const { toast } = useToast()

  // Initialize form with blog data if editing
  useEffect(() => {
    if (blog) {
      setTitle(blog.title)
      setSlug(blog.slug)
      setContent(blog.content)
      setExcerpt(blog.excerpt)
      setAuthor(blog.author)
      setCoverImage(blog.coverImage)
      setTags(blog.tags.join(", "))
      setIsPublished(blog.isPublished)
      setAutoSlug(false)
    } else {
      // Default values for new blog
      setTitle("")
      setSlug("")
      setContent("")
      setExcerpt("")
      setAuthor("K Vineeth Reddy & Co")
      setCoverImage("/placeholder.svg?height=400&width=600")
      setTags("")
      setIsPublished(false)
      setAutoSlug(true)
    }
  }, [blog])

  // Auto-generate slug from title if autoSlug is enabled
  useEffect(() => {
    if (autoSlug && title) {
      setSlug(slugify(title))
    }
  }, [title, autoSlug])

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!title || !slug || !content) {
      toast({
        title: "Validation Error",
        description: "Title, slug, and content are required fields.",
        variant: "destructive",
      })
      return
    }

    setIsSaving(true)

    try {
      const blogData: Partial<Blog> = {
        title,
        slug,
        content,
        excerpt: excerpt || content.substring(0, 150) + "...",
        author,
        coverImage,
        tags: tags
          .split(",")
          .map((tag) => tag.trim())
          .filter((tag) => tag),
        isPublished,
      }

      if (blog) {
        // Update existing blog
        await BlogAPI.update(blog.id, blogData)
        onSaveComplete(true, "Blog post updated successfully")
      } else {
        // Create new blog
        await BlogAPI.create(blogData)
        onSaveComplete(true, "Blog post created successfully")
      }
    } catch (error) {
      console.error("Error saving blog:", error)
      onSaveComplete(false, "Failed to save blog post. Please try again.")
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-900">{blog ? "Edit Blog Post" : "Create New Blog Post"}</h2>

        <div className="flex items-center space-x-2">
          <Switch id="published" checked={isPublished} onCheckedChange={setIsPublished} />
          <Label htmlFor="published" className="text-gray-700">
            {isPublished ? "Published" : "Draft"}
          </Label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="title" className="text-gray-700">
              Title
            </Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter blog title"
              required
              className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-gray-900"
            />
          </div>

          <div>
            <div className="flex justify-between items-center">
              <Label htmlFor="slug" className="text-gray-700">
                Slug
              </Label>
              <div className="flex items-center space-x-2">
                <Switch id="auto-slug" checked={autoSlug} onCheckedChange={setAutoSlug} disabled={!!blog} />
                <Label htmlFor="auto-slug" className="text-xs text-gray-600">
                  Auto-generate
                </Label>
              </div>
            </div>
            <Input
              id="slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="blog-post-url"
              required
              disabled={autoSlug}
              className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-gray-900"
            />
          </div>

          <div>
            <Label htmlFor="author" className="text-gray-700">
              Author
            </Label>
            <Input
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Author name"
              required
              className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-gray-900"
            />
          </div>

          <div>
            <Label htmlFor="coverImage" className="text-gray-700">
              Cover Image URL
            </Label>
            <Input
              id="coverImage"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
              placeholder="https://example.com/image.jpg"
              className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-gray-900"
            />
            {coverImage && (
              <div className="mt-2 border border-gray-200 rounded-md p-2">
                <img
                  src={coverImage || "/placeholder.svg"}
                  alt="Cover preview"
                  className="h-32 w-full object-cover rounded"
                />
              </div>
            )}
          </div>

          <div>
            <Label htmlFor="tags" className="text-gray-700">
              Tags (comma separated)
            </Label>
            <Input
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="finance, tax, accounting"
              className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-gray-900"
            />
          </div>

          <div>
            <Label htmlFor="excerpt" className="text-gray-700">
              Excerpt (optional)
            </Label>
            <Textarea
              id="excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Brief summary of the blog post"
              rows={3}
              className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-gray-900"
            />
            <p className="text-xs text-gray-600 mt-1">If left empty, an excerpt will be generated from the content.</p>
          </div>
        </div>

        <div className="space-y-4">
          <Label htmlFor="content" className="text-gray-700">
            Content
          </Label>
          <RichTextEditor value={content} onChange={setContent} />
        </div>
      </div>

      <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
        <Button
          type="button"
          variant="outline"
          onClick={() => onSaveComplete(true, "")}
          disabled={isSaving}
          className="border-gray-300 text-gray-700 hover:bg-gray-100"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Cancel
        </Button>

        <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white" disabled={isSaving}>
          {isSaving ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" />
              Save {isPublished ? "& Publish" : "as Draft"}
            </>
          )}
        </Button>
      </div>
    </form>
  )
}

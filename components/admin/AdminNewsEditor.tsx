"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { NewsAPI, type NewsItem } from "@/lib/api"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Loader2, ArrowLeft, Save } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface AdminNewsEditorProps {
  newsItem: NewsItem | null
  onSaveComplete: (success: boolean, message: string) => void
}

export default function AdminNewsEditor({ newsItem, onSaveComplete }: AdminNewsEditorProps) {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [category, setCategory] = useState("")
  const [source, setSource] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [externalUrl, setExternalUrl] = useState("")
  const [isPublished, setIsPublished] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  // Initialize form with news item data if editing
  useEffect(() => {
    if (newsItem) {
      setIsLoading(true)
      console.log("Loading news item for editing:", newsItem)

      setTitle(newsItem.title || "")
      setContent(newsItem.content || "")
      setCategory(newsItem.category || "")
      setSource(newsItem.source || "")
      setImageUrl(newsItem.imageUrl || "")
      setExternalUrl(newsItem.externalUrl || "")
      setIsPublished(newsItem.isPublished || false)

      setIsLoading(false)
    } else {
      // Reset form for new news item
      setTitle("")
      setContent("")
      setCategory("")
      setSource("")
      setImageUrl("")
      setExternalUrl("")
      setIsPublished(false)
    }
  }, [newsItem])

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!title) {
      toast({
        title: "Error",
        description: "Title is required",
        variant: "destructive",
      })
      return
    }

    setIsSaving(true)

    try {
      const newsData: Partial<NewsItem> = {
        title,
        content,
        category,
        source,
        imageUrl,
        externalUrl,
        isPublished,
      }

      console.log("Saving news item:", newsData)

      if (newsItem) {
        // Update existing news item
        await NewsAPI.update(newsItem.id, newsData)
        onSaveComplete(true, "News item updated successfully")
      } else {
        // Create new news item
        await NewsAPI.create(newsData)
        onSaveComplete(true, "News item created successfully")
      }
    } catch (error) {
      console.error("Error saving news item:", error)
      onSaveComplete(false, "Failed to save news item. Please try again.")
    } finally {
      setIsSaving(false)
    }
  }

  // Handle cancel
  const handleCancel = () => {
    onSaveComplete(true, "")
  }

  // News categories
  const categories = [
    "Business",
    "Technology",
    "Finance",
    "Accounting",
    "Industry",
    "Economy",
    "Markets",
    "Regulation",
    "Other",
  ]

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader2 className="h-8 w-8 text-ca-purple animate-spin" />
        <span className="ml-2 text-ca-purple">Loading news item...</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-ca-darkBlue">{newsItem ? "Edit News Item" : "Create News Item"}</h2>
        <div className="flex items-center space-x-2">
          <Label htmlFor="published" className="text-sm font-medium">
            {isPublished ? "Published" : "Draft"}
          </Label>
          <Switch id="published" checked={isPublished} onCheckedChange={setIsPublished} />
        </div>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title" className="text-sm font-medium">
            Title <span className="text-red-500">*</span>
          </Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter news title"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="content" className="text-sm font-medium">
            Content
          </Label>
          <Textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter news content"
            rows={6}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="category" className="text-sm font-medium">
              Category
            </Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="source" className="text-sm font-medium">
              Source
            </Label>
            <Input
              id="source"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              placeholder="Enter news source"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="imageUrl" className="text-sm font-medium">
            Image URL
          </Label>
          <Input
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Enter image URL"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="externalUrl" className="text-sm font-medium">
            External URL
          </Label>
          <Input
            id="externalUrl"
            value={externalUrl}
            onChange={(e) => setExternalUrl(e.target.value)}
            placeholder="Enter external URL"
          />
        </div>
      </div>

      <div className="flex justify-end space-x-4 pt-4">
        <Button type="button" variant="outline" onClick={handleCancel} disabled={isSaving}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Cancel
        </Button>
        <Button type="submit" className="bg-ca-purple hover:bg-ca-lightPurple text-white" disabled={isSaving}>
          {isSaving ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" />
              Save
            </>
          )}
        </Button>
      </div>
    </form>
  )
}

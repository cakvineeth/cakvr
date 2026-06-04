"use client"

import { useState, useEffect } from "react"
import { NewsAPI, type NewsItem } from "@/lib/api"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Edit, Trash2, Eye, Search, Loader2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import Link from "next/link"

interface AdminNewsListProps {
  onEditNews: (newsItem: NewsItem) => void
}

export default function AdminNewsList({ onEditNews }: AdminNewsListProps) {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([])
  const [filteredNewsItems, setFilteredNewsItems] = useState<NewsItem[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [newsToDelete, setNewsToDelete] = useState<NewsItem | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)
  const { toast } = useToast()

  // Load news items
  const loadNewsItems = async () => {
    setIsLoading(true)
    try {
      const newsData = await NewsAPI.getAllAdmin()
      console.log("Loaded news items:", newsData)
      setNewsItems(newsData)
      setFilteredNewsItems(newsData)
    } catch (error) {
      console.error("Error loading news items:", error)
      toast({
        title: "Error",
        description: "Failed to load news items. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadNewsItems()
  }, [])

  // Filter news items based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredNewsItems(newsItems)
    } else {
      const query = searchQuery.toLowerCase()
      const filtered = newsItems.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query) ||
          item.source.toLowerCase().includes(query),
      )
      setFilteredNewsItems(filtered)
    }
  }, [searchQuery, newsItems])

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  // Handle news item deletion
  const handleDeleteNews = async () => {
    if (!newsToDelete) return

    setIsDeleting(true)
    try {
      console.log("Deleting news item:", newsToDelete.id)
      await NewsAPI.delete(newsToDelete.id)

      // Update the local state after successful deletion
      setNewsItems(newsItems.filter((item) => item.id !== newsToDelete.id))
      setFilteredNewsItems(filteredNewsItems.filter((item) => item.id !== newsToDelete.id))

      toast({
        title: "Success",
        description: "News item deleted successfully",
      })
    } catch (error) {
      console.error("Error deleting news item:", error)
      toast({
        title: "Error",
        description: "Failed to delete news item. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsDeleting(false)
      setNewsToDelete(null)
    }
  }

  const handleEditNewsItem = (newsItem: NewsItem) => {
    console.log("Editing news item:", newsItem)
    onEditNews(newsItem)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-ca-darkBlue">Manage News Items</h2>

        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search news..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="h-8 w-8 text-ca-purple animate-spin" />
          <span className="ml-2 text-ca-purple">Loading news items...</span>
        </div>
      ) : filteredNewsItems.length > 0 ? (
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Published</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredNewsItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.title}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.source}</TableCell>
                  <TableCell>{formatDate(item.publishedAt)}</TableCell>
                  <TableCell>
                    <Badge variant={item.isPublished ? "default" : "secondary"}>
                      {item.isPublished ? "Published" : "Draft"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 px-2 text-blue-600 border-blue-600 hover:bg-blue-50"
                        asChild
                      >
                        <Link href={`/news/${item.id}`} target="_blank">
                          <Eye className="h-4 w-4" />
                          <span className="sr-only">View</span>
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 px-2 text-amber-600 border-amber-600 hover:bg-amber-50"
                        onClick={() => handleEditNewsItem(item)}
                      >
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 px-2 text-red-600 border-red-600 hover:bg-red-50"
                        onClick={() => setNewsToDelete(item)}
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No news items found.</p>
          {searchQuery && (
            <p className="mt-2 text-sm text-gray-400">Try adjusting your search query or create a new news item.</p>
          )}
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      <Dialog open={!!newsToDelete} onOpenChange={(open) => !open && setNewsToDelete(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete News Item</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete &quot;{newsToDelete?.title}&quot;? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setNewsToDelete(null)} disabled={isDeleting}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteNews} disabled={isDeleting}>
              {isDeleting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Deleting...
                </>
              ) : (
                "Delete"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

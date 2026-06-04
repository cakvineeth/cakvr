"use client"

import { useState, useEffect } from "react"
import { BlogAPI, type Blog } from "@/lib/api"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Edit, Trash2, MoreVertical, Eye, Search, Loader2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import Link from "next/link"

interface AdminBlogListProps {
  onEditBlog: (blog: Blog) => void
}

export default function AdminBlogList({ onEditBlog }: AdminBlogListProps) {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [blogToDelete, setBlogToDelete] = useState<Blog | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)
  const { toast } = useToast()

  // Load blogs
  const loadBlogs = async () => {
    setIsLoading(true)
    try {
      const blogsData = await BlogAPI.getAllAdmin()
      setBlogs(blogsData)
      setFilteredBlogs(blogsData)
    } catch (error) {
      console.error("Error loading blogs:", error)
      toast({
        title: "Error",
        description: "Failed to load blogs. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadBlogs()
  }, [])

  // Filter blogs based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredBlogs(blogs)
    } else {
      const query = searchQuery.toLowerCase()
      const filtered = blogs.filter(
        (blog) =>
          blog.title.toLowerCase().includes(query) ||
          blog.author.toLowerCase().includes(query) ||
          blog.tags.some((tag) => tag.toLowerCase().includes(query)),
      )
      setFilteredBlogs(filtered)
    }
  }, [searchQuery, blogs])

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  // Handle blog deletion
  const handleDeleteBlog = async () => {
    if (!blogToDelete) return

    setIsDeleting(true)
    try {
      await BlogAPI.delete(blogToDelete.id)

      // Update the local state after successful deletion
      setBlogs(blogs.filter((blog) => blog.id !== blogToDelete.id))
      setFilteredBlogs(filteredBlogs.filter((blog) => blog.id !== blogToDelete.id))

      toast({
        title: "Success",
        description: "Blog post deleted successfully",
      })
    } catch (error) {
      console.error("Error deleting blog:", error)
      toast({
        title: "Error",
        description: "Failed to delete blog post. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsDeleting(false)
      setBlogToDelete(null)
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-ca-darkBlue">Manage Blog Posts</h2>

        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search blogs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="h-8 w-8 text-ca-purple animate-spin" />
          <span className="ml-2 text-ca-purple">Loading blogs...</span>
        </div>
      ) : filteredBlogs.length > 0 ? (
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Published</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Tags</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBlogs.map((blog) => (
                <TableRow key={blog.id}>
                  <TableCell className="font-medium">{blog.title}</TableCell>
                  <TableCell>{blog.author}</TableCell>
                  <TableCell>{formatDate(blog.publishedAt)}</TableCell>
                  <TableCell>
                    <Badge variant={blog.isPublished ? "default" : "secondary"}>
                      {blog.isPublished ? "Published" : "Draft"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {blog.tags.slice(0, 2).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {blog.tags.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{blog.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                          <Link href={`/blog/${blog.slug}`} target="_blank" className="flex items-center">
                            <Eye className="mr-2 h-4 w-4" />
                            <span>View</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => onEditBlog(blog)}>
                          <Edit className="mr-2 h-4 w-4" />
                          <span>Edit</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setBlogToDelete(blog)}
                          className="text-red-600 focus:text-red-600"
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          <span>Delete</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No blog posts found.</p>
          {searchQuery && (
            <p className="mt-2 text-sm text-gray-400">Try adjusting your search query or create a new blog post.</p>
          )}
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      <Dialog open={!!blogToDelete} onOpenChange={(open) => !open && setBlogToDelete(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Blog Post</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete &quot;{blogToDelete?.title}&quot;? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setBlogToDelete(null)} disabled={isDeleting}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteBlog} disabled={isDeleting}>
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

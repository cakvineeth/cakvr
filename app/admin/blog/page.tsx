"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import AdminBlogList from "@/components/admin/AdminBlogList"
import AdminBlogEditor from "@/components/admin/AdminBlogEditor"
import AdminAuthWrapper from "@/components/admin/AdminAuthWrapper"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"
import type { Blog } from "@/lib/api"

export default function AdminBlogPage() {
  const [activeTab, setActiveTab] = useState("list")
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  // Handle blog selection for editing
  const handleEditBlog = (blog: Blog) => {
    setSelectedBlog(blog)
    setActiveTab("editor")
  }

  // Handle creating a new blog
  const handleNewBlog = () => {
    setSelectedBlog(null)
    setActiveTab("editor")
  }

  // Handle blog save completion
  const handleSaveComplete = (success: boolean, message: string) => {
    if (success) {
      toast({
        title: "Success",
        description: message,
        variant: "default",
      })
      setActiveTab("list")
      setSelectedBlog(null)
    } else {
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      })
    }
  }

  return (
    <AdminAuthWrapper>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-ca-darkBlue">Blog Management</h1>
            <Button onClick={() => router.push("/admin")} className="bg-ca-purple hover:bg-ca-lightPurple text-white">
              Back to Dashboard
            </Button>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <div className="flex justify-between items-center mb-6">
              <TabsList>
                <TabsTrigger value="list">Blog Posts</TabsTrigger>
                <TabsTrigger value="editor">Editor</TabsTrigger>
              </TabsList>

              <Button onClick={handleNewBlog} className="bg-ca-purple hover:bg-ca-lightPurple text-white">
                <Plus className="mr-2 h-4 w-4" />
                New Blog Post
              </Button>
            </div>

            <TabsContent value="list" className="bg-white rounded-lg shadow-md p-6">
              <AdminBlogList onEditBlog={handleEditBlog} />
            </TabsContent>

            <TabsContent value="editor" className="bg-white rounded-lg shadow-md p-6">
              <AdminBlogEditor blog={selectedBlog} onSaveComplete={handleSaveComplete} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Toaster />
    </AdminAuthWrapper>
  )
}

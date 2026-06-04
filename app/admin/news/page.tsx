"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import AdminNewsList from "@/components/admin/AdminNewsList"
import AdminNewsEditor from "@/components/admin/AdminNewsEditor"
import AdminAuthWrapper from "@/components/admin/AdminAuthWrapper"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"
import type { NewsItem } from "@/lib/api"

export default function AdminNewsPage() {
  const [activeTab, setActiveTab] = useState("list")
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null)
  const [refreshKey, setRefreshKey] = useState(0)
  const router = useRouter()
  const { toast } = useToast()

  // Handle news selection for editing
  const handleEditNews = (newsItem: NewsItem) => {
    console.log("Selected news for editing:", newsItem)
    setSelectedNews(newsItem)
    setActiveTab("editor")
  }

  // Handle creating a new news item
  const handleNewNews = () => {
    console.log("Creating new news item")
    setSelectedNews(null)
    setActiveTab("editor")
  }

  // Handle news save completion
  const handleSaveComplete = (success: boolean, message: string) => {
    console.log("Save complete:", success, message)
    if (success) {
      if (message) {
        toast({
          title: "Success",
          description: message,
          variant: "default",
        })

        // Refresh the list and switch back to it
        setRefreshKey((prev) => prev + 1)
        setActiveTab("list")
        setSelectedNews(null)
      } else {
        // This was a cancel operation
        setActiveTab("list")
        setSelectedNews(null)
      }
    } else {
      toast({
        title: "Error",
        description: message || "An error occurred",
        variant: "destructive",
      })
    }
  }

  return (
    <AdminAuthWrapper>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-ca-darkBlue">News Management</h1>
            <Button
              onClick={() => router.push("/admin")}
              variant="outline"
              className="border-ca-purple text-ca-purple hover:bg-ca-purple hover:text-white"
            >
              Back to Dashboard
            </Button>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <div className="flex justify-between items-center mb-6">
              <TabsList>
                <TabsTrigger value="list">News Items</TabsTrigger>
                <TabsTrigger value="editor">Editor</TabsTrigger>
              </TabsList>

              <Button onClick={handleNewNews} className="bg-ca-purple hover:bg-ca-lightPurple text-white">
                <Plus className="mr-2 h-4 w-4" />
                New News Item
              </Button>
            </div>

            <TabsContent value="list" className="bg-white rounded-lg shadow-md p-6">
              <AdminNewsList key={refreshKey} onEditNews={handleEditNews} />
            </TabsContent>

            <TabsContent value="editor" className="bg-white rounded-lg shadow-md p-6">
              <AdminNewsEditor newsItem={selectedNews} onSaveComplete={handleSaveComplete} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Toaster />
    </AdminAuthWrapper>
  )
}

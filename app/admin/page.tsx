"use client"

import { useState, useEffect } from "react"
import { BlogAPI, NewsAPI, type Blog, type NewsItem } from "@/lib/api"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Loader2, Plus, Calendar, Clock, Phone, FileText, Trash } from "lucide-react"
import Link from "next/link"
import AdminAuthWrapper from "@/components/admin/AdminAuthWrapper"
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { supabase } from "@/lib/supabase"
import { Badge } from "@/components/ui/badge"

type Appointment = {
  id: string
  name: string
  email: string
  phone: string
  appointment_date: string
  appointment_time: string
  status: "pending" | "confirmed" | "cancelled"
  notes: string | null
  created_at: string
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("blogs")
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [news, setNews] = useState<NewsItem[]>([])
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()

  const loadData = async () => {
    setLoading(true)
    try {
      // Load data from Supabase
      const blogsData = await BlogAPI.getAllAdmin()
      const newsData = await NewsAPI.getAllAdmin()

      // Load appointments
      const { data: appointmentsData, error: appointmentsError } = await supabase
        .from("appointments")
        .select("*")
        .order("created_at", { ascending: false })

      if (appointmentsError) throw appointmentsError

      setBlogs(blogsData)
      setNews(newsData)
      setAppointments(appointmentsData || [])
      setError(null)
    } catch (err) {
      console.error("Error loading data:", err)
      setError("Failed to load data. Please try again.")
      toast({
        title: "Error",
        description: "Failed to load data. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  async function updateAppointmentStatus(id: string, status: "confirmed" | "cancelled") {
    try {
      const { error } = await supabase
        .from("appointments")
        .update({ status, updated_at: new Date().toISOString() })
        .eq("id", id)

      if (error) throw error

      // Update local state
      setAppointments((prev) => prev.map((app) => (app.id === id ? { ...app, status } : app)))

      toast({
        title: "Appointment Updated",
        description: `Appointment has been ${status}.`,
      })
    } catch (err) {
      console.error("Error updating appointment:", err)
      toast({
        title: "Update Failed",
        description: "Failed to update appointment status. Please try again.",
        variant: "destructive",
      })
    }
  }

  async function deleteAppointment(id: string) {
    if (!confirm("Are you sure you want to delete this appointment? This action cannot be undone.")) {
      return
    }

    try {
      const { error } = await supabase.from("appointments").delete().eq("id", id)

      if (error) throw error

      // Update local state
      setAppointments((prev) => prev.filter((app) => app.id !== id))

      toast({
        title: "Appointment Deleted",
        description: "The appointment has been permanently deleted.",
      })
    } catch (err) {
      console.error("Error deleting appointment:", err)
      toast({
        title: "Delete Failed",
        description: "Failed to delete appointment. Please try again.",
        variant: "destructive",
      })
    }
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const formatDateTime = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
            Pending
          </Badge>
        )
      case "confirmed":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Confirmed
          </Badge>
        )
      case "cancelled":
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
            Cancelled
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <AdminAuthWrapper>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-ca-darkBlue">Admin Dashboard</h1>
            <p className="text-gray-600 mt-2">Manage your website content</p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md mb-6">{error}</div>
          )}

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-8">
              <TabsTrigger value="blogs">Blogs</TabsTrigger>
              <TabsTrigger value="news">News</TabsTrigger>
              <TabsTrigger value="appointments">Appointments</TabsTrigger>
              <TabsTrigger value="dates">Important Dates</TabsTrigger>
            </TabsList>

            <TabsContent value="blogs">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-ca-darkBlue">Manage Blogs</h2>
                  <Button className="bg-ca-purple hover:bg-ca-lightPurple text-white" asChild>
                    <Link href="/admin/blog">
                      <Plus className="mr-2 h-4 w-4" />
                      Manage Blog Posts
                    </Link>
                  </Button>
                </div>

                {loading ? (
                  <div className="flex justify-center items-center py-12">
                    <Loader2 className="h-8 w-8 text-ca-purple animate-spin" />
                    <span className="ml-2 text-ca-purple">Loading blogs...</span>
                  </div>
                ) : blogs.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Title
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Author
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Published
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {blogs.slice(0, 5).map((blog) => (
                          <tr key={blog.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">{blog.title}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">{blog.author}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">
                                {new Date(blog.publishedAt).toLocaleDateString()}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span
                                className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                  blog.isPublished ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                                }`}
                              >
                                {blog.isPublished ? "Published" : "Draft"}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <Button variant="ghost" className="text-blue-600 hover:text-blue-900" asChild>
                                <Link href={`/blog/${blog.slug}`} target="_blank">
                                  View
                                </Link>
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500">No blogs found. Create your first blog post!</p>
                  </div>
                )}

                {blogs.length > 5 && (
                  <div className="mt-4 text-center">
                    <Button variant="outline" className="text-ca-purple" asChild>
                      <Link href="/admin/blog">View All Blogs</Link>
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="news">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-ca-darkBlue">Manage News</h2>
                  <Button className="bg-ca-purple hover:bg-ca-lightPurple text-white" asChild>
                    <Link href="/admin/news">
                      <Plus className="mr-2 h-4 w-4" />
                      Manage News Items
                    </Link>
                  </Button>
                </div>

                {loading ? (
                  <div className="flex justify-center items-center py-12">
                    <Loader2 className="h-8 w-8 text-ca-purple animate-spin" />
                    <span className="ml-2 text-ca-purple">Loading news...</span>
                  </div>
                ) : news.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Title
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Category
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Source
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Published
                          </th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {news.slice(0, 5).map((item) => (
                          <tr key={item.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">{item.title}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                {item.category}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">{item.source}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">
                                {new Date(item.publishedAt).toLocaleDateString()}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <Button variant="ghost" className="text-blue-600 hover:text-blue-900" asChild>
                                <Link href={`/news/${item.id}`} target="_blank">
                                  View
                                </Link>
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500">No news items found. Add your first news item!</p>
                  </div>
                )}

                {news.length > 5 && (
                  <div className="mt-4 text-center">
                    <Button variant="outline" className="text-ca-purple" asChild>
                      <Link href="/admin/news">View All News</Link>
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="appointments">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-ca-darkBlue">Manage Appointments</h2>
                  <Button className="bg-ca-purple hover:bg-ca-lightPurple text-white" onClick={loadData}>
                    <Loader2 className="mr-2 h-4 w-4" />
                    Refresh Appointments
                  </Button>
                </div>

                {loading ? (
                  <div className="flex justify-center items-center py-12">
                    <Loader2 className="h-8 w-8 text-ca-purple animate-spin" />
                    <span className="ml-2 text-ca-purple">Loading appointments...</span>
                  </div>
                ) : appointments.length > 0 ? (
                  <div className="space-y-6">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Contact
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Date & Time
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Status
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Record Created
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {appointments.map((appointment) => (
                            <tr key={appointment.id}>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-medium text-gray-900">{appointment.name}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-500">
                                  <a href={`mailto:${appointment.email}`} className="text-blue-600 hover:underline">
                                    {appointment.email}
                                  </a>
                                  <br />
                                  <a href={`tel:${appointment.phone}`} className="text-blue-600 hover:underline">
                                    {appointment.phone}
                                  </a>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-500">
                                  <div className="flex items-center">
                                    <Calendar className="w-4 h-4 mr-1 text-gray-400" />
                                    {formatDate(appointment.appointment_date)}
                                  </div>
                                  <div className="flex items-center mt-1">
                                    <Clock className="w-4 h-4 mr-1 text-gray-400" />
                                    {appointment.appointment_time}
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">{getStatusBadge(appointment.status)}</td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-500 flex items-center">
                                  <FileText className="w-4 h-4 mr-1 text-gray-400" />
                                  {formatDateTime(appointment.created_at)}
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <div className="flex justify-end space-x-2">
                                  {appointment.status === "pending" ? (
                                    <>
                                      <Button
                                        size="sm"
                                        variant="outline"
                                        className="border-green-200 text-green-700 hover:bg-green-50"
                                        onClick={() => updateAppointmentStatus(appointment.id, "confirmed")}
                                      >
                                        Confirm
                                      </Button>
                                      <Button
                                        size="sm"
                                        variant="outline"
                                        className="border-red-200 text-red-700 hover:bg-red-50"
                                        onClick={() => updateAppointmentStatus(appointment.id, "cancelled")}
                                      >
                                        Cancel
                                      </Button>
                                    </>
                                  ) : (
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      onClick={() => updateAppointmentStatus(appointment.id, "pending")}
                                    >
                                      Reset
                                    </Button>
                                  )}
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-red-200 text-red-700 hover:bg-red-50"
                                    onClick={() => deleteAppointment(appointment.id)}
                                  >
                                    <Trash className="h-4 w-4" />
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <Phone className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">No appointment requests yet.</p>
                    <p className="text-gray-400 text-sm mt-2">
                      When clients request appointments through your website, they'll appear here.
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="dates">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-ca-darkBlue">Manage Important Dates</h2>
                  <Button className="bg-ca-purple hover:bg-ca-lightPurple text-white" asChild>
                    <Link href="/admin/important-dates">
                      <Calendar className="mr-2 h-4 w-4" />
                      Manage Important Dates
                    </Link>
                  </Button>
                </div>
                <p className="text-gray-600">
                  Add, edit, or remove important dates for CA professionals. Keep your clients informed about upcoming
                  tax deadlines, filing dates, and compliance requirements.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Toaster />
    </AdminAuthWrapper>
  )
}

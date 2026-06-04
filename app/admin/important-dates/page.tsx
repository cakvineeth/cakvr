"use client"

import { useState, useEffect } from "react"
import { ImportantDatesAPI, type ImportantDate } from "@/lib/api"
import { Button } from "@/components/ui/button"
import { Loader2, Plus, Pencil, Trash2, AlertTriangle } from "lucide-react"
import AdminAuthWrapper from "@/components/admin/AdminAuthWrapper"
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import Link from "next/link"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { supabase } from "@/lib/supabase"

export default function ImportantDatesAdminPage() {
  const [dates, setDates] = useState<ImportantDate[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [currentDate, setCurrentDate] = useState<Partial<ImportantDate> | null>(null)
  const [dateToDelete, setDateToDelete] = useState<string | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [authError, setAuthError] = useState<string | null>(null)
  const { toast } = useToast()

  // Check authentication status
  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()
      if (!session) {
        setAuthError("You must be logged in as an admin to manage important dates")
      } else {
        setAuthError(null)
      }
    }

    checkAuth()
  }, [])

  const loadDates = async () => {
    setLoading(true)
    try {
      const datesData = await ImportantDatesAPI.getAllAdmin()
      setDates(datesData)
      setError(null)
    } catch (err: any) {
      console.error("Error loading dates:", err)
      const errorMessage = err.message || "Failed to load dates. Please try again."
      setError(errorMessage)
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      })

      // Check if it's an authentication error
      if (
        errorMessage.includes("JWT") ||
        errorMessage.includes("auth") ||
        errorMessage.includes("permission") ||
        errorMessage.includes("policy")
      ) {
        setAuthError("Authentication error. Please log in again.")
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadDates()
  }, [])

  const handleCreateNew = () => {
    setCurrentDate({
      title: "",
      date: new Date().toISOString().split("T")[0],
      description: "",
      category: "tax",
      isActive: true,
    })
    setIsDialogOpen(true)
  }

  const handleEdit = (date: ImportantDate) => {
    setCurrentDate(date)
    setIsDialogOpen(true)
  }

  const handleDelete = (id: string) => {
    setDateToDelete(id)
    setIsDeleteDialogOpen(true)
  }

  const confirmDelete = async () => {
    if (!dateToDelete) return

    setIsDeleting(true)
    try {
      console.log("Confirming delete for ID:", dateToDelete)
      await ImportantDatesAPI.delete(dateToDelete)

      // Update the local state to remove the deleted item
      setDates(dates.filter((date) => date.id !== dateToDelete))

      toast({
        title: "Success",
        description: "Date deleted successfully",
      })
    } catch (err: any) {
      console.error("Error deleting date:", err)
      toast({
        title: "Error",
        description: err.message || "Failed to delete date. Please try again.",
        variant: "destructive",
      })

      // Check if it's an authentication error
      if (err.message?.includes("policy") || err.message?.includes("permission")) {
        toast({
          title: "Permission Error",
          description: "You don't have permission to delete this record. Please check your account privileges.",
          variant: "destructive",
        })
      }

      // Reload the dates to ensure UI is in sync with database
      await loadDates()
    } finally {
      setIsDeleting(false)
      setIsDeleteDialogOpen(false)
      setDateToDelete(null)
    }
  }

  const handleSave = async () => {
    if (!currentDate) return

    setIsSaving(true)
    try {
      if (currentDate.id) {
        // Update existing date
        await ImportantDatesAPI.update(currentDate.id, currentDate)
        toast({
          title: "Success",
          description: "Date updated successfully",
        })
      } else {
        // Create new date
        await ImportantDatesAPI.create(currentDate)
        toast({
          title: "Success",
          description: "New date created successfully",
        })
      }
      setIsDialogOpen(false)
      await loadDates() // Reload the dates after saving
    } catch (err: any) {
      console.error("Error saving date:", err)

      // Check if it's an RLS policy error
      if (err.message?.includes("policy")) {
        toast({
          title: "Permission Error",
          description: "You don't have permission to modify this table. Please check your account privileges.",
          variant: "destructive",
        })
      } else {
        toast({
          title: "Error",
          description: err.message || "Failed to save date. Please try again.",
          variant: "destructive",
        })
      }
    } finally {
      setIsSaving(false)
    }
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "tax":
        return "Income Tax"
      case "tds":
        return "TDS"
      case "itr":
        return "ITR"
      case "gst":
        return "GST"
      case "compliance":
        return "Compliance"
      default:
        return category
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "tax":
        return "bg-blue-100 text-blue-800"
      case "tds":
        return "bg-green-100 text-green-800"
      case "itr":
        return "bg-purple-100 text-purple-800"
      case "gst":
        return "bg-amber-100 text-amber-800"
      case "compliance":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <AdminAuthWrapper>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-ca-darkBlue">Manage Important Dates</h1>
              <p className="text-gray-600 mt-2">Add, edit, or remove important dates for CA professionals</p>
            </div>
            <div className="flex space-x-4">
              <Button variant="outline" asChild>
                <Link href="/admin">Back to Dashboard</Link>
              </Button>
              <Button
                className="bg-ca-purple hover:bg-ca-lightPurple text-white"
                onClick={handleCreateNew}
                disabled={!!authError}
              >
                <Plus className="mr-2 h-4 w-4" />
                Add New Date
              </Button>
            </div>
          </div>

          {authError && (
            <div className="bg-amber-50 border border-amber-200 text-amber-800 px-4 py-3 rounded-md mb-6 flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2" />
              <div>
                <p className="font-medium">{authError}</p>
                <p className="text-sm mt-1">
                  This is likely due to Row-Level Security (RLS) policies in your database. Please make sure you're
                  logged in with an account that has admin privileges.
                </p>
              </div>
            </div>
          )}

          {error && !authError && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md mb-6">{error}</div>
          )}

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {loading ? (
              <div className="flex justify-center items-center py-12">
                <Loader2 className="h-8 w-8 text-ca-purple animate-spin" />
                <span className="ml-2 text-ca-purple">Loading important dates...</span>
              </div>
            ) : dates.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Title
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Category
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
                    {dates.map((date) => (
                      <tr key={date.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{date.title}</div>
                          <div className="text-xs text-gray-500 mt-1 line-clamp-1">{date.description}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {new Date(date.date).toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getCategoryColor(date.category)}`}
                          >
                            {getCategoryLabel(date.category)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              date.isActive ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {date.isActive ? "Active" : "Inactive"}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-blue-600 hover:text-blue-900"
                            onClick={() => handleEdit(date)}
                            disabled={!!authError}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-600 hover:text-red-900"
                            onClick={() => handleDelete(date.id)}
                            disabled={!!authError}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">No important dates found. Add your first date!</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Edit/Create Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={(open) => !isSaving && setIsDialogOpen(open)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{currentDate?.id ? "Edit Important Date" : "Add New Important Date"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={currentDate?.title || ""}
                onChange={(e) => setCurrentDate({ ...currentDate!, title: e.target.value })}
                placeholder="e.g., Advance Tax Payment (1st Installment)"
                disabled={isSaving}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={currentDate?.date || ""}
                onChange={(e) => setCurrentDate({ ...currentDate!, date: e.target.value })}
                disabled={isSaving}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={currentDate?.description || ""}
                onChange={(e) => setCurrentDate({ ...currentDate!, description: e.target.value })}
                placeholder="Brief description of the important date"
                rows={3}
                disabled={isSaving}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select
                value={currentDate?.category || "tax"}
                onValueChange={(value) => setCurrentDate({ ...currentDate!, category: value })}
                disabled={isSaving}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tax">Income Tax</SelectItem>
                  <SelectItem value="tds">TDS</SelectItem>
                  <SelectItem value="itr">ITR</SelectItem>
                  <SelectItem value="gst">GST</SelectItem>
                  <SelectItem value="compliance">Compliance</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="isActive"
                checked={currentDate?.isActive}
                onCheckedChange={(checked) => setCurrentDate({ ...currentDate!, isActive: checked })}
                disabled={isSaving}
              />
              <Label htmlFor="isActive">Active</Label>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)} disabled={isSaving}>
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={isSaving}>
              {isSaving ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                "Save"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={(open) => !isDeleting && setIsDeleteDialogOpen(open)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p>Are you sure you want to delete this important date? This action cannot be undone.</p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)} disabled={isDeleting}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDelete} disabled={isDeleting}>
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

      <Toaster />
    </AdminAuthWrapper>
  )
}

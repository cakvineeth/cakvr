"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Mail, Phone, Check, X, ArrowLeft, FileText, Trash } from "lucide-react"
import Link from "next/link"
import AdminAuthWrapper from "@/components/admin/AdminAuthWrapper"

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

export default function AppointmentsAdmin() {
  return (
    <AdminAuthWrapper>
      <AppointmentsAdminContent />
    </AdminAuthWrapper>
  )
}

function AppointmentsAdminContent() {
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("all")

  useEffect(() => {
    fetchAppointments()
  }, [])

  async function fetchAppointments() {
    try {
      setLoading(true)
      setError(null)

      const { data, error } = await supabase.from("appointments").select("*").order("created_at", { ascending: false })

      if (error) throw error

      setAppointments(data || [])
    } catch (err) {
      console.error("Error fetching appointments:", err)
      setError("Failed to load appointments. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  async function updateAppointmentStatus(id: string, status: "confirmed" | "cancelled") {
    try {
      const { error } = await supabase
        .from("appointments")
        .update({ status, updated_at: new Date().toISOString() })
        .eq("id", id)

      if (error) throw error

      // Update local state
      setAppointments((prev) => prev.map((app) => (app.id === id ? { ...app, status } : app)))
    } catch (err) {
      console.error("Error updating appointment:", err)
      alert("Failed to update appointment status. Please try again.")
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
    } catch (err) {
      console.error("Error deleting appointment:", err)
      alert("Failed to delete appointment. Please try again.")
    }
  }

  const filteredAppointments =
    activeTab === "all" ? appointments : appointments.filter((app) => app.status === activeTab)

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
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-6">
        <Link href="/admin" className="flex items-center text-blue-600 hover:text-blue-800">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Admin
        </Link>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Appointment Requests</h1>
        <Button onClick={fetchAppointments} variant="outline">
          Refresh
        </Button>
      </div>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="confirmed">Confirmed</TabsTrigger>
          <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
        </TabsList>
      </Tabs>

      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p>Loading appointments...</p>
        </div>
      ) : error ? (
        <div className="bg-red-50 text-red-700 p-4 rounded-lg">{error}</div>
      ) : filteredAppointments.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No appointments found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAppointments.map((appointment) => (
            <Card key={appointment.id} className="overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{appointment.name}</CardTitle>
                  {getStatusBadge(appointment.status)}
                </div>
                <CardDescription className="flex items-center">
                  <FileText className="w-3 h-3 mr-1" />
                  Record created on {formatDateTime(appointment.created_at)}
                </CardDescription>
              </CardHeader>

              <CardContent className="pb-2">
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                    <span>
                      {formatDate(appointment.appointment_date)} at {appointment.appointment_time}
                    </span>
                  </div>

                  <div className="flex items-center text-sm">
                    <Mail className="w-4 h-4 mr-2 text-gray-500" />
                    <a href={`mailto:${appointment.email}`} className="text-blue-600 hover:underline">
                      {appointment.email}
                    </a>
                  </div>

                  <div className="flex items-center text-sm">
                    <Phone className="w-4 h-4 mr-2 text-gray-500" />
                    <a href={`tel:${appointment.phone}`} className="text-blue-600 hover:underline">
                      {appointment.phone}
                    </a>
                  </div>

                  {appointment.notes && (
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-sm text-gray-600">{appointment.notes}</p>
                    </div>
                  )}
                </div>
              </CardContent>

              <CardFooter className="pt-2">
                <div className="flex space-x-2 w-full">
                  {appointment.status === "pending" ? (
                    <>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-green-200 text-green-700 hover:bg-green-50"
                        onClick={() => updateAppointmentStatus(appointment.id, "confirmed")}
                      >
                        <Check className="w-4 h-4 mr-1" /> Confirm
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-red-200 text-red-700 hover:bg-red-50"
                        onClick={() => updateAppointmentStatus(appointment.id, "cancelled")}
                      >
                        <X className="w-4 h-4 mr-1" /> Cancel
                      </Button>
                    </>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => updateAppointmentStatus(appointment.id, "pending")}
                    >
                      Reset to Pending
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-red-200 text-red-700 hover:bg-red-50"
                    onClick={() => deleteAppointment(appointment.id)}
                  >
                    <Trash className="w-4 h-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

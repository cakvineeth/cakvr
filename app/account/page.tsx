"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/AuthContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

export default function AccountPage() {
  const { user, isLoading, signOut } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/auth/signin")
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-ca-purple" />
      </div>
    )
  }

  if (!user) {
    return null // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Account</h1>

        <Card>
          <CardHeader>
            <CardTitle>Account Information</CardTitle>
            <CardDescription>Manage your account details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Email</h3>
              <p className="mt-1 text-lg">{user.email}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Account ID</h3>
              <p className="mt-1 text-lg">{user.id}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Email Verified</h3>
              <p className="mt-1 text-lg">
                {user.email_confirmed_at ? "Yes" : "No"}
                {!user.email_confirmed_at && (
                  <span className="ml-2 text-sm text-red-500">Please check your email to verify your account</span>
                )}
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={() => signOut()}
              variant="outline"
              className="text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              Sign Out
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Loader2, Eye, EyeOff } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface AdminAuthWrapperProps {
  children: React.ReactNode
}

export default function AdminAuthWrapper({ children }: AdminAuthWrapperProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthLoading, setIsAuthLoading] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [authError, setAuthError] = useState("")
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    // Check current auth status
    const checkAuth = async () => {
      setIsLoading(true)
      console.log("Checking authentication status...")

      try {
        const {
          data: { session },
        } = await supabase.auth.getSession()

        console.log("Session:", session ? "Found" : "Not found")

        if (session) {
          // If user is authenticated, grant access (no profile check)
          setIsAuthenticated(true)
          setUser(session.user)
          console.log("User authenticated")
        } else {
          setIsAuthenticated(false)
          console.log("No session found")
        }
      } catch (error) {
        console.error("Auth check error:", error)
        setIsAuthenticated(false)
      } finally {
        setIsLoading(false)
      }
    }

    // Set up auth state listener
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log("Auth state changed:", _event)
      if (session) {
        // If user is authenticated, consider them authorized
        setIsAuthenticated(true)
        setUser(session.user)
        setIsLoading(false)
      } else {
        setIsAuthenticated(false)
        setIsLoading(false)
      }
    })

    checkAuth()

    return () => {
      subscription.unsubscribe()
    }
  }, [toast])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setAuthError("")
    setIsAuthLoading(true)

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        console.error("Login error:", error.message)
        setAuthError(error.message)
        toast({
          title: "Login Failed",
          description:
            "Please check your email and password and try again. If you're sure they're correct, contact the administrator.",
          variant: "destructive",
        })
      } else if (data.user) {
        console.log("Login successful")
        // The auth state change will trigger the checkAuth function
      }
    } catch (error: any) {
      console.error("Unexpected login error:", error)
      setAuthError(error.message || "An unexpected error occurred")
      toast({
        title: "Login Failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsAuthLoading(false)
    }
  }

  const handleLogout = async () => {
    setIsLoading(true)
    try {
      await supabase.auth.signOut()
      router.push("/admin")
      toast({
        title: "Logged Out",
        description: "You have been successfully logged out.",
      })
    } catch (error) {
      console.error("Logout error:", error)
      toast({
        title: "Logout Failed",
        description: "There was a problem signing out. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <Loader2 className="h-12 w-12 text-ca-purple animate-spin mx-auto mb-4" />
          <p className="text-lg text-gray-800">Loading admin interface...</p>
          <p className="text-sm text-gray-600 mt-2">Checking authentication status...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Card className="w-full max-w-md bg-white">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-ca-darkBlue">Admin Login</CardTitle>
            <CardDescription>Enter your credentials to access the admin area</CardDescription>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardContent className="space-y-4">
              {authError && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">
                  {authError}
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-800">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@example.com"
                  required
                  className="text-gray-900 bg-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-800">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="text-gray-900 bg-white"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                type="submit"
                className="w-full bg-ca-purple hover:bg-ca-lightPurple text-white"
                disabled={isAuthLoading}
              >
                {isAuthLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    )
  }

  return (
    <div>
      <div className="bg-white text-gray-800 py-2 px-4 border-b">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-medium">Admin Mode</span>
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">Active</span>
          </div>

          <div className="flex items-center gap-4">
            {user && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-700">{user.email}</span>
              </div>
            )}

            <Button onClick={handleLogout} variant="ghost" className="text-gray-800 hover:bg-gray-100" size="sm">
              Logout
            </Button>
          </div>
        </div>
      </div>

      {children}
    </div>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { AuthProvider } from "@/contexts/AuthContext"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import { DisclaimerProvider } from "@/contexts/DisclaimerContext"
import PageWrapper from "./page-wrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "K Vineeth Reddy & Co LLP - Chartered Accountants",
  description: "Finance, Business and Brand Consulting firm addressing clients across NorthEast",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "K Vineeth Reddy & Co LLP - Chartered Accountants",
    description: "Finance, Business and Brand Consulting firm addressing clients across NorthEast",
    url: "https://cakvr.com",
    siteName: "K Vineeth Reddy & Co LLP",
    locale: "en_US",
    type: "website",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0A0F25" media="(prefers-color-scheme: dark)" />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <DisclaimerProvider>
              <PageWrapper>
                <div className="min-h-screen flex flex-col">
                  <Navbar />
                  <main className="flex-1">{children}</main>
                  <Footer />
                </div>
              </PageWrapper>
            </DisclaimerProvider>
            <Toaster />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}

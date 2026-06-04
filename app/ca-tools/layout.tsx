import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CA Tools - ASK Consulting",
  description: "Essential tools and resources for Chartered Accountants in India",
}

export default function CAToolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      </div>
    </div>
  )
}

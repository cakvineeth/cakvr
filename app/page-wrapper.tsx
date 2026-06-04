"use client"

import { type ReactNode, useEffect, useState } from "react"
import { useDisclaimer } from "@/contexts/DisclaimerContext"
import DisclaimerModal from "@/components/DisclaimerModal"

export default function PageWrapper({ children }: { children: ReactNode }) {
  const { hasAgreed, setHasAgreed } = useDisclaimer()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    try {
      // Check localStorage for existing agreement
      const storedAgreement = localStorage.getItem("disclaimerAgreed")
      if (storedAgreement === "true") {
        setHasAgreed(true)
      } else {
        // Explicitly set to false if not true
        setHasAgreed(false)
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error)
      // Default to showing disclaimer if localStorage fails
      setHasAgreed(false)
    }
  }, [setHasAgreed])

  // Don't render anything during SSR to avoid hydration mismatch
  if (!isMounted) {
    return null
  }

  return (
    <>
      <DisclaimerModal />
      {hasAgreed ? (
        children
      ) : (
        <div className="fixed inset-0 bg-gray-100 flex items-center justify-center p-4">
          <div className="text-center max-w-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Please Accept the Disclaimer</h2>
            <p className="text-gray-600">You need to accept the disclaimer to access the website content.</p>
          </div>
        </div>
      )}
    </>
  )
}

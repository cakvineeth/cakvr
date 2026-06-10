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
        <div className="fixed inset-0 flex items-center justify-center bg-ca-darkBlue/80 p-4 backdrop-blur-sm">
          <div className="max-w-md rounded-xl border border-white/10 bg-white px-8 py-10 text-center shadow-2xl">
            <h2 className="mb-2 text-xl font-semibold text-ca-darkBlue">Please Accept the Disclaimer</h2>
            <p className="text-sm leading-relaxed text-gray-600">
              Review and accept the disclaimer in the dialog above to access the website.
            </p>
          </div>
        </div>
      )}
    </>
  )
}

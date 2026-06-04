"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type DisclaimerContextType = {
  hasAgreed: boolean
  setHasAgreed: (value: boolean) => void
}

const DisclaimerContext = createContext<DisclaimerContextType | undefined>(undefined)

export function DisclaimerProvider({ children }: { children: ReactNode }) {
  const [hasAgreed, setHasAgreed] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Check localStorage for existing agreement
    const storedAgreement = localStorage.getItem("disclaimerAgreed")
    if (storedAgreement === "true") {
      setHasAgreed(true)
    }
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    // Only update localStorage after initial load
    if (isLoaded) {
      localStorage.setItem("disclaimerAgreed", hasAgreed.toString())
    }
  }, [hasAgreed, isLoaded])

  return <DisclaimerContext.Provider value={{ hasAgreed, setHasAgreed }}>{children}</DisclaimerContext.Provider>
}

export function useDisclaimer() {
  const context = useContext(DisclaimerContext)
  if (context === undefined) {
    throw new Error("useDisclaimer must be used within a DisclaimerProvider")
  }
  return context
}

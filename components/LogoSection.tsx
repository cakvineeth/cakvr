"use client"

import EnhancedLogo from "./EnhancedLogo"

interface LogoSectionProps {
  size?: "small" | "medium" | "large"
  variant?: "default" | "light" | "dark"
  animated?: boolean
  className?: string
}

const LogoSection = ({ size = "medium", variant = "default", animated = false, className = "" }: LogoSectionProps) => {
  // Define sizes - INCREASED ALL SIZES
  const sizes = {
    small: { width: 240, height: 80 }, // Increased from 180x60
    medium: { width: 300, height: 100 }, // Increased from 220x70
    large: { width: 380, height: 120 }, // Increased from 300x100
  }

  const { width, height } = sizes[size]

  return (
    <div className={className}>
      <EnhancedLogo width={width} height={height} variant={variant} animated={animated} />
    </div>
  )
}

export default LogoSection

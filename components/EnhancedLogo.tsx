"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface EnhancedLogoProps {
  width?: number
  height?: number
  animated?: boolean
  variant?: "default" | "light" | "dark"
}

const EnhancedLogo = ({ width = 300, height = 100, animated = true, variant = "default" }: EnhancedLogoProps) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Define color schemes based on variant
  const colors = {
    default: {
      primary: "#004B87", // Deep blue from the logo
      secondary: "#004B87", // Same blue for consistency
      accent1: "#4CBB17", // Green from the logo
      accent2: "#FF8C38", // Orange from the logo
      text: "#004B87", // Blue text for better readability
      subtext: "#004B87", // Blue subtext for consistency
    },
    light: {
      primary: "#004B87",
      secondary: "#004B87",
      accent1: "#4CBB17",
      accent2: "#FF8C38",
      text: "#FFFFFF",
      subtext: "#F0F0F0",
    },
    dark: {
      primary: "#1E90FF",
      secondary: "#1E90FF",
      accent1: "#5FD068",
      accent2: "#FFA964",
      text: "#FFFFFF",
      subtext: "#E0E0E0",
    },
  }

  const currentColors = colors[variant]

  // Animation variants
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          duration: 1.5,
          ease: "easeInOut",
          delay: 0.2 + i * 0.1,
        },
        opacity: {
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.2 + i * 0.1,
        },
      },
    }),
  }

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.8 + i * 0.1,
      },
    }),
  }

  // If not client-side yet, return a placeholder to avoid hydration mismatch
  if (!isClient) {
    return <div style={{ width, height }}></div>
  }

  return (
    <motion.div
      initial={animated ? "hidden" : "visible"}
      animate="visible"
      variants={logoVariants}
      style={{ width, height }}
      className="relative"
    >
      <svg width={width} height={height} viewBox="0 0 300 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* CA Symbol - Enhanced to match the new logo */}
        <g>
          {/* C part */}
          <motion.path
            custom={0}
            variants={animated ? pathVariants : {}}
            d="M20,50 C20,30 35,15 55,15 C70,15 82,25 85,35"
            stroke={currentColors.primary}
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
          />

          {/* A part */}
          <motion.path
            custom={1}
            variants={animated ? pathVariants : {}}
            d="M60,85 L75,30 L90,85"
            stroke={currentColors.secondary}
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
          />

          {/* Orange accent line */}
          <motion.path
            custom={3}
            variants={animated ? pathVariants : {}}
            d="M75,30 L95,20"
            stroke={currentColors.accent2}
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          />

          {/* Green accent line */}
          <motion.path
            custom={4}
            variants={animated ? pathVariants : {}}
            d="M95,20 L105,35"
            stroke={currentColors.accent1}
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* INDIA text */}
        <motion.text
          custom={0}
          variants={animated ? textVariants : {}}
          x="20"
          y="95"
          fontFamily="Arial, sans-serif"
          fontSize="16"
          fontWeight="700"
          fill={currentColors.primary}
        >
          INDIA
        </motion.text>

        {/* K VINEETH REDDY & CO LLP text */}
        <motion.text
          custom={1}
          variants={animated ? textVariants : {}}
          x="115"
          y="45"
          fontFamily="Arial, sans-serif"
          fontSize="20"
          fontWeight="700"
          letterSpacing="0.5"
          fill={currentColors.text}
        >
          K VINEETH REDDY & CO LLP
        </motion.text>

        {/* Chartered Accountants text */}
        <motion.text
          custom={2}
          variants={animated ? textVariants : {}}
          x="115"
          y="70"
          fontFamily="Arial, sans-serif"
          fontSize="16"
          fontWeight="500"
          letterSpacing="1"
          fill={currentColors.subtext}
        >
          CHARTERED ACCOUNTANTS
        </motion.text>

        {/* Orange horizontal line */}
        <motion.line
          custom={5}
          variants={animated ? pathVariants : {}}
          x1="115"
          y1="80"
          x2="215"
          y2="80"
          stroke={currentColors.accent2}
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Green horizontal line */}
        <motion.line
          custom={6}
          variants={animated ? pathVariants : {}}
          x1="225"
          y1="80"
          x2="325"
          y2="80"
          stroke={currentColors.accent1}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      {/* Optional glow effect */}
      {variant !== "default" && (
        <div
          className="absolute inset-0 -z-10 blur-md opacity-30"
          style={{
            background: `radial-gradient(circle, ${currentColors.accent2}40 0%, transparent 70%)`,
          }}
        />
      )}
    </motion.div>
  )
}

export default EnhancedLogo

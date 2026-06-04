import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  variant?: "default" | "light" | "dark"
  size?: "small" | "medium" | "large"
  className?: string
  linkWrapper?: boolean
}

const Logo = ({ variant = "default", size = "medium", className = "", linkWrapper = true }: LogoProps) => {
  // Define sizes for different use cases - INCREASED ALL SIZES
  const sizes = {
    small: { width: 280, height: 80 }, // Increased from 220x60
    medium: { width: 340, height: 100 }, // Increased from 280x80
    large: { width: 420, height: 120 }, // Increased from 360x100
  }

  const { width, height } = sizes[size]

  const maxHeights = {
    small: "max-h-16",
    medium: "max-h-24",
    large: "max-h-32",
  }

  // Background colors for different variants
  const bgColors = {
    default: "",
    light: "bg-white rounded-md p-2",
    dark: "bg-ca-darkBlue rounded-md p-2",
  }

  const logoImage = (
    <Image
      src="/images/logo.png"
      alt="K Vineeth Reddy & Co LLP - Chartered Accountants"
      width={width}
      height={height}
      className={`object-contain h-auto w-auto ${maxHeights[size]}`}
      style={{ width: "auto", height: "auto" }}
      priority
    />
  )

  return (
    <div className={`${bgColors[variant]} ${className}`}>
      {linkWrapper ? (
        <Link href="/" className="block">
          {logoImage}
        </Link>
      ) : (
        logoImage
      )}
    </div>
  )
}

export default Logo

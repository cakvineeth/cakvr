"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const contrastTextVariants = cva("relative", {
  variants: {
    variant: {
      light: "text-contrast-light",
      dark: "text-contrast-dark",
      primary: "text-contrast-primary",
      secondary: "text-contrast-secondary",
      accent: "text-contrast-accent",
    },
  },
  defaultVariants: {
    variant: "light",
  },
})

export interface ContrastTextProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof contrastTextVariants> {
  as?: React.ElementType
}

const ContrastText = React.forwardRef<HTMLHeadingElement, ContrastTextProps>(
  ({ className, variant, as: Element = "h2", children, ...props }, ref) => {
    return (
      <Element className={cn(contrastTextVariants({ variant, className }))} ref={ref} {...props}>
        {children}
      </Element>
    )
  },
)
ContrastText.displayName = "ContrastText"

export { ContrastText, contrastTextVariants }

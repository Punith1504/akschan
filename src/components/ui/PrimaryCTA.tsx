"use client";

import * as React from "react"
import { cn } from "@/lib/utils/tailwind"
import { motion, HTMLMotionProps } from "framer-motion"

export interface PrimaryCTAProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode
}

export const PrimaryCTA = React.forwardRef<HTMLButtonElement, PrimaryCTAProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold shadow-lg",
          "hover:opacity-90 transition-opacity border-none outline-none",
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)
PrimaryCTA.displayName = "PrimaryCTA"

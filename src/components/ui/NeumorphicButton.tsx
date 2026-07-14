"use client";

import * as React from "react"
import { cn } from "@/lib/utils/tailwind"
import { motion, HTMLMotionProps } from "framer-motion"

export interface NeumorphicButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode
}

export const NeumorphicButton = React.forwardRef<HTMLButtonElement, NeumorphicButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98, boxShadow: "inset 4px 4px 8px var(--shadow-dark), inset -4px -4px 8px var(--shadow-light)" }}
        className={cn(
          "neumorphic px-6 py-3 rounded-full font-medium transition-colors duration-200",
          "hover:bg-foreground/5",
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)
NeumorphicButton.displayName = "NeumorphicButton"

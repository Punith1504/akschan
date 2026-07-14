import * as React from "react"
import { cn } from "@/lib/utils/tailwind"

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function GlassCard({ className, children, ...props }: GlassCardProps) {
  return (
    <div
      className={cn("glass rounded-2xl overflow-hidden", className)}
      {...props}
    >
      {children}
    </div>
  )
}

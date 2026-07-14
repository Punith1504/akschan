"use client";

import * as React from "react"
import Link from "next/link"
import { ShoppingBag, Search, Menu } from "lucide-react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

import { useCart } from "@/lib/cart-context"

export function Navbar() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = React.useState(false)
  const { setIsDrawerOpen, items } = useCart()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  const cartItemsCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 inset-x-0 z-50 p-4 md:p-6"
    >
      <div className="glass max-w-7xl mx-auto rounded-full px-6 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="md:hidden p-2 -ml-2 rounded-full hover:bg-foreground/5 transition-colors">
            <Menu className="w-5 h-5" />
          </button>
          <Link href="/" className="font-bold text-xl tracking-tight uppercase">
            Punni
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/beauty" className="hover:text-primary/70 transition-colors">Beauty</Link>
          <Link href="/herbal" className="hover:text-primary/70 transition-colors">Herbal</Link>
          <Link href="/food" className="hover:text-primary/70 transition-colors">Food</Link>
          <Link href="/textiles" className="hover:text-primary/70 transition-colors">Textiles</Link>
        </nav>

        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full hover:bg-foreground/5 transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setIsDrawerOpen(true)}
            className="p-2 rounded-full hover:bg-foreground/5 transition-colors relative"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartItemsCount > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center rounded-full">
                {cartItemsCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </motion.header>
  )
}

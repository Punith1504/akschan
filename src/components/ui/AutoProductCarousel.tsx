"use client";

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ProductCard, Product } from "@/components/product/ProductCard"
import { useCart } from "@/lib/cart-context"

export function AutoProductCarousel({ products, title }: { products: Product[], title: string }) {
  const { addItem } = useCart()
  const [currentIndex, setCurrentIndex] = React.useState(0)
  
  // Provide a safe fallback for SSR
  const [itemsPerPage, setItemsPerPage] = React.useState(4)
  
  React.useEffect(() => {
    const isMobile = window.innerWidth < 768
    setItemsPerPage(isMobile ? 2 : 4)
    
    const handleResize = () => setItemsPerPage(window.innerWidth < 768 ? 2 : 4)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev + itemsPerPage >= products.length) return 0;
        return prev + itemsPerPage;
      })
    }, 3000)
    return () => clearInterval(timer)
  }, [products.length, itemsPerPage])

  const visibleProducts = products.slice(currentIndex, currentIndex + itemsPerPage)

  return (
    <div className="w-full max-w-[1400px] mx-auto px-6 py-12">
      <div className="flex items-end justify-between mb-8 pb-4 border-b border-foreground/10">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">{title}</h2>
      </div>
      <div className="relative overflow-hidden min-h-[450px]">
        <AnimatePresence mode="popLayout">
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full"
          >
            {visibleProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={addItem} 
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

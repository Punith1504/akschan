import * as React from "react"
import { GlassCard } from "@/components/ui/GlassCard"
import { PrimaryCTA } from "@/components/ui/PrimaryCTA"
import Link from "next/link"
import { triggerHaptic } from "@/lib/haptic"
import { Users } from "lucide-react"

export interface Product {
  id: string
  name: string
  price: number
  imageUrl: string
  category: string
  boughtLastMonth?: number
  isTrending?: boolean
}

export interface ProductCardProps {
  product: Product
  onAddToCart?: (product: Product) => void
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <GlassCard className="flex flex-col group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-foreground/5 hover:-translate-y-1">
      <Link href={`/products/${product.id}`} onClick={() => triggerHaptic(50)} className="block relative w-full aspect-[4/5] overflow-hidden bg-background">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Link>
      
      <div className="p-5 flex flex-col flex-grow bg-background/50 backdrop-blur-xl">
        <div className="flex justify-between items-start gap-2">
          <Link href={`/products/${product.id}`} onClick={() => triggerHaptic(50)} className="flex-1 hover:underline">
            <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3>
            <p className="text-sm text-foreground/60 capitalize mt-0.5">{product.category}</p>
          </Link>
          <span className="font-bold text-lg whitespace-nowrap">${product.price.toFixed(2)}</span>
        </div>
        {product.boughtLastMonth && (
          <div className="mt-4 flex items-center gap-1.5 text-xs text-orange-600/90 font-medium bg-orange-500/10 self-start px-2 py-1 rounded-md">
            <Users className="w-3.5 h-3.5" />
            <span>{product.boughtLastMonth.toLocaleString()}+ bought in past month</span>
          </div>
        )}
      </div>

      <div className="absolute bottom-5 left-5 right-5 translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
        <PrimaryCTA 
          className="w-full py-3 text-sm shadow-xl" 
          onClick={() => onAddToCart?.(product)}
        >
          Add to Cart
        </PrimaryCTA>
      </div>
    </GlassCard>
  )
}

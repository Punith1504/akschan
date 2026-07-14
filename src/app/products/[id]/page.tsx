"use client";

import { use } from "react";
import { MOCK_PRODUCTS } from "@/lib/mock-data";
import { useCart } from "@/lib/cart-context";
import { PrimaryCTA } from "@/components/ui/PrimaryCTA";
import { GlassCard } from "@/components/ui/GlassCard";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Shield, Truck } from "lucide-react";
import Link from "next/link";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { addItem } = useCart();
  
  const product = MOCK_PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-32 text-center">
        <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
        <Link href="/" className="text-primary hover:underline">Return to Home</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 mt-8">
      <Link href={`/${product.category}`} className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground mb-12 transition-colors uppercase tracking-widest text-sm font-semibold">
        <ArrowLeft className="w-4 h-4" />
        Back to {product.category}
      </Link>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* Sticky Image Section */}
        <div className="w-full lg:w-1/2">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="sticky top-32 aspect-[4/5] bg-foreground/5 rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
          </motion.div>
        </div>

        {/* Scrolling Details Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center py-10 lg:py-20">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <p className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4">
              {product.category} Collection
            </p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 leading-tight">{product.name}</h1>
            <p className="text-4xl font-light mb-8">${product.price.toFixed(2)}</p>
            
            <div className="prose prose-lg text-foreground/70 mb-12">
              <p>
                Experience the unmatched quality of our {product.name}. 
                Carefully crafted and sustainably sourced, this product represents the pinnacle of our {product.category} collection. Designed for those who appreciate the finer things in life.
              </p>
            </div>

            <GlassCard className="p-8 mb-10 flex flex-col gap-6 rounded-[2rem]">
              <div className="flex items-center gap-4 text-foreground/80">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-600">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">In Stock</h4>
                  <p className="text-sm">Ready to ship immediately</p>
                </div>
              </div>
              
              <div className="w-full h-px bg-foreground/10" />
              
              <div className="flex items-center gap-4 text-foreground/80">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Free Shipping</h4>
                  <p className="text-sm">On all orders over $150</p>
                </div>
              </div>

              <div className="w-full h-px bg-foreground/10" />

              <div className="flex items-center gap-4 text-foreground/80">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-600">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Quality Guarantee</h4>
                  <p className="text-sm">30-day money back guarantee</p>
                </div>
              </div>
            </GlassCard>

            <PrimaryCTA 
              className="w-full py-5 text-xl rounded-2xl"
              onClick={() => addItem(product)}
            >
              Add to Cart — ${product.price.toFixed(2)}
            </PrimaryCTA>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

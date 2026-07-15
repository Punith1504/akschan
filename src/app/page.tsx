"use client";

import * as React from "react"
import { MOCK_PRODUCTS } from "@/lib/mock-data"
import { ProductCard } from "@/components/product/ProductCard"
import { useCart } from "@/lib/cart-context"
import { NeumorphicButton } from "@/components/ui/NeumorphicButton"
import { PrimaryCTA } from "@/components/ui/PrimaryCTA"
import { Marquee } from "@/components/ui/Marquee"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Home() {
  const { addItem } = useCart()
  const categories = ["beauty", "herbal", "food", "textiles"]
  
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      
      {/* Bento Grid Hero */}
      <section className="relative pt-24 pb-16 px-6 max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-12 gap-2 md:gap-6 auto-rows-[120px] sm:auto-rows-[180px] md:auto-rows-[320px]">
          
          {/* Main Statement */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="col-span-8 row-span-2 neumorphic rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-12 flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 translate-x-1/4 -translate-y-1/4" />
            <h1 className="text-2xl sm:text-4xl md:text-8xl font-bold tracking-tighter mb-4 md:mb-8 leading-[1.05]">
              Elevate your <br/>
              <span className="text-foreground/40 font-light">daily rituals.</span>
            </h1>
            <p className="text-xs sm:text-base md:text-2xl text-foreground/60 max-w-xl mb-6 md:mb-12 font-light">
              Discover a curated selection of premium beauty, herbal supplements, and handwoven textiles.
            </p>
            <div className="flex gap-4">
              <PrimaryCTA className="px-6 py-3 md:px-10 md:py-5 text-xs md:text-lg">Shop Collection</PrimaryCTA>
            </div>
          </motion.div>

          {/* Bento Item 1 - Featured Product */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-4 row-span-1 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden relative group cursor-pointer shadow-xl"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={MOCK_PRODUCTS[0].imageUrl} alt="Featured Beauty" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-white">
              <p className="text-xs font-bold opacity-80 uppercase tracking-[0.2em] mb-2">New Arrival</p>
              <h3 className="text-lg sm:text-xl md:text-3xl font-bold">{MOCK_PRODUCTS[0].name}</h3>
            </div>
          </motion.div>

          {/* Bento Item 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-4 row-span-1 bg-foreground text-background rounded-[1.5rem] md:rounded-[2.5rem] p-5 md:p-10 flex flex-col justify-between"
          >
            <h3 className="text-xl sm:text-2xl md:text-4xl font-semibold leading-[1.1] tracking-tight">
              Pure.<br/>Organic.<br/>Sourced globally.
            </h3>
            <Link href="/food" className="inline-flex items-center gap-1 md:gap-2 text-[10px] md:text-sm uppercase tracking-widest hover:opacity-70 transition-opacity mt-4 font-bold">
              Explore Food &rarr;
            </Link>
          </motion.div>

        </div>
      </section>

      <div className="py-8">
        <Marquee text="Free international shipping on orders over $150 • Premium quality guaranteed • " />
      </div>

      {/* Categories */}
      <div className="max-w-[1400px] mx-auto px-6 py-20 w-full flex flex-col gap-32">
        {categories.map((category) => {
          const categoryProducts = MOCK_PRODUCTS.filter(p => p.category === category).slice(0, 4)
          return (
            <motion.section 
              key={category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-end justify-between mb-12 pb-6 border-b border-foreground/10">
                <div>
                  <h2 className="text-5xl font-bold tracking-tighter capitalize mb-3">{category}</h2>
                  <p className="text-foreground/60 text-xl font-light">Curated essentials for your {category} routine.</p>
                </div>
                <Link href={`/${category}`} className="inline-block font-semibold hover:text-primary/70 transition-colors uppercase tracking-widest text-[10px] md:text-sm">
                  View Collection &rarr;
                </Link>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {categoryProducts.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onAddToCart={addItem} 
                  />
                ))}
              </div>
            </motion.section>
          )
        })}
      </div>
    </div>
  )
}

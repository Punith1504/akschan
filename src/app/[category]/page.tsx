"use client";

import { use } from "react";
import { MOCK_PRODUCTS } from "@/lib/mock-data";
import { ProductCard } from "@/components/product/ProductCard";
import { useCart } from "@/lib/cart-context";
import { motion } from "framer-motion";

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = use(params);
  const { addItem } = useCart();
  
  const products = MOCK_PRODUCTS.filter((p) => p.category === category);
  
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12 mt-8">
        <h1 className="text-4xl md:text-5xl font-bold capitalize mb-4">{category}</h1>
        <p className="text-foreground/60 text-lg">
          Explore our exclusive collection of {category} products.
        </p>
      </div>

      {products.length === 0 ? (
        <div className="py-20 text-center text-foreground/50">
          <p>No products found in this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <ProductCard product={product} onAddToCart={addItem} />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

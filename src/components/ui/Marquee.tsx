"use client";

import { motion } from "framer-motion";

export function Marquee({ text }: { text: string }) {
  return (
    <div className="w-full overflow-hidden bg-primary text-primary-foreground py-2.5 flex whitespace-nowrap">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        className="flex"
      >
        <div className="flex gap-16 pr-16 text-xs sm:text-sm font-semibold tracking-widest uppercase">
          {Array(10).fill(text).map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
        <div className="flex gap-16 pr-16 text-xs sm:text-sm font-semibold tracking-widest uppercase">
          {Array(10).fill(text).map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import contentData from "@/data/content.json";

export default function StatsSection() {
  const stats = contentData.home.statsBar;

  return (
    <section className="py-16 md:py-24 relative">
      {/* Top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
      
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)]">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="bg-[var(--background)] p-8 md:p-12 text-center group"
            >
              <div className="flex items-baseline justify-center gap-0.5">
                <span className="text-4xl md:text-6xl font-[800] font-[Oswald] text-[var(--foreground)] tracking-tight group-hover:text-[var(--accent)] transition-colors duration-300">
                  {stat.value}
                </span>
                <span className="text-2xl md:text-3xl font-[700] font-[Oswald] text-[var(--accent)] transition-colors duration-300">
                  {stat.suffix}
                </span>
              </div>
              <div className="h-[2px] w-8 bg-[var(--accent)]/40 mx-auto mt-4 mb-3 group-hover:w-12 group-hover:bg-[var(--accent)] transition-all duration-300" />
              <p className="text-[10px] md:text-[11px] text-[var(--muted)] tracking-[0.2em] font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
    </section>
  );
}

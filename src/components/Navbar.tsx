"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import contentData from "@/data/content.json";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { brand, navbar } = contentData.global;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/95 backdrop-blur-xl border-b border-[rgba(204,0,0,0.3)]"
      style={{ boxShadow: "0 1px 30px rgba(204,0,0,0.08)" }}>
      {/* Animated shining top bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, transparent 0%, #cc0000 30%, #ff4444 50%, #cc0000 70%, transparent 100%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 3s linear infinite",
          }}
        />
      </div>

      <div className="container flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="flex items-center justify-center transition-all duration-300 group-hover:opacity-80">
            <img src={brand.logoUrl} alt={`${brand.name} Logo`} className="h-12 md:h-10 w-auto object-contain" />
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="text-[15px] font-[900] tracking-[0.2em] font-[Oswald] text-white">
              {brand.name}
            </span>
            <span
              className="text-[8px] tracking-[0.4em] uppercase font-bold mt-0.5 text-shimmer-red"
            >
              FITNESS
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navbar.links.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-[12px] font-semibold tracking-[0.15em] text-[var(--muted)] hover:text-white transition-colors duration-200 uppercase relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--accent)] transition-all duration-300 group-hover:w-full"
                style={{ boxShadow: "0 0 6px rgba(204,0,0,0.8)" }} />
            </a>
          ))}

          <div className="w-[1px] h-5 bg-[var(--border)] mx-1" />

          <a
            href={navbar.cta.href}
            className="relative bg-[var(--accent)] text-white font-bold text-[12px] tracking-[0.12em] px-6 py-2.5 uppercase transition-all duration-200 active:scale-95"
            style={{
              boxShadow: "0 0 15px rgba(204,0,0,0.35)",
              transition: "box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 30px rgba(204,0,0,0.65), 0 0 60px rgba(204,0,0,0.25)")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 15px rgba(204,0,0,0.35)")}
          >
            {navbar.cta.label}
          </a>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <button
            className="p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0A0A0A] border-t border-[rgba(204,0,0,0.2)] overflow-hidden"
          >
            <div className="container py-6 space-y-1">
              {navbar.links.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="block text-[13px] font-semibold tracking-[0.12em] py-3.5 text-[var(--muted)] hover:text-white transition-colors border-b border-[var(--border)] last:border-b-0 uppercase"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-5">
                <a
                  href={navbar.cta.href}
                  className="block w-full bg-[var(--accent)] text-white text-center font-bold text-[13px] tracking-[0.1em] px-6 py-4 uppercase"
                  style={{ boxShadow: "0 0 20px rgba(204,0,0,0.4)" }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {navbar.cta.label}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

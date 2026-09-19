"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import contentData from "@/data/content.json";

export default function HeroSection() {
  const { hero } = contentData.home;
  return (
    /* pt-[72px] = exact navbar height so content never hides behind it */
    <section className="relative overflow-hidden bg-[#050505] pt-[72px]">
      {/* Diagonal background tint */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[var(--accent)]/5 skew-x-[-6deg] origin-top-right pointer-events-none" />

      {/* Large ghost watermark */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[12vw] font-[900] font-[Oswald] text-white/[0.025] tracking-widest uppercase whitespace-nowrap">
          TRANSFORM
        </span>
      </div>

      {/* Glowing left accent bar */}
      <div
        className="absolute left-0 top-[72px] bottom-0 w-[3px]"
        style={{
          background: "linear-gradient(to bottom, transparent, #CC0000 30%, #FF5555 50%, #CC0000 70%, transparent)",
          boxShadow: "0 0 16px rgba(204,0,0,0.55), 0 0 36px rgba(204,0,0,0.22)",
          animation: "glow-pulse 3.5s ease-in-out infinite",
        }}
      />

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16 md:py-20 lg:py-24 xl:py-32 relative z-10">
        {/* ── Left Content ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="space-y-8"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3"
          >
            <div
              className="h-[2px] w-10"
              style={{ background: "#CC0000", boxShadow: "0 0 8px rgba(204,0,0,0.8), 0 0 20px rgba(204,0,0,0.4)" }}
            />
            <span className="text-[11px] font-bold tracking-[0.35em] uppercase text-glow-red">
              {hero.eyeBrow}
            </span>
          </motion.div>

          {/* Headline */}
          <div className="space-y-1">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-[clamp(2.8rem,6.5vw,5rem)] font-[900] leading-[0.88] tracking-[-0.03em] text-white whitespace-pre-line"
            >
              {hero.headline.part1}
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-[clamp(2.8rem,6.5vw,5rem)] font-[900] leading-[0.88] tracking-[-0.03em]"
            >
              <span className="text-white">{hero.headline.part2}</span>
              <span className="text-shimmer relative">
                {hero.headline.part3}
                <span
                  className="absolute -bottom-2 left-0 w-full h-[3px]"
                  style={{
                    background: "linear-gradient(90deg, transparent, #CC0000, #FF5555, #CC0000, transparent)",
                    backgroundSize: "200% 100%",
                    boxShadow: "0 0 8px rgba(204,0,0,0.6)",
                    animation: "shimmer 8s linear infinite",
                  }}
                />
              </span>
            </motion.h1>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-base md:text-[17px] text-[#BBBBBB] leading-[1.75] max-w-lg font-normal"
          >
            {hero.subtext}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <a
              href={hero.buttons[0].href}
              className="inline-flex items-center gap-2 bg-[var(--accent)] text-white font-bold text-sm tracking-[0.08em] px-8 py-4 uppercase transition-all duration-300 hover:-translate-y-0.5"
              style={{ boxShadow: "0 0 18px rgba(204,0,0,0.45), 0 4px 18px rgba(204,0,0,0.25)" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 35px rgba(204,0,0,0.75), 0 8px 28px rgba(204,0,0,0.45)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 18px rgba(204,0,0,0.45), 0 4px 18px rgba(204,0,0,0.25)")}
            >
              {hero.buttons[0].label}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={hero.buttons[1].href}
              className="group inline-flex items-center gap-2 text-white/60 text-sm font-semibold tracking-[0.08em] uppercase hover:text-white transition-colors"
            >
              <span>{hero.buttons[1].label}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.85 }}
            className="flex gap-10 pt-6"
            style={{ borderTop: "1px solid rgba(204,0,0,0.2)" }}
          >
            {hero.stats.map((stat, idx) => (
              <div key={idx}>
                <p className="text-3xl md:text-4xl font-[900] font-[Oswald] tracking-tight leading-none text-shimmer">
                  {stat.value}<span style={{ WebkitTextFillColor: "#FF4444" }}>{stat.suffix}</span>
                </p>
                <p className="text-[10px] text-[var(--muted)] mt-2 tracking-[0.2em] uppercase font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right Image ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative h-[420px] md:h-[540px] lg:h-[600px] w-full"
        >
          {/* Subtle glow border */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{ boxShadow: "inset 0 0 0 1px rgba(204,0,0,0.22), 0 0 30px rgba(204,0,0,0.08)" }}
          />
          <img src={hero.image} alt="Hero Athlete" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />

          {/* Glowing corners */}
          <div
            className="absolute top-0 right-0 w-16 h-16 border-t-[3px] border-r-[3px]"
            style={{ borderColor: "#CC0000", boxShadow: "3px -3px 14px rgba(204,0,0,0.55), 5px -5px 28px rgba(204,0,0,0.25)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-16 h-16 border-b-[3px] border-l-[3px]"
            style={{ borderColor: "rgba(204,0,0,0.45)", boxShadow: "-2px 2px 10px rgba(204,0,0,0.3)" }}
          />

          {/* Floating badge */}
          <div
            className="absolute bottom-8 right-6 bg-[var(--accent)] px-4 py-2.5 float"
            style={{ boxShadow: "0 0 18px rgba(204,0,0,0.55), 0 0 36px rgba(204,0,0,0.25)" }}
          >
            <p className="text-white text-[11px] font-bold tracking-[0.2em] uppercase">Expert Coaching</p>
          </div>
        </motion.div>
      </div>

      {/* Bottom shimmer line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[1px]"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(204,0,0,0.45), transparent)",
          boxShadow: "0 0 8px rgba(204,0,0,0.2)",
        }}
      />
    </section>
  );
}

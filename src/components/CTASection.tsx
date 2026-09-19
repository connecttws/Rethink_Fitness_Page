"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import contentData from "@/data/content.json";
import SectionCorners from "./SectionCorners";

export default function CTASection() {
  const { cta } = contentData.home;

  return (
    <section
      id="cta"
      className="py-28 md:py-40 relative overflow-hidden"
      style={{ background: "#0A0A0A" }}
    >
      <SectionCorners strong size={72} />
      {/* Red radial glow bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(204,0,0,0.18) 0%, rgba(204,0,0,0.05) 40%, transparent 70%)",
        }}
      />

      {/* Glowing top border */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background: "linear-gradient(90deg, transparent 0%, #CC0000 30%, #FF4444 50%, #CC0000 70%, transparent 100%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 3s linear infinite",
          boxShadow: "0 0 15px rgba(204,0,0,0.6), 0 0 30px rgba(204,0,0,0.3)",
        }}
      />

      {/* Glowing bottom border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{
          background: "linear-gradient(90deg, transparent 0%, #CC0000 30%, #FF4444 50%, #CC0000 70%, transparent 100%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 3s linear infinite reverse",
          boxShadow: "0 0 15px rgba(204,0,0,0.6), 0 0 30px rgba(204,0,0,0.3)",
        }}
      />

      {/* Ghost BG text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[18vw] font-[900] font-[Oswald] text-white/[0.02] tracking-tight uppercase">
          START
        </span>
      </div>

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4">
            <div
              className="h-[1px] w-16"
              style={{ background: "linear-gradient(90deg, transparent, #CC0000)", boxShadow: "0 0 8px rgba(204,0,0,0.5)" }}
            />
            <span className="text-[11px] font-bold tracking-[0.35em] uppercase text-glow-red">
              Ready to Begin
            </span>
            <div
              className="h-[1px] w-16"
              style={{ background: "linear-gradient(90deg, #CC0000, transparent)", boxShadow: "0 0 8px rgba(204,0,0,0.5)" }}
            />
          </div>

          {/* Headline with shimmer */}
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-[900] tracking-[-0.03em] leading-[0.9] text-shimmer whitespace-pre-line">
            {cta.headline}
          </h2>

          <p className="text-lg md:text-xl text-[#BBBBBB] max-w-lg mx-auto leading-relaxed font-light">
            {cta.subtext}
          </p>

          {/* Glowing CTA button */}
          <div className="pt-4">
            <a
              href={cta.button.href}
              className="inline-flex items-center gap-3 font-bold text-sm tracking-[0.1em] uppercase px-10 py-5 text-white transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
              style={{
                background: "#CC0000",
                boxShadow: "0 0 25px rgba(204,0,0,0.55), 0 0 50px rgba(204,0,0,0.25), 0 8px 30px rgba(204,0,0,0.35)",
                animation: "glow-pulse 2.5s ease-in-out infinite",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(204,0,0,0.85), 0 0 80px rgba(204,0,0,0.45), 0 12px 40px rgba(204,0,0,0.5)";
                (e.currentTarget as HTMLElement).style.animation = "none";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 25px rgba(204,0,0,0.55), 0 0 50px rgba(204,0,0,0.25), 0 8px 30px rgba(204,0,0,0.35)";
                (e.currentTarget as HTMLElement).style.animation = "glow-pulse 2.5s ease-in-out infinite";
              }}
            >
              {cta.button.label}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {cta.footer && (
            <p className="text-[var(--muted)] text-xs tracking-[0.15em] pt-2 uppercase">{cta.footer}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Target, Shield, Zap, Check } from "lucide-react";
import contentData from "@/data/content.json";
import SectionCorners from "./SectionCorners";

const iconMap: Record<string, any> = { Target, Shield, Zap, Check };

export default function AboutSection() {
  const { about } = contentData.home;

  return (
    <section id="about" className="py-24 md:py-36 bg-[#050505] relative overflow-hidden">
      <SectionCorners />
      {/* Ghost BG text */}
      <div className="absolute top-0 right-0 pointer-events-none select-none overflow-hidden">
        <span className="text-[20vw] font-[900] font-[Oswald] text-white/[0.02] tracking-tight uppercase leading-none">WHY</span>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-28">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="h-[2px] w-8"
                style={{ background: "#CC0000", boxShadow: "0 0 8px rgba(204,0,0,0.8), 0 0 20px rgba(204,0,0,0.4)" }}
              />
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-glow-red">
                {about.eyeBrow}
              </span>
            </div>

            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-[900] tracking-[-0.03em] text-white leading-[0.92] whitespace-pre-line">
              {about.headline}
            </h2>

            {/* Shining divider */}
            <div className="my-7 flex items-center gap-3">
              <div
                className="h-[3px] w-14"
                style={{
                  background: "linear-gradient(90deg, #CC0000, #FF4444, #CC0000)",
                  backgroundSize: "200% 100%",
                  boxShadow: "0 0 10px rgba(204,0,0,0.6), 0 0 20px rgba(204,0,0,0.3)",
                  animation: "shimmer 3s linear infinite",
                }}
              />
              <div className="h-[1px] flex-1 bg-[var(--border)]" />
            </div>

            <p className="text-[#BBBBBB] text-base md:text-[17px] leading-[1.8] max-w-sm">
              {about.subtext}
            </p>
          </motion.div>

          {/* Right - Feature grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {about.features.map((item, idx) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.08 * idx }}
                  className="group flex items-center gap-4 p-5 border-b md:odd:border-r border-[var(--border)] transition-all duration-300 cursor-default"
                  style={{ transition: "background 0.3s, box-shadow 0.3s" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(204,0,0,0.04)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "inset 0 0 0 1px rgba(204,0,0,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div
                    className="flex-shrink-0 w-9 h-9 bg-[var(--accent)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ boxShadow: "0 0 10px rgba(204,0,0,0.5)" }}
                  >
                    {Icon && <Icon className="w-4 h-4 text-white" strokeWidth={2.5} />}
                  </div>
                  <h3 className="text-[15px] font-[600] text-white leading-snug group-hover:text-[var(--accent)] transition-colors duration-300">
                    {item.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import contentData from "@/data/content.json";
import SectionCorners from "./SectionCorners";

export default function ProgramsSection() {
  const { programs } = contentData.home;

  return (
    <section id="programs" className="py-24 md:py-36 bg-[#050505] relative overflow-hidden">
      <SectionCorners />
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(204,0,0,0.4), transparent)", boxShadow: "0 0 8px rgba(204,0,0,0.2)" }}
      />
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-center justify-center">
        <span className="text-[22vw] font-[900] font-[Oswald] text-white/[0.015] tracking-tight uppercase">PRICE</span>
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <div
              className="h-[2px] w-8"
              style={{ background: "#CC0000", boxShadow: "0 0 8px rgba(204,0,0,0.8), 0 0 20px rgba(204,0,0,0.4)" }}
            />
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-glow-red">
              {programs.eyeBrow}
            </span>
          </div>
          <h2 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-[900] tracking-[-0.03em] text-white leading-[0.92]">
            {programs.headline}
          </h2>

          {/* What's Included box with glow border */}
          {programs.whatsIncluded && programs.whatsIncluded.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 p-7 md:p-9 bg-[#0A0A0A] max-w-3xl"
              style={{
                border: "1px solid rgba(204,0,0,0.3)",
                boxShadow: "0 0 20px rgba(204,0,0,0.08), inset 0 0 30px rgba(204,0,0,0.03)",
                animation: "glow-pulse 3s ease-in-out infinite",
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="h-[2px] w-6"
                  style={{ background: "#CC0000", boxShadow: "0 0 6px rgba(204,0,0,0.7)" }}
                />
                <h3 className="text-[11px] font-bold tracking-[0.3em] uppercase text-glow-red">
                  What&apos;s Included
                </h3>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {programs.whatsIncluded.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-[var(--muted)] hover:text-white transition-colors group">
                    <div
                      className="w-5 h-5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                      style={{ background: "rgba(204,0,0,0.15)", boxShadow: "0 0 6px rgba(204,0,0,0.3)" }}
                    >
                      <Check className="w-3 h-3 text-[var(--accent)]" strokeWidth={3} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {programs.items.map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 * idx }}
              className="relative flex flex-col group"
              style={
                program.highlighted
                  ? {
                      background: "#CC0000",
                      border: "1px solid #CC0000",
                      boxShadow: "0 0 30px rgba(204,0,0,0.45), 0 0 60px rgba(204,0,0,0.2), 0 20px 50px rgba(204,0,0,0.25)",
                      transform: "translateY(-6px)",
                      animation: "glow-pulse 2.5s ease-in-out infinite",
                    }
                  : {
                      background: "#0C0C0C",
                      border: "1px solid #1C1C1C",
                      transition: "border-color 0.3s, box-shadow 0.3s",
                    }
              }
              onMouseEnter={(e) => {
                if (!program.highlighted) {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(204,0,0,0.45)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(204,0,0,0.18), 0 0 40px rgba(204,0,0,0.08)";
                }
              }}
              onMouseLeave={(e) => {
                if (!program.highlighted) {
                  (e.currentTarget as HTMLElement).style.borderColor = "#1C1C1C";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }
              }}
            >
              {/* Shining top bar (non-highlighted) */}
              {!program.highlighted && (
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(90deg, transparent, #CC0000, transparent)",
                    boxShadow: "0 0 8px rgba(204,0,0,0.7)",
                  }}
                />
              )}

              <div className="p-7 md:p-8 flex flex-col flex-1">
                <span className={`text-[10px] font-bold tracking-[0.25em] uppercase mb-3 ${program.highlighted ? "text-white/70" : "text-glow-red"}`}>
                  {program.subtitle}
                </span>

                <h3 className={`text-xl md:text-2xl font-[800] font-[Oswald] tracking-wide mb-5 ${program.highlighted ? "text-white" : "text-white"}`}>
                  {program.title}
                </h3>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-4xl md:text-5xl font-[900] font-[Oswald] tracking-tight ${program.highlighted ? "text-white" : "text-shimmer"}`}
                    >
                      {program.price}
                    </span>
                    {program.period && (
                      <span className={`text-sm font-medium ${program.highlighted ? "text-white/60" : "text-[var(--muted)]"}`}>
                        {program.period}
                      </span>
                    )}
                  </div>
                </div>

                <div className={`h-[1px] w-full mb-6 ${program.highlighted ? "bg-white/20" : "bg-[var(--border)]"}`}
                  style={!program.highlighted ? { boxShadow: "0 0 4px rgba(204,0,0,0.1)" } : {}}
                />

                <ul className="space-y-3.5 mb-8 flex-1">
                  {program.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={program.highlighted
                          ? { background: "rgba(255,255,255,0.2)" }
                          : { background: "rgba(204,0,0,0.15)", boxShadow: "0 0 6px rgba(204,0,0,0.3)" }
                        }
                      >
                        <Check className={`w-3 h-3 ${program.highlighted ? "text-white" : "text-[var(--accent)]"}`} strokeWidth={3} />
                      </div>
                      <span className={`text-sm leading-snug ${program.highlighted ? "text-white/90" : "text-[var(--muted)]"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#cta"
                  className="w-full flex items-center justify-center gap-2 font-bold text-sm tracking-[0.1em] uppercase py-4 transition-all duration-200 hover:-translate-y-0.5"
                  style={
                    program.highlighted
                      ? { background: "white", color: "#CC0000", boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }
                      : { background: "#CC0000", color: "white", boxShadow: "0 0 12px rgba(204,0,0,0.3)" }
                  }
                  onMouseEnter={(e) => {
                    if (!program.highlighted) (e.currentTarget as HTMLElement).style.boxShadow = "0 0 25px rgba(204,0,0,0.55), 0 8px 20px rgba(204,0,0,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    if (!program.highlighted) (e.currentTarget as HTMLElement).style.boxShadow = "0 0 12px rgba(204,0,0,0.3)";
                  }}
                >
                  GET STARTED
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

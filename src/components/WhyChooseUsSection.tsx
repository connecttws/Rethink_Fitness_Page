"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import contentData from "@/data/content.json";
import SectionCorners from "./SectionCorners";

export default function WhyChooseUsSection() {
  const { whyChooseUs } = contentData.home;
  if (!whyChooseUs) return null;

  return (
    <section className="py-24 md:py-36 bg-[#0A0A0A] relative overflow-hidden">
      <SectionCorners />
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(204,0,0,0.4), transparent)", boxShadow: "0 0 8px rgba(204,0,0,0.2)" }}
      />

      <div className="absolute inset-0 flex items-center justify-end pr-4 pointer-events-none select-none overflow-hidden">
        <span className="text-[18vw] font-[900] font-[Oswald] text-white/[0.02] tracking-tight uppercase leading-none">WIN</span>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <div
              className="h-[2px] w-8"
              style={{ background: "#CC0000", boxShadow: "0 0 8px rgba(204,0,0,0.8), 0 0 20px rgba(204,0,0,0.4)" }}
            />
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-glow-red">
              The Difference
            </span>
          </div>
          <h2 className="text-[clamp(2.2rem,5vw,4rem)] font-[900] tracking-[-0.03em] text-white leading-[0.92]">
            {whyChooseUs.headline}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {whyChooseUs.features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 * idx }}
              className="group flex items-center gap-5 p-6 bg-[#0C0C0C] cursor-default transition-all duration-300"
              style={{ border: "1px solid #1C1C1C", transition: "border-color 0.3s, box-shadow 0.3s" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(204,0,0,0.45)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(204,0,0,0.14), inset 0 0 20px rgba(204,0,0,0.04)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#1C1C1C";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div
                className="flex-shrink-0 w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                style={{ background: "#CC0000", boxShadow: "0 0 10px rgba(204,0,0,0.5), 0 0 20px rgba(204,0,0,0.2)" }}
              >
                <Check className="w-5 h-5 text-white" strokeWidth={3} />
              </div>
              <h3 className="text-[15px] font-[700] text-white group-hover:text-[var(--accent)] transition-colors duration-300 leading-snug">
                {feature}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

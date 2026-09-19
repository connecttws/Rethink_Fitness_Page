"use client";

import { motion } from "framer-motion";
import contentData from "@/data/content.json";
import SectionCorners from "./SectionCorners";

export default function TransformationSection() {
  const { transformation } = contentData.home;

  return (
    <section id="process" className="py-24 md:py-36 bg-[#0A0A0A] relative overflow-hidden">
      <SectionCorners />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[var(--accent)]/[0.04] to-transparent pointer-events-none" />

      {/* Shining bottom divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(204,0,0,0.5), transparent)", boxShadow: "0 0 8px rgba(204,0,0,0.3)" }}
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-3 mb-5">
            <div
              className="h-[2px] w-8"
              style={{ background: "#CC0000", boxShadow: "0 0 8px rgba(204,0,0,0.8), 0 0 20px rgba(204,0,0,0.4)" }}
            />
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-glow-red">
              {transformation.eyeBrow}
            </span>
          </div>
          <h2 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-[900] tracking-[-0.03em] text-white leading-[0.92]">
            {transformation.headline}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          {/* Image with glowing frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1 relative"
          >
            {/* Outer glow border */}
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{ boxShadow: "0 0 0 1px rgba(204,0,0,0.25), 0 0 30px rgba(204,0,0,0.12), 0 0 60px rgba(204,0,0,0.06)" }}
            />
            <img src={transformation.image} alt="Before and After Transformation" className="w-full h-auto" />

            {/* Shining corners */}
            <div
              className="absolute top-0 left-0 w-14 h-14 border-t-[3px] border-l-[3px]"
              style={{ borderColor: "#CC0000", boxShadow: "-2px -2px 15px rgba(204,0,0,0.6), -4px -4px 30px rgba(204,0,0,0.25)" }}
            />
            <div
              className="absolute bottom-0 right-0 w-14 h-14 border-b-[3px] border-r-[3px]"
              style={{ borderColor: "rgba(204,0,0,0.5)", boxShadow: "2px 2px 12px rgba(204,0,0,0.35)" }}
            />

            {/* Floating label */}
            <div
              className="absolute -bottom-5 -right-2 md:-right-5 bg-[var(--accent)] px-5 py-3.5 float"
              style={{ boxShadow: "0 0 20px rgba(204,0,0,0.65), 0 0 40px rgba(204,0,0,0.3)" }}
            >
              <p className="text-white text-[11px] font-bold tracking-[0.2em] uppercase leading-tight">Proven<br />Results</p>
            </div>
          </motion.div>

          {/* Steps */}
          <div className="order-1 lg:order-2">
            {transformation.phases.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.12 * idx }}
                className="group flex items-start gap-6 py-7 border-b border-[var(--border)] last:border-b-0 px-2 transition-all duration-300"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(204,0,0,0.3)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "inset 3px 0 0 rgba(204,0,0,0.5)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Step number */}
                <span
                  className="text-[clamp(2rem,3.5vw,2.8rem)] font-[900] font-[Oswald] leading-none text-[#2A2A2A] group-hover:text-shimmer-red transition-all duration-300 select-none"
                  style={{
                    transition: "color 0.3s",
                  }}
                >
                  {item.num}
                </span>

                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg md:text-xl font-[800] font-[Oswald] text-white tracking-[0.04em] group-hover:text-[var(--accent)] transition-colors duration-300">
                      {item.phase}
                    </h3>
                    <div className="flex-1 h-[1px] bg-[var(--border)] group-hover:bg-[rgba(204,0,0,0.3)] transition-colors duration-300" />
                  </div>
                  <p className="text-[var(--muted)] leading-[1.75] text-sm md:text-[15px]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

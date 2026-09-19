"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import contentData from "@/data/content.json";
import SectionCorners from "./SectionCorners";

export default function TestimonialsSection() {
  const { testimonials } = contentData.home;
  const testimonialImages = testimonials.images;
  const [[page, direction], setPage] = useState([0, 0]);

  // Wrap around index safely
  const imageIndex = Math.abs(page % testimonialImages.length);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

  return (
    <section id="testimonials" className="py-24 md:py-36 bg-[#0A0A0A] relative overflow-hidden">
      <SectionCorners />
      {/* Ghost BG text */}
      <div className="absolute inset-0 flex items-center justify-start pl-4 pointer-events-none select-none overflow-hidden">
        <span className="text-[16vw] font-[900] font-[Oswald] text-white/[0.02] tracking-tight uppercase leading-none">
          RESULTS
        </span>
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="h-[2px] w-8"
                style={{ background: "#CC0000", boxShadow: "0 0 8px rgba(204,0,0,0.8), 0 0 20px rgba(204,0,0,0.4)" }}
              />
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-glow-red">
                {testimonials.eyeBrow}
              </span>
            </div>
            <h2 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-[900] tracking-[-0.03em] text-white leading-[0.92]">
              {testimonials.headline}
            </h2>
          </motion.div>
        </div>

        {/* Full Image Frame Carousel */}
        <div 
          className="relative w-full max-w-4xl mx-auto bg-[#0C0C0C] transition-all duration-300 group overflow-hidden aspect-[3/4] md:aspect-[4/3]"
          style={{
            border: "1px solid #1C1C1C",
            boxShadow: "0 0 30px rgba(0,0,0,0.6)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(204,0,0,0.4)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 0 35px rgba(204,0,0,0.25), inset 0 0 20px rgba(204,0,0,0.1)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "#1C1C1C";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(0,0,0,0.6)";
          }}
        >
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe < -10000 || offset.x < -50) {
                  paginate(1);
                } else if (swipe > 10000 || offset.x > 50) {
                  paginate(-1);
                }
              }}
              className="absolute inset-0 w-full h-full p-0 md:p-6 flex items-center justify-center cursor-grab active:cursor-grabbing"
            >
              <img
                src={testimonialImages[imageIndex]}
                alt={`Client Transformation ${imageIndex + 1}`}
                className="w-full h-full object-contain drop-shadow-2xl pointer-events-none"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls & Progress */}
        <div className="mt-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6 md:gap-8">
          {/* Controls */}
          <div className="flex gap-3 order-2 sm:order-1">
            <button
              onClick={() => paginate(-1)}
              className="w-12 h-12 flex items-center justify-center bg-[#0C0C0C] border border-[#1C1C1C] transition-all duration-300 group hover:border-[rgba(204,0,0,0.5)] hover:bg-[rgba(204,0,0,0.05)]"
              style={{
                boxShadow: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 15px rgba(204,0,0,0.2), inset 0 0 10px rgba(204,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-white group-hover:text-[var(--accent)] transition-colors duration-300" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="w-12 h-12 flex items-center justify-center bg-[#0C0C0C] border border-[#1C1C1C] transition-all duration-300 group hover:border-[rgba(204,0,0,0.5)] hover:bg-[rgba(204,0,0,0.05)]"
              style={{
                boxShadow: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 15px rgba(204,0,0,0.2), inset 0 0 10px rgba(204,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-white group-hover:text-[var(--accent)] transition-colors duration-300" />
            </button>
          </div>

          {/* Progress indicator */}
          <div className="flex-1 w-full flex items-center gap-4 order-1 sm:order-2">
            <div className="flex-1 h-[2px] bg-[#1C1C1C] relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 bottom-0 bg-[#CC0000]"
                style={{
                  boxShadow: "0 0 10px rgba(204,0,0,0.8)",
                }}
                animate={{
                  width: `${((imageIndex + 1) / testimonialImages.length) * 100}%`,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <span className="text-[12px] text-[var(--muted)] font-bold tracking-[0.2em] tabular-nums">
              {String(imageIndex + 1).padStart(2, "0")} / {String(testimonialImages.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

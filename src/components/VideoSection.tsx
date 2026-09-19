"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import contentData from "@/data/content.json";
import SectionCorners from "./SectionCorners";

export default function VideoSection() {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const { video } = contentData.home;

  return (
    <section className="py-24 md:py-36 bg-[#050505] relative overflow-hidden">
      <SectionCorners />
      {/* Ghost BG text */}
      <div className="absolute inset-0 flex items-center justify-end pr-4 pointer-events-none select-none overflow-hidden">
        <span className="text-[18vw] font-[900] font-[Oswald] text-white/[0.02] tracking-tight uppercase leading-none">
          STORY
        </span>
      </div>

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <div
                className="h-[2px] w-8"
                style={{ background: "#CC0000", boxShadow: "0 0 8px rgba(204,0,0,0.8), 0 0 20px rgba(204,0,0,0.4)" }}
              />
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-glow-red">
                {video.eyeBrow}
              </span>
              <div
                className="h-[2px] w-8"
                style={{ background: "#CC0000", boxShadow: "0 0 8px rgba(204,0,0,0.8), 0 0 20px rgba(204,0,0,0.4)" }}
              />
            </div>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-[900] tracking-[-0.03em] text-white leading-[0.92] mb-5">
              {video.headline}
            </h2>
            <p className="text-[#BBBBBB] text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              {video.subtext}
            </p>
          </motion.div>

          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative w-full overflow-hidden"
            style={{
              boxShadow: "0 20px 60px -15px rgba(0,0,0,0.5), 0 0 0 1px rgba(204,0,0,0.25)",
            }}
          >
            {/* Outer glow border */}
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{ boxShadow: "inset 0 0 0 1px rgba(204,0,0,0.3), 0 0 30px rgba(204,0,0,0.15)" }}
            />
            <div className="relative pt-[56.25%]">
              {!videoPlaying ? (
                <div
                  className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                  onClick={() => setVideoPlaying(true)}
                  role="button"
                  aria-label="Play video"
                >
                  <img
                    src={video.thumbnail}
                    alt="Video Thumbnail"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
                  
                  {/* Play Button */}
                  <div
                    className="relative z-10 w-20 h-20 md:w-24 md:h-24 bg-[var(--accent)] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{
                      boxShadow: "0 0 30px rgba(204,0,0,0.6), 0 0 60px rgba(204,0,0,0.3)",
                      animation: "glow-pulse 2.5s ease-in-out infinite"
                    }}
                  >
                    <Play className="w-7 h-7 md:w-9 md:h-9 text-white ml-1" fill="currentColor" />
                  </div>
                  
                  {/* Duration badge */}
                  <div className="absolute bottom-5 right-5 bg-[#050505]/90 border border-[rgba(204,0,0,0.4)] backdrop-blur-sm px-4 py-2 text-[11px] font-bold text-white tracking-[0.15em]">
                    {video.duration}
                  </div>
                </div>
              ) : (
                <iframe
                  className="absolute inset-0 w-full h-full z-20"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Rethink Fitness - Video Sales Letter"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </motion.div>

          {/* Video Stats */}
          <div className="mt-10 md:mt-14 grid grid-cols-3 gap-3 md:gap-5">
            {video.stats.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * idx }}
                className="bg-[#0C0C0C] p-6 md:p-8 border border-[var(--border)] text-center transition-all duration-300 hover:border-[rgba(204,0,0,0.4)] group"
                style={{
                  transition: "border-color 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(204,0,0,0.1), inset 0 0 15px rgba(204,0,0,0.05)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <p className="text-3xl md:text-4xl font-[900] text-shimmer font-[Oswald] tracking-tight leading-none group-hover:text-white transition-colors duration-300">
                  {item.value}
                </p>
                <p className="text-[10px] md:text-[11px] text-[var(--muted)] mt-2 uppercase tracking-[0.2em] font-medium">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

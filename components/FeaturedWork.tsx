"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const clients = [
  {
    name: "SIXT",
    tagline: "An extra 3m clicks regionally through SEO",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1400",
    category: "SEO & Content",
  },
  {
    name: "Dojo",
    tagline: "200% increase in organic visibility",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1400",
    category: "Digital PR",
  },
  {
    name: "Magnet Trade",
    tagline: "Record-breaking coverage across 50+ publications",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=1400",
    category: "Content Marketing",
  },
  {
    name: "Parkdean Resorts",
    tagline: "50% uplift in organic sessions YoY",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1400",
    category: "SEO",
  },
  {
    name: "Revolution Beauty",
    tagline: "#1 for 'makeup' UK-wide in 6 months",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1400",
    category: "SEO & PR",
  },
  {
    name: "Pooky",
    tagline: "300% growth in organic traffic",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1400",
    category: "Content & SEO",
  },
];

export default function FeaturedWork() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="work" className="bg-transparent py-4">
      <div className="bg-black rounded-[48px] p-10 md:p-20 overflow-hidden shadow-2xl relative">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mint/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="max-w-[1300px] mx-auto relative z-10">
          {/* Section label */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-24 gap-8">
            <h2
              className="text-[clamp(4rem,8vw,8rem)] font-bold text-white tracking-[-0.05em] leading-[0.85] uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Featured
              <br />Work
            </h2>
            <button className="group flex items-center gap-2 text-sm font-bold text-white border border-white/20 rounded-full px-10 py-4 hover:bg-white hover:text-black transition-all duration-500">
              VIEW ALL WORK 
              <span className="group-hover:translate-x-1 transition-transform">↗</span>
            </button>
          </div>

          {/* Split sticky layout */}
          <div className="flex flex-col lg:flex-row gap-24">
            {/* Left: Client list */}
            <div className="lg:w-2/5 flex flex-col">
              {clients.map((client, i) => (
                <button
                  key={client.name}
                  onMouseEnter={() => setActiveIndex(i)}
                  onClick={() => setActiveIndex(i)}
                  className={`group text-left py-10 border-b border-white/10 transition-all duration-500 ${
                    activeIndex === i ? "opacity-100" : "opacity-30 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {client.name}
                    </span>
                    <span className="text-[10px] font-black text-mint uppercase tracking-[0.3em]">
                      {client.category}
                    </span>
                  </div>
                  <AnimatePresence mode="wait">
                    {activeIndex === i && (
                      <motion.p 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-xl text-white/50 font-medium"
                      >
                        {client.tagline}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </button>
              ))}
            </div>

            {/* Right: Active project image */}
            <div className="lg:w-3/5 lg:sticky lg:top-32 h-[600px] md:h-[750px] rounded-[40px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(20px)" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full relative"
                >
                  <Image
                    src={clients[activeIndex].image}
                    alt={clients[activeIndex].name}
                    fill
                    sizes="60vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute bottom-16 left-16 right-16">
                    <p className="text-mint text-[10px] font-black uppercase tracking-[0.4em] mb-6">
                      {clients[activeIndex].category}
                    </p>
                    <h3
                      className="text-white text-4xl md:text-5xl lg:text-7xl font-bold tracking-[-0.04em] leading-[1] uppercase"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {clients[activeIndex].tagline}
                    </h3>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
    <section id="work" className="bg-black py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section label */}
        <div className="flex items-center justify-between mb-16">
          <h2
            className="text-6xl md:text-8xl font-black text-white tracking-[-0.04em] leading-none"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Featured
            <br />Work
          </h2>
          <button className="hidden md:flex items-center gap-2 text-sm font-bold text-white/60 border border-white/20 rounded-full px-6 py-2.5 hover:border-white hover:text-white transition-all">
            View all work <span>↗</span>
          </button>
        </div>

        {/* Split sticky layout */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Client list */}
          <div className="lg:w-2/5 flex flex-col gap-1">
            {clients.map((client, i) => (
              <button
                key={client.name}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => setActiveIndex(i)}
                className={`text-left px-4 py-5 rounded-xl transition-all duration-200 border ${
                  activeIndex === i
                    ? "bg-white/10 border-white/20"
                    : "border-transparent hover:bg-white/5"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-2xl md:text-3xl font-black tracking-tight transition-colors ${
                      activeIndex === i ? "text-white" : "text-white/40"
                    }`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {client.name}
                  </span>
                  <span className="text-xs font-bold text-[#a8f0d8] uppercase tracking-widest">
                    {client.category}
                  </span>
                </div>
                {activeIndex === i && (
                  <p className="text-sm text-white/60 mt-1">{client.tagline}</p>
                )}
              </button>
            ))}
          </div>

          {/* Right: Active project image */}
          <div className="lg:w-3/5 lg:sticky lg:top-24 h-[400px] md:h-[550px] lg:h-[600px] rounded-3xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full relative"
              >
                <Image
                  src={clients[activeIndex].image}
                  alt={clients[activeIndex].name}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <p className="text-[#a8f0d8] text-xs font-bold uppercase tracking-widest mb-2">
                    {clients[activeIndex].category}
                  </p>
                  <h3
                    className="text-white text-4xl md:text-5xl font-black tracking-[-0.04em]"
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
    </section>
  );
}

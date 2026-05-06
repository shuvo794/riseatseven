"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const awards = [
  { label: "GLOBAL SEARCH AWARDS", icon: "🏆" },
  { label: "THE DRUM", icon: "🥁" },
  { label: "UK SOCIAL MEDIA AWARDS", icon: "📱" },
  { label: "CONTENT AWARDS", icon: "📄" },
];

export default function Hero() {
  return (
    <div className="pb-10 bg-transparent">
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden rounded-[48px] bg-black">
        {/* Background Mesh Gradient */}
        <div className="absolute inset-0 z-0 bg-black">
          <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-purple-900/30 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-900/20 blur-[120px] rounded-full" />
          <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-orange-900/20 blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-[1600px] mx-auto w-full pt-32 pb-40">
          {/* Award badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-8 mb-20 sm:mb-24"
          >
            <div className="text-[10px] sm:text-[12px] font-black uppercase tracking-[0.4em] text-white/60 flex flex-col items-center">
              <span>#1 MOST RECOMMENDED</span>
              <span>CONTENT MARKETING AGENCY</span>
            </div>
            <div className="flex items-center gap-6 sm:gap-12 flex-wrap justify-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500 scale-90 sm:scale-110">
              <div className="h-6 w-auto flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[8px] font-black">A</div>
                <span className="text-[9px] font-bold tracking-widest">DRUM</span>
              </div>
              <div className="h-6 w-auto flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[8px] font-black">S</div>
                <span className="text-[9px] font-bold tracking-widest">SEARCH</span>
              </div>
              <div className="h-6 w-auto flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[8px] font-black">C</div>
                <span className="text-[9px] font-bold tracking-widest">CONTENT</span>
              </div>
            </div>
          </motion.div>

          {/* Headline */}
          <div className="flex flex-col items-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-[clamp(4rem,10vw,9rem)] font-bold text-white leading-[0.82] tracking-[-0.05em] mb-2 sm:mb-4 uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              We Create
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex items-center justify-center gap-2 sm:gap-4 lg:gap-6"
            >
              <span
                className="text-[clamp(4rem,10vw,9rem)] font-bold text-white leading-[0.82] tracking-[-0.05em] uppercase"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Category
              </span>

              {/* Pill Image */}
              <div className="relative w-[18vw] h-[11vw] max-w-[200px] max-h-[120px] rounded-full overflow-hidden border border-white/10 shadow-2xl mt-1 sm:mt-2 mx-1 sm:mx-4">
                <Image
                  src="/images/hero-pill.png"
                  alt="Emirates logo"
                  fill
                  sizes="20vw"
                  className="object-cover"
                />
              </div>

              <span
                className="text-[clamp(4rem,10vw,9rem)] font-bold text-white leading-[0.82] tracking-[-0.05em] uppercase"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Leaders
              </span>
            </motion.div>
          </div>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 sm:mt-16 text-[16px] sm:text-[22px] md:text-[28px] lg:text-[34px] font-medium text-white/90 tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            on every searchable platform
          </motion.p>
        </div>

        {/* Bottom text */}
        <div className="absolute bottom-10 left-0 right-0 px-[50px] flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-0 z-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-[12px] sm:text-[14px] text-white/80 leading-relaxed font-normal whitespace-nowrap"
          >
            Organic media planners creating, distributing & optimising
            <br />
            <span className="text-white font-bold mr-[6px]">search-first</span>
            content for SEO, Social, PR, Ai and LLM search
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-[12px] sm:text-[14px] text-white/80 sm:text-right font-normal leading-relaxed"
          >
            4 Global Offices serving
            <br />
            <span className="text-white font-bold uppercase">
              UK, USA (New York) & EU
            </span>
          </motion.p>
        </div>
      </section>
    </div>
  );
}

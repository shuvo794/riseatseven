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
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background blurred image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
          style={{ filter: "blur(20px) brightness(0.7)", transform: "scale(1.1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-[1600px] mx-auto w-full">
        {/* Award badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-6 mb-12 sm:mb-16"
        >
          <div className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.35em] text-white/90 flex flex-col items-center">
            <span>#1 MOST RECOMMENDED</span>
            <span>CONTENT MARKETING AGENCY</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-8 flex-wrap justify-center opacity-80 scale-90 sm:scale-100">
            {/* Laurel Wreath Mockups */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="fill-white w-full h-full"><path d="M12 21.5c-5.25 0-9.5-4.25-9.5-9.5S6.75 2.5 12 2.5s9.5 4.25 9.5 9.5-4.25 9.5-9.5 9.5zm0-17.5c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zM7 12h2v2H7v-2zm8 0h2v2h-2v-2zm-4 4h2v2h-2v-2z" opacity="0.5"/></svg>
              </div>
              <div className="flex flex-col text-[8px] font-black leading-none text-left">
                <span>GLOBAL</span>
                <span>SEARCH</span>
                <span>AWARDS</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
               <div className="w-8 h-4 bg-white/20 rounded-sm flex items-center justify-center text-[8px] font-black">DRUM</div>
               <div className="flex flex-col text-[8px] font-black leading-none text-left border-l border-white/20 pl-2">
                <span>The Drum</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
               <div className="w-6 h-6 border border-white/20 rounded-full flex items-center justify-center text-[8px] font-black">SM</div>
               <div className="flex flex-col text-[8px] font-black leading-none text-left">
                <span>UK SOCIAL</span>
                <span>MEDIA AWARDS</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
               <div className="w-6 h-6 bg-white/10 flex items-center justify-center text-[8px] font-black">C</div>
               <div className="flex flex-col text-[8px] font-black leading-none text-left">
                <span>CONTENT</span>
                <span>AWARDS</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Headline */}
        <div className="flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[16vw] sm:text-[14vw] md:text-[12vw] lg:text-[10vw] font-bold text-white leading-[0.85] tracking-[-0.06em] mb-2 sm:mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            We Create
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-3 sm:gap-6"
          >
            <span
              className="text-[16vw] sm:text-[14vw] md:text-[12vw] lg:text-[10vw] font-bold text-white leading-[0.85] tracking-[-0.06em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Category
            </span>

            {/* Pill Image */}
            <div className="relative w-[20vw] h-[13vw] sm:w-[15vw] sm:h-[10vw] lg:w-[12vw] lg:h-[8vw] rounded-[3vw] sm:rounded-[2.5vw] overflow-hidden border border-white/20 shadow-2xl mt-2 sm:mt-4">
              <Image
                src="/images/hero-pill.png"
                alt="Emirates logo"
                fill
                sizes="(max-width: 768px) 20vw, (max-width: 1024px) 15vw, 12vw"
                className="object-cover"
              />
            </div>

            <span
              className="text-[16vw] sm:text-[14vw] md:text-[12vw] lg:text-[10vw] font-bold text-white leading-[0.85] tracking-[-0.06em]"
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
          className="mt-8 sm:mt-12 text-[18px] sm:text-[24px] md:text-[32px] font-medium text-white tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          on every searchable platform
        </motion.p>
      </div>

      {/* Bottom text */}
      <div className="absolute bottom-10 left-0 right-0 px-8 sm:px-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-0 z-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-[12px] sm:text-[14px] text-white/80 max-w-[320px] leading-relaxed font-normal"
        >
          Organic media planners creating, distributing & optimising<br />
          <span className="text-white font-bold">search-first</span> content for SEO, Social, PR, Ai and LLM search
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-[12px] sm:text-[14px] text-white/80 sm:text-right font-normal leading-relaxed"
        >
          4 Global Offices serving<br />
          <span className="text-white font-bold uppercase">UK, USA (New York) & EU</span>
        </motion.p>
      </div>
    </section>
  );
}


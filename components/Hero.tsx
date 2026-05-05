"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-100px)] flex flex-col justify-between overflow-hidden bg-black">
      {/* Background blurred image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2400"
          alt="hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-50"
          style={{ filter: "blur(60px)", transform: "scale(1.1)" }}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center pt-16 px-4">
        {/* Award badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-4 mb-10"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/60">
            #1 Most Recommended Content Marketing Agency
          </p>
          <div className="flex items-center gap-6 opacity-50">
            {/* Stylized award icons as text */}
            <span className="text-white text-[10px] font-bold border border-white/30 px-2 py-1 rounded">Global<br/>Search<br/>Awards</span>
            <span className="text-white text-[10px] font-bold border border-white/30 px-2 py-1 rounded">The<br/>Drum</span>
            <span className="text-white text-[10px] font-bold border border-white/30 px-2 py-1 rounded">UK Social<br/>Media<br/>Awards</span>
            <span className="text-white text-[10px] font-bold border border-white/30 px-2 py-1 rounded">Content<br/>Awards</span>
          </div>
        </motion.div>

        {/* Main headline: We Create */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[14vw] md:text-[12vw] lg:text-[11vw] font-black text-white leading-none tracking-[-0.04em]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          We Create
        </motion.h1>

        {/* Category [image] Leaders */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="flex items-center justify-center gap-4 md:gap-6 flex-wrap"
        >
          <span
            className="text-[14vw] md:text-[12vw] lg:text-[11vw] font-black text-white leading-none tracking-[-0.04em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Category
          </span>

          {/* Embedded image pill */}
          <div className="relative w-[18vw] h-[12vw] md:w-[13vw] md:h-[8.5vw] lg:w-[10vw] lg:h-[7vw] rounded-[2vw] overflow-hidden border-2 border-white/10 flex-shrink-0 self-center mt-1">
            <Image
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=600"
              alt="category leaders"
              fill
              sizes="(max-width: 768px) 18vw, (max-width: 1024px) 13vw, 10vw"
              className="object-cover"
            />
          </div>

          <span
            className="text-[14vw] md:text-[12vw] lg:text-[11vw] font-black text-white leading-none tracking-[-0.04em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Leaders
          </span>
        </motion.div>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 text-xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          on every searchable platform
        </motion.p>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end px-8 md:px-12 pb-10 pt-12 gap-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-sm text-white/60 max-w-xs leading-relaxed"
        >
          Organic media planners creating, distributing &amp; optimising{" "}
          <span className="text-white font-semibold">search-first</span> content
          for SEO, Social, PR, Ai and LLM search
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-sm text-white/60 md:text-right"
        >
          4 Global Offices serving
          <br />
          <span className="text-white font-semibold">UK, USA (New York) &amp; EU</span>
        </motion.p>
      </div>
    </section>
  );
}

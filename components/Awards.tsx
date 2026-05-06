"use client";
import React from "react";
import { motion } from "framer-motion";

const logos = [
  "Monzo", "JD", "SIXT", "PrettyLittleThing", "Dojo",
  "Lloyds Pharmacy", "Parkdean", "Revolution Beauty", "Pooky", "Magnet Trade",
];

export default function Awards() {
  return (
    <section className="bg-transparent py-4">
      <div className="bg-black rounded-[48px] py-32 px-8 md:px-16 overflow-hidden relative shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#a3e7d8]/30 to-transparent" />
        
        <div className="max-w-[1300px] mx-auto mb-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center"
          >
            <p className="text-[#a3e7d8] text-xs font-black uppercase tracking-[0.4em] mb-6">
              Industry Recognition
            </p>
            <h2
              className="text-[25vw] md:text-[20vw] lg:text-[16vw] font-bold text-white leading-[0.75] tracking-[-0.06em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              120+
            </h2>
            <div className="flex flex-col items-center -mt-6 sm:-mt-10 md:-mt-16">
              <p
                className="text-4xl md:text-6xl lg:text-8xl font-bold text-white tracking-[-0.04em]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Awards
              </p>
              <p className="text-white/40 text-lg md:text-xl mt-8 font-medium max-w-[400px]">
                Impact that moves metrics and defines industries.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Scrolling logo ticker */}
        <div className="relative overflow-hidden border-t border-white/10 pt-12">
          <div className="flex gap-16 md:gap-24 animate-scroll-left whitespace-nowrap opacity-40 hover:opacity-80 transition-opacity duration-500">
            {[...logos, ...logos, ...logos].map((logo, i) => (
              <span
                key={i}
                className="text-3xl md:text-5xl font-bold text-white tracking-tight cursor-default flex-shrink-0"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
      `}</style>
    </section>
  );
}

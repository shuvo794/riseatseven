"use client";
import React from "react";
import { motion } from "framer-motion";

const logos = [
  "Monzo", "JD", "SIXT", "PrettyLittleThing", "Dojo",
  "Lloyds Pharmacy", "Parkdean", "Revolution Beauty", "Pooky", "Magnet Trade",
];

export default function Awards() {
  return (
    <section className="bg-black py-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <p className="text-[#a8f0d8] text-sm font-bold uppercase tracking-[0.3em] mb-4">
            Industry Recognition
          </p>
          <h2
            className="text-[20vw] md:text-[15vw] lg:text-[12vw] font-black text-white leading-none tracking-[-0.04em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            120+
          </h2>
          <p
            className="text-3xl md:text-5xl font-black text-white tracking-[-0.03em] -mt-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Awards
          </p>
          <p className="text-white/50 text-xl mt-6 font-medium">Impact that moves metrics</p>
        </motion.div>
      </div>

      {/* Scrolling logo ticker */}
      <div className="relative overflow-hidden">
        <div className="flex gap-12 animate-scroll-left whitespace-nowrap">
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <span
              key={i}
              className="text-2xl font-black text-white/20 hover:text-white/60 transition-colors cursor-default flex-shrink-0"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {logo}
            </span>
          ))}
        </div>
      </div>

      {/* Add scroll animation via global CSS below */}
      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
        }
      `}</style>
    </section>
  );
}

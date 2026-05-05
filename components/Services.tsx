"use client";
import React from "react";
import { motion } from "framer-motion";

const services = [
  { name: "Content Marketing", icon: "✦" },
  { name: "Search Engine Optimisation", icon: "◎" },
  { name: "Creative Digital PR", icon: "⬡" },
  { name: "Paid Media & Creative", icon: "◈" },
  { name: "Social Media & Influencer", icon: "◉" },
  { name: "Creative Design & Video", icon: "◇" },
];

export default function Services() {
  return (
    <section id="services" className="bg-black py-24 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-8xl font-black text-white tracking-[-0.04em] leading-none mb-16"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-white/10">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="border-b border-r border-white/10 p-8 md:p-10 group cursor-pointer hover:bg-white/5 transition-colors"
            >
              <div className="text-4xl text-[#a8f0d8] mb-6">{service.icon}</div>
              <h3
                className="text-2xl md:text-3xl font-black text-white tracking-[-0.03em] mb-4 group-hover:text-[#a8f0d8] transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {service.name}
              </h3>
              <p className="text-white/40 text-sm font-medium mb-8">
                We build search-first content strategies that drive organic growth and brand awareness.
              </p>
              <span className="text-[#a8f0d8] text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <span>→</span>
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

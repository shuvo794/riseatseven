"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Rise at Seven transformed our digital presence. We went from invisible to dominating search in under a year.",
    author: "Head of Digital",
    company: "Parkdean Resorts",
    logo: null,
  },
  {
    quote:
      "The team's reactive approach is unlike anything I've seen. They generated headlines within hours of a trend breaking.",
    author: "Marketing Director",
    company: "Revolution Beauty",
    logo: null,
  },
  {
    quote:
      "Not just an agency — a true extension of our team. The results speak for themselves.",
    author: "CMO",
    company: "Dojo",
    logo: null,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-black py-24 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#a8f0d8] text-sm font-bold uppercase tracking-[0.3em] mb-16"
        >
          Client Stories
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-black p-10 md:p-12 flex flex-col"
            >
              <span className="text-5xl text-[#a8f0d8] font-black mb-6" style={{ fontFamily: "var(--font-display)" }}>
                "
              </span>
              <p className="text-lg md:text-xl font-semibold text-white/80 leading-relaxed flex-1 mb-10">
                {t.quote}
              </p>
              <div>
                <p className="text-white font-bold text-sm">{t.author}</p>
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest mt-1">
                  {t.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const expertise = [
  "Digital PR",
  "Organic Social & Content",
  "Search & Growth Strategy",
  "Content Experience",
  "Data & Insights",
  "Onsite SEO",
];

export default function Expertise() {
  return (
    <section className="bg-[#f2f2f2] text-black py-24 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Large headline with embedded image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2
            className="text-[8vw] md:text-[6vw] lg:text-[4.5vw] font-black text-black leading-[0.95] tracking-[-0.04em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Not Algorithms
            <br />
            Chasing{" "}
            <span className="inline-block align-middle w-[14vw] md:w-[10vw] lg:w-[7vw] h-[9vw] md:h-[6.5vw] lg:h-[4.5vw] rounded-[1.2vw] overflow-hidden relative mx-3">
              <Image
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=600"
                alt="speaker on stage"
                fill
                sizes="(max-width: 768px) 14vw, (max-width: 1024px) 10vw, 7vw"
                className="object-cover"
              />
            </span>
            <br />
            Consumers
          </h2>
        </motion.div>

        {/* Expertise grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {expertise.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-white rounded-2xl px-8 py-7 group hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
            >
              <span
                className="text-xl md:text-2xl font-black tracking-tight group-hover:text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function DrivingDemand() {
  return (
    <section className="bg-[#f2f2f2] text-black py-24 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Heading row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end gap-8 mb-16">
          <div className="flex-1">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-[10vw] md:text-[7vw] lg:text-[5vw] font-black text-black leading-[0.9] tracking-[-0.04em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Driving Demand{" "}
              {/* Inline image */}
              <span className="inline-block align-middle w-[12vw] md:w-[8vw] lg:w-[5vw] h-[8vw] md:h-[5.5vw] lg:h-[3.5vw] rounded-[1vw] overflow-hidden relative mx-2">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
                  alt="person"
                  fill
                  sizes="(max-width: 768px) 12vw, (max-width: 1024px) 8vw, 5vw"
                  className="object-cover"
                />
              </span>{" "}
              &amp; Discovery
            </motion.h2>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2"
          >
            <p className="text-xl md:text-2xl font-medium text-black/70 leading-relaxed mb-10">
              A global team of search-first content marketers. We create, distribute &amp; optimise content that people actually search for — across SEO, Digital PR, Social, Paid and AI search.
            </p>
            <div className="flex items-center gap-6 flex-wrap">
              <button className="bg-black text-white px-8 py-3.5 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-[#a8f0d8] hover:text-black transition-colors">
                Our Story <span>↗</span>
              </button>
              <button className="text-sm font-bold text-black border-b-2 border-black pb-0.5 hover:text-[#333] transition-colors flex items-center gap-1">
                Our Services <span>↗</span>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:w-1/2 grid grid-cols-2 gap-4"
          >
            {["SEO & Content", "Digital PR", "Social & Influencer", "Paid Media"].map((s) => (
              <div key={s} className="bg-white rounded-2xl p-6 font-bold text-lg">
                {s}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

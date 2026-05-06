"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function DrivingDemand() {
  return (
    <section className="bg-transparent py-4">
      <div className="bg-white rounded-[48px] p-10 md:p-20 shadow-sm overflow-hidden border border-black/5">
        <div className="max-w-[1300px] mx-auto">
          {/* Heading row */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end gap-10 mb-20">
            <div className="flex-1">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold text-black leading-[0.9] tracking-[-0.05em] uppercase"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Driving Demand{" "}
                {/* Inline image */}
                <span className="inline-block align-middle w-[1.5em] h-[0.8em] rounded-full overflow-hidden relative mx-2 border border-black/5">
                  <Image
                    src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=400"
                    alt="tech"
                    fill
                    sizes="20vw"
                    className="object-cover"
                  />
                </span>{" "}
                & Discovery
              </motion.h2>
            </div>
          </div>

          {/* Two-column layout */}
          <div className="flex flex-col lg:flex-row gap-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <p className="text-2xl md:text-3xl font-medium text-black/60 leading-[1.3] tracking-tight mb-12 max-w-[600px]">
                A global team of search-first content marketers. We create, distribute & optimise content that people actually search for.
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <button className="group bg-black text-white px-12 py-5 rounded-full font-bold text-sm flex items-center gap-3 hover:bg-mint hover:text-black transition-all duration-500">
                  OUR STORY 
                  <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500">↗</span>
                </button>
                <button className="group text-sm font-bold text-black px-8 py-5 rounded-full border border-black/10 hover:bg-black/5 transition-all duration-500 flex items-center gap-2">
                  OUR SERVICES
                  <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500">↗</span>
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {[
                { title: "SEO & CONTENT", desc: "Strategy & Execution" },
                { title: "DIGITAL PR", desc: "Creative Campaigning" },
                { title: "SOCIAL & INFLUENCER", desc: "Platform Native" },
                { title: "PAID MEDIA", desc: "Full-funnel Performance" }
              ].map((s) => (
                <div key={s.title} className="group bg-gray-50 rounded-3xl p-10 hover:bg-mint transition-all duration-500 cursor-default border border-black/[0.03]">
                  <h3 className="font-bold text-2xl mb-2 text-black transition-colors">{s.title}</h3>
                  <p className="text-xs text-black/40 group-hover:text-black/60 transition-colors font-bold uppercase tracking-[0.2em]">{s.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

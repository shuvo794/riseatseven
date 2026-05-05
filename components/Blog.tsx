"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const posts = [
  {
    category: "Insight",
    title: "How to capitalise on AI search before your competitors do",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    date: "May 2025",
  },
  {
    category: "Case Study",
    title: "How we helped Dojo achieve 200% organic growth in 6 months",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    date: "Apr 2025",
  },
  {
    category: "Trend Report",
    title: "The 2025 State of Search: What's changing and what you should do",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
    date: "Mar 2025",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="bg-[#f2f2f2] text-black py-24 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-black tracking-[-0.04em] leading-none"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What&apos;s New
          </motion.h2>
          <button className="hidden md:flex items-center gap-2 text-sm font-bold text-black border border-black/20 rounded-full px-6 py-2.5 hover:bg-black hover:text-white transition-all">
            View all <span>→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-black text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <p className="text-xs text-black/40 font-bold uppercase tracking-widest mb-2">
                {post.date}
              </p>
              <h3
                className="text-xl md:text-2xl font-black text-black tracking-[-0.03em] leading-tight group-hover:text-[#333] transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {post.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

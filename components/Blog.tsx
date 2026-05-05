"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const posts = [
  {
    title: "How to Win at Search-First Creative",
    date: "May 10, 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
  },
  {
    title: "The Rise of AI in Content Marketing",
    date: "April 28, 2024",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Why Digital PR is the Future of SEO",
    date: "April 15, 2024",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop",
  },
];

const Blog = () => {
  return (
    <section id="news" className="bg-brand-dark py-24 lg:py-40 px-6 lg:px-12">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-8xl font-display font-black leading-none"
          >
            WHAT'S <br /> NEW
          </motion.h2>
          <button className="hidden lg:block text-sm font-bold uppercase tracking-widest border-b-2 border-brand-mint pb-2 hover:text-brand-mint transition-colors">
            View all news
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl mb-6">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-sm font-bold text-brand-mint uppercase tracking-widest mb-3">{post.date}</p>
              <h3 className="text-2xl lg:text-3xl font-display font-black leading-tight group-hover:text-gray-300 transition-colors">
                {post.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

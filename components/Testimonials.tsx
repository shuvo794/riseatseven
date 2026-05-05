"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Rise at Seven are the best in the business. Their search-first approach has transformed our digital presence.",
    author: "Marketing Director, Red Bull",
  },
  {
    quote: "A truly creative agency that understands the technical side of search. They deliver results every time.",
    author: "Head of Digital, Playstation",
  },
  {
    quote: "The energy and passion they bring to every project is infectious. They are a pleasure to work with.",
    author: "CEO, Nike",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-brand-grey py-24 lg:py-40 px-6 lg:px-12 text-brand-text-dark">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col"
            >
              <div className="text-4xl lg:text-5xl font-display font-black text-brand-mint mb-8">"</div>
              <p className="text-xl lg:text-2xl font-semibold mb-8 leading-relaxed">
                {item.quote}
              </p>
              <div className="mt-auto">
                <p className="font-bold uppercase tracking-widest text-sm">— {item.author}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

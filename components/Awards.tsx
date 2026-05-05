"use client";

import React from "react";
import { motion } from "framer-motion";

const awards = [
  "Global Agency of the Year",
  "Search Agency of the Year",
  "Best Use of Search",
  "Most Effective Agency",
  "Digital Agency of the Year",
  "Creative Agency of the Year",
];

const Awards = () => {
  return (
    <section className="bg-brand-mint py-20 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
          className="flex space-x-20 items-center"
        >
          {[...awards, ...awards].map((award, i) => (
            <span
              key={i}
              className="text-4xl lg:text-7xl font-display font-black text-brand-dark uppercase tracking-tighter"
            >
              {award} •
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;

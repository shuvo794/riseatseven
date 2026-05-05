"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Organic Search (SEO)",
    description: "Dominating the search results through technical excellence and creative content.",
  },
  {
    title: "Content Marketing",
    description: "Stories that people want to read, share, and search for.",
  },
  {
    title: "Digital PR",
    description: "Earning links and mentions from the world's biggest publications.",
  },
  {
    title: "Paid Media",
    description: "Maximizing ROI through data-driven search and social advertising.",
  },
  {
    title: "Creative & Design",
    description: "Visual identities and experiences that stand out in a crowded digital world.",
  },
  {
    title: "Strategy & Data",
    description: "Turning insights into actionable growth strategies.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-brand-off-white py-24 lg:py-40 px-6 lg:px-12 text-brand-text-dark">
      <div className="max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl lg:text-8xl font-display font-black leading-none mb-6">
            WHAT WE <br /> DO
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-2xl">
            Our search-first approach combines data, creativity, and technical expertise to deliver results that matter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-black/10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 lg:p-16 border-b border-r border-black/10 group cursor-pointer hover:bg-black transition-colors duration-500"
            >
              <h3 className="text-2xl lg:text-3xl font-display font-black mb-6 group-hover:text-brand-mint transition-colors">
                {service.title}
              </h3>
              <p className="text-lg text-gray-600 group-hover:text-gray-400 transition-colors mb-10">
                {service.description}
              </p>
              <div className="flex items-center text-sm font-bold uppercase tracking-widest group-hover:text-brand-mint">
                <span>Learn More</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Revolutionizing Red Bull",
    category: "Creative Strategy",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2000",
    color: "bg-red-600",
  },
  {
    title: "The Future of Playstation",
    category: "Brand Performance",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&q=80&w=2000",
    color: "bg-blue-600",
  },
  {
    title: "Next Gen Nike",
    category: "Content Marketing",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=2000",
    color: "bg-orange-500",
  },
];

const ProjectItem = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  return (
    <div className="h-screen flex items-center justify-center p-6 lg:p-24">
      <div className="relative w-full h-full max-h-[600px] overflow-hidden rounded-2xl group">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        <div className="absolute bottom-10 left-10 text-white">
          <p className="text-sm font-bold uppercase tracking-widest mb-2 text-brand-mint">{project.category}</p>
          <h3 className="text-4xl lg:text-6xl font-display font-black leading-tight">{project.title}</h3>
        </div>
      </div>
    </div>
  );
};

const FeaturedWork = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative bg-brand-dark">
      <div className="flex flex-col lg:flex-row">
        {/* Sticky Left Side */}
        <div className="lg:w-1/2 lg:h-screen lg:sticky lg:top-0 flex flex-col justify-center px-10 lg:px-24 py-20 lg:py-0">
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl lg:text-[8rem] leading-[0.9] font-display font-black mb-8">
              FEATURED <br /> WORK
            </h2>
            <p className="text-xl text-gray-400 max-w-md">
              We work with world-class brands to deliver search-first creative campaigns that drive growth.
            </p>
            <button className="mt-12 text-sm font-bold uppercase tracking-widest border-b-2 border-brand-mint pb-2 hover:text-brand-mint transition-colors">
              View all projects
            </button>
          </motion.div>
        </div>

        {/* Scrolling Right Side */}
        <div className="lg:w-1/2">
          {projects.map((project, i) => (
            <ProjectItem key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;

"use client";

import React from "react";
import { motion } from "framer-motion";

import { RevealText } from "./RevealText";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video Mask Effect */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-abstract-motion-of-colors-and-shapes-2342-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-7xl">
        <div className="flex flex-col items-center">
          <div className="relative">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              style={{ clipPath: "inset(0 0 0 0)", zIndex: -1 }}
            >
              <source
                src="https://assets.mixkit.co/videos/preview/mixkit-abstract-motion-of-colors-and-shapes-2342-large.mp4"
                type="video/mp4"
              />
            </video>
            <h1 className="text-[12vw] leading-[0.85] font-display font-black text-black bg-white mix-blend-lighten uppercase py-4">
              WE BUILD <br /> BRANDS
            </h1>
          </div>
          <RevealText 
            text="PEOPLE SEARCH FOR" 
            className="text-[10vw] leading-[0.85] font-display font-black text-brand-mint mt-4" 
            delay={0.5}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-8 text-xl lg:text-2xl font-medium text-gray-300 max-w-2xl mx-auto"
        >
          A search-first creative agency for the world's most ambitious brands.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-12"
        >
          <div className="inline-flex items-center space-x-4 group cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-brand-mint flex items-center justify-center group-hover:scale-110 transition-transform">
              <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-brand-dark border-b-[8px] border-b-transparent ml-1" />
            </div>
            <span className="text-sm font-bold uppercase tracking-widest">Showreel 2024</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-px h-12 bg-white/20"
      >
        <div className="w-full h-1/2 bg-brand-mint" />
      </motion.div>
    </section>
  );
};

export default Hero;

"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <section
        className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden rounded-[30px] md:rounded-[40px] m-[5px] md:m-[10px] bg-black"
      >
        {/* Background blurred image */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/images/hero-people.png"
            alt="hero background"
            fill
            priority
            sizes="100vw"
            className="opacity-60 scale-[1.2] blur-[40px] md:blur-[60px] brightness-[0.6] md:brightness-[0.7]"
            style={{ objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.4), transparent, rgba(0,0,0,0.6))",
            }}
          />
        </div>

        {/* Content */}
        <div
          className="relative z-10 flex flex-col items-center text-center px-5 py-20 md:py-[120px] max-w-[1600px] mx-auto w-full"
        >
          {/* Awards Label & Logos Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-[30px] md:mb-[50px]"
          >
            <div
              className="text-[9px] md:text-[11px] font-extrabold uppercase tracking-[0.15em] text-white/90 mb-4 md:mb-[25px] max-w-[250px] md:max-w-none mx-auto"
            >
              #1 MOST RECOMMENDED CONTENT MARKETING AGENCY
            </div>

            <div
              className="flex items-center justify-center gap-[10px] md:gap-6"
            >
              {/* Left Wreath */}
              <div
                className="text-white opacity-60 -translate-y-[2px]"
              >
                <svg
                  className="w-4 h-7 md:w-6 md:h-10"
                  viewBox="0 0 24 40"
                  fill="currentColor"
                >
                  <path d="M12 40c-2.2-2.3-4-5-5.3-7.8-1.3-2.8-2-5.7-2-8.7V10c0-2.8.7-5.5 2-8.2l.3-.8 1.4 1.1-.3.8c-1.1 2.3-1.6 4.7-1.6 7.1v13.5c0 2.5.6 5 1.7 7.3 1.1 2.4 2.6 4.6 4.5 6.5l1.3 1.3-1.4 1.4z" />
                  <path d="M18 35c-1.8-1.9-3.3-4.1-4.3-6.5-1-2.4-1.5-4.8-1.5-7.3V15c0-2.3.6-4.6 1.7-6.8l.4-.8 1.4 1-.4.8c-.9 1.8-1.4 3.8-1.4 5.8v6.2c0 2.1.4 4.1 1.2 6.1.8 1.9 2 3.7 3.4 5.3l1.1 1.2-1.6 1.2z" />
                </svg>
              </div>

              {/* Logos */}
              <div
                className="flex items-center gap-3 md:gap-5 brightness-0 invert opacity-80"
              >
                <div className="flex flex-col items-center">
                   <div className="text-[8px] md:text-[10px] font-black">GLOBAL</div>
                   <div className="text-[10px] md:text-[12px] font-black -mt-[2px]">SEARCH</div>
                </div>
                <div className="border-l border-white/30 h-5"></div>
                <div className="text-xs md:text-base font-black">The Drum</div>
                <div className="border-l border-white/30 h-5"></div>
                <div className="flex flex-col items-center">
                   <div className="text-[8px] md:text-[9px] font-black">UK SOCIAL</div>
                   <div className="text-[10px] md:text-[11px] font-black -mt-[2px]">MEDIA</div>
                </div>
              </div>

              {/* Right Wreath */}
              <div
                className="text-white opacity-60 -translate-y-[2px] -scale-x-100"
              >
                <svg
                  className="w-4 h-7 md:w-6 md:h-10"
                  viewBox="0 0 24 40"
                  fill="currentColor"
                >
                  <path d="M12 40c-2.2-2.3-4-5-5.3-7.8-1.3-2.8-2-5.7-2-8.7V10c0-2.8.7-5.5 2-8.2l.3-.8 1.4 1.1-.3.8c-1.1 2.3-1.6 4.7-1.6 7.1v13.5c0 2.5.6 5 1.7 7.3 1.1 2.4 2.6 4.6 4.5 6.5l1.3 1.3-1.4 1.4z" />
                  <path d="M18 35c-1.8-1.9-3.3-4.1-4.3-6.5-1-2.4-1.5-4.8-1.5-7.3V15c0-2.3.6-4.6 1.7-6.8l.4-.8 1.4 1-.4.8c-.9 1.8-1.4 3.8-1.4 5.8v6.2c0 2.1.4 4.1 1.2 6.1.8 1.9 2 3.7 3.4 5.3l1.1 1.2-1.6 1.2z" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Headline */}
          <div
            className="flex flex-col items-center gap-[5px] md:gap-0"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-[55px] md:text-[clamp(60px,12vw,170px)] font-normal text-white leading-[0.85] tracking-[-0.04em] m-0"
              style={{
                fontFamily: "var(--font-display)",
              }}
            >
              We Create
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col md:flex-row items-center justify-center gap-[10px] md:gap-5 mt-[10px] md:-mt-[5px]"
            >
              <div className="flex items-center gap-[10px] md:gap-5">
                <span
                  className="text-[55px] md:text-[clamp(60px,12vw,100px)] font-normal text-white leading-[0.85] tracking-[-0.04em]"
                  style={{
                    fontFamily: "var(--font-display)",
                  }}
                >
                  Category
                </span>

                {/* Squircle Image */}
                <div
                  className="relative w-[60px] md:w-[11vw] h-[50px] md:h-[10vw] max-w-[160px] max-h-[140px] rounded-[15px] md:rounded-[45px] overflow-hidden border-2 border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                >
                  <Image
                    src="/images/hero-people.png"
                    alt="People"
                    fill
                    sizes="20vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>

              <span
                className="text-[55px] md:text-[clamp(60px,12vw,100px)] font-normal text-white leading-[0.85] tracking-[-0.04em]"
                style={{
                  fontFamily: "var(--font-display)",
                }}
              >
                Leaders
              </span>
            </motion.div>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-[30px] md:mt-[45px] text-lg md:text-[clamp(18px,2.8vw,36px)] font-semibold text-white tracking-[-0.02em] max-w-[280px] md:max-w-none"
            style={{
              fontFamily: "var(--font-display)",
            }}
          >
            on every searchable platform
          </motion.p>
        </div>

        {/* Bottom stats */}
        <div
          className="absolute bottom-[30px] md:bottom-10 left-5 md:left-[50px] right-5 md:right-[50px] flex flex-col md:flex-row justify-between items-center md:items-end z-10 gap-[15px] md:gap-0"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="hidden md:block text-[13px] text-white/70 leading-[1.6] max-w-[380px] text-left"
          >
            Organic media planners creating, distributing & optimising{" "}
            <span style={{ color: "#fff", fontWeight: "700" }}>
              search-first
            </span>{" "}
            content for SEO, Social, PR, Ai and LLM search
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-[11px] md:text-[13px] text-white/70 leading-[1.6] text-center md:text-right"
          >
            4 Global Offices serving
            <br />
            <span style={{ color: "#fff", fontWeight: "700" }}>
              UK, USA (New York) & EU
            </span>
          </motion.p>
        </div>
      </section>
    </div>
  );
}

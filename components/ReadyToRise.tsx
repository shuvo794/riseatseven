"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const text = "Ready to Rise at Seven?";
const letters = text.split("");

const AnimatedLetter = ({ letter, index, scrollYProgress }: { letter: string, index: number, scrollYProgress: any }) => {
  const y = useTransform(scrollYProgress, (val: number) => {
    // phase creates the wave. 
    // index * 0.4 spreads the wave across the letters.
    // val * 15 makes the wave travel as you scroll.
    const phase = index * 0.4 - val * 20; 
    return Math.sin(phase) * 80; // Moves up and down by 80px
  });

  const rotate = useTransform(scrollYProgress, (val: number) => {
    const phase = index * 0.4 - val * 20;
    return Math.cos(phase) * 10; // Slight rotation to follow the wave curve
  });

  return (
    <motion.span
      style={{ y, rotate, display: "inline-block", transformOrigin: "center" }}
      className={letter === " " ? "w-[3vw] lg:w-[2vw]" : ""}
    >
      {letter === " " ? "\u00A0" : letter}
    </motion.span>
  );
};

export default function ReadyToRise() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Move the text horizontally from slightly right of center to far left
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-75%"]);

  return (
    <section 
      ref={containerRef}
      className="relative h-[350vh] bg-[#f2f2f2]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        <motion.div
          style={{ x }}
          className="flex whitespace-nowrap items-center px-[5vw]"
        >
          <h2 
            className="text-[25vw] lg:text-[16vw] 4xl:text-[14vw] font-medium tracking-tight leading-none text-black shrink-0 flex items-center"
            style={{ fontFamily: "var(--font-display, sans-serif)" }}
          >
            {letters.map((letter, i) => (
              <AnimatedLetter 
                key={i} 
                letter={letter} 
                index={i} 
                scrollYProgress={scrollYProgress} 
              />
            ))}
          </h2>
        </motion.div>
      </div>
    </section>
  );
}

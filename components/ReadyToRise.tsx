"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const text = "Ready to Rise at Seven?";
const letters = text.split("");

const AnimatedLetter = ({ letter, index, scrollYProgress }: { letter: string, index: number, scrollYProgress: any }) => {
  const y = useTransform(scrollYProgress, (val: number) => {
    const phase = index * 0.4 - val * 20; 
    // Use a spring or just a constant, but we'll handle the responsive amplitude via CSS if possible
    // Since y is a motion value, we can't easily use CSS variables directly inside useTransform callback
    // But we can use a state that updates after mount to avoid hydration mismatch
    return Math.sin(phase);
  });

  // Create a separate transform that multiplies the sin wave by the amplitude
  // We'll use a state for amplitude that starts as the server default (80)
  const [amplitude, setAmplitude] = React.useState(80);
  
  React.useEffect(() => {
    const updateAmplitude = () => {
      setAmplitude(window.innerWidth < 1024 ? 40 : 80);
    };
    updateAmplitude();
    window.addEventListener("resize", updateAmplitude);
    return () => window.removeEventListener("resize", updateAmplitude);
  }, []);

  const responsiveY = useTransform(y, (v) => v * amplitude);

  const rotate = useTransform(scrollYProgress, (val: number) => {
    const phase = index * 0.4 - val * 20;
    return Math.cos(phase) * 10;
  });

  return (
    <motion.span
      style={{ y: responsiveY, rotate, display: "inline-block", transformOrigin: "center" }}
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

  // Start with text almost entirely off-screen to the right (approx 85vw).
  // Only the first ~15vw will be visible, showing just "Re".
  // Ends way off to the left so the whole text scrolls past.
  const x = useTransform(scrollYProgress, [0, 1], ["85vw", "-220vw"]);

  return (
    <section 
      ref={containerRef}
      className="relative h-[400vh] bg-[#f2f2f2]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        <motion.div
          style={{ x }}
          className="flex whitespace-nowrap items-center"
        >
          <h2 
            className="text-[30vw] lg:text-[16vw] 4xl:text-[14vw] font-medium tracking-tight leading-none text-black shrink-0 flex items-center"
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

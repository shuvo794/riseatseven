"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const text = "Ready to Rise at Seven?";
const letters = text.split("");

const AnimatedLetter = ({ letter, index, scrollYProgress, isMobile }: { letter: string, index: number, scrollYProgress: any, isMobile: boolean }) => {
  const y = useTransform(scrollYProgress, (val: number) => {
    const phase = index * 0.4 - val * 20; 
    return Math.sin(phase);
  });

  const amplitude = isMobile ? 40 : 80;
  const responsiveY = useTransform(y, (v) => v * amplitude);

  const rotate = useTransform(scrollYProgress, (val: number) => {
    const phase = index * 0.4 - val * 20;
    return Math.cos(phase) * 10;
  });

  return (
    <motion.span
      style={{ 
        y: responsiveY, 
        rotate, 
        display: "inline-block", 
        transformOrigin: "center",
        width: letter === " " ? (isMobile ? "3vw" : "2vw") : "auto",
      }}
    >
      {letter === " " ? "\u00A0" : letter}
    </motion.span>
  );
};

export default function ReadyToRise() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["85vw", isMobile ? "-450vw" : "-220vw"]);

  return (
    <section 
      ref={containerRef}
      style={{
        position: "relative",
        height: isMobile ? "250vh" : "400vh",
        backgroundColor: "#f2f2f2",
        minHeight: mounted ? "auto" : "100vh",
      }}
    >
      {mounted && (
        <div 
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            width: "100%",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
          }}
        >
          <motion.div
            style={{ 
              x,
              display: "flex",
              whiteSpace: "nowrap",
              alignItems: "center",
            }}
          >
            <h2 
              style={{ 
                fontSize: isMobile ? "30vw" : "16vw",
                fontWeight: "500",
                trackingTight: "-0.04em",
                lineHeight: "1",
                color: "#000",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                fontFamily: "var(--font-display, sans-serif)",
                margin: 0,
              }}
            >
              {letters.map((letter, i) => (
                <AnimatedLetter 
                  key={i} 
                  letter={letter} 
                  index={i} 
                  scrollYProgress={scrollYProgress} 
                  isMobile={isMobile}
                />
              ))}
            </h2>
          </motion.div>
        </div>
      )}
    </section>
  );
}

"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ReadyToRise() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Moves from right (500px) to left (-500px)
  const x = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [15, -5]);

  return (
    <section 
      ref={containerRef}
      style={{ 
        backgroundColor: "#f2f2f2", 
        padding: "200px 0", 
        overflow: "hidden",
        position: "relative"
      }}
    >
      <motion.div
        style={{
          x,
          rotate,
          whiteSpace: "nowrap",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <h2 style={{ 
          fontSize: "clamp(150px, 20vw, 350px)", 
          fontWeight: "700", 
          color: "#000", 
          letterSpacing: "-0.04em",
          margin: 0,
          fontFamily: "var(--font-display)",
          lineHeight: "0.8"
        }}>
          Ready to Rise at Seven?
        </h2>
      </motion.div>

      {/* Optional Contact Button */}
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        marginTop: "100px" 
      }}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          style={{
            backgroundColor: "#000",
            color: "#fff",
            padding: "20px 40px",
            borderRadius: "100px",
            fontSize: "20px",
            fontWeight: "700",
            border: "none",
            cursor: "pointer",
            fontFamily: "var(--font-display)"
          }}
        >
          Get in touch ↗
        </motion.button>
      </div>
    </section>
  );
}

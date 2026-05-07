"use client";
import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";

export default function TextSlider() {
  const phrase = "Consumers Not Algorithms Award Winning";
  const images = ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"];
  const [isHovering, setIsHovering] = React.useState(false);

  // Custom cursor logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 1000, damping: 50 });
  const springY = useSpring(mouseY, { stiffness: 1000, damping: 50 });

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  // Duplicate content for seamless loop
  const content = [...Array(10)].map((_, i) => (
    <React.Fragment key={i}>
      <h2
        style={{
          fontSize: "clamp(120px, 18vw, 220px)",
          fontWeight: "700",
          color: "#000",
          letterSpacing: "-0.04em",
          margin: 0,
          fontFamily: "var(--font-display)",
          display: "inline-block",
        }}
      >
        {phrase}
      </h2>
      <div
        style={{
          width: "140px",
          height: "140px",
          borderRadius: "36px",
          overflow: "hidden",
          position: "relative",
          flexShrink: 0,
          margin: "0 40px",
        }}
      >
        <Image
          src={images[i % images.length]}
          alt="Feature"
          fill
          unoptimized
          style={{ objectFit: "cover" }}
        />
      </div>
    </React.Fragment>
  ));

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        backgroundColor: "#f2f2f2",
        padding: "100px 0",
        overflow: "hidden",
        borderTop: "1px solid rgba(0,0,0,0.05)",
        position: "relative",
        cursor: isHovering ? "none" : "auto",
      }}
    >
      {/* Custom Cursor / Button Follower (Desktop Only) */}
      <div className="hidden lg:block">
        <motion.div
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            backgroundColor: "#c1f1e0",
            padding: "12px 24px",
            borderRadius: "100px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            pointerEvents: "none",
            zIndex: 9999,
            x: springX,
            y: springY,
            marginLeft: "-80px",
            marginTop: "-20px",
            scale: isHovering ? 1 : 0,
            opacity: isHovering ? 1 : 0,
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ color: "#000", fontSize: "15px", fontWeight: "700" }}>
            Send Us Your Brief <span style={{ fontSize: "14px" }}>↗</span>
          </span>
        </motion.div>
      </div>

      <div style={{ display: "flex", width: "max-content" }}>
        <motion.div
          animate={{ x: [0, -1500] }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear",
          }}
          style={{
            display: "flex",
            alignItems: "center",
            whiteSpace: "nowrap",
          }}
        >
          {[...Array(10)].map((_, i) => (
            <React.Fragment key={i}>
              <h2
                style={{
                  fontSize: "clamp(80px, 15vw, 220px)",
                  fontWeight: "700",
                  color: "#000",
                  letterSpacing: "-0.04em",
                  margin: 0,
                  fontFamily: "var(--font-display)",
                  display: "inline-block",
                }}
              >
                {phrase}
              </h2>
              <div
                style={{
                  width: "clamp(60px, 10vw, 140px)",
                  height: "clamp(60px, 10vw, 140px)",
                  borderRadius: "clamp(16px, 3vw, 36px)",
                  overflow: "hidden",
                  position: "relative",
                  flexShrink: 0,
                  margin: "0 clamp(10px, 4vw, 40px)",
                }}
              >
                <Image
                  src={images[i % images.length]}
                  alt="Feature"
                  fill
                  unoptimized
                  style={{ objectFit: "cover" }}
                />
              </div>
            </React.Fragment>
          ))}
          {/* Duplicate for seamless loop */}
          {[...Array(10)].map((_, i) => (
            <React.Fragment key={i + 10}>
              <h2
                style={{
                  fontSize: "clamp(80px, 15vw, 220px)",
                  fontWeight: "700",
                  color: "#000",
                  letterSpacing: "-0.04em",
                  margin: 0,
                  fontFamily: "var(--font-display)",
                  display: "inline-block",
                }}
              >
                {phrase}
              </h2>
              <div
                style={{
                  width: "clamp(60px, 10vw, 140px)",
                  height: "clamp(60px, 10vw, 140px)",
                  borderRadius: "clamp(16px, 3vw, 36px)",
                  overflow: "hidden",
                  position: "relative",
                  flexShrink: 0,
                  margin: "0 clamp(10px, 4vw, 40px)",
                }}
              >
                <Image
                  src={images[i % images.length]}
                  alt="Feature"
                  fill
                  unoptimized
                  style={{ objectFit: "cover" }}
                />
              </div>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

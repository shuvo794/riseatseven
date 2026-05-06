"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const brands = [
  { name: "Shark NINJA", type: "text" },
  { name: "CapitalOne", type: "text" },
  { name: "Red Bull", type: "text" },
  { name: "JD", type: "text" },
  { name: "Kroger", type: "text" },
  { name: "Shark NINJA", type: "text" },
  { name: "CapitalOne", type: "text" },
  { name: "Red Bull", type: "text" },
  { name: "JD", type: "text" },
  { name: "Kroger", type: "text" },
];

export default function DrivingDemand() {
  return (
    <section style={{ backgroundColor: "transparent", padding: "10px 0" }}>
      <div 
        style={{ 
          backgroundColor: "#f2f2f2", 
          borderRadius: "48px", 
          padding: "60px 40px 100px", 
          overflow: "hidden", 
          border: "1px solid rgba(0,0,0,0.05)" 
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          
          {/* Logo Slider Section */}
          <div style={{ display: "flex", alignItems: "center", gap: "60px", marginBottom: "120px", position: "relative" }}>
            <span style={{ fontSize: "11px", fontWeight: "800", color: "#000", textTransform: "uppercase", letterSpacing: "0.05em", whiteSpace: "nowrap" }}>
              The agency behind
            </span>
            
            <div style={{ overflow: "hidden", flex: 1, position: "relative" }}>
              {/* Fade gradients */}
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "100px", background: "linear-gradient(to right, #f2f2f2, transparent)", zIndex: 10, pointerEvents: "none" }} />
              <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "100px", background: "linear-gradient(to left, #f2f2f2, transparent)", zIndex: 10, pointerEvents: "none" }} />
              
              <motion.div
                animate={{ x: [0, -1000] }}
                transition={{
                  repeat: Infinity,
                  duration: 25,
                  ease: "linear",
                }}
                style={{ display: "flex", alignItems: "center", gap: "80px", whiteSpace: "nowrap" }}
              >
                {brands.map((brand, i) => (
                  <div key={i} style={{ opacity: 0.8 }}>
                    {brand.name === "Shark NINJA" && (
                      <span style={{ fontSize: "18px", fontWeight: "900", letterSpacing: "-0.05em" }}>Shark <span style={{ fontWeight: "400" }}>NINJA</span></span>
                    )}
                    {brand.name === "CapitalOne" && (
                      <span style={{ fontSize: "18px", fontWeight: "900", fontStyle: "italic", letterSpacing: "-0.05em" }}>CapitalOne</span>
                    )}
                    {brand.name === "Red Bull" && (
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <div style={{ fontSize: "12px", fontWeight: "900" }}>Red Bull</div>
                      </div>
                    )}
                    {brand.name === "JD" && (
                      <div style={{ width: "36px", height: "36px", backgroundColor: "#000", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "900" }}>JD</div>
                    )}
                    {brand.name === "Kroger" && (
                      <span style={{ fontSize: "18px", fontWeight: "900", color: "#000" }}>Kroger</span>
                    )}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" style={{ display: "grid", gap: "48px", alignItems: "flex-start" }}>
            {/* Left: Description */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ gridColumn: "span 5 / span 5" }}
            >
              <p 
                style={{ 
                  fontSize: "24px", 
                  fontWeight: "700", 
                  color: "#000", 
                  lineHeight: "1.1", 
                  letterSpacing: "-0.03em", 
                  maxWidth: "420px",
                  margin: 0
                }}
              >
                A global team of search-first content marketers engineering
                semantic relevancy & category signals for both the internet and
                people
              </p>
            </motion.div>

            {/* Right: Headline & Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ 
                gridColumn: "span 7 / span 7", 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "flex-start" 
              }}
            >
              <h2
                style={{ 
                  fontSize: "clamp(60px, 8vw, 90px)", 
                  fontWeight: "800", 
                  color: "#000", 
                  lineHeight: "0.82", 
                  letterSpacing: "-0.05em", 
                  marginBottom: "48px",
                  fontFamily: "var(--font-display)",
                  margin: 0
                }}
              >
                Driving Demand &<br />
                Discovery
                <span 
                  style={{ 
                    display: "inline-block", 
                    verticalAlign: "middle", 
                    width: "65px", 
                    height: "65px", 
                    borderRadius: "16px", 
                    overflow: "hidden", 
                    border: "2px solid rgba(0,0,0,0.05)", 
                    position: "relative", 
                    marginLeft: "16px", 
                    marginBottom: "8px" 
                  }}
                >
                  <Image
                    src="/images/discovery-icon.png"
                    alt="Pill"
                    fill
                    sizes="80px"
                    style={{ objectFit: "cover" }}
                  />
                </span>
              </h2>

              <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                <button 
                  style={{ 
                    backgroundColor: "#fff", 
                    color: "#000", 
                    padding: "16px 32px", 
                    borderRadius: "100px", 
                    fontWeight: "700", 
                    fontSize: "15px", 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "12px", 
                    boxShadow: "0 4px 14px rgba(0,0,0,0.05)",
                    border: "none",
                    cursor: "pointer"
                  }}
                >
                  Our Story <span style={{ fontSize: "12px" }}>↗</span>
                </button>
                <button 
                  style={{ 
                    fontSize: "15px", 
                    fontWeight: "700", 
                    color: "#000", 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "8px",
                    background: "none",
                    border: "none",
                    cursor: "pointer"
                  }}
                >
                  Our Services <span style={{ fontSize: "12px" }}>↗</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}



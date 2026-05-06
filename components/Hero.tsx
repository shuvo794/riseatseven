"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <div style={{ backgroundColor: "#1a1a1a", minHeight: "100vh" }}>
      <section 
        style={{ 
          position: "relative", 
          minHeight: "100vh", 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          justifyContent: "center", 
          overflow: "hidden", 
          borderRadius: "40px",
          margin: "10px",
          backgroundColor: "#000"
        }}
      >
        {/* Background blurred image */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/images/hero-people.png"
            alt="hero background"
            fill
            priority
            sizes="100vw"
            style={{
              objectFit: "cover",
              opacity: 0.6,
              filter: "blur(40px) brightness(0.8)",
              transform: "scale(1.1)",
            }}
          />
          <div 
            style={{ 
              position: "absolute", 
              inset: 0, 
              background: "linear-gradient(to bottom, rgba(0,0,0,0.3), transparent, rgba(0,0,0,0.5))" 
            }} 
          />
        </div>

        {/* Content */}
        <div 
          style={{ 
            position: "relative", 
            zIndex: 10, 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            textAlign: "center", 
            padding: "160px 20px", 
            maxWidth: "1600px", 
            margin: "0 auto", 
            width: "100%" 
          }}
        >
          {/* Awards Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: "60px" }}
          >
            <div 
              style={{ 
                fontSize: "12px", 
                fontWeight: "900", 
                textTransform: "uppercase", 
                letterSpacing: "0.2em", 
                color: "rgba(255,255,255,0.9)",
                marginBottom: "20px"
              }}
            >
              #1 MOST RECOMMENDED CONTENT MARKETING AGENCY
            </div>
            
            {/* Award Icons Row */}
            <div 
              style={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                gap: "30px", 
                opacity: 0.8,
                filter: "brightness(0) invert(1)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "32px", height: "32px", border: "1px solid #fff", borderRadius: "50%", display: "flex", alignItems: "center", justify: "center", fontSize: "10px", fontWeight: "900" }}>G</div>
                <span style={{ fontSize: "10px", fontWeight: "900", letterSpacing: "0.1em" }}>SEARCH</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "32px", height: "32px", border: "1px solid #fff", borderRadius: "50%", display: "flex", alignItems: "center", justify: "center", fontSize: "10px", fontWeight: "900" }}>D</div>
                <span style={{ fontSize: "10px", fontWeight: "900", letterSpacing: "0.1em" }}>DRUM</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "32px", height: "32px", border: "1px solid #fff", borderRadius: "50%", display: "flex", alignItems: "center", justify: "center", fontSize: "10px", fontWeight: "900" }}>S</div>
                <span style={{ fontSize: "10px", fontWeight: "900", letterSpacing: "0.1em" }}>SOCIAL</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "32px", height: "32px", border: "1px solid #fff", borderRadius: "50%", display: "flex", alignItems: "center", justify: "center", fontSize: "10px", fontWeight: "900" }}>C</div>
                <span style={{ fontSize: "10px", fontWeight: "900", letterSpacing: "0.1em" }}>CONTENT</span>
              </div>
            </div>
          </motion.div>

          {/* Headline */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ 
                fontSize: "clamp(60px, 11vw, 160px)", 
                fontWeight: "700", 
                color: "#fff", 
                lineHeight: "0.85", 
                letterSpacing: "-0.05em",
                fontFamily: "var(--font-display)",
                margin: 0
              }}
            >
              We Create
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                gap: "20px", 
                marginTop: "-5px" 
              }}
            >
              <span
                style={{ 
                  fontSize: "clamp(60px, 11vw, 160px)", 
                  fontWeight: "700", 
                  color: "#fff", 
                  lineHeight: "0.85", 
                  letterSpacing: "-0.05em",
                  fontFamily: "var(--font-display)" 
                }}
              >
                Category
              </span>

              {/* Pill Image */}
              <div 
                style={{ 
                  position: "relative", 
                  width: "12vw", 
                  height: "10vw", 
                  maxWidth: "140px", 
                  maxHeight: "110px", 
                  borderRadius: "30px", 
                  overflow: "hidden", 
                  border: "2px solid rgba(255,255,255,0.2)", 
                  boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
                  margin: "0 10px"
                }}
              >
                <Image
                  src="/images/hero-people.png"
                  alt="People"
                  fill
                  sizes="20vw"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <span
                style={{ 
                  fontSize: "clamp(60px, 11vw, 160px)", 
                  fontWeight: "700", 
                  color: "#fff", 
                  lineHeight: "0.85", 
                  letterSpacing: "-0.05em",
                  fontFamily: "var(--font-display)" 
                }}
              >
                Leaders
              </span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ 
              marginTop: "40px", 
              fontSize: "clamp(18px, 2.5vw, 32px)", 
              fontWeight: "600", 
              color: "#fff", 
              letterSpacing: "-0.02em",
              fontFamily: "var(--font-display)" 
            }}
          >
            on every searchable platform
          </motion.p>
        </div>

        {/* Bottom stats */}
        <div 
          style={{ 
            position: "absolute", 
            bottom: "40px", 
            left: "40px", 
            right: "40px", 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "flex-end", 
            zIndex: 10 
          }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            style={{ 
              fontSize: "13px", 
              color: "rgba(255,255,255,0.7)", 
              lineHeight: "1.6", 
              maxWidth: "350px", 
              textAlign: "left" 
            }}
          >
            Organic media planners creating, distributing & optimising <span style={{ color: "#fff", fontWeight: "700" }}>search-first</span> content for SEO, Social, PR, Ai and LLM search
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            style={{ 
              fontSize: "13px", 
              color: "rgba(255,255,255,0.7)", 
              lineHeight: "1.6", 
              textAlign: "right" 
            }}
          >
            4 Global Offices serving<br />
            <span style={{ color: "#fff", fontWeight: "700" }}>UK, USA, Spain, Nordics & EU</span>
          </motion.p>
        </div>
      </section>
    </div>
  );
}

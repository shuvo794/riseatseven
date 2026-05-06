"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <div style={{ minHeight: "100vh" }}>
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
          backgroundColor: "#000",
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
              filter: "blur(60px) brightness(0.7)",
              transform: "scale(1.2)",
            }}
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
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "120px 20px",
            maxWidth: "1600px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          {/* Awards Label & Logos Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: "50px" }}
          >
            <div
              style={{
                fontSize: "11px",
                fontWeight: "800",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "rgba(255,255,255,0.9)",
                marginBottom: "25px",
              }}
            >
              #1 MOST RECOMMENDED CONTENT MARKETING AGENCY
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "24px",
              }}
            >
              {/* Left Wreath */}
              <div
                style={{
                  color: "#fff",
                  opacity: 0.6,
                  fontSize: "24px",
                  transform: "translateY(-2px)",
                }}
              >
                <svg
                  width="24"
                  height="40"
                  viewBox="0 0 24 40"
                  fill="currentColor"
                >
                  <path d="M12 40c-2.2-2.3-4-5-5.3-7.8-1.3-2.8-2-5.7-2-8.7V10c0-2.8.7-5.5 2-8.2l.3-.8 1.4 1.1-.3.8c-1.1 2.3-1.6 4.7-1.6 7.1v13.5c0 2.5.6 5 1.7 7.3 1.1 2.4 2.6 4.6 4.5 6.5l1.3 1.3-1.4 1.4z" />
                  <path d="M18 35c-1.8-1.9-3.3-4.1-4.3-6.5-1-2.4-1.5-4.8-1.5-7.3V15c0-2.3.6-4.6 1.7-6.8l.4-.8 1.4 1-.4.8c-.9 1.8-1.4 3.8-1.4 5.8v6.2c0 2.1.4 4.1 1.2 6.1.8 1.9 2 3.7 3.4 5.3l1.1 1.2-1.6 1.2z" />
                </svg>
              </div>

              {/* Logos */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  filter: "brightness(0) invert(1)",
                  opacity: 0.8,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "10px",
                      fontWeight: "900",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    GLOBAL
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: "900",
                      marginTop: "-4px",
                    }}
                  >
                    SEARCH
                  </div>
                  <div
                    style={{ fontSize: "8px", fontWeight: "800", opacity: 0.7 }}
                  >
                    AWARDS
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderLeft: "1px solid rgba(255,255,255,0.3)",
                    borderRight: "1px solid rgba(255,255,255,0.3)",
                    padding: "0 20px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: "900",
                      letterSpacing: "-0.05em",
                    }}
                  >
                    The Drum
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div style={{ fontSize: "9px", fontWeight: "900" }}>
                    UK SOCIAL MEDIA
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: "900",
                      marginTop: "-2px",
                    }}
                  >
                    AWARDS
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginLeft: "10px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: "900",
                      letterSpacing: "0.1em",
                    }}
                  >
                    CONTENT
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: "900",
                      marginTop: "-3px",
                    }}
                  >
                    AWARDS
                  </div>
                </div>
              </div>

              {/* Right Wreath */}
              <div
                style={{
                  color: "#fff",
                  opacity: 0.6,
                  fontSize: "24px",
                  transform: "translateY(-2px) scaleX(-1)",
                }}
              >
                <svg
                  width="24"
                  height="40"
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
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                fontSize: "clamp(60px, 12vw, 170px)",
                fontWeight: "400",
                color: "#fff",
                lineHeight: "0.85",
                letterSpacing: "-0.04em",
                fontFamily: "var(--font-display)",
                margin: 0,
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
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
                marginTop: "-5px",
              }}
            >
              <span
                style={{
                  fontSize: "clamp(60px, 12vw, 100px)",
                  fontWeight: "400",
                  color: "#fff",
                  lineHeight: "0.85",
                  letterSpacing: "-0.04em",
                  fontFamily: "var(--font-display)",
                }}
              >
                Category
              </span>

              {/* Squircle Image */}
              <div
                style={{
                  position: "relative",
                  width: "11vw",
                  height: "10vw",
                  maxWidth: "160px",
                  maxHeight: "140px",
                  borderRadius: "45px", // Squircle-like rounding
                  overflow: "hidden",
                  border: "3px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                  margin: "0 15px",
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
                  fontSize: "clamp(60px, 12vw, 100px)",
                  fontWeight: "400",
                  color: "#fff",
                  lineHeight: "0.85",
                  letterSpacing: "-0.04em",
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
            style={{
              marginTop: "45px",
              fontSize: "clamp(18px, 2.8vw, 36px)",
              fontWeight: "600",
              color: "#fff",
              letterSpacing: "-0.02em",
              fontFamily: "var(--font-display)",
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
            left: "50px",
            right: "50px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            zIndex: 10,
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
              maxWidth: "380px",
              textAlign: "left",
            }}
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
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.7)",
              lineHeight: "1.6",
              textAlign: "right",
            }}
          >
            4 Global Offices serving
            <br />
            <span style={{ color: "#fff", fontWeight: "700" }}>
              UK, USA, Spain, Nordics & EU
            </span>
          </motion.p>
        </div>
      </section>
    </div>
  );
}

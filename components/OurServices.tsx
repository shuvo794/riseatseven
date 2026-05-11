"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const services = [
  { id: 1, name: "Digital PR", image: "/images/1.jpg" },
  { id: 2, name: "Search & Growth Strategy", image: "/images/2.jpg" },
  { id: 3, name: "Data & Insights", image: "/images/3.jpg" },
  { id: 4, name: "Organic Social & Content", image: "/images/4.jpg" },
  { id: 5, name: "Content Experience", image: "/images/5.jpg" },
  { id: 6, name: "Onsite SEO", image: "/images/7.jpg" }, 
];

export default function OurServices() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      style={{
        backgroundColor: "#f2f2f2",
        borderRadius: isMobile ? "32px" : "48px",
        margin: "10px",
        padding: isMobile ? "60px 24px" : "100px 60px",
        color: "#000",
        position: "relative",
        minHeight: "600px",
      }}
    >
      {mounted && (
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          {/* Header */}
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "space-between",
              alignItems: isMobile ? "flex-start" : "center",
              marginBottom: isMobile ? "40px" : "80px",
              gap: "24px",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(48px, 8vw, 100px)",
                fontWeight: "700",
                letterSpacing: "-0.04em",
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "15px",
                margin: 0,
                fontFamily: "var(--font-display)",
                lineHeight: "0.9",
              }}
            >
              Our
              <div
                style={{
                  width: isMobile ? "60px" : "100px",
                  height: isMobile ? "60px" : "100px",
                  borderRadius: "20px",
                  overflow: "hidden",
                  position: "relative",
                  display: "inline-block",
                }}
              >
                <Image
                  src="/images/829-600x600.jpg"
                  alt="Team"
                  fill
                  unoptimized
                  style={{ objectFit: "cover" }}
                />
              </div>
              Services
            </h2>

            <button
              style={{
                backgroundColor: "#fff",
                padding: "12px 28px",
                borderRadius: "100px",
                border: "1px solid rgba(0,0,0,0.1)",
                fontSize: "15px",
                fontWeight: "700",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
              }}
            >
              View All Services <span style={{ fontSize: "14px" }}>↗</span>
            </button>
          </div>

          {/* Services Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: isMobile ? "0" : "0 80px",
            }}
          >
            {services.map((service, index) => (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                onClick={() => {
                  if (isMobile) {
                    setHoveredService(hoveredService === service.id ? null : service.id);
                  }
                }}
                style={{
                  borderBottom: "1px solid rgba(0,0,0,0.1)",
                  padding: isMobile ? "24px 0" : "30px 0",
                  position: "relative",
                  cursor: "pointer",
                }}
              >
                <h3
                  style={{
                    fontSize: isMobile ? "28px" : "42px",
                    fontWeight: "600",
                    letterSpacing: "-0.03em",
                    margin: 0,
                    transition: "opacity 0.3s ease",
                    opacity: hoveredService === service.id ? 0 : 1,
                  }}
                >
                  {service.name}
                </h3>

                {/* Mobile Arrow Indicator */}
                {isMobile && (
                  <span style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", fontSize: "20px", opacity: 0.3 }}>
                    ↗
                  </span>
                )}

                {/* Hover Overlay Card */}
                <AnimatePresence>
                  {hoveredService === service.id && (
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.95, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      style={{
                        position: "absolute",
                        left: isMobile ? "-10px" : "-20px",
                        right: isMobile ? "-10px" : "-20px",
                        top: "10px",
                        bottom: "10px",
                        borderRadius: isMobile ? "20px" : "60px",
                        overflow: "hidden",
                        zIndex: 10,
                        display: "flex",
                        alignItems: "center",
                        padding: isMobile ? "0 16px" : "0 60px",
                        backgroundColor: "#000",
                      }}
                    >
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        unoptimized
                        style={{ objectFit: "cover", opacity: 0.6 }}
                      />
                      <div
                        style={{
                          position: "relative",
                          zIndex: 2,
                          display: "flex",
                          alignItems: "center",
                          gap: isMobile ? "10px" : "30px",
                          color: "#fff",
                          width: "100%",
                        }}
                      >
                        <span style={{ fontSize: isMobile ? "30px" : "80px", fontWeight: "300", flexShrink: 0 }}>
                          ↗
                        </span>
                        <span
                          style={{
                            fontSize: isMobile ? "18px" : "35px",
                            fontWeight: "500",
                            letterSpacing: "-0.03em",
                            lineHeight: "1.1",
                            wordBreak: "break-word",
                            flex: 1,
                          }}
                        >
                          {service.name}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const services = [
  { id: 1, name: "Digital PR", image: "/images/1.jpg" },
  { id: 2, name: "Search & Growth Strategy", image: "/images/2.jpg" },
  { id: 3, name: "Data & Insights", image: "/images/3.jpg" },
  { id: 4, name: "Organic Social & Content", image: "/images/4.jpg" },
  { id: 5, name: "Content Experience", image: "/images/5.jpg" },
  { id: 6, name: "Onsite SEO", image: "/images/7.jpg" }, // 6.jpg was missing
];

export default function OurServices() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section
      style={{
        backgroundColor: "#f2f2f2",
        borderRadius: "48px",
        margin: "10px",
        padding: "100px 60px",
        color: "#000",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "80px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(60px, 8vw, 100px)",
              fontWeight: "700",
              letterSpacing: "-0.04em",
              display: "flex",
              alignItems: "center",
              gap: "20px",
              margin: 0,
              fontFamily: "var(--font-display)",
            }}
          >
            Our
            <div
              style={{
                width: "100px",
                height: "100px",
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
                style={{ objectFit: "cover" }}
              />
            </div>
            Services
          </h2>

          <button
            style={{
              backgroundColor: "#fff",
              padding: "12px 24px",
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
            gridTemplateColumns: "1fr 1fr",
            gap: "0 80px",
          }}
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              style={{
                borderBottom: "1px solid rgba(0,0,0,0.1)",
                padding: "30px 0",
                position: "relative",
                cursor: "pointer",
              }}
            >
              <h3
                style={{
                  fontSize: "42px",
                  fontWeight: "600",
                  letterSpacing: "-0.03em",
                  margin: 0,
                  transition: "opacity 0.3s ease",
                  opacity: hoveredService === service.id ? 0 : 1,
                }}
              >
                {service.name}
              </h3>

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
                      left: "-20px",
                      right: "-20px",
                      top: "10px",
                      bottom: "10px",
                      borderRadius: "60px",
                      overflow: "hidden",
                      zIndex: 10,
                      display: "flex",
                      alignItems: "center",
                      padding: "0 60px",
                      backgroundColor: "#000",
                    }}
                  >
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      style={{ objectFit: "cover", opacity: 0.6 }}
                    />
                    <div
                      style={{
                        position: "relative",
                        zIndex: 2,
                        display: "flex",
                        alignItems: "center",
                        gap: "30px",
                        color: "#fff",
                      }}
                    >
                      <span style={{ fontSize: "80px", fontWeight: "300" }}>
                        ↗
                      </span>
                      <span
                        style={{
                          fontSize: "35px",
                          fontWeight: "400",
                          letterSpacing: "-0.03em",
                          whiteSpace: "nowrap"
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
    </section>
  );
}

"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Search, TrendingUp } from "lucide-react";

const projects = [
  {
    id: "sixt",
    name: "SIXT",
    years: "2023-2025",
    hoverText: "Increasing brand and non brand visibility UK/ES",
    tag: "Organic search",
    hoverBg: "#ff5f00",
    image: "/images/1.jpg",
  },
  {
    id: "dojo",
    name: "Dojo - B2B",
    years: "2021-2025",
    hoverText: "A search-first B2B strategy to drive leads",
    tag: "Card Machines",
    hoverBg: "#00ffaa",
    image: "/images/2.jpg",
  },
  {
    id: "magnet",
    name: "Magnet Trade - B2B",
    years: "2023-2024",
    hoverText: "A full service SEO success story 170%+ increase",
    tag: "Kitchen Showroom",
    hoverBg: "#1a3c34",
    image: "/images/3.jpg",
  },
  {
    id: "saily",
    name: "Saily",
    years: "2023-2025",
    hoverText: "Building a global category leader in E Sims",
    tag: "E Sims",
    hoverBg: "#0055ff",
    image: "/images/4.jpg",
  },
  {
    id: "jd",
    name: "JD Sports",
    years: "2025",
    hoverText: "Dominating Google and AI search",
    tag: "Sportswear",
    hoverBg: "#00d5ff",
    image: "/images/5.jpg",
  },
  {
    id: "pooky",
    name: "Pooky",
    years: "2025",
    hoverText: "Driving demand for Pooky Rechargeable Lights",
    tag: "Rechargeable Lights",
    hoverBg: "#ffcc00",
    image: "/images/7.jpg",
  },
  {
    id: "parkdean",
    name: "Parkdean Resorts",
    years: "2019-2025",
    hoverText: "Social search and multi channel content to #1",
    tag: "UK holidays",
    hoverBg: "#00a0a0",
    image: "/images/8.jpg",
  },
  {
    id: "revolution",
    name: "Revolution Beauty",
    years: "2022-2025",
    hoverText: "Building the UK's leading beauty dupe brand",
    tag: "Beauty Dupes",
    hoverBg: "#ff69b4",
    image: "/images/9.jpg",
  },
  {
    id: "lloyds",
    name: "Lloyds Pharmacy",
    years: "2022-23",
    hoverText: "Driving category leadership for STI tests",
    tag: "STI tests",
    hoverBg: "#008000",
    image: "/images/10.jpg",
  },
  {
    id: "plt",
    name: "PrettyLittleThing",
    years: "2021-2023",
    hoverText: 'Driving discovery for everything "outfits" for PLT',
    tag: "Outfits",
    hoverBg: "#ffc0cb",
    image: "/images/11.jpg",
  },
  {
    id: "next",
    name: "Next",
    years: "2021-2023",
    hoverText: "Search-first content strategy for fashion",
    tag: "Fashion",
    hoverBg: "#0085ff",
    image: "/images/12.jpg",
  },
  {
    id: "playstation",
    name: "Playstation",
    years: "2022-2024",
    hoverText: "Increasing visibility for gaming peripherals",
    tag: "Gaming",
    hoverBg: "#003791",
    image: "/images/1.jpg",
  },
];

function ProjectListItem({ project, index, scrollYProgress }: { project: any, index: number, scrollYProgress: any }) {
  const start = index / projects.length;
  const end = (index + 1) / projects.length;
  const middle = (start + end) / 2;

  const opacity = useTransform(
    scrollYProgress,
    [middle - 0.1, middle, middle + 0.1],
    [0.15, 1, 0.15],
  );
  const scale = useTransform(
    scrollYProgress,
    [middle - 0.1, middle, middle + 0.1],
    [0.85, 1, 0.85],
  );
  const translateY = useTransform(
    scrollYProgress,
    [middle - 0.1, middle, middle + 0.1],
    [20, 0, -20],
  );

  return (
    <motion.div
      style={{
        opacity,
        scale,
        y: translateY,
        display: "flex",
        alignItems: "flex-start",
        gap: "15px",
        transformOrigin: "left center",
      }}
    >
      <h3
        style={{
          fontSize: "clamp(40px, 4.5vw, 70px)",
          fontWeight: "700",
          lineHeight: "0.85",
          letterSpacing: "-0.05em",
          margin: 0,
          fontFamily: "var(--font-display)",
        }}
      >
        {project.name}
      </h3>
      <span
        style={{
          fontSize: "12px",
          fontWeight: "600",
          color: "rgba(255,255,255,0.3)",
          marginTop: "10px",
        }}
      >
        [{project.years}]
      </span>
    </motion.div>
  );
}

export default function FeaturedWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Custom cursor logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 1000, damping: 50 });
  const springY = useSpring(mouseY, { stiffness: 1000, damping: 50 });

  useEffect(() => {
    if (!mounted) return;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, mounted]);

  return (
    <section
      ref={containerRef}
      style={{
        backgroundColor: "#0a0a0a",
        borderRadius: isMobile ? "32px" : "48px",
        margin: "10px",
        padding: isMobile ? "60px 0" : "100px 0",
        color: "#fff",
        position: "relative",
        overflow: "visible",
        minHeight: mounted ? "auto" : "800px",
      }}
    >
      {mounted && (
        <>
          {/* Custom Cursor */}
          <motion.div
            style={{
              position: "fixed",
              left: 0,
              top: 0,
              width: "100px",
              height: "100px",
              backgroundColor: "#c1f1e0",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
              zIndex: 9999,
              x: springX,
              y: springY,
              marginLeft: "-50px",
              marginTop: "-50px",
              scale: isHoveringImage ? 1 : 0,
              opacity: isHoveringImage ? 1 : 0,
            }}
          >
            <span style={{ color: "#000", fontSize: "32px", fontWeight: "300" }}>
              ↗
            </span>
          </motion.div>

          <div
            style={{
              padding: isMobile ? "0 24px" : "0 80px",
              maxWidth: "1600px",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1.2fr",
                gap: isMobile ? "40px" : "100px",
              }}
            >
              {/* Left Column: Sticky Scroll-Focus List */}
              {!isMobile && (
                <div
                  style={{
                    position: "sticky",
                    top: 0,
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: "900",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginBottom: "60px",
                      opacity: 0.8,
                      position: "absolute",
                      top: "15vh",
                    }}
                  >
                    Featured Work
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                    }}
                  >
                    {projects.map((project, index) => (
                      <ProjectListItem
                        key={project.id}
                        project={project}
                        index={index}
                        scrollYProgress={scrollYProgress}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Right Column: Scrolling Images */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: isMobile ? "60px" : "100px",
                }}
              >
                {isMobile && (
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: "900",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      opacity: 0.8,
                    }}
                  >
                    Featured Work
                  </div>
                )}

                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "24px",
                    }}
                  >
                    {isMobile && (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          width: "100%",
                        }}
                      >
                        <h3
                          style={{
                            fontSize: "28px",
                            fontWeight: "700",
                            letterSpacing: "-0.03em",
                            margin: 0,
                          }}
                        >
                          {project.name}
                        </h3>
                        <span
                          style={{
                            fontSize: "12px",
                            opacity: 0.4,
                            marginLeft: "auto",
                          }}
                        >
                          [{project.years}]
                        </span>
                      </div>
                    )}

                    <div
                      onMouseEnter={() => {
                        setIsHoveringImage(true);
                        setHoveredIndex(index);
                      }}
                      onMouseLeave={() => {
                        setIsHoveringImage(false);
                        setHoveredIndex(null);
                      }}
                      style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "1.2",
                        borderRadius: "32px",
                        overflow: "hidden",
                        backgroundColor: "#111",
                        cursor: "none",
                      }}
                    >
                      <motion.div
                        animate={{ scale: hoveredIndex === index ? 1.05 : 1 }}
                        transition={{ duration: 0.7 }}
                        style={{ width: "100%", height: "100%" }}
                      >
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          unoptimized
                          priority={index === 0}
                          sizes="(max-width: 1024px) 100vw, 800px"
                          style={{ objectFit: "cover" }}
                        />
                      </motion.div>

                      {/* Hover Color Overlay */}
                      <AnimatePresence>
                        {hoveredIndex === index && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{
                              position: "absolute",
                              inset: 0,
                              backgroundColor: project.hoverBg,
                              padding: isMobile ? "24px" : "40px",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "flex-start",
                              zIndex: 10,
                              pointerEvents: "none",
                            }}
                          >
                            <h2
                              style={{
                                fontSize: "clamp(28px, 6vw, 48px)",
                                fontWeight: "700",
                                lineHeight: "1.0",
                                letterSpacing: "-0.03em",
                                color: "#000",
                                maxWidth: "95%",
                                margin: 0,
                                fontFamily: "var(--font-display)",
                              }}
                            >
                              {project.hoverText}
                            </h2>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Premium Badge */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: "24px",
                          right: "24px",
                          backgroundColor: "rgba(0,0,0,0.4)",
                          backdropFilter: "blur(20px)",
                          WebkitBackdropFilter: "blur(20px)",
                          padding: "10px 20px",
                          borderRadius: "100px",
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          color: "#fff",
                          fontSize: "13px",
                          fontWeight: "700",
                          border: "1px solid rgba(255,255,255,0.15)",
                          zIndex: 20,
                          opacity: hoveredIndex === index ? 0.2 : 1,
                          transition: "opacity 0.3s ease",
                        }}
                      >
                        <Search size={14} style={{ opacity: 0.7 }} />
                        <span style={{ trackingTight: "-0.01em" }}>
                          {project.tag}
                        </span>
                        <TrendingUp size={14} style={{ opacity: 0.7 }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

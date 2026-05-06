"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: "sixt",
    name: "SIXT",
    years: "2023-2025",
    hoverText: "Increasing brand and non brand visibility UK/ES",
    tag: "Organic search",
    hoverBg: "#ff5f00",
    image: "/images/1.jpg"
  },
  {
    id: "dojo",
    name: "Dojo - B2B",
    years: "2021-2025",
    hoverText: "A search-first B2B strategy to drive leads",
    tag: "Card Machines",
    hoverBg: "#00ffaa",
    image: "/images/2.jpg"
  },
  {
    id: "magnet",
    name: "Magnet Trade - B2B",
    years: "2023-2024",
    hoverText: "A full service SEO success story 170%+ increase",
    tag: "Kitchen Showroom",
    hoverBg: "#1a3c34",
    image: "/images/3.jpg"
  },
  {
    id: "saily",
    name: "Saily",
    years: "2023-2025",
    hoverText: "Building a global category leader in E Sims",
    tag: "E Sims",
    hoverBg: "#0055ff",
    image: "/images/4.jpg"
  },
  {
    id: "jd",
    name: "JD Sports",
    years: "2025",
    hoverText: "Dominating Google and AI search",
    tag: "Sportswear",
    hoverBg: "#000000",
    image: "/images/5.jpg"
  },
  {
    id: "pooky",
    name: "Pooky",
    years: "2025",
    hoverText: "Driving demand for Pooky Rechargeable Lights",
    tag: "Rechargeable Lights",
    hoverBg: "#ffcc00",
    image: "/images/7.jpg"
  },
  {
    id: "parkdean",
    name: "Parkdean Resorts",
    years: "2019-2025",
    hoverText: "Social search and multi channel content to #1",
    tag: "UK holidays",
    hoverBg: "#00a0a0",
    image: "/images/8.jpg"
  },
  {
    id: "revolution",
    name: "Revolution Beauty",
    years: "2022-2025",
    hoverText: "Building the UK's leading beauty dupe brand",
    tag: "Beauty Dupes",
    hoverBg: "#ff69b4",
    image: "/images/9.jpg"
  },
  {
    id: "lloyds",
    name: "Lloyds Pharmacy",
    years: "2022-23",
    hoverText: "Driving category leadership for STI tests",
    tag: "STI tests",
    hoverBg: "#008000",
    image: "/images/10.jpg"
  },
  {
    id: "plt",
    name: "PrettyLittleThing",
    years: "2021-2023",
    hoverText: "Driving discovery for everything \"outfits\" for PLT",
    tag: "Outfits",
    hoverBg: "#ffc0cb",
    image: "/images/11.jpg"
  },
  {
    id: "next",
    name: "Next",
    years: "2021-2023",
    hoverText: "Search-first content strategy for fashion",
    tag: "Fashion",
    hoverBg: "#1a1a1a",
    image: "/images/12.jpg"
  },
  {
    id: "playstation",
    name: "Playstation",
    years: "2022-2024",
    hoverText: "Increasing visibility for gaming peripherals",
    tag: "Gaming",
    hoverBg: "#003791",
    image: "/images/1.jpg"
  }
];


export default function FeaturedWork() {
  const [activeProject, setActiveProject] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  
  // Custom cursor logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 1000, damping: 50 });
  const springY = useSpring(mouseY, { stiffness: 1000, damping: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Scroll logic to highlight names
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveProject(index);
          }
        });
      },
      { threshold: 0.6 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      style={{ 
        backgroundColor: "#0a0a0a", 
        borderRadius: "48px", 
        margin: "10px", 
        padding: "100px 0",
        color: "#fff",
        position: "relative",
        overflow: "visible"
      }}
    >
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
          opacity: isHoveringImage ? 1 : 0
        }}
      >
        <span style={{ color: "#000", fontSize: "40px", fontWeight: "300" }}>↗</span>
      </motion.div>

      <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 80px", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "100px" }}>
        
        {/* Left Column: Sticky List */}
        <div style={{ position: "sticky", top: "200px", height: "fit-content", alignSelf: "start" }}>
          <div style={{ fontSize: "14px", fontWeight: "900", marginBottom: "100px", opacity: 0.9, letterSpacing: "0.05em" }}>
            Featured Work
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            {projects.map((project, index) => (
              <div
                key={project.id}
                style={{ 
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "15px",
                  transition: "opacity 0.4s ease"
                }}
              >
                <h3 
                  style={{ 
                    fontSize: "clamp(40px, 4.5vw, 70px)", 
                    fontWeight: "700", 
                    lineHeight: "0.85", 
                    letterSpacing: "-0.05em",
                    color: activeProject === index ? "#fff" : "rgba(255,255,255,0.15)",
                    transition: "color 0.4s ease",
                    margin: 0,
                    fontFamily: "var(--font-display)"
                  }}
                >
                  {project.name}
                </h3>
                <span 
                  style={{ 
                    fontSize: "13px", 
                    fontWeight: "600", 
                    color: "rgba(255,255,255,0.3)",
                    marginTop: "10px",
                    fontFamily: "var(--font-display)"
                  }}
                >
                  [{project.years}]
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Scrolling Images */}
        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {projects.map((project, index) => (
            <div 
              key={project.id}
              ref={(el) => (itemRefs.current[index] = el)}
              data-index={index}
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
                aspectRatio: "1.3", 
                borderRadius: "40px", 
                overflow: "hidden",
                backgroundColor: "#111",
                cursor: "none"
              }}
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                priority={index === 0}
                unoptimized={true}
                sizes="(max-width: 1200px) 100vw, 800px"
                style={{ objectFit: "cover" }}
              />

              {/* Hover Overlay Content */}
              <motion.div
                initial={false}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: project.hoverBg,
                  padding: "60px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  zIndex: 2,
                  pointerEvents: "none"
                }}
              >
                <h2 style={{ 
                  fontSize: "clamp(32px, 3.5vw, 48px)", 
                  fontWeight: "700", 
                  lineHeight: "1.1", 
                  letterSpacing: "-0.03em",
                  fontFamily: "var(--font-display)",
                  color: "#000",
                  maxWidth: "90%"
                }}>
                  {project.hoverText}
                </h2>
              </motion.div>
              
              {/* Pill Tag */}
              <div 
                style={{ 
                  position: "absolute", 
                  bottom: "30px", 
                  right: "30px", 
                  backgroundColor: "rgba(255,255,255,0.4)", 
                  backdropFilter: "blur(12px)",
                  padding: "10px 20px",
                  borderRadius: "100px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#000",
                  fontSize: "14px",
                  fontWeight: "700",
                  border: "1px solid rgba(255,255,255,0.2)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                  zIndex: 3,
                  opacity: hoveredIndex === index ? 0 : 1,
                  transition: "opacity 0.3s ease"
                }}
              >
                <span style={{ fontSize: "16px" }}>🔍</span>
                {project.tag}
                <span style={{ fontSize: "16px" }}>📈</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



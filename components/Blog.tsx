"use client";
import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    category: "Rise at Seven",
    title: "Organic media planning: Why search is the new full-funnel media channel",
    image: "/images/1.jpg",
    date: "14 Feb 2025"
  },
  {
    id: 2,
    category: "Rise at Seven",
    title: "Google is changing. Your SEO strategy should too.",
    image: "/images/2.jpg",
    date: "10 Feb 2025"
  },
  {
    id: 3,
    category: "Rise at Seven",
    title: "How to win at Digital PR in 2025",
    image: "/images/3.jpg",
    date: "05 Feb 2025"
  }
];

function BlogCard({ post, isMobile }: { post: any, isMobile: boolean }) {
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        backgroundColor: "#fff",
        borderRadius: isMobile ? "24px" : "32px",
        padding: isMobile ? "24px" : "40px",
        height: isMobile ? "auto" : "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        border: "1px solid rgba(0,0,0,0.05)"
      }}
    >
      {!isMobile && (
        <motion.div
          style={{
            position: "absolute",
            width: "300px",
            height: "200px",
            borderRadius: "20px",
            overflow: "hidden",
            pointerEvents: "none",
            zIndex: 1,
            x: springX,
            y: springY,
            marginLeft: "-150px",
            marginTop: "-100px",
            scale: isHovering ? 1 : 0,
            opacity: isHovering ? 1 : 0,
          }}
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            unoptimized
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      )}

      {isMobile && (
        <div style={{ width: "100%", height: "200px", borderRadius: "16px", overflow: "hidden", marginBottom: "20px", position: "relative" }}>
           <Image src={post.image} alt={post.title} fill unoptimized style={{ objectFit: "cover" }} />
        </div>
      )}

      <div style={{ position: "relative", zIndex: 2 }}>
        <span style={{ fontSize: "12px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.05em", opacity: 0.5 }}>
          {post.category}
        </span>
        <h3 style={{ 
          fontSize: isMobile ? "24px" : "32px", 
          fontWeight: "700", 
          marginTop: "16px", 
          lineHeight: "1.1",
          letterSpacing: "-0.02em"
        }}>
          {post.title}
        </h3>
      </div>

      <div style={{ position: "relative", zIndex: 2, display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: isMobile ? "24px" : "0" }}>
        <span style={{ fontSize: "14px", opacity: 0.4 }}>{post.date}</span>
        <div style={{ 
          width: "40px", 
          height: "40px", 
          borderRadius: "50%", 
          border: "1px solid rgba(0,0,0,0.1)", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center",
          fontSize: "18px"
        }}>
          ↗
        </div>
      </div>
    </div>
  );
}

export default function Blog() {
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
        padding: isMobile ? "60px 20px" : "100px 40px",
        minHeight: "600px"
      }}
    >
      {mounted && (
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: isMobile ? "40px" : "60px" }}>
            <div>
              <span style={{ fontSize: "12px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.5 }}>
                Our Thoughts
              </span>
              <h2 style={{ 
                fontSize: isMobile ? "42px" : "60px", 
                fontWeight: "600", 
                margin: "10px 0 0 0",
                fontFamily: "var(--font-display)",
                letterSpacing: "-0.03em"
              }}>
                What&apos;s New
              </h2>
            </div>
            {!isMobile && (
              <button style={{ 
                backgroundColor: "#fff", 
                border: "1px solid rgba(0,0,0,0.1)", 
                padding: "12px 28px", 
                borderRadius: "100px", 
                fontWeight: "700",
                cursor: "pointer"
              }}>
                View All Posts ↗
              </button>
            )}
          </div>

          <div style={{ 
            display: "grid", 
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", 
            gap: "20px" 
          }}>
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} isMobile={isMobile} />
            ))}
          </div>
          
          {isMobile && (
            <button style={{ 
              backgroundColor: "#fff", 
              border: "1px solid rgba(0,0,0,0.1)", 
              padding: "16px 32px", 
              borderRadius: "100px", 
              fontWeight: "700",
              width: "100%",
              marginTop: "32px",
              cursor: "pointer"
            }}>
              View All Posts ↗
            </button>
          )}
        </div>
      )}
    </section>
  );
}

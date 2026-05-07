"use client";
import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    category: "Rise at Seven Blog",
    location: "Manchester HQ",
    title: "Rise at Seven Exits Sheffield and Triples Manchester as new HQ as they go for global expansion",
    image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 2,
    category: "Rise at Seven",
    location: "Sheffield",
    title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 3,
    category: "Blog Post",
    location: "PR & SEO",
    title: "Rise at Seven Appointed by Cadbury's to Drive Demand and Retail Growth for them in the Chocolate Confectionary Category",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1200",
  }
];

function BlogCard({ post, isMobile }: { post: any, isMobile: boolean }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", cursor: "pointer" }}>
      {/* Image Container */}
      <div style={{ 
        width: "100%", 
        aspectRatio: "1/1", 
        borderRadius: "16px", 
        overflow: "hidden", 
        position: "relative",
        backgroundColor: "#e0e0e0"
      }}>
        <Image 
          src={post.image} 
          alt={post.title} 
          fill 
          unoptimized 
          style={{ objectFit: "cover", transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)" }} 
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
        />
      </div>

      {/* Content */}
      <div style={{ padding: "0 4px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px", opacity: 0.6 }}>
           <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
             <div style={{ width: "12px", height: "12px", borderRadius: "50%", border: "1px solid #000" }} />
             <span style={{ fontSize: "11px", fontWeight: "700" }}>{post.category}</span>
           </div>
           <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
             <span style={{ fontSize: "14px" }}>📍</span>
             <span style={{ fontSize: "11px", fontWeight: "700" }}>{post.location}</span>
           </div>
        </div>
        <h3 style={{ 
          fontSize: isMobile ? "18px" : "20px", 
          fontWeight: "700", 
          lineHeight: "1.3",
          letterSpacing: "-0.01em",
          color: "#000",
          margin: 0
        }}>
          {post.title}
        </h3>
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
        backgroundColor: "#f5f5f5",
        padding: isMobile ? "60px 20px" : "100px 40px",
        minHeight: "600px",
        borderTop: "1px solid rgba(0,0,0,0.05)"
      }}
    >
      {mounted && (
        <div style={{ maxWidth: "1600px", margin: "0 auto" }}>
          {/* Header */}
          <div style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            marginBottom: isMobile ? "40px" : "60px",
            borderBottom: "1px solid rgba(0,0,0,0.1)",
            paddingBottom: "24px"
          }}>
            <h2 style={{ 
              fontSize: isMobile ? "32px" : "48px", 
              fontWeight: "700", 
              margin: 0,
              display: "flex",
              alignItems: "center",
              gap: "12px",
              letterSpacing: "-0.02em"
            }}>
              What&apos;s 
              <div style={{ 
                width: isMobile ? "32px" : "44px", 
                height: isMobile ? "32px" : "44px", 
                backgroundColor: "#000", 
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: isMobile ? "16px" : "24px"
              }}>
                🌌
              </div>
              New
            </h2>
            
            <button style={{ 
              backgroundColor: "transparent", 
              border: "1px solid rgba(0,0,0,0.2)", 
              padding: isMobile ? "8px 16px" : "10px 24px", 
              borderRadius: "100px", 
              fontWeight: "700",
              fontSize: isMobile ? "12px" : "14px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}>
              Industry Insights ↗
            </button>
          </div>

          {/* Grid */}
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", 
            gap: isMobile ? "40px" : "32px" 
          }}>
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} isMobile={isMobile} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

"use client";
import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
    image: "/images/download.png",
    author: "Carrie Rose",
    time: "2 mins",
    category: "News"
  },
  {
    id: 2,
    title: "Rise at Seven Appointed by Coneys to Drive Demand and Retail Growth for them in the Chocolate Confectionery Category",
    image: "/images/3-copy.webp",
    author: "Fay Sadik",
    time: "2 mins",
    category: "News"
  },
  {
    id: 3,
    title: "Rise at Seven Appointed by Langtins to drive demand and retail growth for Noomz",
    image: "/images/Noomz1-4.webp",
    author: "Carrie Rose",
    time: "2 mins",
    category: "Food/Hospitality/Drink",
    hasFloatingBtn: true,
    floatingBtnText: "Freeze Dried Sweets"
  }
];

function BlogCard({ post }: { post: any }) {
  const [isHovering, setIsHovering] = React.useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 1000, damping: 50 });
  const springY = useSpring(mouseY, { stiffness: 1000, damping: 50 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.div 
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -10 }}
      style={{ cursor: "none", position: "relative" }}
    >
      <div style={{ 
        width: "100%", 
        aspectRatio: "4/5", 
        borderRadius: "32px", 
        overflow: "hidden", 
        position: "relative",
        marginBottom: "24px",
        backgroundColor: "#e0e0e0"
      }}>
        <motion.div
          animate={{ filter: isHovering ? "blur(10px)" : "blur(0px)" }}
          transition={{ duration: 0.3 }}
          style={{ width: "100%", height: "100%", position: "relative" }}
        >
          <Image 
            src={post.image} 
            alt={post.title} 
            fill 
            unoptimized
            style={{ objectFit: "cover" }} 
          />
        </motion.div>
        
        {/* Custom Follower Button */}
        <motion.div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "80px",
            height: "80px",
            backgroundColor: "#c1f1e0",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            zIndex: 20,
            x: springX,
            y: springY,
            marginLeft: "-40px",
            marginTop: "-40px",
            scale: isHovering ? 1 : 0,
            opacity: isHovering ? 1 : 0,
          }}
        >
          <span style={{ color: "#000", fontSize: "24px", fontWeight: "300" }}>↗</span>
        </motion.div>

        {/* Category Badge */}
        <div style={{ 
          position: "absolute", 
          top: "20px", 
          left: "20px", 
          backgroundColor: "rgba(0,0,0,0.3)", 
          backdropFilter: "blur(10px)",
          color: "#fff",
          padding: "4px 12px",
          borderRadius: "100px",
          fontSize: "12px",
          fontWeight: "600",
          zIndex: 5
        }}>
          {post.category}
        </div>

        {/* Floating Button for 3rd card */}
        {post.hasFloatingBtn && !isHovering && (
          <div style={{ 
            position: "absolute", 
            top: "50%", 
            left: "50%", 
            transform: "translate(-50%, -50%)",
            backgroundColor: "#fff",
            padding: "10px 20px",
            borderRadius: "100px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            fontSize: "14px",
            fontWeight: "700",
            zIndex: 10
          }}>
            <span style={{ fontSize: "16px" }}>🔍</span> {post.floatingBtnText} <span style={{ opacity: 0.5 }}>↗</span>
          </div>
        )}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", opacity: 0.6, fontSize: "13px" }}>
        <div style={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "#ccc" }}></div>
        <span>{post.author}</span>
        <span>•</span>
        <span>{post.time}</span>
      </div>

      <h3 style={{ 
        fontSize: "20px", 
        fontWeight: "700", 
        lineHeight: "1.3", 
        letterSpacing: "-0.01em",
        margin: 0
      }}>
        {post.title}
      </h3>
    </motion.div>
  );
}

export default function Blog() {
  return (
    <section style={{ backgroundColor: "#f2f2f2", padding: "100px 40px" }}>
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        marginBottom: "60px",
        borderTop: "1px solid rgba(0,0,0,0.05)",
        paddingTop: "40px"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h2 style={{ fontSize: "60px", fontWeight: "700", margin: 0, fontFamily: "var(--font-display)" }}>
            What&apos;s New
          </h2>
          <div style={{ 
            width: "30px", 
            height: "30px", 
            borderRadius: "50%", 
            backgroundColor: "#000", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            marginTop: "10px"
          }}>
             <div style={{ width: "15px", height: "15px", borderRadius: "50%", backgroundColor: "#c1f1e0" }}></div>
          </div>
        </div>
        <button style={{ 
          backgroundColor: "#fff", 
          border: "1px solid rgba(0,0,0,0.1)", 
          borderRadius: "100px", 
          padding: "10px 24px", 
          fontSize: "14px", 
          fontWeight: "600",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}>
          Explore More Thoughts <span>↗</span>
        </button>
      </div>

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(3, 1fr)", 
        gap: "30px" 
      }}>
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}


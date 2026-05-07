"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);
    checkMobile();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: isMobile ? "10px" : "20px",
          left: "50%",
          transform: "translateX(-50%)",
          width: isMobile ? "calc(100% - 20px)" : "calc(100% - 40px)",
          maxWidth: "1440px",
          height: isMobile ? "60px" : "80px",
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.8)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderRadius: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: isMobile ? "0 20px" : "0 40px",
          zIndex: 1000,
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          border: scrolled ? "1px solid rgba(0,0,0,0.05)" : "1px solid transparent",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: isMobile ? "32px" : "40px",
              height: isMobile ? "32px" : "40px",
              backgroundColor: "#000",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: "900",
              fontSize: isMobile ? "18px" : "22px",
            }}
          >
            7
          </div>
          <span
            style={{
              fontWeight: "800",
              fontSize: isMobile ? "18px" : "22px",
              letterSpacing: "-0.03em",
              color: scrolled ? "#000" : "#fff",
              transition: "color 0.4s",
            }}
          >
            rise at seven
          </span>
        </div>

        {/* Desktop Links */}
        {!isMobile && mounted && (
          <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  color: scrolled ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.8)",
                  textDecoration: "none",
                  transition: "all 0.3s",
                }}
              >
                {link.name}
              </a>
            ))}
            <button
              style={{
                backgroundColor: scrolled ? "#000" : "#fff",
                color: scrolled ? "#fff" : "#000",
                padding: "12px 28px",
                borderRadius: "100px",
                border: "none",
                fontSize: "15px",
                fontWeight: "700",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            >
              Get in touch
            </button>
          </div>
        )}

        {/* Mobile Toggle */}
        {isMobile && mounted && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: scrolled ? "#000" : "#fff",
              border: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "4px",
              cursor: "pointer",
            }}
          >
            <div style={{ width: "18px", height: "2px", backgroundColor: scrolled ? "#fff" : "#000", transform: isOpen ? "rotate(45deg) translateY(4px)" : "none", transition: "0.3s" }} />
            <div style={{ width: "18px", height: "2px", backgroundColor: scrolled ? "#fff" : "#000", opacity: isOpen ? 0 : 1, transition: "0.3s" }} />
            <div style={{ width: "18px", height: "2px", backgroundColor: scrolled ? "#fff" : "#000", transform: isOpen ? "rotate(-45deg) translateY(-4px)" : "none", transition: "0.3s" }} />
          </button>
        )}
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "#fff",
              zIndex: 999,
              padding: "100px 30px 40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={link.href}
                  style={{
                    fontSize: "42px",
                    fontWeight: "700",
                    color: "#000",
                    textDecoration: "none",
                    letterSpacing: "-0.04em",
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
               <p style={{ opacity: 0.5, fontSize: "14px" }}>Email us: hello@riseatseven.com</p>
               <button style={{ 
                 backgroundColor: "#000", 
                 color: "#fff", 
                 padding: "20px", 
                 borderRadius: "100px",
                 fontSize: "18px",
                 fontWeight: "700"
               }}>
                 Get in touch
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services +", href: "#" },
  { label: "Industries +", href: "#" },
  { label: "International +", href: "#" },
  { label: "About +", href: "#" },
  { label: "Work", href: "#work", badge: "25" },
  { label: "Careers", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Webinar", href: "#" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <div 
        style={{
          padding: "10px 30px",
          position: "relative",
          zIndex: 50,
        }}
      >
        <div 
          style={{
            maxWidth: "1500px",
            margin: "0 auto",
            backgroundColor: "#c1f1e0",
            color: "#000",
            textAlign: "center",
            fontSize: "12px",
            fontWeight: "700",
            padding: "10px 20px",
            borderRadius: "100px",
            letterSpacing: "-0.01em",
            cursor: "pointer",
          }}
        >
          🚨 The Category Leaderboard - Live Now
        </div>
      </div>

      {/* Main Nav */}
      <header
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          zIndex: 40,
          width: "100%",
          transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
          top: scrolled ? "10px" : "60px",
          padding: "0 40px",
        }}
      >
        <div 
          style={{
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "between",
            transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
            maxWidth: scrolled ? "1200px" : "100%",
            backgroundColor: scrolled ? "rgba(255, 255, 255, 0.95)" : "transparent",
            backdropFilter: scrolled ? "blur(20px)" : "none",
            padding: scrolled ? "12px 30px" : "20px 0",
            borderRadius: scrolled ? "100px" : "0",
            boxShadow: scrolled ? "0 8px 30px rgba(0,0,0,0.08)" : "none",
            display: "flex",
            width: "100%",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              transition: "color 0.3s",
              color: scrolled ? "#000" : "#fff",
              fontSize: "26px",
              fontWeight: "800",
              letterSpacing: "-0.05em",
              fontFamily: "var(--font-display)",
              textDecoration: "none",
              marginRight: "auto",
            }}
          >
            Rise at Seven
          </Link>

          {/* Desktop Links */}
          <nav 
            className="hidden lg:flex" 
            style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "24px",
              margin: "0 auto" 
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  fontSize: "13px",
                  fontWeight: "700",
                  color: scrolled ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.9)",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                {link.label}
                {link.badge && (
                  <span 
                    style={{
                      backgroundColor: "#c1f1e0",
                      color: "#000",
                      fontSize: "9px",
                      fontWeight: "900",
                      padding: "2px 6px",
                      borderRadius: "100px",
                      height: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link
            href="#contact"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "14px",
              fontWeight: "700",
              padding: "12px 28px",
              borderRadius: "100px",
              transition: "all 0.3s",
              backgroundColor: scrolled ? "#000" : "#fff",
              color: scrolled ? "#fff" : "#000",
              textDecoration: "none",
              boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
              marginLeft: "auto",
            }}
          >
            Get In Touch <span style={{ fontSize: "18px", lineHeight: 1 }}>↗</span>
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="xl:hidden"
            style={{
              padding: "8px",
              color: scrolled ? "#000" : "#fff",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 100,
              backgroundColor: "#000",
              display: "flex",
              flexDirection: "column",
              padding: "40px",
              overflowY: "auto",
            }}
          >
            <div 
              style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center", 
                marginBottom: "60px" 
              }}
            >
              <span
                style={{ 
                  color: "#fff", 
                  fontSize: "24px", 
                  fontWeight: "800", 
                  fontFamily: "var(--font-display)" 
                }}
              >
                Rise at Seven
              </span>
              <button 
                onClick={() => setMobileOpen(false)} 
                style={{ color: "#fff", background: "none", border: "none" }}
              >
                <X size={28} />
              </button>
            </div>
            <nav style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href="#"
                    onClick={() => setMobileOpen(false)}
                    style={{
                      fontSize: "40px",
                      fontWeight: "900",
                      color: "#fff",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      fontFamily: "var(--font-display)",
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {link.label}
                    {link.badge && (
                      <span 
                        style={{
                          backgroundColor: "#c1f1e0",
                          color: "#000",
                          fontSize: "12px",
                          fontWeight: "900",
                          padding: "2px 10px",
                          borderRadius: "100px",
                        }}
                      >
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}



"use client";
import React from "react";

export default function Footer() {
  const socialIcons = [
    { name: "f", icon: "f" },
    { name: "X", icon: "X" },
    { name: "in", icon: "in" },
    { name: "y", icon: "y" },
    { name: "t", icon: "t" },
    { name: "i", icon: "i" }
  ];

  const columns = [
    {
      title: "Services",
      links: ["Services", "Work", "About", "Culture", "Meet The Risers"]
    },
    {
      title: "Resources",
      links: ["Testimonials", "Blog", "Webinars", "Careers"]
    },
    {
      title: "Locations",
      links: ["Sheffield", "Manchester", "London", "New York", "Contact"]
    }
  ];

  return (
    <footer style={{ 
      backgroundColor: "#000", 
      color: "#fff", 
      padding: "100px 60px 40px 60px",
      borderRadius: "48px 48px 0 0",
      marginTop: "-48px",
      position: "relative",
      zIndex: 10,
      fontFamily: "Inter, sans-serif"
    }}>
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between",
        gap: "40px",
        marginBottom: "120px",
        flexWrap: "wrap"
      }}>
        {/* Newsletter & Socials */}
        <div style={{ flex: "1 1 350px", maxWidth: "450px" }}>
          <h4 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "32px", letterSpacing: "-0.02em" }}>
            Stay updated with Rise news
          </h4>
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            backgroundColor: "#1a1a1a", 
            borderRadius: "100px", 
            padding: "10px 10px 10px 30px",
            marginBottom: "32px",
            border: "1px solid rgba(255,255,255,0.05)"
          }}>
            <input 
              type="email" 
              placeholder="Your Email Address" 
              style={{ 
                backgroundColor: "transparent", 
                border: "none", 
                color: "#fff", 
                outline: "none",
                width: "100%",
                fontSize: "16px"
              }} 
            />
            <button style={{ 
              backgroundColor: "#c1f1e0", 
              border: "none", 
              borderRadius: "50%", 
              width: "48px", 
              height: "48px", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0
            }}>
              <span style={{ color: "#000", fontWeight: "bold", fontSize: "18px" }}>↗</span>
            </button>
          </div>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {socialIcons.map((social, i) => (
              <div key={i} style={{ 
                backgroundColor: "#fff", 
                color: "#000", 
                padding: "4px 12px",
                borderRadius: "100px", 
                display: "flex", 
                alignItems: "center", 
                gap: "4px",
                fontSize: "13px",
                fontWeight: "700",
                cursor: "pointer"
              }}>
                {social.icon} <span style={{ fontSize: "10px", opacity: 0.6 }}>↗</span>
              </div>
            ))}
          </div>
        </div>

        {/* Links Columns */}
        <div style={{ display: "flex", gap: "80px", flexWrap: "wrap" }}>
          {columns.map((col, idx) => (
            <div key={idx} style={{ minWidth: "150px" }}>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {col.links.map((link, lIdx) => (
                  <li key={lIdx} style={{ 
                    fontSize: "18px", 
                    fontWeight: "600", 
                    cursor: "pointer", 
                    opacity: lIdx === 0 ? 1 : 0.8,
                    marginBottom: lIdx === 0 ? "8px" : 0
                  }}>
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Massive Logo Text */}
      <div style={{ 
        borderTop: "1px solid rgba(255,255,255,0.08)",
        paddingTop: "60px",
        marginBottom: "60px"
      }}>
        <div style={{ position: "relative" }}>
          <h1 style={{ 
            fontSize: "16vw", 
            fontWeight: "700", 
            margin: 0, 
            lineHeight: "0.8",
            letterSpacing: "-0.05em",
            fontFamily: "var(--font-display)",
            display: "flex",
            alignItems: "baseline",
            whiteSpace: "nowrap"
          }}>
            Rise at Seven
            <span style={{ 
              fontSize: "3vw", 
              border: "2px solid #fff", 
              borderRadius: "50%", 
              width: "5vw", 
              height: "5vw", 
              display: "inline-flex", 
              alignItems: "center", 
              justifyContent: "center",
              marginLeft: "2vw",
              fontWeight: "900"
            }}>R</span>
          </h1>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center",
        fontSize: "12px",
        opacity: 0.5,
        paddingBottom: "20px"
      }}>
        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          <span>© 2025 Rise at Seven Ltd. All rights reserved</span>
          <span>•</span>
          <span>Company Number 11955187</span>
          <span>•</span>
          <span>VAT Registered GB 322402945</span>
          <span>•</span>
          <span style={{ cursor: "pointer" }}>Privacy Policy</span>
          <span>•</span>
          <span style={{ cursor: "pointer" }}>Terms & conditions</span>
        </div>
        <div>
          <span>Website MadeByShape</span>
        </div>
      </div>
    </footer>
  );
}


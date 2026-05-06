"use client";
import React from "react";

export default function Footer() {
  return (
    <footer style={{ 
      backgroundColor: "#000", 
      color: "#fff", 
      padding: "80px 40px 40px 40px",
      borderRadius: "48px 48px 0 0",
      marginTop: "-48px",
      position: "relative",
      zIndex: 10
    }}>
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(4, 1fr)", 
        gap: "40px",
        marginBottom: "100px"
      }}>
        {/* Newsletter & Socials */}
        <div style={{ gridColumn: "span 1" }}>
          <h4 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "24px" }}>
            Stay updated with Rise news
          </h4>
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            backgroundColor: "#222", 
            borderRadius: "100px", 
            padding: "8px 8px 8px 24px",
            marginBottom: "24px"
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
                fontSize: "14px"
              }} 
            />
            <button style={{ 
              backgroundColor: "#c1f1e0", 
              border: "none", 
              borderRadius: "50%", 
              width: "40px", 
              height: "40px", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              cursor: "pointer"
            }}>
              <span style={{ color: "#000", fontWeight: "bold" }}>↗</span>
            </button>
          </div>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {["f", "X", "in", "y", "t", "i"].map((icon, i) => (
              <div key={i} style={{ 
                backgroundColor: "#fff", 
                color: "#000", 
                width: "32px", 
                height: "20px", 
                borderRadius: "10px", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                fontSize: "12px",
                fontWeight: "bold",
                cursor: "pointer"
              }}>
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* Links Column 1 */}
        <div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
            {["Services", "Work", "About", "Culture", "Meet The Risers"].map((link) => (
              <li key={link} style={{ fontSize: "16px", fontWeight: "600", cursor: "pointer", opacity: 0.8 }}>{link}</li>
            ))}
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
            {["Testimonials", "Blog", "Webinars", "Careers"].map((link) => (
              <li key={link} style={{ fontSize: "16px", fontWeight: "600", cursor: "pointer", opacity: 0.8 }}>{link}</li>
            ))}
          </ul>
        </div>

        {/* Links Column 3 */}
        <div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
            {["Sheffield", "Manchester", "London", "New York", "Contact"].map((link) => (
              <li key={link} style={{ fontSize: "16px", fontWeight: "600", cursor: "pointer", opacity: 0.8 }}>{link}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Massive Logo Text */}
      <div style={{ 
        borderTop: "1px solid rgba(255,255,255,0.1)",
        paddingTop: "40px",
        marginBottom: "40px"
      }}>
        <h1 style={{ 
          fontSize: "14vw", 
          fontWeight: "700", 
          margin: 0, 
          lineHeight: "0.8",
          letterSpacing: "-0.04em",
          fontFamily: "var(--font-display)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline"
        }}>
          Rise at Seven <span style={{ fontSize: "4vw", verticalAlign: "top" }}>®</span>
        </h1>
      </div>

      {/* Bottom Bar */}
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center",
        fontSize: "12px",
        opacity: 0.6
      }}>
        <div style={{ display: "flex", gap: "20px" }}>
          <span>© 2025 Rise at Seven Ltd. All rights reserved</span>
          <span>Company Number 11955187</span>
          <span>VAT Registered GB 322402945</span>
          <span style={{ textDecoration: "underline", cursor: "pointer" }}>Privacy Policy</span>
          <span style={{ textDecoration: "underline", cursor: "pointer" }}>Terms & conditions</span>
        </div>
        <div>
          <span>Website MadeByShape</span>
        </div>
      </div>
    </footer>
  );
}

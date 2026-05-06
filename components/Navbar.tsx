"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", hasPlus: true },
  { label: "International", hasPlus: true },
  { label: "About", hasPlus: true },
  { label: "Work", badge: "21" },
  { label: "Careers" },
  { label: "Blog" },
  { label: "Webinar" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Announcement Bar */}
      <div className="px-[30px] py-3 relative z-50">
        <div className="max-w-[1500px] mx-auto bg-mint text-black text-center text-[10px] sm:text-[12px] font-bold py-2.5 px-8 rounded-full tracking-tight shadow-sm cursor-pointer hover:bg-mint/80 transition-colors">
          🎉 Where are your customers actually searching?{" "}
          <span className="underline ml-1">Download the report</span>
        </div>
      </div>

      {/* Main Nav */}
      <header
        className={`fixed left-0 right-0 z-40 w-full transition-all duration-700 ease-[0.16, 1, 0.3, 1] ${
          scrolled 
            ? "top-4 px-[30px]" 
            : "top-[70px] px-[30px]"
        }`}
      >
        <div 
          className={`mx-auto flex items-center justify-between transition-all duration-700 ease-[0.16, 1, 0.3, 1] ${
            scrolled 
              ? "max-w-[1200px] bg-white/95 backdrop-blur-xl py-3 px-8 rounded-[50px] shadow-[0_8px_30px_rgb(0,0,0,0.04)]" 
              : "max-w-[1500px] bg-transparent py-4 sm:py-6 px-[50px]"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className={`transition-colors duration-300 flex items-center ${
              scrolled ? "text-black" : "text-white"
            } text-[22px] sm:text-[28px] font-medium tracking-[-0.04em]`}
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span>Rise at Seven</span>
            <sup className="text-[10px] ml-1 opacity-70">®</sup>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={`#${link.label.toLowerCase()}`}
                className={`text-[13px] font-bold transition-all flex items-center gap-0.5 ${
                  scrolled ? "text-black hover:opacity-60" : "text-white hover:opacity-70"
                }`}
              >
                {link.label}
                {link.hasPlus && (
                  <span className={`${scrolled ? "text-black/40" : "text-white/50"} text-xs ml-0.5`}>+</span>
                )}
                {link.badge && (
                  <span className={`${
                    scrolled ? "bg-black text-white" : "bg-mint text-black"
                  } text-[9px] font-black px-1.5 py-0.5 rounded-full ml-1 h-4 flex items-center justify-center`}>
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
            <Link
              href="#contact"
              className={`ml-4 text-[13px] font-bold px-7 py-3 rounded-full transition-all flex items-center gap-2 group ${
                scrolled 
                  ? "bg-black text-white hover:bg-black/80" 
                  : "bg-white text-black hover:bg-mint"
              }`}
            >
              Get In Touch <span className="text-[16px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className={`xl:hidden p-2 transition-colors ${scrolled ? "text-black" : "text-white"}`}
            aria-label="Open menu"
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
            className="fixed inset-0 z-50 bg-black flex flex-col p-6 sm:p-10 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-16">
              <span
                className="text-white text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Rise at Seven<sup className="text-[10px] ml-0.5">®</sup>
              </span>
              <button onClick={() => setMobileOpen(false)} className="text-white p-2">
                <X size={28} />
              </button>
            </div>
            <nav className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={`#${link.label.toLowerCase()}`}
                    onClick={() => setMobileOpen(false)}
                    className="text-4xl sm:text-5xl font-black text-white flex items-center gap-3"
                    style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.04em" }}
                  >
                    {link.label}
                    {link.badge && (
                      <span className="bg-[#c1f1e0] text-black text-xs font-black px-2 py-0.5 rounded-full">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto pt-16">
              <Link
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center bg-white text-black text-lg font-bold py-5 rounded-full hover:bg-[#c1f1e0] transition-colors"
              >
                Get In Touch ↗
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


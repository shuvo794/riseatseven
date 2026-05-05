"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", hasPlus: true },
  { label: "International", hasPlus: true },
  { label: "About", hasPlus: true },
  { label: "Work", badge: "25" },
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
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Announcement Bar */}
      <div className="w-full bg-[#a8f0d8] text-black text-center text-xs font-bold py-2.5 px-4 z-50 relative">
        🚨 Where are your customers actually searching?{" "}
        <span className="underline cursor-pointer">Download the report</span>
      </div>

      {/* Main Nav */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled ? "bg-black" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-5">
          {/* Logo */}
          <Link href="/" className="text-white text-2xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Rise at Seven<sup className="text-[10px] ml-0.5">®</sup>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={`#${link.label.toLowerCase()}`}
                className="text-sm font-semibold text-white/90 hover:text-white transition-colors flex items-center gap-1"
              >
                {link.label}
                {link.hasPlus && <span className="text-white/50 text-xs">+</span>}
                {link.badge && (
                  <span className="bg-[#a8f0d8] text-black text-[10px] font-black px-1.5 py-0.5 rounded-full leading-none">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
            <Link
              href="#contact"
              className="ml-2 bg-white text-black text-sm font-bold px-6 py-2.5 rounded-full hover:bg-[#a8f0d8] transition-colors flex items-center gap-1.5"
            >
              Get in touch <span className="text-base leading-none">↗</span>
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="xl:hidden text-white"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 bg-black flex flex-col px-8 py-8 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="text-white text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                Rise at Seven<sup className="text-[10px] ml-0.5">®</sup>
              </span>
              <button onClick={() => setMobileOpen(false)} className="text-white">
                <X size={28} />
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={`#${link.label.toLowerCase()}`}
                    onClick={() => setMobileOpen(false)}
                    className="text-5xl font-black text-white flex items-center gap-3 hover:text-[#a8f0d8] transition-colors"
                    style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
                  >
                    {link.label}
                    {link.badge && (
                      <span className="bg-[#a8f0d8] text-black text-sm font-black px-2 py-0.5 rounded-full">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto pt-12">
              <Link
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center bg-white text-black text-lg font-bold py-4 rounded-full hover:bg-[#a8f0d8] transition-colors"
              >
                Get in touch ↗
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

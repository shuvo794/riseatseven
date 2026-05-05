"use client";
import React from "react";
import Link from "next/link";
import { FaInstagram, FaXTwitter, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { motion } from "framer-motion";

const footerLinks = {
  "Services": ["Content Marketing", "SEO", "Digital PR", "Paid Media", "Social & Influencer"],
  "Company": ["About", "Work", "Careers", "Blog", "Webinar"],
  "International": ["UK", "USA", "Europe", "Contact"],
};

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-10 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto">
        {/* Big CTA */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-[12vw] md:text-[8vw] lg:text-[6vw] font-black text-white tracking-[-0.04em] leading-none mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Let&apos;s build
              <br />
              <span className="text-[#a8f0d8]">something big.</span>
            </h2>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-base hover:bg-[#a8f0d8] transition-colors"
            >
              Get in touch ↗
            </Link>
          </motion.div>

          {/* Footer link columns */}
          <div className="flex flex-wrap gap-12 lg:gap-16">
            {Object.entries(footerLinks).map(([col, links]) => (
              <div key={col}>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/40 mb-5">
                  {col}
                </p>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-sm font-semibold text-white/70 hover:text-white transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-6">
          <p className="text-sm font-bold text-white">
            Rise at Seven<sup className="text-[10px] ml-0.5">®</sup>
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-5">
            {[FaInstagram, FaXTwitter, FaLinkedin, FaYoutube].map((Icon, i) => (
              <Link
                key={i}
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all"
              >
                <Icon size={16} />
              </Link>
            ))}
          </div>

          <p className="text-xs text-white/30 font-medium">
            © 2025 Rise at Seven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

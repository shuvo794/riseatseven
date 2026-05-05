"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

import { MagneticButton } from "./MagneticButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "International", href: "#international" },
    { name: "News", href: "#news" },
    { name: "Careers", href: "#careers" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-6 lg:px-12",
          scrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent"
        )}
      >
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-display font-black tracking-tighter">
            RISE<span className="text-brand-mint">AT</span>SEVEN
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className="text-sm font-semibold uppercase tracking-wider hover:text-brand-mint transition-colors flex items-center"
                >
                  {link.name}
                  {link.name === "International" && (
                    <span className="ml-1 text-[10px] bg-brand-mint text-brand-dark px-1.5 py-0.5 rounded-full">NEW</span>
                  )}
                </Link>
                
                {link.name === "International" && (
                  <div className="absolute top-full left-0 mt-4 w-[400px] bg-white text-brand-dark p-8 rounded-3xl opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-2xl">
                    <h4 className="font-display font-black text-2xl mb-4">WE ARE GLOBAL</h4>
                    <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                      With offices in Sheffield, London, Manchester, and New York, we help brands grow internationally.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-brand-grey p-4 rounded-xl font-bold text-xs uppercase tracking-widest">UK & Europe</div>
                      <div className="bg-brand-grey p-4 rounded-xl font-bold text-xs uppercase tracking-widest">North America</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <MagneticButton>
              <button className="bg-brand-mint text-brand-dark px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform">
                Get in touch
              </button>
            </MagneticButton>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-white"
          >
            <Menu size={32} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-brand-dark flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-display font-black tracking-tighter">
                RISE<span className="text-brand-mint">AT</span>SEVEN
              </span>
              <button onClick={() => setIsOpen(false)}>
                <X size={32} />
              </button>
            </div>

            <nav className="flex flex-col space-y-4 mt-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col"
                >
                  <div className="flex justify-between items-center group cursor-pointer" 
                       onClick={() => {
                         if (link.name === "Services" || link.name === "International") {
                           // Toggle logic could go here if we had state
                         } else {
                           setIsOpen(false);
                         }
                       }}>
                    <Link
                      href={link.href}
                      className="text-4xl font-display font-black uppercase hover:text-brand-mint transition-colors"
                    >
                      {link.name}
                    </Link>
                    {(link.name === "Services" || link.name === "International") && (
                      <span className="text-brand-mint text-2xl">+</span>
                    )}
                  </div>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <button className="bg-brand-mint text-brand-dark w-full py-5 rounded-full font-bold text-lg uppercase tracking-widest mt-12">
                  Get in touch
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

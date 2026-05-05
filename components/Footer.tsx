"use client";

import React from "react";
import Link from "next/link";
import { FaInstagram, FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/10 py-24 lg:py-32 px-6 lg:px-12">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          <div>
            <h2 className="text-5xl lg:text-7xl font-display font-black leading-none mb-12">
              LET'S <br /> MAKE IT <br /> <span className="text-brand-mint">RISE.</span>
            </h2>
            <div className="flex space-x-6">
              {[FaInstagram, FaXTwitter, FaLinkedin, FaGithub].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-mint hover:text-brand-dark hover:border-brand-mint transition-all"
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div className="flex flex-col space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">Explore</h4>
              <Link href="#" className="text-lg hover:text-brand-mint transition-colors">Work</Link>
              <Link href="#" className="text-lg hover:text-brand-mint transition-colors">Services</Link>
              <Link href="#" className="text-lg hover:text-brand-mint transition-colors">About Us</Link>
              <Link href="#" className="text-lg hover:text-brand-mint transition-colors">Careers</Link>
            </div>
            <div className="flex flex-col space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">Contact</h4>
              <p className="text-lg">hello@riseatseven.com</p>
              <p className="text-lg">+44 (0) 114 213 4455</p>
              <p className="text-lg mt-4 text-gray-400">
                Sheffield • London • <br /> Manchester • New York
              </p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-semibold uppercase tracking-widest">
          <p>© 2024 RISE AT SEVEN. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

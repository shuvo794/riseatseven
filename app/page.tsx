"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import Services from "@/components/Services";
import Awards from "@/components/Awards";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-dark overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeaturedWork />
      <Awards />
      <Testimonials />
      <Services />
      <Blog />
      <Footer />
    </main>
  );
}

"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DrivingDemand from "@/components/DrivingDemand";
import FeaturedWork from "@/components/FeaturedWork";
import OurServices from "@/components/OurServices";
import TextSlider from "@/components/TextSlider";
import Legacy from "@/components/Legacy";
import Blog from "@/components/Blog";
import ReadyToRise from "@/components/ReadyToRise";
import Footer from "@/components/Footer";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <main
      style={{
        maxWidth: "1536px",
        margin: "0 auto",
        paddingTop: isMobile ? "40px" : "60px",
        paddingLeft: isMobile ? "16px" : "32px",
        paddingRight: isMobile ? "16px" : "32px",
        paddingBottom: "0",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Hero />
      <DrivingDemand />
      <FeaturedWork />
      <OurServices />
      <TextSlider />
      <Legacy />
      <Blog />
      <ReadyToRise />
      <Footer />
    </main>
  );
}

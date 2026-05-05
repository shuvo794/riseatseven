"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DrivingDemand from "@/components/DrivingDemand";
import FeaturedWork from "@/components/FeaturedWork";
import Awards from "@/components/Awards";
import Expertise from "@/components/Expertise";
import Legacy from "@/components/Legacy";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DrivingDemand />
      <FeaturedWork />
      <Awards />
      <Expertise />
      <Legacy />
      <Testimonials />
      <Blog />
      <Footer />
    </>
  );
}

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
    <main className="max-w-[1536px] mx-auto pt-6 px-4 sm:px-6 lg:px-8 pb-32">
      <Navbar />
      <Hero />
      <DrivingDemand />
      {/* <FeaturedWork />
      <Awards />
      <Expertise />
      <Legacy />
      <Testimonials />
      <Blog />
      <Footer /> */}
    </main>
  );
}

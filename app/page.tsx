"use client";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import WhyChooseUs from "./components/WhyChooseUs";
import AboutGym from "./components/AboutGym";
import Coaches from "./components/Coaches";
import Schedule from "./components/Schedule";
import ParallaxBanner from "./components/ParallaxBanner";
import Pricing from "./components/Pricing";
import Reviews from "./components/Reviews";
import Blog from "./components/Blog";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  // IntersectionObserver — add .visible class when sections enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <WhyChooseUs />
        <AboutGym />
        <Coaches />
        <Schedule />
        <ParallaxBanner />
        <Pricing />
        <Reviews />
        <Blog />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}


import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeatureSection";
import ProductDisplay from "@/components/ProductDisplay";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Reveal animations on scroll
    const revealElements = document.querySelectorAll(".reveal-text");
    
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    revealElements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ProductDisplay />
      <Footer />
    </div>
  );
};

export default Index;

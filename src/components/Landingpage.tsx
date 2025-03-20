"use client";
import * as React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import Footer from "./Footer";

function Landingpage() {
  return (
    <main className="overflow-hidden bg-stone-950">
      <Header />
      <HeroSection />
      <FeatureSection />
      <Footer />
    </main>
  );
}

export default Landingpage;

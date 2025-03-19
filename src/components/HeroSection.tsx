
import React from "react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1599148401005-fe6d7497cb5e?q=80&w=2071&auto=format&fit=crop"
          alt="Post-apocalyptic cityscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col max-w-6xl">
          <h1 className="text-7xl font-bold text-white mb-4">
            Will You Survive The <span className="text-red-600">Revolution?</span>
          </h1>
          
          <div className="mt-16 bg-black bg-opacity-70 rounded-xl p-8 max-w-3xl">
            <h2 className="text-4xl font-black text-white uppercase mb-4">PLAY DOOMPOCALYPSE</h2>
            <p className="text-xl text-white mb-6">Play On PC With The Epic Games Store.</p>
            
            <div className="flex items-center gap-4">
              <div className="flex flex-col">
                <div className="bg-white rounded-xl px-6 py-3">
                  <span className="text-xs text-gray-700 block">Get It On The Epic Games Store</span>
                  <span className="text-black font-bold text-lg">DOWNLOAD NOW</span>
                </div>
                <Button variant="secondary" className="mt-2 bg-white bg-opacity-20 text-white uppercase font-bold">
                  MORE WAYS TO PLAY
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

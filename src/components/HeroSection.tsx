
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate elements on load
    const animateElements = () => {
      setTimeout(() => {
        if (headingRef.current) {
          headingRef.current.classList.add("opacity-100", "translate-y-0");
        }
      }, 300);

      setTimeout(() => {
        if (paragraphRef.current) {
          paragraphRef.current.classList.add("opacity-100", "translate-y-0");
        }
      }, 600);

      setTimeout(() => {
        if (buttonRef.current) {
          buttonRef.current.classList.add("opacity-100", "translate-y-0");
        }
      }, 900);

      setTimeout(() => {
        if (imageRef.current) {
          imageRef.current.classList.add("opacity-100", "translate-y-0");
        }
      }, 1200);
    };

    animateElements();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container-custom flex flex-col lg:flex-row items-center">
        {/* Text content */}
        <div className="w-full lg:w-1/2 z-10 pb-16 lg:pb-0">
          <div className="max-w-xl">
            <span className="inline-block px-3 py-1 mb-6 text-xs font-medium bg-gray-100 rounded-full">
              The Future of Design
            </span>
            <h1 
              ref={headingRef}
              className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight mb-6 opacity-0 -translate-y-10 transition-all duration-700"
            >
              Beautiful Design <br />
              <span className="text-neutral-500">Simplicity in Details</span>
            </h1>
            <p 
              ref={paragraphRef}
              className="text-lg text-gray-600 mb-8 opacity-0 -translate-y-10 transition-all duration-700 delay-200"
            >
              Experience the perfect blend of minimalism and functionality. 
              Every detail meticulously crafted for an unparalleled user experience.
            </p>
            <div 
              ref={buttonRef}
              className="flex flex-wrap gap-4 opacity-0 -translate-y-10 transition-all duration-700 delay-300"
            >
              <a 
                href="#features"
                className="px-6 py-3 bg-black text-white rounded-full btn-hover hover:shadow-lg transition-shadow duration-300"
              >
                Explore Features
              </a>
              <a 
                href="#products"
                className="px-6 py-3 border border-gray-300 rounded-full btn-hover hover:bg-gray-50 transition-colors"
              >
                View Products
              </a>
            </div>
          </div>
        </div>

        {/* Image */}
        <div 
          ref={imageRef}
          className="w-full lg:w-1/2 relative h-96 lg:h-[600px] opacity-0 translate-y-10 transition-all duration-700 delay-400"
        >
          <div className="absolute top-0 right-0 w-full h-full">
            <div className="relative w-full h-full parallax-bg">
              <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-100/80 to-transparent mix-blend-overlay"></div>
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                  alt="Technology minimalism"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gray-100 rounded-full animate-float"></div>
              <div className="absolute top-10 -right-6 w-20 h-20 bg-white rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gray-100 rounded-full opacity-50 -z-10"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gray-100 rounded-full opacity-50 -z-10"></div>
    </section>
  );
};

export default HeroSection;

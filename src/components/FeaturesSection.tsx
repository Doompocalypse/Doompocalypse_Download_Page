
import React, { useEffect, useRef } from "react";
import { Check, Palette, Sparkles, Wind } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Beautiful Design",
    description: "Every element is meticulously crafted with attention to detail and pixel-perfect precision."
  },
  {
    icon: Wind,
    title: "Fluid Animations",
    description: "Subtle animations and transitions create a dynamic yet elegant user experience."
  },
  {
    icon: Sparkles,
    title: "Minimalist Approach",
    description: "Clean aesthetics and purposeful simplicity that highlights what truly matters."
  },
  {
    icon: Check,
    title: "Intuitive Interface",
    description: "User-focused design principles that make navigation and interaction effortless."
  }
];

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Setup intersection observer for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe section title
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    // Observe each feature card
    featureRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="features" className="py-20 md:py-32 bg-white">
      <div className="container-custom">
        {/* Section header */}
        <div 
          ref={sectionRef}
          className="max-w-3xl mx-auto text-center mb-16 md:mb-24 reveal-text"
        >
          <span className="inline-block px-3 py-1 mb-6 text-xs font-medium bg-gray-100 rounded-full">
            Key Features
          </span>
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Perfect Blend of Form and Function
          </h2>
          <p className="text-gray-600 text-lg">
            Discover how our commitment to minimalist design principles creates 
            a seamless and intuitive experience that delights users.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={el => featureRefs.current[index] = el}
              className="reveal-text bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-sm">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Visual separator */}
      <div className="container-custom mt-24">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </div>
    </section>
  );
};

export default FeaturesSection;

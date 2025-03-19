import React, { useEffect, useRef } from "react";
import { Check, Palette, Sparkles, Wind } from "lucide-react";
const features = [{
  icon: Palette,
  title: "Beautiful Design",
  description: "Every element is meticulously crafted with attention to detail and pixel-perfect precision."
}, {
  icon: Wind,
  title: "Fluid Animations",
  description: "Subtle animations and transitions create a dynamic yet elegant user experience."
}, {
  icon: Sparkles,
  title: "Minimalist Approach",
  description: "Clean aesthetics and purposeful simplicity that highlights what truly matters."
}, {
  icon: Check,
  title: "Intuitive Interface",
  description: "User-focused design principles that make navigation and interaction effortless."
}];
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
  return <section id="features" className="py-20 md:py-32 bg-white">
      

      {/* Visual separator */}
      <div className="container-custom mt-24">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </div>
    </section>;
};
export default FeaturesSection;
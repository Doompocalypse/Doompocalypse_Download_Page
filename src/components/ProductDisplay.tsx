
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const products = [
  {
    id: 1,
    name: "Ultra Display",
    description: "Incredibly thin and powerful display with revolutionary design.",
    imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    price: "$1,999",
    color: "bg-gray-50"
  },
  {
    id: 2,
    name: "Smart Laptop",
    description: "The most powerful laptop we've ever built with exceptional battery life.",
    imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    price: "$2,499",
    color: "bg-gray-100"
  },
  {
    id: 3,
    name: "Innovation Phone",
    description: "Breakthrough camera system with cutting-edge A15 chip.",
    imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    price: "$999",
    color: "bg-gray-50"
  }
];

const ProductDisplay = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const productRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    // Observe each product
    productRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    return () => {
      observer.disconnect();
    };
  }, []);

  // Auto-rotate through products
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProduct(prev => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <h2 className="text-4xl font-bold text-center mb-16 reveal-text">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id}
              ref={el => productRefs.current[index] = el}
              className={cn(
                "rounded-2xl p-8 transition-all duration-500 reveal-text",
                product.color,
                index === activeProduct ? "scale-105 shadow-xl" : "scale-100"
              )}
            >
              <div className="aspect-video mb-6 rounded-lg overflow-hidden">
                <img 
                  src={product.imageSrc} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">{product.price}</span>
                <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;
